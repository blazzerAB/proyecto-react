import { useState } from "react";
import { Validate } from "./Content";
import styles from "./styles.module.css";

function Cambiamelo() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  if (title == "delete title") {
    setTitle("");
  }

  if (description == "delete description") {
    setDescription("");
  }

  const login = (titulo, descriccion) => {
    if (title == "arnaldo@gmail.com" && description == "nada") {
      console.log("Datos correcto");
    } else {
      console.log("Datos invalidos");
    }
  };

  const dataDefined = (e) => {
    e.preventDefault();
    const newText = {
      description,
      title,
    };
    if (title && description) {
      const datos = {
        title: "Nada",
        description: "describeme",
      };
      crearTarea(newText);
    } else {
      console.log("Dabes llenar los campos titulo y descriccion");
      alert("Dabes llenar los campos titulo y descriccion");
    }
  };

  function crearTarea(setTarea) {
    if (!title.includes("@") && description.length < 10) {
      alert("Falta el @ en el Gmail. Debe volver a intentar!");
    } else {
      var resultado = window.confirm(
        "Gmail enviado, Quieres ver tu datos enviados?"
      );
      if (resultado === true) {
        window.alert(`Titulo: ${title}. Descriccion: ${description}.`);
      } else {
        window.alert("Ok no hay error en el envio... Adios!");
      }
    }

    if (resultado) {
      var textUser = {
        id: 1,
        title: "Antonio",
        description: "nada mal",
      };
      var textoUsuario = {
        ...textUser,
        id: 1,
        title: setTarea.title,
        description: setTarea.description,
      };
      console.log(
        textoUsuario.id,
        textoUsuario.title,
        textoUsuario.description
      );
    } else {
      console.log("No aceptastes los datos...");
    }
  }

  return (
    <>
      <form onSubmit={dataDefined}>
        <div className={`${styles.content_div} ${styles.example_margin}`}>
          <input
            className={styles.input_vb}
            type="text"
            name="titulo"
            placeholder="Titulo..."
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className={styles.input_vc}
            type="text"
            name="descriccion"
            placeholder="Descriccion..."
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className={styles.btn_vb}>Cambios</button>
        </div>
        <br />
        <br />
        <div className="content-div-2">
          <input type="text" className="input-vd" />
          <button className={styles.btn_number_4}>a</button>
          <button className={styles.btn_number_1}>b</button>
          <button className={styles.btn_number_2}>c</button>
          <button className={styles.btn_number_3}>d</button>
        </div>
      </form>
      <p>Titulo: {title}</p>
      <p>Description: {description}</p>
    </>
  );
}

export default Cambiamelo;
