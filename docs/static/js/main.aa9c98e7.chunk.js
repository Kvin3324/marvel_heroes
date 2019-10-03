(window["webpackJsonpmarvel-characters"]=window["webpackJsonpmarvel-characters"]||[]).push([[0],{125:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(61),i=t.n(r),s=(t(78),t(79),t(18));var l=function(){return c.a.createElement("header",{className:"title d-flex"},c.a.createElement("div",{className:"pt-4 header--home"},c.a.createElement(s.c,{to:"/",className:"header--text"},"Home")),c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/fr/a/a4/Logo_Marvel_Comics.jpg",alt:"marvel-logo",className:"logo-marvel"}))},o=t(64),m=t(65),h=t(71),u=t(66),d=t(72);var p=function(e){return c.a.createElement("div",{className:"col-xl-3 col-sm-6 mr-4"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card--img"},c.a.createElement("img",{src:"".concat(e.img_hero.path,".").concat(e.img_hero.extension),className:"card-img-list",alt:"..."})),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"}," ",e.name),c.a.createElement("p",null,"(#",e.id,")"),e.description.length>200?c.a.createElement("p",{className:"card-text"},e.description.substr(0,50)," (...)"):0===e.description.length?c.a.createElement("p",{className:"card-text-not-available"},"No description available."):c.a.createElement("p",{className:"card-text"},e.description),c.a.createElement("button",{className:"btn btn-secondary"},c.a.createElement(s.b,{to:"/about/".concat(e.id),className:"link--to--go"},"More informations")))))},g=t(69),f=(t(124),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(h.a)(this,Object(u.a)(a).call(this,e))).handleOnChange=function(e){""!==e.target.value.length?t.setState({showList:{list:!1,searchInput:e.target.value}}):t.setState({showList:{list:!0,searchInput:""}})},t.handleOnChangePage=function(e){t.getList(e)},t.state={url:"https://gateway.marvel.com/",characters:null,showList:{list:!0,searchInput:""},currentPage:1},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"getList",value:function(e){var a=this;fetch("".concat(this.state.url,"v1/public/characters?apikey=").concat("d87aaf099d9bdee47146e7c016069624","&limit=10&offset=").concat(10*e)).then((function(e){return e.json()})).then((function(e){a.setState({characters:e.data.results})}))}},{key:"componentDidMount",value:function(){this.getList(this.currentPage)}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"banner"},c.a.createElement("div",{className:"search--bar"},c.a.createElement("input",{className:"form-control search--bar--input",type:"text",placeholder:"Search your Hero","aria-label":"Search",onChange:function(a){return e.handleOnChange(a)}}),c.a.createElement("p",{className:"search--bar--input--hint"},"(Don't forget: a name begins with an uppercase. ",c.a.createElement("span",{role:"img","aria-label":""},"\ud83d\ude09"),")"))),c.a.createElement("div",{className:"container container--cards"},c.a.createElement("div",{className:"row"},function(){var e=this;if(null===this.state.characters)return c.a.createElement("i",{className:"fa fa-spinner"});if(null!==this.state.characters){if(this.state.showList.list)return this.state.characters.map((function(e){return c.a.createElement(p,{name:e.name,id:e.id,description:e.description,img_hero:e.thumbnail,key:e.name})}));if(!this.state.showList.list)return this.state.characters.map((function(a){return a.name.includes(e.state.showList.searchInput)?c.a.createElement(p,{name:a.name,id:a.id,description:a.description,img_hero:a.thumbnail,key:a.id}):null}))}}.bind(this)())),c.a.createElement("div",{className:"pagination"},c.a.createElement(g.a,{onChange:function(a){return e.getList(a)},defaultPageSize:10,total:1e3,pageSize:10})))}}]),a}(c.a.Component)),E=t(70);var v=function(e){return c.a.createElement("div",{className:"col-xl-12 mb-3 about--hero"},c.a.createElement("div",{className:"col-xl-6 about--hero--img"},c.a.createElement("img",{src:"".concat(e.img_hero.path,".").concat(e.img_hero.extension),className:"card--img--single",alt:"..."})),c.a.createElement("div",{className:"col-xl-6 about--hero--infos"},c.a.createElement("h3",{className:"about--hero--name"}," ",e.name),0===e.description.length?c.a.createElement("p",{className:"card-text-not-available"},"No description available."):c.a.createElement("p",{className:"card-text"},e.description),c.a.createElement("div",{className:"about--hero--comics mt-4"},c.a.createElement("h3",null,"Comics:"),e.comics.items.map((function(a,t){return c.a.createElement("li",{key:t},c.a.createElement("i",{className:"fa fa-book mr-2"}),e.comics.items[t].name)})))))},b=function(e){var a=Object(n.useState)({characters:null}),t=Object(E.a)(a,2),r=t[0],i=t[1];return Object(n.useEffect)((function(){fetch("".concat("https://gateway.marvel.com/","v1/public/characters/").concat(e.match.params.id,"?apikey=").concat("d87aaf099d9bdee47146e7c016069624")).then((function(e){return e.json()})).then((function(e){return i({characters:e.data.results})}))}),[]),c.a.createElement("div",null,null===r.characters?"loading":c.a.createElement(v,{name:r.characters[0].name,id:r.characters[0].id,description:r.characters[0].description,img_hero:r.characters[0].thumbnail,comics:r.characters[0].comics,key:r.characters[0].id}))},N=t(9);var w=function(){return c.a.createElement(s.a,null,c.a.createElement("div",{className:"container App"},c.a.createElement(l,null),c.a.createElement(N.a,{exact:!0,path:"/",component:f}),c.a.createElement(N.a,{exact:!0,path:"/about/:id",component:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},73:function(e,a,t){e.exports=t(125)},78:function(e,a,t){},79:function(e,a,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.aa9c98e7.chunk.js.map