(function(e){function t(t){for(var c,s,r=t[0],i=t[1],l=t[2],p=0,b=[];p<r.length;p++)s=r[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&b.push(a[s][0]),a[s]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);u&&u(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(c=!1)}c&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var c={},a={app:0},o=[];function s(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=c,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(n,c,function(t){return e[t]}.bind(null,c));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2b3d":function(e,t,n){e.exports=n.p+"img/Instagram-Logo.d49a6fa4.svg"},4683:function(e,t,n){},"4b30":function(e,t,n){"use strict";n("ed66")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a=n("2b3d"),o=n.n(a),s=Object(c["f"])("img",{src:o.a,class:"logo"},null,-1),r={key:0},i={key:2},l={class:"upload"},u=Object(c["f"])("label",{for:"file",class:"input-plus"},"+",-1);function p(e,t,n,a,o,p){var b=Object(c["m"])("Post"),f=Object(c["m"])("Upload"),j=Object(c["m"])("fragment");return Object(c["j"])(),Object(c["c"])(j,null,{default:Object(c["p"])((function(){return[Object(c["f"])("header",null,[o.step>0?(Object(c["j"])(),Object(c["e"])("button",{key:0,class:"btn",onClick:t[0]||(t[0]=function(e){return o.step--})},"cencel")):Object(c["d"])("",!0),s,1==o.step?(Object(c["j"])(),Object(c["e"])("button",{key:1,class:"btn",onClick:t[1]||(t[1]=function(e){return o.step++})},"next")):Object(c["d"])("",!0),2==o.step?(Object(c["j"])(),Object(c["e"])("button",{key:2,class:"btn",onClick:t[2]||(t[2]=function(){return p.publish&&p.publish.apply(p,arguments)})},"Publish")):Object(c["d"])("",!0)]),0==o.step?(Object(c["j"])(),Object(c["e"])("div",r,[(Object(c["j"])(!0),Object(c["e"])(c["a"],null,Object(c["l"])(o.posting,(function(e,t){return Object(c["j"])(),Object(c["c"])(b,{key:t,postData:e},null,8,["postData"])})),128))])):Object(c["d"])("",!0),0==o.step?(Object(c["j"])(),Object(c["e"])("div",{key:1,class:"more",onClick:t[3]||(t[3]=function(){return p.more&&p.more.apply(p,arguments)})},"more")):Object(c["d"])("",!0),0==o.step?(Object(c["j"])(),Object(c["e"])("footer",i,[Object(c["f"])("ul",l,[Object(c["f"])("input",{type:"file",onChange:t[4]||(t[4]=function(){return p.upload&&p.upload.apply(p,arguments)}),id:"file",class:"inputfile"},null,32),u])])):Object(c["d"])("",!0),o.step>0?(Object(c["j"])(),Object(c["c"])(f,{key:3,step:o.step,onNewcontent:t[5]||(t[5]=function(e){return o.내용받을곳=e}),image:o.image},null,8,["step","image"])):Object(c["d"])("",!0)]})),_:1})}n("d3b7"),n("3ca3"),n("ddb0"),n("2b3db"),n("9861"),n("99af"),n("b0c0"),n("4de4");var b={class:"post"},f={class:"post-header"},j=["src"],d={class:"profile-name"},O={class:"post-content"},m={class:"like"},g={class:"content"},h={class:"date"};function y(e,t,n,a,o,s){return Object(c["j"])(),Object(c["e"])("div",b,[Object(c["f"])("div",f,[Object(c["f"])("img",{src:n.postData.userImage,alt:"",class:"profile"},null,8,j),Object(c["f"])("span",d,Object(c["n"])(n.postData.name),1)]),Object(c["f"])("figure",{class:Object(c["h"])(["post-body",n.postData.filter]),style:Object(c["i"])({backgroundImage:"url(".concat(n.postData.postImage,")")})},null,6),Object(c["f"])("div",O,[Object(c["f"])("p",m,"likes : "+Object(c["n"])(n.postData.likes),1),Object(c["f"])("p",g,Object(c["n"])(n.postData.content),1),Object(c["f"])("p",h,Object(c["n"])(n.postData.date),1)])])}var v={name:"post",props:{postData:Array}},k=(n("893b"),n("6b0d")),w=n.n(k);const D=w()(v,[["render",y]]);var I=D,x=n("bc3a"),P=n.n(x),S={key:0},_={class:"filter-wrap"},M={class:"filter-name"},$={key:1},A={class:"write"};function C(e,t,n,a,o,s){var r=Object(c["m"])("fragment");return Object(c["j"])(),Object(c["c"])(r,null,{default:Object(c["p"])((function(){return[1==n.step?(Object(c["j"])(),Object(c["e"])("section",S,[Object(c["f"])("figure",{class:Object(c["h"])(["upload-image",e.$store.state.select]),style:Object(c["i"])({backgroundImage:"url(".concat(n.image,")")})},null,6),Object(c["f"])("div",_,[(Object(c["j"])(!0),Object(c["e"])(c["a"],null,Object(c["l"])(e.$store.state.필터들,(function(e,a){return Object(c["j"])(),Object(c["e"])("div",{class:"filter-item",key:a},[Object(c["f"])("div",{class:Object(c["h"])(["filter-object",e]),style:Object(c["i"])({backgroundImage:"url(".concat(n.image,")")}),onClick:t[0]||(t[0]=function(){return s.choiceFind&&s.choiceFind.apply(s,arguments)})},null,6),Object(c["f"])("p",M,Object(c["n"])(e),1)])})),128))])])):Object(c["d"])("",!0),2==n.step?(Object(c["j"])(),Object(c["e"])("section",$,[Object(c["f"])("figure",{class:Object(c["h"])(["upload-image",e.$store.state.select]),style:Object(c["i"])({backgroundImage:"url(".concat(n.image,")")})},null,6),Object(c["f"])("div",A,[Object(c["f"])("textarea",{class:"write-box",onInput:t[1]||(t[1]=function(t){return e.$emit("Newcontent",t.target.value)}),placeholder:"write!"},null,32)])])):Object(c["d"])("",!0)]})),_:1})}n("a9e3");var U={name:"upload",data:function(){return{filterData:""}},props:{step:Number,image:String},methods:{choiceFind:function(e){this.filterData=e.target.nextSibling.innerText,this.$store.commit("choice",this.filterData)}}};n("9350");const F=w()(U,[["render",C]]);var J=F,L=[{name:"Kim Hyun",userImage:"https://placeimg.com/100/100/arch",postImage:"https://placeimg.com/640/480/arch",likes:36,date:"May 15",liked:!1,content:"오늘 무엇을 했냐면요 아무것도 안했어요 😫",filter:""},{name:"John Doe",userImage:"https://placeimg.com/200/200/people",postImage:"https://placeimg.com/640/480/people",likes:20,date:"Apr 20",liked:!1,content:"흔한 자랑스타그램",filter:""},{name:"Minny",userImage:"https://placeimg.com/100/100/animals",postImage:"https://placeimg.com/640/480/animals",likes:49,date:"Apr 4",liked:!1,content:"우리집 개는 화장실 물도 내림",filter:""}],N={name:"App",data:function(){return{posting:L,mores:0,step:0,nowDate:new Date,"내용받을곳":"",image:""}},components:{Post:I,Upload:J},methods:{more:function(){var e=this;this.mores<2&&P.a.get("https://codingapple1.github.io/vue/more".concat(this.mores,".json")).then((function(t){e.posting.push(t.data),e.mores++}))},upload:function(e){var t=e.target.files[0],n=URL.createObjectURL(t);this.step++,this.image=n,1==this.step&&document.querySelector("header").setAttribute("style","justify-content:space-between"),this.$store.commit("choice","")},publish:function(){var e=this.nowDate.getMonth()+1,t=this.nowDate.getDate(),n={name:"tester",userImage:"https://placeimg.com/100/100/arch",postImage:this.image,likes:0,date:"".concat(e,"월").concat(t,"일"),liked:!1,content:this.내용받을곳,filter:this.$store.state.select};this.posting.unshift(n),this.step=0,document.querySelector("header").setAttribute("style","justify-content:space-center")}}};n("4b30");const T=w()(N,[["render",p]]);var q=T,R=n("5502"),H=["basic","_1977","brannan","brooklyn"],K=Object(R["a"])({state:function(){return{"필터들":H,select:""}},mutations:{choice:function(e,t){e.select=""==t?"":t}}}),z=K;Object(c["b"])(q).use(z).mount("#app")},"893b":function(e,t,n){"use strict";n("ee05")},9350:function(e,t,n){"use strict";n("4683")},ed66:function(e,t,n){},ee05:function(e,t,n){}});
//# sourceMappingURL=app.f1e53839.js.map