function procesarInformacion() {
  let nombreCompleto = "Carlos Perez Gomez";

  // 1. Mostrar cantidad de caracteres
  let cantidadCaracteres = nombreCompleto.length;
  document.getElementById("cantidadCaracteres").value = cantidadCaracteres;

  // 2. Verificar si incluye "Perez"
  let incluyePerez = nombreCompleto.includes("Perez");
  document.getElementById("verificarPerez").value = incluyePerez ? "Sí" : "No";

  // 3. Crear una segunda variable y unir
  let nombreCompleto2 = "Sofia Gutierrez";
  let registrosCombinados = nombreCompleto.concat(" | ", nombreCompleto2);
  document.getElementById("registrosCombinados").value = registrosCombinados;

  // 4. Reemplazar "Carlos" por "Juan"
  let nombreReemplazado = nombreCompleto.replace("Carlos", "Juan");
  document.getElementById("nombreReemplazado").value = nombreReemplazado;

  // 5. Dividir el nombre completo en partes
  let partesNombre = nombreCompleto.split(" ");
  let partesDelNombre = `Primer Nombre: ${partesNombre[0]}, Primer Apellido: ${partesNombre[1]}, Segundo Apellido: ${partesNombre[2]}`;
  document.getElementById("partesNombre").value = partesDelNombre;

  // 6. Convertir a mayúsculas
  let nombreMayusculas = nombreCompleto.toUpperCase();
  document.getElementById("nombreMayusculas").value = nombreMayusculas;

  // 7. Eliminar espacios innecesarios
  let nombreConEspacios = "   Juan Perez Gomez   ";
  let nombreSinEspacios = nombreConEspacios.trim();
  document.getElementById("nombreSinEspacios").value = nombreSinEspacios;

  // 8. Generar una calificación aleatoria
  let calificacion = Math.random() * 100;
  let calificacionRedondeada = Math.round(calificacion);
  document.getElementById("calificacion").value = calificacionRedondeada;
}
