(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8569],{8028:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/instruction/backend",function(){return l(5433)}])},3652:function(e,n,l){"use strict";l.d(n,{Z:function(){return v}});var i=l(5893),s=l(5434),a=l(7568),c=l(4051),t=l.n(c),o=l(2020),r=(l(9843),l(1664)),d=l.n(r),m=l(7294),h=l(1163),u=function(e){var n=e.menu,l=(0,h.useRouter)(),s=(0,h.useRouter)().pathname,c=function(e){var n,l;if((null===e||void 0===e?void 0:e.href)===s||(null===e||void 0===e||null===(n=e.childHrefs)||void 0===n?void 0:n.includes(s)))return!0;var i=null===e||void 0===e||null===(l=e.child)||void 0===l?void 0:l.find((function(e){var n;return e.href===s||(null===e||void 0===e||null===(n=e.childHrefs)||void 0===n?void 0:n.includes(s))}));return!!i},r=(0,m.useState)(),u=r[0],b=r[1];(0,m.useEffect)((function(){var e;b(!u),null===(e=document.querySelectorAll(".metismenu .sub-menu"))||void 0===e||e.forEach((function(e){var n;null===e||void 0===e||null===(n=e.childNodes)||void 0===n||n.forEach((function(n){n.childNodes[0].href===window.location.href&&(e.classList.contains("mm-show")||e.classList.add("mm-show"))}))}))}),[s]);var x=function(){try{var e,n;if(window.innerWidth<1024)null===(e=document.querySelector(".dashboard"))||void 0===e||e.classList.remove("mini"),null===(n=document.querySelector(".dashboard"))||void 0===n||n.classList.remove("mobile")}catch(l){}};!function(){var e=(0,a.Z)(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,swalAlert.confirm("Are you want to leave?","Yes, Leave");case 2:e.sent.isConfirmed&&(localStorage.removeItem(""),l.push(""));case 4:case"end":return e.stop()}}),e)})))}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"sidebar-bg",onClick:x}),(0,i.jsx)("nav",{className:"sidebar text-black",children:(0,i.jsxs)("div",{className:"sidebarBg pb-10",children:[(0,i.jsx)("div",{className:"h-16 border-2 rounded mx-2 border-red-300 flex items-center justify-center site-title",children:(0,i.jsx)(d(),{href:"/",children:(0,i.jsx)("p",{className:"text-[18px] mb-0 font-semibold cursor-pointer",children:"Documentation"})})}),(0,i.jsx)(o.Z,{children:null===n||void 0===n?void 0:n.map((function(e,n){var l,s,a=e.icon||m.Fragment;return(0,i.jsx)("li",{className:"".concat(c(e)?"mm-active active":""),children:(null===e||void 0===e?void 0:e.child)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("a",{className:"nav-item has-arrow ".concat(c(e)?(null===e||void 0===e||null===(l=e.child)||void 0===l?void 0:l.length)>0?"p-active":"active":""),children:[(0,i.jsx)(a,{className:"inline-block"}),(0,i.jsx)("span",{children:e.label})]}),(0,i.jsxs)("ul",{className:"sub-menu",children:[(0,i.jsx)("li",{className:"label",children:e.label}),null===e||void 0===e||null===(s=e.child)||void 0===s?void 0:s.map((function(e,n){var l=e.icon||m.Fragment;return(0,i.jsx)("li",{children:(0,i.jsx)(d(),{href:e.href||"#!",children:(0,i.jsxs)("a",{onClick:x,className:"nav-item ".concat(c(e)?"active":""),children:[(0,i.jsx)(l,{className:"inline-block mb-0.5"}),(0,i.jsxs)("span",{className:"".concat(n+500),children:[" ",e.label]})]})})},n)}))]})]}):(0,i.jsx)(d(),{href:e.href||"#!",children:(0,i.jsxs)("a",{className:"nav-item ".concat(c(e)?"active":""),onClick:function(){var e;null===(e=document.querySelectorAll(".metismenu .sub-menu"))||void 0===e||e.forEach((function(e){e.classList.remove("mm-show")})),x()},children:[(0,i.jsx)(a,{className:"inline-block mb-0.5"}),(0,i.jsx)("span",{className:"c-tooltip",children:e.label})]})})},n)}))})]})})]})},b=l(9583),x=function(){return(0,i.jsx)("div",{className:"header flex items-center",children:(0,i.jsx)("div",{className:"border-2 rounded border-red-300 h-16 w-20 shadow ml-6 flex justify-center items-center",children:(0,i.jsx)(b.Fm7,{size:22,role:"button",onClick:function(){var e;null===(e=document.querySelector(".dashboard"))||void 0===e||e.classList.toggle(window.innerWidth>=1024?"mini":"mobile")}})})})},f=l(9327),p=l(471),j=l(1872),v=function(e){var n=e.children,l=g();return(0,i.jsxs)("div",{className:"dashboard",children:[(0,i.jsx)(u,{menu:l}),(0,i.jsx)(x,{}),(0,i.jsx)("div",{className:"absolute top-0 h-32 w-full "}),(0,i.jsx)("div",{className:"main-content ",children:(0,i.jsx)("div",{className:"w-full z-30",style:{minHeight:400},children:n})})]})},N=[{label:"Instruction",icon:s.$Be,child:[{label:"Installation Process",icon:s.xIf,href:"/instruction/install"},{label:"Backend Installation Process",icon:s.xIf,href:"/instruction/backend"},{label:"Frontend Installation Process",icon:s.xIf,href:"/instruction/frontend"},{label:"Env File Setting",icon:s.rnx,href:"/instruction/setting"},{label:"Website Run Time Work Flow",icon:f.S$H,href:"/instruction/run"}]},{label:"Tax Filing Work Flow",icon:j.m_C,href:"/flow/file"},{label:"Admin Panel",icon:s.ZJo,child:[{label:"Admin Login",icon:f.tcM,href:"/admin/login"},{label:"Admin Profile Setting",icon:f.tcM,href:"/admin/profile"},{label:"User Forms Feilds",icon:f.tcM,href:"/admin/userForms"},{label:"User ",icon:f.tcM,href:"/admin/user"},{label:"Province ",icon:f.tcM,href:"/admin/province"},{label:"Coupon ",icon:f.tcM,href:"/admin/coupon"},{label:"Admin Tax Feilds",icon:f.tcM,href:"/admin/allFiles"},{label:"Role And Permission",icon:f.tcM,href:"/admin/rolePermission"},{label:"Website Setting",icon:f.tcM,href:"/admin/landingPage"}]},{label:"Accountant Panel",icon:s.Mgh,child:[{label:"Accountant Login",icon:f.tcM,href:"/accountant/login"},{label:"Accountant ALl Files",icon:f.tcM,href:"/accountant/allTaxFile"}]},{label:"User Panel",icon:s.oG,child:[{label:"User Login",icon:f.tcM,href:"/user/login"},{label:"User Form Fill Up Process",icon:f.tcM,href:"/user/form"},{label:"My Tax File",icon:f.tcM,href:"/user/mytaxFile"},{label:"File Form A/C ",icon:f.tcM,href:"/user/fileAC"},{label:"Feedback",icon:f.tcM,href:"/user/feebbackUS"}]},{label:"Live Pages",icon:p.X0y,child:[{label:"Home Page",icon:f.tcM,href:"/live/home"},{label:"About Page",icon:f.tcM,href:"/live/about"},{label:"Contact Page",icon:f.tcM,href:"/live/contact"},{label:"Tax Situation Pages",icon:f.tcM,href:"/live/taxSituation"},{label:"More Pages",icon:f.tcM,href:"/live/more"}]},{label:"Tawk to",icon:s.M4G,href:"/tawkTo"},{label:"Password Reset",icon:s.EmA,href:"/password"},{label:"Help and Support",icon:s.slX,href:"/help"}],g=function(){return N}},5433:function(e,n,l){"use strict";l.r(n);var i=l(5893),s=(l(7294),l(3652));n.default=function(){return(0,i.jsx)(s.Z,{children:(0,i.jsxs)("div",{className:"bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-2",children:[(0,i.jsx)("h4",{className:"text-center border-b-[1px] py-2 border-black",children:"Backend Installation Process"}),(0,i.jsxs)("div",{className:"m-4",children:[(0,i.jsxs)("ul",{className:"list-disc",children:[(0,i.jsxs)("li",{className:"my-4",children:[(0,i.jsx)("p",{className:"border-b-[1px] border-black font-semibold text-[18px]",children:"Step 1"}),"First of all, you need to deploy the backend in your Domain or Subdomain. ",(0,i.jsxs)("span",{className:"italic",children:[" But we recommend subdomain actually. For example, ",(0,i.jsx)("span",{className:" text-red-400",children:"backend.your_main_domain@something.com."})]}),(0,i.jsx)("br",{})," Now you need to zip the taxstick-backend file.",(0,i.jsx)("img",{className:"h-[500px] w-auto mt-4",src:"/images/i4.png",alt:""})]}),(0,i.jsxs)("li",{className:"my-4",children:[(0,i.jsx)("p",{className:"border-b-[1px] border-black font-semibold text-[18px]",children:"Step 2"}),"Then you have to go to your file manager of your server panel or cPanel, then upload the taxstick-backend.zip file.",(0,i.jsx)("img",{className:"h-[500px] w-auto mt-4",src:"/images/b1.png",alt:""})]}),(0,i.jsxs)("li",{className:"my-4",children:[(0,i.jsx)("p",{className:"border-b-[1px] border-black font-semibold text-[18px]",children:"Step 3"}),"Then ",(0,i.jsx)("span",{className:"italic text-red-400",children:"Unzip"})," the file,",(0,i.jsx)("img",{className:"h-[500px] w-auto mt-4",src:"/images/b6.png",alt:""})]}),(0,i.jsxs)("li",{className:"my-4",children:[(0,i.jsx)("p",{className:"border-b-[1px] border-black font-semibold text-[18px]",children:"Step 4"}),"Now you can see the uploaded files.",(0,i.jsx)("img",{className:"h-[500px] w-auto mt-4",src:"/images/b8.png",alt:""})]}),(0,i.jsxs)("li",{className:"my-4",children:[(0,i.jsx)("p",{className:"border-b-[1px] border-black font-semibold text-[18px]",children:"Step 5"}),"Then you can find the ",(0,i.jsx)("span",{className:"italic text-red-400",children:" Website"})," button on the sidebar and click on it.",(0,i.jsx)("img",{className:"h-[500px] w-auto mt-4",src:"/images/b9.png",alt:""})]}),(0,i.jsxs)("li",{className:"my-4",children:[(0,i.jsx)("p",{className:"border-b-[1px] border-black font-semibold text-[18px]",children:"Step 6"}),"Then you can find the ",(0,i.jsx)("span",{className:"italic text-red-400",children:" Node Project"})," button on the top and click on it. Then click ",(0,i.jsx)("span",{className:"italic text-red-400",children:" add node project"})," button",(0,i.jsx)("img",{className:"h-[500px] w-auto mt-4",src:"/images/b10.png",alt:""})]}),(0,i.jsxs)("li",{className:"my-4",children:[(0,i.jsx)("p",{className:"border-b-[1px] border-black font-semibold text-[18px]",children:"Step 7"}),"Then click the pointed button,",(0,i.jsxs)("ul",{className:"list-disc",children:[(0,i.jsx)("li",{children:"to select your folder path,"}),(0,i.jsx)("li",{children:"fill up the Name, (do not give line space in the name, use underscore)"}),(0,i.jsx)("li",{children:"select Run opt,"}),(0,i.jsx)("li",{children:"select the port,"}),(0,i.jsx)("li",{children:"select node version, "}),(0,i.jsx)("li",{children:"and give your domain name"})]}),"Then click on confirm button. Make sure all information is correct.",(0,i.jsx)("img",{className:"h-auto w-auto mt-4",src:"/images/b11.png",alt:""})]}),(0,i.jsxs)("li",{className:"my-4",children:[(0,i.jsx)("p",{className:"border-b-[1px] border-black font-semibold text-[18px]",children:"Step 8"}),"Then click the file and right-click on your mouse, then you can get a new window",(0,i.jsx)("img",{className:"h-[500px] w-auto mt-4",src:"/images/b12.png",alt:""})]}),(0,i.jsxs)("li",{className:"my-4",children:[(0,i.jsx)("p",{className:"border-b-[1px] border-black font-semibold text-[18px]",children:"Step 9"}),"Then Click SSL, then select two checkboxes and apply them",(0,i.jsx)("img",{className:"h-auto w-auto mt-4",src:"/images/b15.png",alt:""})]}),(0,i.jsxs)("li",{className:"my-4",children:[(0,i.jsx)("p",{className:"border-b-[1px] border-black font-semibold text-[18px]",children:"Step 10"}),"Then you can see on the top of the window a Force HTTPS switch, please click it on",(0,i.jsx)("img",{className:"h-auto w-auto mt-4",src:"/images/b14.png",alt:""})]})]}),(0,i.jsxs)("h6",{className:"text-red-600 p-4 border-[1px] border-red-600 text-center",children:["Now your backend project is ready to use. Please copy your subdomain URL to run your frontend project. For example, ",(0,i.jsx)("span",{className:" italic",children:"backend.your_main_domain.com"}),"."]})]})]})})}}},function(e){e.O(0,[1228,5445,955,994,4090,3617,9774,2888,179],(function(){return n=8028,e(e.s=n);var n}));var n=e.O();_N_E=n}]);