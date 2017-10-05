'use strict';

class SendgridStrategy {
	constructor (sg, helper) {
		this.sg = sg;
		this.helper = helper;
	}

	buildEmail (settings) {
		let mailSettings = {
			fromEmail: new this.helper.Email(settings.fromEmail, settings.fromName),
			toEmail: new this.helper.Email(settings.toEmail),
			subject: settings.subject,
			content: new this.helper.Content(settings.type, settings.content)
		};

		return new this.helper.Mail(
			mailSettings.fromEmail,
			mailSettings.subject,
			mailSettings.toEmail,
			mailSettings.content
		);
	}

	send (settings, callbacks) {
		let mail = this.buildEmail(settings);

		let request = this.sg.emptyRequest({
			method: 'POST',
			path: '/v3/mail/send',
			body: mail.toJSON()
		});

		this.sg.API(request)
			.then(callbacks.sucess)
			.catch(callbacks.failure);
	}
}

module.exports = function(sgToken) {
	let sg = require('sendgrid')(sgToken);
	let helper = require('sendgrid').mail;

	return new SendgridStrategy(sg, helper);
};