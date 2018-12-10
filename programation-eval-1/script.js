//ex 1//

/*function f1() {

//create screen 1//
let screen = document.createElement("div");
document.body.appendChild(screen);

//creat line 1//
let surName = document.createElement("label");
surName.textContent = "Quel est votre prénom ?   ";
screen.appendChild(surName);
let surNameAnswer = document.createElement("input");
surNameAnswer.type = "text";
screen.appendChild(surNameAnswer);
screen.appendChild(document.createElement("br"));
screen.appendChild(document.createElement("br"));


//create line 2//
let name = document.createElement("label");
name.textContent = "Quel est votre nom ?   ";
screen.appendChild(name);
let nameAnswer = document.createElement("input");
nameAnswer.type = "text";
screen.appendChild(nameAnswer);
screen.appendChild(document.createElement("br"));
screen.appendChild(document.createElement("br"));

//creat button//
let button = document.createElement("button");
screen.appendChild(button);
button.textContent = "OK";


//create error message//
let messError = document.createElement("p");
messError.textContent = "Veuillez remplir les champs";
messError.style.color = "red";
screen.appendChild(messError);
messError.hidden = true;


//event listener//
button.addEventListener("click", testButton, false);

//function//
function testButton() {
if (surNameAnswer.required  === true && nameAnswer.required === true ) {
    messError.hidden = true;
    screen2.hidden = false;
    screen.hidden = true;
} else {
    messError.hidden = false;
  };
};

//creat screen 2//
let screen2 = document.createElement("div");
document.body.appendChild(screen2);


let welcomeMess = document.createElement("label");
welcomeMess.textContent = "Bonjour " ;


screen2.hidden = false;
};*/



//ex 2//


/*function f2() {


let screen = document.createElement("div");
document.body.appendChild(screen);

//create line 1//
let sMB = document.createElement("label");
sMB.textContent = "Salaire mensuel brut  ";
screen.appendChild(sMB);
let sMBAnswer = document.createElement("input");
sMBAnswer.type = "number";
screen.appendChild(sMBAnswer);
screen.appendChild(document.createElement("br"));
screen.appendChild(document.createElement("br"));


//create line 2//
let sMN = document.createElement("label");
sMN.textContent = "Salaire mensuel net  ";
screen.appendChild(sMN);
let sMNAnswer = document.createElement("input");
sMNAnswer.type = "number";
screen.appendChild(sMNAnswer);
screen.appendChild(document.createElement("br"));
screen.appendChild(document.createElement("br"));


//creat line 3//
let sAB = document.createElement("label");
sAB.textContent = "Salaire annuel brut  ";
screen.appendChild(sAB);
let sABAnswer = document.createElement("input");
sABAnswer.type = "number";
screen.appendChild(sABAnswer);
screen.appendChild(document.createElement("br"));
screen.appendChild(document.createElement("br"));



//creat line 4//
let sAN = document.createElement("label");
sAN.textContent = "Salaire annuel net  ";
screen.appendChild(sAN);
let sANAnswer = document.createElement("input");
sANAnswer.type = "number";
screen.appendChild(sANAnswer);
screen.appendChild(document.createElement("br"));
screen.appendChild(document.createElement("br"));

}*/



//ex 4//



//ex 5//

function randomNumber() {
  let number = Math.floor(Math.random() * number128.length);
  return number128;
};
