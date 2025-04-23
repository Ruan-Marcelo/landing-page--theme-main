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


      //cookies
      function aceitarCookies() {
        const dataAtual = new Date().toISOString();
        document.cookie = "cookieConsentDate=" + encodeURIComponent(dataAtual) + "; path=/; max-age=31536000";
        document.getElementById("cookie-banner").style.display = "none";
        mostrarStatusCookie(dataAtual);
      
        // Envia e-mail via EmailJS
        emailjs.send("default_service", "template_6ewf9ti", {
          data_consentimento: new Date().toLocaleString("pt-BR"),
          usuario: navigator.userAgent,
          pagina: window.location.href
        }).then(function(response) {
          console.log("Email enviado com sucesso!", response.status, response.text);
        }, function(error) {
          console.error("Erro ao enviar e-mail:", error);
          alert("Ocorreu um erro ao enviar o e-mail. Tente novamente mais tarde.");
        });
      }
      
          function recusarCookies() {
            // Apaga o cookie
            document.cookie = "cookieConsentDate=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            document.getElementById("cookie-banner").style.display = "none";
            document.getElementById("status-cookie").style.display = "none";
          }
      
          function getCookie(nome) {
            const nomeEQ = nome + "=";
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
              let c = cookies[i].trim();
              if (c.indexOf(nomeEQ) === 0) return decodeURIComponent(c.substring(nomeEQ.length));
            }
            return null;
          }
      
          function mostrarStatusCookie(dataISO) {
            const container = document.getElementById("status-cookie");
            if (dataISO) {
              const data = new Date(dataISO);
              const formatada = data.toLocaleDateString('pt-BR') + " às " + data.toLocaleTimeString('pt-BR').slice(0, 5);
              //container.innerText = "✅ Você aceitou os cookies em: " + formatada;
              //container.style.display = "block";
            }
          }
      
          // TESTE: mostra o banner a cada 5 segundos (desative em produção)
          setInterval(() => {
            document.getElementById("cookie-banner").style.display = "flex";
          }, 5000);
      
          // Ao carregar
          window.onload = function () {
            const dataConsentimento = getCookie("cookieConsentDate");
            if (dataConsentimento) {
              mostrarStatusCookie(dataConsentimento);
            }
          }
