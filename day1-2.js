import data from './day1-data'

const multiplications = [];
for (const item of data) {
	for (const check of data) {
		for (const doubleCheck of data) {
			if (item + check + doubleCheck == 2020) {
				multiplications.push(item * check * doubleCheck);
			}
		}
	}
}

console.log(`After doing multiplications, the answer is ${multiplications[0]}`);
