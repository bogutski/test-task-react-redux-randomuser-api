import { formatPersonName } from '../utils/utils';

describe('Utils', () => {
  it('should format person name', () => {
    const expected = 'Name Last';
    const result = formatPersonName('name', 'last');
    expect(result).toBe(expected);

    expect(formatPersonName('', 'last')).toBe('Last');
    expect(formatPersonName('', '')).toBe('');
  });
});
