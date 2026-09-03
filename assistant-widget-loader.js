/* Loads the free same-page assistant UI and its shared local knowledge/routing engine. */
(function(){
  function load(url){
    return new Promise(function(resolve,reject){
      var el=document.createElement('script');
      el.src=url;
      el.onload=resolve;
      el.onerror=reject;
      document.head.appendChild(el);
    });
  }

  var base=new URL('.', document.currentScript ? document.currentScript.src : location.href);
  var css=document.createElement('link');
  css.rel='stylesheet';
  css.href=new URL('assistant-widget.css?v=2',base).href;
  document.head.appendChild(css);

  /* Keep every assistant entry point on the same answer/routing layer. */
  load(new URL('assistant-local.js?v=2',base).href)
    .then(function(){return load(new URL('assistant-role-routing.js?v=2',base).href);})
    .then(function(){return load(new URL('assistant-widget.js?v=2',base).href);})
    .catch(function(error){console.error('Jessa assistant failed to load:',error);});
})();
