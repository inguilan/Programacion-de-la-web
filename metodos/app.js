import { usuarios, usuarios_obj } from './data.js';

// Ejercicio 1: Promedio de edad por sexo
const promedioEdadSexo = usuarios.reduce((acumulador, usuario) => {
  if (usuario.sexo === 'Masculino') {
    acumulador.Masculino.push(usuario.edad);
  } else {
    acumulador.Femenino.push(usuario.edad);
  }
  return acumulador;
}, { Masculino: [], Femenino: [] });

const promedioMasculino = promedioEdadSexo.Masculino.reduce((a, b) => a + b, 0) / promedioEdadSexo.Masculino.length;
const promedioFemenino = promedioEdadSexo.Femenino.reduce((a, b) => a + b, 0) / promedioEdadSexo.Femenino.length;

console.log(`Promedio de edad Masculino: ${promedioMasculino}`);
console.log(`Promedio de edad Femenino: ${promedioFemenino}`);

console.log("Ejercicio 2: ");
const pesoPromedio = usuarios.reduce((acumulador, usuario) => acumulador + usuario.peso, 0) / usuarios.length;
const nombresPesoSuperior = usuarios.filter(usuario => usuario.peso > pesoPromedio).map(usuario => usuario.nombre);

console.log(`Nombres con peso superior al promedio: ${nombresPesoSuperior.join(', ')}`);

// Ejercicio 3: Encontrar el usuario con un email específico
console.log("Ejercicio 3: ");
const emailBuscado = 'mariana.rivera@pasto-digital.co';
const usuarioEmail = usuarios.find(usuario => usuario.email.toLowerCase() === emailBuscado.toLowerCase());

// Verificar si el usuario fue encontrado antes de intentar acceder a su propiedad
if (usuarioEmail) {
    console.log(`Usuario encontrado con email '${emailBuscado}': ${usuarioEmail.nombre}`);
} else {
    console.log(`No se encontró un usuario con el email '${emailBuscado}'.`);
}

// Ejercicio 4: Verificar si todos los usuarios tienen peso registrado
console.log("Ejercicio 4: ");
const todosTienenPeso = usuarios.every(usuario => typeof usuario.peso === 'number');
console.log(`Todos los usuarios tienen peso registrado: ${todosTienenPeso}`);

// Ejercicio 5: Obtener subconjunto de usuarios y transformar nombres
console.log("Ejercicio 5: ");
const usuariosSlice = usuarios.slice(5, 15).map(usuario => ({
  id: usuario.id,
  nombreCompleto: usuario.nombre.toUpperCase()
}));

console.log('Usuarios transformados:', usuariosSlice);

// Ejercicio 6: Contar la cantidad de usuarios por rango de edad
console.log("Ejercicio 6: ");
const usuariosPorRango = usuarios.reduce((acumulador, usuario) => {
  let rango = '';
  if (usuario.edad <= 25) rango = '18-25';
  else if (usuario.edad <= 35) rango = '26-35';
  else if (usuario.edad <= 45) rango = '36-45';
  else rango = '46+';
  
  if (!acumulador[rango]) acumulador[rango] = 0;
  acumulador[rango]++;
  
  return acumulador;
}, {});

console.log('Usuarios por rango de edad:', usuariosPorRango);

// Ejercicio 7: Encontrar el primer usuario masculino mayor de 40 años
console.log("Ejercicio 7: ");
const usuarioMasculinoMayor40 = usuarios.find(usuario => usuario.sexo === 'Masculino' && usuario.edad > 40);
console.log('Primer usuario masculino mayor de 40 años:', usuarioMasculinoMayor40);

// Ejercicio 8: Verificar si existe algún usuario con un nombre que empiece con una letra específica
console.log("Ejercicio 8: ");
const letraBuscada = 'M';
const existeUsuarioConLetra = usuarios.some(usuario => usuario.nombre[0].toLowerCase() === letraBuscada.toLowerCase());
console.log(`Existe algún usuario cuyo nombre empieza con '${letraBuscada}': ${existeUsuarioConLetra}`);

// Ejercicio 9: Combinar información del array y del objeto usuarios_obj
console.log("Ejercicio 9: ");
const usuarioCombinado = {
  totalUsuarios: usuarios.length,
  nombreUsuarioObjeto: usuarios_obj.nombre,
  empleosUsuarioObjeto: usuarios_obj.trabajo.map(trabajo => trabajo.toUpperCase())
};

console.log('Usuario combinado:', usuarioCombinado);

// Ejercicio 10: Calcular el tiempo total trabajado por el usuario de usuarios_obj
console.log("Ejercicio 10: ");
const tiempoTotalTrabajo = usuarios_obj.empresas.reduce((acumulador, empresa) => acumulador + empresa.tiempo, 0);
console.log('Tiempo total trabajado por Mariana:', tiempoTotalTrabajo);

// Ejercicio 11: Encontrar la empresa donde el usuario de usuarios_obj trabajó más tiempo
console.log("Ejercicio 11:");
const empresaMayorTiempo = usuarios_obj.empresas.reduce((empresaMayor, empresaActual) => {
  return empresaActual.tiempo > empresaMayor.tiempo ? empresaActual : empresaMayor;
});

console.log('Empresa donde trabajó más tiempo:', empresaMayorTiempo.nombre);
