import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { SYRequestInterceptors, SYRequestConfig } from './type'

class SYRequest {
  instance: AxiosInstance
  interceptors?: SYRequestInterceptors

  constructor(config: SYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request(config: AxiosRequestConfig) {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default SYRequest
