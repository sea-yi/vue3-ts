import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface SYRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface SYRequestConfig extends AxiosRequestConfig {
  interceptors?: SYRequestInterceptors
}
