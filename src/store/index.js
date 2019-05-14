import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const state = {
  domain: 'http://47.102.218.113',
  userInfo: { //保存用户信息
    nick: null,
    role: null,
  }
};


const mutations = {
  //更新用户信息
  updateUserInfo(state, newUserInfo) {
    state.userInfo = newUserInfo;
  }
};


Vue.prototype.setCookie = (c_name, value, expireDays) => {
  let expire = new Date();
  expire.setTime(expire.getTime() + expireDays);
  document.cookie = c_name + "=" + escape(value) + ((expireDays == null) ? "" : ";expires=" + new Date(expire).toUTCString());

};

//获取cookie、
function getCookie(name) {
  let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return (arr[2]);
  else
    return null;
}

Vue.prototype.getCookie = getCookie;

//删除cookie
Vue.prototype.delCookie = (name) => {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
};

export default new Vuex.Store({
  state,
  mutations,
});
