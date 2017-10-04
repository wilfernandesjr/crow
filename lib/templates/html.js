'use strict';

const fs = require('fs');

class Html {

	constructor () {}

	compile (view) {
		let source;

		try {
			source = fs.readFileSync(view, 'utf-8');
		} catch(err) {
			console.log(err);
			return;
		}

		return source;
	}

}

module.exports = new Html();