(this.webpackJsonpxmeme=this.webpackJsonpxmeme||[]).push([[0],{121:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=n(12),c=n.n(s),o=(n(96),n(97),n(160)),l=n(73),r=n.n(l),d=n(8),x=n(2),p=function(){var e=Object(d.f)();return Object(x.jsxs)("div",{style:{position:"fixed",padding:"14px 0px",alignItems:"center",display:"flex",width:"100%",justifyContent:"space-between",borderBottom:"1px solid rgb(0,0,0,0.09)",backgroundColor:"#ffb74d",zIndex:10},children:[Object(x.jsx)("div",{style:{display:"flex",alignItems:"center",letterSpacing:"0px",marginLeft:"30px",cursor:"pointer"},onClick:function(){e("/")},children:Object(x.jsx)("span",{style:{position:"relative",fontWeight:600,color:"#4F46E5",fontSize:24,left:124.12},children:"XMeme"})}),Object(x.jsx)("div",{style:{position:"absolute",color:"#fff",right:20,cursor:"pointer"},children:Object(x.jsxs)(o.a,{variant:"contained",size:"small",style:{textTransform:"none",fontFamily:"Oxygen",color:"white",backgroundColor:"#047857",borderRadius:"7px",margin:"auto",marginRight:"20px"},onClick:function(){},children:["swagger",Object(x.jsx)(r.a,{size:"small"})]})})]})},j=n(9),u=n(21),f=n.n(u),h=n(13),b=(n(121),n(177)),m=n(54),g=n.n(m),O=n(166),y=n(165),v=n(77),S=n(175),C=n(164),w=Object(C.a)((function(e){return{helpertext:{fontFamily:"Oxygen",color:"red",fontWeight:700}}})),z=function(e){var t,n,s,c=e.newMeme,l=w(),r=a.a.useState(!1),d=Object(j.a)(r,2),p=d[0],u=d[1],m=a.a.useState({color:"#9EA2AD"}),C=Object(j.a)(m,2),z=C[0],k=C[1],F=a.a.useState(""),I=Object(j.a)(F,2),E=I[0],M=I[1],T=a.a.useState(""),W=Object(j.a)(T,2),B=W[0],L=W[1],R=a.a.useState(""),A=Object(j.a)(R,2),P=A[0],D=A[1],N=a.a.useState("https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg"),U=Object(j.a)(N,2),H=U[0],X=U[1],G=a.a.useState(!0),J=Object(j.a)(G,2),Y=J[0],_=J[1],q=a.a.useState(""),K=Object(j.a)(q,2),Q=K[0],V=K[1],Z=a.a.useState(""),$=Object(j.a)(Z,2),ee=$[0],te=$[1],ne=a.a.useState("Make sure all fields are filled up."),ie=Object(j.a)(ne,2),ae=ie[0],se=ie[1],ce=function(e){u(e)},oe=function(e){k({color:e})},le=function(e,t){f.a.post("/api/v1/memes/check",{caption:e,url:t},{withCredentials:!0}).then((function(n){e?V(""):t&&(te(""),function(){if(P.startsWith("/")||P.startsWith("api/v1"))return X("https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg"),_(!1),void se("Invalid URL");var e=new Image;e.src=P,e.addEventListener("load",(function(){X(P),_(!0),se("Make sure all fields are filled up.")})),e.addEventListener("error",(function(){X("https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg"),_(!1),se("Invalid URL")}))}())})).catch((function(n){e?V(n.response.data):t&&te(n.response.data)}))};return Object(i.useEffect)((function(){""===P?(te(""),X("https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg"),_(!0),se("Make sure all fields are filled up.")):le(null,P)}),[P]),Object(i.useEffect)((function(){""===B?V(""):le(B,null)}),[B]),Object(i.useEffect)((function(){!1===p&&(M(""),L(""),D(""),X("https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg"),_(!0))}),[p]),[Object(x.jsxs)(y.a,{container:!0,style:{display:"flex",justifyContent:"space-between"},children:[Object(x.jsxs)(y.a,{item:!0,xs:12,md:7,children:[Object(x.jsx)("h1",{style:{padding:"30px 10px 0px 10px",marginTop:"23px",fontWeight:700,letterSpacing:"-1px",fontSize:"36px",textAlign:"left"},children:"X Meme"}),Object(x.jsx)("h3",{style:{padding:"0px 10px",margin:"-10px 0px 0px 0px",fontSize:"20px",fontWeight:400,color:"#837280",textAlign:"left"},children:"Post your memes, don't dos/ddos me, it's on a free server"})]}),Object(x.jsx)(y.a,{item:!0,xs:12,md:5,style:{padding:"10px 0px",display:"flex",justifyContent:"space-between",position:"fixed",right:20},children:Object(x.jsx)(o.a,{variant:"contained",style:{textTransform:"none",fontFamily:"Oxygen",color:"white",fontSize:"16px",backgroundColor:"#4338CA",padding:"7px 19px",borderRadius:"7px",margin:"auto"},onClick:function(){return ce(!0)},children:"Create Meme"})})]}),Object(x.jsxs)(b.a,{BackdropProps:{invisible:!0},anchor:"right",open:p,onClose:function(){return ce(!1)},style:{width:"50px"},elevation:1,width:"50%",children:[Object(x.jsxs)("div",{style:{display:"flex",backgroundColor:"#F9FAFB"},children:[Object(x.jsxs)("div",{style:{paddingLeft:20,paddingRight:20,maxWidth:"600px"},children:[Object(x.jsx)("h4",{style:{fontWeight:400,fontSize:20},children:"New X Meme"}),Object(x.jsx)("h5",{style:{fontWeight:400,fontSize:14,color:"#6b7280",marginTop:"-18px"},children:"Get started by filling in the information below to create your new xmeme. Don't DOS it please. Be a human."})]}),Object(x.jsx)("div",{style:{padding:"30px 10px"},children:Object(x.jsx)(O.a,{onClick:function(){return ce(!1)},style:{cursor:"pointer"},onMouseEnter:function(){return oe("#6B7280")},onMouseLeave:function(){return oe("#9EA2AD")},children:Object(x.jsx)(g.a,{style:z})})})]}),Object(x.jsxs)(y.a,{container:!0,style:{borderBottom:"1px solid rgb(0,0,0,0.1)",padding:"20px 20px",fontSize:"16px"},children:[Object(x.jsx)(y.a,{item:!0,xs:12,sm:5,style:{display:"flex",alignItems:"center"},children:Object(x.jsx)("span",{style:{fontSize:"14px"},children:"Meme Owner *"})}),Object(x.jsx)(y.a,{item:!0,xs:12,sm:7,children:Object(x.jsx)(S.a,(t={id:"name",size:"small",value:E,onChange:function(e){M(e.target.value)},inputProps:{style:{fontFamily:"Oxygen",fontSize:"14px"}},fullWidth:!0},Object(h.a)(t,"id","outlined-name"),Object(h.a)(t,"placeholder","Enter your full name"),Object(h.a)(t,"variant","outlined"),Object(h.a)(t,"className","inputRounded"),t))})]}),Object(x.jsxs)(y.a,{container:!0,style:{borderBottom:"1px solid rgb(0,0,0,0.1)",padding:"20px 20px"},children:[Object(x.jsx)(y.a,{item:!0,xs:12,sm:5,style:{display:"flex",alignItems:"center"},children:Object(x.jsx)("span",{style:{fontSize:"14px"},children:"Caption *"})}),Object(x.jsx)(y.a,{item:!0,xs:12,sm:7,children:Object(x.jsx)(S.a,(n={id:"caption",value:B,helperText:Q,FormHelperTextProps:{className:l.helpertext},onChange:function(e){L(e.target.value)},size:"small",inputProps:{style:{fontFamily:"Oxygen",fontSize:"14px"}},fullWidth:!0,multiline:!0,rows:3,rowsMax:3},Object(h.a)(n,"id","outlined-caption"),Object(h.a)(n,"placeholder","Be creative with your caption"),Object(h.a)(n,"variant","outlined"),n))})]}),Object(x.jsxs)(y.a,{container:!0,style:{borderBottom:"1px solid rgb(0,0,0,0.1)",padding:"20px 20px"},children:[Object(x.jsx)(y.a,{item:!0,xs:12,sm:5,style:{display:"flex",alignItems:"center"},children:Object(x.jsx)("span",{style:{fontSize:"14px"},children:"Meme URL *"})}),Object(x.jsx)(y.a,{item:!0,xs:12,sm:7,children:Object(x.jsx)(S.a,(s={id:"url",value:P,helperText:ee,FormHelperTextProps:{className:l.helpertext},onChange:function(e){D(e.target.value)},size:"small",inputProps:{style:{fontFamily:"Oxygen",fontSize:"14px"}},fullWidth:!0},Object(h.a)(s,"id","outlined-url"),Object(h.a)(s,"placeholder","Enter URL of your meme here"),Object(h.a)(s,"variant","outlined"),s))})]}),Object(x.jsxs)(y.a,{container:!0,style:{borderBottom:"1px solid rgb(0,0,0,0.1)",padding:"20px 20px"},children:[Object(x.jsx)(y.a,{item:!0,xs:12,sm:5,style:{display:"flex",alignItems:"center"},children:Object(x.jsx)("span",{style:{fontSize:"14px"},children:"Meme Preview *"})}),Object(x.jsxs)(y.a,{item:!0,xs:12,sm:7,children:[Object(x.jsx)(v.a,{elevation:1,style:{display:"flex",justifyContent:"center",boxShadow:"0px 2px 4px 1px rgb(0,0,0,0.1)"},children:Object(x.jsx)("img",{src:H,height:"260px",width:"350px"})}),Object(x.jsx)("div",{style:{margin:"10px 0px 10px 0px",fontSize:"18px"},children:B}),Object(x.jsx)("div",{style:{margin:"0px 0px",color:"#6b7280",fontSize:"16px"},children:E})]}),Object(x.jsx)("div",{hidden:Y,style:{paddingTop:"40px",color:"#b91c1c"},children:ae})]}),Object(x.jsxs)("div",{style:{display:"flex",padding:"10px 18px",justifyContent:"flex-end"},children:[Object(x.jsx)(o.a,{variant:"outlined",style:{textTransform:"none",fontFamily:"Oxygen",fontSize:"14px",padding:"5px 15px",margin:"10px",borderRadius:"7px"},onClick:function(){return ce(!1)},children:"Cancel"}),Object(x.jsx)(o.a,{variant:"contained",style:{textTransform:"none",fontFamily:"Oxygen",color:"white",fontSize:"14px",backgroundColor:"#4338CA",padding:"5px 15px",margin:"10px",borderRadius:"7px"},onClick:function(){""!==E&&""!==B&&""!==P&&H===P&&""===Q&&""===ee?(ce(!1),c({name:E,caption:B,url:P})):_(""!==E&&""!==B&&""!==P&&H===P&&""===Q&&""===ee)},children:"Create"})]})]})]},k=n(167),F=function(e){var t=((new Date).getTime()-new Date(e).getTime())/1e3;return t<60?"just now":t<120?"a min ago":(t/=60)<60?"".concat(parseInt(t)," mins ago"):(t/=60)<2?"an hour ago":t<24?"".concat(parseInt(t)," hours ago"):(t/=24)<2?"a day ago":t<31?"".concat(parseInt(t)," days ago"):(t/=30.5)<2?"a month ago":t<12?"".concat(parseInt(t)," months ago"):(t/=12)<2?"an year ago":"".concat(parseInt(t)," years ago")},I=function(e){var t=e.meme,n=Object(d.f)(),i=a.a.useState(""),s=Object(j.a)(i,2),c=s[0],o=s[1],l=new Image;return l.src=t.url,l.addEventListener("load",(function(){return o(t.url)})),l.addEventListener("error",(function(){return o("https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg")})),Object(x.jsxs)(y.a,{item:!0,style:{padding:"50px 10px 0px 10px"},xs:12,sm:6,md:4,children:[Object(x.jsx)(k.a,{elevation:1,style:{display:"flex",justifyContent:"center",boxShadow:"0px 2px 4px 1px rgb(0,0,0,0.1)",width:"100%",textAlign:"left",cursor:"pointer"},onClick:function(){n("/memes/".concat(t._id))},children:Object(x.jsx)("img",{src:c,height:"200px",width:"300px"})}),Object(x.jsx)("div",{style:{margin:"10px 0px 10px 0px",fontSize:"18px",textAlign:"left"},children:t.caption}),Object(x.jsxs)("div",{style:{margin:"0px 0px",color:"#6b7280",fontSize:"16px",textAlign:"left",display:"flex",justifyContent:"space-between"},children:[Object(x.jsx)("div",{children:t.name}),Object(x.jsx)("div",{children:F(t.time)})]})]})},E=function(e){var t=e.signal,n=e.page,s=a.a.useState([]),c=Object(j.a)(s,2),o=c[0],l=c[1],r=a.a.useState(""),d=Object(j.a)(r,2),p=d[0],u=d[1];return Object(i.useEffect)((function(){f.a.get("/api/v1/memes/page/".concat(n),{withCredentials:!0}).then((function(e){l(e.data.memes),u("No Memes Yet")})).catch((function(e){console.log(e)}))}),[t,n]),Object(x.jsx)(y.a,{container:!0,style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start"},children:null!=o&&void 0!=o&&0!==o.length?o.map((function(e,t){return Object(x.jsx)(I,{meme:e},t)})):Object(x.jsx)("div",{style:{height:"200px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"30px"},children:p})})},M=n(168),T=n(176),W=Object(C.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)},display:"flex",alignItems:"baseline",justifyContent:"center"}}}));var B=function(){var e=W(),t=a.a.useState(!1),n=Object(j.a)(t,2),s=n[0],c=n[1],o=a.a.useState(1),l=Object(j.a)(o,2),r=l[0],d=l[1],p=a.a.useState(1),u=Object(j.a)(p,2),h=u[0],b=u[1],m=function(){f.a.get("/api/v1/memes",{withCredentials:!0}).then((function(e){b(parseInt((e.data.memes.length-1)/100+1))})).catch((function(e){console.log(e)}))};return Object(i.useEffect)((function(){m()}),[]),[Object(x.jsx)("div",{style:{height:"60px"}}),Object(x.jsxs)(M.a,{maxWidth:"lg",style:{minHeight:"100vh"},children:[Object(x.jsx)(z,{newMeme:function(e){f.a.post("/api/v1/memes",{meme:e},{withCredentials:!0}).then((function(e){c(!s),m()}))}},"content"),Object(x.jsxs)("div",{className:e.root,children:["Page\xa0\xa0",Object(x.jsx)(T.a,{count:h,page:r,onChange:function(e,t){d(t)},color:"primary",hidePrevButton:!0,hideNextButton:!0})]}),Object(x.jsx)(E,{signal:s,page:r},"memes")]})]},L=n(169),R=n(74),A=n.n(R),P=n(75),D=n.n(P),N=n(170),U=n(174),H=n(172),X=n(173),G=n(171),J=Object(C.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},extendedIcon:{marginRight:e.spacing(1)},helpertext:{fontFamily:"Oxygen",color:"red",fontWeight:700}}})),Y=function(){var e,t,n,s=J(),c=Object(d.f)(),l=Object(d.g)().id,r=a.a.useState(""),p=Object(j.a)(r,2),u=p[0],m=p[1],C=a.a.useState(!1),w=Object(j.a)(C,2),z=w[0],k=w[1],F=a.a.useState({color:"#9EA2AD"}),E=Object(j.a)(F,2),M=E[0],T=E[1],W=a.a.useState(""),B=Object(j.a)(W,2),R=B[0],P=B[1],Y=a.a.useState(""),_=Object(j.a)(Y,2),q=_[0],K=_[1],Q=a.a.useState("https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg"),V=Object(j.a)(Q,2),Z=V[0],$=V[1],ee=a.a.useState(!0),te=Object(j.a)(ee,2),ne=te[0],ie=te[1],ae=a.a.useState(""),se=Object(j.a)(ae,2),ce=se[0],oe=se[1],le=a.a.useState(""),re=Object(j.a)(le,2),de=re[0],xe=re[1],pe=a.a.useState("Make sure all fields are filled up."),je=Object(j.a)(pe,2),ue=je[0],fe=je[1],he=a.a.useState(!1),be=Object(j.a)(he,2),me=be[0],ge=be[1],Oe=function(){ge(!1)},ye=function(){f.a.get("/api/v1/memes/".concat(l),{withCredentials:!0}).then((function(e){m(e.data.meme)})).catch((function(e){c("/")}))},ve=function(e){k(e)},Se=function(e){T({color:e})},Ce=function(){""!==R&&""!==q&&Z===q?(ve(!1),f.a.patch("/api/v1/memes/".concat(l),{caption:R,url:q},{withCredentials:!0}).then((function(e){ye()})).catch((function(e){ye()}))):ie(""!==R&&""!==q&&Z===q&&""===ce&&""===de)},we=function(e,t){f.a.post("/api/v1/memes/check",{caption:e,url:t},{withCredentials:!0}).then((function(n){e?oe(""):t&&(xe(""),function(){if(q.startsWith("/")||q.startsWith("api/v1"))return $("https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg"),ie(!1),void fe("Invalid URL");var e=new Image;e.src=q,e.addEventListener("load",(function(){$(q),ie(!0),fe("Make sure all fields are filled up.")})),e.addEventListener("error",(function(){$("https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg"),ie(!1),fe("Invalid URL")}))}())})).catch((function(n){e?oe(n.response.data):t&&xe(n.response.data)}))};return Object(i.useEffect)((function(){void 0!==q&&null!==q&&(""===q?(xe(""),$("https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg"),ie(!0),fe("Make sure all fields are filled up.")):q!==u.url?we(null,q):(xe(""),$(q),ie(!0)))}),[q]),Object(i.useEffect)((function(){""===R||R===u.caption?oe(""):we(R,null)}),[R]),Object(i.useEffect)((function(){P(u.caption),K(u.url)}),[u]),Object(i.useEffect)((function(){ye()}),[]),[Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"100px"},children:[Object(x.jsxs)(L.a,{variant:"extended",color:"primary","aria-label":"add",style:{marginRight:"80px",fontFamily:"Oxygen",fontWeight:700},onClick:function(){return ve(!0)},children:[Object(x.jsx)(A.a,{className:s.extendedIcon}),"EDIT"]}),Object(x.jsxs)(L.a,{variant:"extended",color:"secondary","aria-label":"add",style:{fontFamily:"Oxygen",fontWeight:700},onClick:function(){ge(!0)},children:[Object(x.jsx)(D.a,{className:s.extendedIcon}),"DELETE"]})]}),Object(x.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(x.jsx)(I,{meme:u})}),Object(x.jsxs)(b.a,{BackdropProps:{invisible:!0},anchor:"right",open:z,onClose:function(){return ve(!1)},style:{width:"50px"},elevation:1,width:"50%",children:[Object(x.jsxs)("div",{style:{display:"flex",backgroundColor:"#F9FAFB"},children:[Object(x.jsxs)("div",{style:{paddingLeft:20,paddingRight:20,maxWidth:"600px"},children:[Object(x.jsx)("h4",{style:{fontWeight:400,fontSize:20},children:"Edit X Meme"}),Object(x.jsx)("h5",{style:{fontWeight:400,fontSize:14,color:"#6b7280",marginTop:"-18px"},children:"Get started by filling in the information below to create your new xmeme. Don't DOS it please. Be a human."})]}),Object(x.jsx)("div",{style:{padding:"30px 10px"},children:Object(x.jsx)(O.a,{onClick:function(){return ve(!1)},style:{cursor:"pointer"},onMouseEnter:function(){return Se("#6B7280")},onMouseLeave:function(){return Se("#9EA2AD")},children:Object(x.jsx)(g.a,{style:M})})})]}),Object(x.jsxs)(y.a,{container:!0,style:{borderBottom:"1px solid rgb(0,0,0,0.1)",padding:"20px 20px",fontSize:"16px"},children:[Object(x.jsx)(y.a,{item:!0,xs:12,sm:5,style:{display:"flex",alignItems:"center"},children:Object(x.jsx)("span",{style:{fontSize:"14px"},children:"Meme Owner *"})}),Object(x.jsx)(y.a,{item:!0,xs:12,sm:7,children:Object(x.jsx)(S.a,(e={id:"name",size:"small",value:u.name,disabled:!0,inputProps:{style:{fontFamily:"Oxygen",fontSize:"14px"}},fullWidth:!0},Object(h.a)(e,"id","outlined-name"),Object(h.a)(e,"placeholder","Enter your full name"),Object(h.a)(e,"variant","outlined"),Object(h.a)(e,"className","inputRounded"),e))})]}),Object(x.jsxs)(y.a,{container:!0,style:{borderBottom:"1px solid rgb(0,0,0,0.1)",padding:"20px 20px"},children:[Object(x.jsx)(y.a,{item:!0,xs:12,sm:5,style:{display:"flex",alignItems:"center"},children:Object(x.jsx)("span",{style:{fontSize:"14px"},children:"Caption *"})}),Object(x.jsx)(y.a,{item:!0,xs:12,sm:7,children:Object(x.jsx)(S.a,(t={id:"caption",value:R,helperText:ce,FormHelperTextProps:{className:s.helpertext},onChange:function(e){P(e.target.value)},size:"small",inputProps:{style:{fontFamily:"Oxygen",fontSize:"14px"}},fullWidth:!0,multiline:!0,rows:3,rowsMax:3},Object(h.a)(t,"id","outlined-caption"),Object(h.a)(t,"placeholder","Be creative with your caption"),Object(h.a)(t,"variant","outlined"),t))})]}),Object(x.jsxs)(y.a,{container:!0,style:{borderBottom:"1px solid rgb(0,0,0,0.1)",padding:"20px 20px"},children:[Object(x.jsx)(y.a,{item:!0,xs:12,sm:5,style:{display:"flex",alignItems:"center"},children:Object(x.jsx)("span",{style:{fontSize:"14px"},children:"Meme URL *"})}),Object(x.jsx)(y.a,{item:!0,xs:12,sm:7,children:Object(x.jsx)(S.a,(n={id:"url",value:q,helperText:de,FormHelperTextProps:{className:s.helpertext},onChange:function(e){K(e.target.value)},size:"small",inputProps:{style:{fontFamily:"Oxygen",fontSize:"14px"}},fullWidth:!0},Object(h.a)(n,"id","outlined-url"),Object(h.a)(n,"placeholder","Enter URL of your meme here"),Object(h.a)(n,"variant","outlined"),n))})]}),Object(x.jsxs)(y.a,{container:!0,style:{borderBottom:"1px solid rgb(0,0,0,0.1)",padding:"20px 20px"},children:[Object(x.jsx)(y.a,{item:!0,xs:12,sm:5,style:{display:"flex",alignItems:"center"},children:Object(x.jsx)("span",{style:{fontSize:"14px"},children:"Meme Preview *"})}),Object(x.jsxs)(y.a,{item:!0,xs:12,sm:7,children:[Object(x.jsx)(v.a,{elevation:1,style:{display:"flex",justifyContent:"center",boxShadow:"0px 2px 4px 1px rgb(0,0,0,0.1)"},children:Object(x.jsx)("img",{src:Z,height:"260px",width:"350px"})}),Object(x.jsx)("div",{style:{margin:"10px 0px 10px 0px",fontSize:"18px"},children:R}),Object(x.jsx)("div",{style:{margin:"0px 0px",color:"#6b7280",fontSize:"16px"},children:u.name})]}),Object(x.jsx)("div",{hidden:ne,style:{paddingTop:"40px",color:"#b91c1c"},children:ue})]}),Object(x.jsxs)("div",{style:{display:"flex",padding:"10px 18px",justifyContent:"flex-end"},children:[Object(x.jsx)(o.a,{variant:"outlined",style:{textTransform:"none",fontFamily:"Oxygen",fontSize:"14px",padding:"5px 15px",margin:"10px",borderRadius:"7px"},onClick:function(){return ve(!1)},children:"Cancel"}),Object(x.jsx)(o.a,{variant:"contained",disabled:!(R!==u.caption||q!==u.url),style:{textTransform:"none",fontFamily:"Oxygen",color:"white",fontSize:"14px",backgroundColor:"#4338CA",padding:"5px 15px",margin:"10px",borderRadius:"7px"},onClick:function(){Ce()},children:"Update"})]})]}),Object(x.jsxs)(N.a,{open:me,onClose:Oe,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(x.jsx)(G.a,{id:"alert-dialog-title",children:"Confirm Deletion?"}),Object(x.jsx)(H.a,{children:Object(x.jsx)(X.a,{id:"alert-dialog-description",style:{fontFamily:"Oxygen"},children:"Are you sure want to delete the Meme?"})}),Object(x.jsxs)(U.a,{children:[Object(x.jsx)(o.a,{onClick:Oe,color:"primary",style:{fontFamily:"Oxygen"},children:"Cancel"}),Object(x.jsx)(o.a,{color:"primary",variant:"contained",autoFocus:!0,style:{fontFamily:"Oxygen"},onClick:function(){f.a.delete("/api/v1/memes/".concat(l),{withCredentials:!0}).then((function(e){c("/")})).catch((function(e){Oe(),ye()}))},children:"CONFIRM"})]})]})]},_=[{path:"/",children:[{path:"/",element:Object(x.jsx)(B,{})},{path:"/memes/:id",element:Object(x.jsx)(Y,{})},{path:"*",element:Object(x.jsx)(d.a,{to:"/",replace:!0})}]}];var q=function(){var e=Object(d.i)(_);return Object(x.jsxs)("div",{style:{height:"100%",paddingBottom:"30px"},children:[Object(x.jsx)(p,{}),e]})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,178)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),s(e),c(e)}))},Q=n(30);c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(Q.a,{children:Object(x.jsx)(q,{})})}),document.getElementById("root")),K()},96:function(e,t,n){},97:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.bec472a9.chunk.js.map