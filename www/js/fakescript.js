var imgURL = 'initial';

  function on(imgURL) {
     document.getElementById("myImage").src = imgURL;
     document.getElementById("overlay").style.display = "block";
   }
   function off() {
     document.getElementById("overlay").style.display = "none";
   }

   window.dataLayer = window.dataLayer || [];
   function gtag() {
     dataLayer.push(arguments);
   }
   gtag('js', new Date());
   gtag('config', 'UA-147232862-1');
