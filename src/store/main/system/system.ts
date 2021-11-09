import { Module } from 'vuex'
import { IRootState } from '../../types'
import { ISystemState } from './types'

import {
  deletePageData,
  getPageListData,
  creactePageData,
  editPageData
} from '@/service/main/system/system'

// const pageUrlMap = {
//   user: '/users/list',
//   role: '/role/list'
// }

const systemModle: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList
    },
    changeUsersCount(state, usersCount: number) {
      state.usersCount = usersCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
        // switch (pageName) {
        //   case 'users':
        //     return state.usersList
        //   case 'role':
        //     return state.roleList
        // }
      }
    },

    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    /**
     * 获取数据
     */
    async getPageListAction({ commit }, payload: any) {
      console.log(payload)
      //获取pageurl
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      // const pageUrl = pageUrlMap[pageName]

      // let pageUrl = ''
      // switch (pageName) {
      //   case 'users':
      //     pageUrl = '/users/list'
      //     break
      //   case 'role':
      //     pageUrl = '/role/list'
      //     break
      // }

      //1.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      console.log(pageResult)

      //将数据存储到state中
      const { list, totalCount } = pageResult.data

      const chengePageName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1)

      commit(`change${chengePageName}List`, list)
      commit(`change${chengePageName}Count`, totalCount)

      // switch (pageName) {
      //   case 'user':
      //     commit('changeUserList', list)
      //     commit('changeUserCount', totalCount)
      //     break
      //   case 'role':
      //     commit('changeRoleList', list)
      //     commit('changeRoleCount', totalCount)
      //     break
      // }
    },

    /**
     * 删除数据
     */
    async deletePageDataAction({ dispatch }, payload: any) {
      //pageName  id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`

      //调用删除网络请求
      await deletePageData(pageUrl)

      //重新请求数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    /**
     * 新建数据
     */
    async createPageDataAction({ dispatch }, payload: any) {
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      const newDataResult = await creactePageData(pageUrl, newData)
      console.log(newDataResult)

      //重新请求数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    /**
     * 编辑数据
     */
    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)

      //重新请求数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModle
