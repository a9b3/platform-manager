'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var main = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setupCommanderShepard();

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function main() {
    return _ref.apply(this, arguments);
  };
}();

var _commanderShepard = require('commander-shepard');

var _commanderShepard2 = _interopRequireDefault(_commanderShepard);

var _commandHandlers = require('./command-handlers.js');

var commandHandlers = _interopRequireWildcard(_commandHandlers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setupCommanderShepard() {
  var c = new _commanderShepard2.default({
    key: 'platform-manager',
    package: require('../package.json'),
    flags: [{
      keys: ['do-token'],
      shortDescription: 'digital ocean token or set it in env var DO_TOKEN'
    }],
    subcommands: [{
      key: 'account',
      shortDescription: 'show account info',
      command: commandHandlers.getAccount
    }, {
      key: 'regions',
      shortDescription: 'list available regions',
      flags: [{
        keys: ['slug'],
        shortDescription: 'show slugs only'
      }],
      command: commandHandlers.listRegions
    }, {
      key: 'sizes',
      shortDescription: 'list available sizes',
      flags: [{
        keys: ['slug'],
        shortDescription: 'show slugs only'
      }],
      command: commandHandlers.listSizes
    }, {
      key: 'images',
      shortDescription: 'list available images',
      flags: [{
        keys: ['slug'],
        shortDescription: 'show slugs only'
      }],
      command: commandHandlers.listImages
    }, {
      key: 'droplet',
      shortDescription: 'manipulate droplet resources',
      subcommands: [{
        key: 'list',
        flags: [{
          keys: ['name'],
          shortDescription: 'filter by name'
        }],
        longDescription: 'Lists all digital ocean droplets, this will print a JSON object to stout you can pipe this to jq to parse for specific information',
        shortDescription: 'list digital ocean droplets',
        command: commandHandlers.listDroplets
      }, {
        key: 'add',
        flags: [{
          keys: ['name'],
          required: true,
          shortDescription: 'filter by name'
        }, {
          keys: ['region'],
          required: true,
          shortDescription: 'region of deploy'
        }, {
          keys: ['size'],
          required: true,
          shortDescription: 'size of droplet'
        }, {
          keys: ['image'],
          required: true,
          shortDescription: 'image id of droplet'
        }, {
          keys: ['tags'],
          shortDescription: 'tags for droplet'
        }],
        shortDescription: 'Add a droplet',
        command: commandHandlers.addDroplet
      }, {
        key: 'delete',
        flags: [{
          keys: ['id'],
          required: true,
          shortDescription: 'id of droplet'
        }],
        longDescription: 'Delete a droplet using the provided id.',
        shortDescription: 'delete a droplet',
        command: commandHandlers.deleteDroplet
      }]
    }]
  });
  c.execute();
}

main().catch(function (e) {
  console.error('ERROR', e.message);
});