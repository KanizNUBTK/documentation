(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2202],{4013:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/instruction/setting",function(){return a(9373)}])},3652:function(e,s,a){"use strict";a.d(s,{Z:function(){return j}});var i=a(5893),n=a(5434),l=a(7568),t=a(4051),o=a.n(t),c=a(2020),r=(a(9843),a(1664)),d=a.n(r),m=a(7294),h=a(1163),u=function(e){var s=e.menu,a=(0,h.useRouter)(),n=(0,h.useRouter)().pathname,t=function(e){var s,a;if((null===e||void 0===e?void 0:e.href)===n||(null===e||void 0===e||null===(s=e.childHrefs)||void 0===s?void 0:s.includes(n)))return!0;var i=null===e||void 0===e||null===(a=e.child)||void 0===a?void 0:a.find((function(e){var s;return e.href===n||(null===e||void 0===e||null===(s=e.childHrefs)||void 0===s?void 0:s.includes(n))}));return!!i},r=(0,m.useState)(),u=r[0],x=r[1];(0,m.useEffect)((function(){var e;x(!u),null===(e=document.querySelectorAll(".metismenu .sub-menu"))||void 0===e||e.forEach((function(e){var s;null===e||void 0===e||null===(s=e.childNodes)||void 0===s||s.forEach((function(s){s.childNodes[0].href===window.location.href&&(e.classList.contains("mm-show")||e.classList.add("mm-show"))}))}))}),[n]);var b=function(){try{var e,s;if(window.innerWidth<1024)null===(e=document.querySelector(".dashboard"))||void 0===e||e.classList.remove("mini"),null===(s=document.querySelector(".dashboard"))||void 0===s||s.classList.remove("mobile")}catch(a){}};!function(){var e=(0,l.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,swalAlert.confirm("Are you want to leave?","Yes, Leave");case 2:e.sent.isConfirmed&&(localStorage.removeItem(""),a.push(""));case 4:case"end":return e.stop()}}),e)})))}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"sidebar-bg",onClick:b}),(0,i.jsx)("nav",{className:"sidebar text-black",children:(0,i.jsxs)("div",{className:"sidebarBg pb-10",children:[(0,i.jsx)("div",{className:"h-16 border-2 rounded mx-2 border-red-300 flex items-center justify-center site-title",children:(0,i.jsx)(d(),{href:"/",children:(0,i.jsx)("p",{className:"text-[18px] mb-0 font-semibold cursor-pointer",children:"Documentation"})})}),(0,i.jsx)(c.Z,{children:null===s||void 0===s?void 0:s.map((function(e,s){var a,n,l=e.icon||m.Fragment;return(0,i.jsx)("li",{className:"".concat(t(e)?"mm-active active":""),children:(null===e||void 0===e?void 0:e.child)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("a",{className:"nav-item has-arrow ".concat(t(e)?(null===e||void 0===e||null===(a=e.child)||void 0===a?void 0:a.length)>0?"p-active":"active":""),children:[(0,i.jsx)(l,{className:"inline-block"}),(0,i.jsx)("span",{children:e.label})]}),(0,i.jsxs)("ul",{className:"sub-menu",children:[(0,i.jsx)("li",{className:"label",children:e.label}),null===e||void 0===e||null===(n=e.child)||void 0===n?void 0:n.map((function(e,s){var a=e.icon||m.Fragment;return(0,i.jsx)("li",{children:(0,i.jsx)(d(),{href:e.href||"#!",children:(0,i.jsxs)("a",{onClick:b,className:"nav-item ".concat(t(e)?"active":""),children:[(0,i.jsx)(a,{className:"inline-block mb-0.5"}),(0,i.jsxs)("span",{className:"".concat(s+500),children:[" ",e.label]})]})})},s)}))]})]}):(0,i.jsx)(d(),{href:e.href||"#!",children:(0,i.jsxs)("a",{className:"nav-item ".concat(t(e)?"active":""),onClick:function(){var e;null===(e=document.querySelectorAll(".metismenu .sub-menu"))||void 0===e||e.forEach((function(e){e.classList.remove("mm-show")})),b()},children:[(0,i.jsx)(l,{className:"inline-block mb-0.5"}),(0,i.jsx)("span",{className:"c-tooltip",children:e.label})]})})},s)}))})]})})]})},x=a(9583),b=function(){return(0,i.jsx)("div",{className:"header flex items-center",children:(0,i.jsx)("div",{className:"border-2 rounded border-red-300 h-16 w-20 shadow ml-6 flex justify-center items-center",children:(0,i.jsx)(x.Fm7,{size:22,role:"button",onClick:function(){var e;null===(e=document.querySelector(".dashboard"))||void 0===e||e.classList.toggle(window.innerWidth>=1024?"mini":"mobile")}})})})},p=a(9327),f=a(471),v=a(1872),j=function(e){var s=e.children,a=N();return(0,i.jsxs)("div",{className:"dashboard",children:[(0,i.jsx)(u,{menu:a}),(0,i.jsx)(b,{}),(0,i.jsx)("div",{className:"absolute top-0 h-32 w-full "}),(0,i.jsx)("div",{className:"main-content ",children:(0,i.jsx)("div",{className:"w-full z-30",style:{minHeight:400},children:s})})]})},g=[{label:"Instruction",icon:n.$Be,child:[{label:"Installation Process",icon:n.xIf,href:"/instruction/install"},{label:"Backend Installation Process",icon:n.xIf,href:"/instruction/backend"},{label:"Frontend Installation Process",icon:n.xIf,href:"/instruction/frontend"},{label:"Env File Setting",icon:n.rnx,href:"/instruction/setting"},{label:"Website Run Time Work Flow",icon:p.S$H,href:"/instruction/run"}]},{label:"Tax Filing Work Flow",icon:v.m_C,href:"/flow/file"},{label:"Admin Panel",icon:n.ZJo,child:[{label:"Admin Login",icon:p.tcM,href:"/admin/login"},{label:"Admin Profile Setting",icon:p.tcM,href:"/admin/profile"},{label:"User Forms Feilds",icon:p.tcM,href:"/admin/userForms"},{label:"User ",icon:p.tcM,href:"/admin/user"},{label:"Province ",icon:p.tcM,href:"/admin/province"},{label:"Coupon ",icon:p.tcM,href:"/admin/coupon"},{label:"Admin Tax Feilds",icon:p.tcM,href:"/admin/allFiles"},{label:"Role And Permission",icon:p.tcM,href:"/admin/rolePermission"},{label:"Website Setting",icon:p.tcM,href:"/admin/landingPage"}]},{label:"Accountant Panel",icon:n.Mgh,child:[{label:"Accountant Login",icon:p.tcM,href:"/accountant/login"},{label:"Accountant ALl Files",icon:p.tcM,href:"/accountant/allTaxFile"}]},{label:"User Panel",icon:n.oG,child:[{label:"User Login",icon:p.tcM,href:"/user/login"},{label:"User Form Fill Up Process",icon:p.tcM,href:"/user/form"},{label:"My Tax File",icon:p.tcM,href:"/user/mytaxFile"},{label:"File Form A/C ",icon:p.tcM,href:"/user/fileAC"},{label:"Feedback",icon:p.tcM,href:"/user/feebbackUS"}]},{label:"Live Pages",icon:f.X0y,child:[{label:"Home Page",icon:p.tcM,href:"/live/home"},{label:"About Page",icon:p.tcM,href:"/live/about"},{label:"Contact Page",icon:p.tcM,href:"/live/contact"},{label:"Tax Situation Pages",icon:p.tcM,href:"/live/taxSituation"},{label:"More Pages",icon:p.tcM,href:"/live/more"}]},{label:"Tawk to",icon:n.M4G,href:"/tawkTo"},{label:"Password Reset",icon:n.EmA,href:"/password"},{label:"Help and Support",icon:n.slX,href:"/help"}],N=function(){return g}},9373:function(e,s,a){"use strict";a.r(s);var i=a(5893),n=a(1664),l=a.n(n),t=(a(7294),a(3652));s.default=function(){return(0,i.jsx)(t.Z,{children:(0,i.jsxs)("div",{className:"bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4",children:[(0,i.jsx)("h4",{className:"text-center",children:"Env File Setup Information"}),(0,i.jsxs)("div",{className:"my-4",children:[(0,i.jsx)("h5",{className:"border-b-[1px] border-black",children:".env File Setup Information"}),(0,i.jsxs)("div",{className:"m-4",children:[(0,i.jsxs)("p",{children:["Now hit your domain on browser like, ",(0,i.jsx)("span",{className:"text-red-500 font-bold",children:"your_main_domain.com"})," first, the following page will be appeared. Now follow the below steps."]}),(0,i.jsx)("img",{className:"h-auto w-auto",src:"/images/setting.png",alt:""})]})]}),(0,i.jsxs)("div",{className:"my-4",children:[(0,i.jsx)("h5",{className:"border-b-[1px] border-black capitalize",children:"Super Admin creation"}),(0,i.jsxs)("div",{className:"m-4",children:[(0,i.jsx)("p",{children:"In this section, the super admin or company owner has to provide the basic information like username, email, phone number and password to activate the website."}),(0,i.jsx)("img",{className:"h-auto w-auto",src:"/images/s1.png",alt:""})]})]}),(0,i.jsxs)("div",{className:"my-4",children:[(0,i.jsx)("h5",{className:"border-b-[1px] border-black capitalize",children:"Database setup"}),(0,i.jsx)("div",{className:"m-4 ",children:(0,i.jsxs)("div",{children:["Next, you have to setup the database. Here, we are suggesting to create a MongoDB database in MongoDB Atlas. Also, you can create database on your server too. Now follow the below steps.",(0,i.jsxs)("ul",{className:"list-disc",children:[(0,i.jsxs)("li",{children:["At first, you have to create a MongoDB Atlas account. ",(0,i.jsx)(l(),{href:"https://www.mongodb.com/atlas/database",children:(0,i.jsx)("a",{children:"Click here"})})," to create account.You can choose any plan, also you can choose ",(0,i.jsx)("span",{className:"text-red-500",children:"free shared"})," plan too."]}),(0,i.jsxs)("li",{className:"my-4",children:["Now you can see of your mondoDB account dashboard. You have to create ",(0,i.jsx)("span",{className:"text-red-500 capitalize",children:"network access"}),". We recommend to put your server IP address to maintain the security. Also you can set it public access, which is not recommended.",(0,i.jsx)("img",{className:"h-auto w-auto my-4",src:"/images/altas2.png",alt:""})]}),(0,i.jsxs)("li",{className:"my-4",children:["Now you have to click ",(0,i.jsx)("span",{className:"text-red-500",children:"Database Access"})," to create new database user. You can simply put username and password to create database user. Please remember the username and password.",(0,i.jsx)("img",{className:"h-auto w-auto my-4",src:"/images/altas1.png",alt:""})]}),(0,i.jsxs)("li",{className:"my-4",children:["Now click on ",(0,i.jsx)("span",{className:"text-red-500",children:"Database"}),". Next click on ",(0,i.jsx)("span",{className:"text-red-500",children:"Connect"}),(0,i.jsx)("img",{className:"h-auto w-auto my-4",src:"/images/s6.png",alt:""})]}),(0,i.jsxs)("li",{className:"my-4",children:["Next click on ",(0,i.jsx)("span",{className:"text-red-500",children:"Connect using MongoDB Compass."}),(0,i.jsx)("img",{className:"h-auto w-auto my-4",src:"/images/s7.png",alt:""})]}),(0,i.jsxs)("li",{children:["You will get a collection URL like below, you have to give the database username and password that you previously created in ",(0,i.jsx)("span",{className:"text-red-500",children:"Database Access step."}),(0,i.jsx)("img",{className:"h-auto w-auto my-4",src:"/images/s5.png",alt:""})]}),(0,i.jsxs)("li",{children:["Right now, Your Database creation process is done. Just copy the URL from your mongoDB atlas account like the upper image. Now you have to paste the URL in ",(0,i.jsx)("span",{className:"text-red-500",children:"Database String"})," field. Also you have to put company website name like taxstick."]}),(0,i.jsx)("img",{className:"h-auto w-auto my-2",src:"/images/s2.png",alt:""})]})]})})]}),(0,i.jsxs)("div",{className:"my-4",children:[(0,i.jsx)("h5",{className:"border-b-[1px] border-black capitalize",children:"JWT Information"}),(0,i.jsxs)("div",{className:"m-4",children:[(0,i.jsx)("p",{children:"JWT means JSON Web Token. This token is used to secure your website."}),(0,i.jsxs)("ul",{className:"list-disc",children:[(0,i.jsxs)("li",{children:["First of all you have to fill JWT secret key. You can generate the secret key from ",(0,i.jsx)(l(),{href:"http://www.sha1-online.com/",children:(0,i.jsx)("a",{target:"_blank",rel:"opener",children:"here"})}),". Now you have to put any value to generate the secret key(hash value). Now copy the secret value and paste it in JWT secret key field."]}),(0,i.jsx)("li",{children:"Jwt Expire time: Now you have to set JWT expire time  like 1h or 5h (A maximum of 24h should be given)."}),(0,i.jsx)("li",{children:"Jwt Expire in Remember me option: In the case of log in section if you want to activate the remember me option just put expire time like 365h."})]}),(0,i.jsx)("img",{className:"h-auto w-auto",src:"/images/s3.png",alt:""})]})]}),(0,i.jsxs)("div",{className:"my-4",children:[(0,i.jsx)("h5",{className:"border-b-[1px] border-black capitalize",children:"AWS Bucket Information"}),(0,i.jsxs)("div",{className:"m-4",children:[(0,i.jsxs)("p",{children:["Please fill out proper AWS bucket information. ",(0,i.jsx)(l(),{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/configuring-bucket-key.html",children:(0,i.jsx)("a",{target:"_blank",rel:"opener",children:"Click Here for proper instructions"})})]}),(0,i.jsx)("img",{className:"h-auto w-auto",src:"/images/s4.png",alt:""})]})]}),(0,i.jsx)("div",{className:"my-4 shadow p-4",children:(0,i.jsx)("p",{className:"text-red-500 font-semibold mb-0",children:"After completion this process you have to restart the server."})}),(0,i.jsxs)("div",{className:"my-4",children:[(0,i.jsx)("h5",{className:"border-b-[1px] border-black capitalize",children:"Server Restart"}),(0,i.jsxs)("div",{className:"m-4",children:[(0,i.jsx)("p",{children:"Go to your cPanel or server panel. Click your backend folder."}),(0,i.jsx)("img",{className:"h-auto w-auto",src:"/images/restart1.png",alt:""})]}),(0,i.jsxs)("div",{className:"m-4",children:[(0,i.jsx)("p",{children:"Then you will get this kind of pop up, follow the instructions in the picture."}),(0,i.jsx)("img",{className:"h-auto w-auto",src:"/images/restart2.png",alt:""})]}),(0,i.jsxs)("div",{className:"m-4",children:[(0,i.jsx)("p",{children:"Then click on the Restart button."}),(0,i.jsx)("img",{className:"h-auto w-auto",src:"/images/restart3.png",alt:""})]}),(0,i.jsx)("div",{className:"my-4 shadow p-4",children:(0,i.jsx)("p",{className:"text-red-500 font-semibold mb-0",children:"Then go to your website and reload this page. Then you can see your home page."})})]})]})})}}},function(e){e.O(0,[1228,5445,955,994,4090,3617,9774,2888,179],(function(){return s=4013,e(e.s=s);var s}));var s=e.O();_N_E=s}]);