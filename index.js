function doBrowserPokemon(){
    try{
        let browserPokemon = {};
        function uuidv4() {
            return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        }
        let img = document.createElement("img")
        img.src = "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024"
        img.style.position = "fixed";//clientWidth, clientHeight
        let width  = 50;
        let height = 50;
        let x = Math.floor(Math.random()*(window.innerWidth-width));
        let y = Math.floor(Math.random()*(window.innerHeight-height));
        let uuid = uuidv4();
        img.id = uuid;
        browserPokemon[uuid] = {x: x, y: y, direction: Math.floor(Math.random()*8)}
        img.style.width = width + "px";
        img.style.height = height + "px";
        img.style.left = x + "px";
        img.style.top = y + "px";
        img.style.zIndex = "999999999999";
        document.body.append(img);
        //javascript: (function(){var jsCode = document.createElement('script');jsCode.setAttribute('src', 'https://py660.github.io/browser-pokemon/index.js?cache='+(new Date()).toString());document.body.appendChild(jsCode);var listener = document.addEventListener("securitypolicyviolation", (e) => {if (e.blockedURI.startsWith("https://py660.github.io/browser-pokemon/index.js")){alert("Script blocked by CSP. Please try again on another website.");document.removeEventListener("securitypolicyviolation", listener);}});}())
    }catch(e){
        alert(e);
    }
}
/*
javascript: (function(){if (typeof doBrowserPokemon == "function"){doBrowserPokemon();}else{var jsCode = document.createElement('script');jsCode.setAttribute('src', 'https://py660.github.io/browser-pokemon/index.js?cache='+(new Date()).toString());document.body.appendChild(jsCode);var listener = document.addEventListener("securitypolicyviolation", (e) => {if (e.blockedURI.startsWith("https://py660.github.io/browser-pokemon/index.js")){alert("Script blocked by CSP. Please try again on another website.");document.removeEventListener("securitypolicyviolation", listener);}});jsCode.onload = ()=>{alert("Installing browser pokemon...");doBrowserPokemon();}}}())
*/