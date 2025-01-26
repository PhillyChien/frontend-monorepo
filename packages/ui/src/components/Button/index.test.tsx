import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import Button from '.';

test('Button should be rendered', () => {
  render(<Button color="primary">Click me!</Button>);
  expect(screen.getByText(/Click me!/)).toBeInTheDocument();
});
