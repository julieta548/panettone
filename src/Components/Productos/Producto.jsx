import React from 'react'
import './Producto.css'

function Producto() {
    return (
        <div className='productos'>
            <svg className='svg-productos' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f1c167" fill-opacity="1" d="M0,320L40,304C80,288,160,256,240,250.7C320,245,400,267,480,234.7C560,203,640,117,720,101.3C800,85,880,139,960,160C1040,181,1120,171,1200,149.3C1280,128,1360,96,1400,80L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            <img className='img-productos' src="img/pibas.png" alt="" />
            <img className='img-productos-2' src="img/piba.png" alt="" />
            <div className='encabezado-2'>
                <h1 className='titulo-productos'>Nuestros productos</h1>
                <h3 className='descripcion-productos'>Elaborados de forma casera, vas a encontrar su sabor incomparable.
                    ¡Encarganos tu pedido y disfrutá de nuestras delicias!</h3>
                <div className="llamada-productos">
                    <button className='btn boton-producto'>Hacer un pedido</button>
                </div>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="imagen-card-panettone">
                    </div>
                    <h3 className='item-texto'>Pan dulce clásico</h3>
                </div>

                <div className="card">
                    <div className="imagen-card-panettone"></div>
                    <h3 className='item-texto'>Pan dulce con chispas de chocolate</h3>
                </div>

                <div className="card">
                    <div className="imagen-card-panettone">

                    </div>
                    <h3 className='item-texto'>Pan dulce con chispas y frambuesa</h3>
                </div>
                <div >
                    <div className="imagen">
                        <img src="" alt="" />
                    </div>
                    <h3></h3>
                </div>
                <div className="card">
                    <div className="imagen-card-alfajores"></div>
                    <h3 className='item-texto'>Alfajores de maicena</h3>
                </div>
                <div className="card">
                    <div className="imagen-card-pan"></div>
                    <h3 className='item-texto'>Pan integral</h3>
                </div>
            </div>
        </div>
    )
}

export default Producto