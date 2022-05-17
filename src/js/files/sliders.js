/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.gallery__swiper')) {
		new Swiper('.gallery__body', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],
			effect: 'fade',
			autoplay: {
				delay: 5000,
				disableOnInteraction: true,
			},
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			preloadImages: true,
			lazy: true,
			// Dotts
			pagination: {
				el: '.main-slider__bullets',
				clickable: true,
			},
			// Arrows
			navigation: {
				nextEl: '.gallery__slider-arrows .gallery-slider__arrow-next',
				prevEl: '.gallery__slider-arrows .gallery-slider__arrow-prev',
			},

			breakpoints: {
				1: {
					slidesPerView: 1,
					spaceBetween: 10,
					autoHeight: true,
				},
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
					autoHeight: true,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				800: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},

			on: {

			}
		});
	}



	if (document.querySelector('.product__left-body')) {
		new Swiper('.product__left', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],
			effect: 'fade',
			autoplay: {
				delay: 8000,
				disableOnInteraction: true,
			},
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			preloadImages: true,
			lazy: true,
			// Dotts
			pagination: {
				el: '.main-slider__bullets',
				clickable: true,
			},
			// Arrows
			/*navigation: {
				nextEl: '.gallery__slider-arrows .gallery-slider__arrow-next',
				prevEl: '.gallery__slider-arrows .gallery-slider__arrow-prev',
			},*/

			on: {

			}
		});
	}



	if (document.querySelector('.product__resemble-body')) {
		new Swiper('.product__resemble-slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],
			effect: 'fade',
			/*autoplay: {
				delay: 3000,
				disableOnInteraction: true,
			},*/
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			preloadImages: true,
			lazy: true,
			// Dotts
			pagination: {
				el: '.main-slider__bullets',
				clickable: true,
			},
			// Arrows
			navigation: {
				nextEl: '.product__slider-arrows .product-slider__arrow-next',
				prevEl: '.product__slider-arrows .product-slider__arrow-prev',
			},

			breakpoints: {
				1: {
					slidesPerView: 1,
					spaceBetween: 10,
					autoHeight: true,
				},
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
					autoHeight: false,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				800: {
					slidesPerView: 3,
					spaceBetween: 20,
					autoHeight: true,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},

			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});