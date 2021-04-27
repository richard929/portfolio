(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{148:function(e,t,i){},450:function(e,t,i){},451:function(e,t,i){},452:function(e,t,i){"use strict";i.r(t);var s=i(3),n=i(53),a=i.n(n),c=(i(148),i(58)),o=i(5),r=i(6),l=i(12),d=i(14),m=i(31),j=i(33),h=i(0),p=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(o.a)(this,i),(s=t.call(this,e)).handleScroll=function(e){window.scrollY>10?s.setState({isSticky:!0}):s.setState({isSticky:!1})},s.handleClickDocument=function(e){e.target.classList.contains("site-nav-backdrop")&&s.setState({isOpenSidebar:!1})},s.state={isSticky:!1,isOpenSidebar:!1},s.openSidebar=s.openSidebar.bind(Object(m.a)(s)),s.onHandleClickLink=s.onHandleClickLink.bind(Object(m.a)(s)),s}return Object(r.a)(i,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),document.addEventListener("click",this.handleClickDocument)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),document.removeEventListener("click",this.handleClickDocument)}},{key:"openSidebar",value:function(){this.setState({isOpenSidebar:!0})}},{key:"onHandleClickLink",value:function(){this.setState({isOpenSidebar:!1})}},{key:"render",value:function(){var e=this.state,t=e.isSticky,i=e.isOpenSidebar,n=this.props.portfolioData;return Object(h.jsx)("header",{className:"site-header ".concat(t?"site-header--sticky":""," "),children:Object(h.jsxs)("div",{className:"site-header__wrapper",children:[Object(h.jsx)("div",{className:"site-header__brand",children:Object(h.jsx)(j.Link,{className:"site-header__link",activeClass:"site-nav__link--active",to:"home",href:"#home",spy:!0,smooth:!0,offset:0,duration:500,children:Object(h.jsx)("img",{src:t?n.logo:n.logoWhite,alt:"",className:"site-header__logo"})})}),Object(h.jsx)("div",{className:"site-header__spacer"}),Object(h.jsx)("button",{type:"button",className:"site-header__btn-mobile",onClick:this.openSidebar,children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18.338",height:"12",viewBox:"0 0 18.338 12",className:"site-header__burger-icon ".concat(t?"site-header__burger-icon--dark":""),children:Object(h.jsxs)("g",{id:"Group_6148","data-name":"Group 6148",transform:"translate(-288 -20)",children:[Object(h.jsx)("rect",{id:"Rectangle_2400","data-name":"Rectangle 2400",width:"18.338",height:"2",rx:"1",transform:"translate(288 20)",fill:"#fff"}),Object(h.jsx)("rect",{id:"Rectangle_2401","data-name":"Rectangle 2401",width:"14.94",height:"2",rx:"1",transform:"translate(288 25)",fill:"#fff"}),Object(h.jsx)("rect",{id:"Rectangle_2402","data-name":"Rectangle 2402",width:"18.338",height:"2",rx:"1",transform:"translate(288 30)",fill:"#fff"})]})})}),i&&Object(h.jsxs)(s.Fragment,{children:[" ",Object(h.jsx)("div",{className:"site-nav-backdrop"})," "]}),Object(h.jsx)("div",{className:"site-sidebar ".concat(i?"is-open":"")}),Object(h.jsxs)("ul",{className:"site-nav site-sidebar  ".concat(i?"is-open":""),children:[Object(h.jsx)("li",{className:"site-nav__list",children:Object(h.jsx)(j.Link,{onClick:this.onHandleClickLink,className:"site-nav__link",activeClass:"site-nav__link--active",to:"project",href:"#project",spy:!0,smooth:!0,offset:-20,duration:500,children:"Projects"})}),Object(h.jsx)("li",{className:"site-nav__list",children:Object(h.jsx)(j.Link,{onClick:this.onHandleClickLink,href:"#work",className:"site-nav__link",activeClass:"site-nav__link--active",to:"work",spy:!0,smooth:!0,offset:-30,duration:500,children:"Works"})}),Object(h.jsx)("li",{className:"site-nav__list",children:Object(h.jsx)(j.Link,{onClick:this.onHandleClickLink,href:"#contact",className:"site-nav__link",activeClass:"site-nav__link--active",to:"contact",spy:!0,smooth:!0,offset:-30,duration:500,children:"Contact"})})]})]})})}}]),i}(s.Component),b=i(136),g=i.n(b),u=i.p+"static/media/profile.11ebffc5.png",v=function(e){var t=e.portfolioData;return Object(h.jsxs)("section",{className:"site-intro site-intro--with-clipmask",children:[Object(h.jsx)(g.a,{className:"site-intro__canvas"}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"site-intro__wrapper",children:[Object(h.jsx)("div",{className:"site-intro__main",children:Object(h.jsxs)("div",{className:"site-intro__intro",children:[Object(h.jsxs)("h2",{className:"site-intro__name",children:[" I'm ",t.name,". "]}),Object(h.jsxs)("h2",{className:"site-intro__heading",children:[" ",t.role," "]}),Object(h.jsxs)("h1",{className:"site-intro__primary",children:[" ",t.intro," "]}),Object(h.jsx)("div",{className:"site-intro__action",children:Object(h.jsx)(j.Link,{className:"btn btn-outline-white btn-radius btn-lg",to:"project",href:"#project",spy:!0,smooth:!0,offset:-30,duration:500,children:"See my works"})})]})}),Object(h.jsx)("div",{className:"site-intro__logo-wrapper",children:Object(h.jsx)("img",{src:u,alt:"",className:"site-intro__logo"})})]})})]})},f=function(e){return Object(h.jsx)("section",{className:"site-section site-standard",id:"project",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"site-section__icon",children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"33",height:"7",viewBox:"0 0 73.94 14.19",children:Object(h.jsx)("polyline",{points:"2.83 2.83 11.36 11.36 19.9 2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04 2.83 62.58 11.36 71.11 2.83",style:{strokeDashoffset:"2e-05",strokeDasharray:"none"}})})}),Object(h.jsx)("h1",{className:"site-heading",children:" My Recent Projects "}),Object(h.jsx)("div",{className:"row",children:e.children})]})})},x=function(e){var t=e.handleClickProject,i=e.imageUrl,s=e.title;e.link;return Object(h.jsxs)("div",{className:"col-4",children:[Object(h.jsx)("div",{className:"site-project",onClick:t,children:Object(h.jsxs)("div",{className:"site-project__cover",children:[Object(h.jsx)("div",{className:"site-project__img",style:{backgroundImage:'url("'.concat(i,'")')}}),Object(h.jsx)("div",{className:"site-project__overlay",children:Object(h.jsx)("div",{className:"site-project__info",children:Object(h.jsxs)("button",{onClick:t,className:"btn btn-outline-white btn-radius btn-md",type:"button",children:[" ","Learn More"," "]})})})]})}),Object(h.jsxs)("div",{className:"site-project__name",onClick:t,children:[s," "]})]})},O=function(e){var t=e.title,i=e.link,s=e.description,n=e.technology,a=e.codeLink,c=e.imageUrl,o=e.videoUrl;return Object(h.jsx)("div",{className:"project-info",children:Object(h.jsxs)("div",{className:"project-info__info",children:[Object(h.jsxs)("div",{className:"project-info__title",children:[" ",t," "]}),Object(h.jsxs)("div",{className:"project-info__desc",children:[" ",s," "]}),n.length>0&&Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"project-info__heading",children:" Technology used "}),Object(h.jsxs)("div",{className:"project-info__body",children:[Object(h.jsx)("ul",{className:"project-info__tech",children:n.map((function(e,t){return Object(h.jsxs)("li",{children:[" ",e," "]})}))}),o?Object(h.jsx)("video",{controls:!0,loop:!0,playsInline:!0,muted:!0,className:"project-info__video",children:Object(h.jsx)("source",{src:o})}):Object(h.jsx)("img",{className:"project-info__image",src:c,alt:s})]})]}),Object(h.jsxs)("div",{className:"project-info__action",children:[""!==i&&Object(h.jsxs)("a",{className:"btn btn-primary  bt-lg",target:"_blank",rel:"noopener noreferrer",href:i,children:[" ","Visit Website"," "]}),""!==a&&Object(h.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline-primary bt-lg",href:a,children:[Object(h.jsx)("svg",{viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",className:"btn-icon",children:Object(h.jsx)("path",{d:"M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"})}),"View Code"]})]})]})})},_=function(e){var t=e.portfolioData.workExp.map((function(e,t){return Object(h.jsx)("div",{className:"stepper__list",children:Object(h.jsxs)("div",{className:"stepper__item",children:[Object(h.jsx)("div",{className:"stepper__step",children:Object(h.jsxs)("div",{className:"stepper__timeline",children:[Object(h.jsx)("div",{className:"stepper__circle",children:" "}),Object(h.jsxs)("div",{className:"stepper__timeline-heading",children:[" ",e.title," "]})]})}),Object(h.jsx)("div",{className:"stepper__info",children:Object(h.jsxs)("div",{className:"stepper__body",children:[Object(h.jsxs)("h3",{className:"stepper__title",children:[e.company," ",Object(h.jsxs)("span",{className:"stepper__date",children:[" ",e.date," "]})," "]}),Object(h.jsxs)("div",{className:"stepper__sub",children:[" ",e.description," "]})]})})]})},t)}));return Object(h.jsx)("section",{className:"site-section  site-section--with-background",id:"work",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"site-section__icon stroke-white",children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"33",height:"7",viewBox:"0 0 73.94 14.19",children:Object(h.jsx)("polyline",{points:"2.83 2.83 11.36 11.36 19.9 2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04 2.83 62.58 11.36 71.11 2.83",style:{strokeDashoffset:"2e-05",strokeDasharray:"none"}})})}),Object(h.jsx)("h1",{className:"site-heading text-white",children:" Employment History "}),Object(h.jsx)("div",{className:"stepper",children:t})]})})},k=i(137),N=i.n(k),w=i(143),y=i(39),S=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(o.a)(this,i),(s=t.call(this,e)).onSubmit=function(e,t){var i=t.resetForm;s.setState({isSending:!0}),N.a.post("https://formcarry.com/s/r9snlWBh5biP",e,{headers:{Accept:"application/json"}}).then((function(e){"success"===e.data.status&&(s.setState({isSending:!1,isShowMsg:!0}),i())})).catch((function(e){console.log(e)}))},s.state={isShowMsg:!1,isSending:!1},s}return Object(r.a)(i,[{key:"render",value:function(){var e=this.state,t=e.isSending,i=e.isShowMsg;return Object(h.jsx)("section",{className:"site-section",id:"contact",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"site-section__icon",children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"33",height:"7",viewBox:"0 0 73.94 14.19",children:Object(h.jsx)("polyline",{points:"2.83 2.83 11.36 11.36 19.9 2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04 2.83 62.58 11.36 71.11 2.83",style:{strokeDashoffset:"2e-05",strokeDasharray:"none"}})})}),Object(h.jsx)("h1",{className:"site-heading",children:" Contact "}),Object(h.jsx)(w.a,{className:"site-form",initialValues:{name:"",email:"",message:""},validate:function(e){var t={};return e.name||(t.name="Name is required"),e.email||(t.email="Email is required"),e.message||(t.message="Message is required"),t},validationSchema:y.a().shape({name:y.b().required(),email:y.b().email().required(),message:y.b().required()}),onSubmit:this.onSubmit,render:function(e){var n=e.handleChange,a=e.handleBlur,c=e.values,o=e.errors,r=e.handleSubmit,l=e.touched;return Object(h.jsx)(s.Fragment,{children:Object(h.jsxs)("form",{className:"site-form",onSubmit:r,children:[i&&Object(h.jsx)("div",{className:"alert alert-success",children:"Thank you for sending me a message!"}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-6",children:Object(h.jsxs)("div",{className:"site-form__form-group",children:[Object(h.jsxs)("label",{htmlFor:"input-name",className:"site-form__label",children:[" ","Name"," "]}),Object(h.jsx)("input",{type:"text",name:"name",onBlur:a,onChange:n,className:"site-form__input ".concat(o.name&&l.name?"site-form__input-error":""),id:"input-name",value:c.name}),o.name&&l.name&&Object(h.jsxs)("div",{className:"site-form__error",children:[" ",o.name," "]})]})}),Object(h.jsx)("div",{className:"col-6",children:Object(h.jsxs)("div",{className:"site-form__form-group",children:[Object(h.jsxs)("label",{htmlFor:"input-email",className:"site-form__label",children:[" ","Email"," "]}),Object(h.jsx)("input",{type:"email",name:"email",onChange:n,className:"site-form__input ".concat(o.email&&l.email?"site-form__input-error":""),id:"input-email",value:c.email}),o.email&&l.email&&Object(h.jsxs)("div",{className:"site-form__error",children:[" ",o.email," "]})]})})]}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-12",children:Object(h.jsxs)("div",{className:"site-form__form-group",children:[Object(h.jsxs)("label",{htmlFor:"input-message",className:"site-form__label",children:[" ","Message"," "]}),Object(h.jsx)("textarea",{type:"text",name:"message",onChange:n,className:"site-form__textarea ".concat(o.message&&l.message?"site-form__input-error":""),rows:"8",id:"input-message",value:c.message}),o.message&&l.message&&Object(h.jsxs)("div",{className:"site-form__error",children:[" ",o.message," "]})]})})}),Object(h.jsx)("div",{className:"site-form__action",children:Object(h.jsx)("button",{type:"submit",className:"btn btn-primary btn-lg btn-radius",disabled:t,children:t?Object(h.jsx)("span",{className:"loading-icon",children:" "}):"Submit"})})]})})}})]})})}}]),i}(s.Component),C=function(){return Object(h.jsxs)("footer",{className:"site-footer site-footer--with-clipmask",children:[Object(h.jsx)("div",{className:"site-footer__quote",children:'"Everyday living is learning."'}),Object(h.jsxs)("div",{className:"site-social",children:[Object(h.jsx)("div",{className:"site-social__list",children:Object(h.jsx)("a",{href:"https://www.linkedin.com/in/richard-zh/",className:"site-social__link",children:Object(h.jsx)("svg",{className:"site-social__icon",viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",children:Object(h.jsx)("path",{d:"M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333zM279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"})})})}),Object(h.jsx)("div",{className:"site-social__list",children:Object(h.jsx)("a",{href:"https://github.com/richard929",className:"site-social__link",children:Object(h.jsx)("svg",{viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",className:"site-social__icon",children:Object(h.jsx)("path",{d:"M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"})})})}),Object(h.jsx)("div",{className:"site-social__list",children:Object(h.jsx)("a",{href:"https://stackoverflow.com/users/12233187/richard-zhan",className:"site-social__link",children:Object(h.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 118",className:"site-social__icon",children:[Object(h.jsx)("polygon",{points:"84.072,107.351 84.072,75.8 94.588,75.8 94.588,117.869 0,117.869 0,75.8 10.516,75.8 \r 10.516,107.351 "}),Object(h.jsx)("path",{d:"M22.089,72.898l51.458,10.815l2.163-10.292L24.252,62.606L22.089,72.898z M28.897,48.259l47.666,22.199\r l4.44-9.533L33.337,38.726L28.897,48.259z M42.088,24.874l40.405,33.65l6.73-8.081l-40.405-33.65L42.088,24.874z M68.171,0\r l-8.438,6.276l31.381,42.191l8.438-6.276L68.171,0z M21.044,96.833l52.582,0V86.316l-52.582,0V96.833z"})]})})})]}),Object(h.jsxs)("div",{className:"site-footer__copyright",children:["\xa0 Copyright \xa9 ",(new Date).getFullYear()," All rights reserved"]})]})},L={logo:"img/profile.png",logoWhite:"img/profile.png",name:"Richard Zhan",role:"Senior React.js Developer",intro:"with strong automation development skills. Highly skilled in React.js with a proven history of best-in-class development.",projects:[{id:0,title:"Surreal Events",imageUrl:"img/portfolio/Surreal Events.png",videoUrl:"img/portfolio/Surreal Events.mp4",link:"https://www.surrealevents.com",codeLink:"",description:"The next-generation video conferencing platform with gamific scenes.",technology:["React","Redux","WebSocket","WebRTC","Agora.io","Twilio","Fluent UI"]},{id:1,title:"Talking Heads",imageUrl:"img/portfolio/Talking Heads.png",link:"https://www.tokkingheads.com",codeLink:"",description:"AI-powered talking heads generator.",technology:["React","Redux","Typescript","Material-UI","Firebase","Stripe"]},{id:2,title:"Theatre Engine",imageUrl:"img/portfolio/Theater Engine.png",videoUrl:"img/portfolio/Theater Engine.mp4",link:"https://www.theaterengine.com/",codeLink:"",description:"Online ticketing platform for artists.",technology:["React","Redux","Bootstrap"]},{id:3,title:"University CoWork",imageUrl:"img/portfolio/University Cowork.png",videoUrl:"img/portfolio/University Cowork.mp4",link:"http://universitycowork.herokuapp.com/",codeLink:"",description:"AI-powered matchmaking for video meetings",technology:["React","Redux","Material-UI"]},{id:4,title:"Carstens",imageUrl:"img/portfolio/Carstens.png",link:"http://carstens.herokuapp.com/",codeLink:"",description:"Patents Report Generator",technology:["React","Redux","Bootstrap"]},{id:5,title:"Turnout Nation",imageUrl:"img/portfolio/Turnout Nation.png",link:"https://www.turnoutnation.org/",codeLink:"",description:"This is an online voting platform which has millions of election data records.",technology:["React.js","Sentry","Chai","Jasmine"]},{id:6,title:"Preference Center",imageUrl:"img/portfolio/Preference Center.png",link:"https://www.arizent.com/",codeLink:"",description:"Arizent is a business information company empowering people in financial and professional services to lead.",technology:["React","Material UI","AWS Cognito"]},{id:7,title:"Zerto Labs",imageUrl:"img/portfolio/Zerto.png",link:"https://www.zerto.com/",codeLink:"",description:"Zerto Labs management portal",technology:["React.js","AWS Amplify","AWS Cognito","AWS S3"]},{id:8,title:"EnsureDR Dashboard",imageUrl:"img/portfolio/EnsureDR Dashboard.png",link:"",codeLink:"",description:"The idea of the project is to visualize recovery ready data of various system resources, such as CPU, RAM and Network.",technology:["React","Redux","Gauge Chart","Donut Chart","Chart.js"]},{id:9,title:"Coherent DMS",imageUrl:"img/portfolio/Coherent DMS.png",link:"",codeLink:"",description:"Data Management Portal for Coherent",technology:["React","React Admin","Material UI"]}],skills:[{name:"HTML/CSS",percentage:99},{name:"Javascript",percentage:99},{name:"Node.js",percentage:95},{name:"Python",percentage:90},{name:"React",percentage:90},{name:"Angular",percentage:90},{name:"Amazon Web Services",percentage:80}],workExp:[{title:"Software Engineer",date:"Mar 2019- Current",company:"Next Idea Tech",description:"Lead Developer role in several projects. Programmed applications and tools using Node.js, TypeScript, and React.js object-oriented languages with goals for code abstraction, stability and reuse."},{title:"Full-Stack Developer",date:"Oct 2017 - Sep 2018",company:"Neusoft",description:"Developed online voting system with experienced Agile Team."},{title:"Full-Stack Developer",date:"Jan 2017 - Jun 2017",company:"SAP",description:"Completed Text Editor project in React."},{title:"Senior Front-End Developer",date:"Jan 2016 - Dec 2016",company:"Objectiva",description:"Focused on building several pages from Figma using React.js."},{title:"Front-End Developer",date:"Aug 2014 - Nov 2015",company:"JF computer systems Co. Ltd",description:"Worked as a front-end web developer in the Agile team of 7 people."}]},M=(i(450),function(e){return Object(h.jsx)("div",{className:"modal",children:Object(h.jsx)("div",{className:"modal-content",children:Object(h.jsx)("div",{className:"modal-body",children:e.children})})})}),R=(i(451),function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(o.a)(this,i),(s=t.call(this,e)).handleClickDocument=function(e){e.target.classList.contains("modal")&&(s.setState({isOpenModal:!1}),document.querySelector("body").classList.remove("no-scroll"))},s.handleClick=function(e){s.setState({isOpenModal:!0}),document.querySelector("body").classList.add("no-scroll"),s.getInfo(e)},s.getInfo=function(e){var t=L.projects.filter((function(t){return t.id===e}));s.setState({projectInfo:t})},s.state={isOpenModal:!1,projectInfo:[]},s}return Object(r.a)(i,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleClickDocument)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClickDocument)}},{key:"render",value:function(){var e,t,i=this,n=L,a=this.state,o=a.projectInfo,r=a.isOpenModal;return e=n.projects.map((function(e,t){return Object(h.jsx)(x,Object(c.a)(Object(c.a)({},e),{},{handleClickProject:i.handleClick.bind(i,e.id)}),e.id)})),t=o.map((function(e,t){return Object(h.jsx)(O,Object(c.a)({},e),t)})),Object(h.jsxs)(s.Fragment,{children:[Object(h.jsx)(p,{portfolioData:L}),Object(h.jsxs)("main",{className:"site-main",id:"home",children:[Object(h.jsx)(v,{portfolioData:L,id:"home"}),Object(h.jsx)(f,{children:e}),Object(h.jsx)(_,{portfolioData:L}),Object(h.jsx)(S,{}),r&&Object(h.jsx)(M,{children:t})]}),Object(h.jsx)(C,{})]})}}]),i}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(h.jsx)(R,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[452,1,2]]]);
//# sourceMappingURL=main.5c09d0d9.chunk.js.map