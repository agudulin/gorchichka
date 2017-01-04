import transform from './transform'
import lyrics from './lyrics.json'

export default (albumIndex, songIndex, quoteIndex, options = { details: false }) => {
  let album, song, quote
  try {
    album = lyrics.albums[albumIndex]
    song = album.songs[songIndex]
    quote = transform(song.quotes[quoteIndex])
  } catch (e) {
    return { error: 'Wrong index provided' }
  }

  if (options.details) {
    return {
      album: {
        index: albumIndex,
        title: album.title,
        year: album.year
      },
      song: {
        index: songIndex,
        title: song.title
      },
      quote: {
        index: quoteIndex,
        title: quote
      }
    }
  }

  return quote
}
