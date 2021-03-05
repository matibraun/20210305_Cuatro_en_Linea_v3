import React, { useState, useEffect } from 'react';

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
    

    return (
        <div>
            {jugadores}
            {tablero}
        </div>
    )
};

export default Juego;