<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content">
      <page-content :contentTableConfig="contentTableConfig"></page-content>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  components: { PageSearch, PageContent },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    return {
      // title,
      searchFormConfig,
      userList,
      userCount,
      contentTableConfig
      // propList,
      // showIndexColumn,
      // showSelectColumn
    }
  }
})
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
