"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ninja =
/*#__PURE__*/
function () {
  function Ninja(name) {
    _classCallCheck(this, Ninja);

    this.name = name;
  }

  _createClass(Ninja, [{
    key: "announce",
    value: function announce() {
      alert("".concat(this.name, " Ninja is here!"));
      console.log("".concat(this.name, " Ninja is here!"));
    }
  }]);

  return Ninja;
}();

var testNinja = new Ninja('Shadowbox');
testNinja.announce();