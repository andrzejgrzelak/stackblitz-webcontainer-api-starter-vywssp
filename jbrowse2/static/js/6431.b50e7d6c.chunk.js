"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6431],{26431:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r=t(33028),s=t(96902),c=t(97531),o=t(89378),a=t(68079),u=t(29938),l="rgb(220,160,220)",d=void 0,i="rgb(220,220,180)",p="rgba(250,200,200)",g="rgb(200,240,240)",x="rgb(200,280,200)";function h(n){var e=n.cds,t=n.sequence;return(0,u.jsx)("span",{style:{background:i},children:(0,o.zo)(e,t)})}function f(n){for(var e=n.cds,t=n.sequence,r=n.codonTable,s=(0,o.zo)(e,t),c="",a=0;a<s.length;a+=3)c+=r[s.slice(a,a+3)]||"&";return(0,u.jsx)("span",{style:{background:l},children:c})}function m(n){var e=n.utr,t=n.cds,r=n.exons,c=n.sequence,o=n.upstream,l=n.downstream,x=n.includeIntrons,h=n.collapseIntron,f=n.intronBp,m=(t.length?[].concat((0,a.Z)(t),(0,a.Z)(e)).sort((function(n,e){return n.start-e.start})):r).filter((function(n){return n.start!==n.end}));return(0,u.jsxs)(u.Fragment,{children:[o?(0,u.jsx)("span",{style:{background:p},children:o}):null,m.map((function(n,e){var t,r=c.slice(n.end,null===(t=m[e+1])||void 0===t?void 0:t.start);return(0,u.jsxs)(s.Fragment,{children:[(0,u.jsx)("span",{style:{background:"CDS"===n.type?i:g},children:c.slice(n.start,n.end)}),x&&e<m.length-1?(0,u.jsx)("span",{style:{background:d},children:h&&r.length>2*f?"".concat(r.slice(0,f),"...").concat(r.slice(-f)):r}):null]},JSON.stringify(n))})),l?(0,u.jsx)("span",{style:{background:p},children:l}):null]})}function b(n){var e=n.sequence,t=n.upstream,r=n.downstream;return(0,u.jsxs)(u.Fragment,{children:[t?(0,u.jsx)("span",{style:{background:p},children:t}):null,(0,u.jsx)("span",{style:{background:x},children:e}),r?(0,u.jsx)("span",{style:{background:p},children:r}):null]})}var j=s.forwardRef((function(n,e){var t=n.feature,s=n.mode,a=n.intronBp,l=void 0===a?10:a,d=n.sequence,i=d.seq,p=d.upstream,g=void 0===p?"":p,x=d.downstream,j=void 0===x?"":x,v=t.subfeatures,w=(void 0===v?[]:v).sort((function(n,e){return n.start-e.start})).map((function(n){return(0,r.Z)((0,r.Z)({},n),{},{start:n.start-t.start,end:n.end-t.start})})),y=(0,o.D8)(w.filter((function(n){return"CDS"===n.type}))),k=(0,o.D8)(w.filter((function(n){return n.type.match(/utr/i)}))),q=(0,o.D8)(w.filter((function(n){return"exon"===n.type})));if(!k.length&&y.length&&q.length&&(k=(0,o.ZK)(y,q)),k.length||!y.length||q.length||(k=(0,o.mw)(y,{start:0,end:t.end-t.start,type:"gene"})),-1===t.strand){var _=[(0,c.revcom)(i),(0,c.revcom)(j),(0,c.revcom)(g)];i=_[0],g=_[1],j=_[2],y=(0,o.Wx)(y,i.length),q=(0,o.Wx)(q,i.length),k=(0,o.Wx)(k,i.length)}var I=(0,c.generateCodonTable)(c.defaultCodonTable);return(0,u.jsx)("div",{ref:e,"data-testid":"sequence_panel",children:(0,u.jsxs)("div",{style:{fontFamily:"monospace",wordWrap:"break-word",overflow:"auto",color:"black",fontSize:12,maxWidth:600,maxHeight:500},children:[(0,u.jsx)("span",{style:{background:"white"},children:">".concat(t.name||t.id||"".concat(t.refName,":").concat(t.start+1,"-").concat(t.end),"-").concat(s,"\n")}),(0,u.jsx)("br",{}),"genomic"===s?(0,u.jsx)(b,{sequence:i}):"genomic_sequence_updown"===s?(0,u.jsx)(b,{sequence:i,upstream:g,downstream:j}):"cds"===s?(0,u.jsx)(h,{cds:y,sequence:i}):"cdna"===s?(0,u.jsx)(m,{exons:q,cds:y,utr:k,sequence:i,intronBp:l}):"protein"===s?(0,u.jsx)(f,{cds:y,codonTable:I,sequence:i}):"gene"===s?(0,u.jsx)(m,{exons:q,cds:y,utr:k,sequence:i,includeIntrons:!0,intronBp:l}):"gene_collapsed_intron"===s?(0,u.jsx)(m,{exons:q,cds:y,sequence:i,utr:k,includeIntrons:!0,collapseIntron:!0,intronBp:l}):"gene_updownstream"===s?(0,u.jsx)(m,{exons:q,cds:y,sequence:i,utr:k,upstream:g,downstream:j,includeIntrons:!0,intronBp:l}):"gene_updownstream_collapsed_intron"===s?(0,u.jsx)(m,{exons:q,cds:y,sequence:i,utr:k,upstream:g,downstream:j,includeIntrons:!0,collapseIntron:!0,intronBp:l}):(0,u.jsx)("div",{children:"Unknown type"})]})})}))}}]);
//# sourceMappingURL=6431.b50e7d6c.chunk.js.map