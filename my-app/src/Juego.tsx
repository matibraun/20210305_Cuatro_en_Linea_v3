import React, { useState, useEffect } from 'react';
import Jugadores from './Jugadores'

function Juego () {

    type State = {
        jugadores: Array<Jugador>;
        tablero: Array<Fila>;
    };
    
    type Fila = Array<Posicion>;
    
    type Posicion = string;
    
    type Jugador = {
        name: string;
        color: string;
    };

    const [jugadores, setJugadores] = useState([])
    const [tablero, setTablero] = useState([])

    function agregarJugador (name: string, color: string) {
        const jugador: Jugador = {
            name: name,
            color: color,
        };

        console.log(jugador)

        const nuevaListaJugadores: Array<Jugador> = [...jugadores, jugador];

        setJugadores(nuevaListaJugadores)

    };
    

    return (
        <div>
            < Jugadores agregarJugador={agregarJugador}/>
        </div>
    )
};

export default Juego;

