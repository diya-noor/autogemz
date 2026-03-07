import { Injectable } from '@angular/core';

declare var $: any;
declare var WOW: any;
declare var jarallax: any;

@Injectable({
  providedIn: 'root',
})
export class PluginInit {
  /**
   * Re-initializes jQuery-based plugins after Angular renders the view.
   * Called from ngAfterViewInit in each page component.
   */
  init(): void {
    setTimeout(() => {
      this.initPlugins();
    }, 100);
  }

  private initPlugins(): void {
    if (typeof $ === 'undefined') return;

    // WOW animations
    if (typeof WOW !== 'undefined') {
      new WOW({ mobile: false }).init();
    }

    // Jarallax parallax
    if (typeof jarallax !== 'undefined') {
      jarallax(document.querySelectorAll('.jarallax'), { speed: 0.5 });
    }

    // Owl Carousel
    if ($.fn && $.fn.owlCarousel) {
      $('.owl-6').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        items: 6,
        responsive: {
          0: { items: 2 },
          600: { items: 4 },
          1000: { items: 6 }
        }
      });

      $('.owl-2-dots').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        items: 2,
        responsive: {
          0: { items: 1 },
          768: { items: 2 }
        }
      });
    }

    // Accordion
    if ($.fn && $.fn.accordion) {
      $('.accordion').accordion({ collapsible: true });
    } else {
      // Custom accordion fallback
      $('.accordion-section-title').off('click').on('click', function(this: HTMLElement) {
        const target = $(this).data('tab');
        const parent = $(this).closest('.accordion-section');
        const isOpen = $(target).is(':visible');

        parent.find('.accordion-section-content').hide();
        parent.find('.accordion-section-title').removeClass('active');

        if (!isOpen) {
          $(target).slideDown(300);
          $(this).addClass('active');
        }
      });
    }

    // Header sticky behavior (reinitialize)
    $(window).off('scroll.header').on('scroll.header', function() {
      const scrollTop = $(window).scrollTop() || 0;
      if (scrollTop > 50) {
        $('header').addClass('sticky');
      } else {
        $('header').removeClass('sticky');
      }
    });

    // Background image via data-bgimage (matches designesia.js behavior)
    $('[data-bgimage]').each(function(this: HTMLElement) {
      const el = $(this);
      const bgVal = el.attr('data-bgimage');
      if (bgVal) {
        el.css('background', bgVal);
        el.css('background-size', 'cover');
      }
    });

    // Bootstrap carousel: initialize inside modals when they open
    // (needed because Angular renders carousels dynamically after page load)
    $(document).off('show.bs.modal.carouselInit').on('show.bs.modal.carouselInit', function(e: any) {
      const $carousel = $(e.target).find('.carousel');
      if ($carousel.length && (window as any).bootstrap) {
        $carousel.each(function(this: HTMLElement) {
          (window as any).bootstrap.Carousel.getOrCreateInstance(this, { ride: false });
        });
      }
    });

    // Counters (timer spans)
    $('.timer').each(function(this: HTMLElement) {
      const el = $(this);
      const to = parseFloat(el.attr('data-to') || '0');
      const speed = parseInt(el.attr('data-speed') || '2000');
      $({ Counter: 0 }).animate({ Counter: to }, {
        duration: speed,
        easing: 'swing',
        step: function(now: number) {
          el.text(Math.ceil(now));
        },
        complete: function() {
          el.text(to);
        }
      });
    });
  }
}
