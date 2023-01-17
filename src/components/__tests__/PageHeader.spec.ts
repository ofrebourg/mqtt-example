import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import PageHeader from '../PageHeader.vue'

describe('PageHeader', () => {
  it('renders properly', () => {
    const wrapper = mount(PageHeader, { propsData: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
