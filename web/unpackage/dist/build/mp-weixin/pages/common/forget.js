(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/forget"],{"0e28":function(e,t,n){},"1f9a":function(e,t,n){"use strict";n.r(t);var o=n("5cc6"),c=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=c.a},"25ab":function(e,t,n){"use strict";var o=n("0e28"),c=n.n(o);c.a},"2a82":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var o={iconfont:function(){return n.e("components/iconfont/iconfont").then(n.bind(null,"db8f"))}},c=function(){var e=this,t=e.$createElement;e._self._c},i=[]},"5cc6":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n("2f62");var o=c(n("0dd3"));function c(e){return e&&e.__esModule?e:{default:e}}var i,s,a=function(){n.e("components/iconfont/iconfont").then(function(){return resolve(n("db8f"))}.bind(null,n)).catch(n.oe)},u={components:{iconfont:a},onShow:function(){this.$initPageTitle()},onLoad:function(){i=this},onUnload:function(){clearInterval(s),this.second=0},data:function(){return{mobile:"",password:"",verify_code:"",second:0}},computed:{verify_text:function(){return 0==this.second?"获取验证码":this.second<10?"0"+this.second+"秒后重新获取":this.second+"秒后重新获取"}},methods:{getVerifyCode:function(){var e=this;this.second>0||o.default.checkMobile(this.mobile)&&(this.second=60,s=setInterval((function(){i.second--,0==i.second&&clearInterval(s)}),1e3),this.$app.request({url:this.$api.common.verify,data:{mobile:this.mobile,type:"normal"},method:"POST",dataType:"json",success:function(t){0!=t.code&&e.$alert(t.msg)}}))},updatePassword:function(){var t=this;o.default.checkMobile(this.mobile)&&o.default.checkNewPassword(this.password)&&o.default.checkVerifyCode(this.verify_code)&&(e.showLoading({title:"提交中…"}),this.$app.request({url:this.$api.user.forgot,data:{mobile:this.mobile,new_password:this.password,verify_code:this.verify_code},method:"POST",dataType:"json",success:function(n){console.log(n),0==n.code?(e.hideLoading(),t.$alert("密码重置成功"),setTimeout((function(){e.navigateTo({url:"/pages/common/login"})}),1e3)):t.$alert(n.msg)}}))}}};t.default=u}).call(this,n("543d")["default"])},c695:function(e,t,n){"use strict";n.r(t);var o=n("2a82"),c=n("1f9a");for(var i in c)"default"!==i&&function(e){n.d(t,e,(function(){return c[e]}))}(i);n("25ab");var s,a=n("f0c5"),u=Object(a["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);t["default"]=u.exports},cdb1:function(e,t,n){"use strict";(function(e){n("4ebb");o(n("66fd"));var t=o(n("c695"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["cdb1","common/runtime","common/vendor"]]]);