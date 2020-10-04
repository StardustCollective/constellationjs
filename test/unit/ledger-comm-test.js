'use strict';

// libraries
const chai = require('chai');

// modules
const expect = chai.expect;

const testUtil = require('../util/test-util.js');

const ledgerCommUtil = require('../../scripts/ledger-comm.js');

describe('ledger-comm', () => {
  describe('sign', () => {
    it('sign long', async () => {
      const longTx = '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
      const config = testUtil.getConfig();
      config.ledgerRequestResponse['80020000FF000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'] = '9000';
      config.ledgerRequestResponse['8002800015008000002C80000471800000000000000000000000'] = '9000';

      const actual =
        await new Promise((resolve) => {
          const signCallback = (response) => {
            resolve(response);
          };
          ledgerCommUtil.sign(config.transportNodeHid, longTx, signCallback);
        });
      const expected = {
        "message": "9000",
        "signature": "",
        "success": true
      };
      expect(actual).to.deep.equal(expected);
    });
  });

  beforeEach(async () => {});

  afterEach(async () => {});
});