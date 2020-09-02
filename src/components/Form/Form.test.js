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

    it('should check the inputs have text', async () => {
      render(<Form />)

      const songInput = screen.getByPlaceholderText("song name")
      const artistInput = screen.getByPlaceholderText("artist name")
      const link = screen.getByPlaceholderText("link")
      const submit = screen.getByRole('button', {name: "Add Song"})

      expect(songInput).toBeInTheDocument();
      expect(artistInput).toBeInTheDocument();
      expect(link).toBeInTheDocument();
      expect(submit).toBeInTheDocument();

      fireEvent.change(songInput, {target: {name: "songName", value: 'hello'}})
      expect(songInput.value).toEqual('hello');
      fireEvent.change(artistInput, {target: {name: "artistName", value: 'hi'}})
      expect(artistInput.value).toEqual('hi');
      fireEvent.change(link, {target: {name: "link", value: 'here'}})
      expect(link.value).toEqual('here');
    })

})