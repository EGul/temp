
var something = (function () {

  function temp() {

  }

  return {
    temp: temp
  };

})();

(function () {

  'use strict';

  something.temp();

})();
