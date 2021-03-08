import React, { useState, useEffect } from 'react';

function Jugadores (props: any) {

    const [nombreJugador, setNombreJugador] = useState('');
    const [color, setColor] = useState('');

    function handleChangeNombreJugador (event: any) {
        const value = event.target.value;
        setNombreJugador(value)
    };

    function handleChangeColor (event: any) {
        const value = event.target.value;
        setColor(value)
    };

    function handleClickCargarJugador () {
        props.agregarJugador(nombreJugador, color)
    };

return(
        <div>
            Igrese el nombre del Jugador:
            <input type="text" value={nombreJugador} name='nombre jugador' onChange={handleChangeNombreJugador}/> <br />
            {nombreJugador} <br />
            Igrese el color seleccionado:
            <input type="text" value={color} name='color' onChange={handleChangeColor}/> <br />
            {color} <br />
            <button onClick={handleClickCargarJugador}>Cargar Jugador</button>

        </div>
    )

};

export default Jugadores;