(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{284:function(e,t,n){},285:function(e,t,n){"use strict";var c=n(6),r=n(53).findIndex,o=n(83),l=n(41),d=!0,f=l("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){d=!1})),c({target:"Array",proto:!0,forced:d||!f},{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},286:function(e,t,n){e.exports=n.p+"img/amazon.e14fb79.jpg"},287:function(e,t,n){e.exports=n.p+"img/amc.18d7950.jpg"},288:function(e,t,n){e.exports=n.p+"img/apple.c9042ac.jpg"},289:function(e,t,n){e.exports=n.p+"img/bitcoin.2a20cef.jpg"},290:function(e,t,n){e.exports=n.p+"img/boeing.b9ef302.jpg"},291:function(e,t,n){e.exports=n.p+"img/cardano.013688d.jpg"},292:function(e,t,n){e.exports=n.p+"img/doge.23de2e0.jpg"},293:function(e,t,n){e.exports=n.p+"img/facebook.c62058f.jpg"},294:function(e,t,n){e.exports=n.p+"img/moderna.0435a6a.jpg"},295:function(e,t,n){e.exports=n.p+"img/nio.06f8c95.jpg"},296:function(e,t,n){e.exports=n.p+"img/pfizer.b9f940e.jpg"},297:function(e,t,n){e.exports=n.p+"img/tesla.ab6574f.jpg"},298:function(e,t,n){},299:function(e,t,n){var map={"./alibaba.png":300,"./amazon.jpg":286,"./amc.jpg":287,"./apple.jpg":288,"./bitcoin.jpg":289,"./blackberry.png":301,"./boeing.jpg":290,"./cardano.jpg":291,"./doge.jpg":292,"./ethereum.png":302,"./facebook.jpg":293,"./gamestop.png":303,"./iota.png":304,"./microsoft.png":305,"./moderna.jpg":294,"./nio.jpg":295,"./nvidia.png":306,"./palantir.png":307,"./pfizer.jpg":296,"./polkadot.png":308,"./santander.png":309,"./tesla.jpg":297,"./xpeng.png":310,"./xrp.png":311};function c(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}c.keys=function(){return Object.keys(map)},c.resolve=r,e.exports=c,c.id=299},300:function(e,t,n){e.exports=n.p+"img/alibaba.5b321e8.png"},301:function(e,t,n){e.exports=n.p+"img/blackberry.097a5e8.png"},302:function(e,t,n){e.exports=n.p+"img/ethereum.7a7635e.png"},303:function(e,t,n){e.exports=n.p+"img/gamestop.8b5c2fa.png"},304:function(e,t,n){e.exports=n.p+"img/iota.c9764d3.png"},305:function(e,t,n){e.exports=n.p+"img/microsoft.a8eb193.png"},306:function(e,t,n){e.exports=n.p+"img/nvidia.82556ee.png"},307:function(e,t,n){e.exports=n.p+"img/palantir.d0ac211.png"},308:function(e,t,n){e.exports=n.p+"img/polkadot.515f475.png"},309:function(e,t,n){e.exports=n.p+"img/santander.59cfe1e.png"},310:function(e,t,n){e.exports=n.p+"img/xpeng.c184cfe.png"},311:function(e,t,n){e.exports=n.p+"img/xrp.2d0f150.png"},312:function(e,t,n){"use strict";n(284)},313:function(e,t,n){"use strict";n.r(t);var c={name:"IndexList",components:{Price:n(315).default},props:{data:{type:Array,default:function(){return[]}},type:{type:String,default:""},indexPage:{type:Boolean,default:!1}},data:function(){return{mobileScreen:!1}},methods:{priceStatus:function(e){return void 0===e?"":e>0?"up":"down"}},created:function(){window.innerWidth<768&&(this.mobileScreen=!0)}},r=(n(319),n(32)),component=Object(r.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.indexPage&&!e.mobileScreen?n("div",{staticClass:"row mb-3 mx-0 pb-2 justify-content-between w-100"},[e._m(0),e._v(" "),e._l(e.data,(function(t){return n("div",{key:t.symbol,staticClass:"w-100 grid-wrapper"},["rising"===e.type?n("div",{staticClass:"movers-grid grid"},[n("span",[e._v(e._s(t.symbol))]),e._v(" "),n("span",[e._v(e._s(t.company_name))]),e._v(" "),n("span",{class:t.change>0?"up":"down"},[e._v("$"+e._s(t.price))]),e._v(" "),n("span",{staticClass:"justify-content-center green font-weight-bold"},[e._v(e._s(t.change_percentage))]),e._v(" "),n("span",{staticClass:"justify-content-center"},[e._v(e._s(t.change))])]):n("div",{staticClass:"grid",class:e.priceStatus(t.change)},[n("div",[e._v(e._s(t.symbol))]),e._v(" "),n("div",[n("NuxtLink",{staticClass:"instrument index d-flex icon-wrapper",attrs:{to:"/"+e.type+"/"+t.name.replace(/\s+|[' '\/]/g,"-").toLowerCase()}},[n("i",{staticClass:"icon",class:t.icon}),e._v("\n          "+e._s(t.name)+"\n          "),t.marketOpen?n("span",{staticClass:"indicator"}):e._e()])],1),e._v(" "),n("div",{staticClass:"price ask number-font"},[e._v("$"+e._s(t.price))]),e._v(" "),n("div",{staticClass:"justify-content-center number-font"},[t.change?n("Price",{attrs:{index:t,difference:t.change}}):e._e()],1),e._v(" "),n("div",{staticClass:"justify-content-center number-font"},[t.difference?n("Price",{attrs:{index:t,difference:t.difference}}):e._e()],1)])])}))],2):"rising"===e.type?n("div",{staticClass:"movers-list row mb-3 mx-0 pb-2 justify-content-between w-100"},e._l(e.data,(function(t){return n("div",{key:t.symbol,staticClass:"mover index"},[n("h4",[e._v(e._s(t.company_name)+" "),n("span",{staticClass:"green"},[e._v(e._s(t.change_percentage))])]),e._v(" "),n("Price",{staticClass:"mover-price",attrs:{index:t,price:t.price}})],1)})),0):n("div",{staticClass:"row mb-3 mx-0 pb-2 justify-content-between w-100"},e._l(e.data,(function(t){return n("NuxtLink",{key:t.symbol,staticClass:"instrument index",class:t.change>0?"up":"down",attrs:{to:"/"+e.type+"/"+t.name.replace(/\s+|[' '\/]/g,"-").toLowerCase()}},[n("div",{staticClass:"d-flex icon-wrapper"},[n("div",{staticClass:"icon",class:t.icon}),e._v(" "),n("h4",[e._v(e._s(t.name)),t.marketOpen?n("span",{staticClass:"indicator"}):e._e()])]),e._v(" "),n("Price",{attrs:{index:t,price:t.price}})],1)})),1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid"},[n("div",{staticClass:"pb-3"},[n("strong",[e._v("Symbol")])]),e._v(" "),n("div",{staticClass:"pb-3"},[n("strong",[e._v("Name")])]),e._v(" "),n("div",{staticClass:"pb-3"},[n("strong",[e._v("Price")])]),e._v(" "),n("div",{staticClass:"pb-3 justify-content-center"},[n("strong",[e._v("% Change")])]),e._v(" "),n("div",{staticClass:"pb-3 justify-content-center"},[n("strong",[e._v("$ Change")])])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Price:n(315).default})},314:function(e,t,n){"use strict";n.r(t);n(65),n(142);var c=n(51),r={name:"News",props:{newsData:{type:Array,default:function(){return[]}}},data:function(){return{stocks:c.g,cryptocurrency:c.c}},methods:{getThumb:function(e){var symbol="";return symbol="cryptocurrency"===e.type?this[e.type].find((function(t){return t.icon===e.symbol})):this[e.type].find((function(t){return t.symbol===e.symbol})),n(299)("./".concat(symbol.thumb))}}},o=(n(312),n(32)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.newsData.length>0?n("div",{staticClass:"news justify-content-between"},[e.newsData.video?n("div",e._l(e.newsData,(function(t){return n("b-card",{key:t.title,attrs:{"no-body":""}},[n("b-row",[n("b-col",{staticClass:"pr-0"},[n("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:t.url,allowfullscreen:""}})],1),e._v(" "),n("b-col",{staticClass:"d-flex align-items-center"},[n("b-card-body",{staticClass:"pl-0 pb-0 pt-0"},[n("b-card-text",[n("h5",{directives:[{name:"snip",rawName:"v-snip",value:2,expression:"2"}],staticClass:"card-title"},[e._v(e._s(t.title))]),e._v(" "),n("span",[e._v(e._s(t.time))])])],1)],1)],1)],1)})),1):e._l(e.newsData,(function(t){return n("a",{key:t.title,attrs:{href:t.url,target:"_blank"}},[n("b-card",{attrs:{"no-body":""}},[t.symbol?n("b-row",[n("b-col",{staticClass:"pr-0 col-sm-5"},[n("b-card-img",{attrs:{src:e.getThumb(t),alt:"image"}})],1),e._v(" "),n("b-col",{staticClass:"d-flex align-items-center col-sm-7"},[n("b-card-body",{staticClass:"pl-0 pb-0 pt-0"},[n("b-card-text",[n("h5",{directives:[{name:"snip",rawName:"v-snip",value:2,expression:"2"}],staticClass:"card-title"},[e._v(e._s(t.title))]),e._v(" "),n("p",{directives:[{name:"snip",rawName:"v-snip",value:2,expression:"2"}],staticClass:"card-text"},[e._v(e._s(t.description))]),e._v(" "),n("span",[e._v(e._s(t.time))])])],1)],1)],1):n("b-row",[n("b-col",{attrs:{md:"12"}},[n("b-card-body",[n("b-card-text",[t.category?n("p",{staticClass:"category"},[e._v(e._s(t.category))]):e._e(),e._v(" "),n("h5",{directives:[{name:"snip",rawName:"v-snip",value:2,expression:"2"}],staticClass:"card-title"},[e._v(e._s(t.title))]),e._v(" "),n("p",{directives:[{name:"snip",rawName:"v-snip",value:2,expression:"2"}],staticClass:"card-text"},[e._v(e._s(t.description))])])],1)],1)],1)],1)],1)}))],2):n("div",{staticClass:"loading-news"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"dummy-item"},[t("h3"),this._v(" "),t("p"),this._v(" "),t("p"),this._v(" "),t("p")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"dummy-item"},[t("h3"),this._v(" "),t("p"),this._v(" "),t("p"),this._v(" "),t("p")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"dummy-item"},[t("h3"),this._v(" "),t("p"),this._v(" "),t("p"),this._v(" "),t("p")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"dummy-item"},[t("h3"),this._v(" "),t("p"),this._v(" "),t("p"),this._v(" "),t("p")])}],!1,null,null,null);t.default=component.exports},315:function(e,t,n){"use strict";n.r(t);n(33);var c={name:"Price",props:{index:{type:Object,default:function(){}},price:{type:String},change:{type:String},difference:{type:String}},data:function(){return{flash:!1}},methods:{showFlash:function(){var e=this;!1===this.flash&&(this.flash=!0,setTimeout((function(){e.flash=!1}),1e3))}},watch:{price:{immediate:!0,handler:function(){this.showFlash()}},change:{immediate:!0,handler:function(){this.showFlash()}},difference:{immediate:!0,handler:function(){this.showFlash()}}}},r=n(32),component=Object(r.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"price",class:{flash:e.flash}},[e.index.change_percentage?n("div",[n("strong",[n("span",{staticClass:"small"},[e._v("+"+e._s(e.index.change)+" $"+e._s(e.index.price))])])]):e.change?n("span",{staticClass:"change"},[e._v(e._s(e.change))]):e.difference?n("span",{staticClass:"difference"},[e._v(e._s(e.difference))]):e.index.ask||e.index.price?n("div",[e.index.ask?n("strong",[e._v(e._s(e.index.ask))]):e._e(),e._v(" "),e.price?n("strong",[e._v(e._s(e.price))]):e._e(),e._v(" "),e.index.change?n("p",[n("span",[e._v(e._s(e.index.difference))]),e._v(" "+e._s(e.index.change)+"%")]):e._e()]):n("strong",{staticClass:"loading"})])}),[],!1,null,null,null);t.default=component.exports},319:function(e,t,n){"use strict";n(298)},352:function(e,t,n){"use strict";n.r(t);n(8),n(4),n(285),n(10),n(15),n(11),n(33);var c=n(51),r={components:{IndexList:n(313).default},data:function(){return{forexWS:new WebSocket("wss://w29hxx2ndd.finage.ws:8001/?token=SOCKET_KEYFEHvG9MMnnGX5JhQ8mVJsw527EMDPAq3MKkETjUV55QQC33y"),loading:!0,currencies:c.d,filteredCurrencies:[],view:"list",loaded:!1,chartData:null,chartOptions:null,newsData:[]}},methods:{fetchNews:function(symbol){var e=this;this.$axios.$get("https://api.finage.co.uk/news/forex/".concat(symbol,"?apikey=").concat("API_KEYTS5Q5H4EBFHIHT4WK6KB583OZ2HS8ZJJ")).then((function(t){if(console.log("News"),console.log(t.news),void 0!==t.news[0]){var n=e.newsData.findIndex((function(e){return e.title===t.news[0].title})),c=t.news[0];e.loading=!1,-1===n&&e.newsData.push(c),e.newsData.length>17&&e.newsData.pop()}})).catch((function(e){console.log(e)}))},showGrid:function(){this.view="grid"},showList:function(){this.view="list"}},created:function(){var e=this;this.$root.$on("updateCurrency",(function(t){var i=e.currencies.findIndex((function(e){return e.name===t.name}));e.$set(e.currencies[i],"price",t.price),e.$set(e.currencies[i],"difference",t.difference),e.$set(e.currencies[i],"change",t.change)})),this.$root.$on("updateIndice",(function(t){if("DXY"===t.symbol){var i=e.currencies.findIndex((function(e){return e.name===t.name}));e.$set(e.currencies[i],"price",t.price),e.$set(e.currencies[i],"difference",t.difference),e.$set(e.currencies[i],"change",t.change)}})),this.filteredCurrencies=this.currencies.filter((function(e){return"currency"===e.type})),this.currencies.forEach((function(t){e.fetchNews(t.symbol)})),setInterval((function(){e.currencies.forEach((function(t){e.fetchNews(t.symbol)}))}),3e5)}},o=n(32),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loading?n("div",[e._m(0)]):n("div",[n("div",{staticClass:"content container container-fluid w-100 buffer",class:e.view},[n("div",{staticClass:"row m-0"},[n("h2",{staticClass:"col-12"},[e._v("Currencies")]),e._v(" "),n("div",{staticClass:"col-lg-8"},[n("div",{staticClass:"col-12 white-well pt-2"},[n("IndexList",{attrs:{data:e.filteredCurrencies,indexPage:"",type:"currencies"}})],1)]),e._v(" "),n("div",{staticClass:"col-lg-4"},[n("News",{attrs:{newsData:e.newsData}})],1)])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container d-flex justify-content-around w-50 pt-5 vh-100 text-center"},[t("div",{staticClass:"loading-logo mt-5",attrs:{role:"status"}})])}],!1,null,null,null);t.default=component.exports;installComponents(component,{IndexList:n(313).default,News:n(314).default})}}]);