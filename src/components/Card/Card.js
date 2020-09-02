import React from 'react';

const Card = ( {songName, artistName, link, id}) => {
  return (<section>
    <h2>Song: {songName}</h2>
    <h3>Artist: {artistName}</h3>
    <h4>Music Video: {link}</h4>
  </section>
  )
}

export default Card;