
      // Define data for the popup
      var data = [
        {
           username: "No vaccine manufacturer shall be liable in a civil action for damages arising from a vaccine-related injury or death associated with the administration of a vaccine...", // Key "username" means that Magnific Popup will look for an element with class "mfp-username" in markup and will replace its inner HTML with the value.

           userWebsite_href: 'https://www.law.cornell.edu/uscode/text/42/300aa-22', // Key "userWebsite_href" means that Magnific Popup will look for an element with class "mfp-userWebsite" and will change its "href" attribute. Instead of ending "href" you may put any other attribute.

           userAvatarUrl_img: 'assets/img/thismustchange.jpg', // Prefix "_img" is special. With it Magnific Popup finds an  element "userAvatarUrl" and replaces it completely with image tag.

           userLocation: 'Reference'
        }
      //   ,

      //          {
      //      username: " ",
      //      userWebsite_href: '#',
      //      userAvatarUrl_img: '',
      //      userLocation: ' '
      //   }
     ];

     // initalize popup
     $('.reference').magnificPopup({
        key: 'my-popup',
        items: data,
        type: 'inline',
        inline: {
           // Define markup. Class names should match key names.
           markup: '<div class="white-popup"><div class="mfp-close"></div>' +
              '<a target="_blank" class="mfp-userWebsite">' +
              '<div class="mfp-userAvatarUrl"></div>' +
              '<h2 class="mfp-username"></h2>' +
              '</a>' +
              '<div class="mfp-userLocation"></div>' +
              '</div>'
        },
        gallery: {
           enabled: true
        },
        callbacks: {
           markupParse: function (template, values, item) {
              // optionally apply your own logic - modify "template" element based on data in "values"
              // console.log('Parsing:', template, values, item);
           }
        }
     });

