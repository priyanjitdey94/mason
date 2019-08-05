!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Mason=t():e.Mason=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=["string","number","function","boolean","undefined"];function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){return e.style&&e.style.display},a=function(){var e,t,n;for(t=0,n=arguments.length;t<n;t+=1)if(((e=arguments[t])||!1===e||0===e)&&!isNaN(e=Number(e)))return e;return UNDEF};function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(e){return+e.replace(/fr/,"")},p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:600;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.clear(),this.set("tracks",t),this.set("items",n),this.set("containerSize",r),this}var t,n,r;return t=e,(n=[{key:"set",value:function(e,t){switch(this.props[e]=t,e){case"tracks":this._initTrackSize();break;case"items":this._initItems();break;case"containerSize":this.props[e]=isNaN(+t)?0:+t}return this}},{key:"get",value:function(e){return this.props[e]}},{key:"_initTrackSize",value:function(e){var t,n,r,i,o,a,s,c=e||this.props.tracks||[],u=this._config,p=[{}];for(u.frTracks=[],u.intrinsicTracks=[],t=1,n=c.length;t<n;t++)r=c[t].size,o=1,Array.isArray(r)?(a=+r[0]||0,r[1].indexOf("fr")>0||r[0].indexOf("fr")>0?(s=1/0,u.frTracks.push(t),i="minmax"):"auto"===r[1]||"auto"===r[0]?(s=1/0,u.intrinsicTracks.push(t),i="minmax"):isNaN(+r[0])||isNaN(+r[1])||(s=Math.max(+r[0],+r[1]),a=Math.min(+r[0],+r[1]),u.intrinsicTracks.push(t),i="minmax")):isNaN(+r)?r.indexOf("fr")>0?(a=0,s=1/0,u.frTracks.push(t),i="flex",o=f(r)):(a=0,s=1/0,i="intrinsic",u.intrinsicTracks.push(t)):(a=s=+r,i="fixed"),p.push(l({},c[t],{type:i,multiplier:o,baseSize:a,growthLimit:s}));return u.sanitizedTracks=p}},{key:"_initItems",value:function(e){var t,n,r,i,o=e||this.props.items||[],a=this._config,s=[],c=0;for(r=0,i=o.length;r<i;r++)isNaN(o[r].start)||isNaN(o[r].end)?a.autoFlow.push(o[r]):(s.push(l({},o[r])),n=s[c],c++,n.size=isNaN(n.size)?this._getParentSize(n):+n.size);for(s.sort(function(e,t){var n=e.end-e.start,r=t.end-t.start;return n===r?e.start-t.start:n-r}),r=0,t=i=s.length;r<i;r++)if(s[r].end-s[r].start>1){t=r;break}return this._config.nonSpanningItemStartIndex=t,this._config.sanitizedItems=s}},{key:"_getParentSize",value:function(e){var t=this._config.sanitizedTracks,n=0;return t.filter(function(t){return t.start>=e.start&&t.end<=e.end}).forEach(function(e){return n+=e.baseSize}),n||0}},{key:"resolveTracks",value:function(){return this._placeNonSpanningItems()._placeSpanningItems()._distributeFreeSpace(),this._config.sanitizedTracks}},{key:"_placeNonSpanningItems",value:function(){var e,t,n=this._config,r=n.sanitizedItems,i=n.sanitizedTracks,o=n.nonSpanningItemStartIndex;return r.slice(0,o).forEach(function(n){t=n.start,"fixed"!==(e=i[t]).type&&(e.baseSize=Math.max(e.baseSize,n.size),e.growthLimit=Math.max(e.growthLimit,e.baseSize))}),this}},{key:"_placeSpanningItems",value:function(){var e,t,n,r,i,o,a,s=this._config,l=s.sanitizedItems,c=s.sanitizedTracks,u=s.nonSpanningItemStartIndex,f=s.frTracks,p=l.slice(u),h=[0];if(!p.length)return this;for(o=1,a=c.length;o<a;o++)h[o]=h[o-1]+(c[o].baseSize||0);return p.forEach(function(a){if(e=h[a.end-1]-h[a.start-1],t=Math.max(0,a.size-e)){for(o=a.start,i=!1,r=0;o<a.end;o++)f.indexOf(o)>=0&&(i=!0),"fixed"!==c[o].type&&r++;if(r&&!i)for(n=t/r,o=a.start;o<a.end;o++)"fixed"!==c[o].type&&(c[o].baseSize+=n)}}),this}},{key:"_distributeFreeSpace",value:function(){var e=this._config,t=e.frTracks,n=e.intrinsicTracks,r=e.sanitizedTracks,i=this.props.containerSize,o=0;return r.forEach(function(e){return o+=e.baseSize||0}),o<i&&(t.length?(t.forEach(function(e,n){t[n]=r[e]}),t.forEach(function(e){return o-=e.baseSize}),function e(t,n,r){var i,o,a=0;if(t.length){if(t.forEach(function(e){return a+=e.multiplier}),i=(r-n)/a,(o=t.filter(function(e){return e.baseSize<=e.multiplier*i})).length<t.length)return t.filter(function(e){return e.baseSize>e.multiplier*i}).forEach(function(e){return n+=e.baseSize}),e(o,n,r);o.forEach(function(e){return e.baseSize=e.multiplier*i})}}(t,o,i)):n.length&&(n.forEach(function(e,t){n[t]=r[e]}),function(e,t,n){var r,i,o,a,s,l,c,u=0;if(e.length){for(r=n-t,(s=e.filter(function(e){return"minmax"===e.type&&e.growthLimit!==1/0})).sort(function(e,t){return e.growthLimit-e.baseSize-(t.growthLimit-t.baseSize)}),a=s.length;u<a&&r;)for(i=r/(s.length-u||1),o=0,a=s.length;o<a;o++)l=s[o].growthLimit,r-=(c=Math.min(i+s[o].baseSize,l))-s[o].baseSize,s[o].baseSize=c,l!==c||s[o].frozen||(s[o].frozen=!0,u++);e=e.filter(function(e){return"minmax"===e.type&&e.growthLimit===1/0||"minmax"!==e.type}),i=r/e.length,e.forEach(function(e){return e.baseSize+=i})}}(n,o,i))),this}},{key:"clear",value:function(){return this.props={},this._config={frTracks:[],intrinsicTracks:[],autoFlow:[]},this}}])&&u(t.prototype,n),r&&u(t,r),e}();function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach(function(t){g(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=["auto"],w=/minmax/,b=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},v=function(e){var t=e.style||{},n=t.gridTemplateColumns,r=t.gridTemplateRows;return!/repeat\(/g.test(n)&&!/repeat\(/g.test(r)},S=function(e){return e.split(/\(|\)/g)[1].split(",").map(function(e){return e&&e.trim()})},T=function(e){if("auto"===(e=e.trim()))return e;if(!isNaN(+e))return+e;if(w.test(e)){var t=e.split(/\(|\)/g)[1].split(",");return[t[0].trim(),t[1].trim()]}return e},k=function(e,t){var n,r,i=b(t),a="width"===t?"col":"row";return e.map(function(e){return n=e.style["gridTemplate"+b("col"===a?"columns":"rows")],r="grid"===o(e)&&/repeat\(/g.test(n)?S(n)[1]:e.style["min"+i+"Contribution"]||e.style[t]||"auto",{start:e[a+"Start"],end:e[a+"End"],size:r}})},z=function(e,t,n){var r,i;for(r=t.x;r<n.x;r++)for(i=t.y;i<n.y;i++)e[r][i]=!0},N=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.setup()}var t,n,r;return t=e,(n=[{key:"setup",value:function(){return this._tsa=new p,this.props={},this._config={mapping:{}},this}},{key:"set",value:function(e,t){return this.props[e]=t,this}},{key:"getProps",value:function(e){return this.props[e]}},{key:"getConfig",value:function(e){return this._config[e]}},{key:"compute",value:function(e){var t=e||this.props.domTree;this._sanitizeTracks(t)._sanitizeItems(t)._inflateTracks()._assignCoordinatesToCells(t)}},{key:"_sanitizeTracks",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.style,r=n.gridTemplateRows,i=n.gridTemplateColumns,o=this._config;return e=this._fetchTrackInformation(r),o.mapping.row={nameToLineMap:e.nameToLineMap,lineToNameMap:e.lineToNameMap},o.rowTracks=e.tracks,e=this._fetchTrackInformation(i),o.mapping.col={nameToLineMap:e.nameToLineMap,lineToNameMap:e.lineToNameMap},o.colTracks=e.tracks,this}},{key:"_fetchTrackInformation",value:function(){var e,t,n,r,i,o,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto",s=a.split(" "),l=[{}],c={},u={};for(n=s.filter(function(e){return!e||"string"!=typeof e||!e.length||(t=e.length,"["===e[0]&&"]"===e[t-1])}),r=s.filter(function(e){return!!e&&(t=(e+"").toLowerCase().replace(/px|fr/,""),!(!(y.indexOf(t)>=0||w.test(t))&&isNaN(t)))}).map(function(e){return T(e)}),e=0,t=r.length;e<t;e++)i=n[e]&&n[e].replace(/\[|\]/g,"").split(" ").filter(function(e){return e.length}).map(function(e){return e.trim()})||[e+1+""],o=n[e+1]&&n[e+1].replace(/\[|\]/g,"").split(" ").filter(function(e){return e.length}).map(function(e){return e.trim()})||[e+2+""],l.push({start:e+1,end:e+2,size:r[e]}),u[e+1]=i,u[e+2]=o,i.forEach(function(t){return c[t]=e+1}),o.forEach(function(t){return c[t]=e+2}),c[e+1]=e+1,c[e+2]=e+2;return{tracks:l,nameToLineMap:c,lineToNameMap:u}}},{key:"_sanitizeItems",value:function(e){var t,n,r,i,o,a,s,l=e||this.props.domTree,c=l.children||[],u=this._config.mapping,f=l.style.gridAutoFlow||"row",p=Object.keys(u.row.lineToNameMap).length,h=Object.keys(u.col.lineToNameMap).length,g=[],m=[],y=[[]],w=[];for(o=1;o<=p;o++)y.push([]);for(o=0,s=c.length;o<s;o++)t=c[o].style,g.push(d({},c[o],{rowStart:u.row.nameToLineMap[t.gridRowStart],rowEnd:u.row.nameToLineMap[t.gridRowEnd],colStart:u.col.nameToLineMap[t.gridColumnStart],colEnd:u.col.nameToLineMap[t.gridColumnEnd]})),r=g[o],z(y,{x:r.colStart,y:r.rowStart},{x:r.colEnd,y:r.rowEnd});if((m=g.filter(function(e){return!e.colStart||!e.rowStart}))&&"row"===f){for(o=1;o<p;o++)for(a=1;a<h;a++)y[o][a]||w.push({row:o,col:a});for(;m.length&&w.length;)r=m.shift(),n=w.shift(),r.rowStart=n.row,r.colStart=n.col,r.rowEnd=n.row+1,r.colEnd=n.col+1;if(i=Math.ceil(m.length/h)){for(;i--;)l.style.gridTemplateRows+="auto ",u.row.nameToLineMap[p+1]=p+1,u.row.nameToLineMap[p+2]=p+2,p++,y.push([]);for(l.style.gridTemplateRows=l.style.gridTemplateRows.trim(),w=[],o=1;o<=p;o++)for(a=1;a<=h;a++)y[o][a]||w.push({row:o,col:a});for(;m.length;)r=m.shift(),n=w.shift(),r.rowStart=n.row,r.colStart=n.col,r.rowEnd=n.row+1,r.colEnd=n.col+1}}return this._config.sanitizedItems=g,this}},{key:"_expandTracksIfRequired",value:function(){return this}},{key:"_inflateTracks",value:function(){var e,t=this._config,n=t.sanitizedItems,r=t.colTracks,i=t.rowTracks,o=0,a=0,s=this.props.domTree,l=s.style||{},c=l.paddingStart,u=l.paddingEnd,f=l.paddingTop,h=l.paddingBottom,d=l.width,g=l.height,m=new p;return isNaN(+d)||(d-=c+u),e=m.clear().set("tracks",r).set("items",k(n,"width")).set("containerSize",d||"auto").resolveTracks(),r.forEach(function(t,n){t.calculatedStyle=e[n],a+=e[n].baseSize||0}),this._solveUnresolvedChildren(),isNaN(+g)||(g-=f+h),e=m.clear().set("tracks",i).set("items",k(n,"height")).set("containerSize",g||"auto").resolveTracks(),i.forEach(function(t,n){t.calculatedStyle=e[n],o+=e[n].baseSize||0}),s.style.minHeightContribution=o,s.style.minWidthContribution=a,this}},{key:"_solveUnresolvedChildren",value:function(e){var t,n,r,i,o,a,s,l=((e||this.props.domTree).unResolvedChildren||[]).filter(function(e){return/repeat\(/g.test(e.style.gridTemplateColumns)||/repeat\(/g.test(e.style.gridTemplateRows)}),c=this._config,u=c.colTracks,f=c.mapping,p=this.getProps("parent"),h=[0];if(!l.length)return this;for(n=1,r=u.length;n<r;n++)h[n]=h[n-1]+u[n].calculatedStyle.baseSize;l.forEach(function(e){o=S(e.style.gridTemplateColumns)[1],a=f.col.nameToLineMap[e.style.gridColumnStart],s=f.col.nameToLineMap[e.style.gridColumnEnd],i=h[s-1]-h[a-1],t=function(e,t){e.style;var n,r,i,o=e.children,a=0,s=0,l="",c="",u=0,f=t.itemWidth,p=t.width;for(p=isNaN(+p)?0:+p,o.forEach(function(e){return u=Math.max(u,+e.style.height||0)}),a+=f=+f,l+=f+" ",s=1,r=1,i=o.length;r<i&&!(a+f>p);r++)a+=f,l+=f+" ";for(s=r,n=Math.ceil(i/s);n--;)c+=u+" ";return{gridTemplateColumns:l.trim(),gridTemplateRows:c.trim()}}(e,{itemWidth:o,width:i}),e.style.gridTemplateColumns=t.gridTemplateColumns,e.style.gridTemplateRows=t.gridTemplateRows,p.gridLayoutEngine(e)})}},{key:"_assignCoordinatesToCells",value:function(e){var t,n,r,i,o,s,l,c,u,f=e||this.props.domTree,p=this._config,h=p.sanitizedItems,d=p.rowTracks,g=p.colTracks,m=f.style,y=m.justifyItems,w=m.alignItems,b=m.paddingStart,v=(m.paddingEnd,m.paddingTop),S=(m.paddingBottom,[b]),T=[v];for(r=1,n=d.length;r<n;r++)S[r]=S[r-1]+d[r].calculatedStyle.baseSize;for(r=1,n=g.length;r<n;r++)T[r]=T[r-1]+g[r].calculatedStyle.baseSize;f.layout={x:0,y:0,width:isNaN(f.style.width)?T[T.length-1]:f.style.width,height:isNaN(f.style.height)?S[S.length-1]:f.style.height},(f.children||[]).forEach(function(e,n){switch(t=h[n],i=T[t.colEnd-1]-T[t.colStart-1],o=S[t.rowEnd-1]-S[t.rowStart-1],s=isNaN(+e.style.width)?i:+e.style.width,l=isNaN(+e.style.height)?o:+e.style.height,y||e.style.justifySelf){case"center":c=T[t.colStart-1]+i/2-s/2;break;case"end":c=T[t.colEnd-1]-s;break;case"stretch":s=i,c=T[t.colStart-1];break;default:c=T[t.colStart-1]}switch(w||e.style.alignSelf){case"center":u=S[t.rowStart-1]+o/2-l/2;break;case"end":u=S[t.rowEnd-1]-l;break;case"stretch":l=o,u=S[t.rowStart-1];break;default:u=S[t.rowStart-1]}c+=a(t.style.paddingStart,t.style.padding,0),u+=a(t.style.paddingTop,t.style.padding,0),e.layout={x:c,y:u,x2:c+s,y2:u+l,width:s,height:l}})}}])&&m(t.prototype,n),r&&m(t,r),e}(),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=e.split(" ").filter(function(e){return e&&!!e.trim()}),r="",i=1;return n.length&&!/repeat\(/.test(e)?n.forEach(function(e){y.indexOf(e)>-1||/[0-9]fr/.test(e)||w.test(e)||!isNaN(e)?(r+=t[i].calculatedStyle.baseSize+" ",i++):r+=e+" "}):t.forEach(function(e){isNaN(e.calculatedStyle.baseSize)||(r+=e.calculatedStyle.baseSize+" ")}),r.trim()},O=function(e,t){var n,r,i,a,s,l,c,u,f,p,h=e.style,d=t.getConfig("rowTracks"),g=t.getConfig("colTracks"),m=t.getConfig("mapping"),y=h.gridTemplateRows,w=h.gridTemplateColumns;for(e.style.gridTemplateRows=E(y,d),e.style.gridTemplateColumns=E(w,g),r=0,a=(e.children||[]).length;r<a;r++)if(n=e.children[r],o(n)){if(n.style.gridTemplateColumns=n.userGivenStyles.gridTemplateColumns,n.style.gridTemplateRows=n.userGivenStyles.gridTemplateRows,isNaN(n.userGivenStyles.width)){for(f=n.style.gridColumnStart,p=n.style.gridColumnEnd,f=m.col.nameToLineMap[f],p=m.col.nameToLineMap[p],i=f,l=0;i<p;i++)l+=g[i].calculatedStyle.baseSize;n.style.width=l}if(isNaN(n.userGivenStyles.height)){for(c=n.style.gridRowStart,u=n.style.gridRowEnd,c=m.row.nameToLineMap[c],u=m.row.nameToLineMap[u],i=c,s=0;i<u;i++)s+=d[i].calculatedStyle.baseSize;n.style.height=s}}return e};function _(e){var t,n,r,i,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,l=e.style;if(e&&e.style){for(e.userGivenStyles||(e.style.width=isNaN(e.style.width)?"auto":e.style.width,e.style.height=isNaN(e.style.height)?"auto":e.style.height,l.paddingStart=a(l.paddingStart,l.padding,0),l.paddingEnd=a(l.paddingEnd,l.padding,0),l.paddingTop=a(l.paddingTop,l.padding,0),l.paddingBottom=a(l.paddingBottom,l.padding,0),e.userGivenStyles={gridTemplateColumns:e.style.gridTemplateColumns,gridTemplateRows:e.style.gridTemplateRows,width:e.style.width,height:e.style.height}),e.unResolvedChildren=[],t=0,n=e.children&&e.children.length;t<n;t++)r=e.children[t],o(r)&&(v(r)?this.compute(r):e.unResolvedChildren.push(r));return(i=new N).set("domTree",e).set("parent",this).compute(),s<2&&this.gridLayoutEngine(O(e,i),2),e}}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.gridLayoutEngine=_}var t,n,r;return t=e,(n=[{key:"compute",value:function(e){switch(o(e)){case"grid":case"flex":default:return this.gridLayoutEngine(e)}}}])&&x(t.prototype,n),r&&x(t,r),e}(),M=function(e){var t=new C,n=function e(t){if(r.indexOf(i(t))>-1||null===t)return t;if(Array.isArray(t)){var n,o,a=[];for(n=0,o=t.length;n<o;n++)a.push(e(t[n]));return a}if("object"===i(t)){var s,l={};for(s in t)l[s]=e(t[s]);return l}}(e);return n.root=!0,function e(){var t,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(r.layout=i.layout,t=0,n=(r.children||[]).length;t<n;t++)e(r.children[t],i.children[t])}(e,t.compute(n)),e};n.d(t,"computeLayout",function(){return M})}])});
//# sourceMappingURL=main.js.map