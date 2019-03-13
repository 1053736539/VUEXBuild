import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import action from './action'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      id: 0, //用户ID
      bindMobile: false,//绑定手机状态
      mobile: null,//手机号码
      unid: null,//公众平台UNID
      token: null,//登录凭证
      expire: 7200,//有效时间
    },
    appInfo: {
      inited: false,
      authToken: '',//登录凭证
      deviceName: '',//设备名称
      deviceId: '',//设备唯一标识
      channelId: '',//百度云推送id
      versionName: ''//版本名称
    },
  },
  mutations,
  getters,
  action,
})

export default store
