/* global describe, expect, it */
import { getQuote } from '../src'

describe('getQuote', () => {
  it('should return a string when no options provided', () => {
    const quote = getQuote()

    expect(typeof quote).toBe('string')
  })

  it('should return an object when options are provided', () => {
    const quote = getQuote({ details: true })

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
})
