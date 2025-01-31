import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './Button';

describe('Button Component', () => {
  it('should render correctly', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary text-primary-foreground');
  });

  it('should apply correct variant styles', () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByRole('button', { name: /delete/i });
    expect(button).toHaveClass('bg-destructive text-destructive-foreground');
  });

  it('should apply correct size styles', () => {
    render(<Button size="lg">Large Button</Button>);
    const button = screen.getByRole('button', { name: /large button/i });
    expect(button).toHaveClass('h-11 rounded-md px-8');
  });

  it('should trigger onClick event when clicked', async () => {
    const handleClick = vi.fn();
    const { container } = render(<Button onClick={handleClick}>Click</Button>);
    const button = within(container).getByRole('button', { name: /click/i });
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render as child element when `asChild` is used', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );
    const linkButton = screen.getByRole('link', { name: /link button/i });
    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveAttribute('href', '/test');
  });

  it('should be disabled when `disabled` prop is passed', async () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );
    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
