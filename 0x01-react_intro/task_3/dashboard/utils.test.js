// src/utils.test.js

import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
  it('returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
});

describe('getFooterCopy', () => {
  it('returns correct string when the argument is true', () => {
    const expectedString = 'Holberton School';
    expect(getFooterCopy(true)).toBe(expectedString);
  });

  it('returns correct string when the argument is false', () => {
    const expectedString = 'Holberton School main dashboard';
    expect(getFooterCopy(false)).toBe(expectedString);
  });
});

describe('getLatestNotification', () => {
  it('returns the correct string', () => {
    const expectedString =
      '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expectedString);
  });
});
