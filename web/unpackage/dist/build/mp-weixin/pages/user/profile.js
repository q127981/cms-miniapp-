(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/profile"],{"062b":function(e,t,o){"use strict";var n=o("3e33"),i=o.n(n);i.a},"10e9":function(e,t,o){"use strict";o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return n}));var n={imageCropper:function(){return o.e("components/imageCropper/imageCropper").then(o.bind(null,"25bd"))},iconfont:function(){return o.e("components/iconfont/iconfont").then(o.bind(null,"db8f"))}},i=function(){var e=this,t=e.$createElement;e._self._c},a=[]},"14f0":function(e,t,o){"use strict";(function(e){o("4ebb");n(o("66fd"));var t=n(o("9268"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},"3e33":function(e,t,o){},"667e":function(e,t,o){"use strict";o.r(t);var n=o("de6d"),i=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},9268:function(e,t,o){"use strict";o.r(t);var n=o("10e9"),i=o("667e");for(var a in i)"default"!==a&&function(e){o.d(t,e,(function(){return i[e]}))}(a);o("062b");var r,s=o("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"7a459b39",null,!1,n["a"],r);t["default"]=c.exports},de6d:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(o("0315"));var n=i(o("0dd3"));function i(e){return e&&e.__esModule?e:{default:e}}var a,r=function(){o.e("components/loading/pageLoading").then(function(){return resolve(o("471e"))}.bind(null,o)).catch(o.oe)},s=function(){o.e("components/iconfont/iconfont").then(function(){return resolve(o("db8f"))}.bind(null,o)).catch(o.oe)},c=function(){o.e("components/image/cropper").then(function(){return resolve(o("15f2"))}.bind(null,o)).catch(o.oe)},u={components:{pageLoading:r,iconfont:s,imageCropper:c},data:function(){return{mobile:"",second:0,tempFilePath:"",cropFilePath:"",user:{},showPageLoading:!0}},onShow:function(){this.$initPageTitle();var t=e.getStorageSync("source");"login"==t&&(e.removeStorageSync("source"),e.switchTab({url:"/pages/user/index"}))},onLoad:function(e){this.loadData()},computed:{verify_text:function(){return 0==this.second?"获取验证码":this.second<10?"0"+this.second+"秒后重新获取":this.second+"秒后重新获取"}},onPullDownRefresh:function(){e.showLoading({title:"刷新中"}),this.loadData()},methods:{loadData:function(){this.getData()},getData:function(){var t=this;this.$app.request({url:this.$api.user.userInfo,data:{},method:"POST",dataType:"json",success:function(e){0==e.code?(console.log(t.user),t.user=e.data,t.mobile=t.user.mobile,t.cropFilePath=t.user.avatar_url,t.showPageLoading=!1):t.$alert(e.msg)},complete:function(t){e.stopPullDownRefresh(),e.hideLoading()}})},upload:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){t.tempFilePath=e.tempFilePaths.shift()}})},confirm:function(t){var o=this;this.tempFilePath="",this.cropFilePath=t.path,this.$loading("图片上传…"),this.$app.uploadFile({url:this.$api.user.upload,filePath:t.path,name:"file",formData:{},success:function(t){console.log(t),console.log(t.code),0==t.code&&(o.user.avatar_id=t.data.id,o.user.avatar_url=t.data.url,o.cropFilePath=t.data.url),e.hideLoading()}})},cancel:function(){this.tempFilePath=""},getVerifyCode:function(){var e=this;this.second>0||n.default.checkMobile(this.user.mobile)&&(this.second=60,a=setInterval((function(){e.second--,0==e.second&&clearInterval(a)}),1e3),this.$app.request({url:this.$api.user.verifyCode,data:{mobile:mobile,type:"userSetting"},method:"POST",dataType:"json",success:function(t){0!=t.code&&e.$alert(t.msg,"warning")}}))},uploadPhoto:function(){var t=this;e.chooseImage({success:function(o){var n=o.tempFilePaths;e.showLoading({title:"上传中…"}),console.log(n[0]),t.$app.uploadFile({url:t.$api.user.upload,filePath:n[0],name:"file",formData:{},success:function(o){console.log(o),console.log(o.code),0==o.code&&(t.user.avatar_id=o.data.id,t.user.avatar_url=o.data.url),e.hideLoading()}})}})},submit:function(){var t=this;if(!this.mobile&&!this.user.verify_code)return this.$alert("请输入短信验证码","warning"),!1;e.showLoading({title:"提交中…"});var o={mobile:this.mobile};this.user.avatar_url&&(o.avatar_url=this.user.avatar_url),this.user.verify_code&&(o.verify_code=this.user.verify_code),this.$app.request({url:this.$api.user.setting,data:o,method:"POST",dataType:"json",success:function(e){0==e.code?t.$alert("保存成功","success"):t.$alert(e.msg,"warning")},complete:function(t){e.hideLoading()}})},logout:function(){var t=this;e.showModal({title:"提示",content:"确认退出登录？",confirmText:"是",cancelText:"否",success:function(o){o.confirm&&t.$app.request({url:t.$api.user.logout,method:"POST",success:function(o){0==o.code?(e.removeStorageSync("isLogin"),e.removeStorageSync("accessToken"),e.removeStorageSync("currentUser"),e.removeStorageSync("platform"),e.setStorageSync("source","logout"),t.$alert("退出登录成功","success","/pages/user/index","switchTab")):t.$alert(o.msg,"warning")},complete:function(){e.hideLoading()}})}})}}};t.default=u}).call(this,o("543d")["default"])}},[["14f0","common/runtime","common/vendor"]]]);