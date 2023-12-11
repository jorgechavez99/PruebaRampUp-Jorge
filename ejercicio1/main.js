/*Ejercicio 1:
Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase*/

// ingreso de palabra

let arrayLetras=[];
let letraDeterminada="a";

const ingresoLetras=()=>{
    
for(let i=0;i<letraDeterminada.length;i++){
    const letra= prompt('Ingrese las letras');
almacenarLetra(letra);
console.log(letra)

}

}

// comprobar que sean letras 

const comprobarLetra=(letra)=>{
    while(NaN===letra){
        const letra= prompt('vuelva a ingresar la letra');
        
    }
 }

//almacenar letras

const almacenarLetra=(letra)=>{
    arrayLetras.push(letra);
  
 console.log(arrayLetras)
} 
ingresoLetras()

//contar las letras



