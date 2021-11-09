import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  title: '角色',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请选择角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请选择角色介绍'
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {}
}
