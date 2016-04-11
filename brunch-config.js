module.exports = {
  paths: {
    public: 'public'
  },
  files: {
    javascripts: {
      joinTo: {
        'javascripts/app.js': /^app/,
        'javascripts/vendor.js': /^vendor/
      }
    },
    stylesheets: {
      joinTo: {
        'stylesheets/app.css': /^app\/styles/
      }
    }
  },
  server: {
    hostname: '0.0.0.0'
  },
  plugins: {
    vendorize: {
      yolk: {
        include: 'dist/yolk.js'
      },
      rx: {
        include: 'dist/rx.all.js'
      }
    },
    babel: {
      ignore: /^(bower_components|vendor|node_modules|public)/
    }
  }
};
