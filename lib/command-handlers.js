'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listImages = exports.listSizes = exports.listRegions = exports.deleteDroplet = exports.addDroplet = exports.listDroplets = exports.getAccount = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getAccount = exports.getAccount = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
    var args = _ref.args,
        flags = _ref.flags;
    var token, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = flags.do - token || process.env.DO_TOKEN;
            _context.next = 3;
            return digitalOceanApi.getAccount({ token: token });

          case 3:
            data = _context.sent;

            console.log((0, _stringify2.default)(data, null, '  '));

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getAccount(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 *
 */


var listDroplets = exports.listDroplets = function () {
  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_ref3) {
    var args = _ref3.args,
        flags = _ref3.flags;
    var token, data, filters, hasFlags, matched;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = flags.do - token || process.env.DO_TOKEN;
            _context2.next = 3;
            return digitalOceanApi.getDroplets({ token: token });

          case 3:
            data = _context2.sent;
            filters = [flags.name && {
              test: function test(val) {
                return new RegExp(flags.name).test(val);
              },

              objectKey: 'name'
            }].filter(function (a) {
              return a;
            });
            hasFlags = (0, _keys2.default)(filters).length > 0 && (0, _keys2.default)(filters).every(function (key) {
              return Boolean(filters[key]);
            });

            if (hasFlags) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt('return', console.log((0, _stringify2.default)(data, null, '  ')));

          case 8:
            matched = filters.reduce(function (arr, filter) {
              arr = arr.concat(data.droplets.filter(function (a) {
                return filter.test(_lodash2.default.get(a, filter.objectKey));
              })).filter(function (a) {
                return a;
              });
              return arr;
            }, []);

            console.log((0, _stringify2.default)(matched, null, '  '));

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function listDroplets(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 *
 */


var addDroplet = exports.addDroplet = function () {
  var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(_ref5) {
    var args = _ref5.args,
        flags = _ref5.flags;
    var token, postData, data;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            token = flags.do - token || process.env.DO_TOKEN;
            postData = {
              name: flags.name,
              region: flags.region,
              size: flags.size,
              image: flags.image,
              tags: (flags.tags || []).split(',')
            };


            console.log('Adding droplet with the following data\n', (0, _stringify2.default)(postData, null, '  '), '\n');

            _context3.next = 5;
            return digitalOceanApi.addDroplet({ token: token, postData: postData });

          case 5:
            data = _context3.sent;

            console.log((0, _stringify2.default)(data, null, '  '));

          case 7:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function addDroplet(_x3) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 *
 */


var deleteDroplet = exports.deleteDroplet = function () {
  var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(_ref7) {
    var args = _ref7.args,
        flags = _ref7.flags;
    var token, id, data;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            token = flags.do - token || process.env.DO_TOKEN;
            id = flags.id;
            _context4.next = 4;
            return digitalOceanApi.deleteDroplet({ token: token, id: id });

          case 4:
            data = _context4.sent;

            console.log((0, _stringify2.default)(data, null, '  '));

          case 6:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function deleteDroplet(_x4) {
    return _ref8.apply(this, arguments);
  };
}();

/**
 *
 */


var listRegions = exports.listRegions = function () {
  var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(_ref9) {
    var args = _ref9.args,
        flags = _ref9.flags;
    var token, data;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            token = flags.do - token || process.env.DO_TOKEN;
            _context5.next = 3;
            return digitalOceanApi.listRegions({ token: token });

          case 3:
            data = _context5.sent;

            if (!flags.slug) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt('return', console.log(data.regions.map(function (s) {
              return s.slug;
            }).join('\n')));

          case 6:

            console.log((0, _stringify2.default)(data, null, '  '));

          case 7:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function listRegions(_x5) {
    return _ref10.apply(this, arguments);
  };
}();

/**
 *
 */


var listSizes = exports.listSizes = function () {
  var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(_ref11) {
    var args = _ref11.args,
        flags = _ref11.flags;
    var token, data;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            token = flags.do - token || process.env.DO_TOKEN;
            _context6.next = 3;
            return digitalOceanApi.listSizes({ token: token });

          case 3:
            data = _context6.sent;

            if (!flags.slug) {
              _context6.next = 6;
              break;
            }

            return _context6.abrupt('return', console.log(data.sizes.map(function (s) {
              return s.slug;
            }).join('\n')));

          case 6:

            console.log((0, _stringify2.default)(data, null, '  '));

          case 7:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function listSizes(_x6) {
    return _ref12.apply(this, arguments);
  };
}();

/**
 *
 */


var listImages = exports.listImages = function () {
  var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(_ref13) {
    var args = _ref13.args,
        flags = _ref13.flags;
    var token, data;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            token = flags.do - token || process.env.DO_TOKEN;
            _context7.next = 3;
            return digitalOceanApi.listImages({ token: token });

          case 3:
            data = _context7.sent;

            if (!flags.slug) {
              _context7.next = 6;
              break;
            }

            return _context7.abrupt('return', console.log(data.images.map(function (s) {
              return s.slug;
            }).filter(function (a) {
              return a;
            }).join('\n')));

          case 6:

            console.log((0, _stringify2.default)(data, null, '  '));

          case 7:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function listImages(_x7) {
    return _ref14.apply(this, arguments);
  };
}();

var _digitalOceanApi = require('./services/digital-ocean-api.js');

var digitalOceanApi = _interopRequireWildcard(_digitalOceanApi);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }