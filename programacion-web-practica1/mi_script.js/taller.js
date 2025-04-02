// Función que verifica si un número es primo
function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Ejemplo de uso
  console.log(esPrimo(7));  // true
  console.log(esPrimo(10)); // false
  

  const opciones = ["piedra", "papel", "tijeras"];

  // Función para jugar
  function jugar(eleccionUsuario) {
    const opcionesRandom = opciones[Math.floor(Math.random() * 3)];
    if (eleccionUsuario === opcionesRandom) {
      return "Es un empate";
    } else if (
      (eleccionUsuario === "piedra" && opcionesRandom === "tijeras") ||
      (eleccionUsuario === "papel" && opcionesRandom === "piedra") ||
      (eleccionUsuario === "tijeras" && opcionesRandom === "papel")
    ) {
      return "¡Ganaste!";
    } else {
      return "Perdiste";
    }
  }
  
  // Ejemplo de uso
  console.log(jugar("piedra"));


  const contactos = [
    { nombre: "Antonio García López", telefono: "+34 612345678" },
    { nombre: "María Fernández Sánchez", telefono: "+34 676543219" },
    { nombre: "José Martínez González", telefono: "+34 699887766" },
    { nombre: "Carmen Rodríguez Pérez", telefono: "+34 633112233" },
    { nombre: "Manuel López Martín", telefono: "+34 644556677" },
    { nombre: "Laura Sánchez Ruiz", telefono: "+34 655443322" },
    { nombre: "Francisco González Gómez", telefono: "+34 666778899" },
    { nombre: "Ana María Díaz Hernández", telefono: "+34 677665544" },
    { nombre: "David Romero Jiménez", telefono: "+34 688990011" },
    { nombre: "Isabel Torres Navarro", telefono: "+34 600112233" },
    { nombre: "Javier Moreno Cortés", telefono: "+34 611223344" },
    { nombre: "Elena Serrano Morales", telefono: "+34 622334455" },
    { nombre: "Carlos Ortega Delgado", telefono: "+34 633445566" },
    { nombre: "Rosa María Vázquez Ramírez", telefono: "+34 644556677" },
    { nombre: "Miguel Ángel Castro Cruz", telefono: "+34 655667788" },
    { nombre: "Sofía Núñez Flores", telefono: "+34 666778899" },
    { nombre: "Daniel Molina Herrera", telefono: "+34 677889900" },
    { nombre: "Patricia Iglesias Peña", telefono: "+34 688990011" },
    { nombre: "Alejandro Vargas Marín", telefono: "+34 699001122" },
    { nombre: "Lucía Cabrera León", telefono: "+34 600112233" },
    { nombre: "Rubén Santos Medina", telefono: "+34 611223344" },
    { nombre: "Marta Reyes Carmona", telefono: "+34 622334455" },
    { nombre: "Alberto Mora Fuentes", telefono: "+34 633445566" },
    { nombre: "Silvia Cortés Carrasco", telefono: "+34 644556677" },
    { nombre: "Jesús Navarro Campos", telefono: "+34 655667788" },
    { nombre: "Olga Díaz Vega", telefono: "+34 666778899" },
    { nombre: "Raúl Gil Santiago", telefono: "+34 677889900" },
    { nombre: "Nuria Pascual Velasco", telefono: "+34 688990011" },
    { nombre: "Sergio Arias Moya", telefono: "+34 699001122" },
    { nombre: "Eva Campos Rojas", telefono: "+34 600112233" },
    { nombre: "Víctor Cruz Ferrer", telefono: "+34 611223344" },
    { nombre: "Marina Vidal Sáez", telefono: "+34 622334455" },
    { nombre: "Juan Francisco Montes Gallardo", telefono: "+34 633445566" },
    { nombre: "Consuelo León Pardo", telefono: "+34 644556677" },
    { nombre: "Adrián Calvo Rojo", telefono: "+34 655667788" },
    { nombre: "Beatriz Marín Nieto", telefono: "+34 666778899" },
    { nombre: "Roberto Soler Pascual", telefono: "+34 677889900" },
    { nombre: "Clara Rubio Marcos", telefono: "+34 688990011" },
    { nombre: "Fernando Nieto Sanz", telefono: "+34 699001122" },
    { nombre: "Alicia Vega Gallego", telefono: "+34 600112233" }
  ];
  
  // Función de búsqueda
  function buscarContacto(nombre) {
    for (let i = 0; i < contactos.length; i++) {
      if (contactos[i].nombre !== nombre) continue;
      return contactos[i];
    }
    return "Contacto no encontrado";
  }
  
  // Ejemplo de uso
  console.log(buscarContacto("Antonio García López"));

  function validarContraseña(contraseña) {
    const minLongitud = 8;
    const tieneMayuscula = /[A-Z]/;
    const tieneMinuscula = /[a-z]/;
    const tieneNumero = /\d/;
    const tieneCarácterEspecial = /[!@#$%^&*]/;
  
    if (contraseña.length < minLongitud) {
      return false;
    }
  
    if (!tieneMayuscula.test(contraseña)) {
      return false;
    }
  
    if (!tieneMinuscula.test(contraseña)) {
      return false;
    }
  
    if (!tieneNumero.test(contraseña)) {
      return false;
    }
  
    if (!tieneCarácterEspecial.test(contraseña)) {
      return false;
    }
  
    return true;
  }
  
  // Ejemplo de uso
  console.log(validarContraseña("Contraseña1!"));  // true
  console.log(validarContraseña("contraseña"));   // false


  function calcularFactorial(numero) {
    if (numero < 0 || numero > 15) {
      return "Número fuera de rango";
    }
  
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  
  // Ejemplo de uso
  console.log(calcularFactorial(5));  // 120
  console.log(calcularFactorial(16)); // "Número fuera de rango"
  