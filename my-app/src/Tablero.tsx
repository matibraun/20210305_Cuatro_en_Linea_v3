import React, { useState, useEffect } from 'react';

function Tablero (props: any) {

    const [cantFilas, setCantFilas] = useState(0);
    const [cantColumnas, setCantColumnas] = useState(0);

    function handleChangeCantFilas (event: any) {
        setCantFilas(event.target.value)
    };

    function handleChangeCantColumnas (event: any) {
        setCantColumnas(event.target.value)
    };

    function handleClick () {
        props.crearTablero(cantFilas, cantColumnas)
    };

    return (
        <div>
            Ingrese la cantidad de filas:
            <input type="number" value={cantFilas} name='cantidad filas' onChange={handleChangeCantFilas}/> <br/>
            Ingrese la cantidad de columnas:
            <input type="number" value={cantColumnas} name='cantidad columnas' onChange={handleChangeCantColumnas}/> <br/>
            <button onClick={handleClick}>Crear tablero</button> <br/>
        </div>
    )
};

export default Tablero;