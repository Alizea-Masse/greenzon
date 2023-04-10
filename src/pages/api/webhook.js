import { buffer } from "micro";
import * as admin from "firebase-admin";
import { credential } from "firebase-admin";




// secure admin access to firebase
const serviceAccount = require("../../../permission.json");
 

  const app = admin.initializeApp({
    credential: credential.cert(serviceAccount),
    projectId: serviceAccount.project_id,
  });
    

// connection to stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.stripe_signing_secret;

const fulfillOrder = async (session) => {
  //console.log("Fulfilling order", session);
  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(
        `SUCCESS: Order ${session.id} has been added to the database`
      );
    });
};


export default async (req, res) => {
  if (req.method === "POST") {
    // Process a POST request
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];
//console.log(payload);
    let event;

    // Verify that the event came from Stripe
    try {
      
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
      
     
    } catch (err) {
      // On error, return the error message
      console.log(`Webhook error: ${err.message}`);
      return res.status(400).send(`Webhook error: ${err.message}`);
    }
   
    // Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      // Fulfill the purchase...
      //console.log(session);
      //console.log("Payment successful!");
    
      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`Webhook error: ${err.message}`));
    }
    
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
