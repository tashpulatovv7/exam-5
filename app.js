const btn = document.getElementById('btn');
const counter = document.getElementById('counter');
let S = 0;

btn,
	addEventListener('click', () => {
		S++;
		counter.innerText = S;
	});

var swiper = new Swiper('.swiper', {
	slidesPerView: 3,
	direction: getDirection(),
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	on: {
		resize: function () {
			swiper.changeDirection(getDirection());
		},
	},
});

function getDirection() {
	var windowWidth = window.innerWidth;
	var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

	return direction;
}

document.addEventListener('DOMContentLoaded', () => {
	const filterButtons = document.querySelectorAll('.product_filter button');
	const carouselItems = document.querySelectorAll('.carousel-item');

	filterButtons.forEach(button => {
		button.addEventListener('click', () => {
			filterButtons.forEach(btn => btn.classList.remove('active'));

			button.classList.add('active');

			const category = button.getAttribute('data-category');

			carouselItems.forEach(item => {
				if (category === 'all' || item.classList.contains(category)) {
					item.style.display = 'block';
				} else {
					item.style.display = 'none';
				}
			});
		});
	});
});

const carousel = document.querySelector('.carousel');
const prevBtn2 = document.querySelector('.prev-btn');
const nextBtn2 = document.querySelector('.next-btn');

let scrollAmount = 0;

nextBtn2.addEventListener('click', () => {
	const scrollWidth = carousel.scrollWidth / 4;
	scrollAmount += scrollWidth;
	if (scrollAmount >= carousel.scrollWidth) {
		scrollAmount = 0;
	}
	carousel.scrollTo({
		left: scrollAmount,
		behavior: 'smooth',
	});
});

prevBtn2.addEventListener('click', () => {
	const scrollWidth = carousel.scrollWidth / 4;
	scrollAmount -= scrollWidth;
	if (scrollAmount < 0) {
		scrollAmount = carousel.scrollWidth - scrollWidth;
	}
	carousel.scrollTo({
		left: scrollAmount,
		behavior: 'smooth',
	});
});
