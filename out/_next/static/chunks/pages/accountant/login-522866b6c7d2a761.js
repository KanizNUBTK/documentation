(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1963],{3082:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/accountant/login",function(){return i(151)}])},3652:function(e,n,i){"use strict";i.d(n,{Z:function(){return p}});var l=i(5893),a=i(5434),c=i(7568),s=i(4051),r=i.n(s),t=i(2020),o=(i(9843),i(1664)),d=i.n(o),h=i(7294),u=i(1163),m=function(e){var n=e.menu,i=(0,u.useRouter)(),a=(0,u.useRouter)().pathname,s=function(e){var n,i;if((null===e||void 0===e?void 0:e.href)===a||(null===e||void 0===e||null===(n=e.childHrefs)||void 0===n?void 0:n.includes(a)))return!0;var l=null===e||void 0===e||null===(i=e.child)||void 0===i?void 0:i.find((function(e){var n;return e.href===a||(null===e||void 0===e||null===(n=e.childHrefs)||void 0===n?void 0:n.includes(a))}));return!!l},o=(0,h.useState)(),m=o[0],f=o[1];(0,h.useEffect)((function(){var e;f(!m),null===(e=document.querySelectorAll(".metismenu .sub-menu"))||void 0===e||e.forEach((function(e){var n;null===e||void 0===e||null===(n=e.childNodes)||void 0===n||n.forEach((function(n){n.childNodes[0].href===window.location.href&&(e.classList.contains("mm-show")||e.classList.add("mm-show"))}))}))}),[a]);var b=function(){try{var e,n;if(window.innerWidth<1024)null===(e=document.querySelector(".dashboard"))||void 0===e||e.classList.remove("mini"),null===(n=document.querySelector(".dashboard"))||void 0===n||n.classList.remove("mobile")}catch(i){}};!function(){var e=(0,c.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,swalAlert.confirm("Are you want to leave?","Yes, Leave");case 2:e.sent.isConfirmed&&(localStorage.removeItem(""),i.push(""));case 4:case"end":return e.stop()}}),e)})))}();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"sidebar-bg",onClick:b}),(0,l.jsx)("nav",{className:"sidebar text-black",children:(0,l.jsxs)("div",{className:"sidebarBg pb-10",children:[(0,l.jsx)("div",{className:"h-16 border-2 rounded mx-2 border-red-300 flex items-center justify-center site-title",children:(0,l.jsx)(d(),{href:"/",children:(0,l.jsx)("p",{className:"text-[18px] mb-0 font-semibold cursor-pointer",children:"Documentation"})})}),(0,l.jsx)(t.Z,{children:null===n||void 0===n?void 0:n.map((function(e,n){var i,a,c=e.icon||h.Fragment;return(0,l.jsx)("li",{className:"".concat(s(e)?"mm-active active":""),children:(null===e||void 0===e?void 0:e.child)?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("a",{className:"nav-item has-arrow ".concat(s(e)?(null===e||void 0===e||null===(i=e.child)||void 0===i?void 0:i.length)>0?"p-active":"active":""),children:[(0,l.jsx)(c,{className:"inline-block"}),(0,l.jsx)("span",{children:e.label})]}),(0,l.jsxs)("ul",{className:"sub-menu",children:[(0,l.jsx)("li",{className:"label",children:e.label}),null===e||void 0===e||null===(a=e.child)||void 0===a?void 0:a.map((function(e,n){var i=e.icon||h.Fragment;return(0,l.jsx)("li",{children:(0,l.jsx)(d(),{href:e.href||"#!",children:(0,l.jsxs)("a",{onClick:b,className:"nav-item ".concat(s(e)?"active":""),children:[(0,l.jsx)(i,{className:"inline-block mb-0.5"}),(0,l.jsxs)("span",{className:"".concat(n+500),children:[" ",e.label]})]})})},n)}))]})]}):(0,l.jsx)(d(),{href:e.href||"#!",children:(0,l.jsxs)("a",{className:"nav-item ".concat(s(e)?"active":""),onClick:function(){var e;null===(e=document.querySelectorAll(".metismenu .sub-menu"))||void 0===e||e.forEach((function(e){e.classList.remove("mm-show")})),b()},children:[(0,l.jsx)(c,{className:"inline-block mb-0.5"}),(0,l.jsx)("span",{className:"c-tooltip",children:e.label})]})})},n)}))})]})})]})},f=i(9583),b=function(){return(0,l.jsx)("div",{className:"header flex items-center",children:(0,l.jsx)("div",{className:"border-2 rounded border-red-300 h-16 w-20 shadow ml-6 flex justify-center items-center",children:(0,l.jsx)(f.Fm7,{size:22,role:"button",onClick:function(){var e;null===(e=document.querySelector(".dashboard"))||void 0===e||e.classList.toggle(window.innerWidth>=1024?"mini":"mobile")}})})})},v=i(9327),x=i(471),p=function(e){var n=e.children,i=g();return(0,l.jsxs)("div",{className:"dashboard",children:[(0,l.jsx)(m,{menu:i}),(0,l.jsx)(b,{}),(0,l.jsx)("div",{className:"absolute top-0 h-32 w-full "}),(0,l.jsx)("div",{className:"main-content ",children:(0,l.jsx)("div",{className:"w-full z-30",style:{minHeight:400},children:n})})]})},j=[{label:"Instruction",icon:a.$Be,child:[{label:"Installation Process",icon:a.xIf,href:"/instruction/install"},{label:"Backend Installation Process",icon:a.xIf,href:"/instruction/backend"},{label:"Frontend Installation Process",icon:a.xIf,href:"/instruction/frontend"},{label:"Env File Setting",icon:a.rnx,href:"/instruction/setting"}]},{label:"Admin Panel",icon:a.ZJo,child:[{label:"Admin Login",icon:v.tcM,href:"/admin/login"},{label:"Admin Profile Setting",icon:v.tcM,href:"/admin/profile"},{label:"User Forms Feilds",icon:v.tcM,href:"/admin/userForms"},{label:"User ",icon:v.tcM,href:"/admin/user"},{label:"Province ",icon:v.tcM,href:"/admin/province"},{label:"Coupon ",icon:v.tcM,href:"/admin/coupon"},{label:"Admin Tax Feilds",icon:v.tcM,href:"/admin/allFiles"},{label:"Role And Permission",icon:v.tcM,href:"/admin/rolePermission"},{label:"Website Setting",icon:v.tcM,href:"/admin/landingPage"}]},{label:"Accountant Panel",icon:a.Mgh,child:[{label:"Accountant Login",icon:v.tcM,href:"/accountant/login"},{label:"Accountant ALl Files",icon:v.tcM,href:"/accountant/allTaxFile"}]},{label:"User Panel",icon:a.oG,child:[{label:"User Login",icon:v.tcM,href:"/user/login"},{label:"User Form Fill Up Process",icon:v.tcM,href:"/user/form"},{label:"My Tax File",icon:v.tcM,href:"/user/mytaxFile"},{label:"File Form A/C ",icon:v.tcM,href:"/user/fileAC"},{label:"Feedback",icon:v.tcM,href:"/user/feebbackUS"}]},{label:"Live Pages",icon:x.X0y,child:[{label:"Home Page",icon:v.tcM,href:"/live/home"},{label:"About Page",icon:v.tcM,href:"/live/about"},{label:"Contact Page",icon:v.tcM,href:"/live/contact"},{label:"Tax Situation Pages",icon:v.tcM,href:"/live/taxSituation"},{label:"More Pages",icon:v.tcM,href:"/live/more"}]},{label:"Tawk to",icon:a.M4G,href:"/tawkTo"},{label:"Help and Support",icon:a.slX,href:"/help"}],g=function(){return j}},151:function(e,n,i){"use strict";i.r(n);var l=i(5893),a=(i(7294),i(3652));n.default=function(){return(0,l.jsx)(a.Z,{children:(0,l.jsxs)("div",{className:"bg-gray-50 h-auto m-6 w-[90%] text-[16px]",children:[(0,l.jsxs)("div",{className:"my-4",children:[(0,l.jsx)("h5",{className:"border-b-[1px] border-black",children:"Accountant Sign Up"}),(0,l.jsxs)("div",{className:"m-4",children:[(0,l.jsx)("p",{children:"A new Accountant can register his account use this form, but at first s/he need to check mark accountant button, then fill up the form."}),(0,l.jsx)("img",{className:"h-96",src:"/images/signUp.png",alt:""})]})]}),(0,l.jsxs)("div",{className:"my-4",children:[(0,l.jsx)("h5",{className:"border-b-[1px] border-black",children:"Accountant Login"}),(0,l.jsxs)("div",{className:"m-4",children:[(0,l.jsx)("p",{children:"After the admin confirms  the accountant of this company, the administrator will give the login email and password to the accountant, through which the accountant can log in to his dashboard."}),(0,l.jsx)("img",{className:"h-96",src:"/images/login.png",alt:""})]})]}),(0,l.jsxs)("div",{className:"my-4",children:[(0,l.jsx)("h5",{className:"border-b-[1px] border-black",children:"Accountant dashboard"}),(0,l.jsxs)("div",{className:"m-4",children:[(0,l.jsx)("p",{children:"After Accountant login complete s/he can see his personal dashboard"}),(0,l.jsx)("img",{src:"/images/acdash.png",alt:""})]})]}),(0,l.jsx)("div",{className:"border-2 border-red-300 my-4 h-20 text-[18px] font-medium flex items-center justify-center",children:(0,l.jsxs)("p",{className:"mb-0",children:[(0,l.jsx)("span",{className:"text-[20px] text-red-500",children:"*"}),"All users, accountants, and admins have the same type of profile page. they all can fill up their personal profile informationon"]})})]})})}}},function(e){e.O(0,[1228,5445,955,4090,3617,9774,2888,179],(function(){return n=3082,e(e.s=n);var n}));var n=e.O();_N_E=n}]);