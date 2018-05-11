import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { SearchResultItemContact } from '../searchResultItemContact';

const renderer = new ShallowRenderer();

describe('< SearchResultItemContact >', () => {
  const mockItem = { phone: '123-123-123', cell: '234-234-234', email: 'qwe@qwe.qwe' };
  renderer.render(<SearchResultItemContact item={mockItem}/>);

  it('should render', () => {
    const actual = renderer.getRenderOutput();
    const expected = 'ul';
    expect(actual.type).toBe(expected);
    // expect(formatPersonName(undefined, 'last')).toBe(' Last');
  });

/*  it('should render children', () => {
    const actual = renderer.getRenderOutput();
    const expected = [
      `<strong>Phone:</strong> ${item.phone}`,
      <strong>Cell:</strong>,
      <strong>Email:</strong>
    ];

    expect(actual.props.children).toEqual(expected);
  });*/

});

