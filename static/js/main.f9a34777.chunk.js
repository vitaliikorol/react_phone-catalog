(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{20:function(e,a,t){e.exports=t(37)},25:function(e,a,t){},26:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),l=t(16),r=t.n(l),s=t(6),i=t(1),o=(t(25),t(26),"https://image.flaticon.com/icons/svg/495/495946.svg"),m="https://image.flaticon.com/icons/svg/710/710147.svg",_="https://image.flaticon.com/icons/svg/318/318425.svg",u=["https://www.itelmobile.ro/blog/wp-content/uploads/2020/01/Iphone-11-Pro.png","https://www.extremetech.com/wp-content/uploads/2019/09/Apple-All-Together-640x281.jpg","https://mobile-review.com/review/image/samsung/galaxy-a70/colors.jpg","https://www.androidheadlines.com/wp-content/uploads/2019/11/Huawei-Y6s-and-Mystery-Leak-01-1.jpg","https://i.gadgets360cdn.com/products/large/1553577168_635_samsunggalaxya70_db.jpg"],p=function(){return fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json").then((function(e){return e.json()}))},E=function(){return n.a.createElement("nav",{className:"Nav"},n.a.createElement("div",{className:"Nav__left"},n.a.createElement("img",{className:"Nav__logo",alt:"logo",src:o}),n.a.createElement("ul",{className:"Nav__list"},n.a.createElement("li",{className:"Nav__list_item"},n.a.createElement(s.b,{className:"Nav__link",activeClassName:"Nav__link_active",to:"/",exact:!0},"HOME")),n.a.createElement("li",{className:"Nav__list_item"},n.a.createElement(s.b,{className:"Nav__link",activeClassName:"Nav__link_active",to:"/phones"},"PHONES")),n.a.createElement("li",{className:"Nav__list_item"},n.a.createElement(s.b,{className:"Nav__link",activeClassName:"Nav__link_active",to:"/tablets"},"TABLETS")),n.a.createElement("li",{className:"Nav__list_item"},n.a.createElement(s.b,{className:"Nav__link",activeClassName:"Nav__link_active",to:"/accessories"},"ACCESSORIES")))),n.a.createElement("div",{className:"Nav__right"},n.a.createElement(s.b,{to:"/favourites"},n.a.createElement("img",{className:"Nav__right_icon",alt:"favourites",src:m})),n.a.createElement(s.b,{to:"/cart"},n.a.createElement("img",{className:"Nav__right_icon",alt:"cart",src:"https://image.flaticon.com/icons/svg/2093/2093844.svg"}))))},N=(t(32),t(9)),v=t(18),g=t.n(v),f=(t(33),function(){var e=Object(c.useState)(0),a=Object(N.a)(e,2),t=a[0],l=a[1],r=function(){l((function(e){return t+1040<1040*u.length?e+1040:0}))};Object(c.useEffect)((function(){var e=setInterval(r,7e3);return function(){return clearInterval(e)}})),Object(c.useEffect)((function(){t>1040*(u.length-1)&&l(0)}),[t]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"HomePage__carousel carousel"},n.a.createElement("button",{type:"button",className:"carousel__control carousel__control_left",onClick:function(){l((function(e){return t-1040<0?1040*(u.length-1):e-1040}))}},n.a.createElement("img",{className:"carousel__control-arrow carousel__control-arrowleft",src:_,alt:"slide left"})),n.a.createElement("div",{className:"carousel__images"},n.a.createElement("ul",{className:"carousel__list",style:{right:"".concat(t,"px")}},u.map((function(e,a){return n.a.createElement("li",{key:e.slice(10,15)},n.a.createElement("img",{className:"carousel__list_img",src:e,alt:"phone".concat(a)}))})))),n.a.createElement("button",{type:"button",className:"carousel__control carousel__control_right",onClick:r},n.a.createElement("img",{className:"carousel__control-arrow carousel__control-arrowright",src:_,alt:"slide right"}))),n.a.createElement("div",{className:"carousel__pointer"},u.map((function(e,a){return n.a.createElement("button",{"aria-label":"touch me",type:"button",key:e.slice(10,15),onClick:function(){return function(e){l(1040*e)}(a)},className:g()(t/1040===a?"carousel__pointer_bar carousel__pointer_bar-active":"carousel__pointer_bar")})}))))}),d=t(13),h=t.n(d),b=t(19),k=(t(35),function(){var e=Object(c.useState)([]),a=Object(N.a)(e,2),t=a[0],l=a[1],r=Object(c.useState)(0),s=Object(N.a)(r,2),i=s[0],o=s[1];Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){return e.filter((function(e){return e.discount>0}))})).then((function(e){return l(e)}))}),[]);return n.a.createElement("div",{className:"HotPrices"},n.a.createElement("div",{className:"HotPrices__navigation"},n.a.createElement("h2",{className:"HotPrices__navigation_header"},"Hot Prices"),n.a.createElement("div",{className:"HotPrices__navigation_buttons"},n.a.createElement("button",{type:"button",onClick:function(){o((function(e){return i-288<0?288*(t.length-4):e-288}))},className:"HotPrices__navigation_buttons-left"},n.a.createElement("img",{className:"HotPrices__navigation_buttons-left-image",alt:"favourites",src:_})),n.a.createElement("button",{type:"button",onClick:function(){o((function(e){return i+288<288*(t.length-3)?e+288:0}))},className:"HotPrices__navigation_buttons-right"},n.a.createElement("img",{className:"HotPrices__navigation_buttons-right-image",alt:"favourites",src:_})))),n.a.createElement("div",{className:"discount"},n.a.createElement("ul",{className:"discount__list",style:{right:i}},t.map((function(e){return n.a.createElement("li",{key:e.id,className:"discount__list_item card"},n.a.createElement("img",{className:"card__image",src:e.imageUrl,alt:e.id}),n.a.createElement("p",{className:"card__title"},e.name),n.a.createElement("div",{className:"card__price"},n.a.createElement("span",{className:"card__price_new"},"$",e.price*(1-e.discount/100)),n.a.createElement("span",{className:"card__price_new card__price_old"},"$",e.price)),n.a.createElement("div",{className:"card__specification_wrapper"},n.a.createElement("div",{className:"card__specification"},n.a.createElement("span",{className:"card__specification_title"},"Screen"),n.a.createElement("span",{className:"card__specification_description"},e.screen)),n.a.createElement("div",{className:"card__specification"},n.a.createElement("span",{className:"card__specification_title"},"Capacity"),n.a.createElement("span",{className:"card__specification_description"},e.capacity)),n.a.createElement("div",{className:"card__specification"},n.a.createElement("span",{className:"card__specification_title"},"RAM"),n.a.createElement("span",{className:"card__specification_description"},e.ram))),n.a.createElement("div",{className:"discount__list_item-action action"},n.a.createElement("button",{type:"button",className:"action__buy"},"Add to cart"),n.a.createElement("img",{className:"action__add-to-fav",alt:"favourites",src:m})))})))))}),w=function(){return n.a.createElement("div",{className:"HomePage"},n.a.createElement(f,null),n.a.createElement(k,null))},y=function(){return n.a.createElement("p",null,"Here goes catalog!!!")},H=function(){return n.a.createElement("p",null,"Here goes FAVOURITES!!!")},j=function(){return n.a.createElement("p",null,"Here goes shopping cart!!!")},O=function(){return n.a.createElement("p",null,"Sorry this part of our service is still under maintenance :(")},C=(t(36),function(){return n.a.createElement("footer",{className:"Footer"},n.a.createElement("img",{className:"Nav__logo",alt:"logo",src:o}),n.a.createElement("ul",{className:"Nav__list"},n.a.createElement("li",{className:"Nav__list_item"},n.a.createElement("a",{className:"Footer__link",href:"https://github.com/vitaliikorol"},"GITHUB")),n.a.createElement("li",{className:"Nav__list_item"},n.a.createElement("a",{className:"Footer__link",href:"/"},"CONTACTS")),n.a.createElement("li",{className:"Nav__list_item"},n.a.createElement("a",{className:"Footer__link",href:"/"},"RIGHTS"))),n.a.createElement("div",{className:"Footer__mover"},n.a.createElement("span",{className:"Footer__mover_title"},"Back to top"),n.a.createElement("img",{className:"Footer__mover_img",alt:"back to top",src:_})))}),P=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(E,null),n.a.createElement(i.c,null,n.a.createElement(i.a,{path:"/",exact:!0,component:w}),n.a.createElement(i.a,{path:"/phones/:id?",component:y}),n.a.createElement(i.a,{path:"/tablets/:id?",component:O}),n.a.createElement(i.a,{path:"/accessories",component:O}),n.a.createElement(i.a,{path:"/favourites",component:H}),n.a.createElement(i.a,{path:"/cart",component:j})),n.a.createElement(C,null))};r.a.render(n.a.createElement(s.a,null,n.a.createElement(P,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.f9a34777.chunk.js.map