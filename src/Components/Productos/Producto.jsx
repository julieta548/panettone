import React from 'react'
import './Producto.css'

function Producto() {
    return (
        <div className='productos' id='productos'>
            <svg className='svg-productos' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f1c167" fill-opacity="1" d="M0,320L40,304C80,288,160,256,240,250.7C320,245,400,267,480,234.7C560,203,640,117,720,101.3C800,85,880,139,960,160C1040,181,1120,171,1200,149.3C1280,128,1360,96,1400,80L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            <img className='img-productos' src="img/pibas.png" alt="" />
            <img className='img-productos-2' src="img/piba.png" alt="" />
            <svg className='svg-productos-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f1c167" fill-opacity="1" d="M0,288L120,288C240,288,480,288,720,250.7C960,213,1200,139,1320,101.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            <div className='encabezado-2 slide-top'>
                <h1 className='titulo-productos'>Nuestros productos</h1>
                <h3 className='descripcion-productos'>Elaborados de forma casera, vas a encontrar su sabor incomparable.
                    ¡Encarganos tu pedido y disfrutá de nuestras delicias!</h3>
                <div className="llamada-productos">
                    <a href='https://api.whatsapp.com/send?phone=542617232067&text=Hola!%20Quiero%20hacerte%20un%20pedido...
'><button className='btn boton-producto'>Hacer un pedido</button></a>
                </div>
            </div>
            <div className="cards">
                <div className="card clasico" data-bs-toggle="modal" data-bs-target="#clasico">
                    <div className="imagen-card-panettone">
                    </div>
                    <div className="superposicion">
                        <h3 className='precio'></h3>
                        <h2 className='nombre'>Pan dulce clásico</h2>
                        <p className='vermas'>Ver más</p>
                    </div>
                </div>

                <div class="modal fade" id="clasico" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card chispas" data-bs-toggle="modal" data-bs-target="#chispas">
                    <div className="imagen-card-panettone"></div>
                    <div className="superposicion">
                        <h3 className='precio'></h3>
                        <h2 className='nombre'>Pan dulce chispas de chocolate</h2>
                        <p className='vermas'>Ver más</p>
                    </div>
                </div>

                <div class="modal fade" id="chispas" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Pan dulce con chispas de chocolate</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Elaborado de forma casera. Contamos con dos tamaños: de 250g y de 500g. Bañados en glasé y húmedos. ¡Encargá el tuyo!</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card frambuesa" data-bs-toggle="modal" data-bs-target="#frambuesa">
                    <div className="imagen-card-panettone">
                    </div>
                    <div className="superposicion">
                        <h3 className='precio'></h3>
                        <h2 className='nombre'>Pan dulce chispas y frambuesa</h2>
                        <p className='vermas'>Ver más</p>
                    </div>
                </div>

                <div class="modal fade" id="frambuesa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Pan dulce con chispas y frambuesa</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Elaborado de forma casera. Contamos con dos tamaños: de 250g y de 500g. Bañados en glasé y húmedos. ¡Encargá el tuyo!</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div >
                    <div className="imagen">
                        <img src="" alt="" />
                    </div>
                    <h3></h3>
                </div>
                <div className="card alfajores" data-bs-toggle="modal" data-bs-target="#maicena">
                    <div className="imagen-card-alfajores"></div>
                    <div className="superposicion">
                        <h3 className='precio'>$1200</h3>
                        <h2 className='nombre'>Alfajores de maicena</h2>
                        <p className='vermas'>Ver más</p>
                    </div>
                </div>

                <div class="modal fade" id="maicena" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Alfajores de maicena</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Elaborados de forma casera. Su tamaño es de 6cm de diámetro y se vende por docena. ¡Podés encargar de la medida que necesites!</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card pan" data-bs-toggle="modal" data-bs-target="#integral">
                    <div className="imagen-card-pan"></div>
                    <div className="superposicion">
                        <h3 className='precio'></h3>
                        <h2 className='nombre'>Pan integral</h2>
                        <p className='vermas'>Ver más</p>
                    </div>
                </div>

                <div class="modal fade" id="integral" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Pan integral</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Es casero y fresco, de aproximadamente 600g y podés pedirlo con o sin semillas.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Producto