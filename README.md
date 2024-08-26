# How to use

Create a bookmarklet with the following code:
```
javascript: (function(){if (window.trustedTypes && window.trustedTypes.createPolicy && !Object.keys(window.trustedTypes)) {window.trustedTypes.createPolicy('default', {createHTML: (string) => string,createScriptURL: string => string,createScript: string => string,});} if (typeof doBrowserPokemon == "function"){doBrowserPokemon();}else{var jsCode = document.createElement('script');jsCode.setAttribute('src', 'https://py660.github.io/browser-pokemon/index.js?cache='+(new Date()).toString());document.body.appendChild(jsCode);var listener = document.addEventListener("securitypolicyviolation", (e) => {if (e.blockedURI.startsWith("https://py660.github.io/browser-pokemon/index.js")){alert("Script blocked by CSP. Please try again on another website.");document.removeEventListener("securitypolicyviolation", listener);}});jsCode.onload = ()=>{alert("Installing browser pokemon...");doBrowserPokemon();}}}())
```
