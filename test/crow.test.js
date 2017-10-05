'use strict';

const crow = require('../lib/crow');

test('Should return an error if call crow without strategy function', () => {
	expect(() => {
		crow();
	}).toThrow('Waiting for a Strategy Function as parameter!');
});