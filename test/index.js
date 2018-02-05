/* global it, describe */

import { assert } from 'chai'
import processo from '../src/index'

describe('Awesome test.', () => {
  it('should test awesome function', () => {
    assert(processo() === 'web', 'Not awesome :(')
  })
})
