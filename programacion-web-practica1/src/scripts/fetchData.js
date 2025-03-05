document.getElementById('btnFetch').addEventListener('click', async () => {
  
  try {
    // Realizamos la petición fetch de manera asíncrona
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    //   headers: {
    //     'Accept': 'application/json'
    //   }
    // });
    // Convertimos la respuesta a formato JSON
    const data = await response.json();
    // Mostramos los datos en la consola

    console.log(data);
  } catch (error) {
    // Capturamos y mostramos cualquier error que ocurra durante la petición
    console.error('Error al obtener los usuarios:', error);
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const links = document.querySelectorAll(".nav-links a");

  // Mostrar/Ocultar menú al hacer clic en el botón
  menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show");
  });

  // Cerrar el menú al hacer clic en un enlace
  links.forEach(link => {
      link.addEventListener("click", function () {
          navLinks.classList.remove("show");
      });
  });
});



