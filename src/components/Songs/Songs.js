import React from 'react';
import Card from '../Card/Card';

const Songs = ( {songQueue} ) => {
  return (
    <section>
      <h2>Your Songs</h2>
        {songQueue.map(song => {
           return <Card
            songName={song.songName}
            artistName={song.artistName}
            link={song.link}
            id={song.id}
          />
        })
      }
    </section>
  )
}

export default Songs