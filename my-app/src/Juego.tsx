import React, { useState, useEffect } from 'react';
import Jugadores from './Jugadores'
import Tablero from './Tablero'

function Juego () {

    type State = {
        jugadores: Array<Jugador>;
        botones: Array<number>;
        tablero: Array<Fila>;
        turno: string;
        momentoJuego: 'cargandoParticipantes' | 'jugando' | 'juegoFinalizado';
    };
    
    type Fila = Array<Posicion>;
    
    type Posicion = string;
    
    type Jugador = {
        nombre: string;
        color: string;
    };

    const [jugadores, setJugadores] = useState([] as any);
    const [tablero, setTablero] = useState([] as any);
    const [botones, setBotones] = useState([] as any);
    const [momentoJuego, setMomentoJuego] = useState('cargandoParticipantes');
    const [turno, setTurno] = useState('');

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

        const filaTipo = [];
        const tableroProvisorio = [];
        const botonesProvisorio = [];

        for (let i = 0; i < cantColumnas; i++) {
            filaTipo.push('0');
            botonesProvisorio.push(i);
        };

        for (let j = 0; j < cantFilas; j++) {
            tableroProvisorio.push(filaTipo.slice())
        };

        setTablero(tableroProvisorio);
        setBotones(botonesProvisorio);

    };

    function handleClickIniciarJuego () {
        if (jugadores[0] === undefined) {
            alert('Aun no se han cargado los jugadores')
        }
        else if (tablero[0] === undefined) {
            alert('Aun no se ha cargado el tablero')
        }
        else {
            setMomentoJuego('jugando')
            setTurno(jugadores[0].nombre)
        };

 
        console.log(turno)


    };

    function handleClickPonerFicha (event: any) {

        if (tablero[0][event.target.name] !== '0') {
            alert('La columna seleccionada ya esta llena. Por favor elija otra.')
        } 
        
        else {

            const tableroProvisorio = [...tablero];
            
            for (var numeroFila = tableroProvisorio.length - 1; numeroFila >= 0; numeroFila--) {
            
                if (tableroProvisorio[numeroFila][parseInt(event.target.name)] === '0') {
                    tableroProvisorio[numeroFila][parseInt(event.target.name)] = turno;
                    break;
                }
            }

            setTablero(tableroProvisorio);
            pasarTurno();

            console.log(tablero);

        };

    }

    function pasarTurno () {

        // console.log(turno)
        console.log(jugadores[jugadores.length - 1].nombre)
        if (turno === jugadores[jugadores.length - 1].nombre) {
            setTurno(jugadores[0].nombre)
        }
        else {
            const index = jugadores.findIndex((jugador: any) => jugador.nombre === turno);
            setTurno(jugadores[index + 1].nombre)
        }
    }


    return (
        <div>

            < Jugadores agregarJugador={agregarJugador}/>
            {jugadores.map((j: any, index: any) => <div key={index}>{j.nombre} {j.color}</div>)}
            ----------------------------------------- <br/>
            
            < Tablero crearTablero={crearTablero}/> <br/>
            {botones.map((boton: any, index: any) => 
            <button
            onClick={handleClickPonerFicha}
            key={index}
            name={boton}>
                Columna {boton + 1}
            </button>)} <br/>

            {tablero.map((fila: any, index: any) => <div key={index}> {fila} </div>)} <br/>
            ----------------------------------------- <br/>

            {momentoJuego} <br/>
            <button onClick={handleClickIniciarJuego}>Iniciar Juego</button> <br/>
            Es el turno de {turno}

        </div>
    )
};

export default Juego;

