"use strict";(self.webpackChunkamorad=self.webpackChunkamorad||[]).push([[437],{75437:function(e,t,n){n.r(t);var r=n(27166),i=n(33032),s=n(23430),a=n(47313),l=n(40490),c=n.n(l),d=n(45),u=n(69526),o=n(83574),f=n(85374),p=n(14747),h=n(19331),x=n(35491),j=n(81661),m=n(46417);t.default=function(e){var t=(0,a.useState)([]),n=(0,s.Z)(t,2),l=n[0],b=n[1],y=(0,a.useState)([{title:"#",field:"tableData.id",render:function(e){return(0,m.jsx)("p",{style:p.W.table,children:e.tableData.id+1})}},{title:"Name",field:"name"},{title:"Report",field:"name",render:function(e){return(0,m.jsx)("p",{style:p.W.table,children:"---"})}},{title:"Studies",field:"url",render:function(e){return(0,m.jsx)("p",{style:p.W.table,children:e.url.split(",").length})}},{title:"Patient Id",field:"details",render:function(e){return(0,m.jsx)("p",{style:p.W.table,children:(0,j.G)(e.details,"patientId")})}},{title:"Study InstanceUID",field:"details",render:function(e){return(0,m.jsx)("p",{style:p.W.table,children:(0,j.G)(e.details,"studyInstanceUID")})}},{title:"Accession Number",field:"details",render:function(e){return(0,m.jsx)("p",{style:p.W.table,children:(0,j.G)(e.details,"accessionNumber")})}},{title:"Modality",field:"details",render:function(e){return(0,m.jsx)("p",{style:p.W.table,children:(0,j.G)(e.details,"modality")})}},{title:"Study Description",field:"details",render:function(e){return(0,m.jsx)("p",{style:p.W.table,children:(0,j.G)(e.details,"studyDescription")})}},{title:"Asigned To",field:"assignee",render:function(e){return(0,m.jsx)("p",{style:p.W.table,children:e.assignee.name})}},{title:"Created At",field:"createdAt"},{title:"Action",field:"id",render:function(e){return(0,m.jsx)(d.OL,{onClick:(0,i.Z)((0,r.Z)().mark((function t(){var n,i,s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=[],i=e.url.split(","),s=0;s<i.length;s++)n.push("".concat(i[s]).replace("https://","dicomweb://"));return t.next=5,(0,x.H)("record",e);case 5:return t.next=7,(0,x.H)("urls",n);case 7:case"end":return t.stop()}}),t)}))),to:{pathname:"/record/".concat(e.id)},children:"View"})}}]),v=(0,s.Z)(y,2),Z=v[0];v[1];return(0,a.useEffect)((function(){h.Z.get("/records/2").then((function(e){e.data.success&&b(e.data.data)})).catch((function(e){}))}),[]),(0,m.jsxs)("div",{className:"wrapper",children:[(0,m.jsx)(f.Z,{}),(0,m.jsxs)("div",{id:"content-page",className:"content-page",children:[(0,m.jsx)(o.Z,{}),(0,m.jsx)("div",{class:"container-fluid",children:(0,m.jsx)("div",{class:"row",children:(0,m.jsx)("div",{class:"col-sm-12 col-lg-12",children:(0,m.jsx)("div",{class:"iq-card",children:(0,m.jsx)(c(),{title:"New Record",data:l,columns:Z,options:{exportButton:!0,exportAllData:!0}})})})})}),(0,m.jsx)(u.Z,{})]})]})}},19331:function(e,t,n){var r=n(27166),i=n(33032),s=n(63033),a=n(14747),l=n(35491),c=n(42716),d=s.Z.create({baseURL:a.u.BASE_URL,headers:{},validateStatus:function(e){return!0},httpsAgent:new c.Agent({rejectUnauthorized:!1})});d.interceptors.request.use(function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=(0,l.L)("amorad_details"))&&(i=n.token,t.headers.Authorization="".concat(i)),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),t.Z=d}}]);