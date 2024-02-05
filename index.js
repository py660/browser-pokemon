let browserPokemon = {};
function doBrowserPokemon(){
    try{
        function uuidv4() {
            return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        }
        let img = document.createElement("img");
        img.src = "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024";
        img.style.all = "unset";
        img.style.position = "fixed";
        let width  = 50;
        let height = 50;
        let x = Math.floor(Math.random()*(window.innerWidth-width));
        let y = Math.floor(Math.random()*(window.innerHeight-height));
        let uuid = uuidv4();
        img.id = uuid;
        browserPokemon[uuid] = {id: uuid, width: width, height: height, x: x, y: y, dx: Math.random()*2-1, dy: Math.random()*2-1};
        img.style.width = width + "px";
        img.style.height = height + "px";
        img.style.left = x + "px";
        img.style.top = y + "px";
        img.style.zIndex = "999999999999";
        document.body.append(img);
        window.browserPokemon = browserPokemon;
    }catch(e){
        alert(e);
    }
}
setInterval(()=>{
    try{
        Object.keys(browserPokemon).forEach((id)=>{
            let img = document.getElementById(id);
            let e   = browserPokemon[id];
            e.x += e.dx;
            e.x += e.dy;
            img.style.left = e.x + "px";
            img.style.top = e.y + "px";
            console.log(e.dx, e.dy);
            if (img.x >= window.innerWidth-e.width || img.x <= 0) e.dx *= -1; e.x = window.innerWidth-e.width;
            if (img.y >= window.innerHeight-e.height || img.y <= 0) e.dy *= -1; e.y = window.innerHeight-e.height;
        });
    }catch(e){
        alert(e);
    }
}, 10);
/*
javascript: (function(){if (window.trustedTypes && window.trustedTypes.createPolicy && !Object.keys(window.trustedTypes)) {window.trustedTypes.createPolicy('default', {createHTML: (string) => string,createScriptURL: string => string,createScript: string => string,});} if (typeof doBrowserPokemon == "function"){doBrowserPokemon();}else{var jsCode = document.createElement('script');jsCode.setAttribute('src', 'https://py660.github.io/browser-pokemon/index.js?cache='+(new Date()).toString());document.body.appendChild(jsCode);var listener = document.addEventListener("securitypolicyviolation", (e) => {if (e.blockedURI.startsWith("https://py660.github.io/browser-pokemon/index.js")){alert("Script blocked by CSP. Please try again on another website.");document.removeEventListener("securitypolicyviolation", listener);}});jsCode.onload = ()=>{alert("Installing browser pokemon...");doBrowserPokemon();}}}())
*/