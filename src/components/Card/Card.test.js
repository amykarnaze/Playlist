import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import Card from './Card.js'

describe('Card Component', () => {
  it('should render a song, artist name and link', () => {
    const song = {
      "songName": "Fair Weather",
      "artistName": "Art Farmer",
      "link": "https://www.youtube.com/watch?v=8-jfsUusSDQ",
      "id": 3
    }

    render(<Card 
      songName= "Fair Weather"
      artistName = "Art Farmer"
      link = "https://www.youtube.com/watch?v=8-jfsUusSDQ"
      id= {3}
    />)
    
    const songName = screen.getByText("Fair Weather", { exact: false })
    const artistName = screen.getByText("Art Farmer", { exact: false })
    const link = screen.getByText("https://www.youtube.com/watch?v=8-jfsUusSDQ", { exact: false })

    expect(songName).toBeInTheDocument();
    expect(artistName).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  })

})