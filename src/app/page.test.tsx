import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './page';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));


test('render homepage', async () => {
  render(<HomePage />);

});
