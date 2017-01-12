// See http://brunch.io for documentation.
module.exports = {
  config: {
    paths: {
      public: './server/static'
    },
    files: {
      javascripts: {
        joinTo: {
          'app.js': /^app/,
          'vendor.js': /^(?!app)/
        }
      },
      stylesheets: {
        joinTo: {
          'app.css': /^app/,
          'vendor.css': /^(?!app)/
        }
      }
    },
    npm: {
      globals: {
        $: 'jquery',
        jQuery: 'jquery'
      },
      styles: {
        bootstrap: ['dist/css/bootstrap.css']
      }
    },
    plugins: {
      cssmin: {}
    }
  }
};
