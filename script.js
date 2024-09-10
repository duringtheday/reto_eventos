// Reto: Eventos
// 1. Crea una sección de productos con un botón que al 
// agregar un producto al carrito muestre una tarjeta de 
// color verde que indique que el producto se ha agregado 
// al carrito y el nombre del producto. 🧠
// 2. Intenta escribir el código de HTML, CSS y JS que ves 
// en esta página renderizada. No tiene que ser perfecto! 🧑‍💻 

// document.addEventListener('DOMContentLoaded', () => {

//     // Get all 'agregar-carrito' buttons
//     const agregarCarritoButtons = document.querySelectorAll('.agregar-carrito');

//     agregarCarritoButtons.forEach(button => {

//         // Add click event listener to each button
//         button.addEventListener('click', function() {
//             // Find the '.mensaje' container within the clicked button
//             const producto = button.closest('.productos');
//             const mensaje = button.querySelector('.mensaje');
//             const mensajeCarrito = mensaje.querySelector('.mensaje-carrito');
//             const nombreProducto = producto.querySelector('h4').textContent;

//             // Update message content
//             mensajeCarrito.textContent = `Producto agregado al carrito: ${nombreProducto}`;

//             // Show the message container
//             mensaje.style.display = 'block';

//             // Hide the message after 2 seconds
//             setTimeout(() => {
//                 mensaje.style.display = 'none';
//             }, 2000);
//         });
//     });

// });




// document.addEventListener('DOMContentLoaded', () => {

//     // Get all 'agregar-carrito' buttons
//     const agregarCarritoButtons = document.querySelectorAll('.agregar-carrito');

//     agregarCarritoButtons.forEach(button => {

//         // Add click event listener to each button
//         button.addEventListener('click', function() {
//             // Traverse up to find the nearest '.productos' container
//             let producto = button.parentElement;
//             while (producto && !producto.classList.contains('productos')) {
//                 producto = producto.parentElement;
//             }

//             if (producto) {
//                 const mensaje = button.querySelector('.mensaje');
//                 const mensajeCarrito = mensaje.querySelector('.mensaje-carrito');
//                 const nombreProducto = producto.querySelector('h4').textContent;

//                 // Update message content
//                 mensajeCarrito.textContent = `Producto agregado al carrito: ${nombreProducto}`;

//                 // Show the message container
//                 mensaje.style.display = 'block';

//                 // Hide the message after 2 seconds
//                 setTimeout(() => {
//                     mensaje.style.display = 'none';
//                 }, 2000);
//             } else {
//                 console.error('No se encontró el contenedor del producto.');
//             }
//         });
//     });

// });



document.addEventListener('DOMContentLoaded', () => {

    // Get all 'agregar-carrito' buttons
    const agregarCarritoButtons = document.querySelectorAll('.agregar-carrito');

    agregarCarritoButtons.forEach(button => {

        // Add click event listener to each button
        button.addEventListener('click', function () {
            // Find the '.mensaje' container within the clicked button
            const producto = button.parentElement;
            const mensaje = button.querySelector('.mensaje');
            const mensajeCarrito = mensaje.querySelector('.mensaje-carrito');
            const nombreProducto = producto.querySelector('h4').textContent;

            // Update message content
            mensajeCarrito.textContent = `Producto agregado al carrito: ${nombreProducto}`;

            // Show the message container
            mensaje.style.display = 'block';

            // Hide the message after 2 seconds
            setTimeout(() => {
                mensaje.style.display = 'none';
            }, 2000);
        });
    });

});