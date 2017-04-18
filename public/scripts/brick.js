console.log('hi!');

const trigger = document.querySelector('[data-trigger-more]');

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

function brickster(number, columns, gridSelector) {

	console.log('more');

	var blocks = getBlocks(number);
	var grid = document.querySelector(gridSelector);

	grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

	blocks.forEach(block => {
		const gridItem = document.createElement('div');
		gridItem.classList.add(block.className, 'grid-item');

		grid.appendChild(gridItem);
	});
}



brickster(90, 8, '#grid');

trigger.addEventListener('click', function(event){
	brickster( 30, 8, '#grid');
});