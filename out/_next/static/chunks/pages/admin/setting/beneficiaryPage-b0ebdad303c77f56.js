(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6796],{895:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/setting/beneficiaryPage",function(){return n(9723)}])},3652:function(e,i,n){"use strict";n.d(i,{Z:function(){return g}});var l=n(5893),s=n(5434),a=n(7568),c=n(4051),o=n.n(c),r=n(2020),t=(n(9843),n(1664)),d=n.n(t),u=n(7294),h=n(1163),m=function(e){var i=e.menu,n=(0,h.useRouter)(),s=(0,h.useRouter)().pathname,c=function(e){var i,n;if((null===e||void 0===e?void 0:e.href)===s||(null===e||void 0===e||null===(i=e.childHrefs)||void 0===i?void 0:i.includes(s)))return!0;var l=null===e||void 0===e||null===(n=e.child)||void 0===n?void 0:n.find((function(e){var i;return e.href===s||(null===e||void 0===e||null===(i=e.childHrefs)||void 0===i?void 0:i.includes(s))}));return!!l},t=(0,u.useState)(),m=t[0],f=t[1];(0,u.useEffect)((function(){var e;f(!m),null===(e=document.querySelectorAll(".metismenu .sub-menu"))||void 0===e||e.forEach((function(e){var i;null===e||void 0===e||null===(i=e.childNodes)||void 0===i||i.forEach((function(i){i.childNodes[0].href===window.location.href&&(e.classList.contains("mm-show")||e.classList.add("mm-show"))}))}))}),[s]);var b=function(){try{var e,i;if(window.innerWidth<1024)null===(e=document.querySelector(".dashboard"))||void 0===e||e.classList.remove("mini"),null===(i=document.querySelector(".dashboard"))||void 0===i||i.classList.remove("mobile")}catch(n){}};!function(){var e=(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,swalAlert.confirm("Are you want to leave?","Yes, Leave");case 2:e.sent.isConfirmed&&(localStorage.removeItem(""),n.push(""));case 4:case"end":return e.stop()}}),e)})))}();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"sidebar-bg",onClick:b}),(0,l.jsx)("nav",{className:"sidebar text-black",children:(0,l.jsxs)("div",{className:"sidebarBg pb-10",children:[(0,l.jsx)("div",{className:"h-16 border-2 rounded mx-2 border-red-300 flex items-center justify-center site-title",children:(0,l.jsx)(d(),{href:"/",children:(0,l.jsx)("p",{className:"text-[18px] mb-0 font-semibold cursor-pointer",children:"Documentation"})})}),(0,l.jsx)(r.Z,{children:null===i||void 0===i?void 0:i.map((function(e,i){var n,s,a=e.icon||u.Fragment;return(0,l.jsx)("li",{className:"".concat(c(e)?"mm-active active":""),children:(null===e||void 0===e?void 0:e.child)?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("a",{className:"nav-item has-arrow ".concat(c(e)?(null===e||void 0===e||null===(n=e.child)||void 0===n?void 0:n.length)>0?"p-active":"active":""),children:[(0,l.jsx)(a,{className:"inline-block"}),(0,l.jsx)("span",{children:e.label})]}),(0,l.jsxs)("ul",{className:"sub-menu",children:[(0,l.jsx)("li",{className:"label",children:e.label}),null===e||void 0===e||null===(s=e.child)||void 0===s?void 0:s.map((function(e,i){var n=e.icon||u.Fragment;return(0,l.jsx)("li",{children:(0,l.jsx)(d(),{href:e.href||"#!",children:(0,l.jsxs)("a",{onClick:b,className:"nav-item ".concat(c(e)?"active":""),children:[(0,l.jsx)(n,{className:"inline-block mb-0.5"}),(0,l.jsxs)("span",{className:"".concat(i+500),children:[" ",e.label]})]})})},i)}))]})]}):(0,l.jsx)(d(),{href:e.href||"#!",children:(0,l.jsxs)("a",{className:"nav-item ".concat(c(e)?"active":""),onClick:function(){var e;null===(e=document.querySelectorAll(".metismenu .sub-menu"))||void 0===e||e.forEach((function(e){e.classList.remove("mm-show")})),b()},children:[(0,l.jsx)(a,{className:"inline-block mb-0.5"}),(0,l.jsx)("span",{className:"c-tooltip",children:e.label})]})})},i)}))})]})})]})},f=n(9583),b=function(){return(0,l.jsx)("div",{className:"header flex items-center",children:(0,l.jsx)("div",{className:"border-2 rounded border-red-300 h-16 w-20 shadow ml-6 flex justify-center items-center",children:(0,l.jsx)(f.Fm7,{size:22,role:"button",onClick:function(){var e;null===(e=document.querySelector(".dashboard"))||void 0===e||e.classList.toggle(window.innerWidth>=1024?"mini":"mobile")}})})})},v=n(9327),x=n(471),j=n(1872),g=function(e){var i=e.children,n=w();return(0,l.jsxs)("div",{className:"dashboard",children:[(0,l.jsx)(m,{menu:n}),(0,l.jsx)(b,{}),(0,l.jsx)("div",{className:"absolute top-0 h-32 w-full "}),(0,l.jsx)("div",{className:"main-content ",children:(0,l.jsx)("div",{className:"w-full z-30",style:{minHeight:400},children:i})})]})},p=[{label:"Instruction",icon:s.$Be,child:[{label:"Installation Process",icon:s.xIf,href:"/instruction/install"},{label:"Backend Installation Process",icon:s.xIf,href:"/instruction/backend"},{label:"Frontend Installation Process",icon:s.xIf,href:"/instruction/frontend"},{label:"Env File Setting",icon:s.rnx,href:"/instruction/setting"},{label:"Website Run Time Work Flow",icon:v.S$H,href:"/instruction/run"}]},{label:"Tax Filing Work Flow",icon:j.m_C,href:"/flow/file"},{label:"Admin Panel",icon:s.ZJo,child:[{label:"Admin Login",icon:v.tcM,href:"/admin/login"},{label:"Admin Profile Setting",icon:v.tcM,href:"/admin/profile"},{label:"User Forms Feilds",icon:v.tcM,href:"/admin/userForms"},{label:"User ",icon:v.tcM,href:"/admin/user"},{label:"Province ",icon:v.tcM,href:"/admin/province"},{label:"Coupon ",icon:v.tcM,href:"/admin/coupon"},{label:"Admin Tax Feilds",icon:v.tcM,href:"/admin/allFiles"},{label:"Role And Permission",icon:v.tcM,href:"/admin/rolePermission"},{label:"Website Setting",icon:v.tcM,href:"/admin/landingPage"}]},{label:"Accountant Panel",icon:s.Mgh,child:[{label:"Accountant Login",icon:v.tcM,href:"/accountant/login"},{label:"Accountant ALl Files",icon:v.tcM,href:"/accountant/allTaxFile"}]},{label:"User Panel",icon:s.oG,child:[{label:"User Login",icon:v.tcM,href:"/user/login"},{label:"User Form Fill Up Process",icon:v.tcM,href:"/user/form"},{label:"My Tax File",icon:v.tcM,href:"/user/mytaxFile"},{label:"File Form A/C ",icon:v.tcM,href:"/user/fileAC"},{label:"Feedback",icon:v.tcM,href:"/user/feebbackUS"}]},{label:"Live Pages",icon:x.X0y,child:[{label:"Home Page",icon:v.tcM,href:"/live/home"},{label:"About Page",icon:v.tcM,href:"/live/about"},{label:"Contact Page",icon:v.tcM,href:"/live/contact"},{label:"Tax Situation Pages",icon:v.tcM,href:"/live/taxSituation"},{label:"More Pages",icon:v.tcM,href:"/live/more"}]},{label:"Tawk to",icon:s.M4G,href:"/tawkTo"},{label:"Password Reset",icon:s.EmA,href:"/password"},{label:"Help and Support",icon:s.slX,href:"/help"}],w=function(){return p}},9723:function(e,i,n){"use strict";n.r(i);var l=n(5893),s=n(1664),a=n.n(s),c=(n(7294),n(3652));i.default=function(){return(0,l.jsx)(c.Z,{children:(0,l.jsxs)("div",{className:"bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4",children:[(0,l.jsxs)("div",{className:"flex gap-2",children:[(0,l.jsx)(a(),{href:"/admin/landingPage/",children:(0,l.jsx)("a",{children:"Website Setting"})})," / ",(0,l.jsx)("p",{children:"Tax Beneficiary"})]}),(0,l.jsx)("h5",{className:"border-b-[1px] border-black capitalize",children:"Website tax beneficiary page information"}),(0,l.jsxs)("div",{className:"m-4",children:[(0,l.jsx)("p",{children:"On this page, it takes specific user role-based information, this information will be displayed on the tax beneficiary page on the live website."}),(0,l.jsx)("img",{className:"h-auto w-auto",src:"/images/situation.png",alt:""})]}),(0,l.jsxs)("div",{className:"m-4",children:[(0,l.jsx)("p",{children:"You must first select the role name to add or update user role-based information. After this, you can add information. Here you can see only the roles that you have previously defined."}),(0,l.jsx)("img",{className:"h-auto w-auto",src:"/images/bene.png",alt:""})]}),(0,l.jsxs)("div",{className:"m-4",children:[(0,l.jsx)("p",{className:"mb-0",children:"Short Description of the form:"}),(0,l.jsxs)("ul",{className:"list-disc",children:[(0,l.jsx)("li",{children:"Hero section tittle: You must give a role specification title"}),(0,l.jsx)("li",{children:"Hero section sub-tittle: You must give some text in an introduction specification"}),(0,l.jsx)("li",{children:"Hero section image: You must give a photo for this section"}),(0,l.jsxs)("li",{children:["Section 1 and Section 2 work process is almost same.",(0,l.jsxs)("ul",{className:"list-disc",children:[(0,l.jsx)("li",{children:"Each of these two sections will require one heading tittle"}),(0,l.jsx)("li",{children:"Each of these two categories will require descriptive information"}),(0,l.jsx)("li",{children:"Each of these two sections will require two photos to make it attractive"})]})]}),(0,l.jsx)("li",{children:"Work Process Section(Title): Each role has a descriptive section of how the user works, which requires a title."}),(0,l.jsxs)("li",{children:["Work Process section(Add Description):Details of how the user works for each role can be added here.",(0,l.jsxs)("div",{className:"grid grid-cols-2",children:[(0,l.jsx)("img",{className:"h-auto w-auto",src:"/images/des1.png",alt:""}),(0,l.jsx)("img",{className:"h-auto w-auto",src:"/images/des2.png",alt:""})]})]})]}),(0,l.jsxs)("div",{className:"flex justify-around items-center border-2 border-red-500 m-4 rounded",children:[(0,l.jsx)("p",{className:"text-[34px]",children:"Here you can see the changes"}),(0,l.jsx)("img",{className:"h-auto w-auto",src:"/images/des3.png",alt:""})]})]})]})})}}},function(e){e.O(0,[1228,5445,955,994,4090,3617,9774,2888,179],(function(){return i=895,e(e.s=i);var i}));var i=e.O();_N_E=i}]);