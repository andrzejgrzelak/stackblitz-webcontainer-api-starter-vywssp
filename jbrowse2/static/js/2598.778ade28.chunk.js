"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2598],{62598:function(e,t,r){r.d(t,{Z:function(){return B}});var n={};r.r(n),r.d(n,{escape:function(){return m},escapeColumn:function(){return _},formatAttributes:function(){return k},formatComment:function(){return q},formatDirective:function(){return Z},formatFeature:function(){return D},formatItem:function(){return F},formatSequence:function(){return A},parseAttributes:function(){return b},parseDirective:function(){return y},parseFeature:function(){return C},unescape:function(){return v}});var i=r(9249),s=r(87371),a=r(80753),u=r(45754),c=r(13820),o=r(33028),f=r(85413),l=r(97692),h=r(68079),d=r(96234);function v(e){return e.replace(/%([0-9A-Fa-f]{2})/g,(function(e,t){return String.fromCharCode(parseInt(t,16))}))}function p(e,t){return String(t).replace(e,(function(e){var t=e.charCodeAt(0).toString(16).toUpperCase().padStart(2,"0");return"%".concat(t)}))}function m(e){return p(/[\n;\r\t=%&,\x00-\x1f\x7f-\xff]/g,e)}function _(e){return p(/[\n\r\t%\x00-\x1f\x7f-\xff]/g,e)}function b(e){if(!e||!e.length||"."===e)return{};var t={};return e.replace(/\r?\n$/,"").split(";").forEach((function(e){var r,n=e.split("=",2);if(n[1]&&n[1].length){n[0]=n[0].trim();var i=t[n[0].trim()];i||(i=[],t[n[0]]=i),(r=i).push.apply(r,(0,h.Z)(n[1].split(",").map((function(e){return e.trim()})).map(v)))}})),t}function C(e){var t=e.split("\t").map((function(e){return"."===e||""===e?null:e}));return{seq_id:t[0]&&v(t[0]),source:t[1]&&v(t[1]),type:t[2]&&v(t[2]),start:null===t[3]?null:parseInt(t[3],10),end:null===t[4]?null:parseInt(t[4],10),score:null===t[5]?null:parseFloat(t[5]),strand:t[6],phase:t[7],attributes:null===t[8]?null:b(t[8])}}function y(e){var t=/^\s*##\s*(\S+)\s*(.*)/.exec(e);if(!t)return null;var r=(0,d.Z)(t,2)[1],n=(0,d.Z)(t,3)[2],i={directive:r};if(n.length&&(n=n.replace(/\r?\n$/,""),i.value=n),"sequence-region"===r){var s=n.split(/\s+/,3);return(0,o.Z)((0,o.Z)({},i),{},{seq_id:s[0],start:s[1]&&s[1].replace(/\D/g,""),end:s[2]&&s[2].replace(/\D/g,"")})}if("genome-build"===r){var a=n.split(/\s+/,2),u=(0,d.Z)(a,2),c=u[0],f=u[1];return(0,o.Z)((0,o.Z)({},i),{},{source:c,buildName:f})}return i}function k(e){var t=[];return Object.entries(e).forEach((function(e){var r,n=(0,d.Z)(e,2),i=n[0],s=n[1];s&&(r=s.hasOwnProperty("toString")?m(s.toString()):Array.isArray(s)?s.map(m).join(","):m(s),t.push("".concat(m(i),"=").concat(r)))})),t.length?t.join(";"):"."}function S(e,t){var r=null===e.attributes||void 0===e.attributes?".":k(e.attributes),n=[null===e.seq_id?".":_(e.seq_id),null===e.source?".":_(e.source),null===e.type?".":_(e.type),null===e.start?".":_(e.start),null===e.end?".":_(e.end),null===e.score?".":_(e.score),null===e.strand?".":_(e.strand),null===e.phase?".":_(e.phase),r],i="".concat(n.join("\t"),"\n");return t[i]?"":(t[i]=!0,i)}function g(e,t){if(Array.isArray(e))return e.map((function(e){return g(e,t)})).join("");var r,n=[S(e,t)];return void 0!==(r=e).child_features&&void 0!==r.derived_features&&n.push.apply(n,(0,h.Z)(e.child_features.map((function(e){return g(e,t)}))).concat((0,h.Z)(e.derived_features.map((function(e){return g(e,t)}))))),n.join("")}function D(e){return g(e,{})}function Z(e){var t="##".concat(e.directive);return e.value&&(t+=" ".concat(e.value)),t+="\n"}function q(e){return"# ".concat(e.comment,"\n")}function A(e){return">".concat(e.id).concat(e.description?" ".concat(e.description):"","\n").concat(e.sequence,"\n")}function F(e){function t(e){return"attributes"in e?D(e):"directive"in e?Z(e):"sequence"in e?A(e):"comment"in e?q(e):"# (invalid item found during format)\n"}return Array.isArray(e)?e.map(t):t(e)}var L="child_features",x="derived_features",w=function(){function e(t){(0,i.Z)(this,e),this.seqCallback=t,this.currentSequence=void 0}return(0,s.Z)(e,[{key:"addLine",value:function(e){var t=/^>\s*(\S+)\s*(.*)/.exec(e);t?(this._flush(),this.currentSequence={id:t[1],sequence:""},t[2]&&(this.currentSequence.description=t[2].trim())):this.currentSequence&&/\S/.test(e)&&(this.currentSequence.sequence+=e.replace(/\s/g,""))}},{key:"_flush",value:function(){this.currentSequence&&this.seqCallback(this.currentSequence)}},{key:"finish",value:function(){this._flush()}}]),e}(),E=function(){function e(t){(0,i.Z)(this,e),this.fastaParser=void 0,this.eof=!1,this.lineNumber=0,this._underConstructionTopLevel=[],this._underConstructionById={},this._completedReferences={},this._underConstructionOrphans={};var r=function(){};this.featureCallback=t.featureCallback||r,this.endCallback=t.endCallback||r,this.commentCallback=t.commentCallback||r,this.errorCallback=t.errorCallback||r,this.directiveCallback=t.directiveCallback||r,this.sequenceCallback=t.sequenceCallback||r,this.disableDerivesFromReferences=t.disableDerivesFromReferences||!1,this.bufferSize=void 0===t.bufferSize?1e3:t.bufferSize}return(0,s.Z)(e,[{key:"addLine",value:function(e){if(this.fastaParser)this.fastaParser.addLine(e);else if(!this.eof)if(this.lineNumber+=1,/^\s*[^#\s>]/.test(e))this._bufferLine(e);else{var t=/^\s*(#+)(.*)/.exec(e);if(t){var r=(0,d.Z)(t,2)[1],n=(0,d.Z)(t,3)[2];if(3===r.length)this._emitAllUnderConstructionFeatures();else if(2===r.length){var i=y(e);i&&("FASTA"===i.directive?(this._emitAllUnderConstructionFeatures(),this.eof=!0,this.fastaParser=new w(this.sequenceCallback)):this._emitItem(i))}else n=n.replace(/\s*/,""),this._emitItem({comment:n})}else if(/^\s*$/.test(e));else{if(!/^\s*>/.test(e)){var s=e.replace(/\r?\n?$/g,"");throw new Error("GFF3 parse error.  Cannot parse '".concat(s,"'."))}this._emitAllUnderConstructionFeatures(),this.eof=!0,this.fastaParser=new w(this.sequenceCallback),this.fastaParser.addLine(e)}}}},{key:"finish",value:function(){this._emitAllUnderConstructionFeatures(),this.fastaParser&&this.fastaParser.finish(),this.endCallback()}},{key:"_emitItem",value:function(e){Array.isArray(e)?this.featureCallback(e):"directive"in e?this.directiveCallback(e):"comment"in e&&this.commentCallback(e)}},{key:"_enforceBufferSizeLimit",value:function(){for(var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=function t(r){r&&Array.isArray(r)&&r[0].attributes&&r[0].attributes.ID&&r[0].attributes.ID[0]&&(r[0].attributes.ID.forEach((function(t){delete e._underConstructionById[t],delete e._completedReferences[t]})),r.forEach((function(e){e.child_features&&e.child_features.forEach((function(e){return t(e)})),e.derived_features&&e.derived_features.forEach((function(e){return t(e)}))})))};this._underConstructionTopLevel.length+t>this.bufferSize;){var n=this._underConstructionTopLevel.shift();n&&(this._emitItem(n),r(n))}}},{key:"_emitAllUnderConstructionFeatures",value:function(){if(this._underConstructionTopLevel.forEach(this._emitItem.bind(this)),this._underConstructionTopLevel=[],this._underConstructionById={},this._completedReferences={},Array.from(Object.values(this._underConstructionOrphans)).length)throw new Error("some features reference other features that do not exist in the file (or in the same '###' scope). ".concat(Object.keys(this._underConstructionOrphans)))}},{key:"_bufferLine",value:function(e){var t,r,n,i=this,s=C(e),a=(0,o.Z)((0,o.Z)({},s),{},{child_features:[],derived_features:[]}),u=(null===(t=a.attributes)||void 0===t?void 0:t.ID)||[],c=(null===(r=a.attributes)||void 0===r?void 0:r.Parent)||[],f=this.disableDerivesFromReferences?[]:(null===(n=a.attributes)||void 0===n?void 0:n.Derives_from)||[];if(u.length||c.length||f.length){var l=void 0;u.forEach((function(e){var t=i._underConstructionById[e];t?(t[t.length-1].type!==a.type&&i._parseError('multi-line feature "'.concat(e,'" has inconsistent types: "').concat(a.type,'", "').concat(t[t.length-1].type,'"')),t.push(a),l=t):(l=[a],i._enforceBufferSizeLimit(1),c.length||f.length||i._underConstructionTopLevel.push(l),i._underConstructionById[e]=l,i._resolveReferencesTo(l,e))})),this._resolveReferencesFrom(l||[a],{Parent:c,Derives_from:f},u)}else this._emitItem([a])}},{key:"_resolveReferencesTo",value:function(e,t){var r=this._underConstructionOrphans[t];r&&(e.forEach((function(e){var t;(t=e.child_features).push.apply(t,(0,h.Z)(r.Parent))})),e.forEach((function(e){var t;(t=e.derived_features).push.apply(t,(0,h.Z)(r.Derives_from))})),delete this._underConstructionOrphans[t])}},{key:"_parseError",value:function(e){this.eof=!0,this.errorCallback("".concat(this.lineNumber,": ").concat(e))}},{key:"_resolveReferencesFrom",value:function(e,t,r){var n=this;function i(e,t,r){var n=e[t];n||(n={},e[t]=n);var i=n[r]||!1;return n[r]=!0,i}t.Parent.forEach((function(t){var s=n._underConstructionById[t];if(s){var a=L;r.filter((function(e){return i(n._completedReferences,e,"Parent,".concat(t))})).length||s.forEach((function(t){t[a].push(e)}))}else{var u=n._underConstructionOrphans[t];u||(u={Parent:[],Derives_from:[]},n._underConstructionOrphans[t]=u),u.Parent.push(e)}})),t.Derives_from.forEach((function(t){var s=n._underConstructionById[t];if(s){var a=x;r.filter((function(e){return i(n._completedReferences,e,"Derives_from,".concat(t))})).length||s.forEach((function(t){t[a].push(e)}))}else{var u=n._underConstructionOrphans[t];u||(u={Parent:[],Derives_from:[]},n._underConstructionOrphans[t]=u),u.Derives_from.push(e)}}))}}]),e}(),I=r(80341);function P(e){I&&I.nextTick?I.nextTick(e):e()}function T(e){var t=(0,o.Z)({encoding:"utf8",parseFeatures:!0,parseDirectives:!1,parseSequences:!0,parseComments:!1,bufferSize:1e3,disableDerivesFromReferences:!1},e);return e.parseAll&&(t.parseFeatures=!0,t.parseDirectives=!0,t.parseComments=!0,t.parseSequences=!0),t}var R=function(e){(0,u.Z)(r,e);var t=(0,c.Z)(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,i.Z)(this,r),(e=t.call(this,{objectMode:!0})).textBuffer="";var s=T(n);e.encoding=n.encoding||"utf8",e.decoder=new l.s;var u=e.push.bind((0,a.Z)(e));return e.parser=new E({featureCallback:s.parseFeatures?u:void 0,directiveCallback:s.parseDirectives?u:void 0,commentCallback:s.parseComments?u:void 0,sequenceCallback:s.parseSequences?u:void 0,errorCallback:function(t){return e.emit("error",t)},bufferSize:s.bufferSize,disableDerivesFromReferences:s.disableDerivesFromReferences}),e}return(0,s.Z)(r,[{key:"_addLine",value:function(e){e&&this.parser.addLine(e)}},{key:"_nextText",value:function(e){var t=this,r=(this.textBuffer+e).split(/\r?\n/);this.textBuffer=r.pop()||"",r.forEach((function(e){return t._addLine(e)}))}},{key:"_transform",value:function(e,t,r){this._nextText(this.decoder.write(e)),P(r)}},{key:"_flush",value:function(e){this.decoder.end&&this._nextText(this.decoder.end()),null!=this.textBuffer&&this._addLine(this.textBuffer),this.parser.finish(),P(e)}}]),r}(f.Transform);var j=function(e){(0,u.Z)(r,e);var t=(0,c.Z)(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.Z)(this,r),(e=t.call(this,Object.assign(n,{objectMode:!0}))).linesSinceLastSyncMark=0,e.haveWeEmittedData=!1,e.fastaMode=!1,e.minLinesBetweenSyncMarks=n.minSyncLines||100,e.insertVersionDirective=n.insertVersionDirective||!1,e}return(0,s.Z)(r,[{key:"_transform",value:function(e,t,r){var n;if(!this.haveWeEmittedData&&this.insertVersionDirective){var i=Array.isArray(e)?e[0]:e;"directive"in i&&"gff-version"!==i.directive&&this.push("##gff-version 3\n")}if("sequence"in e&&!this.fastaMode&&(this.push("##FASTA\n"),this.fastaMode=!0),n=Array.isArray(e)?e.map(F).join(""):F(e),this.push(n),this.linesSinceLastSyncMark>=this.minLinesBetweenSyncMarks)this.push("###\n"),this.linesSinceLastSyncMark=0;else{for(var s=0,a=0;a<n.length;a+=1)"\n"===n[a]&&(s+=1);this.linesSinceLastSyncMark+=s}this.haveWeEmittedData=!0,P(r)}}]),r}(f.Transform);var B={parseStream:function(){return new R(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})},parseStringSync:function(e){if(!e)return[];var t=T(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),r=[],n=r.push.bind(r),i=new E({featureCallback:t.parseFeatures?n:void 0,directiveCallback:t.parseDirectives?n:void 0,commentCallback:t.parseComments?n:void 0,sequenceCallback:t.parseSequences?n:void 0,disableDerivesFromReferences:t.disableDerivesFromReferences||!1,bufferSize:1/0,errorCallback:function(e){throw e}});return e.split(/\r?\n/).forEach(i.addLine.bind(i)),i.finish(),r},formatSync:function(e){var t=[],r=[];e.forEach((function(e){"sequence"in e?r.push(e):t.push(e)}));var n=t.map(F).join("");return r.length&&(n+="##FASTA\n",n+=r.map(A).join("")),n},formatStream:function(){return new j(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})},formatFile:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=(0,o.Z)({insertVersionDirective:!0},r);return new Promise((function(r,i){e.pipe(new j(n)).on("end",(function(){return r(null)})).on("error",i).pipe(t)}))},util:n}}}]);
//# sourceMappingURL=2598.778ade28.chunk.js.map