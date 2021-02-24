<template>
  <div>
    <h1>
      Plugin
    </h1>
  </div>
</template>

<script>

import {mount} from '@vue/test-utils'
import {component} from 'vue/types/umd.d.ts'
export default {

}
const $route = {
  path: '/',
  hash: '',
  params: {id: '123'},
  query: {msg: 'Hello'}
}
mount(component, {
  mocks: { $route }
})
</script>

<style></style>
