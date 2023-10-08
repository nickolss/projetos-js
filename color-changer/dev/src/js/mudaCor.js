function changeColor() {
	const combinations = [
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
	];

	const hex = [];

	for (let i = 0; i < 6; i++) {
		const colorRandom = Math.floor(Math.random() * combinations.length);
		hex.push(combinations[colorRandom]);
	}

	const color = `#${hex}`.replace(/,/g, "");
	return color;
}
const title = document.querySelector('#colorName');

const btn = document
	.querySelector('[btn-change]')
	.addEventListener('click', () => {
		document.body.style.backgroundColor = changeColor();
		title.textContent = `Background Color: ${changeColor()}`;
	});
