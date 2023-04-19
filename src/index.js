import ReactDOM from 'react-dom/client'
import { Retornamiento, TextExample, TextAtibute, Validate, Button, Envienmelo, DarLikes,Calculator , Imagen, Counter, ExampleLink, ChangeColor, TaskList } from './Content.jsx'
// import FormValidate from './FormValidate.jsx'
/* import { Matrix } from './matrix.js' */
/* import Botonsote from './CalculatorBoton.jsx' */
/* import { useState, useEffect } from 'react'
import { useStatus } from 'react' */

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
/* A los atributos de los html de aqui, se les llama props */
    <>
        <TextExample />
        <Imagen />
        <Retornamiento />
        <Validate valido={false} />
        <Button />
        <Envienmelo />
        <TextAtibute
            titleExample='Texto de atributo'
            money={5000}
            nene={function () { alert('Hola') }}
        />
        <DarLikes />
        <Calculator />
        <Counter numberSelector={0} />
        <ExampleLink />
        <ChangeColor />
        <TaskList />
        {/* <Botonsote>Hola</Botonsote> */}
        {/* <EffectMatrix /> */}
        {/* <Matrix /> */}
        {/* <Tareas /> */}
    </>
)
