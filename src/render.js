import mainTemplate from './src/templates/main.html!text'
import cardstackTemplate from './src/templates/cardstack.html!text'
import cardTemplate from './src/templates/card.html!text'


import Handlebars from 'handlebars'
import rp from 'request-promise'

Handlebars.registerPartial({
	"cardstack": cardstackTemplate,
	"card": cardTemplate,
});

Handlebars.registerHelper({
  'if_eq': function(a, b, opts) {
    if(a === b){
        return opts.fn(this);
    }
    return opts.inverse(this);
  }
});

export function render() {
    return rp({
        uri: 'https://interactive.guim.co.uk/docsdata-test/1vEzQSrykZ4tddtRsiYtpeXQLHdlqCIzSiI4MyFgfi2Q.json',
        json: true
    }).then((data) => {
			var content = Handlebars.compile( mainTemplate, { commpat: true } );
      return content(data);
    });
}
