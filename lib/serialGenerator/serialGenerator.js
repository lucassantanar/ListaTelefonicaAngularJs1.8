angular.module('serialGenerator', []);
angular.module('serialGenerator').provider('serialGenerator', function () {
  this.$get = function () {
    var _length = 10;

    this.getLength = function () {
      return _length;
    };

    this.setLength = function (length) {
      _length = length;
    };

    return {
      generate: function () {
        var serial = '';
        while (serial.length < 20) {
          serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
        }
        return serial;
      },
    };
  };
});
