import React from 'react';
import { render, screen } from '@testing-library/react';
import { EmomLoading } from '@/components/EmomApp';

describe('EmomLoading', () => {
  it('shows the heading and announces that the timer is loading', () => {
    render(<EmomLoading />);

    expect(screen.getByRole('heading', { name: 'Beast EMOM' })).toBeInTheDocument();
    expect(screen.getByLabelText('Loading the timer')).toHaveAttribute('aria-busy', 'true');
  });
});
