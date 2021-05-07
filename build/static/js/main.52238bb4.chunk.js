(this["webpackJsonptrivia-app"]=this["webpackJsonptrivia-app"]||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),i=n.n(c),s=(n(80),n(35)),u=n.n(s),o=n(46),l=n(44),j=n(16),d=n(58),b=n(59),h=n(39),p=n(67),x=n(65),f=n(140),m=n(135),O=n(142),g=n(147),v=n(146),w=n(149),y=n(150),S=n(139),q=n(45),C=n.n(q),z=n(145),_={paper:{padding:"20px",marginTop:"20px",marginBottom:"20px",borderRadius:"20px"},h1:{fontSize:"80px",marginBottom:"50px",textAlign:"center",color:"purple"},header:{fontSize:"70px",marginBottom:"50px",textAlign:"center",color:"black"},submitButton:{marginTop:"40px",borderRadius:"999px",background:"#9c27b0","&:hover":{backgroundColor:"white"}},question:{fontSize:"24px",marginBottom:"30px",fontWeight:"500",lineHeight:"40px"},answer:{fontSize:"18px",marginBottom:"10px",fontWeight:"500",lineHeight:"25px",marginLeft:"10px",display:"flex"},correctAnswer:{color:"green"},results:{display:"flex",margin:"0 auto",maxWidth:"200px",textAlign:"center",flexDirection:"column",color:"black"}},k=[{id:"total_easy_question_count",name:"Go easy on me pls"},{id:"total_medium_question_count",name:"Medium"},{id:"total_hard_question_count",name:"\ud83d\ude33 Hard \ud83d\ude33"}],T=function(e){return{__html:e}},A=n(66),D=n(141),N=n(3),B=function(e){var t=e.classes,n=e.resetQuiz,a=e.currentQuizStep,c=e.admittedAnswers;e.myAnswers,e.checker,e.totalRightAnswers;return Object(r.useEffect)((function(){window.scrollTo(0,"30px")}),[]),"results"===a?Object(N.jsxs)("div",{className:t.results,children:[Object(N.jsxs)(m.a,{variant:"h4",className:t.header,children:["Results: ",c.filter((function(e){return e.isCorrect})).length," out of"," ",c.length]}),Object(N.jsx)(m.a,{variant:"h4",className:t.Title}),Object(N.jsx)(m.a,{variant:"h3",className:t.Title}),Object(N.jsx)(m.a,{variant:"h9"}),Object(N.jsx)(m.a,{variant:"h9",children:"Do you want to play again? Click Reset below!"}),Object(N.jsx)(S.a,{onClick:n,className:t.submitButton,variant:"outlined",color:"white",children:"Reset"})]}):Object(N.jsx)("checkCode",{})},Q=function(e){var t=e.classes,n=e.quizData,a=e.resetQuiz,c=e.currentQuizStep,i=e.setCurrentQuizStep,s=Object(r.useState)([]),u=Object(j.a)(s,2),o=u[0],l=u[1],d=Object(r.useState)([]),b=Object(j.a)(d,2),h=b[0],p=b[1],x=function(e,t){if(t&&t.length){var n=t.find((function(t){return t.question===e}));return n&&n.answer||""}return""};return Object(r.useEffect)((function(){window.scrollTo(0,"20px")}),[]),h&&h.length?Object(N.jsx)(B,{classes:t,resetQuiz:a,currentQuizStep:c,admittedAnswers:h,setCurrentQuizStep:i}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=o.map((function(e){var t=e.answer,r=e.question,a=n.find((function(e){return e.question===r}));return a.correct_answer===t?{correctAnswer:t,isCorrect:!0,question:r}:{correctAnswer:a.correct_answer,wrongAnswer:t,isCorrect:!1,question:r}}));p(t)},children:Object(N.jsxs)(f.a,{item:!0,xs:12,children:[n.map((function(e){return Object(N.jsxs)(D.a,{className:t.paper,children:[Object(N.jsx)("span",{dangerouslySetInnerHTML:T(e.question)}),Object(N.jsxs)(O.a,{fullWidth:!0,variant:"outlined",children:[Object(N.jsx)(g.a,{id:"answer-select-label",children:"Choose Answer:"}),Object(N.jsx)(v.a,{required:!0,name:"answer",id:"answer-select",label:"Select answer",value:x(e.question,o)||"",labelId:"answer-select-label",onChange:function(t){return function(e,t){e.preventDefault();var n=e.target.value,r=o.length&&o.find((function(e){return e.question===t}));if(r&&r.answer){var a=o.map((function(e){return e.question===t?{question:t,answer:n}:e}));l(a)}else l([].concat(Object(A.a)(o),[{question:t,answer:n}]))}(t,e.question)},children:e.answers.map((function(e){return Object(N.jsx)(w.a,{value:e,children:Object(N.jsx)("span",{dangerouslySetInnerHTML:T(e)})},e)}))})]})]},e.question)})),Object(N.jsx)(S.a,{className:t.submitButton,variant:"contained",type:"submit",children:"Result"})]})})})},I=(a.a.Component,Object(z.a)((function(e){return _}))),L=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)({id:"",name:""}),i=Object(j.a)(c,2),s=i[0],d=i[1],b=Object(r.useState)(null),h=Object(j.a)(b,2),p=h[0],x=h[1],q=Object(r.useState)({id:"",name:""}),z=Object(j.a)(q,2),_=z[0],A=z[1],D=Object(r.useState)([]),B=Object(j.a)(D,2),L=B[0],M=B[1],R=I(),F=Object(r.useState)("start"),H=Object(j.a)(F,2),W=H[0],E=H[1],P=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://opentdb.com/api.php?amount=".concat(p,"&category=").concat(s.id,"&difficulty=").concat(_.name.toLowerCase()),e.next=4,C.a.get(t);case 4:n=e.sent,r=n.data,a=r.results.map((function(e){var t=e.incorrect_answers.length,n=Math.round(Math.random()*(t-0)+0);return e.incorrect_answers.splice(n,0,e.correct_answer),Object(o.a)(Object(o.a)({},e),{},{answers:e.incorrect_answers})})),M(a),E("results"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Fetch quiz error =====>>>>",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://opentdb.com/api_category.php");case 2:t=e.sent,n=t.data,a(n.trivia_categories);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){G(),window.scrollTo(0,"20px")}),[]);return n.length?Object(N.jsx)(f.a,{children:"start"===W?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(m.a,{variant:"h1",className:R.mainTitle,children:Object(N.jsx)("b",{children:"TRIVIA GAME \ud83d\ude08"})}),Object(N.jsxs)("form",{onSubmit:function(e){e.preventDefault(),!L.length&&p&&s.id&&_&&P()},children:[Object(N.jsxs)(f.a,{container:!0,spacing:4,children:[Object(N.jsxs)(f.a,{item:!0,xs:12,children:[Object(N.jsx)(f.a,{item:!0,xs:12}),Object(N.jsx)(m.a,{variant:"h5",className:R.title,children:Object(N.jsx)("b",{children:"Category:"})}),Object(N.jsxs)(O.a,{fullWidth:!0,variant:"outlined",children:[Object(N.jsx)(g.a,{id:"category-select-label",children:Object(N.jsx)("b",{children:"Click here!"})}),Object(N.jsx)(v.a,{required:!0,value:s.id||"",id:"category-select",label:"Select category",onChange:function(e){e.preventDefault();var t=n.find((function(t){return t.id===e.target.value}));d(t)},children:n.map((function(e){return Object(N.jsx)(w.a,{value:e.id,children:Object(N.jsx)("span",{dangerouslySetInnerHTML:T(e.name)})},e.id)}))})]})]}),Object(N.jsxs)(f.a,{item:!0,xs:12,children:[Object(N.jsx)(m.a,{variant:"h5",className:R.title,children:Object(N.jsx)("b",{children:"Difficulty:"})}),Object(N.jsxs)(O.a,{fullWidth:!0,variant:"outlined",children:[Object(N.jsx)(g.a,{id:"difficulty-select-label",children:Object(N.jsx)("b",{children:"Click here!"})}),Object(N.jsx)(v.a,{required:!0,name:"difficulty",id:"difficulty-select",label:"Select Difficulty",children:k.map((function(e){return Object(N.jsx)(w.a,{value:e.id,children:e.name},e.id)}))})]})]}),Object(N.jsxs)(f.a,{item:!0,xs:12,children:[Object(N.jsx)(m.a,{variant:"h5",className:R.title,children:Object(N.jsx)("b",{children:"How many questions would you like? (1-10)*"})}),Object(N.jsx)(y.a,{inputProps:{min:1,max:10},required:!0,fullWidth:!0,type:"number",id:"quiz-number",variant:"outlined",name:"quiz-number",value:p||"",onChange:function(e){e.preventDefault(),x(e.target.value)}})]})]}),Object(N.jsx)(S.a,{className:R.submitButton,type:"submit",variant:"contained",color:"primary",children:"Let's Start!"})]})]}):Object(N.jsx)(Q,{classes:R,quizData:L,resetQuiz:function(e){e.preventDefault(),M([]),d(""),x(""),A(""),E("start"),window.scrollTo(0,"20px")},categories:n,currentQuizStep:W,setCurrentQuizStep:E})}):null};var M=function(){return Object(N.jsx)("div",{children:Object(N.jsx)(L,{})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,151)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(M,{})}),document.getElementById("root")),R()},80:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.52238bb4.chunk.js.map