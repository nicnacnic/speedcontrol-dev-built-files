!function(t){function n(n){for(var r,u,a=n[0],l=n[1],c=n[2],f=0,d=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(s&&s(n);d.length;)d.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,a=1;a<e.length;a++){var l=e[a];0!==o[l]&&(r=!1)}r&&(i.splice(n--,1),t=u(u.s=e[0]))}return t}var r={},o={3:0},i=[];function u(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=t,u.c=r,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)u.d(e,r,function(n){return t[n]}.bind(null,r));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=n,a=a.slice();for(var c=0;c<a.length;c++)n(a[c]);var s=l;i.push([381,0]),e()}({111:function(t,n,e){"use strict";e.r(n);var r=e(112),o=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n.default=o.a},112:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=e(9),o=e(14),i=r.__importDefault(e(383)),u=r.__importDefault(e(384)),a=r.__importDefault(e(385)),l=r.__importDefault(e(386)),c=r.__importDefault(e(387)),s=r.__importDefault(e(388));let f=class extends o.Vue{constructor(){super(...arguments),this.currentComponent=null,this.alertData={},this.callbackFunc=null}open(t){this.dialog.open(),document.addEventListener("dialog-opened",()=>{this.currentComponent=(t=>{switch(t){case"ImportConfirm":return i.default;case"ReturnToStartConfirm":return u.default;case"RemoveAllRunsConfirm":return a.default;case"RemoveRunConfirm":return l.default;case"TwitchLogoutConfirm":return c.default;case"NoTwitchGame":return s.default;default:return}})(t.name)||null,this.callbackFunc=t.func||null,this.alertData=t.data?t.data:{}},{once:!0}),document.addEventListener("dialog-confirmed",this.confirm,{once:!0}),document.addEventListener("dialog-dismissed",this.dismiss,{once:!0})}close(t){this.callbackFunc&&this.callbackFunc(t),this.dialog._updateClosingReasonConfirmed(t),this.dialog.close(),this.currentComponent=null,this.alertData={},this.callbackFunc=null}confirm(){document.removeEventListener("dialog-dismissed",this.dismiss)}dismiss(){document.removeEventListener("dialog-confirmed",this.confirm)}mounted(){this.dialog=nodecg.getDialog("alert-dialog"),window.openDialog=t=>this.open(t);this.dialog.getElementsByTagName("paper-dialog-scrollable")[0].style.marginBottom="12px",nodecg.listenFor("triggerAlert",t=>{this.open({name:t})})}};f=r.__decorate([o.Component],f),n.default=f},113:function(t,n,e){"use strict";e.r(n);var r=e(114),o=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n.default=o.a},114:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=e(9),o=e(14);let i=class extends o.Vue{};i=r.__decorate([o.Component],i),n.default=i},115:function(t,n){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"alertText":"Importing will remove all currently added runs, continue?","alertText2":"The currently active run will not be modified."},"ja":{"alertText":"インポートを行うと現在追加されている走者情報が全て削除されますが、続行しますか？","alertText2":"現在実行中の走者情報は変更されません。"}}'),delete t.options._Ctor}},116:function(t,n,e){"use strict";e.r(n);var r=e(117),o=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n.default=o.a},117:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=e(9),o=e(14);let i=class extends o.Vue{};i=r.__decorate([o.Component],i),n.default=i},118:function(t,n){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"alertText":"Are you sure you want to return to the start?"},"ja":{"alertText":"走者情報を最初に戻してもよろしいですか？"}}'),delete t.options._Ctor}},119:function(t,n,e){"use strict";e.r(n);var r=e(120),o=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n.default=o.a},120:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=e(9),o=e(14);let i=class extends o.Vue{};i=r.__decorate([o.Component],i),n.default=i},121:function(t,n){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"alertText":"Are you sure you want to remove all runs?","alertText2":"This will also remove the currently active run."},"ja":{"alertText":"全ての走者情報を削除してもよろしいですか？","alertText2":"これは現在実行中の走者情報も削除します。"}}'),delete t.options._Ctor}},122:function(t,n,e){"use strict";e.r(n);var r=e(123),o=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n.default=o.a},123:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=e(9),o=e(14);let i=class extends o.Vue{get runStr(){if(this.alertData.runData&&(this.alertData.runData.game||this.alertData.runData.category)){return[this.alertData.runData.game||"?",this.alertData.runData.category].filter(Boolean).join(" - ")}}};r.__decorate([o.Prop({type:Object,required:!0})],i.prototype,"alertData",void 0),i=r.__decorate([o.Component],i),n.default=i},124:function(t,n){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"alertText":"Are you sure you want to delete this run?"},"ja":{"alertText":"この走者情報を削除してもよろしいですか？"}}'),delete t.options._Ctor}},125:function(t,n,e){"use strict";e.r(n);var r=e(126),o=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n.default=o.a},126:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=e(9),o=e(14);let i=class extends o.Vue{};i=r.__decorate([o.Component],i),n.default=i},127:function(t,n){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"alertText":"Are you sure you want to logout from the Twitch integration?"},"ja":{"alertText":"Twitch連携をログアウトしてもよろしいですか？"}}'),delete t.options._Ctor}},128:function(t,n,e){"use strict";e.r(n);var r=e(129),o=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n.default=o.a},129:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=e(9),o=e(14);let i=class extends o.Vue{};i=r.__decorate([o.Component],i),n.default=i},130:function(t,n){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"alertText":"The Twitch game directory could not be set correctly, it has been set to default. Change this manually if possible."},"ja":{"alertText":"Twitchゲームカテゴリーを正しく設定することが出来なかった為、デフォルト設定に変更しました。可能であれば手動で変更してください。"}}'),delete t.options._Ctor}},223:function(t,n,e){"use strict";var r=e(115),o=e.n(r);n.default=o.a},224:function(t,n,e){"use strict";var r=e(118),o=e.n(r);n.default=o.a},225:function(t,n,e){"use strict";var r=e(121),o=e.n(r);n.default=o.a},226:function(t,n,e){"use strict";var r=e(124),o=e.n(r);n.default=o.a},227:function(t,n,e){"use strict";var r=e(127),o=e.n(r);n.default=o.a},228:function(t,n,e){"use strict";var r=e(130),o=e.n(r);n.default=o.a},246:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e(t.currentComponent,{tag:"component",attrs:{"alert-data":t.alertData},on:{confirm:function(n){return t.close(!0)},dismiss:function(n){return t.close(!1)}}})],1)},o=[]},255:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[t._v("\n    "+t._s(t.$t("alertText"))+"\n    "),e("br"),e("br"),t._v(t._s(t.$t("alertText2"))+"\n  ")]),t._v(" "),e("br"),t._v(" "),e("div",{style:{float:"right"}},[e("v-btn",{on:{click:function(n){return t.$emit("confirm")}}},[t._v("\n      "+t._s(t.$t("ok"))+"\n    ")]),t._v(" "),e("v-btn",{on:{click:function(n){return t.$emit("dismiss")}}},[t._v("\n      "+t._s(t.$t("cancel"))+"\n    ")])],1)])},o=[]},256:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[t._v(t._s(t.$t("alertText")))]),t._v(" "),e("br"),t._v(" "),e("div",{style:{float:"right"}},[e("v-btn",{on:{click:function(n){return t.$emit("confirm")}}},[t._v("\n      "+t._s(t.$t("ok"))+"\n    ")]),t._v(" "),e("v-btn",{on:{click:function(n){return t.$emit("dismiss")}}},[t._v("\n      "+t._s(t.$t("cancel"))+"\n    ")])],1)])},o=[]},257:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[t._v("\n    "+t._s(t.$t("alertText"))+"\n    "),e("br"),e("br"),t._v(t._s(t.$t("alertText2"))+"\n  ")]),t._v(" "),e("br"),t._v(" "),e("div",{style:{float:"right"}},[e("v-btn",{on:{click:function(n){return t.$emit("confirm")}}},[t._v("\n      "+t._s(t.$t("ok"))+"\n    ")]),t._v(" "),e("v-btn",{on:{click:function(n){return t.$emit("dismiss")}}},[t._v("\n      "+t._s(t.$t("cancel"))+"\n    ")])],1)])},o=[]},258:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[t._v("\n    "+t._s(t.$t("alertText"))+"\n    "),t.runStr?e("div",{style:{"margin-top":"10px","font-style":"italic"}},[t._v("\n      "+t._s(t.runStr)+"\n    ")]):t._e()]),t._v(" "),e("br"),t._v(" "),e("div",{style:{float:"right"}},[e("v-btn",{on:{click:function(n){return t.$emit("confirm")}}},[t._v("\n      "+t._s(t.$t("ok"))+"\n    ")]),t._v(" "),e("v-btn",{on:{click:function(n){return t.$emit("dismiss")}}},[t._v("\n      "+t._s(t.$t("cancel"))+"\n    ")])],1)])},o=[]},259:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[t._v(t._s(t.$t("alertText")))]),t._v(" "),e("br"),t._v(" "),e("div",{style:{float:"right"}},[e("v-btn",{on:{click:function(n){return t.$emit("confirm")}}},[t._v("\n      "+t._s(t.$t("ok"))+"\n    ")]),t._v(" "),e("v-btn",{on:{click:function(n){return t.$emit("dismiss")}}},[t._v("\n      "+t._s(t.$t("cancel"))+"\n    ")])],1)])},o=[]},260:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[t._v(t._s(t.$t("alertText")))]),t._v(" "),e("br"),t._v(" "),e("div",{style:{float:"right"}},[e("v-btn",{on:{click:function(n){return t.$emit("dismiss")}}},[t._v("\n      "+t._s(t.$t("ok"))+"\n    ")])],1)])},o=[]},381:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=e(9),o=r.__importDefault(e(2)),i=r.__importDefault(e(44)),u=r.__importDefault(e(45)),a=r.__importDefault(e(382));new o.default({vuetify:u.default,i18n:i.default,el:"#App",render:t=>t(a.default)})},382:function(t,n,e){"use strict";e.r(n);var r=e(246),o=e(111);for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);var u=e(7),a=e(8),l=e.n(a),c=e(41),s=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);n.default=s.exports,l()(s,{VApp:c.a})},383:function(t,n,e){"use strict";e.r(n);var r=e(255),o=e(113);for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);var u=e(7),a=e(223),l=e(8),c=e.n(l),s=e(21),f=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);"function"==typeof a.default&&Object(a.default)(f),n.default=f.exports,c()(f,{VBtn:s.a})},384:function(t,n,e){"use strict";e.r(n);var r=e(256),o=e(116);for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);var u=e(7),a=e(224),l=e(8),c=e.n(l),s=e(21),f=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);"function"==typeof a.default&&Object(a.default)(f),n.default=f.exports,c()(f,{VBtn:s.a})},385:function(t,n,e){"use strict";e.r(n);var r=e(257),o=e(119);for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);var u=e(7),a=e(225),l=e(8),c=e.n(l),s=e(21),f=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);"function"==typeof a.default&&Object(a.default)(f),n.default=f.exports,c()(f,{VBtn:s.a})},386:function(t,n,e){"use strict";e.r(n);var r=e(258),o=e(122);for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);var u=e(7),a=e(226),l=e(8),c=e.n(l),s=e(21),f=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);"function"==typeof a.default&&Object(a.default)(f),n.default=f.exports,c()(f,{VBtn:s.a})},387:function(t,n,e){"use strict";e.r(n);var r=e(259),o=e(125);for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);var u=e(7),a=e(227),l=e(8),c=e.n(l),s=e(21),f=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);"function"==typeof a.default&&Object(a.default)(f),n.default=f.exports,c()(f,{VBtn:s.a})},388:function(t,n,e){"use strict";e.r(n);var r=e(260),o=e(128);for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);var u=e(7),a=e(228),l=e(8),c=e.n(l),s=e(21),f=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);"function"==typeof a.default&&Object(a.default)(f),n.default=f.exports,c()(f,{VBtn:s.a})}});