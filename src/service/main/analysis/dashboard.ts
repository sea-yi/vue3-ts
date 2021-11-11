import syRequest from '../../index'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  adddressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return syRequest.get({
    url: DashboardAPI.categoryGoodsCount
  })
}

export function getCategoryGoodsSale() {
  return syRequest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return syRequest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getAddressGoodsSale() {
  return syRequest.get({
    url: DashboardAPI.adddressGoodsSale
  })
}
