console.log('hi!');

const grid = document.querySelector('#grid');
const sliders = document.querySelectorAll('input[type="range"]');
const gridSetup = document.querySelector('#grid-setup');
const body = document.querySelector('body');

const trigger = document.querySelector('[data-trigger-more]');

let bricks = document.querySelector('#bricks').value;
let cols = document.querySelector('#cols').value;
let gutters = document.querySelector('#gutters').value;

function getBlocks(number){
	const parts = [
		{
			width: 2,
			height: 2,
			className: 'two-two'
		},
		{
			width: 1,
			height: 1,
			className: 'one-one'
		},
		{
			width: 2,
			height: 1,
			className: 'two-one'
		},
		{
			width: 1,
			height: 2,
			className: 'one-two'
		}
	];
	const blocks = [];

	for (let i = 0; i <= number; i++) {
		let rand = Math.floor(Math.random()*parts.length);

		blocks.push( parts[rand]);
	}

	return blocks;
}

function brickster(number, columns, gutters, clear) {

	var blocks = getBlocks(number);

	if (clear) {
		grid.innerHTML = '';
	}
	
	grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
	grid.style.gridColumnGap = `${gutters}px`;
	grid.style.gridRowGap = `${gutters}px`;
	body.style.padding = `${gutters}px`;

	blocks.forEach(block => {
		const gridItem = document.createElement('div');
		gridItem.classList.add(block.className, 'grid-item');

		grid.appendChild(gridItem);
	});
}

function updateValues(){

	bricks = document.querySelector('#bricks').value;
	cols = document.querySelector('#cols').value;
	gutters = document.querySelector('#gutters').value;

	const output = document.querySelector(`output[for="${this.id}"]`);
	output.innerHTML = this.id === 'gutters' ? this.value + 'px' : this.value;
}

sliders.forEach(slide => {
	slide.addEventListener('mousemove', updateValues);
	slide.addEventListener('change', updateValues);
});

gridSetup.addEventListener('submit', function(event){
	event.preventDefault();
	console.log( bricks, cols, gutters );
	brickster(bricks, cols, gutters, true);
});

trigger.addEventListener('click', function(event){
	event.preventDefault();
	brickster(bricks, cols, gutters, false);
});

brickster(bricks, cols, gutters, false);