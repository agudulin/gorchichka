/* global describe, expect, it */
import { getQuote, getQuoteByIndex } from '../src'

describe('getQuoteByIndex', () => {
  it('should return a string when no options provided', () => {
    const quote = getQuoteByIndex(0, 0, 0)

    expect(typeof quote).toBe('string')
  })

  it('should return an object when options are provided', () => {
    const quote = getQuoteByIndex(0, 0, 0, { details: true })

    expect(quote).toEqual({
      album: {
        index: expect.any(Number),
        title: expect.any(String),
        year: expect.any(Number)
      },
      song: {
        index: expect.any(Number),
        title: expect.any(String)
      },
      quote: {
        index: expect.any(Number),
        title: expect.any(String)
      }
    })
  })

  it('should return an object with error message when wrong index is provided', () => {
    const quote = getQuoteByIndex(100, 0, 0, { details: true })

    expect(quote).toEqual({
      error: expect.any(String)
    })
  })

  it('should return the same quote as getQuote', () => {
    const quote = getQuote({ details: true })
    const sameQuote = getQuoteByIndex(quote.album.index, quote.song.index, quote.quote.index)

    expect(quote.quote.title).toEqual(sameQuote)
  })
})
