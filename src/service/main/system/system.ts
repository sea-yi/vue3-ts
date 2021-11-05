import { IFormItem } from '@/base-ui/form'
import syRequest from '../../index'
import SyRquest from '../../index'
import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return syRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

//url:/users/id
export function deletePageData(url: string) {
  return syRequest.delete<IDataType>({
    url: url
  })
}
