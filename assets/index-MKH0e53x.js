(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))ve(D);new MutationObserver(D=>{for(const Z of D)if(Z.type==="childList")for(const de of Z.addedNodes)de.tagName==="LINK"&&de.rel==="modulepreload"&&ve(de)}).observe(document,{childList:!0,subtree:!0});function m(D){const Z={};return D.integrity&&(Z.integrity=D.integrity),D.referrerPolicy&&(Z.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?Z.credentials="include":D.crossOrigin==="anonymous"?Z.credentials="omit":Z.credentials="same-origin",Z}function ve(D){if(D.ep)return;D.ep=!0;const Z=m(D);fetch(D.href,Z)}})();var kl={exports:{}},vr={},Ll={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ks;function Tf(){if(ks)return F;ks=1;var U=Symbol.for("react.element"),B=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),ve=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),Z=Symbol.for("react.provider"),de=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),Le=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),ee=Symbol.iterator;function Y(d){return d===null||typeof d!="object"?null:(d=ee&&d[ee]||d["@@iterator"],typeof d=="function"?d:null)}var Qe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},He=Object.assign,X={};function H(d,y,z){this.props=d,this.context=y,this.refs=X,this.updater=z||Qe}H.prototype.isReactComponent={},H.prototype.setState=function(d,y){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,y,"setState")},H.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function yt(){}yt.prototype=H.prototype;function at(d,y,z){this.props=d,this.context=y,this.refs=X,this.updater=z||Qe}var Je=at.prototype=new yt;Je.constructor=at,He(Je,H.prototype),Je.isPureReactComponent=!0;var we=Array.isArray,be=Object.prototype.hasOwnProperty,Se={current:null},_e={key:!0,ref:!0,__self:!0,__source:!0};function Ve(d,y,z){var R,A={},O=null,V=null;if(y!=null)for(R in y.ref!==void 0&&(V=y.ref),y.key!==void 0&&(O=""+y.key),y)be.call(y,R)&&!_e.hasOwnProperty(R)&&(A[R]=y[R]);var W=arguments.length-2;if(W===1)A.children=z;else if(1<W){for(var J=Array(W),Oe=0;Oe<W;Oe++)J[Oe]=arguments[Oe+2];A.children=J}if(d&&d.defaultProps)for(R in W=d.defaultProps,W)A[R]===void 0&&(A[R]=W[R]);return{$$typeof:U,type:d,key:O,ref:V,props:A,_owner:Se.current}}function Pt(d,y){return{$$typeof:U,type:d.type,key:y,ref:d.ref,props:d.props,_owner:d._owner}}function vt(d){return typeof d=="object"&&d!==null&&d.$$typeof===U}function $t(d){var y={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(z){return y[z]})}var st=/\/+/g;function Ae(d,y){return typeof d=="object"&&d!==null&&d.key!=null?$t(""+d.key):y.toString(36)}function et(d,y,z,R,A){var O=typeof d;(O==="undefined"||O==="boolean")&&(d=null);var V=!1;if(d===null)V=!0;else switch(O){case"string":case"number":V=!0;break;case"object":switch(d.$$typeof){case U:case B:V=!0}}if(V)return V=d,A=A(V),d=R===""?"."+Ae(V,0):R,we(A)?(z="",d!=null&&(z=d.replace(st,"$&/")+"/"),et(A,y,z,"",function(Oe){return Oe})):A!=null&&(vt(A)&&(A=Pt(A,z+(!A.key||V&&V.key===A.key?"":(""+A.key).replace(st,"$&/")+"/")+d)),y.push(A)),1;if(V=0,R=R===""?".":R+":",we(d))for(var W=0;W<d.length;W++){O=d[W];var J=R+Ae(O,W);V+=et(O,y,z,J,A)}else if(J=Y(d),typeof J=="function")for(d=J.call(d),W=0;!(O=d.next()).done;)O=O.value,J=R+Ae(O,W++),V+=et(O,y,z,J,A);else if(O==="object")throw y=String(d),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.");return V}function dt(d,y,z){if(d==null)return d;var R=[],A=0;return et(d,R,"","",function(O){return y.call(z,O,A++)}),R}function Te(d){if(d._status===-1){var y=d._result;y=y(),y.then(function(z){(d._status===0||d._status===-1)&&(d._status=1,d._result=z)},function(z){(d._status===0||d._status===-1)&&(d._status=2,d._result=z)}),d._status===-1&&(d._status=0,d._result=y)}if(d._status===1)return d._result.default;throw d._result}var re={current:null},E={transition:null},_={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:E,ReactCurrentOwner:Se};function k(){throw Error("act(...) is not supported in production builds of React.")}return F.Children={map:dt,forEach:function(d,y,z){dt(d,function(){y.apply(this,arguments)},z)},count:function(d){var y=0;return dt(d,function(){y++}),y},toArray:function(d){return dt(d,function(y){return y})||[]},only:function(d){if(!vt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},F.Component=H,F.Fragment=m,F.Profiler=D,F.PureComponent=at,F.StrictMode=ve,F.Suspense=Q,F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_,F.act=k,F.cloneElement=function(d,y,z){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var R=He({},d.props),A=d.key,O=d.ref,V=d._owner;if(y!=null){if(y.ref!==void 0&&(O=y.ref,V=Se.current),y.key!==void 0&&(A=""+y.key),d.type&&d.type.defaultProps)var W=d.type.defaultProps;for(J in y)be.call(y,J)&&!_e.hasOwnProperty(J)&&(R[J]=y[J]===void 0&&W!==void 0?W[J]:y[J])}var J=arguments.length-2;if(J===1)R.children=z;else if(1<J){W=Array(J);for(var Oe=0;Oe<J;Oe++)W[Oe]=arguments[Oe+2];R.children=W}return{$$typeof:U,type:d.type,key:A,ref:O,props:R,_owner:V}},F.createContext=function(d){return d={$$typeof:de,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:Z,_context:d},d.Consumer=d},F.createElement=Ve,F.createFactory=function(d){var y=Ve.bind(null,d);return y.type=d,y},F.createRef=function(){return{current:null}},F.forwardRef=function(d){return{$$typeof:fe,render:d}},F.isValidElement=vt,F.lazy=function(d){return{$$typeof:ge,_payload:{_status:-1,_result:d},_init:Te}},F.memo=function(d,y){return{$$typeof:Le,type:d,compare:y===void 0?null:y}},F.startTransition=function(d){var y=E.transition;E.transition={};try{d()}finally{E.transition=y}},F.unstable_act=k,F.useCallback=function(d,y){return re.current.useCallback(d,y)},F.useContext=function(d){return re.current.useContext(d)},F.useDebugValue=function(){},F.useDeferredValue=function(d){return re.current.useDeferredValue(d)},F.useEffect=function(d,y){return re.current.useEffect(d,y)},F.useId=function(){return re.current.useId()},F.useImperativeHandle=function(d,y,z){return re.current.useImperativeHandle(d,y,z)},F.useInsertionEffect=function(d,y){return re.current.useInsertionEffect(d,y)},F.useLayoutEffect=function(d,y){return re.current.useLayoutEffect(d,y)},F.useMemo=function(d,y){return re.current.useMemo(d,y)},F.useReducer=function(d,y,z){return re.current.useReducer(d,y,z)},F.useRef=function(d){return re.current.useRef(d)},F.useState=function(d){return re.current.useState(d)},F.useSyncExternalStore=function(d,y,z){return re.current.useSyncExternalStore(d,y,z)},F.useTransition=function(){return re.current.useTransition()},F.version="18.3.1",F}var Ls;function Il(){return Ls||(Ls=1,Ll.exports=Tf()),Ll.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ss;function Uf(){if(Ss)return vr;Ss=1;var U=Il(),B=Symbol.for("react.element"),m=Symbol.for("react.fragment"),ve=Object.prototype.hasOwnProperty,D=U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z={key:!0,ref:!0,__self:!0,__source:!0};function de(fe,Q,Le){var ge,ee={},Y=null,Qe=null;Le!==void 0&&(Y=""+Le),Q.key!==void 0&&(Y=""+Q.key),Q.ref!==void 0&&(Qe=Q.ref);for(ge in Q)ve.call(Q,ge)&&!Z.hasOwnProperty(ge)&&(ee[ge]=Q[ge]);if(fe&&fe.defaultProps)for(ge in Q=fe.defaultProps,Q)ee[ge]===void 0&&(ee[ge]=Q[ge]);return{$$typeof:B,type:fe,key:Y,ref:Qe,props:ee,_owner:D.current}}return vr.Fragment=m,vr.jsx=de,vr.jsxs=de,vr}var Ps;function Df(){return Ps||(Ps=1,kl.exports=Uf()),kl.exports}var Ie=Df(),Ds=Il(),Ii={},Sl={exports:{}},Me={},Pl={exports:{}},Cl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs;function zf(){return Cs||(Cs=1,(function(U){function B(E,_){var k=E.length;E.push(_);e:for(;0<k;){var d=k-1>>>1,y=E[d];if(0<D(y,_))E[d]=_,E[k]=y,k=d;else break e}}function m(E){return E.length===0?null:E[0]}function ve(E){if(E.length===0)return null;var _=E[0],k=E.pop();if(k!==_){E[0]=k;e:for(var d=0,y=E.length,z=y>>>1;d<z;){var R=2*(d+1)-1,A=E[R],O=R+1,V=E[O];if(0>D(A,k))O<y&&0>D(V,A)?(E[d]=V,E[O]=k,d=O):(E[d]=A,E[R]=k,d=R);else if(O<y&&0>D(V,k))E[d]=V,E[O]=k,d=O;else break e}}return _}function D(E,_){var k=E.sortIndex-_.sortIndex;return k!==0?k:E.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var Z=performance;U.unstable_now=function(){return Z.now()}}else{var de=Date,fe=de.now();U.unstable_now=function(){return de.now()-fe}}var Q=[],Le=[],ge=1,ee=null,Y=3,Qe=!1,He=!1,X=!1,H=typeof setTimeout=="function"?setTimeout:null,yt=typeof clearTimeout=="function"?clearTimeout:null,at=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Je(E){for(var _=m(Le);_!==null;){if(_.callback===null)ve(Le);else if(_.startTime<=E)ve(Le),_.sortIndex=_.expirationTime,B(Q,_);else break;_=m(Le)}}function we(E){if(X=!1,Je(E),!He)if(m(Q)!==null)He=!0,Te(be);else{var _=m(Le);_!==null&&re(we,_.startTime-E)}}function be(E,_){He=!1,X&&(X=!1,yt(Ve),Ve=-1),Qe=!0;var k=Y;try{for(Je(_),ee=m(Q);ee!==null&&(!(ee.expirationTime>_)||E&&!$t());){var d=ee.callback;if(typeof d=="function"){ee.callback=null,Y=ee.priorityLevel;var y=d(ee.expirationTime<=_);_=U.unstable_now(),typeof y=="function"?ee.callback=y:ee===m(Q)&&ve(Q),Je(_)}else ve(Q);ee=m(Q)}if(ee!==null)var z=!0;else{var R=m(Le);R!==null&&re(we,R.startTime-_),z=!1}return z}finally{ee=null,Y=k,Qe=!1}}var Se=!1,_e=null,Ve=-1,Pt=5,vt=-1;function $t(){return!(U.unstable_now()-vt<Pt)}function st(){if(_e!==null){var E=U.unstable_now();vt=E;var _=!0;try{_=_e(!0,E)}finally{_?Ae():(Se=!1,_e=null)}}else Se=!1}var Ae;if(typeof at=="function")Ae=function(){at(st)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,dt=et.port2;et.port1.onmessage=st,Ae=function(){dt.postMessage(null)}}else Ae=function(){H(st,0)};function Te(E){_e=E,Se||(Se=!0,Ae())}function re(E,_){Ve=H(function(){E(U.unstable_now())},_)}U.unstable_IdlePriority=5,U.unstable_ImmediatePriority=1,U.unstable_LowPriority=4,U.unstable_NormalPriority=3,U.unstable_Profiling=null,U.unstable_UserBlockingPriority=2,U.unstable_cancelCallback=function(E){E.callback=null},U.unstable_continueExecution=function(){He||Qe||(He=!0,Te(be))},U.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pt=0<E?Math.floor(1e3/E):5},U.unstable_getCurrentPriorityLevel=function(){return Y},U.unstable_getFirstCallbackNode=function(){return m(Q)},U.unstable_next=function(E){switch(Y){case 1:case 2:case 3:var _=3;break;default:_=Y}var k=Y;Y=_;try{return E()}finally{Y=k}},U.unstable_pauseExecution=function(){},U.unstable_requestPaint=function(){},U.unstable_runWithPriority=function(E,_){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var k=Y;Y=E;try{return _()}finally{Y=k}},U.unstable_scheduleCallback=function(E,_,k){var d=U.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?d+k:d):k=d,E){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=k+y,E={id:ge++,callback:_,priorityLevel:E,startTime:k,expirationTime:y,sortIndex:-1},k>d?(E.sortIndex=k,B(Le,E),m(Q)===null&&E===m(Le)&&(X?(yt(Ve),Ve=-1):X=!0,re(we,k-d))):(E.sortIndex=y,B(Q,E),He||Qe||(He=!0,Te(be))),E},U.unstable_shouldYield=$t,U.unstable_wrapCallback=function(E){var _=Y;return function(){var k=Y;Y=_;try{return E.apply(this,arguments)}finally{Y=k}}}})(Cl)),Cl}var Is;function Ff(){return Is||(Is=1,Pl.exports=zf()),Pl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _s;function Rf(){if(_s)return Me;_s=1;var U=Il(),B=Ff();function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ve=new Set,D={};function Z(e,t){de(e,t),de(e+"Capture",t)}function de(e,t){for(D[e]=t,e=0;e<t.length;e++)ve.add(t[e])}var fe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Q=Object.prototype.hasOwnProperty,Le=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ge={},ee={};function Y(e){return Q.call(ee,e)?!0:Q.call(ge,e)?!1:Le.test(e)?ee[e]=!0:(ge[e]=!0,!1)}function Qe(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function He(e,t,n,r){if(t===null||typeof t>"u"||Qe(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function X(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){H[e]=new X(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];H[t]=new X(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){H[e]=new X(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){H[e]=new X(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){H[e]=new X(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){H[e]=new X(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){H[e]=new X(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){H[e]=new X(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){H[e]=new X(e,5,!1,e.toLowerCase(),null,!1,!1)});var yt=/[\-:]([a-z])/g;function at(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yt,at);H[t]=new X(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yt,at);H[t]=new X(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yt,at);H[t]=new X(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){H[e]=new X(e,1,!1,e.toLowerCase(),null,!1,!1)}),H.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){H[e]=new X(e,1,!1,e.toLowerCase(),null,!0,!0)});function Je(e,t,n,r){var i=H.hasOwnProperty(t)?H[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(He(t,n,i,r)&&(n=null),r||i===null?Y(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var we=U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,be=Symbol.for("react.element"),Se=Symbol.for("react.portal"),_e=Symbol.for("react.fragment"),Ve=Symbol.for("react.strict_mode"),Pt=Symbol.for("react.profiler"),vt=Symbol.for("react.provider"),$t=Symbol.for("react.context"),st=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),E=Symbol.iterator;function _(e){return e===null||typeof e!="object"?null:(e=E&&e[E]||e["@@iterator"],typeof e=="function"?e:null)}var k=Object.assign,d;function y(e){if(d===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var z=!1;function R(e,t){if(!e||z)return"";z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=u);break}}}finally{z=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?y(e):""}function A(e){switch(e.tag){case 5:return y(e.type);case 16:return y("Lazy");case 13:return y("Suspense");case 19:return y("SuspenseList");case 0:case 2:case 15:return e=R(e.type,!1),e;case 11:return e=R(e.type.render,!1),e;case 1:return e=R(e.type,!0),e;default:return""}}function O(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _e:return"Fragment";case Se:return"Portal";case Pt:return"Profiler";case Ve:return"StrictMode";case Ae:return"Suspense";case et:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $t:return(e.displayName||"Context")+".Consumer";case vt:return(e._context.displayName||"Context")+".Provider";case st:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dt:return t=e.displayName||null,t!==null?t:O(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return O(e(t))}catch{}}return null}function V(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return O(t);case 8:return t===Ve?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function J(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oe(e){var t=J(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gr(e){e._valueTracker||(e._valueTracker=Oe(e))}function _l(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=J(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _i(e,t){var n=t.checked;return k({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Tl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=W(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ul(e,t){t=t.checked,t!=null&&Je(e,"checked",t,!1)}function Ti(e,t){Ul(e,t);var n=W(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ui(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ui(e,t.type,W(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Dl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ui(e,t,n){(t!=="number"||wr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dn=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Di(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(m(91));return k({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(m(92));if(Dn(n)){if(1<n.length)throw Error(m(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function Fl(e,t){var n=W(t.value),r=W(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Rl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ml(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ml(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Er,Al=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Er.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zs=["Webkit","ms","Moz","O"];Object.keys(Fn).forEach(function(e){zs.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fn[t]=Fn[e]})});function Ol(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fn.hasOwnProperty(e)&&Fn[e]?(""+t).trim():t+"px"}function ql(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ol(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Fs=k({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fi(e,t){if(t){if(Fs[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(m(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(m(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(m(61))}if(t.style!=null&&typeof t.style!="object")throw Error(m(62))}}function Ri(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mi=null;function Ai(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Oi=null,an=null,sn=null;function Bl(e){if(e=nr(e)){if(typeof Oi!="function")throw Error(m(280));var t=e.stateNode;t&&(t=Qr(t),Oi(e.stateNode,e.type,t))}}function Wl(e){an?sn?sn.push(e):sn=[e]:an=e}function jl(){if(an){var e=an,t=sn;if(sn=an=null,Bl(e),t)for(e=0;e<t.length;e++)Bl(t[e])}}function Ql(e,t){return e(t)}function Hl(){}var qi=!1;function Vl(e,t,n){if(qi)return e(t,n);qi=!0;try{return Ql(e,t,n)}finally{qi=!1,(an!==null||sn!==null)&&(Hl(),jl())}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=Qr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(m(231,t,typeof n));return n}var Bi=!1;if(fe)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Bi=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Bi=!1}function Rs(e,t,n,r,i,o,l,u,a){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(v){this.onError(v)}}var An=!1,xr=null,Nr=!1,Wi=null,Ms={onError:function(e){An=!0,xr=e}};function As(e,t,n,r,i,o,l,u,a){An=!1,xr=null,Rs.apply(Ms,arguments)}function Os(e,t,n,r,i,o,l,u,a){if(As.apply(this,arguments),An){if(An){var p=xr;An=!1,xr=null}else throw Error(m(198));Nr||(Nr=!0,Wi=p)}}function Zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $l(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zl(e){if(Zt(e)!==e)throw Error(m(188))}function qs(e){var t=e.alternate;if(!t){if(t=Zt(e),t===null)throw Error(m(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Zl(i),e;if(o===r)return Zl(i),t;o=o.sibling}throw Error(m(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l)throw Error(m(189))}}if(n.alternate!==r)throw Error(m(190))}if(n.tag!==3)throw Error(m(188));return n.stateNode.current===n?e:t}function Kl(e){return e=qs(e),e!==null?Gl(e):null}function Gl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gl(e);if(t!==null)return t;e=e.sibling}return null}var Yl=B.unstable_scheduleCallback,Xl=B.unstable_cancelCallback,Bs=B.unstable_shouldYield,Ws=B.unstable_requestPaint,oe=B.unstable_now,js=B.unstable_getCurrentPriorityLevel,ji=B.unstable_ImmediatePriority,Jl=B.unstable_UserBlockingPriority,kr=B.unstable_NormalPriority,Qs=B.unstable_LowPriority,bl=B.unstable_IdlePriority,Lr=null,ft=null;function Hs(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Lr,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Zs,Vs=Math.log,$s=Math.LN2;function Zs(e){return e>>>=0,e===0?32:31-(Vs(e)/$s|0)|0}var Sr=64,Pr=4194304;function On(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Cr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=On(u):(o&=l,o!==0&&(r=On(o)))}else l=n&~i,l!==0?r=On(l):o!==0&&(r=On(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),i=1<<n,r|=e[n],t&=~i;return r}function Ks(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gs(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-tt(o),u=1<<l,a=i[l];a===-1?((u&n)===0||(u&r)!==0)&&(i[l]=Ks(u,t)):a<=t&&(e.expiredLanes|=u),o&=~u}}function Qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function eu(){var e=Sr;return Sr<<=1,(Sr&4194240)===0&&(Sr=64),e}function Hi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function Ys(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Vi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var j=0;function tu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var nu,$i,ru,iu,ou,Zi=!1,Ir=[],Ct=null,It=null,_t=null,Bn=new Map,Wn=new Map,Tt=[],Xs="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lu(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function jn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=nr(t),t!==null&&$i(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Js(e,t,n,r,i){switch(t){case"focusin":return Ct=jn(Ct,e,t,n,r,i),!0;case"dragenter":return It=jn(It,e,t,n,r,i),!0;case"mouseover":return _t=jn(_t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Bn.set(o,jn(Bn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Wn.set(o,jn(Wn.get(o)||null,e,t,n,r,i)),!0}return!1}function uu(e){var t=Kt(e.target);if(t!==null){var n=Zt(t);if(n!==null){if(t=n.tag,t===13){if(t=$l(n),t!==null){e.blockedOn=t,ou(e.priority,function(){ru(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Mi=r,n.target.dispatchEvent(r),Mi=null}else return t=nr(n),t!==null&&$i(t),e.blockedOn=n,!1;t.shift()}return!0}function au(e,t,n){_r(e)&&n.delete(t)}function bs(){Zi=!1,Ct!==null&&_r(Ct)&&(Ct=null),It!==null&&_r(It)&&(It=null),_t!==null&&_r(_t)&&(_t=null),Bn.forEach(au),Wn.forEach(au)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Zi||(Zi=!0,B.unstable_scheduleCallback(B.unstable_NormalPriority,bs)))}function Hn(e){function t(i){return Qn(i,e)}if(0<Ir.length){Qn(Ir[0],e);for(var n=1;n<Ir.length;n++){var r=Ir[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ct!==null&&Qn(Ct,e),It!==null&&Qn(It,e),_t!==null&&Qn(_t,e),Bn.forEach(t),Wn.forEach(t),n=0;n<Tt.length;n++)r=Tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tt.length&&(n=Tt[0],n.blockedOn===null);)uu(n),n.blockedOn===null&&Tt.shift()}var dn=we.ReactCurrentBatchConfig,Tr=!0;function ed(e,t,n,r){var i=j,o=dn.transition;dn.transition=null;try{j=1,Ki(e,t,n,r)}finally{j=i,dn.transition=o}}function td(e,t,n,r){var i=j,o=dn.transition;dn.transition=null;try{j=4,Ki(e,t,n,r)}finally{j=i,dn.transition=o}}function Ki(e,t,n,r){if(Tr){var i=Gi(e,t,n,r);if(i===null)po(e,t,r,Ur,n),lu(e,r);else if(Js(i,e,t,n,r))r.stopPropagation();else if(lu(e,r),t&4&&-1<Xs.indexOf(e)){for(;i!==null;){var o=nr(i);if(o!==null&&nu(o),o=Gi(e,t,n,r),o===null&&po(e,t,r,Ur,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else po(e,t,r,null,n)}}var Ur=null;function Gi(e,t,n,r){if(Ur=null,e=Ai(r),e=Kt(e),e!==null)if(t=Zt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$l(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ur=e,null}function su(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(js()){case ji:return 1;case Jl:return 4;case kr:case Qs:return 16;case bl:return 536870912;default:return 16}default:return 16}}var Ut=null,Yi=null,Dr=null;function du(){if(Dr)return Dr;var e,t=Yi,n=t.length,r,i="value"in Ut?Ut.value:Ut.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Dr=i.slice(e,1<r?1-r:void 0)}function zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fr(){return!0}function fu(){return!1}function qe(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Fr:fu,this.isPropagationStopped=fu,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fr)},persist:function(){},isPersistent:Fr}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xi=qe(fn),Vn=k({},fn,{view:0,detail:0}),nd=qe(Vn),Ji,bi,$n,Rr=k({},Vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:to,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$n&&($n&&e.type==="mousemove"?(Ji=e.screenX-$n.screenX,bi=e.screenY-$n.screenY):bi=Ji=0,$n=e),Ji)},movementY:function(e){return"movementY"in e?e.movementY:bi}}),cu=qe(Rr),rd=k({},Rr,{dataTransfer:0}),id=qe(rd),od=k({},Vn,{relatedTarget:0}),eo=qe(od),ld=k({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),ud=qe(ld),ad=k({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sd=qe(ad),dd=k({},fn,{data:0}),pu=qe(dd),fd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function md(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pd[e])?!!t[e]:!1}function to(){return md}var hd=k({},Vn,{key:function(e){if(e.key){var t=fd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:to,charCode:function(e){return e.type==="keypress"?zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yd=qe(hd),vd=k({},Rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mu=qe(vd),gd=k({},Vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:to}),wd=qe(gd),Ed=k({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),xd=qe(Ed),Nd=k({},Rr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kd=qe(Nd),Ld=[9,13,27,32],no=fe&&"CompositionEvent"in window,Zn=null;fe&&"documentMode"in document&&(Zn=document.documentMode);var Sd=fe&&"TextEvent"in window&&!Zn,hu=fe&&(!no||Zn&&8<Zn&&11>=Zn),yu=" ",vu=!1;function gu(e,t){switch(e){case"keyup":return Ld.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cn=!1;function Pd(e,t){switch(e){case"compositionend":return wu(t);case"keypress":return t.which!==32?null:(vu=!0,yu);case"textInput":return e=t.data,e===yu&&vu?null:e;default:return null}}function Cd(e,t){if(cn)return e==="compositionend"||!no&&gu(e,t)?(e=du(),Dr=Yi=Ut=null,cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hu&&t.locale!=="ko"?null:t.data;default:return null}}var Id={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Id[e.type]:t==="textarea"}function xu(e,t,n,r){Wl(r),t=Br(t,"onChange"),0<t.length&&(n=new Xi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,Gn=null;function _d(e){qu(e,0)}function Mr(e){var t=vn(e);if(_l(t))return e}function Td(e,t){if(e==="change")return t}var Nu=!1;if(fe){var ro;if(fe){var io="oninput"in document;if(!io){var ku=document.createElement("div");ku.setAttribute("oninput","return;"),io=typeof ku.oninput=="function"}ro=io}else ro=!1;Nu=ro&&(!document.documentMode||9<document.documentMode)}function Lu(){Kn&&(Kn.detachEvent("onpropertychange",Su),Gn=Kn=null)}function Su(e){if(e.propertyName==="value"&&Mr(Gn)){var t=[];xu(t,Gn,e,Ai(e)),Vl(_d,t)}}function Ud(e,t,n){e==="focusin"?(Lu(),Kn=t,Gn=n,Kn.attachEvent("onpropertychange",Su)):e==="focusout"&&Lu()}function Dd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mr(Gn)}function zd(e,t){if(e==="click")return Mr(t)}function Fd(e,t){if(e==="input"||e==="change")return Mr(t)}function Rd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Rd;function Yn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Q.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function Pu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cu(e,t){var n=Pu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pu(n)}}function Iu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Iu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _u(){for(var e=window,t=wr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wr(e.document)}return t}function oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Md(e){var t=_u(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Iu(n.ownerDocument.documentElement,n)){if(r!==null&&oo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Cu(n,o);var l=Cu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ad=fe&&"documentMode"in document&&11>=document.documentMode,pn=null,lo=null,Xn=null,uo=!1;function Tu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uo||pn==null||pn!==wr(r)||(r=pn,"selectionStart"in r&&oo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xn&&Yn(Xn,r)||(Xn=r,r=Br(lo,"onSelect"),0<r.length&&(t=new Xi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pn)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mn={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionend:Ar("Transition","TransitionEnd")},ao={},Uu={};fe&&(Uu=document.createElement("div").style,"AnimationEvent"in window||(delete mn.animationend.animation,delete mn.animationiteration.animation,delete mn.animationstart.animation),"TransitionEvent"in window||delete mn.transitionend.transition);function Or(e){if(ao[e])return ao[e];if(!mn[e])return e;var t=mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uu)return ao[e]=t[n];return e}var Du=Or("animationend"),zu=Or("animationiteration"),Fu=Or("animationstart"),Ru=Or("transitionend"),Mu=new Map,Au="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){Mu.set(e,t),Z(t,[e])}for(var so=0;so<Au.length;so++){var fo=Au[so],Od=fo.toLowerCase(),qd=fo[0].toUpperCase()+fo.slice(1);Dt(Od,"on"+qd)}Dt(Du,"onAnimationEnd"),Dt(zu,"onAnimationIteration"),Dt(Fu,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(Ru,"onTransitionEnd"),de("onMouseEnter",["mouseout","mouseover"]),de("onMouseLeave",["mouseout","mouseover"]),de("onPointerEnter",["pointerout","pointerover"]),de("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));function Ou(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Os(r,t,void 0,e),e.currentTarget=null}function qu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],a=u.instance,p=u.currentTarget;if(u=u.listener,a!==o&&i.isPropagationStopped())break e;Ou(i,u,p),o=a}else for(l=0;l<r.length;l++){if(u=r[l],a=u.instance,p=u.currentTarget,u=u.listener,a!==o&&i.isPropagationStopped())break e;Ou(i,u,p),o=a}}}if(Nr)throw e=Wi,Nr=!1,Wi=null,e}function K(e,t){var n=t[wo];n===void 0&&(n=t[wo]=new Set);var r=e+"__bubble";n.has(r)||(Bu(t,e,2,!1),n.add(r))}function co(e,t,n){var r=0;t&&(r|=4),Bu(n,e,r,t)}var qr="_reactListening"+Math.random().toString(36).slice(2);function bn(e){if(!e[qr]){e[qr]=!0,ve.forEach(function(n){n!=="selectionchange"&&(Bd.has(n)||co(n,!1,e),co(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qr]||(t[qr]=!0,co("selectionchange",!1,t))}}function Bu(e,t,n,r){switch(su(t)){case 1:var i=ed;break;case 4:i=td;break;default:i=Ki}n=i.bind(null,t,n,e),i=void 0,!Bi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function po(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;u!==null;){if(l=Kt(u),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}u=u.parentNode}}r=r.return}Vl(function(){var p=o,v=Ai(n),g=[];e:{var h=Mu.get(e);if(h!==void 0){var x=Xi,L=e;switch(e){case"keypress":if(zr(n)===0)break e;case"keydown":case"keyup":x=yd;break;case"focusin":L="focus",x=eo;break;case"focusout":L="blur",x=eo;break;case"beforeblur":case"afterblur":x=eo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=cu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=wd;break;case Du:case zu:case Fu:x=ud;break;case Ru:x=xd;break;case"scroll":x=nd;break;case"wheel":x=kd;break;case"copy":case"cut":case"paste":x=sd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=mu}var S=(t&4)!==0,le=!S&&e==="scroll",f=S?h!==null?h+"Capture":null:h;S=[];for(var s=p,c;s!==null;){c=s;var w=c.stateNode;if(c.tag===5&&w!==null&&(c=w,f!==null&&(w=Rn(s,f),w!=null&&S.push(er(s,w,c)))),le)break;s=s.return}0<S.length&&(h=new x(h,L,null,n,v),g.push({event:h,listeners:S}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==Mi&&(L=n.relatedTarget||n.fromElement)&&(Kt(L)||L[gt]))break e;if((x||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,x?(L=n.relatedTarget||n.toElement,x=p,L=L?Kt(L):null,L!==null&&(le=Zt(L),L!==le||L.tag!==5&&L.tag!==6)&&(L=null)):(x=null,L=p),x!==L)){if(S=cu,w="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(S=mu,w="onPointerLeave",f="onPointerEnter",s="pointer"),le=x==null?h:vn(x),c=L==null?h:vn(L),h=new S(w,s+"leave",x,n,v),h.target=le,h.relatedTarget=c,w=null,Kt(v)===p&&(S=new S(f,s+"enter",L,n,v),S.target=c,S.relatedTarget=le,w=S),le=w,x&&L)t:{for(S=x,f=L,s=0,c=S;c;c=hn(c))s++;for(c=0,w=f;w;w=hn(w))c++;for(;0<s-c;)S=hn(S),s--;for(;0<c-s;)f=hn(f),c--;for(;s--;){if(S===f||f!==null&&S===f.alternate)break t;S=hn(S),f=hn(f)}S=null}else S=null;x!==null&&Wu(g,h,x,S,!1),L!==null&&le!==null&&Wu(g,le,L,S,!0)}}e:{if(h=p?vn(p):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var P=Td;else if(Eu(h))if(Nu)P=Fd;else{P=Dd;var C=Ud}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=zd);if(P&&(P=P(e,p))){xu(g,P,n,v);break e}C&&C(e,h,p),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Ui(h,"number",h.value)}switch(C=p?vn(p):window,e){case"focusin":(Eu(C)||C.contentEditable==="true")&&(pn=C,lo=p,Xn=null);break;case"focusout":Xn=lo=pn=null;break;case"mousedown":uo=!0;break;case"contextmenu":case"mouseup":case"dragend":uo=!1,Tu(g,n,v);break;case"selectionchange":if(Ad)break;case"keydown":case"keyup":Tu(g,n,v)}var I;if(no)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else cn?gu(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(hu&&n.locale!=="ko"&&(cn||T!=="onCompositionStart"?T==="onCompositionEnd"&&cn&&(I=du()):(Ut=v,Yi="value"in Ut?Ut.value:Ut.textContent,cn=!0)),C=Br(p,T),0<C.length&&(T=new pu(T,e,null,n,v),g.push({event:T,listeners:C}),I?T.data=I:(I=wu(n),I!==null&&(T.data=I)))),(I=Sd?Pd(e,n):Cd(e,n))&&(p=Br(p,"onBeforeInput"),0<p.length&&(v=new pu("onBeforeInput","beforeinput",null,n,v),g.push({event:v,listeners:p}),v.data=I))}qu(g,t)})}function er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Rn(e,n),o!=null&&r.unshift(er(e,o,i)),o=Rn(e,t),o!=null&&r.push(er(e,o,i))),e=e.return}return r}function hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var u=n,a=u.alternate,p=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&p!==null&&(u=p,i?(a=Rn(n,o),a!=null&&l.unshift(er(n,a,u))):i||(a=Rn(n,o),a!=null&&l.push(er(n,a,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Wd=/\r\n?/g,jd=/\u0000|\uFFFD/g;function ju(e){return(typeof e=="string"?e:""+e).replace(Wd,`
`).replace(jd,"")}function Wr(e,t,n){if(t=ju(t),ju(e)!==t&&n)throw Error(m(425))}function jr(){}var mo=null,ho=null;function yo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vo=typeof setTimeout=="function"?setTimeout:void 0,Qd=typeof clearTimeout=="function"?clearTimeout:void 0,Qu=typeof Promise=="function"?Promise:void 0,Hd=typeof queueMicrotask=="function"?queueMicrotask:typeof Qu<"u"?function(e){return Qu.resolve(null).then(e).catch(Vd)}:vo;function Vd(e){setTimeout(function(){throw e})}function go(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Hn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hn(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),ct="__reactFiber$"+yn,tr="__reactProps$"+yn,gt="__reactContainer$"+yn,wo="__reactEvents$"+yn,$d="__reactListeners$"+yn,Zd="__reactHandles$"+yn;function Kt(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hu(e);e!==null;){if(n=e[ct])return n;e=Hu(e)}return t}e=n,n=e.parentNode}return null}function nr(e){return e=e[ct]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(m(33))}function Qr(e){return e[tr]||null}var Eo=[],gn=-1;function Ft(e){return{current:e}}function G(e){0>gn||(e.current=Eo[gn],Eo[gn]=null,gn--)}function $(e,t){gn++,Eo[gn]=e.current,e.current=t}var Rt={},Ee=Ft(Rt),Ue=Ft(!1),Gt=Rt;function wn(e,t){var n=e.type.contextTypes;if(!n)return Rt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function De(e){return e=e.childContextTypes,e!=null}function Hr(){G(Ue),G(Ee)}function Vu(e,t,n){if(Ee.current!==Rt)throw Error(m(168));$(Ee,t),$(Ue,n)}function $u(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(m(108,V(e)||"Unknown",i));return k({},n,r)}function Vr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rt,Gt=Ee.current,$(Ee,e),$(Ue,Ue.current),!0}function Zu(e,t,n){var r=e.stateNode;if(!r)throw Error(m(169));n?(e=$u(e,t,Gt),r.__reactInternalMemoizedMergedChildContext=e,G(Ue),G(Ee),$(Ee,e)):G(Ue),$(Ue,n)}var wt=null,$r=!1,xo=!1;function Ku(e){wt===null?wt=[e]:wt.push(e)}function Kd(e){$r=!0,Ku(e)}function Mt(){if(!xo&&wt!==null){xo=!0;var e=0,t=j;try{var n=wt;for(j=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,$r=!1}catch(i){throw wt!==null&&(wt=wt.slice(e+1)),Yl(ji,Mt),i}finally{j=t,xo=!1}}return null}var En=[],xn=0,Zr=null,Kr=0,$e=[],Ze=0,Yt=null,Et=1,xt="";function Xt(e,t){En[xn++]=Kr,En[xn++]=Zr,Zr=e,Kr=t}function Gu(e,t,n){$e[Ze++]=Et,$e[Ze++]=xt,$e[Ze++]=Yt,Yt=e;var r=Et;e=xt;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var o=32-tt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Et=1<<32-tt(t)+i|n<<i|r,xt=o+e}else Et=1<<o|n<<i|r,xt=e}function No(e){e.return!==null&&(Xt(e,1),Gu(e,1,0))}function ko(e){for(;e===Zr;)Zr=En[--xn],En[xn]=null,Kr=En[--xn],En[xn]=null;for(;e===Yt;)Yt=$e[--Ze],$e[Ze]=null,xt=$e[--Ze],$e[Ze]=null,Et=$e[--Ze],$e[Ze]=null}var Be=null,We=null,b=!1,rt=null;function Yu(e,t){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,We=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yt!==null?{id:Et,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,We=null,!0):!1;default:return!1}}function Lo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function So(e){if(b){var t=We;if(t){var n=t;if(!Xu(e,t)){if(Lo(e))throw Error(m(418));t=zt(n.nextSibling);var r=Be;t&&Xu(e,t)?Yu(r,n):(e.flags=e.flags&-4097|2,b=!1,Be=e)}}else{if(Lo(e))throw Error(m(418));e.flags=e.flags&-4097|2,b=!1,Be=e}}}function Ju(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function Gr(e){if(e!==Be)return!1;if(!b)return Ju(e),b=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yo(e.type,e.memoizedProps)),t&&(t=We)){if(Lo(e))throw bu(),Error(m(418));for(;t;)Yu(e,t),t=zt(t.nextSibling)}if(Ju(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=Be?zt(e.stateNode.nextSibling):null;return!0}function bu(){for(var e=We;e;)e=zt(e.nextSibling)}function Nn(){We=Be=null,b=!1}function Po(e){rt===null?rt=[e]:rt.push(e)}var Gd=we.ReactCurrentBatchConfig;function rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(m(309));var r=n.stateNode}if(!r)throw Error(m(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var u=i.refs;l===null?delete u[o]:u[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(m(284));if(!n._owner)throw Error(m(290,e))}return e}function Yr(e,t){throw e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ea(e){var t=e._init;return t(e._payload)}function ta(e){function t(f,s){if(e){var c=f.deletions;c===null?(f.deletions=[s],f.flags|=16):c.push(s)}}function n(f,s){if(!e)return null;for(;s!==null;)t(f,s),s=s.sibling;return null}function r(f,s){for(f=new Map;s!==null;)s.key!==null?f.set(s.key,s):f.set(s.index,s),s=s.sibling;return f}function i(f,s){return f=Ht(f,s),f.index=0,f.sibling=null,f}function o(f,s,c){return f.index=c,e?(c=f.alternate,c!==null?(c=c.index,c<s?(f.flags|=2,s):c):(f.flags|=2,s)):(f.flags|=1048576,s)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,s,c,w){return s===null||s.tag!==6?(s=vl(c,f.mode,w),s.return=f,s):(s=i(s,c),s.return=f,s)}function a(f,s,c,w){var P=c.type;return P===_e?v(f,s,c.props.children,w,c.key):s!==null&&(s.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Te&&ea(P)===s.type)?(w=i(s,c.props),w.ref=rr(f,s,c),w.return=f,w):(w=Ei(c.type,c.key,c.props,null,f.mode,w),w.ref=rr(f,s,c),w.return=f,w)}function p(f,s,c,w){return s===null||s.tag!==4||s.stateNode.containerInfo!==c.containerInfo||s.stateNode.implementation!==c.implementation?(s=gl(c,f.mode,w),s.return=f,s):(s=i(s,c.children||[]),s.return=f,s)}function v(f,s,c,w,P){return s===null||s.tag!==7?(s=ln(c,f.mode,w,P),s.return=f,s):(s=i(s,c),s.return=f,s)}function g(f,s,c){if(typeof s=="string"&&s!==""||typeof s=="number")return s=vl(""+s,f.mode,c),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case be:return c=Ei(s.type,s.key,s.props,null,f.mode,c),c.ref=rr(f,null,s),c.return=f,c;case Se:return s=gl(s,f.mode,c),s.return=f,s;case Te:var w=s._init;return g(f,w(s._payload),c)}if(Dn(s)||_(s))return s=ln(s,f.mode,c,null),s.return=f,s;Yr(f,s)}return null}function h(f,s,c,w){var P=s!==null?s.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return P!==null?null:u(f,s,""+c,w);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case be:return c.key===P?a(f,s,c,w):null;case Se:return c.key===P?p(f,s,c,w):null;case Te:return P=c._init,h(f,s,P(c._payload),w)}if(Dn(c)||_(c))return P!==null?null:v(f,s,c,w,null);Yr(f,c)}return null}function x(f,s,c,w,P){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(c)||null,u(s,f,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case be:return f=f.get(w.key===null?c:w.key)||null,a(s,f,w,P);case Se:return f=f.get(w.key===null?c:w.key)||null,p(s,f,w,P);case Te:var C=w._init;return x(f,s,c,C(w._payload),P)}if(Dn(w)||_(w))return f=f.get(c)||null,v(s,f,w,P,null);Yr(s,w)}return null}function L(f,s,c,w){for(var P=null,C=null,I=s,T=s=0,me=null;I!==null&&T<c.length;T++){I.index>T?(me=I,I=null):me=I.sibling;var q=h(f,I,c[T],w);if(q===null){I===null&&(I=me);break}e&&I&&q.alternate===null&&t(f,I),s=o(q,s,T),C===null?P=q:C.sibling=q,C=q,I=me}if(T===c.length)return n(f,I),b&&Xt(f,T),P;if(I===null){for(;T<c.length;T++)I=g(f,c[T],w),I!==null&&(s=o(I,s,T),C===null?P=I:C.sibling=I,C=I);return b&&Xt(f,T),P}for(I=r(f,I);T<c.length;T++)me=x(I,f,T,c[T],w),me!==null&&(e&&me.alternate!==null&&I.delete(me.key===null?T:me.key),s=o(me,s,T),C===null?P=me:C.sibling=me,C=me);return e&&I.forEach(function(Vt){return t(f,Vt)}),b&&Xt(f,T),P}function S(f,s,c,w){var P=_(c);if(typeof P!="function")throw Error(m(150));if(c=P.call(c),c==null)throw Error(m(151));for(var C=P=null,I=s,T=s=0,me=null,q=c.next();I!==null&&!q.done;T++,q=c.next()){I.index>T?(me=I,I=null):me=I.sibling;var Vt=h(f,I,q.value,w);if(Vt===null){I===null&&(I=me);break}e&&I&&Vt.alternate===null&&t(f,I),s=o(Vt,s,T),C===null?P=Vt:C.sibling=Vt,C=Vt,I=me}if(q.done)return n(f,I),b&&Xt(f,T),P;if(I===null){for(;!q.done;T++,q=c.next())q=g(f,q.value,w),q!==null&&(s=o(q,s,T),C===null?P=q:C.sibling=q,C=q);return b&&Xt(f,T),P}for(I=r(f,I);!q.done;T++,q=c.next())q=x(I,f,T,q.value,w),q!==null&&(e&&q.alternate!==null&&I.delete(q.key===null?T:q.key),s=o(q,s,T),C===null?P=q:C.sibling=q,C=q);return e&&I.forEach(function(_f){return t(f,_f)}),b&&Xt(f,T),P}function le(f,s,c,w){if(typeof c=="object"&&c!==null&&c.type===_e&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case be:e:{for(var P=c.key,C=s;C!==null;){if(C.key===P){if(P=c.type,P===_e){if(C.tag===7){n(f,C.sibling),s=i(C,c.props.children),s.return=f,f=s;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Te&&ea(P)===C.type){n(f,C.sibling),s=i(C,c.props),s.ref=rr(f,C,c),s.return=f,f=s;break e}n(f,C);break}else t(f,C);C=C.sibling}c.type===_e?(s=ln(c.props.children,f.mode,w,c.key),s.return=f,f=s):(w=Ei(c.type,c.key,c.props,null,f.mode,w),w.ref=rr(f,s,c),w.return=f,f=w)}return l(f);case Se:e:{for(C=c.key;s!==null;){if(s.key===C)if(s.tag===4&&s.stateNode.containerInfo===c.containerInfo&&s.stateNode.implementation===c.implementation){n(f,s.sibling),s=i(s,c.children||[]),s.return=f,f=s;break e}else{n(f,s);break}else t(f,s);s=s.sibling}s=gl(c,f.mode,w),s.return=f,f=s}return l(f);case Te:return C=c._init,le(f,s,C(c._payload),w)}if(Dn(c))return L(f,s,c,w);if(_(c))return S(f,s,c,w);Yr(f,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,s!==null&&s.tag===6?(n(f,s.sibling),s=i(s,c),s.return=f,f=s):(n(f,s),s=vl(c,f.mode,w),s.return=f,f=s),l(f)):n(f,s)}return le}var kn=ta(!0),na=ta(!1),Xr=Ft(null),Jr=null,Ln=null,Co=null;function Io(){Co=Ln=Jr=null}function _o(e){var t=Xr.current;G(Xr),e._currentValue=t}function To(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sn(e,t){Jr=e,Co=Ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ze=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(Co!==e)if(e={context:e,memoizedValue:t,next:null},Ln===null){if(Jr===null)throw Error(m(308));Ln=e,Jr.dependencies={lanes:0,firstContext:e}}else Ln=Ln.next=e;return t}var Jt=null;function Uo(e){Jt===null?Jt=[e]:Jt.push(e)}function ra(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Uo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function Do(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ia(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ot(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(M&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Nt(e,n)}return i=r.interleaved,i===null?(t.next=t,Uo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Nt(e,n)}function br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vi(e,n)}}function oa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ei(e,t,n,r){var i=e.updateQueue;At=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var a=u,p=a.next;a.next=null,l===null?o=p:l.next=p,l=a;var v=e.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==l&&(u===null?v.firstBaseUpdate=p:u.next=p,v.lastBaseUpdate=a))}if(o!==null){var g=i.baseState;l=0,v=p=a=null,u=o;do{var h=u.lane,x=u.eventTime;if((r&h)===h){v!==null&&(v=v.next={eventTime:x,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var L=e,S=u;switch(h=t,x=n,S.tag){case 1:if(L=S.payload,typeof L=="function"){g=L.call(x,g,h);break e}g=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=S.payload,h=typeof L=="function"?L.call(x,g,h):L,h==null)break e;g=k({},g,h);break e;case 2:At=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[u]:h.push(u))}else x={eventTime:x,lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(p=v=x,a=g):v=v.next=x,l|=h;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;h=u,u=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(v===null&&(a=g),i.baseState=a,i.firstBaseUpdate=p,i.lastBaseUpdate=v,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);tn|=l,e.lanes=l,e.memoizedState=g}}function la(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(m(191,i));i.call(r)}}}var ir={},pt=Ft(ir),or=Ft(ir),lr=Ft(ir);function bt(e){if(e===ir)throw Error(m(174));return e}function zo(e,t){switch($(lr,t),$(or,e),$(pt,ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zi(t,e)}G(pt),$(pt,t)}function Pn(){G(pt),G(or),G(lr)}function ua(e){bt(lr.current);var t=bt(pt.current),n=zi(t,e.type);t!==n&&($(or,e),$(pt,n))}function Fo(e){or.current===e&&(G(pt),G(or))}var te=Ft(0);function ti(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ro=[];function Mo(){for(var e=0;e<Ro.length;e++)Ro[e]._workInProgressVersionPrimary=null;Ro.length=0}var ni=we.ReactCurrentDispatcher,Ao=we.ReactCurrentBatchConfig,en=0,ne=null,ae=null,ce=null,ri=!1,ur=!1,ar=0,Yd=0;function xe(){throw Error(m(321))}function Oo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function qo(e,t,n,r,i,o){if(en=o,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ni.current=e===null||e.memoizedState===null?ef:tf,e=n(r,i),ur){o=0;do{if(ur=!1,ar=0,25<=o)throw Error(m(301));o+=1,ce=ae=null,t.updateQueue=null,ni.current=nf,e=n(r,i)}while(ur)}if(ni.current=li,t=ae!==null&&ae.next!==null,en=0,ce=ae=ne=null,ri=!1,t)throw Error(m(300));return e}function Bo(){var e=ar!==0;return ar=0,e}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?ne.memoizedState=ce=e:ce=ce.next=e,ce}function Ge(){if(ae===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ce===null?ne.memoizedState:ce.next;if(t!==null)ce=t,ae=e;else{if(e===null)throw Error(m(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ce===null?ne.memoizedState=ce=e:ce=ce.next=e}return ce}function sr(e,t){return typeof t=="function"?t(e):t}function Wo(e){var t=Ge(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,a=null,p=o;do{var v=p.lane;if((en&v)===v)a!==null&&(a=a.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var g={lane:v,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};a===null?(u=a=g,l=r):a=a.next=g,ne.lanes|=v,tn|=v}p=p.next}while(p!==null&&p!==o);a===null?l=r:a.next=u,nt(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ne.lanes|=o,tn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function jo(e){var t=Ge(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);nt(o,t.memoizedState)||(ze=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function aa(){}function sa(e,t){var n=ne,r=Ge(),i=t(),o=!nt(r.memoizedState,i);if(o&&(r.memoizedState=i,ze=!0),r=r.queue,Qo(ca.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,dr(9,fa.bind(null,n,r,i,t),void 0,null),pe===null)throw Error(m(349));(en&30)!==0||da(n,t,i)}return i}function da(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fa(e,t,n,r){t.value=n,t.getSnapshot=r,pa(t)&&ma(e)}function ca(e,t,n){return n(function(){pa(t)&&ma(e)})}function pa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function ma(e){var t=Nt(e,1);t!==null&&ut(t,e,1,-1)}function ha(e){var t=mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:e},t.queue=e,e=e.dispatch=bd.bind(null,ne,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ya(){return Ge().memoizedState}function ii(e,t,n,r){var i=mt();ne.flags|=e,i.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function oi(e,t,n,r){var i=Ge();r=r===void 0?null:r;var o=void 0;if(ae!==null){var l=ae.memoizedState;if(o=l.destroy,r!==null&&Oo(r,l.deps)){i.memoizedState=dr(t,n,o,r);return}}ne.flags|=e,i.memoizedState=dr(1|t,n,o,r)}function va(e,t){return ii(8390656,8,e,t)}function Qo(e,t){return oi(2048,8,e,t)}function ga(e,t){return oi(4,2,e,t)}function wa(e,t){return oi(4,4,e,t)}function Ea(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xa(e,t,n){return n=n!=null?n.concat([e]):null,oi(4,4,Ea.bind(null,t,e),n)}function Ho(){}function Na(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ka(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function La(e,t,n){return(en&21)===0?(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n):(nt(n,t)||(n=eu(),ne.lanes|=n,tn|=n,e.baseState=!0),t)}function Xd(e,t){var n=j;j=n!==0&&4>n?n:4,e(!0);var r=Ao.transition;Ao.transition={};try{e(!1),t()}finally{j=n,Ao.transition=r}}function Sa(){return Ge().memoizedState}function Jd(e,t,n){var r=jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pa(e))Ca(t,n);else if(n=ra(e,t,n,r),n!==null){var i=Ce();ut(n,e,r,i),Ia(n,t,r)}}function bd(e,t,n){var r=jt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pa(e))Ca(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,u=o(l,n);if(i.hasEagerState=!0,i.eagerState=u,nt(u,l)){var a=t.interleaved;a===null?(i.next=i,Uo(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=ra(e,t,i,r),n!==null&&(i=Ce(),ut(n,e,r,i),Ia(n,t,r))}}function Pa(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Ca(e,t){ur=ri=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ia(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vi(e,n)}}var li={readContext:Ke,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},ef={readContext:Ke,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:va,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ii(4194308,4,Ea.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ii(4194308,4,e,t)},useInsertionEffect:function(e,t){return ii(4,2,e,t)},useMemo:function(e,t){var n=mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Jd.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:ha,useDebugValue:Ho,useDeferredValue:function(e){return mt().memoizedState=e},useTransition:function(){var e=ha(!1),t=e[0];return e=Xd.bind(null,e[1]),mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,i=mt();if(b){if(n===void 0)throw Error(m(407));n=n()}else{if(n=t(),pe===null)throw Error(m(349));(en&30)!==0||da(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,va(ca.bind(null,r,o,e),[e]),r.flags|=2048,dr(9,fa.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=mt(),t=pe.identifierPrefix;if(b){var n=xt,r=Et;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ar++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Yd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tf={readContext:Ke,useCallback:Na,useContext:Ke,useEffect:Qo,useImperativeHandle:xa,useInsertionEffect:ga,useLayoutEffect:wa,useMemo:ka,useReducer:Wo,useRef:ya,useState:function(){return Wo(sr)},useDebugValue:Ho,useDeferredValue:function(e){var t=Ge();return La(t,ae.memoizedState,e)},useTransition:function(){var e=Wo(sr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:aa,useSyncExternalStore:sa,useId:Sa,unstable_isNewReconciler:!1},nf={readContext:Ke,useCallback:Na,useContext:Ke,useEffect:Qo,useImperativeHandle:xa,useInsertionEffect:ga,useLayoutEffect:wa,useMemo:ka,useReducer:jo,useRef:ya,useState:function(){return jo(sr)},useDebugValue:Ho,useDeferredValue:function(e){var t=Ge();return ae===null?t.memoizedState=e:La(t,ae.memoizedState,e)},useTransition:function(){var e=jo(sr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:aa,useSyncExternalStore:sa,useId:Sa,unstable_isNewReconciler:!1};function it(e,t){if(e&&e.defaultProps){t=k({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:k({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ui={isMounted:function(e){return(e=e._reactInternals)?Zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=jt(e),o=kt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ot(e,o,i),t!==null&&(ut(t,e,i,r),br(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=jt(e),o=kt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ot(e,o,i),t!==null&&(ut(t,e,i,r),br(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=jt(e),i=kt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ot(e,i,r),t!==null&&(ut(t,e,r,n),br(t,e,r))}};function _a(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(i,o):!0}function Ta(e,t,n){var r=!1,i=Rt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ke(o):(i=De(t)?Gt:Ee.current,r=t.contextTypes,o=(r=r!=null)?wn(e,i):Rt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ui,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ua(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ui.enqueueReplaceState(t,t.state,null)}function $o(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Do(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ke(o):(o=De(t)?Gt:Ee.current,i.context=wn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Vo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ui.enqueueReplaceState(i,i.state,null),ei(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Cn(e,t){try{var n="",r=t;do n+=A(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Zo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ko(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rf=typeof WeakMap=="function"?WeakMap:Map;function Da(e,t,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){mi||(mi=!0,sl=r),Ko(e,t)},n}function za(e,t,n){n=kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ko(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ko(e,t),typeof r!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Fa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=gf.bind(null,e,t,n),t.then(e,e))}function Ra(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ma(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kt(-1,1),t.tag=2,Ot(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var of=we.ReactCurrentOwner,ze=!1;function Pe(e,t,n,r){t.child=e===null?na(t,null,n,r):kn(t,e.child,n,r)}function Aa(e,t,n,r,i){n=n.render;var o=t.ref;return Sn(t,i),r=qo(e,t,n,r,o,i),n=Bo(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Lt(e,t,i)):(b&&n&&No(t),t.flags|=1,Pe(e,t,r,i),t.child)}function Oa(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!yl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,qa(e,t,o,r,i)):(e=Ei(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(l,r)&&e.ref===t.ref)return Lt(e,t,i)}return t.flags|=1,e=Ht(o,r),e.ref=t.ref,e.return=t,t.child=e}function qa(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Yn(o,r)&&e.ref===t.ref)if(ze=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ze=!0);else return t.lanes=e.lanes,Lt(e,t,i)}return Go(e,t,n,r,i)}function Ba(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(_n,je),je|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$(_n,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,$(_n,je),je|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,$(_n,je),je|=r;return Pe(e,t,i,n),t.child}function Wa(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Go(e,t,n,r,i){var o=De(n)?Gt:Ee.current;return o=wn(t,o),Sn(t,i),n=qo(e,t,n,r,o,i),r=Bo(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Lt(e,t,i)):(b&&r&&No(t),t.flags|=1,Pe(e,t,n,i),t.child)}function ja(e,t,n,r,i){if(De(n)){var o=!0;Vr(t)}else o=!1;if(Sn(t,i),t.stateNode===null)si(e,t),Ta(t,n,r),$o(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var a=l.context,p=n.contextType;typeof p=="object"&&p!==null?p=Ke(p):(p=De(n)?Gt:Ee.current,p=wn(t,p));var v=n.getDerivedStateFromProps,g=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||a!==p)&&Ua(t,l,r,p),At=!1;var h=t.memoizedState;l.state=h,ei(t,r,l,i),a=t.memoizedState,u!==r||h!==a||Ue.current||At?(typeof v=="function"&&(Vo(t,n,v,r),a=t.memoizedState),(u=At||_a(t,n,u,r,h,a,p))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=p,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ia(e,t),u=t.memoizedProps,p=t.type===t.elementType?u:it(t.type,u),l.props=p,g=t.pendingProps,h=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ke(a):(a=De(n)?Gt:Ee.current,a=wn(t,a));var x=n.getDerivedStateFromProps;(v=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==g||h!==a)&&Ua(t,l,r,a),At=!1,h=t.memoizedState,l.state=h,ei(t,r,l,i);var L=t.memoizedState;u!==g||h!==L||Ue.current||At?(typeof x=="function"&&(Vo(t,n,x,r),L=t.memoizedState),(p=At||_a(t,n,p,r,h,L,a)||!1)?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,L,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,L,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=L),l.props=r,l.state=L,l.context=a,r=p):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Yo(e,t,n,r,o,i)}function Yo(e,t,n,r,i,o){Wa(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Zu(t,n,!1),Lt(e,t,o);r=t.stateNode,of.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=kn(t,e.child,null,o),t.child=kn(t,null,u,o)):Pe(e,t,u,o),t.memoizedState=r.state,i&&Zu(t,n,!0),t.child}function Qa(e){var t=e.stateNode;t.pendingContext?Vu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vu(e,t.context,!1),zo(e,t.containerInfo)}function Ha(e,t,n,r,i){return Nn(),Po(i),t.flags|=256,Pe(e,t,n,r),t.child}var Xo={dehydrated:null,treeContext:null,retryLane:0};function Jo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Va(e,t,n){var r=t.pendingProps,i=te.current,o=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),$(te,i&1),e===null)return So(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=xi(l,r,0,null),e=ln(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Jo(n),t.memoizedState=Xo,e):bo(t,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return lf(e,t,l,r,u,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,u=i.sibling;var a={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Ht(i,a),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=Ht(u,o):(o=ln(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Jo(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Xo,r}return o=e.child,e=o.sibling,r=Ht(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bo(e,t){return t=xi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ai(e,t,n,r){return r!==null&&Po(r),kn(t,e.child,null,n),e=bo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lf(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Zo(Error(m(422))),ai(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=xi({mode:"visible",children:r.children},i,0,null),o=ln(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&kn(t,e.child,null,l),t.child.memoizedState=Jo(l),t.memoizedState=Xo,o);if((t.mode&1)===0)return ai(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(m(419)),r=Zo(o,r,void 0),ai(e,t,l,r)}if(u=(l&e.childLanes)!==0,ze||u){if(r=pe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|l))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Nt(e,i),ut(r,e,i,-1))}return hl(),r=Zo(Error(m(421))),ai(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=wf.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,We=zt(i.nextSibling),Be=t,b=!0,rt=null,e!==null&&($e[Ze++]=Et,$e[Ze++]=xt,$e[Ze++]=Yt,Et=e.id,xt=e.overflow,Yt=t),t=bo(t,r.children),t.flags|=4096,t)}function $a(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),To(e.return,t,n)}function el(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Za(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Pe(e,t,r.children,n),r=te.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$a(e,n,t);else if(e.tag===19)$a(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(te,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ti(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),el(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ti(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}el(t,!0,n,null,o);break;case"together":el(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function si(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,n=Ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function uf(e,t,n){switch(t.tag){case 3:Qa(t),Nn();break;case 5:ua(t);break;case 1:De(t.type)&&Vr(t);break;case 4:zo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;$(Xr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($(te,te.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Va(e,t,n):($(te,te.current&1),e=Lt(e,t,n),e!==null?e.sibling:null);$(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Za(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,Ba(e,t,n)}return Lt(e,t,n)}var Ka,tl,Ga,Ya;Ka=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},tl=function(){},Ga=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,bt(pt.current);var o=null;switch(n){case"input":i=_i(e,i),r=_i(e,r),o=[];break;case"select":i=k({},i,{value:void 0}),r=k({},r,{value:void 0}),o=[];break;case"textarea":i=Di(e,i),r=Di(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=jr)}Fi(n,r);var l;n=null;for(p in i)if(!r.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var u=i[p];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(D.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in r){var a=r[p];if(u=i!=null?i[p]:void 0,r.hasOwnProperty(p)&&a!==u&&(a!=null||u!=null))if(p==="style")if(u){for(l in u)!u.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&u[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(p,n)),n=a;else p==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(o=o||[]).push(p,a)):p==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(p,""+a):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(D.hasOwnProperty(p)?(a!=null&&p==="onScroll"&&K("scroll",e),o||u===a||(o=[])):(o=o||[]).push(p,a))}n&&(o=o||[]).push("style",n);var p=o;(t.updateQueue=p)&&(t.flags|=4)}},Ya=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!b)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function af(e,t,n){var r=t.pendingProps;switch(ko(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return De(t.type)&&Hr(),Ne(t),null;case 3:return r=t.stateNode,Pn(),G(Ue),G(Ee),Mo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Gr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rt!==null&&(cl(rt),rt=null))),tl(e,t),Ne(t),null;case 5:Fo(t);var i=bt(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ga(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(m(166));return Ne(t),null}if(e=bt(pt.current),Gr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ct]=t,r[tr]=o,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<Jn.length;i++)K(Jn[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Tl(r,o),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},K("invalid",r);break;case"textarea":zl(r,o),K("invalid",r)}Fi(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Wr(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Wr(r.textContent,u,e),i=["children",""+u]):D.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&K("scroll",r)}switch(n){case"input":gr(r),Dl(r,o,!0);break;case"textarea":gr(r),Rl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=jr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ml(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ct]=t,e[tr]=r,Ka(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ri(n,r),n){case"dialog":K("cancel",e),K("close",e),i=r;break;case"iframe":case"object":case"embed":K("load",e),i=r;break;case"video":case"audio":for(i=0;i<Jn.length;i++)K(Jn[i],e);i=r;break;case"source":K("error",e),i=r;break;case"img":case"image":case"link":K("error",e),K("load",e),i=r;break;case"details":K("toggle",e),i=r;break;case"input":Tl(e,r),i=_i(e,r),K("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=k({},r,{value:void 0}),K("invalid",e);break;case"textarea":zl(e,r),i=Di(e,r),K("invalid",e);break;default:i=r}Fi(n,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var a=u[o];o==="style"?ql(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Al(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&zn(e,a):typeof a=="number"&&zn(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(D.hasOwnProperty(o)?a!=null&&o==="onScroll"&&K("scroll",e):a!=null&&Je(e,o,a,l))}switch(n){case"input":gr(e),Dl(e,r,!1);break;case"textarea":gr(e),Rl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?un(e,!!r.multiple,o,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)Ya(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(m(166));if(n=bt(lr.current),bt(pt.current),Gr(t)){if(r=t.stateNode,n=t.memoizedProps,r[ct]=t,(o=r.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:Wr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ct]=t,t.stateNode=r}return Ne(t),null;case 13:if(G(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(b&&We!==null&&(t.mode&1)!==0&&(t.flags&128)===0)bu(),Nn(),t.flags|=98560,o=!1;else if(o=Gr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(m(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(m(317));o[ct]=t}else Nn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),o=!1}else rt!==null&&(cl(rt),rt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(te.current&1)!==0?se===0&&(se=3):hl())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return Pn(),tl(e,t),e===null&&bn(t.stateNode.containerInfo),Ne(t),null;case 10:return _o(t.type._context),Ne(t),null;case 17:return De(t.type)&&Hr(),Ne(t),null;case 19:if(G(te),o=t.memoizedState,o===null)return Ne(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)fr(o,!1);else{if(se!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ti(e),l!==null){for(t.flags|=128,fr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(te,te.current&1|2),t.child}e=e.sibling}o.tail!==null&&oe()>Tn&&(t.flags|=128,r=!0,fr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ti(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!b)return Ne(t),null}else 2*oe()-o.renderingStartTime>Tn&&n!==1073741824&&(t.flags|=128,r=!0,fr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=oe(),t.sibling=null,n=te.current,$(te,r?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return ml(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(je&1073741824)!==0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(m(156,t.tag))}function sf(e,t){switch(ko(t),t.tag){case 1:return De(t.type)&&Hr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pn(),G(Ue),G(Ee),Mo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Fo(t),null;case 13:if(G(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(te),null;case 4:return Pn(),null;case 10:return _o(t.type._context),null;case 22:case 23:return ml(),null;case 24:return null;default:return null}}var di=!1,ke=!1,df=typeof WeakSet=="function"?WeakSet:Set,N=null;function In(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function nl(e,t,n){try{n()}catch(r){ie(e,t,r)}}var Xa=!1;function ff(e,t){if(mo=Tr,e=_u(),oo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,u=-1,a=-1,p=0,v=0,g=e,h=null;t:for(;;){for(var x;g!==n||i!==0&&g.nodeType!==3||(u=l+i),g!==o||r!==0&&g.nodeType!==3||(a=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(x=g.firstChild)!==null;)h=g,g=x;for(;;){if(g===e)break t;if(h===n&&++p===i&&(u=l),h===o&&++v===r&&(a=l),(x=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=x}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ho={focusedElem:e,selectionRange:n},Tr=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var L=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(L!==null){var S=L.memoizedProps,le=L.memoizedState,f=t.stateNode,s=f.getSnapshotBeforeUpdate(t.elementType===t.type?S:it(t.type,S),le);f.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var c=t.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163))}}catch(w){ie(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return L=Xa,Xa=!1,L}function cr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&nl(t,n,o)}i=i.next}while(i!==r)}}function fi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function rl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ja(e){var t=e.alternate;t!==null&&(e.alternate=null,Ja(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ct],delete t[tr],delete t[wo],delete t[$d],delete t[Zd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ba(e){return e.tag===5||e.tag===3||e.tag===4}function es(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ba(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jr));else if(r!==4&&(e=e.child,e!==null))for(il(e,t,n),e=e.sibling;e!==null;)il(e,t,n),e=e.sibling}function ol(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ol(e,t,n),e=e.sibling;e!==null;)ol(e,t,n),e=e.sibling}var he=null,ot=!1;function qt(e,t,n){for(n=n.child;n!==null;)ts(e,t,n),n=n.sibling}function ts(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Lr,n)}catch{}switch(n.tag){case 5:ke||In(n,t);case 6:var r=he,i=ot;he=null,qt(e,t,n),he=r,ot=i,he!==null&&(ot?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(ot?(e=he,n=n.stateNode,e.nodeType===8?go(e.parentNode,n):e.nodeType===1&&go(e,n),Hn(e)):go(he,n.stateNode));break;case 4:r=he,i=ot,he=n.stateNode.containerInfo,ot=!0,qt(e,t,n),he=r,ot=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&nl(n,t,l),i=i.next}while(i!==r)}qt(e,t,n);break;case 1:if(!ke&&(In(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ie(n,t,u)}qt(e,t,n);break;case 21:qt(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,qt(e,t,n),ke=r):qt(e,t,n);break;default:qt(e,t,n)}}function ns(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new df),t.forEach(function(r){var i=Ef.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:he=u.stateNode,ot=!1;break e;case 3:he=u.stateNode.containerInfo,ot=!0;break e;case 4:he=u.stateNode.containerInfo,ot=!0;break e}u=u.return}if(he===null)throw Error(m(160));ts(o,l,i),he=null,ot=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(p){ie(i,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rs(t,e),t=t.sibling}function rs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),ht(e),r&4){try{cr(3,e,e.return),fi(3,e)}catch(S){ie(e,e.return,S)}try{cr(5,e,e.return)}catch(S){ie(e,e.return,S)}}break;case 1:lt(t,e),ht(e),r&512&&n!==null&&In(n,n.return);break;case 5:if(lt(t,e),ht(e),r&512&&n!==null&&In(n,n.return),e.flags&32){var i=e.stateNode;try{zn(i,"")}catch(S){ie(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Ul(i,o),Ri(u,l);var p=Ri(u,o);for(l=0;l<a.length;l+=2){var v=a[l],g=a[l+1];v==="style"?ql(i,g):v==="dangerouslySetInnerHTML"?Al(i,g):v==="children"?zn(i,g):Je(i,v,g,p)}switch(u){case"input":Ti(i,o);break;case"textarea":Fl(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?un(i,!!o.multiple,x,!1):h!==!!o.multiple&&(o.defaultValue!=null?un(i,!!o.multiple,o.defaultValue,!0):un(i,!!o.multiple,o.multiple?[]:"",!1))}i[tr]=o}catch(S){ie(e,e.return,S)}}break;case 6:if(lt(t,e),ht(e),r&4){if(e.stateNode===null)throw Error(m(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(S){ie(e,e.return,S)}}break;case 3:if(lt(t,e),ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hn(t.containerInfo)}catch(S){ie(e,e.return,S)}break;case 4:lt(t,e),ht(e);break;case 13:lt(t,e),ht(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(al=oe())),r&4&&ns(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(p=ke)||v,lt(t,e),ke=p):lt(t,e),ht(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!v&&(e.mode&1)!==0)for(N=e,v=e.child;v!==null;){for(g=N=v;N!==null;){switch(h=N,x=h.child,h.tag){case 0:case 11:case 14:case 15:cr(4,h,h.return);break;case 1:In(h,h.return);var L=h.stateNode;if(typeof L.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,L.props=t.memoizedProps,L.state=t.memoizedState,L.componentWillUnmount()}catch(S){ie(r,n,S)}}break;case 5:In(h,h.return);break;case 22:if(h.memoizedState!==null){ls(g);continue}}x!==null?(x.return=h,N=x):ls(g)}v=v.sibling}e:for(v=null,g=e;;){if(g.tag===5){if(v===null){v=g;try{i=g.stateNode,p?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=g.stateNode,a=g.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=Ol("display",l))}catch(S){ie(e,e.return,S)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=p?"":g.memoizedProps}catch(S){ie(e,e.return,S)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:lt(t,e),ht(e),r&4&&ns(e);break;case 21:break;default:lt(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ba(n)){var r=n;break e}n=n.return}throw Error(m(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zn(i,""),r.flags&=-33);var o=es(e);ol(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=es(e);il(e,u,l);break;default:throw Error(m(161))}}catch(a){ie(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cf(e,t,n){N=e,is(e)}function is(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||di;if(!l){var u=i.alternate,a=u!==null&&u.memoizedState!==null||ke;u=di;var p=ke;if(di=l,(ke=a)&&!p)for(N=i;N!==null;)l=N,a=l.child,l.tag===22&&l.memoizedState!==null?us(i):a!==null?(a.return=l,N=a):us(i);for(;o!==null;)N=o,is(o),o=o.sibling;N=i,di=u,ke=p}os(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,N=o):os(e)}}function os(e){for(;N!==null;){var t=N;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ke||fi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&la(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}la(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var v=p.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&Hn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163))}ke||t.flags&512&&rl(t)}catch(h){ie(t,t.return,h)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function ls(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function us(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fi(4,t)}catch(a){ie(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){ie(t,i,a)}}var o=t.return;try{rl(t)}catch(a){ie(t,o,a)}break;case 5:var l=t.return;try{rl(t)}catch(a){ie(t,l,a)}}}catch(a){ie(t,t.return,a)}if(t===e){N=null;break}var u=t.sibling;if(u!==null){u.return=t.return,N=u;break}N=t.return}}var pf=Math.ceil,ci=we.ReactCurrentDispatcher,ll=we.ReactCurrentOwner,Ye=we.ReactCurrentBatchConfig,M=0,pe=null,ue=null,ye=0,je=0,_n=Ft(0),se=0,pr=null,tn=0,pi=0,ul=0,mr=null,Fe=null,al=0,Tn=1/0,St=null,mi=!1,sl=null,Bt=null,hi=!1,Wt=null,yi=0,hr=0,dl=null,vi=-1,gi=0;function Ce(){return(M&6)!==0?oe():vi!==-1?vi:vi=oe()}function jt(e){return(e.mode&1)===0?1:(M&2)!==0&&ye!==0?ye&-ye:Gd.transition!==null?(gi===0&&(gi=eu()),gi):(e=j,e!==0||(e=window.event,e=e===void 0?16:su(e.type)),e)}function ut(e,t,n,r){if(50<hr)throw hr=0,dl=null,Error(m(185));qn(e,n,r),((M&2)===0||e!==pe)&&(e===pe&&((M&2)===0&&(pi|=n),se===4&&Qt(e,ye)),Re(e,r),n===1&&M===0&&(t.mode&1)===0&&(Tn=oe()+500,$r&&Mt()))}function Re(e,t){var n=e.callbackNode;Gs(e,t);var r=Cr(e,e===pe?ye:0);if(r===0)n!==null&&Xl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xl(n),t===1)e.tag===0?Kd(ss.bind(null,e)):Ku(ss.bind(null,e)),Hd(function(){(M&6)===0&&Mt()}),n=null;else{switch(tu(r)){case 1:n=ji;break;case 4:n=Jl;break;case 16:n=kr;break;case 536870912:n=bl;break;default:n=kr}n=vs(n,as.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function as(e,t){if(vi=-1,gi=0,(M&6)!==0)throw Error(m(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=Cr(e,e===pe?ye:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=wi(e,r);else{t=r;var i=M;M|=2;var o=fs();(pe!==e||ye!==t)&&(St=null,Tn=oe()+500,rn(e,t));do try{yf();break}catch(u){ds(e,u)}while(!0);Io(),ci.current=o,M=i,ue!==null?t=0:(pe=null,ye=0,t=se)}if(t!==0){if(t===2&&(i=Qi(e),i!==0&&(r=i,t=fl(e,i))),t===1)throw n=pr,rn(e,0),Qt(e,r),Re(e,oe()),n;if(t===6)Qt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!mf(i)&&(t=wi(e,r),t===2&&(o=Qi(e),o!==0&&(r=o,t=fl(e,o))),t===1))throw n=pr,rn(e,0),Qt(e,r),Re(e,oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(m(345));case 2:on(e,Fe,St);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=al+500-oe(),10<t)){if(Cr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vo(on.bind(null,e,Fe,St),t);break}on(e,Fe,St);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-tt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pf(r/1960))-r,10<r){e.timeoutHandle=vo(on.bind(null,e,Fe,St),r);break}on(e,Fe,St);break;case 5:on(e,Fe,St);break;default:throw Error(m(329))}}}return Re(e,oe()),e.callbackNode===n?as.bind(null,e):null}function fl(e,t){var n=mr;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=wi(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&cl(t)),e}function cl(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function mf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!nt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~ul,t&=~pi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function ss(e){if((M&6)!==0)throw Error(m(327));Un();var t=Cr(e,0);if((t&1)===0)return Re(e,oe()),null;var n=wi(e,t);if(e.tag!==0&&n===2){var r=Qi(e);r!==0&&(t=r,n=fl(e,r))}if(n===1)throw n=pr,rn(e,0),Qt(e,t),Re(e,oe()),n;if(n===6)throw Error(m(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,Fe,St),Re(e,oe()),null}function pl(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Tn=oe()+500,$r&&Mt())}}function nn(e){Wt!==null&&Wt.tag===0&&(M&6)===0&&Un();var t=M;M|=1;var n=Ye.transition,r=j;try{if(Ye.transition=null,j=1,e)return e()}finally{j=r,Ye.transition=n,M=t,(M&6)===0&&Mt()}}function ml(){je=_n.current,G(_n)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qd(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(ko(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:Pn(),G(Ue),G(Ee),Mo();break;case 5:Fo(r);break;case 4:Pn();break;case 13:G(te);break;case 19:G(te);break;case 10:_o(r.type._context);break;case 22:case 23:ml()}n=n.return}if(pe=e,ue=e=Ht(e.current,null),ye=je=t,se=0,pr=null,ul=pi=tn=0,Fe=mr=null,Jt!==null){for(t=0;t<Jt.length;t++)if(n=Jt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Jt=null}return e}function ds(e,t){do{var n=ue;try{if(Io(),ni.current=li,ri){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ri=!1}if(en=0,ce=ae=ne=null,ur=!1,ar=0,ll.current=null,n===null||n.return===null){se=1,pr=t,ue=null;break}e:{var o=e,l=n.return,u=n,a=t;if(t=ye,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var p=a,v=u,g=v.tag;if((v.mode&1)===0&&(g===0||g===11||g===15)){var h=v.alternate;h?(v.updateQueue=h.updateQueue,v.memoizedState=h.memoizedState,v.lanes=h.lanes):(v.updateQueue=null,v.memoizedState=null)}var x=Ra(l);if(x!==null){x.flags&=-257,Ma(x,l,u,o,t),x.mode&1&&Fa(o,p,t),t=x,a=p;var L=t.updateQueue;if(L===null){var S=new Set;S.add(a),t.updateQueue=S}else L.add(a);break e}else{if((t&1)===0){Fa(o,p,t),hl();break e}a=Error(m(426))}}else if(b&&u.mode&1){var le=Ra(l);if(le!==null){(le.flags&65536)===0&&(le.flags|=256),Ma(le,l,u,o,t),Po(Cn(a,u));break e}}o=a=Cn(a,u),se!==4&&(se=2),mr===null?mr=[o]:mr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Da(o,a,t);oa(o,f);break e;case 1:u=a;var s=o.type,c=o.stateNode;if((o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Bt===null||!Bt.has(c)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=za(o,u,t);oa(o,w);break e}}o=o.return}while(o!==null)}ps(n)}catch(P){t=P,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function fs(){var e=ci.current;return ci.current=li,e===null?li:e}function hl(){(se===0||se===3||se===2)&&(se=4),pe===null||(tn&268435455)===0&&(pi&268435455)===0||Qt(pe,ye)}function wi(e,t){var n=M;M|=2;var r=fs();(pe!==e||ye!==t)&&(St=null,rn(e,t));do try{hf();break}catch(i){ds(e,i)}while(!0);if(Io(),M=n,ci.current=r,ue!==null)throw Error(m(261));return pe=null,ye=0,se}function hf(){for(;ue!==null;)cs(ue)}function yf(){for(;ue!==null&&!Bs();)cs(ue)}function cs(e){var t=ys(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?ps(e):ue=t,ll.current=null}function ps(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=af(n,t,je),n!==null){ue=n;return}}else{if(n=sf(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ue=null;return}}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);se===0&&(se=5)}function on(e,t,n){var r=j,i=Ye.transition;try{Ye.transition=null,j=1,vf(e,t,n,r)}finally{Ye.transition=i,j=r}return null}function vf(e,t,n,r){do Un();while(Wt!==null);if((M&6)!==0)throw Error(m(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(m(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ys(e,o),e===pe&&(ue=pe=null,ye=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||hi||(hi=!0,vs(kr,function(){return Un(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=Ye.transition,Ye.transition=null;var l=j;j=1;var u=M;M|=4,ll.current=null,ff(e,n),rs(n,e),Md(ho),Tr=!!mo,ho=mo=null,e.current=n,cf(n),Ws(),M=u,j=l,Ye.transition=o}else e.current=n;if(hi&&(hi=!1,Wt=e,yi=i),o=e.pendingLanes,o===0&&(Bt=null),Hs(n.stateNode),Re(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(mi)throw mi=!1,e=sl,sl=null,e;return(yi&1)!==0&&e.tag!==0&&Un(),o=e.pendingLanes,(o&1)!==0?e===dl?hr++:(hr=0,dl=e):hr=0,Mt(),null}function Un(){if(Wt!==null){var e=tu(yi),t=Ye.transition,n=j;try{if(Ye.transition=null,j=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,yi=0,(M&6)!==0)throw Error(m(331));var i=M;for(M|=4,N=e.current;N!==null;){var o=N,l=o.child;if((N.flags&16)!==0){var u=o.deletions;if(u!==null){for(var a=0;a<u.length;a++){var p=u[a];for(N=p;N!==null;){var v=N;switch(v.tag){case 0:case 11:case 15:cr(8,v,o)}var g=v.child;if(g!==null)g.return=v,N=g;else for(;N!==null;){v=N;var h=v.sibling,x=v.return;if(Ja(v),v===p){N=null;break}if(h!==null){h.return=x,N=h;break}N=x}}}var L=o.alternate;if(L!==null){var S=L.child;if(S!==null){L.child=null;do{var le=S.sibling;S.sibling=null,S=le}while(S!==null)}}N=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,N=l;else e:for(;N!==null;){if(o=N,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:cr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,N=f;break e}N=o.return}}var s=e.current;for(N=s;N!==null;){l=N;var c=l.child;if((l.subtreeFlags&2064)!==0&&c!==null)c.return=l,N=c;else e:for(l=s;N!==null;){if(u=N,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:fi(9,u)}}catch(P){ie(u,u.return,P)}if(u===l){N=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,N=w;break e}N=u.return}}if(M=i,Mt(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Lr,e)}catch{}r=!0}return r}finally{j=n,Ye.transition=t}}return!1}function ms(e,t,n){t=Cn(n,t),t=Da(e,t,1),e=Ot(e,t,1),t=Ce(),e!==null&&(qn(e,1,t),Re(e,t))}function ie(e,t,n){if(e.tag===3)ms(e,e,n);else for(;t!==null;){if(t.tag===3){ms(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bt===null||!Bt.has(r))){e=Cn(n,e),e=za(t,e,1),t=Ot(t,e,1),e=Ce(),t!==null&&(qn(t,1,e),Re(t,e));break}}t=t.return}}function gf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(ye&n)===n&&(se===4||se===3&&(ye&130023424)===ye&&500>oe()-al?rn(e,0):ul|=n),Re(e,t)}function hs(e,t){t===0&&((e.mode&1)===0?t=1:(t=Pr,Pr<<=1,(Pr&130023424)===0&&(Pr=4194304)));var n=Ce();e=Nt(e,t),e!==null&&(qn(e,t,n),Re(e,n))}function wf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hs(e,n)}function Ef(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(m(314))}r!==null&&r.delete(t),hs(e,n)}var ys;ys=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)ze=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ze=!1,uf(e,t,n);ze=(e.flags&131072)!==0}else ze=!1,b&&(t.flags&1048576)!==0&&Gu(t,Kr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;si(e,t),e=t.pendingProps;var i=wn(t,Ee.current);Sn(t,n),i=qo(null,t,r,e,i,n);var o=Bo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(r)?(o=!0,Vr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Do(t),i.updater=ui,t.stateNode=i,i._reactInternals=t,$o(t,r,e,n),t=Yo(null,t,r,!0,o,n)):(t.tag=0,b&&o&&No(t),Pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(si(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Nf(r),e=it(r,e),i){case 0:t=Go(null,t,r,e,n);break e;case 1:t=ja(null,t,r,e,n);break e;case 11:t=Aa(null,t,r,e,n);break e;case 14:t=Oa(null,t,r,it(r.type,e),n);break e}throw Error(m(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Go(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),ja(e,t,r,i,n);case 3:e:{if(Qa(t),e===null)throw Error(m(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ia(e,t),ei(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Cn(Error(m(423)),t),t=Ha(e,t,r,n,i);break e}else if(r!==i){i=Cn(Error(m(424)),t),t=Ha(e,t,r,n,i);break e}else for(We=zt(t.stateNode.containerInfo.firstChild),Be=t,b=!0,rt=null,n=na(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nn(),r===i){t=Lt(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return ua(t),e===null&&So(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,yo(r,i)?l=null:o!==null&&yo(r,o)&&(t.flags|=32),Wa(e,t),Pe(e,t,l,n),t.child;case 6:return e===null&&So(t),null;case 13:return Va(e,t,n);case 4:return zo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kn(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Aa(e,t,r,i,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,$(Xr,r._currentValue),r._currentValue=l,o!==null)if(nt(o.value,l)){if(o.children===i.children&&!Ue.current){t=Lt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=kt(-1,n&-n),a.tag=2;var p=o.updateQueue;if(p!==null){p=p.shared;var v=p.pending;v===null?a.next=a:(a.next=v.next,v.next=a),p.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),To(o.return,n,t),u.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(m(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),To(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Sn(t,n),i=Ke(i),r=r(i),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,i=it(r,t.pendingProps),i=it(r.type,i),Oa(e,t,r,i,n);case 15:return qa(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),si(e,t),t.tag=1,De(r)?(e=!0,Vr(t)):e=!1,Sn(t,n),Ta(t,r,i),$o(t,r,i,n),Yo(null,t,r,!0,e,n);case 19:return Za(e,t,n);case 22:return Ba(e,t,n)}throw Error(m(156,t.tag))};function vs(e,t){return Yl(e,t)}function xf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(e,t,n,r){return new xf(e,t,n,r)}function yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nf(e){if(typeof e=="function")return yl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===st)return 11;if(e===dt)return 14}return 2}function Ht(e,t){var n=e.alternate;return n===null?(n=Xe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ei(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")yl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case _e:return ln(n.children,i,o,t);case Ve:l=8,i|=8;break;case Pt:return e=Xe(12,n,t,i|2),e.elementType=Pt,e.lanes=o,e;case Ae:return e=Xe(13,n,t,i),e.elementType=Ae,e.lanes=o,e;case et:return e=Xe(19,n,t,i),e.elementType=et,e.lanes=o,e;case re:return xi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vt:l=10;break e;case $t:l=9;break e;case st:l=11;break e;case dt:l=14;break e;case Te:l=16,r=null;break e}throw Error(m(130,e==null?e:typeof e,""))}return t=Xe(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ln(e,t,n,r){return e=Xe(7,e,r,t),e.lanes=n,e}function xi(e,t,n,r){return e=Xe(22,e,r,t),e.elementType=re,e.lanes=n,e.stateNode={isHidden:!1},e}function vl(e,t,n){return e=Xe(6,e,null,t),e.lanes=n,e}function gl(e,t,n){return t=Xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hi(0),this.expirationTimes=Hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wl(e,t,n,r,i,o,l,u,a){return e=new kf(e,t,n,u,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Xe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Do(o),e}function Lf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gs(e){if(!e)return Rt;e=e._reactInternals;e:{if(Zt(e)!==e||e.tag!==1)throw Error(m(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(m(171))}if(e.tag===1){var n=e.type;if(De(n))return $u(e,n,t)}return t}function ws(e,t,n,r,i,o,l,u,a){return e=wl(n,r,!0,e,i,o,l,u,a),e.context=gs(null),n=e.current,r=Ce(),i=jt(n),o=kt(r,i),o.callback=t??null,Ot(n,o,i),e.current.lanes=i,qn(e,i,r),Re(e,r),e}function Ni(e,t,n,r){var i=t.current,o=Ce(),l=jt(i);return n=gs(n),t.context===null?t.context=n:t.pendingContext=n,t=kt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ot(i,t,l),e!==null&&(ut(e,i,l,o),br(e,i,l)),l}function ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Es(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function El(e,t){Es(e,t),(e=e.alternate)&&Es(e,t)}function Sf(){return null}var xs=typeof reportError=="function"?reportError:function(e){console.error(e)};function xl(e){this._internalRoot=e}Li.prototype.render=xl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));Ni(e,t,null,null)},Li.prototype.unmount=xl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){Ni(null,e,null,null)}),t[gt]=null}};function Li(e){this._internalRoot=e}Li.prototype.unstable_scheduleHydration=function(e){if(e){var t=iu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tt.length&&t!==0&&t<Tt[n].priority;n++);Tt.splice(n,0,e),n===0&&uu(e)}};function Nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Si(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ns(){}function Pf(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var p=ki(l);o.call(p)}}var l=ws(t,r,e,0,null,!1,!1,"",Ns);return e._reactRootContainer=l,e[gt]=l.current,bn(e.nodeType===8?e.parentNode:e),nn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var p=ki(a);u.call(p)}}var a=wl(e,0,!1,null,null,!1,!1,"",Ns);return e._reactRootContainer=a,e[gt]=a.current,bn(e.nodeType===8?e.parentNode:e),nn(function(){Ni(t,a,n,r)}),a}function Pi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var a=ki(l);u.call(a)}}Ni(t,l,e,i)}else l=Pf(n,t,e,i,r);return ki(l)}nu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=On(t.pendingLanes);n!==0&&(Vi(t,n|1),Re(t,oe()),(M&6)===0&&(Tn=oe()+500,Mt()))}break;case 13:nn(function(){var r=Nt(e,1);if(r!==null){var i=Ce();ut(r,e,1,i)}}),El(e,1)}},$i=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Ce();ut(t,e,134217728,n)}El(e,134217728)}},ru=function(e){if(e.tag===13){var t=jt(e),n=Nt(e,t);if(n!==null){var r=Ce();ut(n,e,t,r)}El(e,t)}},iu=function(){return j},ou=function(e,t){var n=j;try{return j=e,t()}finally{j=n}},Oi=function(e,t,n){switch(t){case"input":if(Ti(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Qr(r);if(!i)throw Error(m(90));_l(r),Ti(r,i)}}}break;case"textarea":Fl(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}},Ql=pl,Hl=nn;var Cf={usingClientEntryPoint:!1,Events:[nr,vn,Qr,Wl,jl,pl]},yr={findFiberByHostInstance:Kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},If={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kl(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||Sf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ci.isDisabled&&Ci.supportsFiber)try{Lr=Ci.inject(If),ft=Ci}catch{}}return Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cf,Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nl(t))throw Error(m(200));return Lf(e,t,null,n)},Me.createRoot=function(e,t){if(!Nl(e))throw Error(m(299));var n=!1,r="",i=xs;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=wl(e,1,!1,null,null,n,!1,r,i),e[gt]=t.current,bn(e.nodeType===8?e.parentNode:e),new xl(t)},Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=Kl(t),e=e===null?null:e.stateNode,e},Me.flushSync=function(e){return nn(e)},Me.hydrate=function(e,t,n){if(!Si(t))throw Error(m(200));return Pi(null,e,t,!0,n)},Me.hydrateRoot=function(e,t,n){if(!Nl(e))throw Error(m(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=xs;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ws(t,null,e,1,n??null,i,!1,o,l),e[gt]=t.current,bn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Li(t)},Me.render=function(e,t,n){if(!Si(t))throw Error(m(200));return Pi(null,e,t,!1,n)},Me.unmountComponentAtNode=function(e){if(!Si(e))throw Error(m(40));return e._reactRootContainer?(nn(function(){Pi(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1},Me.unstable_batchedUpdates=pl,Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Si(n))throw Error(m(200));if(e==null||e._reactInternals===void 0)throw Error(m(38));return Pi(e,t,n,!1,r)},Me.version="18.3.1-next-f1338f8080-20240426",Me}var Ts;function Mf(){if(Ts)return Sl.exports;Ts=1;function U(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(U)}catch(B){console.error(B)}}return U(),Sl.exports=Rf(),Sl.exports}var Us;function Af(){if(Us)return Ii;Us=1;var U=Mf();return Ii.createRoot=U.createRoot,Ii.hydrateRoot=U.hydrateRoot,Ii}var Of=Af();function qf(){const[U,B]=Ds.useState(null),m=[{id:1,question:"1. What is a Stack?",answer:`A stack is a linear data structure that follows the LIFO (Last In, First Out) principle. Elements can be added or removed only from the top of the stack. 
	Last element inserted → first to be removed. 
	Think of a stack of books or plates.`,codeExample:`

📌 Real-life Applications of Stack

1. Undo/Redo in Text Editors

  When you type something, it is pushed into a stack.
  When you press Undo, the last operation is popped.

2. Browser Back Button

  Each visited webpage is pushed into a stack.
  When you click Back, the last page (on top of the stack) is popped and shown.

--------------------------------------------------------------------------------------

Basic Operations in Stack

  PUSH(x): Insert an element x into the stack (at the top).
  POP(): Remove the top element from the stack.
  PEEK()/TOP(): View the top element without removing it.
  isEmpty(): Check if the stack is empty.
  isFull(): Check if the stack is full (when using arrays).



Example Walkthrough
Suppose we start with an empty stack (using array):

Stack: []

PUSH(10) → [10]
PUSH(20) → [10, 20]
PUSH(30) → [10, 20, 30]
POP() → removes 30 → [10, 20]
PEEK() → shows 20

-------------------------------------------------------------------------------------

1. PUSH Operation

Algorithm PUSH(stack, x):
1. if top == N-1:
       print "Stack Overflow"
       return
2. top = top + 1
3. stack[top] = x

-------------------------------------------------------------------------------------

2. POP Operation

Algorithm POP(stack):
1. if top == -1:
       print "Stack Underflow"
       return
2. item = stack[top]
3. top = top - 1
4. return item

-------------------------------------------------------------------------------------

3. PEEK Operation

Algorithm PEEK(stack):
1. if top == -1:
       print "Stack is Empty"
       return
2. return stack[top]

-------------------------------------------------------------------------------------

C Example Code (Using Array)

#include <stdio.h>
#define SIZE 5

int stack[SIZE], top = -1;

// Function to push element
void push(int x) {
    if (top == SIZE - 1) {
        printf("Stack Overflow\\n");
    } else {                                                    top++;
        stack[++top] = x;   this is same like this ->           stack[top] = item;  
        printf("%d pushed to stack\\n", x);
    }
}

// Function to pop element
void pop() {
    if (top == -1) {
        printf("Stack Underflow\\n");
    } else {
        printf("%d popped from stack\\n", stack[top--]);
    }
}

// Function to see top element
void peek() {
    if (top == -1) {
        printf("Stack is Empty\\n");
    } else {
        printf("Top element is %d\\n", stack[top]);
    }
}

int main() {
    push(10);
    push(20);
    push(30);
    peek();       // Shows 30
    pop();        // Removes 30
    peek();       // Shows 20
    return 0;
}

-------------------------------------------------------------------------------------

hello this stack[SIZE] is like a array how to know it is stack.....?
stack[SIZE] is just an array.

do you mean actually this is array, humen or developer used like stack to know stack ?

Yes ✅ you got it exactly right!

In C (or most languages), when you write
  int stack[SIZE];

  this is actually an array.

-> There is no special keyword stack in C.
  The compiler only knows: “This is an integer array of fixed size.”

-> But when a developer (human) decides to use that array only with stack rules (push, pop, peek, LIFO) → then we call it a stack.


So the truth:

Machine/Compiler view → It’s always just an array (a block of memory).
Human/Developer view → If we use it with stack rules → we conceptually say it’s a stack data structure.
`},{id:2,question:"2. Infix to Postfix using Stack.",answer:`Infix Expression → Operator between operands. 
	Example: A + B , (A + B) * C 

Postfix Expression (Reverse Polish Notation, RPN) → Operator comes after operands. 
	Example: A B + , A B + C *`,codeExample:`
🔹 Example

Convert this infix:
      (A + B) * C

To postfix:
      A B + C *

-------------------------------------------------------------------------------------

🔹 Rules for Conversion (Using Stack)

We use a stack to hold operators.
Operands (A, B, C…) are directly added to output.

1. If symbol is Operand (A, B, C, 1, 2, …):
  → Add it to the output (postfix expression).

2. If symbol is ‘(’ :
  → Push it onto stack.

3. If symbol is ‘)’ :
  → Pop operators from stack until ‘(’ is found.

4. *If symbol is Operator (+, -, , /, ^):
  While the stack is not empty and the top of stack has an operator with higher or equal precedence, pop it to output.
  Then push the new operator onto the stack.

5. At the end:  
  Pop all remaining operators from the stack to output.

-------------------------------------------------------------------------------------

🔹 Operator Precedence

Highest: ^ (exponent)
Then: * /
Lowest: + -

-------------------------------------------------------------------------------------

🔹 Step-by-Step Example

(A + B) * C - D

📌 Steps:

Read ( → push → stack = (
Read A → output = A
Read + → push → stack = ( +
Read B → output = A B
Read ) → pop until ( → output = A B +
Read * → push → stack = *
Read C → output = A B + C
Read - → pop * (higher precedence) → output = A B + C * , then push -
Read D → output = A B + C * D
End → pop remaining - → output = A B + C * D - ✅

👉 Final Postfix =
      A B + C * D -

-------------------------------------------------------------------------------------

🔹 C Example Code


#include <stdio.h>
#include <ctype.h>   // for isalnum
#include <string.h>

#define SIZE 100
char stack[SIZE];
int top = -1;

void push(char c) {
    stack[++top] = c;
}

char pop() {
    return stack[top--];
}

int precedence(char c) {
    if (c == '^') return 3;
    if (c == '*' || c == '/') return 2;
    if (c == '+' || c == '-') return 1;
    return -1;
}

void infixToPostfix(char* exp) {
    char result[SIZE];
    int k = 0;
    for (int i = 0; exp[i]; i++) {
        char c = exp[i];

        // If operand, add to result
        if (isalnum(c)) {
            result[k++] = c;
        }
        // If '(', push to stack
        else if (c == '(') {
            push(c);
        }
        // If ')', pop until '('
        else if (c == ')') {
            while (top != -1 && stack[top] != '(')
                result[k++] = pop();
            pop(); // remove '('
        }
        // If operator
        else {
            while (top != -1 && precedence(stack[top]) >= precedence(c))
                result[k++] = pop();
            push(c);
        }
    }

    // Pop remaining operators
    while (top != -1)
        result[k++] = pop();

    result[k] = '\0';
    printf("Postfix: %s\\n", result);
}

int main() {
    char exp[] = "(A+B)*C-D";
    infixToPostfix(exp);
    return 0;
}


👉 Output:
  Postfix: AB+C*D-


🔑 Key Rule:

  When you push + after -, the algorithm first pops - because precedence(-) >= precedence(+).
  So, yes — the previous - will be popped before pushing +.
  if you have high priority operator in stack it will be pop first before pushing low priority operator.
  if you have low priority operator in stack it will be push first before pushing high priority operator.
  
-------------------------------------------------------------------------------------

What is isalnum()?
  isalnum() is a C library function (in <ctype.h>).
  It checks if a character is alphanumeric (either a letter or a digit).

👉 Alphanumeric = A–Z, a–z, 0–9

🔹 Syntax

  int isalnum(int ch);


ch → the character to check.

Returns:
  Non-zero (true) if character is letter or digit.
  0 (false) if not.

🔹 Example

#include <stdio.h>
#include <ctype.h>

int main() {
    char c1 = 'A';
    char c2 = '7';
    char c3 = '+';

    printf("%c -> %d\\n", c1, isalnum(c1));  // 'A' is alphanumeric → nonzero
    printf("%c -> %d\\n", c2, isalnum(c2));  // '7' is alphanumeric → nonzero
    printf("%c -> %d\\n", c3, isalnum(c3));  // '+' is NOT alphanumeric → 0

    return 0;
}

👉 Output:

A -> 1
7 -> 1
+ -> 0

-------------------------------------------------------------------------------------

++top → Pre-increment
  First increase top
  Then use the new value.

top++ → Post-increment
  First use the current value of top
  Then increase it.



🔹 Example

int top = -1;

  // Case 1: ++top
  printf("%d
", ++top);   // increases top to 0, then prints 0

  // Case 2: top++
  printf("%d
", top++);   // prints 0 first, then increases top to 1

👉 Output:
0
0

But after execution, top becomes 1.

✅ Final Summary:

++top → increase first, then use (good for stack push).
top++ → use first, then increase.


`},{id:3,question:"3. What is a Queue?",answer:`A queue is a linear data structure that follows the FIFO (First In, First Out) principle. Elements are added at the rear (end) and removed from the front (beginning). 
	First element inserted → first to be removed. 
	Think of a line of people waiting. 
	The first person in line is the first to get the ticket and leave.`,codeExample:`
🔹 Basic Operations in Queue

Enqueue(x): Insert element x at the rear (end) of the queue.
Dequeue(): Remove element from the front of the queue.
Front(): Get the first element without removing it.
Rear(): Get the last element.
isEmpty(): Check if queue has no elements.
isFull(): Check if queue is full (for array implementation).


🔹 Queue Structure

Imagine a queue of size 5:

Index:  0   1   2   3   4
Queue: [ ] [ ] [ ] [ ] [ ]
front = -1, rear = -1   (empty)


Example Operations:

Enqueue(10) → [10] (front=0, rear=0)
Enqueue(20) → [10, 20] (front=0, rear=1)
Enqueue(30) → [10, 20, 30] (front=0, rear=2)
Dequeue() → removes 10 → [20, 30] (front=1, rear=2)

-------------------------------------------------------------------------------------

🔹 Queue Algorithms

Algorithm ENQUEUE(queue, x):

1. if rear == SIZE-1:
       print "Queue Overflow"
       return
2. if front == -1:
       front = 0
3. rear = rear + 1
4. queue[rear] = x


2. Dequeue

Algorithm DEQUEUE(queue):
1. if front == -1 or front > rear:
       print "Queue Underflow"
       return
2. item = queue[front]
3. front = front + 1
4. return item


-------------------------------------------------------------------------------------

🔹 C Example (Array Implementation)

#include <stdio.h>
#define SIZE 5

int queue[SIZE];
int front = -1, rear = -1;

void enqueue(int x) {
    if (rear == SIZE - 1) {
        printf("Queue Overflow\\n");
    } else {
        if (front == -1) front = 0; // first element
        queue[++rear] = x;
        printf("%d enqueued to queue\\n", x);
    }
}

{this queue is used only one time, after that it is full or empty.}

void dequeue() {
    if (front == -1 || front > rear) {
        printf("Queue Underflow\\n");
    } else {
        printf("%d dequeued from queue\\n", queue[front++]);
    }
}


{used this code for used queue again and again}

void dequeue() {
    if (front == -1 || front > rear) {
        printf("Queue Underflow\\n");
    } else {
        printf("%d dequeued from queue\\n", queue[front]);
        if (front == rear) {
            // Last element removed → reset queue
            front = rear = -1;
        } else {
            front++;
        }
    }
}


void display() {
    if (front == -1 || front > rear) {
        printf("Queue is Empty\\n");
    } else {
        printf("Queue: ");
        for (int i = front; i <= rear; i++)
            printf("%d ", queue[i]);
        printf("\\n");
    }
}

int main() {
    enqueue(10);
    enqueue(20);
    enqueue(30);
    display();      // Queue: 10 20 30
    dequeue();      // removes 10
    display();      // Queue: 20 30
    return 0;
}



--------------------------------------------------------------------------------------

🔹 Real-Life Applications of Queue

Printer queue (first document sent is printed first).
CPU task scheduling.
Call center system (first caller is served first).
Data buffering (like YouTube video buffering).

✅ In short:

Stack → LIFO (Last In First Out) → like a plate stack.
Queue → FIFO (First In First Out) → like a ticket line.

      `},{id:4,question:"4. Explain types of Queue.",answer:"",codeExample:`
🔹 Types of Queues
1. Simple Queue (Linear Queue) -- It is same as basic queue explained above.
2. Circular Queue
3. Double-Ended Queue (Deque)
4. Priority Queue

-------------------------------------------------------------------------------------

2. Circular Queue

🔹 Problem with Normal Queue

In a linear queue (array implementation), when we do many enqueue and dequeue, we may waste memory.

Example (Queue of size 5):

Enqueue: 10, 20, 30, 40, 50
Queue: [10, 20, 30, 40, 50]  (front=0, rear=4)

Now dequeue() removes 10 →

Queue: [_, 20, 30, 40, 50]  (front=1, rear=4)

👉 If we try to enqueue again, it says Queue Overflow,
even though there is empty space at the beginning (index 0).

---------------------------------------------------------------------------------------

🔹 Solution → Circular Queue

In a circular queue, we connect the last position back to the first position (like a circle).

👉 So after rear = SIZE-1, if there is space in the front (because of dequeues), we can reuse it.


🔹 Circular Queue Example (Size = 5)

Enqueue(10) → [10, _, _, _, _] (front=0, rear=0)
Enqueue(20) → [10, 20, _, _, _] (rear=1)
Enqueue(30) → [10, 20, 30, _, _] (rear=2)
Dequeue() → remove 10 → [_, 20, 30, _, _] (front=1)
Enqueue(40), Enqueue(50) → [_, 20, 30, 40, 50] (rear=4)
Enqueue(60) → instead of overflow, it goes to index 0 → [60, 20, 30, 40, 50] (rear=0).
👉 This is why it’s called circular.

🔹 Conditions in Circular Queue

Queue is Empty:
      front == -1

Queue is Full:
      (front == 0 && rear == SIZE-1) OR (rear + 1 == front)

-------------------------------------------------------------------------------------

🔹 Algorithms
Enqueue

Algorithm CIRCULAR_ENQUEUE(x):
1. if (front == 0 && rear == SIZE-1) OR (rear+1 == front):
       print "Queue Overflow"
2. else if (front == -1):
       front = rear = 0
       queue[rear] = x
3. else if (rear == SIZE-1 && front != 0):
       rear = 0
       queue[rear] = x
4. else:
       rear = rear + 1
       queue[rear] = x

-------------------------------------------------------------------------------------

Dequeue

Algorithm CIRCULAR_DEQUEUE():
1. if (front == -1):
       print "Queue Underflow"
2. item = queue[front]
3. if (front == rear):
       front = rear = -1   // queue becomes empty
4. else if (front == SIZE-1):
       front = 0
5. else:
       front = front + 1
6. return item

-------------------------------------------------------------------------------------

🔹 C Example Code

#include <stdio.h>
#define SIZE 5

int queue[SIZE];
int front = -1, rear = -1;

void enqueue(int x) {
    if ((front == 0 && rear == SIZE - 1) || (rear + 1 == front)) {
        printf("Queue Overflow\\n");
    } else if (front == -1) {
        front = rear = 0;
        queue[rear] = x;
    } else if (rear == SIZE - 1 && front != 0) {
        rear = 0;
        queue[rear] = x;
    } else {
        rear++;
        queue[rear] = x;
    }
    printf("%d enqueued\\n", x);
}

void dequeue() {
    if (front == -1) {
        printf("Queue Underflow\\n");
    } else {
        printf("%d dequeued\\n", queue[front]);
        if (front == rear) {
            front = rear = -1;
        } else if (front == SIZE - 1) {
            front = 0;
        } else {
            front++;
        }
    }
}

void display() {
    if (front == -1) {
        printf("Queue is Empty\\n");
        return;
    }
    printf("Queue: ");
    if (rear >= front) {
        for (int i = front; i <= rear; i++)
            printf("%d ", queue[i]);
    } else {
        for (int i = front; i < SIZE; i++)
            printf("%d ", queue[i]);
        for (int i = 0; i <= rear; i++)
            printf("%d ", queue[i]);
    }
    printf("\\n");
}

int main() {
    enqueue(10);
    enqueue(20);
    enqueue(30);
    enqueue(40);
    enqueue(50);
    display();
    dequeue();
    enqueue(60);
    display();
    return 0;
}


-------------------------------------------------------------------------------

🔹 Real-Life Applications of Circular Queue

  Operating Systems → CPU scheduling (Round Robin).
  Buffer Management → When memory is reused (like streaming, video buffering).
  Traffic lights system → signals in a circular manner.

  
✅ So:

Queue = FIFO but linear, wastes space sometimes.
Circular Queue = FIFO but circular, reuses space efficiently.


-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------



3. Double-Ended Queue ( Deque (Double Ended Queue) )

A Deque (Double Ended Queue) is a type of queue in which insertion and deletion can be done from both ends:

  Front end
  Rear end

--> We can insert and delete from both front and rear.


🔹 Types of Deque

There are two restricted versions of deque:


Input-Restricted Deque

  Insertion (enqueue) → only at rear
  Deletion (dequeue) → from both ends


Output-Restricted Deque

  Deletion (dequeue) → only from front
  Insertion (enqueue) → at both ends


🔹 Example

Let’s take an empty deque of size 5:

[  ] [  ] [  ] [  ] [  ]
front = -1, rear = -1


Operations:

InsertRear(10) → [10]
InsertRear(20) → [10, 20]
InsertFront(5) → [5, 10, 20]
DeleteRear() → removes 20 → [5, 10]
DeleteFront() → removes 5 → [10]


🔹 Basic Operations in Deque

  InsertFront(x) → Insert at the front end.
  InsertRear(x) → Insert at the rear end.
  DeleteFront() → Remove from the front.
  DeleteRear() → Remove from the rear.
  GetFront() → Return front element.
  GetRear() → Return rear element.
  isEmpty() / isFull()



<------------------------------------------------------------------------------------->
simple double ended queue:
<------------------------------------------------------------------------------------->

✅ Simple Deque in C (Array Implementation)

#include <stdio.h>
#define SIZE 5

int deque[SIZE];
int front = -1, rear = -1;

// Insert at rear
void insertRear(int x) {
    if (rear == SIZE - 1) {
        printf("Deque Overflow\\n");
        return;
    }
    if (front == -1) front = 0;  // first element
    deque[++rear] = x;
    printf("%d inserted at rear\\n", x);
}

// Insert at front
void insertFront(int x) {
    if (front == 0) {
        printf("No space at front\\n");
        return;
    }
    if (front == -1) { // first element
        front = rear = 0;
    } else {
        front--;
    }
    deque[front] = x;
    printf("%d inserted at front\\n", x);
}

// Delete from front
void deleteFront() {
    if (front == -1) {
        printf("Deque Underflow\\n");
        return;
    }
    printf("%d deleted from front\\n", deque[front]);
    if (front == rear) {
        front = rear = -1;
    } else {
        front++;
    }
}

// Delete from rear
void deleteRear() {
    if (rear == -1) {
        printf("Deque Underflow\\n");
        return;
    }
    printf("%d deleted from rear\\n", deque[rear]);
    if (front == rear) {
        front = rear = -1;
    } else {
        rear--;
    }
}

// Display
void display() {
    if (front == -1) {
        printf("Deque is empty\\n");
        return;
    }
    printf("Deque: ");
    for (int i = front; i <= rear; i++) {
        printf("%d ", deque[i]);
    }
    printf("\\n");
}

int main() {
    insertRear(10);
    insertRear(20);
    insertFront(5);
    display();        // Deque: 5 10 20
    deleteFront();    // Removes 5
    display();        // Deque: 10 20
    deleteRear();     // Removes 20
    display();        // Deque: 10
    return 0;
}


🔹 Output

10 inserted at rear
20 inserted at rear
5 inserted at front
Deque: 5 10 20
5 deleted from front
Deque: 10 20
20 deleted from rear
Deque: 10


--------------------------------------------------------------------------------------

✅ Algorithms for Deque (Double Ended Queue)

1. Insert at Rear

Algorithm InsertRear(x):
1. If rear == SIZE - 1:
       Print "Overflow" and return
2. If front == -1:
       front = 0
3. rear = rear + 1
4. deque[rear] = x


2. Insert at Front

Algorithm InsertFront(x):
1. If front == 0:
       Print "No space at front" and return
2. If front == -1:      // Empty deque
       front = rear = 0
3. Else:
       front = front - 1
4. deque[front] = x


3. Delete from Front

Algorithm DeleteFront():
1. If front == -1:
       Print "Underflow" and return
2. Print deque[front] (deleted element)
3. If front == rear:    // Only one element
       front = rear = -1
4. Else:
       front = front + 1


4. Delete from Rear

Algorithm DeleteRear():
1. If rear == -1:
       Print "Underflow" and return
2. Print deque[rear] (deleted element)
3. If front == rear:    // Only one element
       front = rear = -1
4. Else:
       rear = rear - 1


5. Display

Algorithm Display():
1. If front == -1:
       Print "Deque is empty" and return
2. For i = front to rear:
       Print deque[i]

<------------------------------------------------------------------------------------->
<------------------------------------------------------------------------------------->

🔹 Algorithms

1. InsertFront(x)

Algorithm InsertFront(x):
1. IF (front == 0 AND rear == size-1) OR (front == rear+1) THEN
       PRINT "Overflow"
       EXIT
2. IF (front == -1) THEN        // Queue empty
       front ← 0
       rear ← 0
3. ELSE IF (front == 0) THEN
       front ← size-1
4. ELSE
       front ← front - 1
5. deque[front] ← x

-------------------------------------------------------------------------------------

2. InsertRear(x)

Algorithm InsertRear(x):
1. IF (front == 0 AND rear == size-1) OR (front == rear+1) THEN
       PRINT "Overflow"
       EXIT
2. IF (front == -1) THEN        // Queue empty
       front ← 0
       rear ← 0
3. ELSE IF (rear == size-1) THEN
       rear ← 0
4. ELSE
       rear ← rear + 1
5. deque[rear] ← x

-------------------------------------------------------------------------------------

3. DeleteFront()

Algorithm DeleteFront:
1. IF (front == -1) THEN
       PRINT "Underflow"
       EXIT
2. PRINT "Deleted element = ", deque[front]
3. IF (front == rear) THEN     // Only one element
       front ← -1
       rear ← -1
4. ELSE IF (front == size-1) THEN
       front ← 0
5. ELSE
       front ← front + 1

-------------------------------------------------------------------------------------

4. DeleteRear()

Algorithm DeleteRear:
1. IF (front == -1) THEN
       PRINT "Underflow"
       EXIT
2. PRINT "Deleted element = ", deque[rear]
3. IF (front == rear) THEN     // Only one element
       front ← -1
       rear ← -1
4. ELSE IF (rear == 0) THEN
       rear ← size-1
5. ELSE
       rear ← rear - 1

-------------------------------------------------------------------------------------

5. GetFront()

Algorithm GetFront:
1. IF (front == -1) THEN
       PRINT "Queue is Empty"
   ELSE
       PRINT "Front element = ", deque[front]


6. GetRear()

Algorithm GetRear:
1. IF (rear == -1) THEN
       PRINT "Queue is Empty"
   ELSE
       PRINT "Rear element = ", deque[rear]

-------------------------------------------------------------------------------------

🔹 C Example (Simple Circular Array Implementation)

#include <stdio.h>
#define SIZE 5

int deque[SIZE];
int front = -1, rear = -1;

int isFull() {
    return (front == 0 && rear == SIZE - 1) || (front == rear + 1);
}

int isEmpty() {
    return (front == -1);
}

void insertFront(int x) {
    if (isFull()) {
        printf("Deque Overflow\\n");
        return;
    }
    if (front == -1) {
        front = rear = 0;
    } else if (front == 0) {
        front = SIZE - 1;
    } else {
        front--;
    }
    deque[front] = x;
    printf("%d inserted at front\\n", x);
}

void insertRear(int x) {
    if (isFull()) {
        printf("Deque Overflow\\n");
        return;
    }
    if (front == -1) {
        front = rear = 0;
    } else if (rear == SIZE - 1) {
        rear = 0;
    } else {
        rear++;
    }
    deque[rear] = x;
    printf("%d inserted at rear\\n", x);
}

void deleteFront() {
    if (isEmpty()) {
        printf("Deque Underflow\\n");
        return;
    }
    printf("%d deleted from front\\n", deque[front]);
    if (front == rear) {
        front = rear = -1;
    } else if (front == SIZE - 1) {
        front = 0;
    } else {
        front++;
    }
}

void deleteRear() {
    if (isEmpty()) {
        printf("Deque Underflow\\n");
        return;
    }
    printf("%d deleted from rear\\n", deque[rear]);
    if (front == rear) {
        front = rear = -1;
    } else if (rear == 0) {
        rear = SIZE - 1;
    } else {
        rear--;
    }
}

void display() {
    if (isEmpty()) {
        printf("Deque is empty\\n");
        return;
    }
    printf("Deque: ");
    int i = front;
    while (1) {
        printf("%d ", deque[i]);
        if (i == rear) break;
        i = (i + 1) % SIZE;
    }
    printf("\\n");
}

int main() {
    insertRear(10);
    insertRear(20);
    insertFront(5);
    display();     // Deque: 5 10 20
    deleteRear();  // removes 20
    display();     // Deque: 5 10
    deleteFront(); // removes 5
    display();     // Deque: 10
    return 0;
}

--------------------------------------------------------------------------------------

🔹 Real-Life Applications of Deque

  Browser history (forward/backward navigation).
  Undo/Redo functionality in editors.
  Task scheduling in operating systems.
  Sliding window problems (used in many algorithms).

✅ In short:

Queue → FIFO (First In, First Out).
Deque → Flexible queue, insert/delete from both ends.


-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------


4. Priority Queue

A priority queue is like a queue, but every element has a priority.
👉 The element with highest priority is served first.
👉 If two elements have the same priority, they follow FIFO (like normal queue).

A Priority Queue is an abstract data type that operates similar to a regular queue but with an added feature: each element has a priority associated with it. Elements with higher priority are served before elements with lower priority. 
If two elements have the same priority, they are served according to their order in the queue (FIFO for same priority).


Enqueue Algorithm:

1. If n == SIZE, then print Overflow (queue full) and return.
2. Set i = n - 1.
3. While i >= 0 and pq[i] > value:
    Move pq[i] to pq[i+1].                                    this measn shift right
    Decrease i by 1.
4. Insert value at position i+1.                              this means insert at correct position            
5. Increase n by 1.
6. Print that element is inserted.


like you have 30, and you enter 10 so first 30 will be shift right like this  [30, 30, _, _, _] and then 10 will be insert at correct position like this [10, 30, _, _, _]

step by step example:

you have pq[10,30,_,_,_], i value of i = 1 and you want to insert 20 so first 30 will be shift right like this [10,30,30,_,_] pq[i] = pq[i+1] (pq[1] = pq[2]), 
  and then 20 will be insert at correct position like this [10,20,30,_,_] i = i - 1, 
  i = 0, pq[i] = 10, 10 > 20 is false so loop will be terminate and then 20 will be insert at correct position like this [10,20,30,_,_], pq[i+1] = value (pq[1] = 20)

--------------------------------------------------------------------------------------

Dequeue Algorithm:

1. If n == 0, then print Underflow (queue empty) and return.
2. Print pq[0] as the deleted element.
3. For i = 0 to n-2:
    Move pq[i+1] into pq[i].
4. Decrease n by 1


--------------------------------------------------------------------------------------

Display Algorithm:

1. If n == 0, then print "Queue is empty" and return.
2. For i = 0 to n-1:
    Print pq[i].
    
--------------------------------------------------------------------------------------

🔹 Implementation Methods

We can implement Priority Queue in different ways:

    Using Array (simple, but searching for highest priority takes O(n)).
    Using Linked List.
    Using Heap (Binary Heap) → most efficient (O(log n)).

🔹 C Example (Array Implementation)

#include <stdio.h>
#define SIZE 5

int pq[SIZE];    // priority queue array
int n = 0;       // current size

// Function to insert element in priority queue
void enqueue(int value) {
    if (n == SIZE) {
        printf("Priority Queue Overflow\\n");
        return;
    }
    int i = n - 1;
    // Shift elements to maintain ascending order
    while (i >= 0 && pq[i] > value) {
        pq[i + 1] = pq[i];
        i--;
    }
    pq[i + 1] = value;
    n++;
    printf("%d inserted\\n", value);
}

// Function to remove element with highest priority (smallest value)
void dequeue() {
    if (n == 0) {
        printf("Priority Queue Underflow\\n");
        return;
    }
    printf("%d deleted (highest priority)\\n", pq[0]);
    for (int i = 0; i < n - 1; i++) {
        pq[i] = pq[i + 1];
    }
    n--;
}

// Display queue
void display() {
    if (n == 0) {
        printf("Priority Queue is Empty\\n");
        return;
    }
    printf("Priority Queue: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", pq[i]);
    }
    printf("\\n");
}

int main() {
    enqueue(30);
    enqueue(10);
    enqueue(20);
    display();      // Priority Queue: 10 20 30
    dequeue();      // Removes 10
    display();      // Priority Queue: 20 30
    return 0;
}


--------------------------------------------------------------------------------
🔹 Real-Life Applications of Priority Queue

Operating System → process scheduling (high priority process runs first).
Dijkstra’s Algorithm → shortest path uses a priority queue.
Huffman Coding → used in data compression.
Emergency systems → patients/jobs handled by priority.
Printer tasks → urgent documents printed before normal ones.


✅ In short:

Normal Queue → FIFO (First In First Out)

Priority Queue → Highest priority element first
    `},{id:5,question:"5. Explain the difference between primitive and non-primitive data structures with suitable examples.",answer:"",codeExample:`

Primitive Data Structures

  They are the basic data types built into the programming language.
  They can store only one value at a time.
  Operations on them are directly supported by the compiler.
  They are simple and fast to use.
  Examples: int, float, char, double, boolean.

🔹 Primitive Example

#include <stdio.h>
int main() {
    int age = 21;       // Primitive: int
    char grade = 'A';   // Primitive: char
    printf("Age: %d, Grade: %c\\n", age, grade);
    return 0;
}



Non-Primitive Data Structures

  They are derived from primitive data types.
  They can store multiple values and can represent complex relationships.
  Operations on them require algorithms and functions (not directly by compiler).
  They are more flexible and powerful, used in solving real-world problems.
  Examples:
      Linear: Array, Stack, Queue, Linked List
      Non-Linear: Tree, Graph

🔹 Non-Primitive Example (Array)

#include <stdio.h>
int main() {
    int arr[3] = {10, 20, 30};   // Non-Primitive: Array
    printf("Array: %d %d %d\\n", arr[0], arr[1], arr[2]);
    return 0;
}

      
📊 Side-by-Side Comparison

| Primitive Data Structures      | Non-Primitive Data Structures                           |
| ------------------------------ | ------------------------------------------------------- |
| Basic and fundamental          | Derived from primitive types                            |
| Store a single value           | Store multiple values                                   |
| Directly supported by compiler | Need algorithms/functions for operations                |
| Simple to use                  | More complex but powerful                               |
| Examples: int, float, char     | Examples: Array, Stack, Queue, Linked List, Tree, Graph |
`},{id:6,question:"6. What is a sparse matrix? Discuss its storage representation and explain why it is more efficient than a normal 2D array in certain cases.",answer:"",codeExample:`
📌 What is a Sparse Matrix?

👉 A sparse matrix is a matrix (2D array) that has mostly zero elements and only a few non-zero elements.
👉 Instead of storing all elements (including zeros), we store only the non-zero elements with their positions.


🔹 Example of Normal Matrix

Matrix (4 × 5):
                    columns ->
                   0   1   2   3   4
                 _____________________
         r    0  | 0   0   0   9   0  |
         o    1  | 0   8   0   0   0  |
         w    2  | 0   0   0   0   0  |
         s    3  | 5   0   0   0   0  |
                 |____________________|

👉 Total elements = 4 × 5 = 20
👉 Non-zero elements = 3 (9, 8, 5)
👉 Zero elements = 17

📌 Storage Representation of Sparse Matrix
1. Array Representation (Triplet Form)

We store only row, column, value of non-zero elements in a 2D array.

Example for above matrix:
    
| Row | Col | Value |
| --- | --- | ----- |
| 0   | 3   | 9     |
| 1   | 1   | 8     |
| 3   | 0   | 5     |


📌 Why is it Efficient Compared to Normal 2D Array?

✅ Memory Efficient

    Normal matrix stores all elements (including zeros).
    Sparse matrix stores only non-zero elements.
    Saves a lot of memory when the matrix is large with very few non-zero elements.


✅ Faster Operations

    Operations (like addition, multiplication) are performed only on non-zero elements.
    Saves time compared to processing all zeros.


✅ Useful in Real Applications

    Image processing
    Graph algorithms (adjacency matrix of sparse graphs)
    Machine learning (storing word frequency matrices, which are mostly zeros)

-------------------------------------------------------------------------------

📊 Comparison Example

Normal 2D array of size 1000 × 1000 = 1,000,000 elements
    If only 1000 elements are non-zero → storing full array wastes space.

Sparse matrix storage → only 1000 × 3 = 3000 entries needed (row, col, value).
    👉 Saves almost 99.7% memory.


✅ Final Summary

Sparse Matrix = Matrix with mostly zeros.
Storage = Triplet (row, col, value) array OR linked list.
Advantage = Saves memory + faster operations when non-zero elements are very few.
    `},{id:7,question:"7. Differentiate between simple queue, circular queue, and priority queue. Provide real-life examples where each type can be applied.",answer:"",codeExample:`
📊 Comparison of Simple Queue, Circular Queue, and Priority Queue

| Simple Queue                                                  | Circular Queue                                                          | Priority Queue                                                                 |
| ------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Works on FIFO (First In First Out) principle                  | Also follows FIFO but uses circular structure                           | Serves elements based on priority, not just order                              |
| Insertions happen at the rear, deletions at the front         | Insertions and deletions happen circularly (rear and front wrap around) | Insertion based on priority, deletion removes the highest priority element     |
| Causes memory wastage when front moves forward                | Efficiently reuses memory, no wastage                                   | Memory usage depends on number of elements and priorities                      |
| Easy to implement but less efficient for large data           | More efficient than simple queue for continuous insert/delete           | More complex to implement than simple and circular queue                       |
| Example: People waiting in a ticket counter line              | Example: Round-robin CPU scheduling                                     | Example: Emergency room in a hospital, airline boarding                        |

      `},{id:8,question:"8. Explain Linked List?",answer:"",codeExample:`
📌 What is a Linked List?

👉 A linked list is a linear data structure where elements (called nodes) are stored at different memory locations and are connected using pointers.
👉 Unlike arrays, linked lists do not store elements in contiguous (next-to-next) memory blocks.


📌 Structure of a Node

Each node in a linked list has two parts:
    Data → The value (like number, character, etc.)
    Pointer (next) → Address of the next node

Diagram:
  [Data | Next] → [Data | Next] → [Data | Next] → NULL

📌 Types of Linked Lists

Singly Linked List

    Each node points to the next node.
    Traversal is only in one direction.

Head → [10 | Next] → [20 | Next] → [30 | Next] → NULL


Doubly Linked List

    Each node has two pointers: one to the next node and one to the previous node.
    Traversal is possible in both directions.

NULL ← [10 | Prev, Next] ↔ [20 | Prev, Next] ↔ [30 | Prev, Next] → NULL


Circular Linked List

    Last node points back to the first node instead of NULL.
    Can be singly or doubly circular.

[10 | Next] → [20 | Next] → [30 | Next] ↘
     ↑-----------------------------←


--------------------------------------------------------------------------------

📌 Basic Operations on Linked List

1. Insertion

  At beginning
  At end
  At a given position


2. Deletion

  From beginning
  From end
  From a given position


3. Traversal
  Visiting each node one by one.


--------------------------------------------------------------------------------
📌 Advantages of Linked List over Array

Dynamic size → Can grow or shrink at runtime (no fixed size like array).
Efficient insertion & deletion → No shifting of elements needed.

📌 Disadvantages

Uses extra memory for storing pointers.
Access is sequential (to access middle element, you must traverse from the start).
Slower compared to arrays for random access.


📌 Real-life Examples

  Music Playlist → Next song pointer links to another song.
  Image Viewer → Next and previous buttons are like a doubly linked list.
  Browser History → Forward and backward navigation.


✅ Final Summary:
A Linked List is a collection of nodes connected using pointers. It is flexible (dynamic size), allows easy insertions/deletions, but is slower for searching compared to arrays.


    `},{id:9,question:"9. Explain Singly Linked List.",answer:"",codeExample:`
📌 What is a Singly Linked List?

👉 A Singly Linked List (SLL) is a type of linked list where each node contains:

    Data → actual value stored.
    Next pointer → address of the next node.

👉 The last node’s pointer stores NULL (end of list).


📌 Structure of a Node

struct Node {
    int data;              // value
    struct Node* next;     // pointer to next node
};

📌 Diagram of Singly Linked List

    Head → [10 | Next] → [20 | Next] → [30 | Next] → NULL

Head = pointer to the first node.
Each node points to the next node.
Last node points to NULL.


📌 Operations on Singly Linked List

1. Traversal (visiting all nodes)

    Start from head.
    Print data of each node.
    Move to next until NULL.


2. Insertion

    At Beginning:

        Create a new node.
        Point new node’s next to head.
        Move head to new node.

    At End:

        Create new node.
        Traverse to last node.
        Set last node’s next = new node.

    At Position:

        Traverse to position.
        Link new node’s next to next node.
        Update previous node’s next.


3. Deletion

    From Beginning: Move head to head->next.
    From End: Traverse till second-last node, set its next = NULL.
    From Position: Adjust next pointers to skip the deleted node.

--------------------------------------------------------------------------------

📌 Advantages of Singly Linked List

    ✅ Dynamic memory allocation (size grows/shrinks).
    ✅ Easy insertion/deletion (no shifting like arrays).

📌 Disadvantages

    ❌ Cannot traverse backwards.
    ❌ Uses extra memory (for storing pointer).
    ❌ Sequential access only (no direct indexing).

✅ Final Summary

A Singly Linked List is a collection of nodes where each node points to the next.

    Operations: Insertion, Deletion, Traversal.
    Advantage: Dynamic size, efficient insert/delete.
    Disadvantage: No backward traversal, slower access.

--------------------------------------------------------------------------------
--------------------------------------------------------------------------------

📌 Example in C (Basic Traversal & Insertion at End)

#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* head = NULL;

// Insert at end
void insertEnd(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;

    if (head == NULL) {
        head = newNode;
    } else {
        struct Node* temp = head;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = newNode;
    }
}

// Display
void display() {
    struct Node* temp = head;
    while (temp != NULL) {
        printf("%d → ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}

int main() {
    insertEnd(10);
    insertEnd(20);
    insertEnd(30);
    display();  // Output: 10 → 20 → 30 → NULL
    return 0;
}

<-------------------------------------------------------------------------------->
<-------------------------------------------------------------------------------->

The Line:
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));

1. General malloc syntax

In C, malloc is used to allocate memory at runtime.

General form:
    (castType*) malloc(size_in_bytes);

malloc(size_in_bytes) → allocates that many bytes in heap memory.
(castType*) → converts the generic pointer returned by malloc (which is void*) into the correct pointer type you need.


2. Breaking down your line
    struct Node* newNode

Declares a pointer variable newNode that can point to a struct Node.

    malloc(sizeof(struct Node))

sizeof(struct Node) → calculates how many bytes are needed to store one struct Node.
Example: If struct Node has an int (4 bytes) and a pointer (8 bytes), sizeof(struct Node) = 12 (actually usually aligned to 16).
malloc(...) → allocates that much space in heap memory.
Returns a void* (a generic pointer).

    (struct Node*)

Casts that generic pointer into a pointer-to-struct Node.
So we can safely assign it to newNode.


3. Why not just malloc(...) without cast?

In C, the cast is optional:
    struct Node* newNode = malloc(sizeof(struct Node));


✅ works fine.

In C++, malloc requires a cast.
That’s why many C programmers add (struct Node*) even in C — habit from C++ or to make it explicit.


4. What happens in memory?

Let’s say we call:

struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));


Steps:

    sizeof(struct Node) → suppose it is 16 bytes.
    malloc(16) → asks the OS for 16 bytes in heap memory, say at address 2000.
    Returns void* → (void*)2000.
    (struct Node*) → cast to (struct Node*)2000.
    Assign to newNode.

Now:
    newNode → address 2000


At address 2000, memory is reserved for one struct Node:

    [ data | next ]

(but both fields have garbage values until we set them).


5. Why we use this in linked list

Because each time we call insertEnd(value), we need a new node.
malloc ensures each node is stored dynamically in heap memory, not just in a temporary variable that disappears when the function ends.

✅ So simplified:

    malloc(sizeof(struct Node)) → reserve space for one Node.
    (struct Node*) → tell the compiler “this is a pointer to Node”.
    newNode → holds the address of that space.

<-------------------------------------------------------------------------------->

why you used ->

Without ->

If you have a normal struct (not a pointer), you use dot (.):

    student.roll = 10;


But if you have a pointer to struct, you must first dereference (*) then use dot:

    (*newNode).data = 10;

This looks messy 😵.


With ->

C gives us a shortcut:

    newNode->data = 10;

✅ It means the same as (*newNode).data.

Why we need it here?

Because malloc returns a pointer.

    struct Node* newNode = malloc(sizeof(struct Node));

So newNode is a pointer, not a direct struct.
That’s why we use -> instead of ..


👉 In short:

. → for struct variables.
-> → for struct pointers.

--------------------------------------------------------------------------------
--------------------------------------------------------------------------------

1. What is a struct in C?

A struct (short for structure) in C is a way to group different pieces of data together under one name.

👉 Example in real life:
Imagine a student record. A student has:

    a roll number (integer)
    a name (string)
    a percentage (float)
If we didn’t have struct, we would need 3 separate variables:

    int roll;
    char name[50];
    float percentage;

But then how do we know these 3 belong to the same student?
They are separate. That’s a problem. 😕


With struct, we can group them into one unit:

    struct Student {
        int roll;
        char name[50];
        float percentage;
    };

Now we can create a student:

    struct Student s1;

And store values like this:

    s1.roll = 1;
    strcpy(s1.name, "Raj");
    s1.percentage = 89.5;

✅ Now all data about one student is in one place.


2. How does this connect to linked list?

A linked list needs a special box (a "node").
Each box must store two things:

    The data (like 10, 20, 30)
    The address of the next box (so we can move forward in the chain).

So we define:

    struct Node {
        int data;           // store the value
        struct Node* next;  // pointer to the next node
    };

Here:

int data → the value inside the node (like 10).
struct Node* next → a pointer that points to the next node in the list.
That’s why we need struct → because a node is a custom data type that contains two things together.


3. Why struct Node* next; is special?

Notice something tricky: inside struct Node, we are declaring struct Node* next.

This means:

    Every node stores a pointer to another Node type.
    That creates a chain of nodes.

This is how we get a linked list:
    [ data | next ] --> [ data | next ] --> [ data | next ] --> NULL

Without struct, we couldn’t create this custom box with data + pointer.


4. Step-by-step in your program

Let’s connect this to your code.
Struct definition

    struct Node {
        int data;
        struct Node* next;
    };

Defines the structure of one node.
Each node stores an integer (data) and a pointer to another node (next).

Head pointer
    struct Node* head = NULL;

head is a pointer to the first node in the list.
If the list is empty, head = NULL.

Think of head as the "entry gate" to your linked list. Without it, you don’t know where the list starts.

------------------------------------------------------------------------------

Inserting
When you call insertEnd(10):

    A new node is created with data = 10 and next = NULL.
    Since head is NULL (list empty), this new node becomes the first node (head = newNode).

Now memory looks like:

    head --> [10 | NULL]

When you call insertEnd(20):

    New node made → [20 | NULL].
    Traverse the list until the last node (10).
    Attach the new node at the end.

Now:
    head --> [10 | *] --> [20 | NULL]


When you call insertEnd(30):
    head --> [10 | *] --> [20 | *] --> [30 | NULL]


Display

The display() function just follows the chain:

    Start at head.
    Print data.
    Move to next.
    Stop when next = NULL.

Output:
    10 → 20 → 30 → NULL


5. Why not use just arrays?

Good question!
We could store numbers in an array: [10, 20, 30].


But arrays have problems:

    Fixed size (must know in advance).
    Inserting/deleting in middle requires shifting elements.


Linked lists are better for:

    Dynamic size (grow/shrink easily).
    Easy insertion and deletion.


✅ Summary in very simple words:

    A struct lets us create a custom box.
    Here, the box is a Node: it stores data + pointer to the next node.
    head remembers where the first box is.
    By connecting boxes, we make a linked list.

--------------------------------------------------------------------------------
--------------------------------------------------------------------------------

hello i mean why you used Node* struct syntax is struct keyword next structure name than variable name ?

    struct Node* next;

instead of just struct Node next; or something else.
Let’s unpack this carefully.


1. General struct variable syntax in C

When we declare a variable of a struct, the normal rule is:

    struct StructureName variableName;


Example:

struct Student {
    int roll;
    char name[20];
};

struct Student s1;  // s1 is a struct Student variable



2. Why struct Node* next; has a *

Because here we don’t want to store another whole Node, we only want to store a pointer (address) to a Node.

Case A: If we wrote

    struct Node next;

That means every Node would directly contain another Node inside it.
But then that Node would also contain another Node… and so on → infinite nesting 😵.
That’s impossible.


Case B: If we write

    struct Node* next;

Now next is just a pointer (address) that refers to another Node.
So each Node just says:
“Here’s my data, and here’s the address where the next Node lives.”

3. Breaking it down word by word

    struct Node* next;

struct → tells C that we’re using a structure type.
Node → the name of the structure (defined above).
* → makes it a pointer type.
next → the variable name (inside the struct).


4. Why not Node* next; only?

In plain C, you must write struct Node because the keyword struct is required unless you use a typedef.
If we add a typedef:

    typedef struct Node {
        int data;
        struct Node* next;
    } Node;

Now we can just write:
    Node* next;
    
because Node is now a type name on its own.


✅ Summary

Normal struct variable → struct Node n1; (a full node).
Pointer to struct → struct Node* next; (just the address of another node).
We use pointer, not full struct, to avoid infinite nesting and to link nodes dynamically in memory.


---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------

🔹 What is malloc?

In C language, malloc stands for Memory Allocation.
It is a function used to dynamically allocate memory at runtime (i.e., while the program is running).

It is defined in the stdlib.h header file.

🔹 Syntax:
    ptr = (castType*) malloc(size_in_bytes);

ptr → pointer that stores the base address of allocated memory.
castType → type of pointer (like int*, float*).
size_in_bytes → how many bytes of memory you want.

🔹 Example:

#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr;
    int n = 5;

    // allocate memory for 5 integers
    arr = (int*) malloc(n * sizeof(int));

    if (arr == NULL) {
        printf("Memory not allocated!\\n");
        return 1;
    }

    // initialize and print array
    for (int i = 0; i < n; i++) {
        arr[i] = i + 1;
    }

    printf("Array elements: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    // free allocated memory
    free(arr);

    return 0;
}



🔹 Explanation:

malloc(n * sizeof(int)) → allocates memory for n integers.
    If n = 5 → and sizeof(int) = 4 bytes, then total = 5 * 4 = 20 bytes.
Returns a pointer to the first byte of memory (base address).
If memory allocation fails, malloc returns NULL.
After use, we must free memory using free() to avoid memory leaks.

🔹 Why use malloc?

Normal arrays like int arr[10]; are static (size fixed at compile time).
malloc allows us to allocate memory dynamically at runtime, depending on user input or conditions.

✅ Example use case:
If you are writing a program to store student marks and the number of students is not known in advance, 
you can ask the user for input and allocate memory accordingly with malloc.

`},{id:9.1,question:"9.1. Explain Singly Linked List Algorithms",answer:"",codeExample:`
Singly Linked List (SLL) Algorithms

Structure of Node

Structure Node
    data : integer
    next : pointer to Node
End Structure

head : pointer to Node (initially NULL)


1. Insertion Algorithms
(a) Insertion at Beginning

Algorithm InsertAtBeginning(value):
1. Create a new node NEW
2. NEW.data ← value
3. NEW.next ← head
4. head ← NEW
5. Exit


(b) Insertion at End

Algorithm InsertAtEnd(value):
1. Create a new node NEW
2. NEW.data ← value
3. NEW.next ← NULL
4. If head = NULL then
       head ← NEW
       Exit
5. Set TEMP ← head
6. While TEMP.next ≠ NULL do
       TEMP ← TEMP.next
7. TEMP.next ← NEW
8. Exit


(c) Insertion at Specific Position

Algorithm InsertAtPosition(value, pos):
1. Create a new node NEW
2. NEW.data ← value
3. If pos = 1 then
       NEW.next ← head
       head ← NEW
       Exit
4. Set TEMP ← head, i ← 1
5. While i < pos-1 and TEMP ≠ NULL do
       TEMP ← TEMP.next
       i ← i + 1
6. If TEMP = NULL then
       Print "Invalid Position"
       Exit
7. NEW.next ← TEMP.next
8. TEMP.next ← NEW
9. Exit


2. Deletion Algorithms
(a) Deletion from Beginning

Algorithm DeleteFromBeginning():
1. If head = NULL then
       Print "Underflow"
       Exit
2. TEMP ← head
3. head ← head.next
4. Free TEMP
5. Exit


(b) Deletion from End

Algorithm DeleteFromEnd():
1. If head = NULL then
       Print "Underflow"
       Exit
2. If head.next = NULL then
       Free head
       head ← NULL
       Exit
3. Set TEMP ← head
4. While TEMP.next.next ≠ NULL do
       TEMP ← TEMP.next
5. Free TEMP.next
6. TEMP.next ← NULL
7. Exit


(c) Deletion from Specific Position

Algorithm DeleteFromPosition(pos):
1. If head = NULL then
       Print "Underflow"
       Exit
2. If pos = 1 then
       TEMP ← head
       head ← head.next
       Free TEMP
       Exit
3. Set TEMP ← head, i ← 1
4. While i < pos-1 and TEMP ≠ NULL do
       TEMP ← TEMP.next
       i ← i + 1
5. If TEMP = NULL or TEMP.next = NULL then
       Print "Invalid Position"
       Exit
6. NODE ← TEMP.next
7. TEMP.next ← NODE.next
8. Free NODE
9. Exit


✅ Now you have complete, step-by-step algorithms for:

Insertion: At Beginning, At End, At Position

Deletion: From Beginning, From End, From Position


<--------------------------------------------------------------------------------->
<--------------------------------------------------------------------------------->


full example in C

#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* head = NULL;

// Insert at Beginning
void insertBeginning(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = head;
    head = newNode;
    printf("%d inserted at beginning\\n", value);
}

// Insert at End
void insertEnd(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;

    if (head == NULL) {
        head = newNode;
    } else {
        struct Node* temp = head;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = newNode;
    }
    printf("%d inserted at end\\n", value);
}

// Insert at Position
void insertPosition(int value, int pos) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;

    if (pos == 1) {
        newNode->next = head;
        head = newNode;
        printf("%d inserted at position %d\\n", value, pos);
        return;
    }

    struct Node* temp = head;
    for (int i = 1; i < pos - 1 && temp != NULL; i++) {
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Invalid Position!\\n");
        free(newNode);
        return;
    }

    newNode->next = temp->next;
    temp->next = newNode;
    printf("%d inserted at position %d\\n", value, pos);
}

// Delete from Beginning
void deleteBeginning() {
    if (head == NULL) {
        printf("List is Empty!\\n");
        return;
    }
    struct Node* temp = head;
    head = head->next;
    printf("%d deleted from beginning\\n", temp->data);
    free(temp);
}

// Delete from End
void deleteEnd() {
    if (head == NULL) {
        printf("List is Empty!\\n");
        return;
    }
    if (head->next == NULL) {
        printf("%d deleted from end\\n", head->data);
        free(head);
        head = NULL;
        return;
    }
    struct Node* temp = head;
    while (temp->next->next != NULL) {
        temp = temp->next;
    }
    printf("%d deleted from end\\n", temp->next->data);
    free(temp->next);
    temp->next = NULL;
}

// Delete from Position
void deletePosition(int pos) {
    if (head == NULL) {
        printf("List is Empty!\\n");
        return;
    }
    if (pos == 1) {
        struct Node* temp = head;
        head = head->next;
        printf("%d deleted from position %d\\n", temp->data, pos);
        free(temp);
        return;
    }

    struct Node* temp = head;
    for (int i = 1; i < pos - 1 && temp != NULL; i++) {
        temp = temp->next;
    }

    if (temp == NULL || temp->next == NULL) {
        printf("Invalid Position!\\n");
        return;
    }

    struct Node* del = temp->next;
    temp->next = del->next;
    printf("%d deleted from position %d\\n", del->data, pos);
    free(del);
}

// Display List
void display() {
    struct Node* temp = head;
    if (temp == NULL) {
        printf("List is Empty!\\n");
        return;
    }
    printf("Linked List: ");
    while (temp != NULL) {
        printf("%d → ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}

// Main Function
int main() {
    insertBeginning(10);
    insertEnd(20);
    insertEnd(30);
    insertPosition(15, 2);
    display();   // 10 → 15 → 20 → 30 → NULL

    deleteBeginning();
    display();   // 15 → 20 → 30 → NULL

    deleteEnd();
    display();   // 15 → 20 → NULL

    deletePosition(2);
    display();   // 15 → NULL

    return 0;
}



-----------------------------------------------------------------------

✅ Explanation of Example Run

Insert at beginning → 10

Insert at end → 20, 30

Insert at position 2 → 15
List: 10 → 15 → 20 → 30 → NULL

Delete from beginning → removes 10
List: 15 → 20 → 30 → NULL

Delete from end → removes 30
List: 15 → 20 → NULL

Delete from position 2 → removes 20
List: 15 → NULL




note:

head -> next mean

👉 Head jo pehle node ko point karta hai, uske next pointer me agli node ka address stored hota hai.

So:

head → pehle node ka address rakhta hai
head->next → dusre node ka address rakhta hai
head->next->data → dusre node ka data


Example:
    head → [10 | next] → [20 | next] → [30 | NULL]

head->data = 10
head->next → dusre node ka address (20 wala node)
head->next->data = 20

`},{id:10,question:"10. Explain Doubly Linked List.",answer:"",codeExample:`
📘 Doubly Linked List (DLL)

A Doubly Linked List is a special type of linked list where:

Each node has three parts:

    prev → pointer to the previous node
    data → the actual data stored
    next → pointer to the next node

Unlike a Singly Linked List (which can only be traversed in one direction), DLL can be traversed in both directions (forward and backward).

🔹 Structure of Node (in C)

struct Node {
    int data;
    struct Node* prev;
    struct Node* next;
};

🔹 Diagram
         NULL ← [prev | 10 | next] ↔ [prev | 20 | next] ↔ [prev | 30 | next] → NULL

Here:

    First node’s prev = NULL (because no node before it)
    Last node’s next = NULL (because no node after it)
    Every middle node is connected in both directions

🔹 Basic Operations in DLL

1. Insertion

    At Beginning
    At End
    At a Specific Position


2. Deletion

    From Beginning
    From End
    From a Specific Position


3. Traversal

    Forward (head → tail)
    Backward (tail → head)


🔹 Advantages of DLL

    ✅ Can be traversed in both directions
    ✅ Easier to delete nodes (no need to traverse from head to find previous node)
    ✅ More flexible than singly linked list


🔹 Disadvantages of DLL

    ❌ Requires extra memory for the prev pointer
    ❌ Slightly more complex to implement than SLL


🔹 Real-life Examples

    Web Browser History → You can go forward and backward between visited pages.
    Music Playlist → Move next or previous song easily.
    Undo/Redo in Text Editors → You can move back and forward between states.

<--------------------------------------------------------------------------------->

<--------------------------------------------------------------------------------->


✅ Full C Program: Doubly Linked List

#include <stdio.h>
#include <stdlib.h>

// Structure of a Doubly Linked List Node
struct Node {
    int data;
    struct Node* prev;
    struct Node* next;
};

struct Node* head = NULL;

// Insert at Beginning
void insertBeginning(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->prev = NULL;
    newNode->next = head;

    if (head != NULL)
        head->prev = newNode;

    head = newNode;
    printf("%d inserted at beginning\\n", value);
}

// Insert at End
void insertEnd(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;

    if (head == NULL) {
        newNode->prev = NULL;
        head = newNode;
        printf("%d inserted at end\\n", value);
        return;
    }

    struct Node* temp = head;
    while (temp->next != NULL) {
        temp = temp->next;
    }

    temp->next = newNode;
    newNode->prev = temp;
    printf("%d inserted at end\\n", value);
}

// Insert at Specific Position
void insertPosition(int value, int pos) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;

    if (pos == 1) {
        newNode->prev = NULL;
        newNode->next = head;
        if (head != NULL)
            head->prev = newNode;               // old head points back to new node
        head = newNode;
        printf("%d inserted at position %d\\n", value, pos);
        return;
    }

    struct Node* temp = head;
    for (int i = 1; i < pos - 1 && temp != NULL; i++) {
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Invalid Position!\\n");
        free(newNode);
        return;
    }

    newNode->next = temp->next;
    newNode->prev = temp;

    if (temp->next != NULL)
        temp->next->prev = newNode;

    temp->next = newNode;
    printf("%d inserted at position %d\\n", value, pos);
}

// Delete from Beginning
void deleteBeginning() {
    if (head == NULL) {
        printf("List is Empty!\\n");
        return;
    }
    struct Node* temp = head;
    head = head->next;

    if (head != NULL)
        head->prev = NULL;

    printf("%d deleted from beginning\\n", temp->data);
    free(temp);
}

// Delete from End
void deleteEnd() {
    if (head == NULL) {
        printf("List is Empty!\\n");
        return;
    }

    struct Node* temp = head;

    if (head->next == NULL) {
        printf("%d deleted from end\\n", head->data);
        free(head);
        head = NULL;
        return;
    }

    while (temp->next != NULL) {
        temp = temp->next;
    }

    printf("%d deleted from end\\n", temp->data);
    temp->prev->next = NULL;
    free(temp);
}

// Delete from Specific Position
void deletePosition(int pos) {
    if (head == NULL) {
        printf("List is Empty!\\n");
        return;
    }

    struct Node* temp = head;

    if (pos == 1) {
        head = head->next;
        if (head != NULL)
            head->prev = NULL;
        printf("%d deleted from position %d\\n", temp->data, pos);
        free(temp);
        return;
    }

    for (int i = 1; i < pos && temp != NULL; i++) {
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Invalid Position!\\n");
        return;
    }

    if (temp->prev != NULL)
        temp->prev->next = temp->next;

    if (temp->next != NULL)
        temp->next->prev = temp->prev;

    printf("%d deleted from position %d\\n", temp->data, pos);
    free(temp);
}

// Display Forward
void displayForward() {
    struct Node* temp = head;
    if (temp == NULL) {
        printf("List is Empty!\\n");
        return;
    }
    printf("Forward: ");
    while (temp != NULL) {
        printf("%d ↔ ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}

// Display Backward
void displayBackward() {
    if (head == NULL) {
        printf("List is Empty!\\n");
        return;
    }
    struct Node* temp = head;
    while (temp->next != NULL) {
        temp = temp->next;
    }

    printf("Backward: ");
    while (temp != NULL) {
        printf("%d ↔ ", temp->data);
        temp = temp->prev;
    }
    printf("NULL\\n");
}

// Main Function
int main() {
    insertBeginning(10);
    insertEnd(20);
    insertEnd(30);
    insertPosition(15, 2);
    displayForward();   // 10 ↔ 15 ↔ 20 ↔ 30 ↔ NULL
    displayBackward();  // 30 ↔ 20 ↔ 15 ↔ 10 ↔ NULL

    deleteBeginning();
    displayForward();   // 15 ↔ 20 ↔ 30 ↔ NULL

    deleteEnd();
    displayForward();   // 15 ↔ 20 ↔ NULL

    deletePosition(2);
    displayForward();   // 15 ↔ NULL

    return 0;
}


✅ Example Output
10 inserted at beginning
20 inserted at end
30 inserted at end
15 inserted at position 2
Forward: 10 ↔ 15 ↔ 20 ↔ 30 ↔ NULL
Backward: 30 ↔ 20 ↔ 15 ↔ 10 ↔ NULL
10 deleted from beginning
Forward: 15 ↔ 20 ↔ 30 ↔ NULL
30 deleted from end
Forward: 15 ↔ 20 ↔ NULL
20 deleted from position 2
Forward: 15 ↔ NULL


---------------------------------------------------------------------------------
---------------------------------------------------------------------------------

📘 Algorithms for Doubly Linked List

🔹 Structure of Node

Structure Node
    data : integer
    prev : pointer to Node
    next : pointer to Node
End Structure

head : pointer to Node (initially NULL)


✅ 1. Insertion Algorithms
(a) Insertion at Beginning

Algorithm InsertAtBeginning(value):
1. Create NEW node
2. NEW.data ← value
3. NEW.prev ← NULL
4. NEW.next ← head
5. If head ≠ NULL then
       head.prev ← NEW
6. head ← NEW
7. Exit


(b) Insertion at End

Algorithm InsertAtEnd(value):
1. Create NEW node
2. NEW.data ← value
3. NEW.next ← NULL
4. If head = NULL then
       NEW.prev ← NULL
       head ← NEW
       Exit
5. Set TEMP ← head
6. While TEMP.next ≠ NULL do
       TEMP ← TEMP.next
7. TEMP.next ← NEW
8. NEW.prev ← TEMP
9. Exit


(c) Insertion at Position

Algorithm InsertAtPosition(value, pos):
1. Create NEW node
2. NEW.data ← value
3. If pos = 1 then
       NEW.prev ← NULL
       NEW.next ← head
       If head ≠ NULL then
            head.prev ← NEW
       head ← NEW
       Exit
4. Set TEMP ← head, i ← 1
5. While i < pos-1 and TEMP ≠ NULL do
       TEMP ← TEMP.next
       i ← i + 1
6. If TEMP = NULL then
       Print "Invalid Position"
       Exit
7. NEW.next ← TEMP.next
8. NEW.prev ← TEMP
9. If TEMP.next ≠ NULL then
       TEMP.next.prev ← NEW
10. TEMP.next ← NEW
11. Exit


✅ 2. Deletion Algorithms
(a) Deletion from Beginning

Algorithm DeleteFromBeginning():
1. If head = NULL then
       Print "List is Empty"
       Exit
2. TEMP ← head
3. head ← head.next
4. If head ≠ NULL then
       head.prev ← NULL
5. Free TEMP
6. Exit


(b) Deletion from End

Algorithm DeleteFromEnd():
1. If head = NULL then
       Print "List is Empty"
       Exit
2. If head.next = NULL then
       Free head
       head ← NULL
       Exit
3. TEMP ← head
4. While TEMP.next ≠ NULL do
       TEMP ← TEMP.next
5. TEMP.prev.next ← NULL
6. Free TEMP
7. Exit


(c) Deletion from Position

Algorithm DeleteFromPosition(pos):
1. If head = NULL then
       Print "List is Empty"
       Exit
2. If pos = 1 then
       TEMP ← head
       head ← head.next
       If head ≠ NULL then
            head.prev ← NULL
       Free TEMP
       Exit
3. TEMP ← head, i ← 1
4. While i < pos and TEMP ≠ NULL do
       TEMP ← TEMP.next
       i ← i + 1
5. If TEMP = NULL then
       Print "Invalid Position"
       Exit
6. TEMP.prev.next ← TEMP.next
7. If TEMP.next ≠ NULL then
       TEMP.next.prev ← TEMP.prev
8. Free TEMP
9. Exit


✅ 3. Traversal Algorithms
(a) Forward Traversal

Algorithm DisplayForward():
1. If head = NULL then
       Print "List is Empty"
       Exit
2. TEMP ← head
3. While TEMP ≠ NULL do
       Print TEMP.data
       TEMP ← TEMP.next
4. Exit


(b) Backward Traversal

Algorithm DisplayBackward():
1. If head = NULL then
       Print "List is Empty"
       Exit
2. TEMP ← head
3. While TEMP.next ≠ NULL do
       TEMP ← TEMP.next
4. While TEMP ≠ NULL do
       Print TEMP.data
       TEMP ← TEMP.prev
5. Exit

`},{id:11,question:"11. Explain Circular Linked List",answer:"",codeExample:`
🔹 Circular Linked List (CLL)

A Circular Linked List is a type of linked list in which:
    The last node points back to the first node, instead of pointing to NULL.
    It can be singly circular (each node points only forward) or doubly circular 
    (each node points forward and backward, and last node connects to first).

✅ Key Characteristics

    No NULL at the end (continuous loop).
    You can traverse infinitely if not careful.
    Starting point can be any node, and you can reach all others.
    Useful for circular tasks (like round-robin scheduling).


✅ Advantages

    Efficient in traversing circular tasks.
    No explicit end → good for applications where looping is natural.
    Can insert at beginning/end in O(1) time (if you maintain a tail pointer).
    

✅ Types

Singly Circular Linked List – Each node points to the next, and the last node points back to the first.

Doubly Circular Linked List – Each node points to both next and previous nodes, and the last node 
connects back to the first node (and vice versa).

✅ Diagram
        Singly Circular Linked List:
            [10] → [20] → [30] → [40] → back to [10]

        Doubly Circular Linked List:
            [10] ⇄ [20] ⇄ [30] ⇄ [40] ⇄ back to [10]

✅ Real-Life Applications

    Round-robin scheduling in operating systems.
    Multiplayer board games (players take turns in a circular fashion).
    Circular buffers (like audio/video streaming).
    Playlist looping in music players.


<--------------------------------------------------------------------------------->
<--------------------------------------------------------------------------------->

✅ Full Example: Circular Linked List in C

#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* head = NULL;

// Insert at Beginning
void insertBeginning(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;

    if (head == NULL) {
        head = newNode;
        newNode->next = head; // points to itself
    } else {
        struct Node* temp = head;
        while (temp->next != head) {
            temp = temp->next;
        }
        temp->next = newNode;
        newNode->next = head;
        head = newNode;
    }
}

// Insert at End
void insertEnd(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;

    if (head == NULL) {
        head = newNode;
        newNode->next = head;
    } else {
        struct Node* temp = head;
        while (temp->next != head) {
            temp = temp->next;
        }
        temp->next = newNode;
        newNode->next = head;
    }
}

// Insert at Position
void insertAtPosition(int value, int pos) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;

    if (pos == 1) {
        insertBeginning(value);
        return;
    }

    struct Node* temp = head;
    for (int i = 1; i < pos - 1 && temp->next != head; i++) {
        temp = temp->next;
    }
    newNode->next = temp->next;
    temp->next = newNode;
}

// Delete from Beginning
void deleteBeginning() {
    if (head == NULL) return;

    if (head->next == head) {
        free(head);
        head = NULL;
    } else {
        struct Node* temp = head;
        struct Node* last = head;
        while (last->next != head) {
            last = last->next;
        }
        head = head->next;
        last->next = head;
        free(temp);
    }
}

// Delete from End
void deleteEnd() {
    if (head == NULL) return;

    if (head->next == head) {
        free(head);
        head = NULL;
    } else {
        struct Node* temp = head;
        struct Node* prev = NULL;

        while (temp->next != head) {
            prev = temp;
            temp = temp->next;
        }
        prev->next = head;
        free(temp);
    }
}

// Delete from Position
void deleteAtPosition(int pos) {
    if (head == NULL) return;

    if (pos == 1) {
        deleteBeginning();
        return;
    }

    struct Node* temp = head;
    struct Node* prev = NULL;

    for (int i = 1; i < pos && temp->next != head; i++) {
        prev = temp;
        temp = temp->next;
    }

    prev->next = temp->next;
    free(temp);
}

// Display Circular Linked List
void display() {
    if (head == NULL) {
        printf("List is empty\\n");
        return;
    }
    struct Node* temp = head;
    do {
        printf("%d → ", temp->data);
        temp = temp->next;
    } while (temp != head);
    printf("(back to head)\\n");
}

// Main Function
int main() {
    insertEnd(10);
    insertEnd(20);
    insertEnd(30);
    display(); // 10 → 20 → 30 → (back to head)

    insertBeginning(5);
    display(); // 5 → 10 → 20 → 30 → (back to head)

    insertAtPosition(15, 3);
    display(); // 5 → 10 → 15 → 20 → 30 → (back to head)

    deleteBeginning();
    display(); // 10 → 15 → 20 → 30 → (back to head)

    deleteEnd();
    display(); // 10 → 15 → 20 → (back to head)

    deleteAtPosition(2);
    display(); // 10 → 20 → (back to head)

    return 0;
}



✅ Output Example


10 → 20 → 30 → (back to head)
5 → 10 → 20 → 30 → (back to head)
5 → 10 → 15 → 20 → 30 → (back to head)
10 → 15 → 20 → 30 → (back to head)
10 → 15 → 20 → (back to head)
10 → 20 → (back to head)


---------------------------------------------------------------------------------
---------------------------------------------------------------------------------

✅ Algorithms for Singly Circular Linked List

1. Insertion at Beginning

Algorithm Insert_Beginning(value):
1. Create a new node (newNode) with given value.
2. If head = NULL:
       head = newNode
       newNode->next = head   // points to itself
   Else:
       temp = head
       While temp->next != head:
            temp = temp->next
       temp->next = newNode
       newNode->next = head
       head = newNode

2. Insertion at End

Algorithm Insert_End(value):
1. Create a new node (newNode) with given value.
2. If head = NULL:
       head = newNode
       newNode->next = head
   Else:
       temp = head
       While temp->next != head:
            temp = temp->next
       temp->next = newNode
       newNode->next = head



3. Insertion at Position

Algorithm Insert_Position(value, pos):
1. Create a new node (newNode) with given value.
2. If pos = 1:
       Call Insert_Beginning(value)
3. Else:
       temp = head
       Repeat (pos - 2) times:
            temp = temp->next
            (stop if temp->next == head)
       newNode->next = temp->next
       temp->next = newNode


4. Deletion from Beginning

Algorithm Delete_Beginning():
1. If head = NULL:
       Print "List is empty"
       return
2. If head->next = head:
       Free(head)
       head = NULL
3. Else:
       temp = head
       last = head
       While last->next != head:
            last = last->next
       head = head->next
       last->next = head
       Free(temp)


5. Deletion from End

Algorithm Delete_End():
1. If head = NULL:
       Print "List is empty"
       return
2. If head->next = head:
       Free(head)
       head = NULL
3. Else:
       temp = head
       prev = NULL
       While temp->next != head:
            prev = temp
            temp = temp->next
       prev->next = head
       Free(temp)


6. Deletion from Position

Algorithm Delete_Position(pos):
1. If head = NULL:
       Print "List is empty"
       return
2. If pos = 1:
       Call Delete_Beginning()
3. Else:
       temp = head
       prev = NULL
       Repeat (pos - 1) times:
            prev = temp
            temp = temp->next
            (stop if temp->next == head)
       prev->next = temp->next
       Free(temp)


7. Traversal (Display)

Algorithm Display():
1. If head = NULL:
       Print "List is empty"
       return
2. temp = head
3. Do:
       Print temp->data
       temp = temp->next
   While temp != head
4. Print " (back to head)"



`},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""}],ve=D=>{B(U===D?null:D)};return Ie.jsxs("div",{className:"app-container",children:[Ie.jsx("h1",{children:"DSA Interview Questions"}),Ie.jsx("div",{className:"questions-container",children:m.map(D=>Ie.jsxs("div",{className:"question-item",children:[Ie.jsx("button",{className:`question-button ${U===D.id?"active":""}`,onClick:()=>ve(D.id),children:D.question}),U===D.id&&Ie.jsxs("div",{className:"answer-container",children:[Ie.jsxs("div",{className:"answer",children:[Ie.jsx("h3",{children:"Answer:"}),Ie.jsx("p",{children:D.answer})]}),D.codeExample&&Ie.jsxs("div",{className:"code-example",children:[Ie.jsx("h3",{children:"Code Example:"}),Ie.jsx("pre",{children:Ie.jsx("code",{children:D.codeExample})})]})]})]},D.id))})]})}Of.createRoot(document.getElementById("root")).render(Ie.jsx(Ds.StrictMode,{children:Ie.jsx(qf,{})}));
