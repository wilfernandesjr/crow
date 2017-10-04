# Crow Emissary

Crow Emissary is a lightful module to send emails through different strategies.

#### Warning

This module is very beta and should not be used in production yet. Feel free to contribute if you liked the idea.


#### Getting Started

First of all, you must add Crow Emissary to your project:

```shell
npm install crow-emissary --save
```

Then you add it into your application, with the strategy that you want to use to send emails.

(Example with Sendgrid Strategie):
```javascript
const strategies = process.cwd() + '/node_modules/crow-emissary/lib/strategies/';
const Sendgrid = require(strategies + 'Sendgrid')(process.env.SENDGRID_API_KEY);
const crow = require('crow-emissary')(Sendgrid);
...

let settings = {
	fromName: 'Michel Fora Temer',
	fromEmail: 'michel@foratemer.org.br,
	toEmail: 'joesley@jbs.com.br',
	subject: 'Tem que manter isso, viu?!',
	type: 'plain/text',
	content: 'É, cuidado, vai com cuidado. [inaudível] Não parecer obstrução da Justiça [inaudível].'
}
crow.send(settings);
```

#### Authentication

Those strategies demands token or some other way of authentication. Soon I'll update this doc with the specs about how to implement it at these strategies.
  
#### Issues

If you find any kind of issue, please feel free to **report** at [**issue**](https://github.com/wilfernandesjr/crow/issues) so I can correct it.  
And, of course, you all are welcome to make a [**pull request**](https://github.com/wilfernandesjr/crow/pulls).  

#### Next Steps

* Refactor the way of import strategies;
* Implement Unit Tests;
* Implement more strategies;
* Increase the funcionality of use template engines to compile html emails from model;
