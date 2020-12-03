import data from './day3-data'

const position = { x: 0, y: 0 };
const map = data.map(row => [ ...row ]);
const patterns = [
	{ right: 1, down: 1 },
	{ right: 3, down: 1 },
	{ right: 5, down: 1 },
	{ right: 7, down: 1 },
	{ right: 1, down: 2 },
];

let multiplication = 0;
for (const pattern of patterns) {
	let trees = 0;
	while (true) {
		position.x += pattern.right;
		position.y += pattern.down;

		if (position.y >= data.length) {
			break;
		}

		const normalizedX = position.x % map[0].length;
		if (map[position.y][normalizedX] == '#') {
			trees++;
		}
	}

	multiplication = multiplication ? multiplication * trees : trees;
	position.x = 0;
	position.y = 0;
}

console.log(`Multiplication result is ${multiplication}`);
