'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listImages = exports.listSizes = exports.listRegions = exports.deleteDroplet = exports.addDroplet = exports.getDroplets = exports.getAccount = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getAccount = exports.getAccount = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        token = _ref3.token;

    var _ref4, data;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios2.default.get(API_URIS.ACCOUNT, {
              headers: getHeader({ token: token })
            });

          case 2:
            _ref4 = _context.sent;
            data = _ref4.data;
            return _context.abrupt('return', data);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getAccount() {
    return _ref2.apply(this, arguments);
  };
}();

var getDroplets = exports.getDroplets = function () {
  var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        token = _ref6.token;

    var _ref7, data;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _axios2.default.get(API_URIS.DROPLETS, {
              headers: getHeader({ token: token })
            });

          case 2:
            _ref7 = _context2.sent;
            data = _ref7.data;
            return _context2.abrupt('return', data);

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getDroplets() {
    return _ref5.apply(this, arguments);
  };
}();

var addDroplet = exports.addDroplet = function () {
  var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
    var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        token = _ref9.token,
        postData = _ref9.postData;

    var _ref10, data;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _axios2.default.post(API_URIS.DROPLETS, postData, {
              headers: getHeader({ token: token })
            });

          case 2:
            _ref10 = _context3.sent;
            data = _ref10.data;
            return _context3.abrupt('return', data);

          case 5:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function addDroplet() {
    return _ref8.apply(this, arguments);
  };
}();

var deleteDroplet = exports.deleteDroplet = function () {
  var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
    var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        token = _ref12.token,
        id = _ref12.id;

    var _ref13, data;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _axios2.default.delete(API_URIS.DROPLETS + '/' + id, {
              headers: getHeader({ token: token })
            });

          case 2:
            _ref13 = _context4.sent;
            data = _ref13.data;
            return _context4.abrupt('return', data);

          case 5:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function deleteDroplet() {
    return _ref11.apply(this, arguments);
  };
}();

var listRegions = exports.listRegions = function () {
  var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
    var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        token = _ref15.token;

    var _ref16, data;

    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _axios2.default.get(API_URIS.REGIONS + '?page=1&per_page=100', {
              headers: getHeader({ token: token })
            });

          case 2:
            _ref16 = _context5.sent;
            data = _ref16.data;
            return _context5.abrupt('return', data);

          case 5:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function listRegions() {
    return _ref14.apply(this, arguments);
  };
}();

var listSizes = exports.listSizes = function () {
  var _ref17 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
    var _ref18 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        token = _ref18.token;

    var _ref19, data;

    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _axios2.default.get(API_URIS.SIZES + '?page=1&per_page=100', {
              headers: getHeader({ token: token })
            });

          case 2:
            _ref19 = _context6.sent;
            data = _ref19.data;
            return _context6.abrupt('return', data);

          case 5:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function listSizes() {
    return _ref17.apply(this, arguments);
  };
}();

var listImages = exports.listImages = function () {
  var _ref20 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
    var _ref21 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        token = _ref21.token;

    var _ref22, data;

    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _axios2.default.get(API_URIS.IMAGES + '?page=1&per_page=100', {
              headers: getHeader({ token: token })
            });

          case 2:
            _ref22 = _context7.sent;
            data = _ref22.data;
            return _context7.abrupt('return', data);

          case 5:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function listImages() {
    return _ref20.apply(this, arguments);
  };
}();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_SCHEME = 'https://';
var API_HOST = 'api.digitalocean.com';
var API_VER = '/v2';
var API_BASE = '' + API_SCHEME + API_HOST + API_VER;
var API_URIS = {
  ACCOUNT: API_BASE + '/account',
  DROPLETS: API_BASE + '/droplets',
  REGIONS: API_BASE + '/regions',
  SIZES: API_BASE + '/sizes',
  IMAGES: API_BASE + '/images'
};

function getHeader(_ref) {
  var token = _ref.token;

  (0, _invariant2.default)(token, '\'token\' must be provided');

  return {
    Authorization: 'Bearer ' + token
  };
}