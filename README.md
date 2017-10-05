# Crow Emissary

Crow Emissary is a simple module to send emails through different strategies.

#### Warning

This module is very beta and should not be used in production yet. Feel free to contribute if you liked the idea.


## Getting Started

First of all, you must add Crow Emissary to your project:

```shell
npm install crow-emissary --save
```

Then you add it into your application, with the strategy that you want to use to send emails.
Simple as that:
```javascript
const Strategy = require('crow-emissary/lib/strategies/Strategy')(CREDENTIAL);
const crow = require('crow-emissary')(Strategy);
...
let settings = {...}; // fromEmail, toEmail, subject...
crow.send(settings);
```

#### Authentication

Those strategies demands token or some other way of authentication. Soon I'll update this doc with the specs about how to implement it at these strategies.



## Strategies

The idea of this module is to encapsulate different send email algorithms into a common api. All you have to do is to instantiate the strategy/algorithm that you want to use and call the Crow passing it as parameter.

#### Sendgrid Strategy
```javascript
const Sendgrid = require('crow-emissary/lib/strategies/Sendgrid')(process.env.SENDGRID_API_KEY);
const crow = require('crow-emissary')(Sendgrid);
...
let settings = {
	fromName: 'Michel Temer',
	fromEmail: 'michel@golpistas.org.br',
	toEmail: 'joesley@jbs.com.br',
	subject: 'Tem que manter isso, viu?!',
	type: 'text/html',
	content: '<h1>Fora, Temer!</h1>'
}
crow.send(settings);
```

#### AWS SES Strategy
```javascript
const AwsSES = require('crow-emissary/lib/strategies/AwsSES')('/path/to/credentials.json');
const crow = require('crow-emissary')(AwsSES);
...
let settings = {
	fromName: 'Michel Temer',
	fromEmail: 'michel@golpistas.org.br',
	toEmail: 'joesley@jbs.com.br',
	subject: 'Tem que manter isso, viu?!',
	type: 'text/html',
	content: '<h1>Fora, Temer!</h1>'
}
crow.send(settings);
```

  
## Issues

If you find any kind of issue, please feel free to **report** at [**issue**](https://github.com/wilfernandesjr/crow/issues) so I can correct it.  
And, of course, you all are welcome to make a [**pull request**](https://github.com/wilfernandesjr/crow/pulls).  

## Next Steps

* Refactor the way of import strategies;
* Implement Unit Tests;
* Implement more strategies;
* Increase the feature of use template engines to compile html emails from model;
