const formularioProducto = document.getElementById("formulario-producto");
const listaProductos = document.getElementById("lista-productos");

formularioProducto.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const datos = new FormData(formularioProducto);
    const nombre = datos.get("nombre").trim();
    const cantidad = Number(datos.get("cantidad"));

    if (!nombre || !Number.isInteger(cantidad) || cantidad < 1) {
        return;
    }

    const fila = document.createElement("tr");
    const celdaNombre = document.createElement("td");
    const celdaCantidad = document.createElement("td");

    celdaNombre.textContent = nombre;
    celdaCantidad.textContent = cantidad;
    fila.append(celdaNombre, celdaCantidad);
    listaProductos.append(fila);

    formularioProducto.reset();
});