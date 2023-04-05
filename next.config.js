module.exports = {
    images: {
        domains: ['links.papareact.com','fakestoreapi.com','www.canva.com'],
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback.fs = false;
        }
        return config;
      },
    }
}