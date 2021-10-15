import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../type'

import { accountLoginRequest } from '@/service/login/login'
import { IAccount } from '@/service/login/type'

const LoginModule: Module<ILoginState, IRootState> = {
  namespaced: true, ////namespaced: true 的方式使其成为带命名空间的模块。保证在变量名一样的时候，添加一个父级名拼接。
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      //1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      console.log(loginResult)

      //2.
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log(payload)
    }
  }
}

export default LoginModule
