// app/monitors/memory.js

const os = require('os');
const Monitor = require('../lib/monitor');

class MemoryMonitor extends Monitor {
  constructor(statsFactory) {
    super('mem', statsFactory);
  }

  collect() {
    const freemem = os.freemem();
    const totalmem = os.totalmem();

    this.setStats(this.bundleStats({
      free: freemem,
      free_percent: freemem / totalmem * 100,
      total: totalmem,
      used: totalmem - freemem,
      used_percent: (totalmem - freemem) / totalmem * 100
    }));
  }
}

module.exports = MemoryMonitor;
