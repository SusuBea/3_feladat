import { KUTYALISTA } from "./adatok.js";

window.addEventListener("load", init)



function init() {

    console.log(KUTYALISTA)
    let szurtLista = szuresNevSzerint(KUTYALISTA , "d")
    const inputELEM = document.getElementById("szurnev")
    inputELEM.addEventListener("keyup", function(){
        let szurFeltetel = inputELEM.value
        let szurtLista = szuresNevSzerint(KUTYALISTA, szurFeltetel);
        console.log(szurtLista)

    })

    

    }



    function szuresNevSzerint(lista, keresett){
        /** szűrjük ki a Dézi nevű kutyákat */
        /** azokat a neveket amik tartalmaznak D betűt */
        let resultList = lista.filter(
        
            function(elem){ /** Objektum */
                
                return elem.nev.toUpperCase().includes(keresett.toUpperCase());
            });

       
        return resultList;


}












//visszakell tenni majd az initbe


const OK_GOMB = document.getElementById("ok")
OK_GOMB.addEventListener("click", okGombClick)



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

