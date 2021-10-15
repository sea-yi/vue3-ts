import syRequest from '../index'
import { IAccount, IDataType, ILoginResult } from '@/service/login/type'

enum LoginAPI {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAccount) {
  return syRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
