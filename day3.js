import data from './day3-data'

const position = { x: 0, y: 0 };
const map = data.map(row => [ ...row ]);
const pattern = { right: 3, down: 1 };

let trees = 0;
while (true) {
	position.x += pattern.right;
	position.y += pattern.down;

	if (position.y == data.length) {
		break;
	}

	const normalizedX = position.x % map[0].length;
	if (map[position.y][normalizedX] == '#') {
		trees++;
	}
}

console.log(`The amount of trees the toboggan encountered is ${trees}`);
