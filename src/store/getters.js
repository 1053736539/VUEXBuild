const getters = {
  id: state => state.user.id,
  bindMobile: state => state.user.bindMobile,
  mobile: state => state.user.mobile,
  unid: state => state.user.unid,
  token: state => state.user.token,
  inited: state => state.appInfo.inited,
  source: state => state.appInfo.source,
  deviceId: state => state.appInfo.deviceId,
  channelId: state => state.appInfo.channelId,
  deviceName: state => state.appInfo.deviceName
}
export default getters
