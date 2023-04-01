import { KUTYALISTA } from "./adatok.js";

window.addEventListener("load", init)



function init() {

    console.log(KUTYALISTA)
    //let szurtLista = szuresKorSzerint(KUTYALISTA , "d")
    const inputELEM = document.getElementById("szurnev")
    inputELEM.addEventListener("change", function(){
        /**listázzuk ki az 5 évnél idősebb kutyákat */
        let szurFeltetel = inputELEM.value
        let szurtLista = szuresKorSzerint(KUTYALISTA, szurFeltetel);
        console.log(szurtLista)

    })

    

    }



    function szuresKorSzerint(lista, keresett){
        /** szűrjük ki a Dézi nevű kutyákat */
        /** azokat a neveket amik tartalmaznak D betűt */
        let resultList = lista.filter(
        
            function(elem){ /** Objektum */
            console.log(typeof (elem.kor + keresett))
                
                //return elem.nev.toUpperCase().includes(keresett.toUpperCase());
                return eval (elem.kor + keresett);
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

