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
        nombre: string;
        color: string;
    };

    const [jugadores, setJugadores] = useState([] as any)
    const [tablero, setTablero] = useState([])

    // setJugadores({nombre: 'julio', color: 'rojo'})

    function agregarJugador (nombre: string, color: string) {
        const jugador: Jugador = {
            nombre: nombre,
            color: color,
        };

        console.log(jugador)

        const nuevaListaJugadores: Array<Jugador> = [...jugadores, jugador];

        console.log(nuevaListaJugadores);

        setJugadores(nuevaListaJugadores);

        console.log(jugadores);

    };
    

    return (
        <div>
            < Jugadores agregarJugador={agregarJugador}/>
            {jugadores.map((j: any) => <div>{j.nombre} {j.color}</div>)}
        </div>
    )
};

export default Juego;

