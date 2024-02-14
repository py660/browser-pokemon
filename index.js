let pokemon = [
    "blaziken.gif",
    "charizard constant.gif",
    "charizard idle.gif",
    "charizard usually.gif",
    "cyndaquil.gif",
    "darkrai.gif",
    "dawnwings.gif",
    "ditto.gif",
    "eevee.gif",
    "galarianmoltres.gif",
    "genesect.gif",
    "gengar.gif",
    "greninja butnormal.gif",
    "greninja.gif",
    "groudon.gif",
    "hisuiandecidueye.gif",
    "infernape.gif",
    "klefki.gif",
    "kyogre.gif",
    "kyuremblack.gif",
    "lucario.gif",
    "lugia glitchy.gif",
    "lugia.gif",
    "megablaziken.gif",
    "mewtwo.gif",
    "mimikyu.gif",
    "obstagoon.gif",
    "pikachu idle.gif",
    "pikachu notalpha.gif",
    "pikachu running.gif",
    "pnytagalar.gif",
    "pooper.gif",
    "raichu.gif",
    "rayquaza.gif",
    "reshiram.gif",
    "rockruff.gif",
    "sceptile.gif",
    "scorbunny.gif",
    "shinyyveltal.gif",
    "suicune.gif",
    "tapukoko.gif",
    "tinkaton.gif",
    "torterra.gif",
    "vaporeon.gif",
    "wooper.gif"
]

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;
  let id = elmnt.id;

  function dragMouseDown(e) {
    browserPokemon[id].dragging = true;
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    browserPokemon[id].x = elmnt.offsetLeft - pos1;
    browserPokemon[id].y = elmnt.offsetTop - pos2;
    console.log(browserPokemon[id].x, browserPokemon[id].y);
  }

  function closeDragElement() {

    browserPokemon[id].dragging = false;
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

let browserPokemon = {};
function doBrowserPokemon(){
    for (let image of pokemon){
        try{
            function uuidv4() {
                return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
                    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
                );
            }
            let img = document.createElement("img");
            img.src = "https://py660.github.io/browser-pokemon/pokemon/"+image;
            img.style.all = "unset";
            img.style.position = "fixed";
            img.style.cursor = "grab";
            img.onload = ()=>{
                let width  = img.width;
                let height = img.height;
                let x = Math.floor(Math.random()*(window.innerWidth-width));
                let y = Math.floor(Math.random()*(window.innerHeight-height));
                let uuid = uuidv4();
                img.id = uuid;
                browserPokemon[uuid] = {dragging: false, id: uuid, width: width, height: height, x: x, y: y, dx: Math.random()*2-1, dy: Math.random()*2-1};
                img.style.width = width + "px";
                img.style.height = height + "px";
                img.style.left = x + "px";
                img.style.top = y + "px";
                img.style.zIndex = "999999999999";
                document.body.append(img);
                dragElement(img);
            }
        }catch(e){
            alert(e);
        }
    }
}
setInterval(()=>{
    try{
        Object.keys(browserPokemon).forEach((id)=>{
            if (!browserPokemon[id].dragging){
                let img = document.getElementById(id);
                let e   = browserPokemon[id];
                e.x += e.dx;
                e.y += e.dy;
                img.style.left = e.x + "px";
                img.style.top = e.y + "px";
                if (e.x >= window.innerWidth-e.width){e.dx *= -1; e.x = window.innerWidth-e.width}
                if (e.y >= window.innerHeight-e.height){e.dy *= -1; e.y = window.innerHeight-e.height}
                if (e.x <= 0){e.dx *= -1; e.x = 0}
                if (e.y <= 0){e.dy *= -1; e.y = 0}
            }
        });
    }catch(e){
        alert(e);
    }
}, 10);
/*
javascript: (function(){if (window.trustedTypes && window.trustedTypes.createPolicy && !Object.keys(window.trustedTypes)) {window.trustedTypes.createPolicy('default', {createHTML: (string) => string,createScriptURL: string => string,createScript: string => string,});} if (typeof doBrowserPokemon == "function"){doBrowserPokemon();}else{var jsCode = document.createElement('script');jsCode.setAttribute('src', 'https://py660.github.io/browser-pokemon/index.js?cache='+(new Date()).toString());document.body.appendChild(jsCode);var listener = document.addEventListener("securitypolicyviolation", (e) => {if (e.blockedURI.startsWith("https://py660.github.io/browser-pokemon/index.js")){alert("Script blocked by CSP. Please try again on another website.");document.removeEventListener("securitypolicyviolation", listener);}});jsCode.onload = ()=>{alert("Installing browser pokemon...");doBrowserPokemon();}}}())
*/