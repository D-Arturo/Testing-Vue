
import { createLocalVue, mount } from '@vue/test-utils'
import { Plugin } from '@/components/Plugin.vue'

const localVue = createLocalVue()
localVue.use(Plugin)

mount(component, { localVue })
