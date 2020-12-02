import data from './day2-data'

let valid = 0;
for (const item of data) {
	const parts = item.split(':');
	const rule = parts[0].trim();
	const ruleParts = rule.split(' ');
	const amountParts = ruleParts[0].split('-');

	const password = parts[1].trim();
	const letter = ruleParts[1];
	const min = amountParts[0];
	const max = amountParts[1];

	const splitPassword = [...password];
	let i = 0;
	for (const c of splitPassword) {
		if (c == letter) {
			i++;
		}
	}

	if (i >= min && i <= max) {
		valid++;
	}
}

console.log(`The amount of valid passwords is ${valid}`);
