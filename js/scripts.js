const menu = document.querySelector(".menu");
const btnMenu = document.querySelector(".btn-menu");
const container__links = document.querySelector(".container__links");

function handleButtonClick(event) {
  if (event.type === "touchstart") event.preventDefault();
  event.stopPropagation();
  menu.classList.toggle("active");
  handleClickOutside(menu, () => {
    menu.classList.remove("active");
    setAria();
  });
  setAria();
}

function handleClickOutside(targetElement, callback) {
  const html = document.documentElement;
  function handleHTMLClick(event) {
    if (!targetElement.contains(event.target)) {
      targetElement.removeAttribute("data-target");
      html.removeEventListener("click", handleHTMLClick);
      html.removeEventListener("touchstart", handleHTMLClick);
      callback();
    }
  }
  if (!targetElement.hasAttribute("data-target")) {
    html.addEventListener("click", handleHTMLClick);
    html.addEventListener("touchstart", handleHTMLClick);
    targetElement.setAttribute("data-target", "");
  }
}

function setAria() {
  const isActive = menu.classList.contains("active");
  btnMenu.setAttribute("aria-expanded", isActive);
  if (isActive) {
    btnMenu.setAttribute("aria-label", "Fechar Menu");
  } else {
    btnMenu.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0; // Inicializa o índice do slide para começar do primeiro slide
    const slides = document.querySelectorAll('.slide-item'); // Seleciona todos os elementos com a classe 'slide-item'

    // Função para mostrar os slides
    function showSlides() {
        // Itera por todos os slides e define a exibição
        slides.forEach((slide, index) => {
            // Se o índice do slide for igual ao slideIndex atual, o slide será exibido
            slide.style.display = (index === slideIndex) ? 'block' : 'none';
        });
        // Incrementa o índice do slide, voltando para o primeiro slide se o final for alcançado
        slideIndex = (slideIndex + 1) % slides.length;
    }

    showSlides(); // Chama a função para mostrar o primeiro slide
    setInterval(showSlides, 5000); // Define um intervalo para trocar os slides a cada 3 segundos
});

function showMission() {
    document.getElementById('info').innerHTML = ` 
        
        <div class="container__sobre1">
            <ul class="lista__sobre__1">
                <li class="lista__item__sobre__1">Gerar valor aos nossos clientes por meio dos nossos Serviços e Produtos</li>
                <li class="lista__item__sobre__1"><p>Levar inovação através da tecnologia proporcionando a melhor experiência em Soluções e Serviços.</p></li>
                <li class="lista__item__sobre__1"><p>Prover aos nossos clientes soluções eficientes para o Desenvolvimento de Aplicações com Qualidade e Segurança.</p></li>
            </ul>
        </div>    
    `;
}

function showValues() {
    document.getElementById('info').innerHTML = `
        <div class="container__sobre2">
            <Ul class="lista__sobre__2">
                <li class="lista__item__sobre__2"><p class="texto__valores">Integridade</p></li>
                <li class="lista__item__sobre__2"><p class="texto__valores">Compromisso com a excelência</p></li>
                <li class="lista__item__sobre__2"><p class="texto__valores">Inovação</p></li>
            </Ul>
        </div>
    `;
}

