/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-redeclare */
/* Quiere decir que todo el contenido se exportara, se importa sin {} */
// export default xFunction
import { useState, useEffect } from "react";
import "./styles.css";
import FormValidate from "./FormValidate.jsx";
import TaskContent from "./context/TaskContent.jsx";
import { Tareas } from "./tareas.js";
import { createElement } from "react";
import { Redirection } from "./Redirection.jsx";
import { ListTasks, ListInput } from "./Tasks";
import {
  CalculatorBotton,
  CalculatorOperator,
  ButtonDelete,
  CalculatorPantalla,
} from "./CalculatorBottons.jsx";
import { evaluate, number } from "mathjs";
// import { evaluate } from 'mathjs';

// const techReact = (params) => {
//     createElement('div', [className: 'tech'], [
//         Reach.createElement('img', [
//             src: `http://logo.clearbit.com/${params.url`,
//         ]),
//         React.createElement('span', null, params.name)
//     ])
// }

// const TECHNOLOGIES = [
//     (
//         url : 'reactjs.org',
//         name : 'Reactjs',
//     ),
//     (
//         url : 'nodejs.org',
//         name : 'Nodejs',
//     ),
//     (
//         url : 'graphql.org',
//         name : Graphql,
//     )
// ]

// export function Opacar() {

//     const Avatar = params => {
//         const src = 'http://...'

//         params.id

//         return `<picture>
//             <img src="${src}" />
//             <en>${params.name}</en>
//         </picture>`
//     }

//     $app.innerHTML += Avatar({id : 5, name : 'Nada Pa'})

//     $app.querySelectorAll('img').forEach(img => {
//         img.addEventListener('click', () => {
//             img.ClassList.togger('disabled')
//         })
//     })
// }

export function Retornamiento() {
  const user = {
    name: "Antoni",
    lastname: "Gonzales",
    numberphone: "020304912",
  };
  return (
    <>
      <h4>{user.name}</h4>
      <h4>{user.lastname}</h4>
      <h4>{user.numberphone}</h4>
    </>
  );
}

const example = ({ uploadDate }) => {
  // <span>{uploadDate.toLocaleDateString()}</span>
};

export function TextExample() {
  const titulo = (texto) => <h1>{texto}</h1>;
  // const titulo_1 = props => <h1>{props.texto}</h1>
  // const titulo_2 = props => <h1>{props.children}</h1>
  return (
    <div className="arnolb">
      {titulo("Hola desde React. Con un componente 😀")}
      {/* <titulo_1 texto_1='Hola desde React. Con otro metodo 😀'/> */}
      {/* <titulo_2>'Hola desde React. Con otro metodo 😀'</titulo_2>*/}
      {/* <example uploadDate={new Date(2022, 3, 3)} /> */}
    </div>
  );
}

export function TextAtibute(contenido) {
  console.log(contenido.nene);
  return (
    <div>
      <h2>{contenido.titleExample}</h2>
      <h2>💵{contenido.money}💵</h2>
    </div>
  );
}

export function Validate({ valido }) {
  return (
    <div>
      <h3 style={valido ? { color: "blue" } : { color: "red" }}>
        {valido ? "Validacion exitosa" : "Validacion denegada"}
      </h3>
    </div>
  );
}

export function Button() {
  var number_1 = 0;
  var number_1 = number_1 + 1;
  return (
    <button
      className="btn-vr"
      onClick={function () {
        console.log(`Acabas de dar CLICK veces`);
        console.log(number_1);
      }}
    >
      Tocamelo
    </button>
  );
}

export function Envienmelo() {
  return <FormValidate />;
}

export function Imagen() {
  const [inabled, setInabled] = useState(true);
  const classStyle = inabled ? "disabled_1 disabled_2" : "disabled_1";
  const [invocation, setInvocation] = useState(true);
  const show = invocation ? true : false;

  const Esto = () => {
    return <button className="btn-vr">Hola!</button>;
  };

  const Img_Avatar = (params) => {
    const nameText = !inabled
      ? `${params.name}`
      : `${(params = "Desactivado")}`;

    return (
      <>
        <img
          className="c-img-1"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg"
          onClick={(event) => {
            event.target.classList.toggle("disabled_1");
          }}
        />

        <div>
          <img
            className={classStyle}
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg"
            onClick={() => setInabled(!inabled)}
          />
          <b className="b-center">{nameText}</b>
        </div>
      </>
    );
  };
  return (
    <>
      <Img_Avatar name="Alex" />
      <button onClick={() => setInvocation(!invocation)}>Mejor</button>
      {!show ? <Esto /> : ""}
    </>
  );
}

const Likes = ({ initialLikes }) => {
  const [likesOne, setLikesOne] = useState(initialLikes);
  const [likesTwo, setLikesTwo] = useState(initialLikes);
  const [hadle, setHadle] = useState(initialLikes);
  const [hello, setHello] = useState(10);
  // let Intervalor

  // const Conteo = () => {
  //     setInterval(() => {
  //         console.log('Hola...')
  //         setHello(backTime => backTime - 1)
  //     }, 500)
  // const Intervalor = setInterval(() => setHello(backTime => backTime - 1), 500)
  // alert('Iniciando...')
  // }

  // if (hello === 0) {
  // alert('Hola, Bienvenid@')
  // clearInterval(Intervalor)
  //     setHello(backTime => backTime = 10)
  // }

  useEffect(() => {
    const intervarValid = setInterval(
      () => setHello((backTime) => backTime - 1),
      100000
    );

    if (hello === 1) {
      return () => clearInterval(intervarValid);
    }
  }, []);

  if (hadle === 50) {
    alert("Haz dado 50 click eliminando datos...");
    const nada = setHadle(0);
  }

  useEffect(() => {
    const hadleClick = () => {
      console.log(hadleClick);
      setHadle((prevClicks) => prevClicks + 1);
    };
    document.addEventListener("click", hadleClick);

    return () => document.removeEventListener("click", hadleClick);
  }, []);

  useEffect(() => {
    if (likesOne === 0) return;
    document.title = likesOne;
    console.log({ likesOne });
  }, [likesOne]);

  return (
    <>
      <button onClick={() => setLikesOne(likesOne + 1)} className="btn-vr">
        {likesOne} likes
      </button>
      <button onClick={() => setLikesTwo(likesTwo + 2)} className="btn-vr">
        {likesTwo} likesTwo
      </button>
      {/* <button onClick={() => Conteo()}>conteo</button> */}
      <h2>{hadle}</h2>
      <h2>{hello}</h2>
    </>
  );
};

export function DarLikes() {
  // const [show, setShow] = useEffect(true)

  return (
    <div>
      <Likes initialLikes={0} />
      {/* {show && <Likes initialLikes={0} />}
            <button onClick={() => setShow(!show)}>Eliminar</button> */}
    </div>
  );
}

/*
Calculadora... Los botones lo que hacen es enviar props al input, que lo que hace en cacular sus
caracteres pertenecientes, dependiendo del paquete mathjs
*/

export function Calculator() {
  const [num_1, setNum_1] = useState("");
  const [operator_t, setOperator_t] = useState();

  const addNum = (val) => {
    setNum_1(num_1 + val);
  };

  const calculateResult = (val) => {
    if (num_1) {
      setNum_1(evaluate(num_1));
    } else {
      alert("Por favor, ingrese caracteres para ejecutar sus calculos!");
    }
  };

  return (
    <>
      <div className="calculator-container">
        <div className="calculator-div-text">
          <CalculatorPantalla num={num_1} />
        </div>
        <div>
          <CalculatorBotton showInputBotton={addNum}>1</CalculatorBotton>
          <CalculatorBotton showInputBotton={addNum}>2</CalculatorBotton>
          <CalculatorBotton showInputBotton={addNum}>3</CalculatorBotton>
          <CalculatorOperator showInputOperator={addNum}>+</CalculatorOperator>
        </div>
        <div>
          <CalculatorBotton showInputBotton={addNum}>4</CalculatorBotton>
          <CalculatorBotton showInputBotton={addNum}>5</CalculatorBotton>
          <CalculatorBotton showInputBotton={addNum}>6</CalculatorBotton>
          <CalculatorOperator showInputOperator={addNum}>-</CalculatorOperator>
        </div>
        <div>
          <CalculatorBotton showInputBotton={addNum}>7</CalculatorBotton>
          <CalculatorBotton showInputBotton={addNum}>8</CalculatorBotton>
          <CalculatorBotton showInputBotton={addNum}>9</CalculatorBotton>
          <CalculatorOperator showInputOperator={addNum}>*</CalculatorOperator>
        </div>
        <div>
          <CalculatorBotton showInputBotton={calculateResult}>
            =
          </CalculatorBotton>
          <CalculatorBotton showInputBotton={addNum}>0</CalculatorBotton>
          <CalculatorBotton showInputBotton={addNum}>.</CalculatorBotton>
          <CalculatorOperator showInputOperator={addNum}>/</CalculatorOperator>
        </div>
        <div>
          <ButtonDelete deleteInput={() => setNum_1("")} />
          <b className="autor-text">Autor: Arnaldo Bravo</b>
        </div>
      </div>
    </>
  );
}

export function Counter({ numberSelector }) {
  const [counterButton, setCounterButton] = useState(numberSelector);

  return (
    <>
      <div className="counterDiv">
        <h3 className="counterH3">{counterButton}</h3>
        <button
          className="counterButton"
          onClick={() => setCounterButton(counterButton + 1)}
        >
          Mas
        </button>
        <button
          className="counterButton"
          onClick={() => setCounterButton(counterButton - 1)}
        >
          Menos
        </button>
        <button
          className="counterButtonD"
          onClick={() => setCounterButton(counterButton ** 2)}
        >
          Raiz C.
        </button>
        <button className="counterButtonD" onClick={() => setCounterButton(0)}>
          Resetear
        </button>
        <input
          className="counterInput"
          type="text"
          onChange={(e) => setCounterButton(e.target.value)}
        />
      </div>
    </>
  );
}

export function EffectMatrix() {
  const canvas = document.getElementById("canv");
  const ctx = canvas.getContext("2d");
  const w = (canvas.width = document.body.offsetWidth);
  const h = (canvas.height = document.body.offsetHeight);
  const cols = Math.floor(w / 20) + 1;
  const ypos = Array(cols).fill(0);

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);

  const Matrix = () => {
    ctx.fillStyle = "#0001";
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "#0f0";
    ctx.font = "15pt monospace";

    ypos.forEach((y, ind) => {
      const text = String.fromCharCode(Math.random() * 128);
      const x = ind * 20;
      ctx.fillText(text, x, y);

      if (y > 10 + Math.random() * 10000) ypos[ind] = 0;
      else ypos[ind] = y + 20;
    });
  };

  setInterval(Matrix, 50);

  return (
    <>
      <canvas id="canv" className="styleCanvas"></canvas>
    </>
  );
}

export function ExampleLink() {
  return (
    <>
      <a className="navLink" href={"./Redirection.jsx"}>
        Example Link
      </a>
    </>
  );
}

export function ChangeColor() {
  const [active, setActive] = useState(true);

  const [changeColor, setChangeColor] = useState("");
  const defaultChangeColor = active ? "changeColorH3" : changeColor;

  const [changeBg, setChangeBg] = useState("");
  const testChangeBg = active ? "changeColorContainer" : changeBg;

  return (
    <>
      <div className={testChangeBg}>
        <h3 className={defaultChangeColor}>Example Text</h3>
        <button
          className="changeColorButtonOne"
          onClick={() => {
            setActive(!active);
            setChangeColor("changeColorH3 changeColorH3One");
            setChangeBg("changeColorContainer changeColorContainerOne");
          }}
        >
          red
        </button>
        <button
          className="changeColorButtonOne changeColorButtonTwo"
          onClick={() => {
            setActive(!active);
            setChangeColor("changeColorH3 changeColorH3Two");
            setChangeBg("changeColorContainer changeColorContainerTwo");
          }}
        >
          green
        </button>
        <button
          className="changeColorButtonOne changeColorButtonThree"
          onClick={() => {
            setActive(!active);
            setChangeColor("changeColorH3 changeColorH3Three");
            setChangeBg("changeColorContainer changeColorContainerThree");
          }}
        >
          blue
        </button>
      </div>
    </>
  );
}

export function TaskList() {
  const [crossOut, setCrossOut] = useState(true);
  const [data, setData] = useState("");
  const [changeValidate, setChangeValidate] = useState(true);

  const dataTake = (data) => {
    setData(data);
  };

  const close = () => {
    setCrossOut(!crossOut);
  };

  return (
    <>
      <div className="taskContainer">
        <h3 className="taskH3">to do listen!</h3>
        <ListInput
          ejecutar={dataTake}
          addValidate={() => setChangeValidate(!changeValidate)}
        ></ListInput>
        <ListTasks
          completed={close}
          completedTask={crossOut}
          taskText={data}
          addValid={changeValidate}
          deleteList={() => setChangeValidate(!changeValidate)}
        ></ListTasks>
      </div>
    </>
  );
}
