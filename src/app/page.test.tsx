import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './page'; // Adjust the path if necessary

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));


test('renders user cards and handles user click', async () => {
  render(<HomePage />);

});
