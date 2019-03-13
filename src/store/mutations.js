import {setToken, removeToken} from '@/utils/auth'
//同步处理state里的数据
const mutations = {
  //登录成功
  loginSuccess: function (state, loginInfo) {
    state.user.id = loginInfo.memberid;
    state.user.bindMobile = loginInfo.bindMobile;
    state.user.mobile = loginInfo.mobile;
    state.user.unid = loginInfo.unid;
    state.user.token = loginInfo.token;
    state.user.expire = loginInfo.expire;
    state.appInfo.authToken = loginInfo.token;
    setToken(loginInfo.token, loginInfo.expire);
  },
  //APP信息
  appInfoSuccess: function (state, appInfo) {
    state.appInfo.inited = appInfo.inited;
    state.appInfo.source = appInfo.source;
    state.appInfo.authToken = appInfo.authToken;
    state.appInfo.deviceId = appInfo.deviceId;
    state.appInfo.channelId = appInfo.channelId;
    state.appInfo.deviceName = appInfo.deviceName;
  },
  //退出
  loginOut: function (state) {
    state.user.id = 0;
    state.user.mobile = null;
    state.user.unid = null;
    state.user.token = null;
    state.user.expire = null;
    state.appInfo.inited = null;
    state.appInfo.source = null;
    state.appInfo.authToken = null;
    state.appInfo.deviceId = null;
    state.appInfo.channelId = null;
    state.appInfo.deviceName = null;
    removeToken();
  }
}
export default mutations
