import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackFn = (item?: any) => void

export function usePageModal(newCallback?: CallbackFn, editCallback?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const dialogTitle = ref('')

  const handleNewData = () => {
    defaultInfo.value = {}
    dialogTitle.value = '新建'
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCallback && newCallback()
  }

  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    dialogTitle.value = '编辑'

    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCallback && editCallback(item)
  }

  return [pageModalRef, defaultInfo, dialogTitle, handleNewData, handleEditData]
}
