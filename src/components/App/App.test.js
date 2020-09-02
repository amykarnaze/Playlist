import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('true should be true', () => {
  expect(true).toEqual(true);
});

describe('App', () => {
  it('should add a song', () => {
    const addSong = jest.fn();
    render(<App addSong={addSong}/>
      
    )
  })
})
