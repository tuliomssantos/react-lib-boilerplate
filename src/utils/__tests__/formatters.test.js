import { upperCase } from '../formatters'

describe('Uppercase formatter', () => {
  it('Check if the word is in all capital letters', () => {
    const word = upperCase('hello')

    expect(word).toBe('HELLO')
  })
})
