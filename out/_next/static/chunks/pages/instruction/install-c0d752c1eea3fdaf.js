(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[745],{7453:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/instruction/install",function(){return l(3856)}])},3652:function(e,n,l){"use strict";l.d(n,{Z:function(){return j}});var i=l(5893),t=l(5434),s=l(7568),a=l(4051),r=l.n(a),c=l(2020),o=(l(9843),l(1664)),d=l.n(o),h=l(7294),m=l(1163),u=function(e){var n=e.menu,l=(0,m.useRouter)(),t=(0,m.useRouter)().pathname,a=function(e){var n,l;if((null===e||void 0===e?void 0:e.href)===t||(null===e||void 0===e||null===(n=e.childHrefs)||void 0===n?void 0:n.includes(t)))return!0;var i=null===e||void 0===e||null===(l=e.child)||void 0===l?void 0:l.find((function(e){var n;return e.href===t||(null===e||void 0===e||null===(n=e.childHrefs)||void 0===n?void 0:n.includes(t))}));return!!i},o=(0,h.useState)(),u=o[0],x=o[1];(0,h.useEffect)((function(){var e;x(!u),null===(e=document.querySelectorAll(".metismenu .sub-menu"))||void 0===e||e.forEach((function(e){var n;null===e||void 0===e||null===(n=e.childNodes)||void 0===n||n.forEach((function(n){n.childNodes[0].href===window.location.href&&(e.classList.contains("mm-show")||e.classList.add("mm-show"))}))}))}),[t]);var p=function(){try{var e,n;if(window.innerWidth<1024)null===(e=document.querySelector(".dashboard"))||void 0===e||e.classList.remove("mini"),null===(n=document.querySelector(".dashboard"))||void 0===n||n.classList.remove("mobile")}catch(l){}};!function(){var e=(0,s.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,swalAlert.confirm("Are you want to leave?","Yes, Leave");case 2:e.sent.isConfirmed&&(localStorage.removeItem(""),l.push(""));case 4:case"end":return e.stop()}}),e)})))}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"sidebar-bg",onClick:p}),(0,i.jsx)("nav",{className:"sidebar text-black",children:(0,i.jsxs)("div",{className:"sidebarBg pb-10",children:[(0,i.jsx)("div",{className:"h-16 border-2 rounded mx-2 border-red-300 flex items-center justify-center site-title",children:(0,i.jsx)(d(),{href:"/",children:(0,i.jsx)("p",{className:"text-[18px] mb-0 font-semibold cursor-pointer",children:"Documentation"})})}),(0,i.jsx)(c.Z,{children:null===n||void 0===n?void 0:n.map((function(e,n){var l,t,s=e.icon||h.Fragment;return(0,i.jsx)("li",{className:"".concat(a(e)?"mm-active active":""),children:(null===e||void 0===e?void 0:e.child)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("a",{className:"nav-item has-arrow ".concat(a(e)?(null===e||void 0===e||null===(l=e.child)||void 0===l?void 0:l.length)>0?"p-active":"active":""),children:[(0,i.jsx)(s,{className:"inline-block"}),(0,i.jsx)("span",{children:e.label})]}),(0,i.jsxs)("ul",{className:"sub-menu",children:[(0,i.jsx)("li",{className:"label",children:e.label}),null===e||void 0===e||null===(t=e.child)||void 0===t?void 0:t.map((function(e,n){var l=e.icon||h.Fragment;return(0,i.jsx)("li",{children:(0,i.jsx)(d(),{href:e.href||"#!",children:(0,i.jsxs)("a",{onClick:p,className:"nav-item ".concat(a(e)?"active":""),children:[(0,i.jsx)(l,{className:"inline-block mb-0.5"}),(0,i.jsxs)("span",{className:"".concat(n+500),children:[" ",e.label]})]})})},n)}))]})]}):(0,i.jsx)(d(),{href:e.href||"#!",children:(0,i.jsxs)("a",{className:"nav-item ".concat(a(e)?"active":""),onClick:function(){var e;null===(e=document.querySelectorAll(".metismenu .sub-menu"))||void 0===e||e.forEach((function(e){e.classList.remove("mm-show")})),p()},children:[(0,i.jsx)(s,{className:"inline-block mb-0.5"}),(0,i.jsx)("span",{className:"c-tooltip",children:e.label})]})})},n)}))})]})})]})},x=l(9583),p=function(){return(0,i.jsx)("div",{className:"header flex items-center",children:(0,i.jsx)("div",{className:"border-2 rounded border-red-300 h-16 w-20 shadow ml-6 flex justify-center items-center",children:(0,i.jsx)(x.Fm7,{size:22,role:"button",onClick:function(){var e;null===(e=document.querySelector(".dashboard"))||void 0===e||e.classList.toggle(window.innerWidth>=1024?"mini":"mobile")}})})})},f=l(9327),j=function(e){var n=e.children,l=b();return(0,i.jsxs)("div",{className:"dashboard",children:[(0,i.jsx)(u,{menu:l}),(0,i.jsx)(p,{}),(0,i.jsx)("div",{className:"absolute top-0 h-32 w-full "}),(0,i.jsx)("div",{className:"main-content ",children:(0,i.jsx)("div",{className:"w-full z-30",style:{minHeight:400},children:n})})]})},v=[{label:"Instruction",icon:t.$Be,child:[{label:"Installation Process",icon:t.xIf,href:"/instruction/install"},{label:"Env File Setting",icon:t.rnx,href:"/instruction/setting"}]},{label:"Admin Panel",icon:t.b9P,child:[{label:"Admin Login",icon:f.tcM,href:"/admin/login"},{label:"Admin Profile Setting",icon:f.tcM,href:"/admin/profile"},{label:"User Forms Feilds",icon:f.tcM,href:"/admin/userForms"},{label:"User ",icon:f.tcM,href:"/admin/user"},{label:"Province ",icon:f.tcM,href:"/admin/province"},{label:"Coupon ",icon:f.tcM,href:"/admin/coupon"},{label:"Admin Tax Feilds",icon:f.tcM,href:"/admin/allFiles"},{label:"Role And Permission",icon:f.tcM,href:"/admin/rolePermission"},{label:"Website Setting",icon:f.tcM,href:"/admin/landingPage"}]},{label:"Accountant Panel",icon:t.b9P,child:[{label:"Accountant Login",icon:f.tcM,href:"/accountant/login"},{label:"Accountant ALl Files",icon:f.tcM,href:"/accountant/allTaxFile"}]},{label:"User Panel",icon:t.b9P,child:[{label:"User Login",icon:f.tcM,href:"/user/login"},{label:"User Form Fill Up Process",icon:f.tcM,href:"/user/form"},{label:"My Tax File",icon:f.tcM,href:"/user/mytaxFile"},{label:"File Form A/C and Feedback",icon:f.tcM,href:"/user/fileAC"}]},{label:"Live Pages",icon:t.b9P,child:[{label:"Home Page",icon:f.tcM,href:"/live/home"},{label:"About Page",icon:f.tcM,href:"/live/about"},{label:"Contact Page",icon:f.tcM,href:"/live/contact"},{label:"Tax Situation Pages",icon:f.tcM,href:"/live/taxSituation"},{label:"More Pages",icon:f.tcM,href:"/live/more"}]}],b=function(){return v}},3856:function(e,n,l){"use strict";l.r(n);var i=l(5893),t=(l(7294),l(3652));n.default=function(){return(0,i.jsx)(t.Z,{children:(0,i.jsxs)("div",{className:"bg-gray-50 h-auto m-6 w-[90%] text-[16px]",children:[(0,i.jsx)("h4",{className:"text-center",children:"Installing Process"}),(0,i.jsxs)("div",{className:"my-4",children:[(0,i.jsx)("h5",{className:"border-b-[1px] border-black",children:"Install"}),(0,i.jsx)("div",{className:"m-4",children:(0,i.jsxs)("ul",{className:"list-disc",children:[(0,i.jsxs)("li",{children:["First , You have to open Visual Studio Code, if you have no idea to intall Visual Studio Code ",(0,i.jsx)("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noreferrer",children:"Click here"})]}),(0,i.jsxs)("li",{children:["Then, You have to clone or download the project, If you want to clone the project Click he box 1 or download the zip file click box 2.",(0,i.jsx)("img",{className:"h-auto w-auto",src:"/images/i1.png",alt:""})]}),(0,i.jsx)("p",{className:"border-b-[1px] border-black my-4",children:"Backend"}),(0,i.jsxs)("li",{children:["If download Zip File,",(0,i.jsxs)("ul",{className:"list-disc",children:[(0,i.jsx)("li",{children:"First Extact the file and open it in Visual Studio Code."}),(0,i.jsxs)("li",{children:["then open terminal window and give the command ",(0,i.jsx)("span",{className:"text-red-500 text-[20px]",children:"npm install -g yarn"}),", press enter,for intall yarn"]}),(0,i.jsxs)("li",{children:["After yarn install, give ",(0,i.jsx)("span",{className:"text-red-500 text-[20px]",children:"yarn"})," command, press enter, for intall necessary modules and package"]}),(0,i.jsxs)("li",{children:["After complete Installation, to run the project give",(0,i.jsx)("span",{className:"text-red-500 text-[20px]",children:" yarn start "}),"command, you project will run on your browser in http://localhost:3000/  port"]})]})]}),(0,i.jsxs)("li",{children:["If you have to clone the project:",(0,i.jsxs)("ul",{className:"list-disc",children:[(0,i.jsxs)("li",{children:["First you need to install git bash ",(0,i.jsx)("a",{href:"https://git-scm.com/downloads",target:"_blank",rel:"noreferrer",children:"Click here to download Git bash"})]}),(0,i.jsxs)("li",{children:["After git bash install complete, you have to open Visual Studio Code and open the terminal window, then copy clone the project url and paste it with the command ",(0,i.jsx)("span",{className:"text-red-500 text-[20px]",children:" git clone (project url) "}),"hit enter"]}),(0,i.jsxs)("li",{children:["then open terminal window and give the command ",(0,i.jsx)("span",{className:"text-red-500 text-[20px]",children:"npm install -g yarn"}),", press enter,for intall yarn"]}),(0,i.jsxs)("li",{children:["After yarn install, give ",(0,i.jsx)("span",{className:"text-red-500 text-[20px]",children:"yarn"})," command, press enter, for intall necessary modules and package"]}),(0,i.jsxs)("li",{children:["After complete Installation, to run the project give",(0,i.jsx)("span",{className:"text-red-500 text-[20px]",children:" yarn start "}),"command, you project will run on your browser in http://localhost:3000/  port"]})]})]}),(0,i.jsx)("p",{className:"border-b-[1px] border-black my-4",children:"Forentend"}),(0,i.jsxs)("li",{children:["If download Zip File,",(0,i.jsxs)("ul",{className:"list-disc",children:[(0,i.jsx)("li",{children:"First Extact the file and open it in Visual Studio Code."}),(0,i.jsxs)("li",{children:["then open terminal window and give the command ",(0,i.jsx)("span",{className:"text-red-500 text-[20px]",children:"npm install -g yarn"}),", press enter,for intall yarn"]}),(0,i.jsxs)("li",{children:["After yarn install, give ",(0,i.jsx)("span",{className:"text-red-500 text-[20px]",children:"yarn"})," command, press enter, for intall necessary modules and package"]}),(0,i.jsxs)("li",{children:["After complete Installation, to run the project give",(0,i.jsx)("span",{className:"text-red-500 text-[20px]",children:" yarn dev "}),"command, you project will run on your browser in http://localhost:3000/  port"]})]})]}),(0,i.jsxs)("li",{children:["If you have to clone the project:",(0,i.jsxs)("ul",{className:"list-disc",children:[(0,i.jsxs)("li",{children:["First you need to install git bash ",(0,i.jsx)("a",{href:"https://git-scm.com/downloads",target:"_blank",rel:"noreferrer",children:"Click here to download Git bash"})]}),(0,i.jsxs)("li",{children:["After git bash install complete, you have to open Visual Studio Code and open the terminal window, then copy clone the project url and paste it with the command ",(0,i.jsx)("span",{className:"text-red-500 text-[20px]",children:" git clone (project url) "}),"hit enter"]}),(0,i.jsxs)("li",{children:["then open terminal window and give the command ",(0,i.jsx)("span",{className:"text-red-500 text-[20px]",children:"npm install -g yarn"}),", press enter,for intall yarn"]}),(0,i.jsxs)("li",{children:["After yarn install, give ",(0,i.jsx)("span",{className:"text-red-500 text-[20px]",children:"yarn"})," command, press enter, for intall necessary modules and package"]}),(0,i.jsxs)("li",{children:["After complete Installation, to run the project give",(0,i.jsx)("span",{className:"text-red-500 text-[20px]",children:" yarn dev "}),"command, you project will run on your browser in http://localhost:3000/  port"]})]})]})]})})]})]})})}}},function(e){e.O(0,[228,445,90,617,774,888,179],(function(){return n=7453,e(e.s=n);var n}));var n=e.O();_N_E=n}]);