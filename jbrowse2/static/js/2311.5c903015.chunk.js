"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2311],{2311:function(e,r,n){n.r(r),n.d(r,{readBlobAsText:function(){return w}});var t=n(33028),a=n(32723),o=n(34795),s=n(96234),i=n(96902),c=n(16644),l=n(6880),d=n(35388),p=n(44536),u=n(97531),g=n(91188),x=n(4782),h=n(82294),f=n(16204),v=n(25515),b=n(29938),m=512*Math.pow(1024,2);function j(e,r){return function(n){return r[n[e]]}}var Z=(0,g.ZL)()((function(e){return{root:{margin:e.spacing(1)},paper:{display:"flex",flexDirection:"column"},dropZone:{textAlign:"center",margin:e.spacing(2),padding:e.spacing(2),borderWidth:2,borderRadius:2,borderColor:j("isDragActive",{true:e.palette.secondary.light,false:e.palette.divider}),borderStyle:"dashed",backgroundColor:j("isDragActive",{true:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),false:e.palette.background.default}),outline:"none",transition:"border .24s ease-in-out","&:focus":{borderColor:e.palette.secondary.light}},uploadIcon:{color:e.palette.text.secondary},rejectedFiles:{marginTop:e.spacing(4)},listItem:{padding:e.spacing(0,4)},expandIcon:{color:e.palette.tertiary.contrastText},error:{margin:e.spacing(2)},errorHeader:{background:e.palette.error.light,color:e.palette.error.contrastText,padding:e.spacing(2),textAlign:"center"},errorMessage:{padding:e.spacing(2)}}}));function w(e){var r=new FileReader;return new Promise((function(n,t){r.onload=function(e){e.target?n(e.target.result):t(new Error("unknown result reading blob from canvas"))},r.readAsText(e)}))}r.default=(0,x.observer)((function(e){var r=e.model,n=(0,i.useState)(),c=(0,s.Z)(n,2),g=c[0],x=c[1],j=(0,h.uI)({accept:"application/json",maxSize:m,multiple:!1,onDrop:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n,t){var o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(t.length>0)){e.next=5;break}throw new Error("".concat(t[0].errors.map((function(e){return"".concat(e)})).join(", ")));case 5:return e.next=7,w(n[0]);case 7:o=e.sent,(0,u.getSession)(r).setSession(JSON.parse(o).session);case 9:e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0),x(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r,n){return e.apply(this,arguments)}}()}),y=j.getRootProps,k=j.getInputProps,S=j.isDragActive,A=Z({isDragActive:S}).classes;return(0,b.jsxs)("div",{className:A.root,children:[(0,b.jsx)(l.Z,{className:A.paper,children:(0,b.jsxs)("div",(0,t.Z)((0,t.Z)({},y({className:A.dropZone})),{},{children:[(0,b.jsx)("input",(0,t.Z)({},k())),(0,b.jsx)(f.Z,{className:A.uploadIcon,fontSize:"large"}),(0,b.jsx)(d.Z,{color:"textSecondary",align:"center",variant:"body1",children:"Drag and drop files here"}),(0,b.jsx)(d.Z,{color:"textSecondary",align:"center",variant:"body2",children:"or"}),(0,b.jsx)(p.Z,{color:"primary",variant:"contained",children:"Browse Files"})]}))}),g?(0,b.jsxs)(l.Z,{className:A.error,children:[(0,b.jsxs)("div",{className:A.errorHeader,children:[(0,b.jsx)(v.Z,{color:"inherit",fontSize:"large"}),(0,b.jsx)("div",{children:(0,b.jsx)(d.Z,{variant:"h6",color:"inherit",align:"center",children:"Import error"})})]}),(0,b.jsx)(d.Z,{className:A.errorMessage,children:"".concat(g)})]}):null]})}))}}]);
//# sourceMappingURL=2311.5c903015.chunk.js.map