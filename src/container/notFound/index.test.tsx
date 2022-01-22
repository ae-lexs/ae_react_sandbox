import { render, screen } from '@testing-library/react';

import NotFound from './index';

describe('<NotFound />', () => {
  it('should render Home text', () => {
    render(<NotFound />);

    const actualText = screen.getByText(/not found/i);

    expect(actualText).toBeInTheDocument();
  });
});
