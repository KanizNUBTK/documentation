(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[296],{5643:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/province",function(){return i(2803)}])},3652:function(e,n,i){"use strict";i.d(n,{Z:function(){return x}});var l=i(5893),a=i(5434),c=i(7568),r=i(4051),s=i.n(r),o=i(2020),t=(i(9843),i(1664)),d=i.n(t),u=i(7294),m=i(1163),h=function(e){var n=e.menu,i=(0,m.useRouter)(),a=(0,m.useRouter)().pathname,r=function(e){var n,i;if((null===e||void 0===e?void 0:e.href)===a||(null===e||void 0===e||null===(n=e.childHrefs)||void 0===n?void 0:n.includes(a)))return!0;var l=null===e||void 0===e||null===(i=e.child)||void 0===i?void 0:i.find((function(e){var n;return e.href===a||(null===e||void 0===e||null===(n=e.childHrefs)||void 0===n?void 0:n.includes(a))}));return!!l},t=(0,u.useState)(),h=t[0],f=t[1];(0,u.useEffect)((function(){var e;f(!h),null===(e=document.querySelectorAll(".metismenu .sub-menu"))||void 0===e||e.forEach((function(e){var n;null===e||void 0===e||null===(n=e.childNodes)||void 0===n||n.forEach((function(n){n.childNodes[0].href===window.location.href&&(e.classList.contains("mm-show")||e.classList.add("mm-show"))}))}))}),[a]);var v=function(){try{var e,n;if(window.innerWidth<1024)null===(e=document.querySelector(".dashboard"))||void 0===e||e.classList.remove("mini"),null===(n=document.querySelector(".dashboard"))||void 0===n||n.classList.remove("mobile")}catch(i){}};!function(){var e=(0,c.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,swalAlert.confirm("Are you want to leave?","Yes, Leave");case 2:e.sent.isConfirmed&&(localStorage.removeItem(""),i.push(""));case 4:case"end":return e.stop()}}),e)})))}();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"sidebar-bg",onClick:v}),(0,l.jsx)("nav",{className:"sidebar text-black",children:(0,l.jsxs)("div",{className:"sidebarBg pb-10",children:[(0,l.jsx)("div",{className:"h-16 border-2 rounded mx-2 border-red-300 flex items-center justify-center site-title",children:(0,l.jsx)(d(),{href:"/",children:(0,l.jsx)("p",{className:"text-[18px] mb-0 font-semibold cursor-pointer",children:"Documentation"})})}),(0,l.jsx)(o.Z,{children:null===n||void 0===n?void 0:n.map((function(e,n){var i,a,c=e.icon||u.Fragment;return(0,l.jsx)("li",{className:"".concat(r(e)?"mm-active active":""),children:(null===e||void 0===e?void 0:e.child)?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("a",{className:"nav-item has-arrow ".concat(r(e)?(null===e||void 0===e||null===(i=e.child)||void 0===i?void 0:i.length)>0?"p-active":"active":""),children:[(0,l.jsx)(c,{className:"inline-block"}),(0,l.jsx)("span",{children:e.label})]}),(0,l.jsxs)("ul",{className:"sub-menu",children:[(0,l.jsx)("li",{className:"label",children:e.label}),null===e||void 0===e||null===(a=e.child)||void 0===a?void 0:a.map((function(e,n){var i=e.icon||u.Fragment;return(0,l.jsx)("li",{children:(0,l.jsx)(d(),{href:e.href||"#!",children:(0,l.jsxs)("a",{onClick:v,className:"nav-item ".concat(r(e)?"active":""),children:[(0,l.jsx)(i,{className:"inline-block mb-0.5"}),(0,l.jsxs)("span",{className:"".concat(n+500),children:[" ",e.label]})]})})},n)}))]})]}):(0,l.jsx)(d(),{href:e.href||"#!",children:(0,l.jsxs)("a",{className:"nav-item ".concat(r(e)?"active":""),onClick:function(){var e;null===(e=document.querySelectorAll(".metismenu .sub-menu"))||void 0===e||e.forEach((function(e){e.classList.remove("mm-show")})),v()},children:[(0,l.jsx)(c,{className:"inline-block mb-0.5"}),(0,l.jsx)("span",{className:"c-tooltip",children:e.label})]})})},n)}))})]})})]})},f=i(9583),v=function(){return(0,l.jsx)("div",{className:"header flex items-center",children:(0,l.jsx)("div",{className:"border-2 rounded border-red-300 h-16 w-20 shadow ml-6 flex justify-center items-center",children:(0,l.jsx)(f.Fm7,{size:22,role:"button",onClick:function(){var e;null===(e=document.querySelector(".dashboard"))||void 0===e||e.classList.toggle(window.innerWidth>=1024?"mini":"mobile")}})})})},b=i(9327),x=function(e){var n=e.children,i=g();return(0,l.jsxs)("div",{className:"dashboard",children:[(0,l.jsx)(h,{menu:i}),(0,l.jsx)(v,{}),(0,l.jsx)("div",{className:"absolute top-0 h-32 w-full "}),(0,l.jsx)("div",{className:"main-content ",children:(0,l.jsx)("div",{className:"w-full z-30",style:{minHeight:400},children:n})})]})},p=[{label:"Instruction",icon:a.$Be,child:[{label:"Installation Process",icon:a.xIf,href:"/instruction/install"},{label:"Backend Installation Process",icon:a.xIf,href:"/instruction/backend"},{label:"Frontend Installation Process",icon:a.xIf,href:"/instruction/frontend"},{label:"Env File Setting",icon:a.rnx,href:"/instruction/setting"}]},{label:"Admin Panel",icon:a.b9P,child:[{label:"Admin Login",icon:b.tcM,href:"/admin/login"},{label:"Admin Profile Setting",icon:b.tcM,href:"/admin/profile"},{label:"User Forms Feilds",icon:b.tcM,href:"/admin/userForms"},{label:"User ",icon:b.tcM,href:"/admin/user"},{label:"Province ",icon:b.tcM,href:"/admin/province"},{label:"Coupon ",icon:b.tcM,href:"/admin/coupon"},{label:"Admin Tax Feilds",icon:b.tcM,href:"/admin/allFiles"},{label:"Role And Permission",icon:b.tcM,href:"/admin/rolePermission"},{label:"Website Setting",icon:b.tcM,href:"/admin/landingPage"}]},{label:"Accountant Panel",icon:a.b9P,child:[{label:"Accountant Login",icon:b.tcM,href:"/accountant/login"},{label:"Accountant ALl Files",icon:b.tcM,href:"/accountant/allTaxFile"}]},{label:"User Panel",icon:a.b9P,child:[{label:"User Login",icon:b.tcM,href:"/user/login"},{label:"User Form Fill Up Process",icon:b.tcM,href:"/user/form"},{label:"My Tax File",icon:b.tcM,href:"/user/mytaxFile"},{label:"File Form A/C ",icon:b.tcM,href:"/user/fileAC"},{label:"Feedback",icon:b.tcM,href:"/user/feebbackUS"}]},{label:"Live Pages",icon:a.b9P,child:[{label:"Home Page",icon:b.tcM,href:"/live/home"},{label:"About Page",icon:b.tcM,href:"/live/about"},{label:"Contact Page",icon:b.tcM,href:"/live/contact"},{label:"Tax Situation Pages",icon:b.tcM,href:"/live/taxSituation"},{label:"More Pages",icon:b.tcM,href:"/live/more"}]}],g=function(){return p}},2803:function(e,n,i){"use strict";i.r(n);var l=i(5893),a=(i(7294),i(3652));n.default=function(){return(0,l.jsx)(a.Z,{children:(0,l.jsxs)("div",{className:"bg-gray-50 h-auto m-6 w-[90%] text-[16px]",children:[(0,l.jsxs)("div",{className:"my-4",children:[(0,l.jsx)("h5",{className:"border-b-[1px] border-black",children:"Province Page"}),(0,l.jsx)("p",{children:"On this page, the admin can view tax information according to his province, he will get detail, edit, and delete options."}),(0,l.jsx)("img",{className:"h-auto w-auto",src:"/images/provicen.png",alt:""})]}),(0,l.jsxs)("div",{className:"my-4",children:[(0,l.jsx)("h5",{className:"border-b-[1px] border-black",children:"Single Province Details Page"}),(0,l.jsx)("p",{children:"On this page, the administrator can view a specific province information."}),(0,l.jsx)("img",{className:"h-auto w-auto",src:"/images/proDetails.png",alt:""})]}),(0,l.jsxs)("div",{className:"my-4",children:[(0,l.jsx)("h5",{className:"border-b-[1px] border-black",children:"Province Add Page"}),(0,l.jsx)("p",{children:"On this page, the administrator can add new province information tax information."}),(0,l.jsx)("img",{className:"h-auto w-auto",src:"/images/proAdd.png",alt:""})]}),(0,l.jsxs)("div",{className:"my-4",children:[(0,l.jsx)("h5",{className:"border-b-[1px] border-black",children:"Province Information Update Page"}),(0,l.jsx)("p",{children:"On this page, the administrator can update  province information tax information."}),(0,l.jsx)("img",{className:"h-auto w-auto",src:"/images/proedit.png",alt:""})]})]})})}}},function(e){e.O(0,[228,445,90,617,774,888,179],(function(){return n=5643,e(e.s=n);var n}));var n=e.O();_N_E=n}]);