import axios from 'axios'
import ClientError from './client_error'

const HEADER_AUTH = 'Authorization'
const HEADER_BEARER = 'BEARER'
const HEADER_REQUESTED_WITH = 'X-Requested-With'
const HEADER_USER_AGENT = 'User-Agent'

export default class Client4 {
  constructor() {
    this.token = ''
    // this.url = 'http://10.49.46.13:8000'
    // this.url = 'http://10.49.46.13:8000/'
      this.url = 'http://116.110.6.137:1085/'
    this.urlVersion = '/api'
    this.defaultHeaders = {}
    this.userId = ''
    this.userRoles = null
  }

  getUrl() {
    return this.url
  }

  setUrl(url) {
    this.url = url
  }

  getUrlVersion() {
    return this.urlVersion
  }

  setUrlVersion(urlVersion) {
    this.urlVersion = urlVersion
  }

  getToken() {
    return this.token
  }

  setToken(token) {
    this.token = token
  }

  getUserId() {
    return this.userId
  }

  setUserId(userId) {
    return (this.userId = userId)
  }

  getUserRoles() {
    return this.userRoles
  }
  setUserRoles(roles) {
    this.userRoles = roles
  }

  ping = async () => {
    return this.doFetch(
      `${this.getBaseRoute()}/system/ping?time=${Date.now()}`,
      { method: 'get' },
    )
  }

  getBaseRoute() {
    return `${this.url}${this.urlVersion}`
  }

  getUsersRoute() {
    return `${this.getBaseRoute()}/users`
  }

  getUserRoute() {
    return `${this.getBaseRoute()}/user`
  }

  getCamerasRoute() {
    return `${this.getBaseRoute()}/cameras`
  }

  getCameraRoute() {
    return `${this.getBaseRoute()}/camera`
  }

  getprovinceRoute() {
    return `${this.getBaseRoute()}/political/provinces/available`
  }

  getdistrictRoute(id) {
    return `${this.getBaseRoute()}/political/districts/available/?province=${id}`
  }
  getcommunesRoute(id) {
    return `${this.getBaseRoute()}/political/communes/available/?district=${id}`
  }
  getViolationsRoute() {
    return `${this.getBaseRoute()}/violations`
  }

  getViolationRoute(violationId) {
    return `${this.getViolationsRoute()}/${violationId}`
  }
  getSitemapsRoute() {
    return `${this.getBaseRoute()}/sitemap`
  }
  // getSitemapRoute() {
  //   return `${this.getSitemapsRoute()}/${sitemapId}`
  // }
  getOptions(options) {
    const newOptions = { ...options }
    let headers = { ...this.defaultHeaders }

    if (options.headers) {
      headers = { ...headers, ...options.headers }
    }

    if (this.token) {
      headers[HEADER_AUTH] = `${HEADER_BEARER} ${this.token}`
    }

    return { ...newOptions, headers }
  }

  login = async (username, password) => {
    const { data } = await this.doFetchWithResponse(
      `${this.getUserRoute()}/login`,
      {
        method: 'post',
        data: { username, password },
        headers: {},
      },
    )

    return data
  }

  loadMe = async (token) => {
    const { data } = await this.doFetchWithResponse(
      `${this.getUserRoute()}/me`,
      { method: 'get', headers: { [HEADER_AUTH]: token } },
    )

    return data
  }
  //test//
  sitemaps = async (political) => {
    let province_list = []
    if (political.province_list.length > 0) {
      province_list = political.province_list[0]
    }
    const { data } = await this.doFetchWithResponse(
      `${this.getCameraRoute()}/search`,
      {
        method: 'post',
        data: {
          commune: political.commune_list,
          district: political.district_list,
          group: political.groups,
          province: province_list,
          state_cam: null,
          string: '',
        },
      },
    )
    return data
  }
  //province//
  provinces = async () => {
    const { data } = await this.doFetchWithResponse(
      `${this.getprovinceRoute()}`,
      {
        method: 'get',
        data: {
          commune: [],
          district: [],
          group: [],
          provinces: null,
          state_cam: null,
          string: '',
        },
      },
    )
    return data
  }
  districts = async (id) => {
    const { data } = await this.doFetchWithResponse(
      `${this.getdistrictRoute(id)}`,
      {
        method: 'get',
        data: {
          commune: [],
          district: [],
          group: [],
          province: null,
          state_cam: null,
          string: '',
        },
      },
    )
    return data
  }
  communes = async (id) => {
    const { data } = await this.doFetchWithResponse(
      `${this.getcommunesRoute(id)}`,
      {
        method: 'get',
        data: {
          commune: [],
          district: [],
          group: [],
          province: null,
          state_cam: null,
          string: '',
        },
      },
    )
    return data
  }

  getViolations = async () => {
    const { data } = await this.doFetchWithResponse(
      `${this.getViolationsRoute()}`,
      {
        method: 'post',
        data: {
          camera: [],
          end_time: 'Mon May 18 2020 09:18:27 GMT+0700 (Indochina Time)',
          obj_type: '',
          page: 1,
          plate: '',
          start_time: null,
          status: '',
          vio_type: '',
        },
      },
    )

    return data
  }

  getViolationDetail = async (id) => {
    const { data } = await this.doFetchWithResponse(
      `${this.getViolationRoute(id)}`,
      {
        method: 'get',
        data: {},
      },
    )

    return data
  }
  doFetch = async (url, options) => {
    const { data } = await this.doFetchWithResponse(url, options)
  }
  //end test//
  /**
   * @param {string} url
   * @param {Object} options
   * @param {Object} options.headers
   * @param {string} options.method
   * @param {any} options.params
   * @param {any} options.data
   */
  doFetchWithResponse = async (url, options) => {
    try {
      const response = await axios({ url: url, ...this.getOptions(options) })
      const { data, headers } = response

      return { data, headers }
    } catch (error) {
      console.log(error)
      throw error.response?.data?.data
    }
  }
}
