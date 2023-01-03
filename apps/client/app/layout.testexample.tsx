import Home from './page';

import {  render } from '@testing-library/react';
import RootLayout from './layout';

describe('Home', () => {

  
  it('should render the Header component correctly', () => {
    const { getByRole } = render(<RootLayout children={<Home />} />);
    const nav = getByRole('navigation')
    expect(nav).toBeInTheDocument();
  });
});
