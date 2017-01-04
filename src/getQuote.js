import transform from './transform'
import randomElement from './randomElement'
import lyrics from './lyrics.json'

export default (options = { details: false }) => {
  const randAlbum = randomElement(lyrics.albums)
  const randSong = randomElement(randAlbum.item.songs)
  const randQuote = randomElement(randSong.item.quotes)

  if (options.details) {
    return {
      album: {
        index: randAlbum.index,
        title: randAlbum.item.title,
        year: randAlbum.item.year
      },
      song: {
        index: randSong.index,
        title: randSong.item.title
      },
      quote: {
        index: randQuote.index,
        title: transform(randQuote.item)
      }
    }
  }

  return transform(randQuote.item)
}
