import { Module } from 'vuex'
import { IRootState } from '../types'
import { ISystemState } from './types'

import { getPageListData } from '@/service/main/system/system'

const systemModle: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      console.log(payload)

      //1.对页面发送请求
      const pageResult = await getPageListData(payload.pageUrl, payload.queryInfo)
      console.log(pageResult)
      const { list, totalCount } = pageResult.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}

export default systemModle
