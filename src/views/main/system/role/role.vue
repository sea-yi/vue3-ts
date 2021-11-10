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
      :otherInfo="otherInfo"
      pageName="role"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
    >
      <div class="menuTree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        >
        </el-tree>
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, nextTick } from 'vue'
import { ElTree } from 'element-plus'
import { useStore } from '@/store'
import { MenuMapLeafKeys } from '@/utils/map-menus'

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
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback = (item: any) => {
      const leafKeys = MenuMapLeafKeys(item.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    const [pageModalRef, defaultInfo, dialogTitle, handleNewData, handleEditData] = usePageModal(
      undefined,
      editCallback
    )

    const store = useStore()
    const menus = computed(() => store.state.entireMenu)

    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedkeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = { ...checkedKeys, ...halfCheckedKeys }
      otherInfo.value = { menuList }
    }

    return {
      contentTableConfig,
      searchFormConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      dialogTitle,
      handleNewData,
      handleEditData,
      menus,
      otherInfo,
      handleCheckChange,
      elTreeRef
    }
  }
})
</script>

<style scoped lang="less">
.menuTree {
  margin-left: 20px;
}
</style>
