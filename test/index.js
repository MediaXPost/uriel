const test = require('unit.js');
const config = require('../config/config');

describe('uriel', () => {
  const Uriel = require('../');
  const statsd = new Uriel(config);

  it('load', () => {
    const MyModule = require('../');
    const myClass = new MyModule(config);

    test.assert(myClass instanceof Uriel);
  });

  it('startup', () => {
    statsd.init();
    test.assert(statsd.isActive);
  });

  it('shutdown', () => {
    statsd.close();
    test.assert(!statsd.isActive);
  });
});
