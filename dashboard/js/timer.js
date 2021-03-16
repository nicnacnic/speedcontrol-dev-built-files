!function(t){function e(e){for(var i,a,s=e[0],u=e[1],d=e[2],f=0,l=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);for(c&&c(e);l.length;)l.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={10:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var c=u;r.push([416,0,1]),n()}({168:function(t,e,n){"use strict";n.r(e);var i=n(169),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},169:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=n(9),o=n(14),r=n(19),a=n(40),s=i.__importDefault(n(418)),u=i.__importDefault(n(420)),d=i.__importDefault(n(421)),c=i.__importDefault(n(277)),f=i.__importDefault(n(278)),l=i.__importDefault(n(422));let p=class extends o.Vue{constructor(){super(...arguments),this.tempEnable=!1}onDisableChangesChange(t){t&&(this.tempEnable=!1)}onActiveRunChange(){this.tempEnable=!1}get teams(){var t;return(null===(t=this.activeRun)||void 0===t?void 0:t.teams)||[]}mounted(){var t;(null===(t=window.frameElement)||void 0===t?void 0:t.parentElement)&&window.frameElement.parentElement.setAttribute("display-title",this.$t("panelTitle"))}};i.__decorate([r.State("runDataActiveRun")],p.prototype,"activeRun",void 0),i.__decorate([a.State2Way("updateDisabledToggle","timerChangesDisabled")],p.prototype,"disableChanges",void 0),i.__decorate([o.Watch("disableChanges")],p.prototype,"onDisableChangesChange",null),i.__decorate([o.Watch("activeRun")],p.prototype,"onActiveRunChange",null),p=i.__decorate([o.Component({components:{TimerTime:s.default,StartButton:u.default,ResetButton:d.default,StopButton:c.default,UndoButton:f.default,Team:l.default}})],p),e.default=p},170:function(t,e,n){"use strict";n.r(e);var i=n(171),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},171:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=n(9),o=n(14),r=n(19);let a=class extends o.Vue{constructor(){super(...arguments),this.time="00:00:00"}get serverTime(){return this.timer.time}get bgColour(){switch(this.timer.state){case"stopped":case"paused":default:return"#455A64";case"running":return"";case"finished":return"#388E3C"}}get disableEditing(){return["running","finished"].includes(this.timer.state)}onServerTimeChange(t){this.time=t}finishEdit(t){return i.__awaiter(this,void 0,void 0,(function*(){if(this.time.match(/^(\d+:)?(?:\d{1}|\d{2}):\d{2}$/)){try{yield nodecg.sendMessage("timerEdit",this.time)}catch(t){}t.target.blur()}}))}abandonEdit(){this.time=this.serverTime}};i.__decorate([r.State],a.prototype,"timer",void 0),i.__decorate([o.Watch("serverTime",{immediate:!0})],a.prototype,"onServerTimeChange",null),a=i.__decorate([o.Component],a),e.default=a},172:function(t,e,n){},173:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"editTip":"Click to edit, Enter to save"},"ja":{"editTip":"クリックすると編集が行え、Enterすると保存します"}}'),delete t.options._Ctor}},174:function(t,e,n){"use strict";n.r(e);var i=n(175),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},175:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=n(9),o=n(14),r=n(19);let a=class extends o.Vue{get state(){return this.timer.state}button(){return i.__awaiter(this,void 0,void 0,(function*(){try{"stopped"===this.state||"paused"===this.state?yield nodecg.sendMessage("timerStart"):"running"===this.state&&(yield nodecg.sendMessage("timerPause"))}catch(t){}}))}};i.__decorate([r.State],a.prototype,"timer",void 0),a=i.__decorate([o.Component],a),e.default=a},176:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"pause":"Pause","resume":"Resume","play":"Play"},"ja":{"pause":"ポーズ","resume":"再開","play":"開始"}}'),delete t.options._Ctor}},177:function(t,e,n){"use strict";n.r(e);var i=n(178),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},178:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=n(9),o=n(14),r=n(19);let a=class extends o.Vue{get state(){return this.timer.state}button(){return i.__awaiter(this,void 0,void 0,(function*(){try{yield nodecg.sendMessage("timerReset")}catch(t){}}))}};i.__decorate([r.State],a.prototype,"timer",void 0),a=i.__decorate([o.Component],a),e.default=a},179:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"reset":"Reset"},"ja":{"reset":"リセット"}}'),delete t.options._Ctor}},180:function(t,e,n){"use strict";n.r(e);var i=n(181),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},181:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=n(9),o=n(14),r=n(19);let a=class extends o.Vue{get isDisabled(){var t;return(null===(t=this.info)||void 0===t?void 0:t.id)&&!!this.timer.teamFinishTimes[this.info.id]||!["running","paused"].includes(this.timer.state)}button(){var t;return i.__awaiter(this,void 0,void 0,(function*(){try{yield nodecg.sendMessage("timerStop",{id:null===(t=this.info)||void 0===t?void 0:t.id,forfeit:this.forfeit})}catch(t){}}))}};i.__decorate([o.Prop({type:Object})],a.prototype,"info",void 0),i.__decorate([o.Prop(Boolean)],a.prototype,"forfeit",void 0),i.__decorate([r.State],a.prototype,"timer",void 0),a=i.__decorate([o.Component],a),e.default=a},182:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"stop":"Stop"},"ja":{"stop":"ストップ"}}'),delete t.options._Ctor}},183:function(t,e,n){"use strict";n.r(e);var i=n(184),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},184:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=n(9),o=n(14),r=n(19);let a=class extends o.Vue{get isDisabled(){var t,e;return!(null===(t=this.info)||void 0===t?void 0:t.id)&&"finished"!==this.timer.state||!!(null===(e=this.info)||void 0===e?void 0:e.id)&&(!this.timer.teamFinishTimes[this.info.id]||!["running","finished"].includes(this.timer.state))}button(){var t;return i.__awaiter(this,void 0,void 0,(function*(){try{yield nodecg.sendMessage("timerUndo",null===(t=this.info)||void 0===t?void 0:t.id)}catch(t){}}))}};i.__decorate([o.Prop({type:Object})],a.prototype,"info",void 0),i.__decorate([r.State],a.prototype,"timer",void 0),a=i.__decorate([o.Component],a),e.default=a},185:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"undo":"Undo"},"ja":{"undo":"元に戻す"}}'),delete t.options._Ctor}},186:function(t,e,n){"use strict";n.r(e);var i=n(187),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=o.a},187:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=n(9),o=n(14),r=n(19),a=i.__importDefault(n(277)),s=i.__importDefault(n(278));let u=class extends o.Vue{get state(){if(this.timer.teamFinishTimes[this.info.id])return this.timer.teamFinishTimes[this.info.id].state}get finishTime(){if(this.timer.teamFinishTimes[this.info.id])return this.timer.teamFinishTimes[this.info.id].time}button(){return i.__awaiter(this,void 0,void 0,(function*(){try{yield nodecg.sendMessage("timerReset")}catch(t){}}))}};i.__decorate([o.Prop(Object)],u.prototype,"info",void 0),i.__decorate([o.Prop({type:Number,default:0})],u.prototype,"index",void 0),i.__decorate([r.State],u.prototype,"timer",void 0),u=i.__decorate([o.Component({components:{StopButton:a.default,UndoButton:s.default}})],u),e.default=u},188:function(t,e,n){},189:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e),n.d(e,"State",(function(){return r})),n.d(e,"Getter",(function(){return a})),n.d(e,"Action",(function(){return s})),n.d(e,"Mutation",(function(){return u})),n.d(e,"namespace",(function(){return d}));var i=n(13),o=n(10),r=c("computed",o.mapState),a=c("computed",o.mapGetters),s=c("methods",o.mapActions),u=c("methods",o.mapMutations);function d(t,e){function n(e){return function(n,i){if("string"==typeof i){var o=i,r=n;return e(o,{namespace:t})(r,o)}var a=n,s=function(t,e){var n={};return[t,e].forEach((function(t){Object.keys(t).forEach((function(e){n[e]=t[e]}))})),n}(i||{},{namespace:t});return e(a,s)}}return e?(console.warn("[vuex-class] passing the 2nd argument to `namespace` function is deprecated. pass only namespace string instead."),n(e)):{State:n(r),Getter:n(a),Mutation:n(u),Action:n(s)}}function c(t,e){function n(n,o){return Object(i.createDecorator)((function(i,r){i[t]||(i[t]={});var a,s=((a={})[r]=n,a);i[t][r]=void 0!==o?e(o,s)[r]:e(s)[r]}))}return function(t,e){if("string"==typeof e){var i=e,o=t;return n(i,void 0)(o,i)}return n(t,function(t){var e=t&&t.namespace;if("string"!=typeof e)return;if("/"!==e[e.length-1])return e+"/";return e}(e))}}},190:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"panelTitle":"Timer","enableChanges":"Enable Changes","disableChanges":"Disable Changes","toggleChangesNote":"Only use this button if needed."},"ja":{"panelTitle":"タイマー","enableChanges":"タイマーの有効化","disableChanges":"タイマーの無効化","toggleChangesNote":"このボタンは必要な際に限り利用してください。"}}'),delete t.options._Ctor}},238:function(t,e,n){"use strict";var i=n(173),o=n.n(i);e.default=o.a},239:function(t,e,n){"use strict";var i=n(176),o=n.n(i);e.default=o.a},240:function(t,e,n){"use strict";var i=n(179),o=n.n(i);e.default=o.a},241:function(t,e,n){"use strict";var i=n(182),o=n.n(i);e.default=o.a},242:function(t,e,n){"use strict";var i=n(185),o=n.n(i);e.default=o.a},243:function(t,e,n){"use strict";var i=n(190),o=n.n(i);e.default=o.a},253:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{class:{Disabled:t.disableChanges}},[n("timer-time"),t._v(" "),n("div",{staticClass:"d-flex justify-center",style:{"padding-top":"10px"},attrs:{id:"Controls"}},[n("start-button"),t._v(" "),n("reset-button"),t._v(" "),t.teams.length<=1?[n("stop-button",{attrs:{info:t.teams[0]}}),t._v(" "),n("stop-button",{attrs:{info:t.teams[0],forfeit:""}}),t._v(" "),n("undo-button",{attrs:{info:t.teams[0]}})]:t._e()],2),t._v(" "),t.teams.length>1?n("div",{style:{"padding-top":"10px"}},t._l(t.teams,(function(t,e){return n("team",{key:t.id,attrs:{info:t,index:e}})})),1):t._e()],1),t._v(" "),t.disableChanges||t.tempEnable?n("div",{style:{"padding-top":"10px"}},[t.disableChanges?n("v-btn",{attrs:{block:""},on:{click:function(e){t.disableChanges=!1,t.tempEnable=!0}}},[t._v("\n      "+t._s(t.$t("enableChanges"))+"\n    ")]):t._e(),t._v(" "),t.tempEnable?n("v-btn",{attrs:{block:""},on:{click:function(e){t.disableChanges=!0}}},[t._v("\n      "+t._s(t.$t("disableChanges"))+"\n    ")]):t._e(),t._v(" "),n("div",{style:{"margin-top":"5px"}},[n("em",[t._v(t._s(t.$t("toggleChangesNote")))])])],1):t._e()])},o=[]},266:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tooltip",{attrs:{bottom:"",disabled:t.disableEditing},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("span",t._g({},i),[n("v-text-field",{staticClass:"TimerInput",attrs:{solo:"","single-line":"","hide-details":"","background-color":t.bgColour,readonly:t.disableEditing},on:{blur:t.abandonEdit,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.finishEdit(e)}},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("editTip")))])])],1)},o=[]},267:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tooltip",{attrs:{top:"",disabled:"finished"===t.state},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("span",t._g({},i),[n("v-btn",{attrs:{disabled:"finished"===t.state},on:{click:t.button}},["running"===t.state?n("v-icon",[t._v("\n            mdi-pause\n          ")]):n("v-icon",[t._v("\n            mdi-play\n          ")])],1)],1)]}}])},[t._v(" "),"running"===t.state?n("span",[t._v(t._s(t.$t("pause")))]):"paused"===t.state?n("span",[t._v(t._s(t.$t("resume")))]):n("span",[t._v(t._s(t.$t("play")))])])],1)},o=[]},268:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tooltip",{attrs:{top:"",disabled:"stopped"===t.state},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("span",t._g({},i),[n("v-btn",{attrs:{disabled:"stopped"===t.state},on:{click:t.button}},[n("v-icon",[t._v("mdi-rewind")])],1)],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("reset")))])])],1)},o=[]},269:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tooltip",{attrs:{top:"",disabled:t.isDisabled},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("span",t._g({},i),[n("v-btn",{attrs:{disabled:t.isDisabled},on:{click:t.button}},[t.forfeit?n("v-icon",[t._v("mdi-close")]):n("v-icon",[t._v("mdi-check")])],1)],1)]}}])},[t._v(" "),t.forfeit?n("span",[t._v(t._s(t.$t("forfeit")))]):n("span",[t._v(t._s(t.$t("stop")))])])],1)},o=[]},270:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tooltip",{attrs:{top:"",disabled:t.isDisabled},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("span",t._g({},i),[n("v-btn",{attrs:{disabled:t.isDisabled},on:{click:t.button}},[n("v-icon",[t._v("mdi-undo")])],1)],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("undo")))])])],1)},o=[]},271:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Team d-flex align-center",style:{padding:"2px 0"}},[n("stop-button",{attrs:{info:t.info}}),t._v(" "),n("stop-button",{attrs:{info:t.info,forfeit:""}}),t._v(" "),n("undo-button",{attrs:{info:t.info}}),t._v(" "),n("div",{staticClass:"TeamName"},[t.info.name?n("span",[t._v(t._s(t.info.name))]):1===t.info.players.length?n("span",[t._v(t._s(t.info.players[0].name))]):n("span",t._l(t.info.players,(function(e,i){return n("span",{key:e.id},[t._v("\n        "+t._s(e.name)),i+1<t.info.players.length?n("span",[t._v(",")]):t._e()])})),0),t._v(" "),t.finishTime&&"completed"===t.state?n("span",[t._v("\n      ["+t._s(t.finishTime)+"]\n    ")]):t.finishTime&&"forfeit"===t.state?n("span",[t._v("\n      ["+t._s(t.$t("forfeit"))+"]\n    ")]):t._e()])],1)},o=[]},277:function(t,e,n){"use strict";n.r(e);var i=n(269),o=n(180);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var a=n(7),s=n(241),u=n(8),d=n.n(u),c=n(21),f=n(26),l=n(34),p=Object(a.a)(o.default,i.a,i.b,!1,null,null,null);"function"==typeof s.default&&Object(s.default)(p),e.default=p.exports,d()(p,{VBtn:c.a,VIcon:f.a,VTooltip:l.a})},278:function(t,e,n){"use strict";n.r(e);var i=n(270),o=n(183);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var a=n(7),s=n(242),u=n(8),d=n.n(u),c=n(21),f=n(26),l=n(34),p=Object(a.a)(o.default,i.a,i.b,!1,null,null,null);"function"==typeof s.default&&Object(s.default)(p),e.default=p.exports,d()(p,{VBtn:c.a,VIcon:f.a,VTooltip:l.a})},40:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=n(13);e.State2Way=function(t,e){return i.createDecorator((n,i)=>{n.computed||(n.computed={}),n.computed[i]={get(){return"string"==typeof e?e?(t=e,n=this.$store.state,t.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(t,e){return t[e]}),n)):this.$store.state[i]:e?e(this.$store.state):void 0;var t,n},set(e){this.$store.commit(t,e)}}})}},416:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=n(9),o=i.__importDefault(n(2)),r=i.__importDefault(n(44)),a=i.__importDefault(n(45)),s=i.__importDefault(n(417));i.__importDefault(n(425)).default().then(t=>{new o.default({vuetify:a.default,i18n:r.default,store:t,el:"#App",render:t=>t(s.default)})})},417:function(t,e,n){"use strict";n.r(e);var i=n(253),o=n(168);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n(424);var a=n(7),s=n(243),u=n(8),d=n.n(u),c=n(41),f=n(21),l=Object(a.a)(o.default,i.a,i.b,!1,null,"70a7f1d7",null);"function"==typeof s.default&&Object(s.default)(l),e.default=l.exports,d()(l,{VApp:c.a,VBtn:f.a})},418:function(t,e,n){"use strict";n.r(e);var i=n(266),o=n(170);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n(419);var a=n(7),s=n(238),u=n(8),d=n.n(u),c=n(20),f=n(34),l=Object(a.a)(o.default,i.a,i.b,!1,null,"b773eb2a",null);"function"==typeof s.default&&Object(s.default)(l),e.default=l.exports,d()(l,{VTextField:c.a,VTooltip:f.a})},419:function(t,e,n){"use strict";var i=n(172);n.n(i).a},420:function(t,e,n){"use strict";n.r(e);var i=n(267),o=n(174);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var a=n(7),s=n(239),u=n(8),d=n.n(u),c=n(21),f=n(26),l=n(34),p=Object(a.a)(o.default,i.a,i.b,!1,null,null,null);"function"==typeof s.default&&Object(s.default)(p),e.default=p.exports,d()(p,{VBtn:c.a,VIcon:f.a,VTooltip:l.a})},421:function(t,e,n){"use strict";n.r(e);var i=n(268),o=n(177);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var a=n(7),s=n(240),u=n(8),d=n.n(u),c=n(21),f=n(26),l=n(34),p=Object(a.a)(o.default,i.a,i.b,!1,null,null,null);"function"==typeof s.default&&Object(s.default)(p),e.default=p.exports,d()(p,{VBtn:c.a,VIcon:f.a,VTooltip:l.a})},422:function(t,e,n){"use strict";n.r(e);var i=n(271),o=n(186);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n(423);var a=n(7),s=Object(a.a)(o.default,i.a,i.b,!1,null,"5d8b2794",null);e.default=s.exports},423:function(t,e,n){"use strict";var i=n(188);n.n(i).a},424:function(t,e,n){"use strict";var i=n(189);n.n(i).a},425:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=n(9),o=i.__importDefault(n(52)),r=i.__importDefault(n(2)),a=i.__importDefault(n(10));r.default.use(a.default);const s={runDataActiveRun:nodecg.Replicant("runDataActiveRun"),timer:nodecg.Replicant("timer"),timerChangesDisabled:nodecg.Replicant("timerChangesDisabled")},u=new a.default.Store({state:{},mutations:{setState(t,{name:e,val:n}){r.default.set(t,e,n)},updateDisabledToggle(t,e){void 0!==s.timerChangesDisabled.value&&(s.timerChangesDisabled.value=e)}}});Object.keys(s).forEach(t=>{s[t].on("change",e=>{u.commit("setState",{name:t,val:o.default(e)})})}),e.default=()=>i.__awaiter(void 0,void 0,void 0,(function*(){return yield NodeCG.waitForReplicants(...Object.keys(s).map(t=>s[t])),u}))}});