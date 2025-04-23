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
