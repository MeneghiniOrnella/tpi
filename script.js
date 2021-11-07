let cantidad = parseInt(document.getElementById('cantidad'));
let nivel = (document.getElementById('nivel').value);
let rdo = document.getElementById('rdo');

rdo.style.display="none";

let descuento;
const ticketValor = 200;

let formula;

/* nivel = nivel.addEventListener("change",entregarRdo()); */

const calcular = (descuento,cantidad) => {
    rdo.style.display="block";
    // const formula = parseInt((ticketValor*(1-parseInt(descuento)))*cantidad);
    formula = parseInt((ticketValor*(1-descuento))*cantidad);
    // let alerta = alert('El resultado es: '+formula);
    rdo.innerHTML=`<p>El resultado es: ${formula}</p>`;
};

const entregarRdo = () => {
    if(nivel == 'estudiante'){
        calcular(0.8,cantidad);
    }else if(nivel == 'trainee'){
        calcular(0.5.cantidad);
    }else if(nivel == 'junior'){
        calcular(0.15,cantidad);
    }else{
        // let frase = `<p>Total a pagar: $</p>`
        console.log('Seleccione una opcion');
    };
};
const borrarRdo = () => {
    rdo.style.display="none";
}