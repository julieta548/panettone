import React from 'react'
import './Hero.css'
import { useState, useEffect } from 'react';

function Hero() {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Revertir la visibilidad después de 3 segundos
        const timer = setTimeout(() => {
            setIsVisible(!isVisible);
        }, 3000);

        // Limpieza del temporizador al desmontar el componente
        return () => clearTimeout(timer);
    }, [isVisible]);

    return (
        <div id='inicio' className='hero'>
            <img className='img-hero' src="img/receta.svg" alt="" />
            <div className='encabezado'>
                <h1 className='titulo-hero'>Quiero</h1>
                <h1 className={`subtitulo-hero-1 ${isVisible ? 'visible' : 'oculto'}`}>compartir algo dulce en familia</h1>
                <h1 className={`subtitulo-hero-2 ${isVisible ? 'oculto' : 'visible'}`}>probar algo casero y rico</h1>
                <div className="llamada-contacto">
                    <a href='https://api.whatsapp.com/send?phone=542617232067&text=Hola!%20Quiero%20hacerte%20un%20pedido...
'>
                        <button className='btn boton-contacto'>¡Quiero probarlo!</button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Hero