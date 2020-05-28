(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{21:function(e,a,t){e.exports=t(43)},26:function(e,a,t){},27:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),s=t(18),l=t.n(s),i=t(6),r=t(2),m=(t(26),t(27),function(){return n.a.createElement("nav",{className:"Nav"},n.a.createElement("div",{className:"Nav__left"},n.a.createElement("img",{className:"Nav__logo",alt:"logo",src:"img/icons/logo.svg"}),n.a.createElement("ul",{className:"Nav__list"},n.a.createElement("li",{className:"Nav__list_item"},n.a.createElement(i.b,{className:"Nav__link",activeClassName:"Nav__link_active",to:"/",exact:!0},"HOME")),n.a.createElement("li",{className:"Nav__list_item"},n.a.createElement(i.b,{className:"Nav__link",activeClassName:"Nav__link_active",to:"/phones"},"PHONES")),n.a.createElement("li",{className:"Nav__list_item"},n.a.createElement(i.b,{className:"Nav__link",activeClassName:"Nav__link_active",to:"/tablets"},"TABLETS")),n.a.createElement("li",{className:"Nav__list_item"},n.a.createElement(i.b,{className:"Nav__link",activeClassName:"Nav__link_active",to:"/accessories"},"ACCESSORIES")))),n.a.createElement("div",{className:"Nav__right"},n.a.createElement(i.b,{to:"/favourites",className:"Nav__right_link"},n.a.createElement("img",{className:"Nav__right_icon",alt:"favourites",src:"img/icons/fav.svg"})),n.a.createElement(i.b,{to:"/cart",className:"Nav__right_link"},n.a.createElement("img",{className:"Nav__right_icon",alt:"cart",src:"img/icons/cart.svg"}))))}),o=(t(33),t(1)),_=t(8),u=t.n(_),d=["https://www.itelmobile.ro/blog/wp-content/uploads/2020/01/Iphone-11-Pro.png","https://www.extremetech.com/wp-content/uploads/2019/09/Apple-All-Together-640x281.jpg","https://fdn.gsmarena.com/imgroot/news/19/12/top-phones-of-2019/-727/gsmarena_001.jpg","https://www.androidheadlines.com/wp-content/uploads/2019/11/Huawei-Y6s-and-Mystery-Leak-01-1.jpg","https://i.gadgets360cdn.com/products/large/1553577168_635_samsunggalaxya70_db.jpg"],E=n.a.createContext(fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json").then((function(e){return e.json()}))),p=(t(34),function(){var e=Object(c.useState)(0),a=Object(o.a)(e,2),t=a[0],s=a[1],l=function(){s((function(e){return t+1040<1040*d.length?e+1040:0}))};Object(c.useEffect)((function(){var e=setInterval(l,7e3);return function(){return clearInterval(e)}})),Object(c.useEffect)((function(){t>1040*(d.length-1)&&s(0)}),[t]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"HomePage__carousel carousel"},n.a.createElement("button",{type:"button",className:"carousel__control carousel__control_left",onClick:function(){s((function(e){return t-1040<0?1040*(d.length-1):e-1040}))}},n.a.createElement("img",{className:"carousel__control-arrow carousel__control-arrowleft",src:"img/icons/arrow.svg",alt:"slide left"})),n.a.createElement("div",{className:"carousel__images"},n.a.createElement("ul",{className:"carousel__list",style:{right:"".concat(t,"px")}},d.map((function(e,a){return n.a.createElement("li",{key:e.slice(10,15)},n.a.createElement("img",{className:"carousel__list_img",src:e,alt:"phone".concat(a)}))})))),n.a.createElement("button",{type:"button",className:"carousel__control carousel__control_right",onClick:l},n.a.createElement("img",{className:"carousel__control-arrow carousel__control-arrowright",src:"img/icons/arrow.svg",alt:"slide right"}))),n.a.createElement("div",{className:"carousel__pointer"},d.map((function(e,a){return n.a.createElement("button",{"aria-label":"touch me",type:"button",key:e.slice(10,15),onClick:function(){return function(e){s(1040*e)}(a)},className:u()(t/1040===a?"carousel__pointer_bar carousel__pointer_bar-active":"carousel__pointer_bar")})}))))}),g=(t(35),t(36),function(e){var a=e.phones,t=e.title,s=Object(c.useState)(0),l=Object(o.a)(s,2),i=l[0],r=l[1];return n.a.createElement("div",{className:"ProductSlider"},n.a.createElement("div",{className:"ProductSlider__navigation"},n.a.createElement("h2",{className:"ProductSlider__navigation_header"},t),n.a.createElement("div",{className:"ProductSlider__navigation_buttons"},n.a.createElement("button",{type:"button",onClick:function(){r((function(e){return i-288<0?288*(a.length-4):e-288}))},className:"ProductSlider__navigation_buttons-left"},n.a.createElement("img",{className:"ProductSlider__navigation_buttons-left-image",alt:"favourites",src:"img/icons/arrow.svg"})),n.a.createElement("button",{type:"button",onClick:function(){r((function(e){return i+288<288*(a.length-3)?e+288:0}))},className:"ProductSlider__navigation_buttons-right"},n.a.createElement("img",{className:"ProductSlider__navigation_buttons-right-image",alt:"favourites",src:"img/icons/arrow.svg"})))),n.a.createElement("div",{className:"discount"},n.a.createElement("ul",{className:"discount__list",style:{right:i}},a.map((function(e){return n.a.createElement("li",{key:e.id,className:"discount__list_item card"},n.a.createElement("img",{className:"card__image",src:e.imageUrl,alt:e.id}),n.a.createElement("p",{className:"card__title"},e.name),n.a.createElement("div",{className:"card__price"},e.discount?n.a.createElement("span",{className:"card__price_new"},"$",e.price*(1-e.discount/100)):"",n.a.createElement("span",{className:u()(e.discount?"card__price_new card__price_old":"card__price_new")},"$",e.price)),n.a.createElement("div",{className:"card__specification_wrapper"},n.a.createElement("div",{className:"card__specification"},n.a.createElement("span",{className:"card__specification_title"},"Screen"),n.a.createElement("span",{className:"card__specification_description"},e.screen)),n.a.createElement("div",{className:"card__specification"},n.a.createElement("span",{className:"card__specification_title"},"Capacity"),n.a.createElement("span",{className:"card__specification_description"},e.capacity)),n.a.createElement("div",{className:"card__specification"},n.a.createElement("span",{className:"card__specification_title"},"RAM"),n.a.createElement("span",{className:"card__specification_description"},e.ram))),n.a.createElement("div",{className:"discount__list_item-action action"},n.a.createElement("button",{type:"button",className:"action__buy"},"Add to cart"),n.a.createElement("img",{className:"action__add-to-fav",alt:"favourites",src:"img/icons/fav.svg"})))})))))}),N=function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],s=a[1],l=Object(c.useContext)(E);return Object(c.useEffect)((function(){l.then((function(e){return e.filter((function(e){return e.discount>0})).sort((function(e,a){return a.price-e.price}))})).then((function(e){return s(e)}))}),[l]),n.a.createElement(g,{phones:t,title:"Hot prices"})},v=(t(37),function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],s=a[1],l=Object(c.useState)([]),i=Object(o.a)(l,2),r=i[0],m=i[1],_=Object(c.useState)([]),u=Object(o.a)(_,2),d=u[0],p=u[1],g=Object(c.useContext)(E);return Object(c.useEffect)((function(){g.then((function(e){return e.filter((function(e){return"phone"===e.type}))})).then((function(e){return s(e)})),g.then((function(e){return e.filter((function(e){return"tablet"===e.type}))})).then((function(e){return m(e)})),g.then((function(e){return e.filter((function(e){return"accessories"===e.type}))})).then((function(e){return p(e)}))}),[g]),n.a.createElement("div",{className:"Category"},n.a.createElement("h1",{className:"Category__title"},"Shop by category"),n.a.createElement("div",{className:"Category__list_wrapper"},n.a.createElement("ul",{className:"Category__list"},n.a.createElement("li",{className:"Category__list_item cli"},n.a.createElement("div",{className:"cli__img_wrapper-mobile cli__img_wrapper"},n.a.createElement("img",{className:"cli__img",alt:"mobile phones",src:"img/categories/mobiles.png"})),n.a.createElement("p",{className:"cli__description"},"Mobile phones"),n.a.createElement("span",{className:"cli__count"},t.length," ","models")),n.a.createElement("li",{className:"Category__list_item cli"},n.a.createElement("div",{className:"cli__img_wrapper-tablet cli__img_wrapper"},n.a.createElement("img",{className:"cli__img",alt:"tablets",src:"img/categories/tablets.png"})),n.a.createElement("p",{className:"cli__description"},"Tablets"),n.a.createElement("span",{className:"cli__count"},r.length," ","models")),n.a.createElement("li",{className:"Category__list_item cli"},n.a.createElement("div",{className:"cli__img_wrapper-accessories cli__img_wrapper"},n.a.createElement("img",{className:"cli__img",alt:"accessories",src:"img/categories/accessories.png"})),n.a.createElement("p",{className:"cli__description"},"Accessories"),n.a.createElement("span",{className:"cli__count"},d.length," ","models")))))}),b=function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],s=a[1],l=Object(c.useContext)(E);return Object(c.useEffect)((function(){l.then((function(e){return e.filter((function(e){return 0===e.discount})).sort((function(e,a){return a.price-e.price}))})).then((function(e){return s(e)}))}),[l]),n.a.createElement(g,{phones:t,title:"Brand new models"})},f=function(){return n.a.createElement("div",{className:"HomePage"},n.a.createElement(p,null),n.a.createElement(N,null),n.a.createElement(v,null),n.a.createElement(b,null))},h=(t(38),t(39),function(e){var a=e.page;return n.a.createElement("div",{className:"breadcrumb"},n.a.createElement(i.b,{to:"/",className:"breadcrumb__link"},n.a.createElement("img",{src:"img/icons/home.svg",alt:"home page",className:"breadcrumb__link_home"})),n.a.createElement("img",{src:"img/icons/arrow.svg",alt:" ",className:"breadcrumb__arrow"}),n.a.createElement("span",{className:"breadcrumb__currentPage"},a))}),k=function(e){var a=e.setSort,t=e.setPosition,c=e.setActiveTab,s=e.setViewQty;return n.a.createElement("div",{className:"PhonesCatalog__sorting"},n.a.createElement("div",{className:"PhonesCatalog__sorting_wrapper"},n.a.createElement("span",{className:"PhonesCatalog__sorting_title"},"Sort by"),n.a.createElement("select",{onChange:function(e){return function(e){a(e.target.value),t(0),c(1)}(e)},id:"sortBy",className:"PhonesCatalog__sorting_option"},n.a.createElement("option",{value:"age"},"Newest"),n.a.createElement("option",{value:"name"},"Alphabetically"),n.a.createElement("option",{value:"price_asc"},"Price Ascending"),n.a.createElement("option",{value:"price_desc"},"Price Descending"))),n.a.createElement("div",{className:"PhonesCatalog__sorting_wrapper"},n.a.createElement("span",{className:"PhonesCatalog__sorting_title"},"Items on page"),n.a.createElement("select",{onChange:function(e){return function(e){s(+e.target.value),t(0),c(1)}(e)},id:"sortQty",className:"PhonesCatalog__sorting_option"},n.a.createElement("option",{value:"4"},"4"),n.a.createElement("option",{value:"8"},"8"),n.a.createElement("option",{value:"16"},"16"))))},y=function(e){var a=e.gadgets;return n.a.createElement(n.a.Fragment,null,a.map((function(e){return n.a.createElement("div",{key:e.id,className:"discount__list_item card"},n.a.createElement("img",{className:"card__image",src:e.imageUrl,alt:e.id}),n.a.createElement("p",{className:"card__title"},e.name),n.a.createElement("div",{className:"card__price"},e.discount?n.a.createElement("span",{className:"card__price_new"},"$",e.price*(1-e.discount/100)):"",n.a.createElement("span",{className:u()(e.discount?"card__price_new card__price_old":"card__price_new")},"$",e.price)),n.a.createElement("div",{className:"card__specification_wrapper"},n.a.createElement("div",{className:"card__specification"},n.a.createElement("span",{className:"card__specification_title"},"Screen"),n.a.createElement("span",{className:"card__specification_description"},e.screen)),n.a.createElement("div",{className:"card__specification"},n.a.createElement("span",{className:"card__specification_title"},"Capacity"),n.a.createElement("span",{className:"card__specification_description"},e.capacity)),n.a.createElement("div",{className:"card__specification"},n.a.createElement("span",{className:"card__specification_title"},"RAM"),n.a.createElement("span",{className:"card__specification_description"},e.ram))),n.a.createElement("div",{className:"discount__list_item-action action"},n.a.createElement("button",{type:"button",className:"action__buy"},"Add to cart"),n.a.createElement("img",{className:"action__add-to-fav",alt:"favourites",src:"img/icons/fav.svg"})))})))},w=t(20),C=function(e){var a=e.sortedPhones,t=e.activeTab,c=e.viewQty,s=e.setActiveTab,l=e.setPosition,i=e.position,r=Math.ceil(a.length/c),m=Object(w.a)(a).splice(0,r);return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{onClick:function(){var e=c/4*547;l(i-e<=0?0:i-e),s(t<=1?1:t-1)},type:"button",className:"PhonesCatalog__navigation_button"},n.a.createElement("img",{src:"img/icons/arrow.svg",alt:"move left",className:"PhonesCatalog__navigation_button-left"})),n.a.createElement("div",null,m.map((function(e,a){return n.a.createElement("button",{type:"button",onClick:function(){return function(e){l(c/4*547*(e-1)),s(e)}(a+1)},key:e.id,className:u()(t===a+1?"PhonesCatalog__navigation_button PhonesCatalog__navigation_tabs PhonesCatalog__navigation_tabs-active":"PhonesCatalog__navigation_button PhonesCatalog__navigation_tabs"),disabled:a+1===t},a+1)}))),n.a.createElement("button",{onClick:function(){var e=Math.ceil((null===a||void 0===a?void 0:a.length)/c)-1,n=c/4*547;l(i+n<=e*n?i+n:i),s(t<=e?t+1:t)},type:"button",className:"PhonesCatalog__navigation_button"},n.a.createElement("img",{src:"img/icons/arrow.svg",alt:"move right",className:"PhonesCatalog__navigation_button-right"})))},j=(t(40),function(e){var a,t=e.pageName,s=e.gadgets,l=Object(c.useState)("age"),i=Object(o.a)(l,2),r=i[0],m=i[1],_=Object(c.useState)(4),u=Object(o.a)(_,2),d=u[0],E=u[1],p=Object(c.useState)(0),g=Object(o.a)(p,2),N=g[0],v=g[1],b=Object(c.useState)(1),f=Object(o.a)(b,2),w=f[0],j=f[1],O="age"===(a=r)?s.sort((function(e,a){return e.age-a.age})):"name"===a?s.sort((function(e,a){return e.name.localeCompare(a.name)})):"price_asc"===a?s.sort((function(e,a){return e.price-a.price})):"price_desc"===a?s.sort((function(e,a){return a.price-e.price})):void 0;return n.a.createElement("div",{className:"PageCreator"},n.a.createElement(h,{page:t}),n.a.createElement("h1",{className:"PhonesCatalog__header"},t),n.a.createElement("p",{className:"PhonesCatalog__qty"},s.length," ","models"),n.a.createElement(k,{setSort:m,setActiveTab:j,setPosition:v,setViewQty:E}),n.a.createElement("div",{className:"PhonesCatalog__items_wrapper",style:{height:"".concat(d/4*547,"px")}},n.a.createElement("div",{className:"PhonesCatalog__items",style:{bottom:N}},O&&n.a.createElement(y,{gadgets:O}))),O&&O.length>d?n.a.createElement("div",{className:"PhonesCatalog__navigation"},n.a.createElement(C,{sortedPhones:O,activeTab:w,viewQty:d,position:N,setActiveTab:j,setPosition:v})):"")}),O=(t(41),function(e){var a=e.pageName;return n.a.createElement("div",{className:"EmptyPage"},n.a.createElement(h,{page:a}),n.a.createElement("div",{className:"bike"},n.a.createElement("div",{className:"bike__header"},n.a.createElement("p",{className:"bike__header_slim"},"Unfortunately, we have no",a," ","yet"),n.a.createElement("p",null,"But our courier is already on its way!")),n.a.createElement("div",{className:"bike__cloud-1"}),n.a.createElement("div",{className:"bike__cloud-2"}),n.a.createElement("div",{className:"bike__cloud-3"}),n.a.createElement("div",{className:"bike__bike"},n.a.createElement("div",{className:"bike__wheel"},n.a.createElement("div",{className:"bike__needle"}),n.a.createElement("div",{className:"bike__needle"}),n.a.createElement("div",{className:"bike__needle"})),n.a.createElement("div",{className:"bike__wheel"},n.a.createElement("div",{className:"bike__needle"}),n.a.createElement("div",{className:"bike__needle"}),n.a.createElement("div",{className:"bike__needle"})),n.a.createElement("div",{className:"bike__down-tube"}),n.a.createElement("div",{className:"bike__tubes"},n.a.createElement("div",{className:"bike__chain"}),n.a.createElement("div",{className:"bike__seat-stays"}),n.a.createElement("div",{className:"bike__chain-stays"}),n.a.createElement("div",{className:"bike__seat-tube"}),n.a.createElement("div",{className:"bike__star"},n.a.createElement("div",{className:"bike__pedal"})),n.a.createElement("div",{className:"bike__seat"})),n.a.createElement("div",{className:"bike__top-tube"}),n.a.createElement("div",{className:"bike__fo"}),n.a.createElement("div",{className:"bike__head-tube"}),n.a.createElement("div",{className:"bike__helm"}),n.a.createElement("div",{className:"bike__lock"})),n.a.createElement("div",{className:"bike__man"},n.a.createElement("div",{className:"bike__arm"},n.a.createElement("div",{className:"bike__forearm"},n.a.createElement("div",{className:"bike__hand"})),n.a.createElement("div",{className:"bike__sleeve"})),n.a.createElement("div",{className:"bike__back-leg"},n.a.createElement("div",{className:"bike__shin"},n.a.createElement("div",{className:"bike__skin"}),n.a.createElement("div",{className:"bike__ked"}))),n.a.createElement("div",{className:"bike__butt"}),n.a.createElement("div",{className:"bike__front-leg"},n.a.createElement("div",{className:"bike__shin"},n.a.createElement("div",{className:"bike__skin"}),n.a.createElement("div",{className:"bike__ked"}))),n.a.createElement("div",{className:"bike__shirt"},n.a.createElement("div",{className:"bike__collar"})),n.a.createElement("div",{className:"bike__arm"},n.a.createElement("div",{className:"bike__forearm"},n.a.createElement("div",{className:"bike__hand"})),n.a.createElement("div",{className:"bike__sleeve"})),n.a.createElement("div",{className:"bike__head"},n.a.createElement("div",{className:"bike__eye"}),n.a.createElement("div",{className:"bike__eye"}),n.a.createElement("div",{className:"bike__whisker"}),n.a.createElement("div",{className:"bike__nose"}),n.a.createElement("div",{className:"bike__month"}),n.a.createElement("div",{className:"bike__whisker"}),n.a.createElement("div",{className:"bike__cap"},n.a.createElement("div",{className:"bike__peak"},n.a.createElement("div",{className:"bike__peak-parts"})))))))}),P=function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],s=a[1],l=Object(c.useContext)(E);return Object(c.useEffect)((function(){l.then((function(e){return e.filter((function(e){return"phone"===e.type}))})).then((function(e){return s(e)}))}),[l]),n.a.createElement(n.a.Fragment,null,t?n.a.createElement(j,{pageName:"Phones",gadgets:t}):n.a.createElement(O,{pageName:"Phones"}))},S=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,{page:"Favourites"}))},A=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,{page:"Shopping cart"}))},F=(t(42),function(){return n.a.createElement("footer",{className:"Footer"},n.a.createElement("img",{className:"Nav__logo",alt:"logo",src:"img/icons/logo.svg"}),n.a.createElement("ul",{className:"Nav__list"},n.a.createElement("li",{className:"Nav__list_item"},n.a.createElement("a",{className:"Footer__link",href:"https://github.com/vitaliikorol"},"GITHUB")),n.a.createElement("li",{className:"Nav__list_item"},n.a.createElement("a",{className:"Footer__link",href:"/"},"CONTACTS")),n.a.createElement("li",{className:"Nav__list_item"},n.a.createElement("a",{className:"Footer__link",href:"/"},"RIGHTS"))),n.a.createElement("div",{className:"Footer__mover"},n.a.createElement("span",{className:"Footer__mover_title"},"Back to top"),n.a.createElement("img",{className:"Footer__mover_img",alt:"back to top",src:"img/icons/arrow.svg"})))}),T=function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],s=a[1],l=Object(c.useContext)(E);return Object(c.useEffect)((function(){l.then((function(e){return e.filter((function(e){return"accessorie"===e.type}))})).then((function(e){return s(e)}))}),[l]),n.a.createElement(n.a.Fragment,null,0!==t.length?n.a.createElement(j,{pageName:"Accessories",gadgets:t}):n.a.createElement(n.a.Fragment,null,n.a.createElement(O,{pageName:"Accessories"})))},x=function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],s=a[1],l=Object(c.useContext)(E);return Object(c.useEffect)((function(){l.then((function(e){return e.filter((function(e){return"tablet"===e.type}))})).then((function(e){return s(e)}))}),[l]),n.a.createElement(n.a.Fragment,null,t?n.a.createElement(j,{pageName:"Tablets",gadgets:t}):n.a.createElement(O,{pageName:"Tablets"}))},H=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(m,null),n.a.createElement(r.c,null,n.a.createElement(r.a,{path:"/",exact:!0,component:f}),n.a.createElement(r.a,{path:"/phones",component:P}),n.a.createElement(r.a,{path:"/tablets",component:x}),n.a.createElement(r.a,{path:"/accessories",component:T}),n.a.createElement(r.a,{path:"/favourites",component:S}),n.a.createElement(r.a,{path:"/cart",component:A})),n.a.createElement(F,null))};l.a.render(n.a.createElement(i.a,{basename:"/react_phone-catalog"},n.a.createElement(H,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.653e63a9.chunk.js.map