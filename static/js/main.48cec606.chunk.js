(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{23:function(e,t,a){e.exports=a(43)},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),s=a.n(r),i=a(6),l=a(1),o=(a(28),a(29),"https://image.flaticon.com/icons/svg/710/710147.svg"),m="https://image.flaticon.com/icons/svg/318/318425.svg",_=["https://www.itelmobile.ro/blog/wp-content/uploads/2020/01/Iphone-11-Pro.png","https://www.extremetech.com/wp-content/uploads/2019/09/Apple-All-Together-640x281.jpg","https://fdn.gsmarena.com/imgroot/news/19/12/top-phones-of-2019/-727/gsmarena_001.jpg","https://www.androidheadlines.com/wp-content/uploads/2019/11/Huawei-Y6s-and-Mystery-Leak-01-1.jpg","https://i.gadgets360cdn.com/products/large/1553577168_635_samsunggalaxya70_db.jpg"],u=function(){return fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json").then((function(e){return e.json()}))},p=function(){return c.a.createElement("nav",{className:"Nav"},c.a.createElement("div",{className:"Nav__left"},c.a.createElement("img",{className:"Nav__logo",alt:"logo",src:"https://image.flaticon.com/icons/svg/495/495946.svg"}),c.a.createElement("ul",{className:"Nav__list"},c.a.createElement("li",{className:"Nav__list_item"},c.a.createElement(i.b,{className:"Nav__link",activeClassName:"Nav__link_active",to:"/",exact:!0},"HOME")),c.a.createElement("li",{className:"Nav__list_item"},c.a.createElement(i.b,{className:"Nav__link",activeClassName:"Nav__link_active",to:"/phones"},"PHONES")),c.a.createElement("li",{className:"Nav__list_item"},c.a.createElement(i.b,{className:"Nav__link",activeClassName:"Nav__link_active",to:"/tablets"},"TABLETS")),c.a.createElement("li",{className:"Nav__list_item"},c.a.createElement(i.b,{className:"Nav__link",activeClassName:"Nav__link_active",to:"/accessories"},"ACCESSORIES")))),c.a.createElement("div",{className:"Nav__right"},c.a.createElement(i.b,{to:"/favourites",className:"Nav__right_link"},c.a.createElement("img",{className:"Nav__right_icon",alt:"favourites",src:o})),c.a.createElement(i.b,{to:"/cart",className:"Nav__right_link"},c.a.createElement("img",{className:"Nav__right_icon",alt:"cart",src:"https://image.flaticon.com/icons/svg/2093/2093844.svg"}))))},g=(a(35),a(3)),d=a(9),E=a.n(d),f=(a(36),function(){var e=Object(n.useState)(0),t=Object(g.a)(e,2),a=t[0],r=t[1],s=function(){r((function(e){return a+1040<1040*_.length?e+1040:0}))};Object(n.useEffect)((function(){var e=setInterval(s,7e3);return function(){return clearInterval(e)}})),Object(n.useEffect)((function(){a>1040*(_.length-1)&&r(0)}),[a]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"HomePage__carousel carousel"},c.a.createElement("button",{type:"button",className:"carousel__control carousel__control_left",onClick:function(){r((function(e){return a-1040<0?1040*(_.length-1):e-1040}))}},c.a.createElement("img",{className:"carousel__control-arrow carousel__control-arrowleft",src:m,alt:"slide left"})),c.a.createElement("div",{className:"carousel__images"},c.a.createElement("ul",{className:"carousel__list",style:{right:"".concat(a,"px")}},_.map((function(e,t){return c.a.createElement("li",{key:e.slice(10,15)},c.a.createElement("img",{className:"carousel__list_img",src:e,alt:"phone".concat(t)}))})))),c.a.createElement("button",{type:"button",className:"carousel__control carousel__control_right",onClick:s},c.a.createElement("img",{className:"carousel__control-arrow carousel__control-arrowright",src:m,alt:"slide right"}))),c.a.createElement("div",{className:"carousel__pointer"},_.map((function(e,t){return c.a.createElement("button",{"aria-label":"touch me",type:"button",key:e.slice(10,15),onClick:function(){return function(e){r(1040*e)}(t)},className:E()(a/1040===t?"carousel__pointer_bar carousel__pointer_bar-active":"carousel__pointer_bar")})}))))}),N=a(7),v=a.n(N),h=a(10),b=(a(38),a(39),function(e){var t=e.phones,a=e.title,r=Object(n.useState)(0),s=Object(g.a)(r,2),i=s[0],l=s[1];return c.a.createElement("div",{className:"ProductSlider"},c.a.createElement("div",{className:"ProductSlider__navigation"},c.a.createElement("h2",{className:"ProductSlider__navigation_header"},a),c.a.createElement("div",{className:"ProductSlider__navigation_buttons"},c.a.createElement("button",{type:"button",onClick:function(){l((function(e){return i-288<0?288*(t.length-4):e-288}))},className:"ProductSlider__navigation_buttons-left"},c.a.createElement("img",{className:"ProductSlider__navigation_buttons-left-image",alt:"favourites",src:m})),c.a.createElement("button",{type:"button",onClick:function(){l((function(e){return i+288<288*(t.length-3)?e+288:0}))},className:"ProductSlider__navigation_buttons-right"},c.a.createElement("img",{className:"ProductSlider__navigation_buttons-right-image",alt:"favourites",src:m})))),c.a.createElement("div",{className:"discount"},c.a.createElement("ul",{className:"discount__list",style:{right:i}},t.map((function(e){return c.a.createElement("li",{key:e.id,className:"discount__list_item card"},c.a.createElement("img",{className:"card__image",src:e.imageUrl,alt:e.id}),c.a.createElement("p",{className:"card__title"},e.name),c.a.createElement("div",{className:"card__price"},e.discount?c.a.createElement("span",{className:"card__price_new"},"$",e.price*(1-e.discount/100)):"",c.a.createElement("span",{className:E()(e.discount?"card__price_new card__price_old":"card__price_new")},"$",e.price)),c.a.createElement("div",{className:"card__specification_wrapper"},c.a.createElement("div",{className:"card__specification"},c.a.createElement("span",{className:"card__specification_title"},"Screen"),c.a.createElement("span",{className:"card__specification_description"},e.screen)),c.a.createElement("div",{className:"card__specification"},c.a.createElement("span",{className:"card__specification_title"},"Capacity"),c.a.createElement("span",{className:"card__specification_description"},e.capacity)),c.a.createElement("div",{className:"card__specification"},c.a.createElement("span",{className:"card__specification_title"},"RAM"),c.a.createElement("span",{className:"card__specification_description"},e.ram))),c.a.createElement("div",{className:"discount__list_item-action action"},c.a.createElement("button",{type:"button",className:"action__buy"},"Add to cart"),c.a.createElement("img",{className:"action__add-to-fav",alt:"favourites",src:o})))})))))}),y=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){return e.filter((function(e){return e.discount>0})).sort((function(e,t){return t.price-e.price}))})).then((function(e){return r(e)}))}),[]),c.a.createElement(b,{phones:a,title:"Hot prices"})},w=(a(40),function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)([]),i=Object(g.a)(s,2),l=i[0],o=i[1],m=Object(n.useState)([]),_=Object(g.a)(m,2),p=_[0],d=_[1];return Object(n.useEffect)((function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(h.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e().then((function(e){return e.filter((function(e){return"phone"===e.type}))})).then((function(e){return r(e)})),e().then((function(e){return e.filter((function(e){return"tablet"===e.type}))})).then((function(e){return o(e)})),e().then((function(e){return e.filter((function(e){return"accessories"===e.type}))})).then((function(e){return d(e)}))}),[]),c.a.createElement("div",{className:"Category"},c.a.createElement("h1",{className:"Category__title"},"Shop by category"),c.a.createElement("div",{className:"Category__list_wrapper"},c.a.createElement("ul",{className:"Category__list"},c.a.createElement("li",{className:"Category__list_item cli"},c.a.createElement("div",{className:"cli__img_wrapper-mobile cli__img_wrapper"},c.a.createElement("img",{className:"cli__img",alt:"mobile phones",src:"img/categories/mobiles.png"})),c.a.createElement("p",{className:"cli__description"},"Mobile phones"),c.a.createElement("span",{className:"cli__count"},a.length," ","models")),c.a.createElement("li",{className:"Category__list_item cli"},c.a.createElement("div",{className:"cli__img_wrapper-tablet cli__img_wrapper"},c.a.createElement("img",{className:"cli__img",alt:"tablets",src:"img/categories/tablets.png"})),c.a.createElement("p",{className:"cli__description"},"Mobile phones"),c.a.createElement("span",{className:"cli__count"},l.length," ","models")),c.a.createElement("li",{className:"Category__list_item cli"},c.a.createElement("div",{className:"cli__img_wrapper-accessories cli__img_wrapper"},c.a.createElement("img",{className:"cli__img",alt:"accessories",src:"img/categories/accessories.png"})),c.a.createElement("p",{className:"cli__description"},"Mobile phones"),c.a.createElement("span",{className:"cli__count"},p.length," ","models")))))}),C=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){return e.filter((function(e){return 0===e.discount})).sort((function(e,t){return t.price-e.price}))})).then((function(e){return r(e)}))}),[]),c.a.createElement(b,{phones:a,title:"Brand new models"})},P=function(){return c.a.createElement("div",{className:"HomePage"},c.a.createElement(f,null),c.a.createElement(y,null),c.a.createElement(w,null),c.a.createElement(C,null))},j=(a(41),a(22)),O=function(e){var t=e.sortedPhones,a=e.activeTab,n=e.viewQty,r=e.setActiveTab,s=e.setPosition,i=e.position,l=Math.ceil(t.length/n),o=Object(j.a)(t).splice(0,l);return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:function(){var e=n/4*507;s(i-e<=0?0:i-e),r(a<=1?1:a-1)},type:"button",className:"PhonesCatalog__navigation_button"},c.a.createElement("img",{src:m,alt:"move left",className:"PhonesCatalog__navigation_button-left"})),c.a.createElement("div",null,o.map((function(e,t){return c.a.createElement("button",{type:"button",onClick:function(){return function(e){s(n/4*507*(e-1)),r(e)}(t+1)},key:e.id,className:E()(a===t+1?"PhonesCatalog__navigation_button PhonesCatalog__navigation_tabs PhonesCatalog__navigation_tabs-active":"PhonesCatalog__navigation_button PhonesCatalog__navigation_tabs"),disabled:t+1===a},t+1)}))),c.a.createElement("button",{onClick:function(){var e=Math.ceil((null===t||void 0===t?void 0:t.length)/n)-1,c=n/4*507;s(i+c<=e*c?i+c:i),r(a<=e?a+1:a)},type:"button",className:"PhonesCatalog__navigation_button"},c.a.createElement("img",{src:m,alt:"move right",className:"PhonesCatalog__navigation_button-right"})))},k=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)("age"),l=Object(g.a)(s,2),_=l[0],p=l[1],d=Object(n.useState)(4),f=Object(g.a)(d,2),N=f[0],b=f[1],y=Object(n.useState)(0),w=Object(g.a)(y,2),C=w[0],P=w[1],j=Object(n.useState)(1),k=Object(g.a)(j,2),S=k[0],A=k[1];Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){return e.filter((function(e){return"phone"===e.type}))})).then((function(e){return r(e)}))}),[]);var x,T="age"===(x=_)?a.sort((function(e,t){return e.age-t.age})):"name"===x?a.sort((function(e,t){return e.name.localeCompare(t.name)})):"price_asc"===x?a.sort((function(e,t){return e.price-t.price})):"price_desc"===x?a.sort((function(e,t){return t.price-e.price})):void 0;return c.a.createElement("div",{className:"PhonesCatalog"},c.a.createElement("div",{className:"breadcrumb"},c.a.createElement(i.b,{to:"/",className:"breadcrumb__link"},c.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/83/83966.svg",alt:"home page",className:"breadcrumb__link_home"})),c.a.createElement("img",{src:m,alt:" ",className:"breadcrumb__arrow"}),c.a.createElement("span",{className:"breadcrumb__currentPage"},"Phones")),c.a.createElement("h1",{className:"PhonesCatalog__header"},"Mobile phones"),c.a.createElement("p",{className:"PhonesCatalog__qty"},a.length," ","models"),c.a.createElement("div",{className:"PhonesCatalog__sorting"},c.a.createElement("div",{className:"PhonesCatalog__sorting_wrapper"},c.a.createElement("span",{className:"PhonesCatalog__sorting_title"},"Sort by"),c.a.createElement("select",{onChange:function(e){return function(e){p(e.target.value),P(0),A(1)}(e)},id:"sortBy",className:"PhonesCatalog__sorting_option"},c.a.createElement("option",{value:"age"},"Newest"),c.a.createElement("option",{value:"name"},"Alphabetically"),c.a.createElement("option",{value:"price_asc"},"Price Ascending"),c.a.createElement("option",{value:"price_desc"},"Price Descending"))),c.a.createElement("div",{className:"PhonesCatalog__sorting_wrapper"},c.a.createElement("span",{className:"PhonesCatalog__sorting_title"},"Items on page"),c.a.createElement("select",{onChange:function(e){return function(e){b(+e.target.value),P(0),A(1)}(e)},id:"sortQty",className:"PhonesCatalog__sorting_option"},c.a.createElement("option",{value:"4"},"4"),c.a.createElement("option",{value:"8"},"8"),c.a.createElement("option",{value:"16"},"16")))),c.a.createElement("div",{className:"PhonesCatalog__items_wrapper",style:{height:"".concat(N/4*507,"px")}},c.a.createElement("div",{className:"PhonesCatalog__items",style:{bottom:C}},null===T||void 0===T?void 0:T.map((function(e){return c.a.createElement("div",{key:e.id,className:"discount__list_item card"},c.a.createElement("img",{className:"card__image",src:e.imageUrl,alt:e.id}),c.a.createElement("p",{className:"card__title"},e.name),c.a.createElement("div",{className:"card__price"},e.discount?c.a.createElement("span",{className:"card__price_new"},"$",e.price*(1-e.discount/100)):"",c.a.createElement("span",{className:E()(e.discount?"card__price_new card__price_old":"card__price_new")},"$",e.price)),c.a.createElement("div",{className:"card__specification_wrapper"},c.a.createElement("div",{className:"card__specification"},c.a.createElement("span",{className:"card__specification_title"},"Screen"),c.a.createElement("span",{className:"card__specification_description"},e.screen)),c.a.createElement("div",{className:"card__specification"},c.a.createElement("span",{className:"card__specification_title"},"Capacity"),c.a.createElement("span",{className:"card__specification_description"},e.capacity)),c.a.createElement("div",{className:"card__specification"},c.a.createElement("span",{className:"card__specification_title"},"RAM"),c.a.createElement("span",{className:"card__specification_description"},e.ram))),c.a.createElement("div",{className:"discount__list_item-action action"},c.a.createElement("button",{type:"button",className:"action__buy"},"Add to cart"),c.a.createElement("img",{className:"action__add-to-fav",alt:"favourites",src:o})))})))),T&&T.length>N?c.a.createElement("div",{className:"PhonesCatalog__navigation"},c.a.createElement(O,{sortedPhones:T,activeTab:S,viewQty:N,position:C,setActiveTab:A,setPosition:P})):"")},S=function(){return c.a.createElement("p",null,"Here goes FAVOURITES!!!")},A=function(){return c.a.createElement("p",null,"Here goes shopping cart!!!")},x=function(){return c.a.createElement("p",null,"Sorry this part of our service is still under maintenance :(")},T=(a(42),function(){return c.a.createElement("footer",{className:"Footer"},c.a.createElement("img",{className:"Nav__logo",alt:"logo",src:"/src/Additionals/icons/logo.svg"}),c.a.createElement("ul",{className:"Nav__list"},c.a.createElement("li",{className:"Nav__list_item"},c.a.createElement("a",{className:"Footer__link",href:"https://github.com/vitaliikorol"},"GITHUB")),c.a.createElement("li",{className:"Nav__list_item"},c.a.createElement("a",{className:"Footer__link",href:"/"},"CONTACTS")),c.a.createElement("li",{className:"Nav__list_item"},c.a.createElement("a",{className:"Footer__link",href:"/"},"RIGHTS"))),c.a.createElement("div",{className:"Footer__mover"},c.a.createElement("span",{className:"Footer__mover_title"},"Back to top"),c.a.createElement("img",{className:"Footer__mover_img",alt:"back to top",src:m})))}),F=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,null),c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/",exact:!0,component:P}),c.a.createElement(l.a,{path:"/phones",component:k}),c.a.createElement(l.a,{path:"/tablets",component:x}),c.a.createElement(l.a,{path:"/accessories",component:x}),c.a.createElement(l.a,{path:"/favourites",component:S}),c.a.createElement(l.a,{path:"/cart",component:A})),c.a.createElement(T,null))};s.a.render(c.a.createElement(i.a,{basename:"/react_phone-catalog"},c.a.createElement(F,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.48cec606.chunk.js.map