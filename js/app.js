//Import stock
import * as capStockJs from "/js/stock/capStock.js"
import * as jacketsStockJs from "/js/stock/jacketsStock.js";


//pintar productos contenedor 1
const contenedorProductosUno = document.getElementById('contenedor-productos1');

capStockJs.capStock.forEach((cadaProducto) => {
    const div = document.createElement('div');
    div.classList.add('col-md-3');
    div.classList.add('col-sm-12');
    div.innerHTML = `
     <div class="card text-bg-dark text-dark">
                        <img src=${cadaProducto.img} class="card-img" alt="...">
                        <div class="card-img-overlay d-flex flex-column">
                            <div class="d-flex flex-row gap-5">
                                <h5 class="card-title flex-grow-1">${cadaProducto.nombre}</h5>
                                <h5 class="align-self-end bg-success rounded-circle p-3 text-white">$ ${cadaProducto.precio / (100 / cadaProducto.dcto)}</h5>
                            </div>
                            <p class="card-text flex-grow-1"><small>${cadaProducto.detail}</small></p>
                            <button id="agregar${cadaProducto.id}" class="btn btn-primary"> Añadir al carrito <i class="fa-solid fa-cart-plus"></i></button>
                        </div>
                    </div>
    `
    contenedorProductosUno.appendChild(div)
})


//pintar productos contenedor 2
const contenedorProductosDos = document.getElementById('contenedor-productos1');

jacketsStockJs.jacketsStock.forEach((cadaProducto) => {
    const div = document.createElement('div');
    div.classList.add('col-md-6');
    div.classList.add('col-sm-12');
    div.innerHTML = `
     <div class="col-md-12 col-sm-12">
                    <div class="card mb-3 bg-dark text-white">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src=${cadaProducto.img} class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body d-flex flex-column gap-3">
                                    <div class="d-flex flex-row">
                                        <h3 class="card-title flex-grow-1">${cadaProducto.nombre}</h3>
                                        <h5 class="align-self-end bg-success rounded-circle p-3 text-white">${cadaProducto.precio / (100 / cadaProducto.dcto)}</h5>
                                    </div>
                                    <p class="card-text">${cadaProducto.detail}</p>
                                    <p class="card-text flex-grow-1"><small class="text-muted">Colección de invierno</small></p>
                                    <button id="agregar${cadaProducto.id}" class="btn btn-primary align-self-end"> Añadir al carrito <i class="fa-solid fa-cart-plus"></i></button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
    `
    contenedorProductosDos.appendChild(div);

  
})


/* agregar productos carrito */

let carrito = [];

const agregarAlcarrito = (prodId) => {
    const item = capStockJs.capStock.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito);
}














