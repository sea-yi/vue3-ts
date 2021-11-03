import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'
import router from '@/router'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'

import LocalCache from '@/utils/cache'
import { mapMenusToRoutes, mapMenuToPermissions } from '@/utils/map-menus'
import user from '@/router/main/system/user/user'

const LoginModule: Module<ILoginState, IRootState> = {
  namespaced: true, ////namespaced: true 的方式使其成为带命名空间的模块。保证在变量名一样的时候，添加一个父级名拼接。
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      //userMenus => routes
      const routes = mapMenusToRoutes(userMenus)
      // console.log(routes)

      //将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      //获取用户按钮的权限
      const permissions = mapMenuToPermissions(userMenus)
      state.permissions = permissions
      console.log(permissions)
    }
  },
  actions: {
    /**
     * 账号登录
     */
    async accountLoginAction({ commit }, payload: IAccount) {
      //1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      LocalCache.setCache('token', token)
      // console.log(loginResult)

      //2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      // console.log(userInfoResult)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)

      //3.请求用户菜单
      const userMenuResult = await requestUserMenuByRoleId(userInfo.role.id)
      const userMenus = userMenuResult.data
      commit('changeUserMenus', userMenus)
      LocalCache.setCache('userMenus', userMenus)
      // console.log(userMenus)

      //4.跳到首页
      router.push('/main')
    },

    //更新vuex中的值
    loadLocalLogin({ commit }) {
      const token = LocalCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = LocalCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = LocalCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    },

    phoneLoginAction({ commit }, payload: any) {
      console.log(payload)
    }
  }
}

export default LoginModule
