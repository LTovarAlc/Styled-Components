import React from "react";
import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import otros from "./assets/images/otros.svg";
import transporte from "./assets/images/transporte.svg";
import utilidades from "./assets/images/utilidades.svg";
import { Icono } from "./Components/UI";


export default ( type ) => {
    const Images ={
        Restaurante: <Icono src={alimentacion} alt="restaurante"/>,
        Salud: <Icono src={salud} alt="Salud"/>,
        Otros: <Icono src={otros} alt="Otros"/>,
        Transporte: <Icono src={transporte} alt="transporte"/>,
        Utilidades: <Icono src={utilidades} alt="Utilidades"/>,
        Default: <Icono src={otros} alt="Otros"/>
    };

    return Images[type] || Image["default"];
}