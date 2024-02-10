/** @format */

let productsArray = [
    {
        name: "Echo Dot 1° generación",
        precio: 999,
        id: 1,
        formato: "Producto",
        img: "../assets/imagenes/Productos/Eco Dot 1° generación.png",
        especificaciones1: "Facil de instalar",
        especificaciones2: "Controla tus dispositivos con tu voz",
        especificaciones3: "Se enlaza con tu asistente (alexa)",
        especificaciones4: "Reproduce musica",
    },
    {
        name: "Echo Dot 3° generación",
        precio: 1600,
        id: 2,
        formato: "Producto",
        img: "../assets/imagenes/Productos/Eco Dot 3° generación.png",
        especificaciones1: "Facil de instalar",
        especificaciones2: "Controla tus dispositivos con tu voz",
        especificaciones3: "Se enlaza con tu asistente (alexa)",
        especificaciones4: "Excelente audio",
    },
    {
        name: "Echo Dot 5° generación",
        precio: 2500,
        id: 3,
        formato: "Producto",
        img: "../assets/imagenes/Productos/Eco Dot 5° generación.png",
        especificaciones1: "Facil de instalar",
        especificaciones2: "Controla tus dispositivos con tu voz",
        especificaciones3: "Se enlaza con tu asistente (alexa)",
        especificaciones4: "Enlaza tu sistema de vigilancia",
    },
    {
        name: "Gen de hologramas",
        precio: 1999,
        id: 4,
        formato: "Producto",
        img: "../assets/imagenes/Productos/Generador de hologramas.png",
        especificaciones1: "Haz tus propios diseños",
        especificaciones2: "Solo conecta y disfruta",
        especificaciones3: "Se enlaza con tu asistente (alexa)",
        especificaciones4: "Disfruta de sus efectos con audio",
    },
    {
        name: "Luz RGB",
        precio: 300,
        id: 5,
        formato: "Producto",
        img: "../assets/imagenes/Productos/Luz RGB.png",
        especificaciones1: "Facil de instalar",
        especificaciones2: "Disfruta de sus efectos",
        especificaciones3: "Controla con tu asistente (alexa)",
        especificaciones4: "25 efectos pre-instalados y cargo los propios",
    },
    {
        name: "Enchufe inteligente",
        precio: 400,
        id: 6,
        formato: "Producto",
        img: "../assets/imagenes/Productos/Enchufe inteligente.jpg",
        especificaciones1: "Facil de instalar",
        especificaciones2: "Controla tus dispositivos con tu voz",
        especificaciones3: "Se enlaza con tu asistente (alexa)",
        especificaciones4: "Control ante descargas",
    },
];

let carritoDeCompras = [];

let productoSeleccionado;
function addProductsToCarrito(index) {
    productoSeleccionado = productsArray[index];
    carritoDeCompras.push(productoSeleccionado);
    localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));

    actualizarCarritoHTML();

    console.log("Producto añadido al carrito:", productoSeleccionado);
}

function deleteProductsToCarrito(index) {
    productoSeleccionado = productsArray[index];
    carritoDeCompras.splice(index, 1);
    localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));

    actualizarCarritoHTML();

    totalCost = calcularTotalCost(carritoDeCompras);
    let costoConEnvio = totalCost + envio;

    imprimeValorCompra(totalCost);
    imprimeValorCompraConEnvio(costoConEnvio);

    console.log("Producto borrado al carrito:", productoSeleccionado);
}

function calcularTotalCost(carrito) {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    return total;
}

function actualizarCarsHTML() {
    let div = document.getElementById("contenedor-cards");

    if (!div) {
        console.error(
            "El elemento contenedor-productos no se encontró en el DOM."
        );
        return;
    }

    div.innerHTML = "";

    productsArray.forEach(function (producto, index) {
        div.innerHTML += `
        <div
            class="col"
            data-aos="fade-right"
            data-aos-duration="3000">
            <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
                <img class="imagenProducto" src="${producto.img}" />
                <h3 class="my-0 fw-normal">${producto.name}</h3>
            </div>
            <div class="cardProducto">
                <h4 class="card-title pricing-card-title">$ ${producto.precio}</h4>
                <ul class="list-unstyled mt-3 mb-4">
                    <li>${producto.especificaciones1}</li>
                    <li>${producto.especificaciones2}</li>
                    <li>${producto.especificaciones3}</li>
                    <li>${producto.especificaciones4}</li>
                </ul>
                <button onclick="addProductsToCarrito(${index})" class="w-100 btn btn-lg btn-outline-primary">Comprar ahora</button>
            </div>
        </div>
        </div>
        </div>
        `;
    });
}

function actualizarCarritoHTML() {
    let tbody = document.querySelector("#contenedor-productos");
    if (tbody) {
        tbody.innerHTML = "";
    } else {
        console.error("El elemento tbody no se encontró en el DOM.");
        return;
    }

    carritoDeCompras.forEach(function (producto, index) {
        let row = document.createElement("tr");
        row.innerHTML = `
        <th scope="row">
            <div class="d-flex align-items-center">
                <p class="mb-2">${producto.name}</p>
            </div>
        </th>
        <td class="align-middle">
            <p class="mb-0" style="font-weight: 500">${producto.formato}</p>
        </td>
        <td class="align-middle">
            <p class="mb-0" style="font-weight: 500">$${producto.precio}</p>
        </td>
        <button type="button" class="btn btn-outline-danger" onclick="deleteProductsToCarrito(${index})">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
                </svg>
        </button>
    `;
        tbody.appendChild(row);
    });
}

window.onload = function () {
    let carritoGuardado = localStorage.getItem("carritoDeCompras");
    if (carritoGuardado) {
        carritoDeCompras = JSON.parse(carritoGuardado);
        actualizarCarritoHTML();
    }
};

let totalCost = 0;
let carritoDeComprasGuardado = localStorage.getItem("carritoDeCompras");

if (carritoDeComprasGuardado) {
    carritoDeCompras = JSON.parse(carritoDeComprasGuardado);

    for (let i = 0; i < carritoDeCompras.length; i++) {
        totalCost += carritoDeCompras[i].precio;
    }
    imprimeValorCompra(totalCost);

    console.log("Costo total del carrito de compras:", totalCost);
} else {
    console.log("No se encontró el carrito de compras en el localStorage.");
}

function imprimeValorCompra(totalCost) {
    let totalCostoCompra = document.getElementById("contenedor-saldos");

    if (!totalCostoCompra) {
        console.error(
            "El elemento contenedor-saldos no se encontró en el DOM."
        );
        return;
    }

    totalCostoCompra.innerHTML = "";

    totalCostoCompra.innerHTML += `
            <p class="mb-2">Subtotal</p>
            <p class="mb-2">$${totalCost}.00</p>
    `;
}

let envio = 300;
let costoConEnvio = totalCost + envio;
console.log(costoConEnvio);

function imprimeValorCompraConEnvio(costoConEnvio) {
    let totalCostoCompraEnvio = document.getElementById(
        "contenedor-saldosEnvio"
    );

    if (!totalCostoCompraEnvio) {
        console.error(
            "El elemento contenedor-saldos no se encontró en el DOM."
        );
        return;
    }

    totalCostoCompraEnvio.innerHTML = "";

    totalCostoCompraEnvio.innerHTML += `
            <p class="mb-2">Total (Impuestos incluidos)</p>
            <p class="mb-2">$${costoConEnvio}.00</p>
    `;

    actualizarCarritoHTML();
}

actualizarCarsHTML();
imprimeValorCompraConEnvio(costoConEnvio); // Llamada aquí para asegurar que se ejecute después del cálculo
