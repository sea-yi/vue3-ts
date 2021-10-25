<template>
  <div class="user">
    <sy-form v-bind="searchFormConfig" />
    <div class="content">user</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SyForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  components: {
    SyForm
  },
  setup() {
    return { searchFormConfig }
  }
})
</script>

<style scoped lang="less"></style>
