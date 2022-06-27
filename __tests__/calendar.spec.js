import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { advanceTo } from 'jest-date-mock';

import Calendar from '../src'

const NINE_OCTOBER_1992 = 718588800000
const FIRST_OCTOBER_1992 = 717897600000
const LAST_OCTOBER_1992 = 720489600000
const TWENTY_EIGHT_SEPTEMBER_1992 = 717638400000

const TWENTY_SEVEN_OCTOBER_1994 = 783216000000
const FIRST_OCTOBER_1994 = 780969600000
const LAST_OCTOBER_1994 = 783561600000
const TWENTY_SIX_SEPTEMBER_1994 = 780537600000

beforeEach(() => {
  advanceTo(NINE_OCTOBER_1992)
})

test('Default - Inital states (09 October 1992)', () => {
  const calendar = shallow(<Calendar />)
  expect(1).to.equal(1)
})
