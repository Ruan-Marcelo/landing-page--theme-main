$(document).ready(function() {
    $(document).ready(function() {
        // Menu mobile toggle
        $('#mobile_btn').on('click', function () {
            $('#mobile_menu').toggleClass('active');
            $('#mobile_btn').find('i').toggleClass('fa-x');
        });
    
        const sections = $('section');
        const navItems = $('.nav-item');
    
        $(window).on('scroll', function () {
            const header = $('header');
            const scrollPosition = $(window).scrollTop() - header.outerHeight();
            let activeSectionIndex = 0;
    
            // Efeito de sombra no scroll
            if (scrollPosition <= 0) {
                header.css('box-shadow', 'none');
            } else {
                header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
            }
    
            // Verifica qual seção está visível
            sections.each(function(i) {
                const section = $(this);
                const sectionTop = section.offset().top - 96;
                const sectionBottom = sectionTop + section.outerHeight();
    
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    activeSectionIndex = i;
                    return false;
                }
            });
    
            // Destaca o item de menu correspondente à seção ativa
            navItems.removeClass('active');
            $(navItems[activeSectionIndex]).addClass('active');
        });
    });
    

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '10%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 1000,
        distance: '10%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '10%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '10%'
    })
});

// onclick="abrirWhatsApp()"
    function abrirWhatsApp() {
        const numero = '5516991254525'; // Substitua pelo seu número
        const mensagem = encodeURIComponent("Olá! Gostaria de mais informações.");
  
        // Detecta se o usuário está no mobile
        const isMobile = /iPhone|Android|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
  
        // Escolhe a URL apropriada
        const url = isMobile
          ? `https://wa.me/${numero}?text=${mensagem}`
          : `https://web.whatsapp.com/send?phone=${numero}&text=${mensagem}`;
  
        // Abre o link em nova aba
        window.open(url, '_blank');
      }


    // Função para aceitar cookies
function aceitarCookies() {
    const dataAtual = new Date().toISOString(); // Obtém a data atual
    document.cookie = "cookieConsentDate=" + encodeURIComponent(dataAtual) + "; path=/; max-age=31536000"; // Armazena a data de consentimento nos cookies
    document.getElementById("cookie-banner").style.display = "none"; // Oculta o banner de cookies
    mostrarStatusCookie(dataAtual); // Mostra o status de consentimento (se necessário)
    
    // Envia um e-mail via EmailJS com as informações de consentimento
    emailjs.send("default_service", "template_6ewf9ti", {
      data_consentimento: new Date().toLocaleString("pt-BR"),
      usuario: navigator.userAgent, // Envia informações do navegador do usuário
      pagina: window.location.href // Envia o URL da página
    }).then(function(response) {
      console.log("Email enviado com sucesso!", response.status, response.text); // Caso o e-mail seja enviado com sucesso
    }, function(error) {
      console.error("Erro ao enviar e-mail:", error); // Caso ocorra um erro no envio
      alert("Ocorreu um erro ao enviar o e-mail. Tente novamente mais tarde."); // Mensagem de erro
    });
  }
  
  // Função para recusar cookies
  function recusarCookies() {
    // Apaga o cookie de consentimento
    document.cookie = "cookieConsentDate=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.getElementById("cookie-banner").style.display = "none"; // Oculta o banner de cookies
    document.getElementById("status-cookie").style.display = "none"; // Oculta a exibição do status de consentimento
  }
  
  // Função para obter o valor de um cookie específico
  function getCookie(nome) {
    const nomeEQ = nome + "="; // Prepara a chave para busca
    const cookies = document.cookie.split(';'); // Divide os cookies existentes
    for (let i = 0; i < cookies.length; i++) {
      let c = cookies[i].trim(); // Remove espaços extras
      if (c.indexOf(nomeEQ) === 0) return decodeURIComponent(c.substring(nomeEQ.length)); // Retorna o valor do cookie
    }
    return null; // Caso o cookie não seja encontrado
  }
  
  // Função para mostrar o status do consentimento de cookies
  function mostrarStatusCookie(dataISO) {
    const container = document.getElementById("status-cookie");
    if (dataISO) {
      const data = new Date(dataISO); // Converte a data ISO para um objeto Date
      const formatada = data.toLocaleDateString('pt-BR') + " às " + data.toLocaleTimeString('pt-BR').slice(0, 5); // Formata a data e hora
      // container.innerText = "✅ Você aceitou os cookies em: " + formatada; // Mostrar a mensagem com a data
      // container.style.display = "block"; // Exibe o status de consentimento
    }
  }
  
  // TESTE: Mostra o banner de cookies a cada 5 segundos (essa parte pode ser desativada em produção)
  setInterval(() => {
    document.getElementById("cookie-banner").style.display = "flex"; // Exibe o banner a cada 5 segundos
  }, 5000);
  
  // Ao carregar a página
  window.onload = function () {
    const dataConsentimento = getCookie("cookieConsentDate"); // Tenta obter a data do consentimento nos cookies
    if (dataConsentimento) {
      mostrarStatusCookie(dataConsentimento); // Se a data de consentimento existir, mostra o status
    }
  }
  
