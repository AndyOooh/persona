import { cleanup, render } from '@testing-library/react';

import Home from './page';
import Header from '../components/Header';
import { HeaderProps } from '../components/Header';

describe('/ route', () => {
  describe('Header', () => {
    const headerProps: HeaderProps = { theme: 'mytheme', setTheme: () => null };
    it('should render the logo', () => {
      const { getByRole } = render(<Header {...headerProps} />);
      const image = getByRole('img', { name: 'logo' }) as HTMLImageElement;
      expect(image.src).toContain('/_next/image?url');
    });
    it('should render a nav element', () => {
      const { getByRole } = render(<Header {...headerProps} />);
      const nav = getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });
  });

  describe('Home', () => {
    it('should render links correctly', () => {
      const { getAllByRole } = render(<Home />);
      const links = getAllByRole('link');
      expect(links).toHaveLength(2);
      expect(links[0]).toHaveTextContent('Take test');
    });
    describe('Links', () => {
      it('should navigate user correctly', () => {
        const { getByRole } = render(<Home />);
        const testLink = getByRole('link', { name: 'Take test' });
        expect(testLink).toHaveAttribute('href', 'test');
      });
    });
  });
});
