window.addEventListener('DOMContentLoaded', () => {
    // const menuField = document.querySelector('.menu__field'),
        //   cardWrapper = menuField.querySelector('.container');    
    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          timer = require('./modules/timer'),
          cards = require('./modules/cards'),
          calc = require('./modules/calc'),
          forms = require('./modules/forms'),
          slider = require('./modules/slider');

    tabs();
    modal();
    timer();
    cards();
    calc();
    forms();
    slider();
});
