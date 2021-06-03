/* eslint-disable max-len */
import UnsupportedOperationException from '@/unsupportedOperationException';
import Jugador from './jugador';

/**
 * Se debe ordenar primero por puntuación de manera descendente, luego por nombre de manera ascendente.
 * @param jugadores la lista de jugadores a ordenar
 * @return la lista ordenada de jugadores
 */
export function ordenarPorPuntuacionYNombre(jugadores:Jugador[]) :Jugador[] {
  // throw new UnsupportedOperationException();

  // jugadores = jugadores.slice();
  // console.log(jugadores);
  for( let i=0;i<jugadores.length;i++){ 
    for(let j=0;j<jugadores.length-1;j++){
      if(jugadores[j].puntuacion < jugadores[j+1].puntuacion){
        [jugadores[j], jugadores[j+1]] =[jugadores[j+1],jugadores[j]];
        // console.log(jugadores);
      }
      else if(jugadores[j].puntuacion === jugadores[j+1].puntuacion && jugadores[j].nombre > jugadores[j+1].nombre){
        [jugadores[j], jugadores[j+1]] =[jugadores[j+1],jugadores[j]];
        // console.log(jugadores);
      }
    
    }
  }
      return jugadores;
    }
    
  

/**
* Se debe ordenar primero por puntuación de manera descendente. Cuando 2 jugadores tienen igual cantidad de puntos,
 * el que tiene menos perdidas se lo considerara el mayor. Luego a igual puntos y perdidas se seguirá usando el
 * nombre de manera ascendente.
 * @param jugadores la lista de jugadores a ordenar
 * @return la lista ordenada de jugadores
 */
export function ordenarPorPuntuacionPerdidasYNombre(jugadores:Jugador[]) :Jugador[] {
  // throw new UnsupportedOperationException();


  for( let i=0;i<jugadores.length;i++){ 
    for(let j=0;j<jugadores.length-1;j++){
      if(jugadores[j].puntuacion < jugadores[j+1].puntuacion){
        [jugadores[j], jugadores[j+1]] =[jugadores[j+1],jugadores[j]];
      
      }
      else if(jugadores[j].puntuacion === jugadores[j+1].puntuacion && jugadores[j].perdidas > jugadores[j+1].perdidas){
        [jugadores[j], jugadores[j+1]] =[jugadores[j+1],jugadores[j]];
      
      }
    }
  }
      return jugadores;
    }
    

