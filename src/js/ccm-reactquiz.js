
var ccm = window.ccm;

ccm.components.reactquiz = {

  config: {

    react: [ ccm.load, 'https://cdnjs.cloudflare.com/ajax/libs/react/0.13.1/react.js' ],
    bootstrap: [ccm.load, 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js'],
    style: [ ccm.load, 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/css/bootstrap.css' ],
    data: [ ccm.store, { local: 'http://www.fh-lsoopjava.de/ccm/data/quiz.json' } ],
  },

  Instance: function () {

    console.log('[METHOD] Instance()');

    /*------------------------------- Members --------------------------------*/

    var Quiz;

    var self = this;

    /*------------------------------- Methods --------------------------------*/

    self.init = function () {

      console.log('In init()');
      Quiz = require('./quiz.jsx');

    };

    self.render = function () {

      // Container für die Inhalte anlegen
      self.element.html( '<div class="quiz"></div>' );

      // Inhalte in den Container rendern
      React.render( <Quiz src={self.data.local}/>, self.element.find( '.quiz' )[ 0 ] );
    };

  }

};
