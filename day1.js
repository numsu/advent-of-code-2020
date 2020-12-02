import data from './day1-data'

const multiplications = [];
for (const item of data) {
	for (const check of data) {
		if (item + check == 2020) {
			multiplications.push(item * check);
		}
	}
}

console.log(`After doing multiplications, the answer is ${multiplications[0]}`);
