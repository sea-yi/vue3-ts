<template>
  <div class="dashboard">
    <h2>dashboard</h2>
    <div ref="divRef"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

import * as echarts from 'echarts'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const divRef = ref<HTMLElement>()
    onMounted(() => {
      const echartInstance = echarts.init(divRef.value!)
      const option = {}
      echartInstance.setOption(option)
    })

    return { echarts }
  }
})
</script>

<style scoped></style>
