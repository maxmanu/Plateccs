document.addEventListener("DOMContentLoaded", function () {
  // Obtener el valor del límite del contador desde el campo personalizado

  var contadorElement = document.querySelector(".contador-1");
  var contadorStarted = false;
  var velocidad = parseInt(contadorElement.dataset.velocidad1);

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function iniciarContadorSiVisible() {
    if (isElementInViewport(contadorElement) && !contadorStarted) {
      iniciarContador();
      contadorStarted = true;
    }
  }

  function iniciarContador() {
    var limite = parseInt(
      document.querySelector(".limite-contador-1").textContent
    );
    var contador = 0;

    function contar() {
      if (contador <= limite) {
        contadorElement.textContent = contador;
        contador++;
        setTimeout(contar, velocidad); // Incrementa cada segundo
      }
    }

    contar();
  }

  // Verifica si el contador es visible cuando se carga la página
  iniciarContadorSiVisible();

  // Verifica si el contador es visible cuando el usuario hace scroll
  window.addEventListener("scroll", function () {
    iniciarContadorSiVisible();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Obtener el valor del límite del contador desde el campo personalizado

  var contadorElement = document.querySelector(".contador-2");
  var contadorStarted = false;
  var velocidad = parseInt(contadorElement.dataset.velocidad2);

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function iniciarContadorSiVisible() {
    if (isElementInViewport(contadorElement) && !contadorStarted) {
      iniciarContador();
      contadorStarted = true;
    }
  }

  function iniciarContador() {
    var limite = parseInt(
      document.querySelector(".limite-contador-2").textContent
    );
    var contador = 0;

    function contar() {
      if (contador <= limite) {
        contadorElement.textContent = contador;
        contador++;
        setTimeout(contar, velocidad); // Incrementa cada segundo
      }
    }

    contar();
  }

  // Verifica si el contador es visible cuando se carga la página
  iniciarContadorSiVisible();

  // Verifica si el contador es visible cuando el usuario hace scroll
  window.addEventListener("scroll", function () {
    iniciarContadorSiVisible();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Obtener el valor del límite del contador desde el campo personalizado

  var contadorElement = document.querySelector(".contador-3");
  var contadorStarted = false;
  var velocidad = parseInt(contadorElement.dataset.velocidad3);

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function iniciarContadorSiVisible() {
    if (isElementInViewport(contadorElement) && !contadorStarted) {
      iniciarContador();
      contadorStarted = true;
    }
  }

  function iniciarContador() {
    var limite = parseInt(
      document.querySelector(".limite-contador-3").textContent
    );
    var contador = 0;

    function contar() {
      if (contador <= limite) {
        contadorElement.textContent = contador;
        contador++;
        setTimeout(contar, velocidad); // Incrementa cada segundo
      }
    }

    contar();
  }

  // Verifica si el contador es visible cuando se carga la página
  iniciarContadorSiVisible();

  // Verifica si el contador es visible cuando el usuario hace scroll
  window.addEventListener("scroll", function () {
    iniciarContadorSiVisible();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Obtener el valor del límite del contador desde el campo personalizado

  var contadorElement = document.querySelector(".contador-4");
  var contadorStarted = false;
  var velocidad = parseInt(contadorElement.dataset.velocidad4);

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function iniciarContadorSiVisible() {
    if (isElementInViewport(contadorElement) && !contadorStarted) {
      iniciarContador();
      contadorStarted = true;
    }
  }

  function iniciarContador() {
    var limite = parseInt(
      document.querySelector(".limite-contador-4").textContent
    );
    var contador = 0;

    function contar() {
      if (contador <= limite) {
        contadorElement.textContent = contador;
        contador++;
        setTimeout(contar, velocidad); // Incrementa cada segundo
      }
    }

    contar();
  }

  // Verifica si el contador es visible cuando se carga la página
  iniciarContadorSiVisible();

  // Verifica si el contador es visible cuando el usuario hace scroll
  window.addEventListener("scroll", function () {
    iniciarContadorSiVisible();
  });
});
