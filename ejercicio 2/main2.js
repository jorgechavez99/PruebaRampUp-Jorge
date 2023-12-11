/*
Ejercicio 2:
Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números*/

//ingresar numeros
let NumeroValidar=0;
let cantidadNumeros=1;

const ingresarNumeros=()=>{
    for (let i=0;i<cantidadNumeros;i++){
        let numero=parseInt(prompt('ingrese los numeros'));
        console.log(numero);
        comprobarImpar(numero);
    }
    
}

//comprobar numeros

const comprobarNumeros=(numero)=>{
    while(isNaN(numero)||numero<0){
        numero=parseInt(prompt('lo que ingreso no es correcto favor de ingresar un numero valido'));
        comprobarImpar(numero);
    }
 
}

//comprobar si es impar

const comprobarImpar=(numero)=>{
    let resultado;
    if (numero%2 == 0){
        resultado= false;
        
             
    }else { resultado=true;console.log('ingresar los 50 numeros',numero+= numero)}

    reaccionImpar(resultado)
     console.log(resultado)
}

const reaccionImpar=(resultado)=>{
    if(resultado===true){
        console.log('el numero es impar')
    }
    else{ console.log('el numero es par')}

}

//imprimir numeros
/*
const imprimirNumero=(numero)=>{
    if (resultado===true){
        let demasNumeros;
        for (let i=0;i<50;i++){
        }
        console.log( demasNumeros)
    }
}
*/


ingresarNumeros()
/*

const datos=(numero)=>{
    for(let i=0;i<50;i++){
        console.log(i)
    }

}
datos()
*/






