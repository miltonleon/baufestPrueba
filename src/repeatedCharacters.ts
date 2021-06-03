/* eslint-disable max-len */
import UnsupportedOperationException from '@/unsupportedOperationException';

/**
 * El metodo debe retornar un booleano indicando si el parametro `cadena` cumple con alguna de las siguientes propiedades:
 * 1- Todos los caracteres aparecen la misma cantidad de veces.
 *     Ejemplos: "aabbcc", "abcdef", "aaaaaa"
 * 2- Todos los caracteres aparecen la misma cantidad de veces, a excepcion de 1, que aparece un vez mas o una vez menos.
 *     Ejemplos: "aabbccc", "aabbc", "aaaaccccc"
 * @param cadena la cadena a evaluar
 * @return booleano indicando si la cadena cumple con las propiedades
 */
export default function isValid(cadena:string) :boolean {

 //throw new UnsupportedOperationException();
 var arrayCadena=cadena.split("").sort().reverse();
 var contador=0;
 var numSecuencia=1;
 var letraActual="";
 var letraSiguiente="";
 var numerosSec=[];
 var arraySinRep=[]
 var cantidadCaracteres= arrayCadena.length
 while (contador< cantidadCaracteres && arraySinRep.length <3) {
     letraActual= arrayCadena[contador];
     letraSiguiente=arrayCadena[contador+1]
     if(letraActual ==letraSiguiente){
         numSecuencia++;
     }
     else{
         numerosSec.push(numSecuencia)
         numSecuencia=1;   
     }
  arraySinRep = [...new Set(numerosSec)];
     contador++;

}
return arraySinRep.length<3;



}


