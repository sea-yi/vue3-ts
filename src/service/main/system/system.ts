import syRequest from '../../index'
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

export function creactePageData(url: string, newData: any) {
  return syRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return syRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
