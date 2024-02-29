const imageContainer = document.getElementById("paveiksliukai");
const poperius = document.getElementById("poperius");
let ctx = poperius.getContext("2d");
poperius.style.display = "none";
const aukštis = poperius.height;
const plotis = poperius.width;
let humanas = new Image();
let myktukai = ['a', 'd', ' ']
humanas.src = "paveiksliukai/humanas.png";

let human = {
    a: 100,
    p: 100,
    x: Math.random() * 400,
    y: 0,

};
let gameon = false;
function game() {
    gameon = !gameon;
    if (!gameon) {
        imageContainer.style.display = "";
        poperius.style.display = "none";
    } else {
        imageContainer.style.display = "none";
        poperius.style.display = "";
    }
}
// nevoktas kodas :D
document.addEventListener("DOMContentLoaded", () => {
    let imagePaths = [];
    const vardai = [
        "3dvelniukštis",
        "agresyvus",
        "baisus",
        "draugiskas_velniukstis",
        "draugiskas_velniukstis_aukstin",
        "pixels",
        "velniūkštis",
        "spigliotaszales",
        "melinas",
        "megaboss",
        "ranka",
        "minecraftvel",
        "tekstas",
        'zaibas'
    ];
    function idekpaveiksliuka(vardas) {
        nuoroda = "paveiksliukai/" + vardas + ".png";
        return nuoroda;
    }
    for (let i = 0; i < vardai.length; i++) {
        imagePaths.push(idekpaveiksliuka(vardai[i]));
    }
    //voktas kodas /:
    imagePaths.forEach((imagePath) => {
        const imgElement = document.createElement("img");
        imgElement.src = imagePath;
        imgElement.alt = "Paveikslėlis";
        imageContainer.appendChild(imgElement);
    });
    function ratas() {
        ctx.drawImage(humanas, human.x, human.y, human.p, human.a);
        // console.log(hA.x, hA.y, hA.plotis, hA.aukštis)
        requestAnimationFrame(ratas);
    }
    ratas();
});
