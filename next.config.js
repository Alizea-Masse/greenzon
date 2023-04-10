module.exports = {
    images: {
        domains: ['links.papareact.com','fakestoreapi.com','www.canva.com'],
    },
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
          config.node = {
            fs: 'empty'
          }
        }
    
        return config
      },
      env:{
        stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
        stripe_signing_secret: process.env.STRIPE_SIGNING_SECRET
      }
    }
    
