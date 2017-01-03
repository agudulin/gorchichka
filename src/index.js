import lyrics from './lyrics.json'

const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)]

export const getQuote = (options = { details: false }) => {
  const randomAlbum = randomElement(lyrics.albums)
  const randomSong = randomElement(randomAlbum.songs)
  const randomQuote = randomElement(randomSong.quotes)

  if (options.details) {
    return {
      album: {
        title: randomAlbum.title,
        year: randomAlbum.year
      },
      song: randomSong.title,
      quote: randomQuote
    }
  }

  return randomQuote
}
