import React, { useState, useEffect } from 'react';
import Jugadores from './Jugadores'
import Tablero from './Tablero'

function Juego () {

    type State = {
        jugadores: Array<Jugador>;
        tablero: Array<Fila>;
        momentoJuego: 'cargandoParticipantes' | 'jugando' | 'juegoFinalizado';
    };
    
    type Fila = Array<Posicion>;
    
    type Posicion = string;
    
    type Jugador = {
        nombre: string;
        color: string;
    };

    const [jugadores, setJugadores] = useState([] as any)
    const [tablero, setTablero] = useState([] as any)

    // setJugadores({nombre: 'julio', color: 'rojo'})

    function agregarJugador (nombre: string, color: string) {
        const jugador: Jugador = {
            nombre: nombre,
            color: color,
        };

        const nuevaListaJugadores: Array<Jugador> = [...jugadores, jugador];

        setJugadores(nuevaListaJugadores);
    };
    

    function crearTablero (cantFilas: number, cantColumnas: number) {
        console.log(cantFilas, cantColumnas);
    };


    return (
        <div>
            < Jugadores agregarJugador={agregarJugador}/>
            {jugadores.map((j: any, index: any) => <div key={index}>{j.nombre} {j.color}</div>)}
            < Tablero crearTablero={crearTablero}/>
        </div>
    )
};

export default Juego;

