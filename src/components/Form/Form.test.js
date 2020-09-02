import React from 'react';
import '@testing-library/jest-dom';
import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import Form from './Form'

describe('Form Component', () => {
  it('should have two inputs and button', () => {
    render (<Form />);

    const songInput = screen.getByPlaceholderText("song name")
    const artistInput = screen.getByPlaceholderText("artist name")
    const link = screen.getByPlaceholderText("link")
    const submit = screen.getByRole('button', {name: "Add Song"})

    expect(songInput).toBeInTheDocument();
    expect(artistInput).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  })

})