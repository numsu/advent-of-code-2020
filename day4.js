import data from './day4-data'

const requiredFields = [ 'byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid' ];
const passports = data.split('\n\n')
		.map(item => item
		.replace(/\n/g, ' '));

let validPassports = 0;
for (const passport of passports) {
	const missingFields = [];
	for (const requiredField of requiredFields) {
		if (passport.indexOf(requiredField) === -1) {
			missingFields.push(requiredField);
		}
	}
	if (missingFields.length > 0) {
		if (missingFields.length == 1 && missingFields[0] == 'cid') {
			validPassports++;
		}
	} else {
		validPassports++;
	}
}

console.log(`The number of valid passports is ${validPassports}`);
