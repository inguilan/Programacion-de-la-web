const template = document.getElementById('card-template');
  const clone = template.content.cloneNode(true);
  clone.querySelector('.title').textContent = "TITULOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO";
  clone.querySelector('.content').textContent = "Deseas salir de la app";
  document.getElementById('clone-block2').appendChild(clone);

  