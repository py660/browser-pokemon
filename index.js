try{
let img = document.createElement("img")
img.src = "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024"
img.style.position = "fixed";//clientWidth, clientHeight
let width  = "50px";
let height = "50px";
img.width = width;
img.height = height;
img.style.left = Math.floor(Math.random()*(window.clientWidth-width));
img.style.top = Math.floor(Math.random()*(window.clientHeight-height));
img.style.zIndex = "999999999999";
document.body.append(img);
//javascript: (function(){var jsCode = document.createElement('script');jsCode.setAttribute('src', 'https://py660.github.io/browser-pokemon/index.js?cache='+(new Date()).toString());document.body.appendChild(jsCode);var listener = document.addEventListener("securitypolicyviolation", (e) => {if (e.blockedURI.startsWith("https://py660.github.io/browser-pokemon/index.js")){alert("Script blocked by CSP. Please try again on another website.");document.removeEventListener("securitypolicyviolation", listener);}});}())
}catch(e){
    alert(e);
}