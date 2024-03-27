const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);
const travel = document.querySelector("#travel");
travel.addEventListener("click", showAdditional);

function showAdditional(e){
    e.preventDefault();
    tip.style.dispaly = "block";
}

function calculateAmount(e){
    e.preventDefault();
    const house = document.querySelector("#house").value;
    const food = document.querySelector("#food").value;
    const car = document.querySelector("#car").value;
    const people = document.querySelector("#people").value;
    const additional = document.querySelector("#additional").value;

    if (house === "" || food === "" || car === "" || people === "" || people < 1){
        Swal.fire(
            'Error!',
            'Oops!',
          );

    }

let main = + house + +food + +car;
let add = additional;
let total = (main + +add) / people;



document.querySelector("#amountPerPerson").textContent = main;
document.querySelector("#additionalExp").textContent = add;
document.querySelector("#allSum").textContent = total;

}
