<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />

    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    >
      <template #status="scope">
        <el-button size="mini" :type="scope.row.enable ? 'success' : 'danger'" plain>
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
    </page-content>

    <page-modal
      ref="pageModalRef"
      pageName="users"
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
import { useStore } from 'vuex'
export default defineComponent({
  components: { PageSearch, PageContent, PageModal },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    //pageModal相关的hook逻辑
    //1.处理密码显示与不显示的逻辑
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
      passwordItem!.isHidden = true
    }
    const modalConfigRef = computed(() => {
      //2.动态添加部门和角色列表
      const store = useStore()

      const departmentItem = modalConfig.formItems.find((item) => item.field === 'departmentId')
      departmentItem!.options = store.state.entireDepartment.map((item: any) => {
        return { title: item.name, value: item.id }
      })
      const roleItem = modalConfig.formItems.find((item) => item.field === 'roleId')
      roleItem!.options = store.state.entireRole.map((item: any) => {
        return { title: item.name, value: item.id }
      })
      return modalConfig
    })

    //3，调用hook获取公共变量和函数
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] = usePageModal(
      newCallback,
      editCallback
    )

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      modalConfigRef,
      handleNewData,
      handleEditData,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>

<style scoped lang="less"></style>
