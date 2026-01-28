import assert from 'node:assert';
import { describe, it } from 'node:test';
import { parseLine, parseQuestions } from './parse.js';

describe('parse', () => {
  describe('parseQuestions', () => {
    it('should test', () => {
      const result = parseQuestions();
      assert.strictEqual(result, 'test');
    });
  });

  describe('parseLine', () => {
    it('should parse the empty string and return null', () => {
      const input = '';

      const output = parseLine(input);

      assert.strictEqual(output, null)
    });
  });
});
