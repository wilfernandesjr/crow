'use strict';

let fs = require('fs');
let aws = require('aws-sdk');

class AwsStrategy {
	constructor (config) {
		aws.config.loadFromPath(config);
		this.ses = new aws.SES({apiVersion: '2010-12-01'});
	}

	buildEmail (settings) {
		return {
			Destination: {
				BccAddresses: [], 
				CcAddresses: [], 
				ToAddresses: [
					settings.toEmail
				]
			}, 
			Message: {
				Body: {
					Html: {
						Charset: "UTF-8", 
						Data: settings.content
					}
				}, 
				Subject: {
					Charset: "UTF-8", 
					Data: settings.subject
				}
			}, 
			ReplyToAddresses: [
				settings.nameFrom + " <" + settings.fromEmail + ">"
			], 
			Source: settings.nameFrom + " <" + settings.fromEmail + ">"
		}
	}

	send (settings, callbacks) {
		let mail = this.buildEmail(settings);

		this.ses.sendEmail(mail, function(err, data) {
			if (err) {
				return callbacks.failure(err, data);
			}

			callbacks.sucess(data);
		});
	}

module.exports = function(config) {
	return new AwsStrategy(config);
};
