'use strict';

const BaseService = require('./base');
const si = require('systeminformation');

class SysteminfoService extends BaseService {
  async getCpu(dir) {
    const self = this;

    let data = await si.cpu();

    return data;
  }
}

module.exports = SysteminfoService;
