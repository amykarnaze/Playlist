export const fetchSongs = () => {
  return fetch('http://localhost:8080/api/v1/playlist')
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
}