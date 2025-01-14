const btn = document.getElementById('btn');
const counter = document.getElementById('counter');
let S = 0;

btn,
	addEventListener('click', () => {
		S++;
		counter.innerText = S;
	});
