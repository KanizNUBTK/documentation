(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8322],{8515:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/password",function(){return l(33)}])},3652:function(e,n,l){"use strict";l.d(n,{Z:function(){return j}});var i=l(5893),a=l(5434),o=l(7568),c=l(4051),r=l.n(c),s=l(2020),t=(l(9843),l(1664)),d=l.n(t),u=l(7294),h=l(1163),m=function(e){var n=e.menu,l=(0,h.useRouter)(),a=(0,h.useRouter)().pathname,c=function(e){var n,l;if((null===e||void 0===e?void 0:e.href)===a||(null===e||void 0===e||null===(n=e.childHrefs)||void 0===n?void 0:n.includes(a)))return!0;var i=null===e||void 0===e||null===(l=e.child)||void 0===l?void 0:l.find((function(e){var n;return e.href===a||(null===e||void 0===e||null===(n=e.childHrefs)||void 0===n?void 0:n.includes(a))}));return!!i},t=(0,u.useState)(),m=t[0],f=t[1];(0,u.useEffect)((function(){var e;f(!m),null===(e=document.querySelectorAll(".metismenu .sub-menu"))||void 0===e||e.forEach((function(e){var n;null===e||void 0===e||null===(n=e.childNodes)||void 0===n||n.forEach((function(n){n.childNodes[0].href===window.location.href&&(e.classList.contains("mm-show")||e.classList.add("mm-show"))}))}))}),[a]);var b=function(){try{var e,n;if(window.innerWidth<1024)null===(e=document.querySelector(".dashboard"))||void 0===e||e.classList.remove("mini"),null===(n=document.querySelector(".dashboard"))||void 0===n||n.classList.remove("mobile")}catch(l){}};!function(){var e=(0,o.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,swalAlert.confirm("Are you want to leave?","Yes, Leave");case 2:e.sent.isConfirmed&&(localStorage.removeItem(""),l.push(""));case 4:case"end":return e.stop()}}),e)})))}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"sidebar-bg",onClick:b}),(0,i.jsx)("nav",{className:"sidebar text-black",children:(0,i.jsxs)("div",{className:"sidebarBg pb-10",children:[(0,i.jsx)("div",{className:"h-16 border-2 rounded mx-2 border-red-300 flex items-center justify-center site-title",children:(0,i.jsx)(d(),{href:"/",children:(0,i.jsx)("p",{className:"text-[18px] mb-0 font-semibold cursor-pointer",children:"Documentation"})})}),(0,i.jsx)(s.Z,{children:null===n||void 0===n?void 0:n.map((function(e,n){var l,a,o=e.icon||u.Fragment;return(0,i.jsx)("li",{className:"".concat(c(e)?"mm-active active":""),children:(null===e||void 0===e?void 0:e.child)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("a",{className:"nav-item has-arrow ".concat(c(e)?(null===e||void 0===e||null===(l=e.child)||void 0===l?void 0:l.length)>0?"p-active":"active":""),children:[(0,i.jsx)(o,{className:"inline-block"}),(0,i.jsx)("span",{children:e.label})]}),(0,i.jsxs)("ul",{className:"sub-menu",children:[(0,i.jsx)("li",{className:"label",children:e.label}),null===e||void 0===e||null===(a=e.child)||void 0===a?void 0:a.map((function(e,n){var l=e.icon||u.Fragment;return(0,i.jsx)("li",{children:(0,i.jsx)(d(),{href:e.href||"#!",children:(0,i.jsxs)("a",{onClick:b,className:"nav-item ".concat(c(e)?"active":""),children:[(0,i.jsx)(l,{className:"inline-block mb-0.5"}),(0,i.jsxs)("span",{className:"".concat(n+500),children:[" ",e.label]})]})})},n)}))]})]}):(0,i.jsx)(d(),{href:e.href||"#!",children:(0,i.jsxs)("a",{className:"nav-item ".concat(c(e)?"active":""),onClick:function(){var e;null===(e=document.querySelectorAll(".metismenu .sub-menu"))||void 0===e||e.forEach((function(e){e.classList.remove("mm-show")})),b()},children:[(0,i.jsx)(o,{className:"inline-block mb-0.5"}),(0,i.jsx)("span",{className:"c-tooltip",children:e.label})]})})},n)}))})]})})]})},f=l(9583),b=function(){return(0,i.jsx)("div",{className:"header flex items-center",children:(0,i.jsx)("div",{className:"border-2 rounded border-red-300 h-16 w-20 shadow ml-6 flex justify-center items-center",children:(0,i.jsx)(f.Fm7,{size:22,role:"button",onClick:function(){var e;null===(e=document.querySelector(".dashboard"))||void 0===e||e.classList.toggle(window.innerWidth>=1024?"mini":"mobile")}})})})},v=l(9327),x=l(471),p=l(1872),j=function(e){var n=e.children,l=w();return(0,i.jsxs)("div",{className:"dashboard",children:[(0,i.jsx)(m,{menu:l}),(0,i.jsx)(b,{}),(0,i.jsx)("div",{className:"absolute top-0 h-32 w-full "}),(0,i.jsx)("div",{className:"main-content ",children:(0,i.jsx)("div",{className:"w-full z-30",style:{minHeight:400},children:n})})]})},g=[{label:"Instruction",icon:a.$Be,child:[{label:"Installation Process",icon:a.xIf,href:"/instruction/install"},{label:"Backend Installation Process",icon:a.xIf,href:"/instruction/backend"},{label:"Frontend Installation Process",icon:a.xIf,href:"/instruction/frontend"},{label:"Env File Setting",icon:a.rnx,href:"/instruction/setting"},{label:"Website Run Time Work Flow",icon:v.S$H,href:"/instruction/run"}]},{label:"Tax Filing Work Flow",icon:p.m_C,href:"/flow/file"},{label:"Admin Panel",icon:a.ZJo,child:[{label:"Admin Login",icon:v.tcM,href:"/admin/login"},{label:"Admin Profile Setting",icon:v.tcM,href:"/admin/profile"},{label:"User Forms Feilds",icon:v.tcM,href:"/admin/userForms"},{label:"User ",icon:v.tcM,href:"/admin/user"},{label:"Province ",icon:v.tcM,href:"/admin/province"},{label:"Coupon ",icon:v.tcM,href:"/admin/coupon"},{label:"Admin Tax Feilds",icon:v.tcM,href:"/admin/allFiles"},{label:"Role And Permission",icon:v.tcM,href:"/admin/rolePermission"},{label:"Website Setting",icon:v.tcM,href:"/admin/landingPage"}]},{label:"Accountant Panel",icon:a.Mgh,child:[{label:"Accountant Login",icon:v.tcM,href:"/accountant/login"},{label:"Accountant ALl Files",icon:v.tcM,href:"/accountant/allTaxFile"}]},{label:"User Panel",icon:a.oG,child:[{label:"User Login",icon:v.tcM,href:"/user/login"},{label:"User Form Fill Up Process",icon:v.tcM,href:"/user/form"},{label:"My Tax File",icon:v.tcM,href:"/user/mytaxFile"},{label:"File Form A/C ",icon:v.tcM,href:"/user/fileAC"},{label:"Feedback",icon:v.tcM,href:"/user/feebbackUS"}]},{label:"Live Pages",icon:x.X0y,child:[{label:"Home Page",icon:v.tcM,href:"/live/home"},{label:"About Page",icon:v.tcM,href:"/live/about"},{label:"Contact Page",icon:v.tcM,href:"/live/contact"},{label:"Tax Situation Pages",icon:v.tcM,href:"/live/taxSituation"},{label:"More Pages",icon:v.tcM,href:"/live/more"}]},{label:"Tawk to",icon:a.M4G,href:"/tawkTo"},{label:"Password Reset",icon:a.EmA,href:"/password"},{label:"Help and Support",icon:a.slX,href:"/help"}],w=function(){return g}},33:function(e,n,l){"use strict";l.r(n);var i=l(5893),a=(l(7294),l(3652));n.default=function(){return(0,i.jsx)(a.Z,{children:(0,i.jsxs)("div",{className:"bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4",children:[(0,i.jsx)("h5",{className:"border-b-[1px] border-black",children:"Password reset option"}),(0,i.jsxs)("div",{className:"m-4",children:[(0,i.jsxs)("p",{children:["If an user forgot the password, click on the ",(0,i.jsx)("span",{className:"text-red-500 font-bold",children:"Forgot Password"})," option. Then you will redirect like the below page. Now enter your registered email ID and click on the button ",(0,i.jsx)("span",{className:"text-red-500 font-bold",children:"Send Password Reset Link"}),".  "]}),(0,i.jsx)("img",{className:"w-auto h-auto my-2",src:"/images/reemail.png",alt:""}),(0,i.jsx)("p",{children:"Now you can change your password here."}),(0,i.jsx)("img",{className:"w-auto h-auto my-2",src:"/images/reset.png",alt:""})]})]})})}}},function(e){e.O(0,[1228,5445,955,994,4090,3617,9774,2888,179],(function(){return n=8515,e(e.s=n);var n}));var n=e.O();_N_E=n}]);