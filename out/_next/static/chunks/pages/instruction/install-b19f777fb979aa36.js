(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8745],{7453:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/instruction/install",function(){return l(3856)}])},3652:function(e,n,l){"use strict";l.d(n,{Z:function(){return p}});var i=l(5893),s=l(5434),t=l(7568),a=l(4051),c=l.n(a),r=l(2020),o=(l(9843),l(1664)),d=l.n(o),u=l(7294),h=l(1163),m=function(e){var n=e.menu,l=(0,h.useRouter)(),s=(0,h.useRouter)().pathname,a=function(e){var n,l;if((null===e||void 0===e?void 0:e.href)===s||(null===e||void 0===e||null===(n=e.childHrefs)||void 0===n?void 0:n.includes(s)))return!0;var i=null===e||void 0===e||null===(l=e.child)||void 0===l?void 0:l.find((function(e){var n;return e.href===s||(null===e||void 0===e||null===(n=e.childHrefs)||void 0===n?void 0:n.includes(s))}));return!!i},o=(0,u.useState)(),m=o[0],f=o[1];(0,u.useEffect)((function(){var e;f(!m),null===(e=document.querySelectorAll(".metismenu .sub-menu"))||void 0===e||e.forEach((function(e){var n;null===e||void 0===e||null===(n=e.childNodes)||void 0===n||n.forEach((function(n){n.childNodes[0].href===window.location.href&&(e.classList.contains("mm-show")||e.classList.add("mm-show"))}))}))}),[s]);var x=function(){try{var e,n;if(window.innerWidth<1024)null===(e=document.querySelector(".dashboard"))||void 0===e||e.classList.remove("mini"),null===(n=document.querySelector(".dashboard"))||void 0===n||n.classList.remove("mobile")}catch(l){}};!function(){var e=(0,t.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,swalAlert.confirm("Are you want to leave?","Yes, Leave");case 2:e.sent.isConfirmed&&(localStorage.removeItem(""),l.push(""));case 4:case"end":return e.stop()}}),e)})))}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"sidebar-bg",onClick:x}),(0,i.jsx)("nav",{className:"sidebar text-black",children:(0,i.jsxs)("div",{className:"sidebarBg pb-10",children:[(0,i.jsx)("div",{className:"h-16 border-2 rounded mx-2 border-red-300 flex items-center justify-center site-title",children:(0,i.jsx)(d(),{href:"/",children:(0,i.jsx)("p",{className:"text-[18px] mb-0 font-semibold cursor-pointer",children:"Documentation"})})}),(0,i.jsx)(r.Z,{children:null===n||void 0===n?void 0:n.map((function(e,n){var l,s,t=e.icon||u.Fragment;return(0,i.jsx)("li",{className:"".concat(a(e)?"mm-active active":""),children:(null===e||void 0===e?void 0:e.child)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("a",{className:"nav-item has-arrow ".concat(a(e)?(null===e||void 0===e||null===(l=e.child)||void 0===l?void 0:l.length)>0?"p-active":"active":""),children:[(0,i.jsx)(t,{className:"inline-block"}),(0,i.jsx)("span",{children:e.label})]}),(0,i.jsxs)("ul",{className:"sub-menu",children:[(0,i.jsx)("li",{className:"label",children:e.label}),null===e||void 0===e||null===(s=e.child)||void 0===s?void 0:s.map((function(e,n){var l=e.icon||u.Fragment;return(0,i.jsx)("li",{children:(0,i.jsx)(d(),{href:e.href||"#!",children:(0,i.jsxs)("a",{onClick:x,className:"nav-item ".concat(a(e)?"active":""),children:[(0,i.jsx)(l,{className:"inline-block mb-0.5"}),(0,i.jsxs)("span",{className:"".concat(n+500),children:[" ",e.label]})]})})},n)}))]})]}):(0,i.jsx)(d(),{href:e.href||"#!",children:(0,i.jsxs)("a",{className:"nav-item ".concat(a(e)?"active":""),onClick:function(){var e;null===(e=document.querySelectorAll(".metismenu .sub-menu"))||void 0===e||e.forEach((function(e){e.classList.remove("mm-show")})),x()},children:[(0,i.jsx)(t,{className:"inline-block mb-0.5"}),(0,i.jsx)("span",{className:"c-tooltip",children:e.label})]})})},n)}))})]})})]})},f=l(9583),x=function(){return(0,i.jsx)("div",{className:"header flex items-center",children:(0,i.jsx)("div",{className:"border-2 rounded border-red-300 h-16 w-20 shadow ml-6 flex justify-center items-center",children:(0,i.jsx)(f.Fm7,{size:22,role:"button",onClick:function(){var e;null===(e=document.querySelector(".dashboard"))||void 0===e||e.classList.toggle(window.innerWidth>=1024?"mini":"mobile")}})})})},b=l(9327),v=l(471),j=l(1872),p=function(e){var n=e.children,l=N();return(0,i.jsxs)("div",{className:"dashboard",children:[(0,i.jsx)(m,{menu:l}),(0,i.jsx)(x,{}),(0,i.jsx)("div",{className:"absolute top-0 h-32 w-full "}),(0,i.jsx)("div",{className:"main-content ",children:(0,i.jsx)("div",{className:"w-full z-30",style:{minHeight:400},children:n})})]})},g=[{label:"Instruction",icon:s.$Be,child:[{label:"Installation Process",icon:s.xIf,href:"/instruction/install"},{label:"Backend Installation Process",icon:s.xIf,href:"/instruction/backend"},{label:"Frontend Installation Process",icon:s.xIf,href:"/instruction/frontend"},{label:"Env File Setting",icon:s.rnx,href:"/instruction/setting"},{label:"Website Run Time Work Flow",icon:b.S$H,href:"/instruction/run"}]},{label:"Tax Filing Work Flow",icon:j.m_C,href:"/flow/file"},{label:"Admin Panel",icon:s.ZJo,child:[{label:"Admin Login",icon:b.tcM,href:"/admin/login"},{label:"Admin Profile Setting",icon:b.tcM,href:"/admin/profile"},{label:"User Forms Feilds",icon:b.tcM,href:"/admin/userForms"},{label:"User ",icon:b.tcM,href:"/admin/user"},{label:"Province ",icon:b.tcM,href:"/admin/province"},{label:"Coupon ",icon:b.tcM,href:"/admin/coupon"},{label:"Admin Tax Feilds",icon:b.tcM,href:"/admin/allFiles"},{label:"Role And Permission",icon:b.tcM,href:"/admin/rolePermission"},{label:"Website Setting",icon:b.tcM,href:"/admin/landingPage"}]},{label:"Accountant Panel",icon:s.Mgh,child:[{label:"Accountant Login",icon:b.tcM,href:"/accountant/login"},{label:"Accountant ALl Files",icon:b.tcM,href:"/accountant/allTaxFile"}]},{label:"User Panel",icon:s.oG,child:[{label:"User Login",icon:b.tcM,href:"/user/login"},{label:"User Form Fill Up Process",icon:b.tcM,href:"/user/form"},{label:"My Tax File",icon:b.tcM,href:"/user/mytaxFile"},{label:"File Form A/C ",icon:b.tcM,href:"/user/fileAC"},{label:"Feedback",icon:b.tcM,href:"/user/feebbackUS"}]},{label:"Live Pages",icon:v.X0y,child:[{label:"Home Page",icon:b.tcM,href:"/live/home"},{label:"About Page",icon:b.tcM,href:"/live/about"},{label:"Contact Page",icon:b.tcM,href:"/live/contact"},{label:"Tax Situation Pages",icon:b.tcM,href:"/live/taxSituation"},{label:"More Pages",icon:b.tcM,href:"/live/more"}]},{label:"Tawk to",icon:s.M4G,href:"/tawkTo"},{label:"Password Reset",icon:s.EmA,href:"/password"},{label:"Help and Support",icon:s.slX,href:"/help"}],N=function(){return g}},3856:function(e,n,l){"use strict";l.r(n);var i=l(5893),s=l(1664),t=l.n(s),a=(l(7294),l(3652));n.default=function(){return(0,i.jsx)(a.Z,{children:(0,i.jsxs)("div",{className:"bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-2",children:[(0,i.jsx)("h4",{className:"text-center",children:"Installing Process"}),(0,i.jsxs)("div",{className:"my-4",children:[(0,i.jsx)("h5",{className:"border-b-[1px] border-black pb-2",children:"Install"}),(0,i.jsxs)("div",{className:"m-4",children:[(0,i.jsx)("h6",{className:"text-red-600 border-b-[1px] border-red-600 text-center pb-2",children:"** To setup this project, you need to make sure that your hosting server supports node.js **"}),(0,i.jsxs)("ul",{className:"list-disc",children:[(0,i.jsxs)("li",{className:"my-4",children:["First, You have to download the file, you will get a zip file.",(0,i.jsx)("img",{className:"h-[500px] w-auto mt-4",src:"/images/i1.png",alt:""})]}),(0,i.jsxs)("li",{className:"my-4",children:["Then, you have to ",(0,i.jsx)("span",{className:"text-[20px] font-bold text-red-500",children:"Extract"})," the file.",(0,i.jsx)("img",{className:"h-[500px] w-auto mt-4",src:"/images/i2.png",alt:""})]}),(0,i.jsxs)("li",{className:"my-4",children:["You will find two files ",(0,i.jsx)("span",{className:"text-[20px] font-bold text-red-500",children:"1. taxstick-backend"})," and ",(0,i.jsx)("span",{className:"text-[20px] font-bold text-red-500",children:"2. taxstick-frondend"}),".",(0,i.jsx)("img",{className:"h-[500px] w-auto mt-4",src:"/images/i3.png",alt:""})]}),(0,i.jsx)("p",{className:"text-center",children:"Now you need to follow the below instructions"}),(0,i.jsxs)("div",{className:"flex justify-center items-center gap-4",children:[(0,i.jsx)("div",{className:"h-10 w-72 flex justify-center items-center rounded bg-[#D22F25]",children:(0,i.jsx)(t(),{href:"/instruction/backend",children:(0,i.jsx)("a",{className:"text-white text-lg font-bold",children:"Backend Installing Process"})})}),(0,i.jsx)("div",{className:"h-10 w-72 flex justify-center items-center rounded bg-[#D22F25]",children:(0,i.jsx)(t(),{href:"/instruction/frontend",children:(0,i.jsx)("a",{className:"text-white text-lg font-bold",children:"Frontend Installing Process"})})})]}),(0,i.jsx)("p",{className:"text-right text-red-500 font-medium m-6",children:"***If you face any kind of installation problem, contact our support***"})]})]})]})]})})}}},function(e){e.O(0,[1228,5445,955,994,4090,3617,9774,2888,179],(function(){return n=7453,e(e.s=n);var n}));var n=e.O();_N_E=n}]);