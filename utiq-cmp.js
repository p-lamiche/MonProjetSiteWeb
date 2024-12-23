(function() {
    var isUtiqInitialized = false;
  
    var triggerUtiq = function() {
      (() => {
        if (!isUtiqInitialized) {
          isUtiqInitialized = true;
          const s = document.createElement("script");
          s.type = "text/javascript";
          // Replace with the corresponding subdomain -DONE
          s.src = "http://utiq.plamiche.com/utiqLoader.js";
          //s.src = "local-utiq-loader.js";
          s.async = true;
          document.head.appendChild(s);
        }
      })();
  
      // Stop checking for the cookie
      clearInterval(cookieCheckInterval);
      // Remove event listener
      btn && btn.removeEventListener("click", triggerUtiq);
    };
  
    // Checking if the cookie exists
    var cookieCheckInterval = window.setInterval(function() {
      // Replace the cookie name "all_cmp_accepted" and the cookie value "true" with the
      // corresponding cookie name and value that represent that a user has accepted all cookies DONE
      if (document.cookie.indexOf("cookie_consent_user_accepted=true") !== -1) {
        triggerUtiq();
      }
      // You might want to adjust this interval time as needed - NOT NEC.
    }, 100);
  
    // Attaching event to button if it exists
    // Replace the Element Selector "_some_element_selector" with the Element Selector representing the "Accept All" call to action (button) of your CMP.
    var btn = document.getElementByClassName("cc-nb-okagree");
  
    if (btn.length > 0) {
      btn[0].addEventListener("click", triggerUtiq);
    }
  })();