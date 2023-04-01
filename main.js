window.addEventListener("load", init)



function init() {



    const OK_GOMB = document.getElementById("ok")
    OK_GOMB.addEventListener("click", okGombClick)



}


function okGombClick(event) {
    let gyujt = adatgyujt()
    osszeallit(gyujt)

}



function adatgyujt() {
    const ADATOK = { nev: "Gipsz Jakab", cim: "Fő utca 2", tel: "123-456", email: "mail@valami.hu" }
    return ADATOK;

}



function osszeallit(adatok) {
    const SECTION = document.querySelector("section")
    let txt = "<div>"


    for (const key in adatok) {

        txt += `<p>${adatok[key]}</p>`

    }
    txt += "</div>"
    SECTION.innerHTML += txt

}

