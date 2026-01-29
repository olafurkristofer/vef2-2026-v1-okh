import assert from 'node:assert';
import { describe, it } from 'node:test';
import { parseLine } from './parse.js';

describe('parse', () => {
  describe('parseLine', () => {
    it('should parse the empty string and return null', () => {
      const input = '';

      const output = parseLine(input);

      assert.strictEqual(output, null)
    });
  });
});
