import { expect, test } from 'vitest';
import { getAPIKey } from '../api/auth.js';
import type { IncomingHttpHeaders } from 'http';




test('getAPIKey returns a non-empty string', () => {
  const headers: IncomingHttpHeaders = {};
  const apiKey = getAPIKey(headers);
  expect(apiKey).toBeDefined();
  expect(apiKey).not.toBe('');
});
