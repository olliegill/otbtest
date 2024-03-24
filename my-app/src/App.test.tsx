import { render } from '@testing-library/react';
import App from './App';
import HotelsPage from './HotelsPage';

test('renders app', () => {
  render(<App />);
});

test('renders Hotels Page',  () => {
  render(<HotelsPage />);
});