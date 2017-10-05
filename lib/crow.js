'use strict';

class Crow {
	constructor (strategy) {
		this.strategy = strategy;
	}

	compileTemplate (template, model) {
		let engine = require('./templates/' + template.engine);
		let compiled = engine.compile(template.view, model);

		return compiled;
	}

	composeMail (settings, model) {
		let content;

		if (settings.template) {
			content = this.compileTemplate(settings.template, model);
		} else {
			content = settings.content;
		}

		let mailSettings = {
			fromName: settings.fromName,
			fromEmail: (this.isValidEmail(settings.fromEmail)) ? settings.fromEmail : null,
			toEmail: (this.isValidEmail(settings.toEmail)) ? settings.toEmail : null,
			subject: settings.subject,
			type: settings.type,
			content: content
		}

		return mailSettings;
	}

	isValidEmail (email) {
		let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
	}

	send (settings, model) {
		let mail = this.composeMail(settings, model);

		this.strategy.send(mail, {
			sucess: this.sendSucess,
			failure: this.sendFailure
		});
	}

	sendSucess (response) {
		console.log(response);
	}

	sendFailure (err) {
		console.log(err);
	}
}

module.exports = (strategy) => {
	return new Crow(strategy);
};
