/* Loads the same-page assistant UI on the portfolio without requiring changes to existing page markup. */
(function(){
  function load(url, tag){
    return new Promise(function(resolve,reject){
      var el=document.createElement(tag);
      el.src=url;
      el.onload=resolve;
      el.onerror=reject;
      document.head.appendChild(el);
    });
  }
  var base=new URL('.', document.currentScript ? document.currentScript.src : location.href);
  var css=document.createElement('link');
  css.rel='stylesheet';
  css.href=new URL('assistant-widget.css',base).href;
  document.head.appendChild(css);
  load(new URL('assistant-widget.js',base).href,'script').catch(function(){});
})();
