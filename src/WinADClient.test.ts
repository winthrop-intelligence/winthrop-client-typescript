import { describe, it, expect } from 'vitest';
import { WinADClient } from './WinADClient';

describe('WinADClient', () => {
  it('should instantiate with default config', () => {
    const client = new WinADClient();
    expect(client).toBeDefined();
  });

  it('should instantiate with custom base URL', () => {
    const client = new WinADClient({
      BASE: 'https://api.example.com/v1',
    });
    expect(client).toBeDefined();
  });
});
