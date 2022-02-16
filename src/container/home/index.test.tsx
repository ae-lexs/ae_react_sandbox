import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from './index';

describe('<Home />', () => {
  it('should render Home text', () => {
    render(<Home />);

    const actualText = screen.getByText(/home/i);

    expect(actualText).toBeInTheDocument();
  });
});
