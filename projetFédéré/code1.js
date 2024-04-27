// go to page register wle donate selon id 

function goto(pageid) {
    var page = document.getElementById(pageid);
    page.scrollIntoView();
};


function verif() {

    nom = f.name.value;

    num = f.num.value;

    lieu = f.lieu.value;
    mdp = f.password.value;
    let date = document.getElementById("age").value;





    // verification al esm
    if (nom.indexOf(" ") === -1) {
       alert("Veuillez saisir votre nom complet ");
        return false;
    }

    for (i = 0; i < nom.length; i++) {
        if ((nom.charAt(i).toUpperCase() < "A" || nom.charAt(i).toUpperCase() > "Z") && nom.charAt(i) !== " ") {
          alert("Saisir un nom valide");
            return false;
        }
    }




    //verification al tel


    for (i = 0; i < num.length; i++) {
        if (num.charAt(i) < "0" || num.charAt(i) > "9" || num.length != 8) {
            alert("invalide phone number ");
            return false;
        }
    }



    // verification al date 

    let year = new Date(date).getFullYear();
    let recent = new Date().getFullYear();
    let age = recent - year;

    if (age > 100 || age < 12) {
       alert("Saisir un âge valide");
        return false;
    }



    // verification al lieu


    for (i = 0; i < lieu.length; i++) {
        if (lieu.charAt(i).toUpperCase() < "A" || lieu.charAt(i).toUpperCase() > "Z") {
           alert("invalide adresse ");
            return false;
        }
    }





    // verification al mdp


    if (mdp.length < 8) {
        alert("mot de passe doit contenir at least  8");
        return false;
    }
    spec = "@&$-*/ ^!%+|_";
    min = -1;
    maj = -1;
    spc = -1;
    for (i = 0; i < mdp.length; i++) {
        if (mdp.charAt(i) >= "a" && mdp.charAt(i) <= "z") {
            min++;
        }
        if (mdp.charAt(i) >= "A" && mdp.charAt(i) <= "Z") {
            maj++;

        }
        if (spec.indexOf(mdp.charAt(i)) !== -1) {
            spc++;

        }
    }

    if (min === -1) {
        alert("au moins un caractere minuscule");
        return false;
    }
    if (maj === -1) {
        alert("au moins un caractere majuscule");
        return false;
    }
    if (spc === -1) {

        {
            alert("au moins un caractere special");
            return false;
        }

    }


};

function verif2() {
    alert("aaa");
    nom = f2.name.value;

    num = f2.num.value;



    d17 = f2.numb.value;

    pin = f2.pin.value;




    // verification al esm

    if (nom.indexOf(" ") === -1) {
        alert("Veuillez saisir votre nom complet ");
        return false;
    }

    for (i = 0; i < nom.length; i++) {
        if ((nom.charAt(i).toUpperCase() < "A" || nom.charAt(i).toUpperCase() > "Z") && nom.charAt(i) !== " ") {
            alert("Saisir un nom valide");
            return false;
        }
    }


    //verification al tel


    for (i = 0; i < num.length; i++) {
        if (num.charAt(i) < "0" || num.charAt(i) > "9" || num.length != 8) {
            alert("invalide phone number ");
            return false;
        }
    }




    // verification al d17

    if (d17.length !== 16) {
        alert("Veuillez saisir votre cart number ");
        return false;
    }

    for (i = 0; i < d17.length; i++) {
        if (d17.charAt(i) < "0" || d17.charAt(i) > "9") {
            alert("invalide cart number ");
            return false;
        }
    }

    //verification al pin  


    if (isNaN(pin) || pin.length != 6) {
        alert("incorrect pin");
        return false;
    }
    return true;

};