(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/index"],{"3e6d":function(n,e,t){"use strict";(function(n){t("4ebb");o(t("66fd"));var e=o(t("c0f7"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},5745:function(n,e,t){"use strict";t.r(e);var o=t("b7ab"),c=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=c.a},a1a0:function(n,e,t){},b521:function(n,e,t){"use strict";var o=t("a1a0"),c=t.n(o);c.a},b7ab:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){t.e("components/iconfont/iconfont").then(function(){return resolve(t("db8f"))}.bind(null,t)).catch(t.oe)},c=function(){t.e("components/loading/pageLoading").then(function(){return resolve(t("471e"))}.bind(null,t)).catch(t.oe)},i={components:{iconfont:o,pageLoading:c},data:function(){return{user:{},loginText:"登录",showPageLoading:!0}},onShow:function(){this.user={},console.log("onShow2"),this.$initPageTitle(),this.loginText="微信登录",this.getUserInfo()},onLoad:function(n){},onPullDownRefresh:function(){n.showLoading({title:"刷新中"}),this.getUserInfo()},methods:{getUserInfo:function(){var e=this;this.$app.request({url:this.$api.user.index,data:{},method:"POST",dataType:"json",success:function(n){console.log(n),0==n.code?(e.showPageLoading=!1,e.user=n.data):e.$alert(n.msg)},complete:function(e){n.stopPullDownRefresh(),n.hideLoading()}})},login:function(){this.$app.login()},logout:function(){var e=this;n.showModal({title:"提示",content:"退出登录？",confirmText:"是",cancelText:"否",success:function(t){t.confirm&&e.$app.request({url:e.$api.user.logout,method:"POST",success:function(t){0==t.code?(n.removeStorageSync("isLogin"),n.removeStorageSync("accessToken"),n.removeStorageSync("currentUser"),n.removeStorageSync("platform"),e.$alert("退出登录成功","success","/pages/article/index","switchTab")):e.$alert(t.msg,"warning")},complete:function(){n.hideLoading()}})}})}}};e.default=i}).call(this,t("543d")["default"])},bb68:function(n,e,t){"use strict";t.d(e,"b",(function(){return c})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return o}));var o={iconfont:function(){return t.e("components/iconfont/iconfont").then(t.bind(null,"db8f"))}},c=function(){var n=this,e=n.$createElement;n._self._c},i=[]},c0f7:function(n,e,t){"use strict";t.r(e);var o=t("bb68"),c=t("5745");for(var i in c)"default"!==i&&function(n){t.d(e,n,(function(){return c[n]}))}(i);t("b521");var u,a=t("f0c5"),r=Object(a["a"])(c["default"],o["b"],o["c"],!1,null,"cc69a33e",null,!1,o["a"],u);e["default"]=r.exports}},[["3e6d","common/runtime","common/vendor"]]]);