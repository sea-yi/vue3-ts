import syRequest from '../index'
import { IAccount, IDataType, ILoginResult } from '@/service/login/type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', //users/id(动态)
  UserMenus = '/role/' //用法:/role/id(动态)/menu
}

//账号登录请求
export function accountLoginRequest(account: IAccount) {
  return syRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

//获取用户信息请求
export function requestUserInfoById(id: number) {
  return syRequest.get<IDataType<any>>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

//获取用户菜单请求
export function requestUserMenuByRoleId(id: number) {
  return syRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
