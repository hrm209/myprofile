"use strict";(self.webpackChunkmyprofile=self.webpackChunkmyprofile||[]).push([[203],{6672:(e,t,a)=>{a(2194),a(7313),a(6417)},2203:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var s=a(816),i=a.n(s),n=a(2611),l=a(7313),o=(a(6672),a(1881)),d=a.n(o),r=a(6417);const c=function(){(0,l.useRef)("");const e={height:"100px"},t=(0,l.useRef)(20),a=5,s=5,[o,c]=(0,l.useState)(""),h=770,f=()=>Math.random().toString(36).replace("0.","ahihi"),x={avatar:f(),contactInfo:f(),intro:f(),skillLeftPast:f(),skillLeft:f(),skillRight:f(),c0:f(),c1:f(),c2:f(),c3:f(),c4:f(),workEXP:f(),instruction:f(),footer:f()},p=e=>5+e.w+e.l+30,u=e=>5+e.t+e.h+30,m=e=>735-e.w,y={w:100,h:100,l:window.innerWidth/2-385,t:20},j={w:m(y),h:100,l:p(y),t:y.t},v={w:h,h:130,l:y.l,t:u(y)},g={w:570,h:455,l:y.l,t:u(v)},w={w:570,h:455,l:y.l,t:u(v)},N={w:m(w),h:w.h,l:p(w),t:w.t},S={w:126,h:126,l:y.l,t:u(w)},b={w:h,h:30,l:y.l,t:u(S)};(0,l.useEffect)((()=>{let e=document.getElementById("cursor");document.onmousemove=t=>{e.style.display="block",e.style.left=t.pageX-15+"px",e.style.top=t.pageY-8+"px",e.style.transition="all 3s ease-out"};const t=window.location.pathname.slice(1);"view"===t.slice(0,4)&&d().get("https://apiv2.truonghuyhoang.com"+"/getViewMode/".concat(t),{auth:{username:"UH7aBVgLKc0Vagjifodghjdf123vnzedeH43By-6381hCuyw",password:"uxrOZjZlElp43VKFvnz54fd89-fds-dPqA7qAFM43GqECCcfvZjMopA"}}).then((function(e){c("full")})).catch((function(e){c("")}))}),[]);const E=e=>{var i=!1,n=0,l=0;if(document.querySelector("#".concat(e))){const o=document.querySelector("#".concat(e));document.querySelector("#".concat(e)).addEventListener("mousedown",(function(e){var{clientX:a,clientY:s}=e;n=a-o.offsetLeft,l=s-o.offsetTop,i=!0,t.current+=2,o.style.zIndex=String(t.current)})),window.addEventListener("mouseup",(function(){i=!1})),window.addEventListener("mousemove",(e=>{if(i){var{clientX:t,clientY:d}=e;t-=n,d-=l,o.style.top=d-d%s+"px",o.style.left=t-t%a+"px",o.style.transition="all .3s ease-out"}}))}},k=e=>{let t=[],a=0,s=[];for(const i of e)"_"===i?(t.push((0,r.jsx)("div",{style:{display:"flex"},children:s})),a=1,s=[]):" "===i?s.push((0,r.jsx)("div",{children:"\xa0"})):s.push((0,r.jsx)(n.E.div,{className:"dict-head-text",initial:{rotate:350*Math.random()+35},animate:{rotate:0},transition:{duration:6,delay:7*Math.random()+13,type:"spring",stiffness:200},children:i}));return a&&t.push((0,r.jsx)("div",{style:{display:"flex"},children:s})),a?(0,r.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:t}):(0,r.jsx)("div",{style:{display:"flex"},children:s})},P=e=>{let t="";const a=i()().diff(i()(e),"years");Number(a)>0&&(t+=a+"Y ");const s=i()().diff(i()(e),"months");if(Number(s)>0&&(t+=s%12+"M "),0===s){t+=i()().diff(i()(e),"days")+"D"}else{const e=i()().date();Number(e)>0&&(t+=e+"D")}return t};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{id:"cursor",children:(0,r.jsx)("div",{className:"heart"})}),(0,r.jsx)("div",{className:"bg",style:{overflow:"auto",position:"relative",backgroundSize:"150%"},children:(0,r.jsxs)("div",{className:"container",style:{},children:[((0,l.useEffect)((()=>{E(x.avatar)}),[]),(0,r.jsx)(n.E.div,{id:x.avatar,animate:{opacity:[0,1],y:[-100,0],transition:{delay:1,duration:1}},className:"sd card cenAll",style:{width:y.w,height:y.h,position:"absolute",left:y.l,top:y.t},children:(0,r.jsx)("i",{className:"fa-solid fa-user-tie",style:{fontSize:"70px",opacity:".6"}})})),((0,l.useEffect)((()=>{E(x.contactInfo)}),[]),(0,r.jsxs)(n.E.div,{id:x.contactInfo,animate:{y:[-100,0],opacity:[0,1],transition:{delay:1.5,duration:1}},className:"sd card",style:{position:"absolute",zIndex:2,display:"flex",flexDirection:"column",justifyContent:"space-between",...e,width:j.w,height:"".concat(e.height),top:j.t,left:p(y)},children:[(0,r.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:(0,r.jsx)("div",{className:"name",children:"TRUONG HUY HOANG | DEV"})}),(0,r.jsxs)("div",{style:{fontSize:16.5,display:"flex",justifyContent:"space-between"},children:[(0,r.jsxs)("div",{style:{textAlign:"left"},children:[(0,r.jsx)("i",{className:"fa-solid fa-mars-and-venus"}),"\xa0\xa0Male",(0,r.jsx)("br",{}),(0,r.jsx)("i",{className:"fa-solid fa-calendar"}),"\xa0\xa0","full"===o?"Nineteen Ninety Eight":"Nineteen...?",(0,r.jsx)("br",{}),(0,r.jsx)("i",{className:"fa-brands fa-discord"}),"\xa0__alulu__"]}),(0,r.jsxs)("div",{style:{textAlign:"right"},onClick:()=>{navigator.clipboard.writeText("admin@truonghuyhoang.com")},children:["Da lat, VN \xa0",(0,r.jsx)("i",{className:"fa-solid fa-location-dot"}),(0,r.jsx)("br",{}),"admin@truonghuyhoang.com \xa0",(0,r.jsx)("i",{className:"fa-solid fa-envelope"}),(0,r.jsx)("br",{}),"full"===o?"+84 985.159.477":"+84 985.***.***"," \xa0",(0,r.jsx)("i",{className:"fa-solid fa-phone"})]})]})]})),((0,l.useEffect)((()=>{E(x.skillLeftPast)}),[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(n.E.div,{id:x.skillLeftPast,className:"sd card",animate:{opacity:[0,1],x:[-100,10,0],transition:{duration:2,delay:2.5}},style:{position:"absolute",top:g.t,left:g.l,width:g.w,height:g.h},children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-around",fontSize:"19px",fontWeight:"bold",textShadow:"#474747 3px 5px 2px"},children:[(0,r.jsx)("div",{style:{width:"70px",height:"3px",background:"#ffd1dc",borderRadius:"5px"}}),(0,r.jsx)("div",{children:" PROJECT - SOLO (Before graduation)"}),(0,r.jsx)("div",{style:{width:"70px",height:"3px",background:"#ffd1dc",borderRadius:"5px"}})]}),(0,r.jsxs)(n.E.div,{className:"titPro",children:[(0,r.jsxs)("div",{className:"ctn",children:[(0,r.jsx)("i",{className:"fa-solid fa-users-viewfinder",style:{color:"#24305F",fontSize:"20px"}}),"\xa0Attendance tracker"]}),(0,r.jsx)("div",{className:"wave",style:{width:300,height:300}})]}),(0,r.jsxs)(n.E.div,{style:{lineHeight:"21px",fontSize:"17px"},animate:{opacity:[0,1,.1,.5,1]},transition:{ease:"easeOut",duration:7,delay:3*Math.random()+9},children:["\xa0+View/Tracking person with a normal camera.",(0,r.jsx)("br",{}),"\xa0+Platform: Windows.",(0,r.jsx)("br",{}),"\xa0+Language/Library: Python, HTML, CSS, JS, Eel, TinyDB, OpenCV, FR."]}),(0,r.jsxs)(n.E.div,{className:"titPro",children:[(0,r.jsxs)("div",{className:"ctn",children:[(0,r.jsx)("i",{className:"fa-solid fa-repeat",style:{color:"#24305F",fontSize:"20px"}}),"\xa0Translate from Vietnamese to K'HO language"]}),(0,r.jsx)("div",{className:"wave",style:{top:"-250px",width:500,height:500}})]}),(0,r.jsxs)(n.E.div,{style:{lineHeight:"21px",fontSize:"17px"},animate:{opacity:[0,1,.1,.5,1]},transition:{ease:"easeOut",duration:7,delay:3*Math.random()+9},children:["\xa0+Support: sentence, word and number.",(0,r.jsx)("br",{}),"\xa0+Platform: Windows, Android, Web (",(0,r.jsx)("a",{style:{color:"white"},target:"_blank",href:"https://tudienkho.com",children:"tudienkho.com"}),"), ChatBot.",(0,r.jsx)("br",{}),"\xa0+Language/Library: Python, ReactJs, ReactNative, MongoDB, Flask-API, Discord.py."]}),(0,r.jsxs)(n.E.div,{className:"titPro",children:[(0,r.jsxs)("div",{className:"ctn",children:[(0,r.jsx)("i",{className:"fa-solid fa-magnifying-glass",style:{color:"#24305F",fontSize:"20px"}}),"\xa0Search: Student/Teacher information, Mark, Contact..."]}),(0,r.jsx)("div",{className:"wave",style:{top:-295,width:580,height:580}})]}),(0,r.jsxs)(n.E.div,{style:{lineHeight:"21px",fontSize:"17px"},animate:{opacity:[0,1,.1,.5,1]},transition:{ease:"easeOut",duration:7,delay:3*Math.random()+9},children:["\xa0+Platform: Chatbot (Facebook Messenger).",(0,r.jsx)("br",{}),"\xa0+Language/Library: Python, PostgreSQL, OpenPyXL, Flask-API, Selenium (Web Crawl)."]})]})})),((0,l.useEffect)((()=>{E(x.skillLeft)}),[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(n.E.div,{id:x.skillLeft,className:"sd card",animate:{opacity:[0,1],x:[-100,10,0],transition:{duration:2,delay:9}},style:{position:"absolute",top:w.t,left:w.l,width:w.w,height:w.h,zIndex:t.current},children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-around",fontSize:"19px",fontWeight:"bold",textShadow:"#474747 3px 5px 2px"},children:[(0,r.jsx)("div",{style:{width:200,height:"3px",background:"#ffd1dc",borderRadius:"5px"}}),(0,r.jsx)("div",{children:"CAREER"}),(0,r.jsx)("div",{style:{width:200,height:"3px",background:"#ffd1dc",borderRadius:"5px"}})]}),(0,r.jsxs)(n.E.div,{className:"titPro",children:[(0,r.jsxs)("div",{className:"ctn",children:[(0,r.jsx)("i",{className:"fa-solid fa-pager",style:{color:"#24305F",fontSize:"20px"}}),"\xa0Scan Info Paper (ID Card, Passport)"]}),(0,r.jsx)("div",{className:"wave",style:{width:400,height:300}})]}),(0,r.jsx)(n.E.div,{style:{lineHeight:"21px",fontSize:"17px"},animate:{opacity:[0,1,.1,.5,1]},transition:{ease:"easeOut",duration:7,delay:3*Math.random()+9},children:"\xa0+Backend can read info from image (ID Card, Passport). \xa0+Language/Library: Python, OpenCV, FastAPI, MongoDB, OCR,..."}),(0,r.jsxs)(n.E.div,{className:"titPro",children:[(0,r.jsxs)("div",{className:"ctn",children:[(0,r.jsx)("i",{className:"fa-solid fa-users-viewfinder",style:{color:"#24305F",fontSize:"20px"}}),"\xa0Connect Time Attendance Machine to HRM System "]}),(0,r.jsx)("div",{className:"wave",style:{top:"-250px",width:550,height:500}})]}),(0,r.jsxs)(n.E.div,{style:{lineHeight:"21px",fontSize:"17px"},animate:{opacity:[0,1,.1,.5,1]},transition:{ease:"easeOut",duration:7,delay:3*Math.random()+9},children:["\xa0+Backend can automatically retrieve attendance record daily then save to local DB and query them.",(0,r.jsx)("br",{}),"\xa0+Language/Library: NodeJS, ExpressJS, MongoDB, SDK-Device,..."]}),(0,r.jsxs)(n.E.div,{className:"titPro",children:[(0,r.jsxs)("div",{className:"ctn",children:[(0,r.jsx)("i",{className:"fa-solid fa-network-wired",style:{color:"#24305F",fontSize:"20px"}}),"\xa0IOT - Connect Tuya Switch to PMS System"]}),(0,r.jsx)("div",{className:"wave",style:{top:-230,width:460,height:460}})]}),(0,r.jsxs)(n.E.div,{style:{lineHeight:"21px",fontSize:"17px"},animate:{opacity:[0,1,.1,.5,1]},transition:{ease:"easeOut",duration:7,delay:3*Math.random()+9},children:["\xa0+Track room's tuya switch on/off and display on PMS frontend.",(0,r.jsx)("br",{}),"\xa0+Language/Library: Python, SocketIO, Flask,..."]}),(0,r.jsxs)(n.E.div,{className:"titPro",children:[(0,r.jsxs)("div",{className:"ctn",children:[(0,r.jsx)("i",{className:"fa-solid fa-tv",style:{color:"#24305F",fontSize:"20px"}}),"\xa0IPTV - Android App For Smart TV"]}),(0,r.jsx)("div",{className:"wave",style:{top:-200,width:410,height:400}})]}),(0,r.jsxs)(n.E.div,{style:{lineHeight:"21px",fontSize:"17px"},animate:{opacity:[0,1,.1,.5,1]},transition:{ease:"easeOut",duration:7,delay:3*Math.random()+9},children:["\xa0+Features: Watch TV, Launch App, Order Food & Drink, Request Clean Room, View Plans,...",(0,r.jsx)("br",{}),"\xa0+Language/Library: Kotlin, SignalR,..."]}),(0,r.jsxs)(n.E.div,{className:"titPro",children:[(0,r.jsxs)("div",{className:"ctn",children:[(0,r.jsx)("i",{className:"fa-solid fa-laptop-code",style:{color:"#24305F",fontSize:"20px"}}),"\xa0Frontend Dev, Discord Bot, Tool,..."]}),(0,r.jsx)("div",{className:"wave",style:{top:-200,width:390,height:390}})]}),(0,r.jsx)(n.E.div,{style:{lineHeight:"21px",fontSize:"17px"},animate:{opacity:[0,1,.1,.5,1]},transition:{ease:"easeOut",duration:7,delay:3*Math.random()+9},children:"\xa0+..."})]})})),((0,l.useEffect)((()=>{E(x.skillRight)}),[]),(0,r.jsx)(n.E.div,{id:x.skillRight,animate:{opacity:[0,1],x:[100,-10,0],transition:{duration:2,delay:2.5}},className:"sd card skillRCon",style:{position:"absolute",top:N.t,left:N.l,width:N.w,height:N.h},children:[[(0,r.jsx)(n.E.div,{animate:{rotate:[60,-60,60]},transition:{ease:"easeInOut",duration:10,repeat:1/0},children:(0,r.jsx)("i",{className:"fa-brands fa-python",style:{fontSize:23.5}})}),"Python","90"],[(0,r.jsx)(n.E.div,{animate:{rotate:[-60,60,-60]},transition:{ease:"easeInOut",duration:10,repeat:1/0},children:(0,r.jsx)("i",{className:"fa-brands fa-node-js",style:{fontSize:23.5}})}),"ReactJS,   Express","75"],[(0,r.jsx)(n.E.div,{animate:{rotate:[60,-60,60]},transition:{ease:"easeInOut",duration:10,repeat:1/0},children:(0,r.jsx)("i",{className:"fa-brands fa-react",style:{fontSize:23.5}})}),"Kotlin, ReactNative","70"],[(0,r.jsx)(n.E.div,{animate:{rotate:[-60,60,-60]},transition:{ease:"easeInOut",duration:10,repeat:1/0},children:(0,r.jsx)("i",{className:"fa-solid fa-database",style:{fontSize:23.5}})}),"SQL-NoSQL","55"],[(0,r.jsx)(n.E.div,{animate:{rotate:[60,-60,60]},transition:{ease:"easeInOut",duration:10,repeat:1/0},children:(0,r.jsx)("i",{className:"fa-solid fa-square-root-variable",style:{fontSize:23.5}})}),"Data Structure Algorithms","60"],[(0,r.jsx)(n.E.div,{animate:{rotate:[-60,60,-60]},transition:{ease:"easeInOut",duration:10,repeat:1/0},children:(0,r.jsx)("i",{className:"fa-solid fa-language",style:{fontSize:23.5}})}),"English","75"],[(0,r.jsx)(n.E.div,{animate:{rotate:[60,-60,60]},transition:{ease:"easeInOut",duration:10,repeat:1/0},children:(0,r.jsx)("i",{className:"fa-solid fa-screwdriver-wrench",style:{fontSize:23.5}})}),"Tool, Problem solving...","85"]].map(((e,t)=>{return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"ic",style:{fontSize:15},children:[e[0],e[1]]}),(a=e[2],(0,r.jsx)("div",{className:"draw-container",children:(0,r.jsx)("div",{className:"outer",children:(0,r.jsx)(n.E.div,{animate:{width:["0%","".concat(a,"%")]},transition:{ease:"easeOut",duration:15,delay:4*Math.random()+14},className:"inner"})})}))]});var a}))})),(()=>{(0,l.useEffect)((()=>{E(x.c0),E(x.c1),E(x.c2),E(x.c3),E(x.c4)}),[]);let e=10;return(0,r.jsx)(r.Fragment,{children:[["fa-solid fa-graduation-cap","GRADUATION_YEAR","full"===o?"2022":"202x"],["fa-solid fa-code","EXP","full"===o?P("2022-03-01"):"> 6M"],["fa-solid fa-heart","RELATIONSHIP","Single"],["fa-solid fa-people-group","Can Teamwork?","Yes"],["fa-solid fa-user-check","Can Work_Independently?","Yes"]].map(((t,a)=>{const s=a+1;return e-=1,(0,r.jsxs)(n.E.div,{id:x["c"+a],style:{zIndex:e,left:0==a?S.l:S.l+a*(S.w+30+5),width:S.w,height:S.h,position:"absolute",top:S.t},animate:{opacity:[0,1],x:[-100,0],transition:{duration:1,delay:4+s/2}},className:"sd card card-add",children:[(0,r.jsx)(n.E.div,{animate:{opacity:[1,.5,1,.2,.8],transition:{ease:"easeInOut",delay:2*Math.random()+1,duration:5,repeat:1/0}},children:(0,r.jsx)("i",{className:t[0],style:{fontSize:"20px"}})}),(0,r.jsx)("div",{className:"title",children:k(t[1])}),(0,r.jsx)("div",{className:"desc1",children:k(t[2])})]})}))})})(),((0,l.useEffect)((()=>{E(x.workEXP)}),[]),(0,r.jsxs)(n.E.div,{animate:{y:[-100,0],opacity:[0,1],transition:{delay:7,duration:2}},id:x.workEXP,className:"sd card work",style:{width:v.w,position:"absolute",top:v.t,left:v.l,height:v.h},id:x.workEXP,children:[(0,r.jsxs)("div",{className:"header",children:[(0,r.jsx)("div",{style:{width:90,height:"3px",background:"#ffd1dc",borderRadius:"5px"}}),"WORK EXPERIENCE",(0,r.jsx)("div",{style:{width:90,height:"3px",background:"#ffd1dc",borderRadius:"5px"}})]}),(0,r.jsxs)("div",{className:"time",children:[(0,r.jsxs)("div",{style:{textAlign:"center",opacity:".5"},children:[(0,r.jsx)("div",{className:"tit-past",children:"full"===o?"CubeTech Ltd":"C***Tec* Ltd"}),(0,r.jsx)("div",{className:"past",children:"full"===o?"2022/03 - 2022/06":"... /... - ... /..."}),(0,r.jsxs)("div",{className:"past-sub",children:["ReactJS, NodeJS, .NET,",(0,r.jsx)("br",{})," MongoDB, SQL Server"]})]}),(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsxs)("div",{className:"tit-now",children:[(0,r.jsx)("i",{className:"fa-solid fa-building-circle-check",style:{color:"#24305F"}})," \xa0","full"===o?"Erateq Corp":"E****q Corp"]}),(0,r.jsx)("div",{className:"now",children:"full"===o?"2022/07 - now":"... /... - ... /..."}),(0,r.jsxs)("div",{className:"now-sub",children:["Kotlin, Python, ReactJS, NodeJS,",(0,r.jsx)("br",{})," .NET, MongoDB, SQL Server"]})]})]})]})),(0,r.jsx)("div",{className:"",style:{width:b.w,position:"absolute",top:b.t,left:b.l,height:b.h,background:"transparent"},id:x.footer,children:(0,r.jsx)("div",{className:"footer",style:{fontSize:16.5,textAlign:"center"},children:"Non-Responsive Website :)))"})})]})}),(0,r.jsx)("div",{style:{userSelect:"none",position:"fixed",bottom:0,right:0,color:"pink",textShadow:"2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,\n               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",fontSize:20},children:"Made by me <3"})]})}}}]);