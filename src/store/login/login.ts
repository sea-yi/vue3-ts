import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../type'

const LoginModule: Module<ILoginState, IRootState> = {
  namespaced: true, ////namespaced: true 的方式使其成为带命名空间的模块。保证在变量名一样的时候，添加一个父级名拼接。
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log(payload)
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log(payload)
    }
  }
}

export default LoginModule
