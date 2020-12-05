import data from './day4-data'

const requiredFields = [ 'byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid' ];
const passports = data.split('\n\n')
		.map(item => item
		.replace(/\n/g, ' '));

let validPassports = 0;

passportLoop:
for (const passport of passports) {
	const passportFields = passport.split(' ');

	for (const requiredField of requiredFields) {
		if (passport.indexOf(requiredField) === -1 && requiredField != 'cid') {
			continue passportLoop;
		}
	}

	for (const field of passportFields) {
		const [ key, value ] = field.split(':');
		switch (key) {
			case 'byr':
				if (isNaN(value) || value.length !== 4 || value > 2002 || value < 1920) {
					continue passportLoop;
				}
				break;
			case 'iyr':
				if (isNaN(value) || value.length !== 4 || value > 2020 || value < 2010) {
					continue passportLoop;
				}
				break;
			case 'eyr':
				if (isNaN(value) || value.length !== 4 || value < 2020 || value > 2030) {
					continue passportLoop;
				}
				break;
			case 'hgt':
				if (value.endsWith('cm')) {
					const cm = value.replace('cm', '');
					if (cm < 150 || cm > 193) {
						continue passportLoop;
					}
				} else if (value.endsWith('in')) {
					const inches = value.replace('in', '');
					if (inches < 59 || inches > 76) {
						continue passportLoop;
					}
				} else {
					continue passportLoop;
				}
				break;
			case 'hcl':
				if (value.startsWith('#')) {
					const hexRegex = /[0-9a-f]/g;
					const hex = value.replace('#', '').toLowerCase();
					if (!hexRegex.test(value)) {
						continue passportLoop;
					}
				} else {
					continue passportLoop;
				}
				break;
			case 'ecl':
				if (!['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value)) {
					continue passportLoop;
				}
				break;
			case 'pid':
				if (isNaN(value) || value.length !== 9) {
					continue passportLoop;
				}
				break;
			case 'cid':
				break;
		}
	}

	validPassports++;
}

console.log(`The number of valid passports is ${validPassports}`);
