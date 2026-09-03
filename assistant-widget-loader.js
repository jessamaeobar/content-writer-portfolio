/* Loads the free same-page assistant UI and its local knowledge engine. */
(function(){
  function load(url){
    return new Promise(function(resolve,reject){var el=document.createElement('script');el.src=url;el.onload=resolve;el.onerror=reject;document.head.appendChild(el);});
  }
  var base=new URL('.', document.currentScript ? document.currentScript.src : location.href);
  var css=document.createElement('link');css.rel='stylesheet';css.href=new URL('assistant-widget.css',base).href;document.head.appendChild(css);
  load(new URL('assistant-local.js',base).href).then(function(){return load(new URL('assistant-widget.js',base).href);}).catch(function(error){console.error('Jessa assistant failed to load:',error);});
})();
