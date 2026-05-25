import React, { Fragment } from "react";

export default props => 
    // para mandar mais de um elemento, é necessário envolver tudo em uma div ou usar um Fragment
    // uso do Fragment para evitar criar uma div desnecessária 
    <Fragment>
        <h1>Bom dia, {props.nome}! </h1>
        <h2>Sua idade é {props.idade} anos.</h2>
    </Fragment>

    // Tbm dá para usar array para mandar mais de um elemento, mas é necessário usar a propriedade key para cada elemento
    // export default props => 
    //     [
    //         <h1 key="h1">Bom dia, {props.nome}! </h1>,
    //         <h2 key="h2">Sua idade é {props.idade} anos.</h2>
    //     ]