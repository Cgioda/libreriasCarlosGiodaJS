Swal.fire({
        title: "Tu nombre",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            let nombre = resultado.value;
            let parrafo1 = document.getElementById("navbar");
            parrafo1.innerText =  `Bienvenido/a ` + nombre ;
           
        }
    });




    

//Elements


let cotizar = document.getElementById("cotizar");
const monto = document.getElementById("monto");
const anios = document.getElementById("anios");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
    
//Cotizador manual!

function toma_datos(){
    const interes = 0.12;
    let resultado = 0;
    if (anios.value > 5 ) {
    Swal.fire("Los años de pago no pueden ser mayores que 5");;;
      return;
    } else if (anios.value <= 0) {
        Swal.fire("Se necesita mínimo 1 año de pago");  
        return;
    }  else if (monto.value > 100000) {
        Swal.fire(`Lamentablemente no contamos con ese dinero`);
        return;
    }
    for (let i = 1; i <= anios.value; i++) {
      resultado = (monto.value * interes) * i; 
        let parrafo = document.createElement("p");
        parrafo.innerHTML =  `El interés del año ${i} es de ${resultado}`;
        document.body.append(parrafo);
    }
}


cotizar.onclick = function(){
    toma_datos()
}

//Prestamos pre-armados!


class Prestamo {
    constructor (monto, duracion) {
        this.monto = monto
        this.duracion = duracion

    }

    TasaDeInteres() {
        this.monto = (this.monto * 0.08) * this.duracion;
    }
}



const prestamos = [];
prestamos.push(new Prestamo("10000", "1"));
prestamos.push(new Prestamo("20000", "2"));
prestamos.push(new Prestamo("30000", "3"))


for (const Prestamo of prestamos)
    Prestamo.TasaDeInteres();




function preArmado1 () {
    let parrafoPrearmado1 = document.createElement("p");
    parrafoPrearmado1.innerHTML =  `El interés del total es de ${prestamos[0].monto}` ;
    document.body.append(parrafoPrearmado1);
}

function preArmado2() {
    let parrafoPrearmado2 = document.createElement("p");
    parrafoPrearmado2.innerHTML =  `El interés del total es de ${prestamos[1].monto}` ;
    document.body.append(parrafoPrearmado2);
}


function preArmado3() {
    let parrafoPrearmado3 = document.createElement("p");
    parrafoPrearmado3.innerHTML =  `El interés del total es de ${prestamos[2].monto}` ;
    document.body.append(parrafoPrearmado3);}





option1.onclick = function(){
    preArmado1()
}

option2.onclick = function() {
    preArmado2()
}


option3.onclick = function() {
    preArmado3()
}

//local storage


localStorage.setItem("interes_armado", "12%");
localStorage.setItem("interes_preamado", "8%");


let armado = localStorage.getItem("interes_armado");
let prearmado = localStorage.getItem("interes_prearmado");

document.getElementById("cotizar").addEventListener("click", function(){
let monto_local = document.getElementById("monto").value
let anios_local = document.getElementById("anios").value


localStorage.setItem(monto_local, anios_local)

})





// Made by Carlos Gioda