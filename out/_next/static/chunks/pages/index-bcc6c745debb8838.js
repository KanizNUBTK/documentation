(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{5557:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(3678)}])},3652:function(e,n,i){"use strict";i.d(n,{Z:function(){return p}});var l=i(5893),a=i(5434),c=i(7568),o=i(4051),t=i.n(o),s=i(2020),r=(i(9843),i(1664)),d=i.n(r),u=i(7294),m=i(1163),h=function(e){var n=e.menu,i=(0,m.useRouter)(),a=(0,m.useRouter)().pathname,o=function(e){var n,i;if((null===e||void 0===e?void 0:e.href)===a||(null===e||void 0===e||null===(n=e.childHrefs)||void 0===n?void 0:n.includes(a)))return!0;var l=null===e||void 0===e||null===(i=e.child)||void 0===i?void 0:i.find((function(e){var n;return e.href===a||(null===e||void 0===e||null===(n=e.childHrefs)||void 0===n?void 0:n.includes(a))}));return!!l},r=(0,u.useState)(),h=r[0],f=r[1];(0,u.useEffect)((function(){var e;f(!h),null===(e=document.querySelectorAll(".metismenu .sub-menu"))||void 0===e||e.forEach((function(e){var n;null===e||void 0===e||null===(n=e.childNodes)||void 0===n||n.forEach((function(n){n.childNodes[0].href===window.location.href&&(e.classList.contains("mm-show")||e.classList.add("mm-show"))}))}))}),[a]);var b=function(){try{var e,n;if(window.innerWidth<1024)null===(e=document.querySelector(".dashboard"))||void 0===e||e.classList.remove("mini"),null===(n=document.querySelector(".dashboard"))||void 0===n||n.classList.remove("mobile")}catch(i){}};!function(){var e=(0,c.Z)(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,swalAlert.confirm("Are you want to leave?","Yes, Leave");case 2:e.sent.isConfirmed&&(localStorage.removeItem(""),i.push(""));case 4:case"end":return e.stop()}}),e)})))}();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"sidebar-bg",onClick:b}),(0,l.jsx)("nav",{className:"sidebar text-black",children:(0,l.jsxs)("div",{className:"sidebarBg pb-10",children:[(0,l.jsx)("div",{className:"h-16 border-2 rounded mx-2 border-red-300 flex items-center justify-center site-title",children:(0,l.jsx)(d(),{href:"/",children:(0,l.jsx)("p",{className:"text-[18px] mb-0 font-semibold cursor-pointer",children:"Documentation"})})}),(0,l.jsx)(s.Z,{children:null===n||void 0===n?void 0:n.map((function(e,n){var i,a,c=e.icon||u.Fragment;return(0,l.jsx)("li",{className:"".concat(o(e)?"mm-active active":""),children:(null===e||void 0===e?void 0:e.child)?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("a",{className:"nav-item has-arrow ".concat(o(e)?(null===e||void 0===e||null===(i=e.child)||void 0===i?void 0:i.length)>0?"p-active":"active":""),children:[(0,l.jsx)(c,{className:"inline-block"}),(0,l.jsx)("span",{children:e.label})]}),(0,l.jsxs)("ul",{className:"sub-menu",children:[(0,l.jsx)("li",{className:"label",children:e.label}),null===e||void 0===e||null===(a=e.child)||void 0===a?void 0:a.map((function(e,n){var i=e.icon||u.Fragment;return(0,l.jsx)("li",{children:(0,l.jsx)(d(),{href:e.href||"#!",children:(0,l.jsxs)("a",{onClick:b,className:"nav-item ".concat(o(e)?"active":""),children:[(0,l.jsx)(i,{className:"inline-block mb-0.5"}),(0,l.jsxs)("span",{className:"".concat(n+500),children:[" ",e.label]})]})})},n)}))]})]}):(0,l.jsx)(d(),{href:e.href||"#!",children:(0,l.jsxs)("a",{className:"nav-item ".concat(o(e)?"active":""),onClick:function(){var e;null===(e=document.querySelectorAll(".metismenu .sub-menu"))||void 0===e||e.forEach((function(e){e.classList.remove("mm-show")})),b()},children:[(0,l.jsx)(c,{className:"inline-block mb-0.5"}),(0,l.jsx)("span",{className:"c-tooltip",children:e.label})]})})},n)}))})]})})]})},f=i(9583),b=function(){return(0,l.jsx)("div",{className:"header flex items-center",children:(0,l.jsx)("div",{className:"border-2 rounded border-red-300 h-16 w-20 shadow ml-6 flex justify-center items-center",children:(0,l.jsx)(f.Fm7,{size:22,role:"button",onClick:function(){var e;null===(e=document.querySelector(".dashboard"))||void 0===e||e.classList.toggle(window.innerWidth>=1024?"mini":"mobile")}})})})},v=i(9327),x=i(471),j=i(1872),p=function(e){var n=e.children,i=g();return(0,l.jsxs)("div",{className:"dashboard",children:[(0,l.jsx)(h,{menu:i}),(0,l.jsx)(b,{}),(0,l.jsx)("div",{className:"absolute top-0 h-32 w-full "}),(0,l.jsx)("div",{className:"main-content ",children:(0,l.jsx)("div",{className:"w-full z-30",style:{minHeight:400},children:n})})]})},w=[{label:"Instruction",icon:a.$Be,child:[{label:"Installation Process",icon:a.xIf,href:"/instruction/install"},{label:"Backend Installation Process",icon:a.xIf,href:"/instruction/backend"},{label:"Frontend Installation Process",icon:a.xIf,href:"/instruction/frontend"},{label:"Env File Setting",icon:a.rnx,href:"/instruction/setting"},{label:"Website Run Time Work Flow",icon:v.S$H,href:"/instruction/run"}]},{label:"Tax Filing Work Flow",icon:j.m_C,href:"/flow/file"},{label:"Admin Panel",icon:a.ZJo,child:[{label:"Admin Login",icon:v.tcM,href:"/admin/login"},{label:"Admin Profile Setting",icon:v.tcM,href:"/admin/profile"},{label:"User Forms Feilds",icon:v.tcM,href:"/admin/userForms"},{label:"User ",icon:v.tcM,href:"/admin/user"},{label:"Province ",icon:v.tcM,href:"/admin/province"},{label:"Coupon ",icon:v.tcM,href:"/admin/coupon"},{label:"Admin Tax Feilds",icon:v.tcM,href:"/admin/allFiles"},{label:"Role And Permission",icon:v.tcM,href:"/admin/rolePermission"},{label:"Website Setting",icon:v.tcM,href:"/admin/landingPage"}]},{label:"Accountant Panel",icon:a.Mgh,child:[{label:"Accountant Login",icon:v.tcM,href:"/accountant/login"},{label:"Accountant ALl Files",icon:v.tcM,href:"/accountant/allTaxFile"}]},{label:"User Panel",icon:a.oG,child:[{label:"User Login",icon:v.tcM,href:"/user/login"},{label:"User Form Fill Up Process",icon:v.tcM,href:"/user/form"},{label:"My Tax File",icon:v.tcM,href:"/user/mytaxFile"},{label:"File Form A/C ",icon:v.tcM,href:"/user/fileAC"},{label:"Feedback",icon:v.tcM,href:"/user/feebbackUS"}]},{label:"Live Pages",icon:x.X0y,child:[{label:"Home Page",icon:v.tcM,href:"/live/home"},{label:"About Page",icon:v.tcM,href:"/live/about"},{label:"Contact Page",icon:v.tcM,href:"/live/contact"},{label:"Tax Situation Pages",icon:v.tcM,href:"/live/taxSituation"},{label:"More Pages",icon:v.tcM,href:"/live/more"}]},{label:"Tawk to",icon:a.M4G,href:"/tawkTo"},{label:"Password Reset",icon:a.EmA,href:"/password"},{label:"Help and Support",icon:a.slX,href:"/help"}],g=function(){return w}},3678:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return c}});var l=i(5893),a=i(3652);function c(){return(0,l.jsx)(a.Z,{children:(0,l.jsx)("div",{className:"flex justify-center items-center h-[400px] ",children:(0,l.jsxs)("div",{className:"shadow w-[70%] p-10",children:[(0,l.jsx)("h3",{className:"text-[24px] mb-4 font-bold text-center border-b-2 border-black pb-4",children:"Welcome To Taxstick"}),(0,l.jsx)("p",{className:"text-[18px] text-justify",children:"Taxstick is a web-based solution that provides a complete online-based tax management system. It provides a full company website with admin, account, and user panels where each individual can manage their tax file management easily. Any organization involved in tax management may use the solution in accordance with their demands because it is entirely dynamic as well as easy to customize."})]})})})}}},function(e){e.O(0,[1228,5445,955,994,4090,3617,9774,2888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);