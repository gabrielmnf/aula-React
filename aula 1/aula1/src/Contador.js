import React, { useState } from 'react'

export default function Contador() {

    const [contador, setContador] = useState(0);

    function incContador(){
        setContador( contador + 1 );
    }

    function decContador(){
        setContador( (contador) => contador - 1);
    }


    return (
        <div>
            <h1>Exemplo do componente contador</h1>
            <p>{contador}</p>
            <button onClick={incContador}>Incrementa</button>
            <button onClick={decContador}>Decrementa</button>
        </div>
    )
}
