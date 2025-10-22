(function(){
  const frases = [
    '...vestibulum mollis, tortor ac congue commodo',
    '...curabitur vel sem at dolor ultricies posuere',
    '...pellentesque habitant morbi tristique senectus et netus'
  ];

  const elem = document.getElementById('carouselLine');
  if(!elem) return;

  let current = -1;
  // función que elige un índice aleatorio distinto al actual
  function siguienteIndice(){
    if(frases.length <= 1) return 0;
    let idx;
    do {
      idx = Math.floor(Math.random() * frases.length);
    } while (idx === current);
    return idx;
  }

  // animación simple de fade out/in
  function cambiarFrase(){
    const next = siguienteIndice();
    // fade out
    elem.style.transition = 'opacity .25s ease';
    elem.style.opacity = '0';
    setTimeout(() => {
      elem.textContent = frases[next];
      current = next;
      // fade in
      elem.style.opacity = '1';
    }, 260);
  }

  // iniciar con una frase aleatoria distinta a -1
  current = Math.floor(Math.random() * frases.length);
  elem.textContent = frases[current];

  // Cambiar cada 2 segundos (2000 ms)
  setInterval(cambiarFrase, 2000);
})();
