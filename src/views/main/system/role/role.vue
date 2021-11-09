<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      :modalConfig="modalConfig"
      :dialogTitle="dialogTitle"
      pageName="role"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageModal } from '@/hooks/usePageModal'

export default defineComponent({
  name: 'role',
  components: { PageContent, PageSearch, PageModal },
  setup() {
    const [pageModalRef, defaultInfo, dialogTitle, handleNewData, handleEditData] = usePageModal()

    console.log('dialogTitle :' + dialogTitle)

    return {
      contentTableConfig,
      searchFormConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      dialogTitle,
      handleNewData,
      handleEditData
    }
  }
})
</script>

<style scoped></style>
