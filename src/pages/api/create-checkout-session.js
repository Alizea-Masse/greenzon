const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
export default async (req, res) => {
    const { items, email } = req.body;
   

    const transformedItems = items.map(item => ({
        quantity: 1,
        price_data: {
            currency: 'eur',
            unit_amount: item.price * 100,
            product_data: {
                description: item.description,
                name: item.title,
                images: [item.image],
            },
        },
    }));
   
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_address_collection: {
            allowed_countries: ['FR', 'US', 'CA'],
        },
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/cancel`,
        metadata: {
            email,
            images: JSON.stringify(items.map((item) => item.image)),
        },

    });
    res.status(200).json({ id: session.id });
  


}