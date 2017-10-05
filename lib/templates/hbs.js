'use strict';

const hbs = require('handlebars');
const fs = require('fs');

class Handlebars {

	compile (view, model) {
		let source;

		try {
			source = fs.readFileSync(view, 'utf-8');
		} catch(err) {
			console.log(err);
			return;
		}
		
		let template = hbs.compile(source);
		return template(model);
	}

}

module.exports = new Handlebars();