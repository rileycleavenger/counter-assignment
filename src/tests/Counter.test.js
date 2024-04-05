import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

let getByTestId, getByText;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
  getByText = component.getByText;
})

test('renders counter message', () => {
  const count = getByTestId('count');
  expect(count).toBeTruthy();
});

test('should render initial count with value of 0', () => {
  const count = getByTestId('count');
  expect(count.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  const count = getByTestId('count');
  const buttonplus = getByText('+');
  fireEvent.click(buttonplus);
  expect(count.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  const count = getByTestId('count');
  const buttonminus = getByText('-');
  fireEvent.click(buttonminus);
  expect(count.textContent).toBe('-1');
});