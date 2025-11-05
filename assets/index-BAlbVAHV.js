(function(){const q=document.createElement("link").relList;if(q&&q.supports&&q.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))ve(D);new MutationObserver(D=>{for(const Z of D)if(Z.type==="childList")for(const de of Z.addedNodes)de.tagName==="LINK"&&de.rel==="modulepreload"&&ve(de)}).observe(document,{childList:!0,subtree:!0});function h(D){const Z={};return D.integrity&&(Z.integrity=D.integrity),D.referrerPolicy&&(Z.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?Z.credentials="include":D.crossOrigin==="anonymous"?Z.credentials="omit":Z.credentials="same-origin",Z}function ve(D){if(D.ep)return;D.ep=!0;const Z=h(D);fetch(D.href,Z)}})();var kl={exports:{}},vr={},Ll={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ku;function Ic(){if(ku)return F;ku=1;var R=Symbol.for("react.element"),q=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),ve=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),Z=Symbol.for("react.provider"),de=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),Le=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),ee=Symbol.iterator;function Y(d){return d===null||typeof d!="object"?null:(d=ee&&d[ee]||d["@@iterator"],typeof d=="function"?d:null)}var Qe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},He=Object.assign,X={};function H(d,y,U){this.props=d,this.context=y,this.refs=X,this.updater=U||Qe}H.prototype.isReactComponent={},H.prototype.setState=function(d,y){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,y,"setState")},H.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function yt(){}yt.prototype=H.prototype;function st(d,y,U){this.props=d,this.context=y,this.refs=X,this.updater=U||Qe}var Je=st.prototype=new yt;Je.constructor=st,He(Je,H.prototype),Je.isPureReactComponent=!0;var we=Array.isArray,be=Object.prototype.hasOwnProperty,Se={current:null},Ie={key:!0,ref:!0,__self:!0,__source:!0};function Ve(d,y,U){var A,B={},M=null,V=null;if(y!=null)for(A in y.ref!==void 0&&(V=y.ref),y.key!==void 0&&(M=""+y.key),y)be.call(y,A)&&!Ie.hasOwnProperty(A)&&(B[A]=y[A]);var W=arguments.length-2;if(W===1)B.children=U;else if(1<W){for(var J=Array(W),Me=0;Me<W;Me++)J[Me]=arguments[Me+2];B.children=J}if(d&&d.defaultProps)for(A in W=d.defaultProps,W)B[A]===void 0&&(B[A]=W[A]);return{$$typeof:R,type:d,key:M,ref:V,props:B,_owner:Se.current}}function Tt(d,y){return{$$typeof:R,type:d.type,key:y,ref:d.ref,props:d.props,_owner:d._owner}}function vt(d){return typeof d=="object"&&d!==null&&d.$$typeof===R}function $t(d){var y={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(U){return y[U]})}var ut=/\/+/g;function Be(d,y){return typeof d=="object"&&d!==null&&d.key!=null?$t(""+d.key):y.toString(36)}function et(d,y,U,A,B){var M=typeof d;(M==="undefined"||M==="boolean")&&(d=null);var V=!1;if(d===null)V=!0;else switch(M){case"string":case"number":V=!0;break;case"object":switch(d.$$typeof){case R:case q:V=!0}}if(V)return V=d,B=B(V),d=A===""?"."+Be(V,0):A,we(B)?(U="",d!=null&&(U=d.replace(ut,"$&/")+"/"),et(B,y,U,"",function(Me){return Me})):B!=null&&(vt(B)&&(B=Tt(B,U+(!B.key||V&&V.key===B.key?"":(""+B.key).replace(ut,"$&/")+"/")+d)),y.push(B)),1;if(V=0,A=A===""?".":A+":",we(d))for(var W=0;W<d.length;W++){M=d[W];var J=A+Be(M,W);V+=et(M,y,U,J,B)}else if(J=Y(d),typeof J=="function")for(d=J.call(d),W=0;!(M=d.next()).done;)M=M.value,J=A+Be(M,W++),V+=et(M,y,U,J,B);else if(M==="object")throw y=String(d),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.");return V}function dt(d,y,U){if(d==null)return d;var A=[],B=0;return et(d,A,"","",function(M){return y.call(U,M,B++)}),A}function _e(d){if(d._status===-1){var y=d._result;y=y(),y.then(function(U){(d._status===0||d._status===-1)&&(d._status=1,d._result=U)},function(U){(d._status===0||d._status===-1)&&(d._status=2,d._result=U)}),d._status===-1&&(d._status=0,d._result=y)}if(d._status===1)return d._result.default;throw d._result}var re={current:null},x={transition:null},I={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:x,ReactCurrentOwner:Se};function k(){throw Error("act(...) is not supported in production builds of React.")}return F.Children={map:dt,forEach:function(d,y,U){dt(d,function(){y.apply(this,arguments)},U)},count:function(d){var y=0;return dt(d,function(){y++}),y},toArray:function(d){return dt(d,function(y){return y})||[]},only:function(d){if(!vt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},F.Component=H,F.Fragment=h,F.Profiler=D,F.PureComponent=st,F.StrictMode=ve,F.Suspense=Q,F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,F.act=k,F.cloneElement=function(d,y,U){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var A=He({},d.props),B=d.key,M=d.ref,V=d._owner;if(y!=null){if(y.ref!==void 0&&(M=y.ref,V=Se.current),y.key!==void 0&&(B=""+y.key),d.type&&d.type.defaultProps)var W=d.type.defaultProps;for(J in y)be.call(y,J)&&!Ie.hasOwnProperty(J)&&(A[J]=y[J]===void 0&&W!==void 0?W[J]:y[J])}var J=arguments.length-2;if(J===1)A.children=U;else if(1<J){W=Array(J);for(var Me=0;Me<J;Me++)W[Me]=arguments[Me+2];A.children=W}return{$$typeof:R,type:d.type,key:B,ref:M,props:A,_owner:V}},F.createContext=function(d){return d={$$typeof:de,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:Z,_context:d},d.Consumer=d},F.createElement=Ve,F.createFactory=function(d){var y=Ve.bind(null,d);return y.type=d,y},F.createRef=function(){return{current:null}},F.forwardRef=function(d){return{$$typeof:ce,render:d}},F.isValidElement=vt,F.lazy=function(d){return{$$typeof:ge,_payload:{_status:-1,_result:d},_init:_e}},F.memo=function(d,y){return{$$typeof:Le,type:d,compare:y===void 0?null:y}},F.startTransition=function(d){var y=x.transition;x.transition={};try{d()}finally{x.transition=y}},F.unstable_act=k,F.useCallback=function(d,y){return re.current.useCallback(d,y)},F.useContext=function(d){return re.current.useContext(d)},F.useDebugValue=function(){},F.useDeferredValue=function(d){return re.current.useDeferredValue(d)},F.useEffect=function(d,y){return re.current.useEffect(d,y)},F.useId=function(){return re.current.useId()},F.useImperativeHandle=function(d,y,U){return re.current.useImperativeHandle(d,y,U)},F.useInsertionEffect=function(d,y){return re.current.useInsertionEffect(d,y)},F.useLayoutEffect=function(d,y){return re.current.useLayoutEffect(d,y)},F.useMemo=function(d,y){return re.current.useMemo(d,y)},F.useReducer=function(d,y,U){return re.current.useReducer(d,y,U)},F.useRef=function(d){return re.current.useRef(d)},F.useState=function(d){return re.current.useState(d)},F.useSyncExternalStore=function(d,y,U){return re.current.useSyncExternalStore(d,y,U)},F.useTransition=function(){return re.current.useTransition()},F.version="18.3.1",F}var Lu;function Cl(){return Lu||(Lu=1,Ll.exports=Ic()),Ll.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Su;function _c(){if(Su)return vr;Su=1;var R=Cl(),q=Symbol.for("react.element"),h=Symbol.for("react.fragment"),ve=Object.prototype.hasOwnProperty,D=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z={key:!0,ref:!0,__self:!0,__source:!0};function de(ce,Q,Le){var ge,ee={},Y=null,Qe=null;Le!==void 0&&(Y=""+Le),Q.key!==void 0&&(Y=""+Q.key),Q.ref!==void 0&&(Qe=Q.ref);for(ge in Q)ve.call(Q,ge)&&!Z.hasOwnProperty(ge)&&(ee[ge]=Q[ge]);if(ce&&ce.defaultProps)for(ge in Q=ce.defaultProps,Q)ee[ge]===void 0&&(ee[ge]=Q[ge]);return{$$typeof:q,type:ce,key:Y,ref:Qe,props:ee,_owner:D.current}}return vr.Fragment=h,vr.jsx=de,vr.jsxs=de,vr}var Tu;function Rc(){return Tu||(Tu=1,kl.exports=_c()),kl.exports}var Ce=Rc(),Du=Cl(),Ci={},Sl={exports:{}},ze={},Tl={exports:{}},Pl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function Dc(){return Pu||(Pu=1,(function(R){function q(x,I){var k=x.length;x.push(I);e:for(;0<k;){var d=k-1>>>1,y=x[d];if(0<D(y,I))x[d]=I,x[k]=y,k=d;else break e}}function h(x){return x.length===0?null:x[0]}function ve(x){if(x.length===0)return null;var I=x[0],k=x.pop();if(k!==I){x[0]=k;e:for(var d=0,y=x.length,U=y>>>1;d<U;){var A=2*(d+1)-1,B=x[A],M=A+1,V=x[M];if(0>D(B,k))M<y&&0>D(V,B)?(x[d]=V,x[M]=k,d=M):(x[d]=B,x[A]=k,d=A);else if(M<y&&0>D(V,k))x[d]=V,x[M]=k,d=M;else break e}}return I}function D(x,I){var k=x.sortIndex-I.sortIndex;return k!==0?k:x.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var Z=performance;R.unstable_now=function(){return Z.now()}}else{var de=Date,ce=de.now();R.unstable_now=function(){return de.now()-ce}}var Q=[],Le=[],ge=1,ee=null,Y=3,Qe=!1,He=!1,X=!1,H=typeof setTimeout=="function"?setTimeout:null,yt=typeof clearTimeout=="function"?clearTimeout:null,st=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Je(x){for(var I=h(Le);I!==null;){if(I.callback===null)ve(Le);else if(I.startTime<=x)ve(Le),I.sortIndex=I.expirationTime,q(Q,I);else break;I=h(Le)}}function we(x){if(X=!1,Je(x),!He)if(h(Q)!==null)He=!0,_e(be);else{var I=h(Le);I!==null&&re(we,I.startTime-x)}}function be(x,I){He=!1,X&&(X=!1,yt(Ve),Ve=-1),Qe=!0;var k=Y;try{for(Je(I),ee=h(Q);ee!==null&&(!(ee.expirationTime>I)||x&&!$t());){var d=ee.callback;if(typeof d=="function"){ee.callback=null,Y=ee.priorityLevel;var y=d(ee.expirationTime<=I);I=R.unstable_now(),typeof y=="function"?ee.callback=y:ee===h(Q)&&ve(Q),Je(I)}else ve(Q);ee=h(Q)}if(ee!==null)var U=!0;else{var A=h(Le);A!==null&&re(we,A.startTime-I),U=!1}return U}finally{ee=null,Y=k,Qe=!1}}var Se=!1,Ie=null,Ve=-1,Tt=5,vt=-1;function $t(){return!(R.unstable_now()-vt<Tt)}function ut(){if(Ie!==null){var x=R.unstable_now();vt=x;var I=!0;try{I=Ie(!0,x)}finally{I?Be():(Se=!1,Ie=null)}}else Se=!1}var Be;if(typeof st=="function")Be=function(){st(ut)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,dt=et.port2;et.port1.onmessage=ut,Be=function(){dt.postMessage(null)}}else Be=function(){H(ut,0)};function _e(x){Ie=x,Se||(Se=!0,Be())}function re(x,I){Ve=H(function(){x(R.unstable_now())},I)}R.unstable_IdlePriority=5,R.unstable_ImmediatePriority=1,R.unstable_LowPriority=4,R.unstable_NormalPriority=3,R.unstable_Profiling=null,R.unstable_UserBlockingPriority=2,R.unstable_cancelCallback=function(x){x.callback=null},R.unstable_continueExecution=function(){He||Qe||(He=!0,_e(be))},R.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Tt=0<x?Math.floor(1e3/x):5},R.unstable_getCurrentPriorityLevel=function(){return Y},R.unstable_getFirstCallbackNode=function(){return h(Q)},R.unstable_next=function(x){switch(Y){case 1:case 2:case 3:var I=3;break;default:I=Y}var k=Y;Y=I;try{return x()}finally{Y=k}},R.unstable_pauseExecution=function(){},R.unstable_requestPaint=function(){},R.unstable_runWithPriority=function(x,I){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var k=Y;Y=x;try{return I()}finally{Y=k}},R.unstable_scheduleCallback=function(x,I,k){var d=R.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?d+k:d):k=d,x){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=k+y,x={id:ge++,callback:I,priorityLevel:x,startTime:k,expirationTime:y,sortIndex:-1},k>d?(x.sortIndex=k,q(Le,x),h(Q)===null&&x===h(Le)&&(X?(yt(Ve),Ve=-1):X=!0,re(we,k-d))):(x.sortIndex=y,q(Q,x),He||Qe||(He=!0,_e(be))),x},R.unstable_shouldYield=$t,R.unstable_wrapCallback=function(x){var I=Y;return function(){var k=Y;Y=I;try{return x.apply(this,arguments)}finally{Y=k}}}})(Pl)),Pl}var Cu;function Uc(){return Cu||(Cu=1,Tl.exports=Dc()),Tl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu;function Fc(){if(Iu)return ze;Iu=1;var R=Cl(),q=Uc();function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ve=new Set,D={};function Z(e,t){de(e,t),de(e+"Capture",t)}function de(e,t){for(D[e]=t,e=0;e<t.length;e++)ve.add(t[e])}var ce=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Q=Object.prototype.hasOwnProperty,Le=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ge={},ee={};function Y(e){return Q.call(ee,e)?!0:Q.call(ge,e)?!1:Le.test(e)?ee[e]=!0:(ge[e]=!0,!1)}function Qe(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function He(e,t,n,r){if(t===null||typeof t>"u"||Qe(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function X(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){H[e]=new X(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];H[t]=new X(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){H[e]=new X(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){H[e]=new X(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){H[e]=new X(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){H[e]=new X(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){H[e]=new X(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){H[e]=new X(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){H[e]=new X(e,5,!1,e.toLowerCase(),null,!1,!1)});var yt=/[\-:]([a-z])/g;function st(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yt,st);H[t]=new X(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yt,st);H[t]=new X(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yt,st);H[t]=new X(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){H[e]=new X(e,1,!1,e.toLowerCase(),null,!1,!1)}),H.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){H[e]=new X(e,1,!1,e.toLowerCase(),null,!0,!0)});function Je(e,t,n,r){var i=H.hasOwnProperty(t)?H[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(He(t,n,i,r)&&(n=null),r||i===null?Y(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var we=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,be=Symbol.for("react.element"),Se=Symbol.for("react.portal"),Ie=Symbol.for("react.fragment"),Ve=Symbol.for("react.strict_mode"),Tt=Symbol.for("react.profiler"),vt=Symbol.for("react.provider"),$t=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),Be=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),x=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=x&&e[x]||e["@@iterator"],typeof e=="function"?e:null)}var k=Object.assign,d;function y(e){if(d===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var U=!1;function A(e,t){if(!e||U)return"";U=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{U=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?y(e):""}function B(e){switch(e.tag){case 5:return y(e.type);case 16:return y("Lazy");case 13:return y("Suspense");case 19:return y("SuspenseList");case 0:case 2:case 15:return e=A(e.type,!1),e;case 11:return e=A(e.type.render,!1),e;case 1:return e=A(e.type,!0),e;default:return""}}function M(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ie:return"Fragment";case Se:return"Portal";case Tt:return"Profiler";case Ve:return"StrictMode";case Be:return"Suspense";case et:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $t:return(e.displayName||"Context")+".Consumer";case vt:return(e._context.displayName||"Context")+".Provider";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dt:return t=e.displayName||null,t!==null?t:M(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return M(e(t))}catch{}}return null}function V(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return M(t);case 8:return t===Ve?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function J(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Me(e){var t=J(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gr(e){e._valueTracker||(e._valueTracker=Me(e))}function Il(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=J(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ii(e,t){var n=t.checked;return k({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _l(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=W(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rl(e,t){t=t.checked,t!=null&&Je(e,"checked",t,!1)}function _i(e,t){Rl(e,t);var n=W(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ri(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ri(e,t.type,W(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Dl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ri(e,t,n){(t!=="number"||wr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dn=Array.isArray;function an(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Di(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return k({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ul(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(Dn(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function Fl(e,t){var n=W(t.value),r=W(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Al(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ui(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,Bl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Un(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uu=["Webkit","ms","Moz","O"];Object.keys(Fn).forEach(function(e){Uu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fn[t]=Fn[e]})});function Ml(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fn.hasOwnProperty(e)&&Fn[e]?(""+t).trim():t+"px"}function Ol(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ml(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Fu=k({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fi(e,t){if(t){if(Fu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function Ai(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=null;function Bi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mi=null,sn=null,un=null;function ql(e){if(e=nr(e)){if(typeof Mi!="function")throw Error(h(280));var t=e.stateNode;t&&(t=Qr(t),Mi(e.stateNode,e.type,t))}}function Wl(e){sn?un?un.push(e):un=[e]:sn=e}function jl(){if(sn){var e=sn,t=un;if(un=sn=null,ql(e),t)for(e=0;e<t.length;e++)ql(t[e])}}function Ql(e,t){return e(t)}function Hl(){}var Oi=!1;function Vl(e,t,n){if(Oi)return e(t,n);Oi=!0;try{return Ql(e,t,n)}finally{Oi=!1,(sn!==null||un!==null)&&(Hl(),jl())}}function An(e,t){var n=e.stateNode;if(n===null)return null;var r=Qr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var qi=!1;if(ce)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){qi=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{qi=!1}function Au(e,t,n,r,i,o,l,a,s){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(v){this.onError(v)}}var Bn=!1,Nr=null,Er=!1,Wi=null,zu={onError:function(e){Bn=!0,Nr=e}};function Bu(e,t,n,r,i,o,l,a,s){Bn=!1,Nr=null,Au.apply(zu,arguments)}function Mu(e,t,n,r,i,o,l,a,s){if(Bu.apply(this,arguments),Bn){if(Bn){var p=Nr;Bn=!1,Nr=null}else throw Error(h(198));Er||(Er=!0,Wi=p)}}function Zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $l(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zl(e){if(Zt(e)!==e)throw Error(h(188))}function Ou(e){var t=e.alternate;if(!t){if(t=Zt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Zl(i),e;if(o===r)return Zl(i),t;o=o.sibling}throw Error(h(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function Kl(e){return e=Ou(e),e!==null?Gl(e):null}function Gl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gl(e);if(t!==null)return t;e=e.sibling}return null}var Yl=q.unstable_scheduleCallback,Xl=q.unstable_cancelCallback,qu=q.unstable_shouldYield,Wu=q.unstable_requestPaint,oe=q.unstable_now,ju=q.unstable_getCurrentPriorityLevel,ji=q.unstable_ImmediatePriority,Jl=q.unstable_UserBlockingPriority,kr=q.unstable_NormalPriority,Qu=q.unstable_LowPriority,bl=q.unstable_IdlePriority,Lr=null,ct=null;function Hu(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Lr,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Zu,Vu=Math.log,$u=Math.LN2;function Zu(e){return e>>>=0,e===0?32:31-(Vu(e)/$u|0)|0}var Sr=64,Tr=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Mn(a):(o&=l,o!==0&&(r=Mn(o)))}else l=n&~i,l!==0?r=Mn(l):o!==0&&(r=Mn(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),i=1<<n,r|=e[n],t&=~i;return r}function Ku(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-tt(o),a=1<<l,s=i[l];s===-1?((a&n)===0||(a&r)!==0)&&(i[l]=Ku(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ea(){var e=Sr;return Sr<<=1,(Sr&4194240)===0&&(Sr=64),e}function Hi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function On(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function Yu(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Vi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var j=0;function ta(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var na,$i,ra,ia,oa,Zi=!1,Cr=[],Pt=null,Ct=null,It=null,qn=new Map,Wn=new Map,_t=[],Xu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function la(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function jn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=nr(t),t!==null&&$i(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ju(e,t,n,r,i){switch(t){case"focusin":return Pt=jn(Pt,e,t,n,r,i),!0;case"dragenter":return Ct=jn(Ct,e,t,n,r,i),!0;case"mouseover":return It=jn(It,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return qn.set(o,jn(qn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Wn.set(o,jn(Wn.get(o)||null,e,t,n,r,i)),!0}return!1}function aa(e){var t=Kt(e.target);if(t!==null){var n=Zt(t);if(n!==null){if(t=n.tag,t===13){if(t=$l(n),t!==null){e.blockedOn=t,oa(e.priority,function(){ra(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ir(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zi=r,n.target.dispatchEvent(r),zi=null}else return t=nr(n),t!==null&&$i(t),e.blockedOn=n,!1;t.shift()}return!0}function sa(e,t,n){Ir(e)&&n.delete(t)}function bu(){Zi=!1,Pt!==null&&Ir(Pt)&&(Pt=null),Ct!==null&&Ir(Ct)&&(Ct=null),It!==null&&Ir(It)&&(It=null),qn.forEach(sa),Wn.forEach(sa)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Zi||(Zi=!0,q.unstable_scheduleCallback(q.unstable_NormalPriority,bu)))}function Hn(e){function t(i){return Qn(i,e)}if(0<Cr.length){Qn(Cr[0],e);for(var n=1;n<Cr.length;n++){var r=Cr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&Qn(Pt,e),Ct!==null&&Qn(Ct,e),It!==null&&Qn(It,e),qn.forEach(t),Wn.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)aa(n),n.blockedOn===null&&_t.shift()}var dn=we.ReactCurrentBatchConfig,_r=!0;function ed(e,t,n,r){var i=j,o=dn.transition;dn.transition=null;try{j=1,Ki(e,t,n,r)}finally{j=i,dn.transition=o}}function td(e,t,n,r){var i=j,o=dn.transition;dn.transition=null;try{j=4,Ki(e,t,n,r)}finally{j=i,dn.transition=o}}function Ki(e,t,n,r){if(_r){var i=Gi(e,t,n,r);if(i===null)po(e,t,r,Rr,n),la(e,r);else if(Ju(i,e,t,n,r))r.stopPropagation();else if(la(e,r),t&4&&-1<Xu.indexOf(e)){for(;i!==null;){var o=nr(i);if(o!==null&&na(o),o=Gi(e,t,n,r),o===null&&po(e,t,r,Rr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else po(e,t,r,null,n)}}var Rr=null;function Gi(e,t,n,r){if(Rr=null,e=Bi(r),e=Kt(e),e!==null)if(t=Zt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$l(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Rr=e,null}function ua(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ju()){case ji:return 1;case Jl:return 4;case kr:case Qu:return 16;case bl:return 536870912;default:return 16}default:return 16}}var Rt=null,Yi=null,Dr=null;function da(){if(Dr)return Dr;var e,t=Yi,n=t.length,r,i="value"in Rt?Rt.value:Rt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Dr=i.slice(e,1<r?1-r:void 0)}function Ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fr(){return!0}function ca(){return!1}function Oe(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Fr:ca,this.isPropagationStopped=ca,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fr)},persist:function(){},isPersistent:Fr}),t}var cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xi=Oe(cn),Vn=k({},cn,{view:0,detail:0}),nd=Oe(Vn),Ji,bi,$n,Ar=k({},Vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:to,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$n&&($n&&e.type==="mousemove"?(Ji=e.screenX-$n.screenX,bi=e.screenY-$n.screenY):bi=Ji=0,$n=e),Ji)},movementY:function(e){return"movementY"in e?e.movementY:bi}}),fa=Oe(Ar),rd=k({},Ar,{dataTransfer:0}),id=Oe(rd),od=k({},Vn,{relatedTarget:0}),eo=Oe(od),ld=k({},cn,{animationName:0,elapsedTime:0,pseudoElement:0}),ad=Oe(ld),sd=k({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ud=Oe(sd),dd=k({},cn,{data:0}),pa=Oe(dd),cd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pd[e])?!!t[e]:!1}function to(){return hd}var md=k({},Vn,{key:function(e){if(e.key){var t=cd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:to,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yd=Oe(md),vd=k({},Ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ha=Oe(vd),gd=k({},Vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:to}),wd=Oe(gd),xd=k({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nd=Oe(xd),Ed=k({},Ar,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kd=Oe(Ed),Ld=[9,13,27,32],no=ce&&"CompositionEvent"in window,Zn=null;ce&&"documentMode"in document&&(Zn=document.documentMode);var Sd=ce&&"TextEvent"in window&&!Zn,ma=ce&&(!no||Zn&&8<Zn&&11>=Zn),ya=" ",va=!1;function ga(e,t){switch(e){case"keyup":return Ld.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function Td(e,t){switch(e){case"compositionend":return wa(t);case"keypress":return t.which!==32?null:(va=!0,ya);case"textInput":return e=t.data,e===ya&&va?null:e;default:return null}}function Pd(e,t){if(fn)return e==="compositionend"||!no&&ga(e,t)?(e=da(),Dr=Yi=Rt=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ma&&t.locale!=="ko"?null:t.data;default:return null}}var Cd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cd[e.type]:t==="textarea"}function Na(e,t,n,r){Wl(r),t=qr(t,"onChange"),0<t.length&&(n=new Xi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,Gn=null;function Id(e){Oa(e,0)}function zr(e){var t=vn(e);if(Il(t))return e}function _d(e,t){if(e==="change")return t}var Ea=!1;if(ce){var ro;if(ce){var io="oninput"in document;if(!io){var ka=document.createElement("div");ka.setAttribute("oninput","return;"),io=typeof ka.oninput=="function"}ro=io}else ro=!1;Ea=ro&&(!document.documentMode||9<document.documentMode)}function La(){Kn&&(Kn.detachEvent("onpropertychange",Sa),Gn=Kn=null)}function Sa(e){if(e.propertyName==="value"&&zr(Gn)){var t=[];Na(t,Gn,e,Bi(e)),Vl(Id,t)}}function Rd(e,t,n){e==="focusin"?(La(),Kn=t,Gn=n,Kn.attachEvent("onpropertychange",Sa)):e==="focusout"&&La()}function Dd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zr(Gn)}function Ud(e,t){if(e==="click")return zr(t)}function Fd(e,t){if(e==="input"||e==="change")return zr(t)}function Ad(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Ad;function Yn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Q.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function Ta(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pa(e,t){var n=Ta(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ta(n)}}function Ca(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ca(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ia(){for(var e=window,t=wr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wr(e.document)}return t}function oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zd(e){var t=Ia(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ca(n.ownerDocument.documentElement,n)){if(r!==null&&oo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Pa(n,o);var l=Pa(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bd=ce&&"documentMode"in document&&11>=document.documentMode,pn=null,lo=null,Xn=null,ao=!1;function _a(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ao||pn==null||pn!==wr(r)||(r=pn,"selectionStart"in r&&oo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xn&&Yn(Xn,r)||(Xn=r,r=qr(lo,"onSelect"),0<r.length&&(t=new Xi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pn)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hn={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionend:Br("Transition","TransitionEnd")},so={},Ra={};ce&&(Ra=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function Mr(e){if(so[e])return so[e];if(!hn[e])return e;var t=hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ra)return so[e]=t[n];return e}var Da=Mr("animationend"),Ua=Mr("animationiteration"),Fa=Mr("animationstart"),Aa=Mr("transitionend"),za=new Map,Ba="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){za.set(e,t),Z(t,[e])}for(var uo=0;uo<Ba.length;uo++){var co=Ba[uo],Md=co.toLowerCase(),Od=co[0].toUpperCase()+co.slice(1);Dt(Md,"on"+Od)}Dt(Da,"onAnimationEnd"),Dt(Ua,"onAnimationIteration"),Dt(Fa,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(Aa,"onTransitionEnd"),de("onMouseEnter",["mouseout","mouseover"]),de("onMouseLeave",["mouseout","mouseover"]),de("onPointerEnter",["pointerout","pointerover"]),de("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));function Ma(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Mu(r,t,void 0,e),e.currentTarget=null}function Oa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,p=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Ma(i,a,p),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,p=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Ma(i,a,p),o=s}}}if(Er)throw e=Wi,Er=!1,Wi=null,e}function K(e,t){var n=t[wo];n===void 0&&(n=t[wo]=new Set);var r=e+"__bubble";n.has(r)||(qa(t,e,2,!1),n.add(r))}function fo(e,t,n){var r=0;t&&(r|=4),qa(n,e,r,t)}var Or="_reactListening"+Math.random().toString(36).slice(2);function bn(e){if(!e[Or]){e[Or]=!0,ve.forEach(function(n){n!=="selectionchange"&&(qd.has(n)||fo(n,!1,e),fo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Or]||(t[Or]=!0,fo("selectionchange",!1,t))}}function qa(e,t,n,r){switch(ua(t)){case 1:var i=ed;break;case 4:i=td;break;default:i=Ki}n=i.bind(null,t,n,e),i=void 0,!qi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function po(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Kt(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Vl(function(){var p=o,v=Bi(n),g=[];e:{var m=za.get(e);if(m!==void 0){var N=Xi,L=e;switch(e){case"keypress":if(Ur(n)===0)break e;case"keydown":case"keyup":N=yd;break;case"focusin":L="focus",N=eo;break;case"focusout":L="blur",N=eo;break;case"beforeblur":case"afterblur":N=eo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=fa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=wd;break;case Da:case Ua:case Fa:N=ad;break;case Aa:N=Nd;break;case"scroll":N=nd;break;case"wheel":N=kd;break;case"copy":case"cut":case"paste":N=ud;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=ha}var S=(t&4)!==0,le=!S&&e==="scroll",c=S?m!==null?m+"Capture":null:m;S=[];for(var u=p,f;u!==null;){f=u;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,c!==null&&(w=An(u,c),w!=null&&S.push(er(u,w,f)))),le)break;u=u.return}0<S.length&&(m=new N(m,L,null,n,v),g.push({event:m,listeners:S}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",m&&n!==zi&&(L=n.relatedTarget||n.fromElement)&&(Kt(L)||L[gt]))break e;if((N||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,N?(L=n.relatedTarget||n.toElement,N=p,L=L?Kt(L):null,L!==null&&(le=Zt(L),L!==le||L.tag!==5&&L.tag!==6)&&(L=null)):(N=null,L=p),N!==L)){if(S=fa,w="onMouseLeave",c="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(S=ha,w="onPointerLeave",c="onPointerEnter",u="pointer"),le=N==null?m:vn(N),f=L==null?m:vn(L),m=new S(w,u+"leave",N,n,v),m.target=le,m.relatedTarget=f,w=null,Kt(v)===p&&(S=new S(c,u+"enter",L,n,v),S.target=f,S.relatedTarget=le,w=S),le=w,N&&L)t:{for(S=N,c=L,u=0,f=S;f;f=mn(f))u++;for(f=0,w=c;w;w=mn(w))f++;for(;0<u-f;)S=mn(S),u--;for(;0<f-u;)c=mn(c),f--;for(;u--;){if(S===c||c!==null&&S===c.alternate)break t;S=mn(S),c=mn(c)}S=null}else S=null;N!==null&&Wa(g,m,N,S,!1),L!==null&&le!==null&&Wa(g,le,L,S,!0)}}e:{if(m=p?vn(p):window,N=m.nodeName&&m.nodeName.toLowerCase(),N==="select"||N==="input"&&m.type==="file")var T=_d;else if(xa(m))if(Ea)T=Fd;else{T=Dd;var P=Rd}else(N=m.nodeName)&&N.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(T=Ud);if(T&&(T=T(e,p))){Na(g,T,n,v);break e}P&&P(e,m,p),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&Ri(m,"number",m.value)}switch(P=p?vn(p):window,e){case"focusin":(xa(P)||P.contentEditable==="true")&&(pn=P,lo=p,Xn=null);break;case"focusout":Xn=lo=pn=null;break;case"mousedown":ao=!0;break;case"contextmenu":case"mouseup":case"dragend":ao=!1,_a(g,n,v);break;case"selectionchange":if(Bd)break;case"keydown":case"keyup":_a(g,n,v)}var C;if(no)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else fn?ga(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(ma&&n.locale!=="ko"&&(fn||_!=="onCompositionStart"?_==="onCompositionEnd"&&fn&&(C=da()):(Rt=v,Yi="value"in Rt?Rt.value:Rt.textContent,fn=!0)),P=qr(p,_),0<P.length&&(_=new pa(_,e,null,n,v),g.push({event:_,listeners:P}),C?_.data=C:(C=wa(n),C!==null&&(_.data=C)))),(C=Sd?Td(e,n):Pd(e,n))&&(p=qr(p,"onBeforeInput"),0<p.length&&(v=new pa("onBeforeInput","beforeinput",null,n,v),g.push({event:v,listeners:p}),v.data=C))}Oa(g,t)})}function er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=An(e,n),o!=null&&r.unshift(er(e,o,i)),o=An(e,t),o!=null&&r.push(er(e,o,i))),e=e.return}return r}function mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wa(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,p=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&p!==null&&(a=p,i?(s=An(n,o),s!=null&&l.unshift(er(n,s,a))):i||(s=An(n,o),s!=null&&l.push(er(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Wd=/\r\n?/g,jd=/\u0000|\uFFFD/g;function ja(e){return(typeof e=="string"?e:""+e).replace(Wd,`
`).replace(jd,"")}function Wr(e,t,n){if(t=ja(t),ja(e)!==t&&n)throw Error(h(425))}function jr(){}var ho=null,mo=null;function yo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vo=typeof setTimeout=="function"?setTimeout:void 0,Qd=typeof clearTimeout=="function"?clearTimeout:void 0,Qa=typeof Promise=="function"?Promise:void 0,Hd=typeof queueMicrotask=="function"?queueMicrotask:typeof Qa<"u"?function(e){return Qa.resolve(null).then(e).catch(Vd)}:vo;function Vd(e){setTimeout(function(){throw e})}function go(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Hn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hn(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ha(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),ft="__reactFiber$"+yn,tr="__reactProps$"+yn,gt="__reactContainer$"+yn,wo="__reactEvents$"+yn,$d="__reactListeners$"+yn,Zd="__reactHandles$"+yn;function Kt(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ha(e);e!==null;){if(n=e[ft])return n;e=Ha(e)}return t}e=n,n=e.parentNode}return null}function nr(e){return e=e[ft]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function Qr(e){return e[tr]||null}var xo=[],gn=-1;function Ft(e){return{current:e}}function G(e){0>gn||(e.current=xo[gn],xo[gn]=null,gn--)}function $(e,t){gn++,xo[gn]=e.current,e.current=t}var At={},xe=Ft(At),Re=Ft(!1),Gt=At;function wn(e,t){var n=e.type.contextTypes;if(!n)return At;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function De(e){return e=e.childContextTypes,e!=null}function Hr(){G(Re),G(xe)}function Va(e,t,n){if(xe.current!==At)throw Error(h(168));$(xe,t),$(Re,n)}function $a(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(h(108,V(e)||"Unknown",i));return k({},n,r)}function Vr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,Gt=xe.current,$(xe,e),$(Re,Re.current),!0}function Za(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=$a(e,t,Gt),r.__reactInternalMemoizedMergedChildContext=e,G(Re),G(xe),$(xe,e)):G(Re),$(Re,n)}var wt=null,$r=!1,No=!1;function Ka(e){wt===null?wt=[e]:wt.push(e)}function Kd(e){$r=!0,Ka(e)}function zt(){if(!No&&wt!==null){No=!0;var e=0,t=j;try{var n=wt;for(j=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,$r=!1}catch(i){throw wt!==null&&(wt=wt.slice(e+1)),Yl(ji,zt),i}finally{j=t,No=!1}}return null}var xn=[],Nn=0,Zr=null,Kr=0,$e=[],Ze=0,Yt=null,xt=1,Nt="";function Xt(e,t){xn[Nn++]=Kr,xn[Nn++]=Zr,Zr=e,Kr=t}function Ga(e,t,n){$e[Ze++]=xt,$e[Ze++]=Nt,$e[Ze++]=Yt,Yt=e;var r=xt;e=Nt;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var o=32-tt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,xt=1<<32-tt(t)+i|n<<i|r,Nt=o+e}else xt=1<<o|n<<i|r,Nt=e}function Eo(e){e.return!==null&&(Xt(e,1),Ga(e,1,0))}function ko(e){for(;e===Zr;)Zr=xn[--Nn],xn[Nn]=null,Kr=xn[--Nn],xn[Nn]=null;for(;e===Yt;)Yt=$e[--Ze],$e[Ze]=null,Nt=$e[--Ze],$e[Ze]=null,xt=$e[--Ze],$e[Ze]=null}var qe=null,We=null,b=!1,rt=null;function Ya(e,t){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,We=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yt!==null?{id:xt,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,We=null,!0):!1;default:return!1}}function Lo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function So(e){if(b){var t=We;if(t){var n=t;if(!Xa(e,t)){if(Lo(e))throw Error(h(418));t=Ut(n.nextSibling);var r=qe;t&&Xa(e,t)?Ya(r,n):(e.flags=e.flags&-4097|2,b=!1,qe=e)}}else{if(Lo(e))throw Error(h(418));e.flags=e.flags&-4097|2,b=!1,qe=e}}}function Ja(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Gr(e){if(e!==qe)return!1;if(!b)return Ja(e),b=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yo(e.type,e.memoizedProps)),t&&(t=We)){if(Lo(e))throw ba(),Error(h(418));for(;t;)Ya(e,t),t=Ut(t.nextSibling)}if(Ja(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=qe?Ut(e.stateNode.nextSibling):null;return!0}function ba(){for(var e=We;e;)e=Ut(e.nextSibling)}function En(){We=qe=null,b=!1}function To(e){rt===null?rt=[e]:rt.push(e)}var Gd=we.ReactCurrentBatchConfig;function rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function Yr(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function es(e){var t=e._init;return t(e._payload)}function ts(e){function t(c,u){if(e){var f=c.deletions;f===null?(c.deletions=[u],c.flags|=16):f.push(u)}}function n(c,u){if(!e)return null;for(;u!==null;)t(c,u),u=u.sibling;return null}function r(c,u){for(c=new Map;u!==null;)u.key!==null?c.set(u.key,u):c.set(u.index,u),u=u.sibling;return c}function i(c,u){return c=Ht(c,u),c.index=0,c.sibling=null,c}function o(c,u,f){return c.index=f,e?(f=c.alternate,f!==null?(f=f.index,f<u?(c.flags|=2,u):f):(c.flags|=2,u)):(c.flags|=1048576,u)}function l(c){return e&&c.alternate===null&&(c.flags|=2),c}function a(c,u,f,w){return u===null||u.tag!==6?(u=vl(f,c.mode,w),u.return=c,u):(u=i(u,f),u.return=c,u)}function s(c,u,f,w){var T=f.type;return T===Ie?v(c,u,f.props.children,w,f.key):u!==null&&(u.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===_e&&es(T)===u.type)?(w=i(u,f.props),w.ref=rr(c,u,f),w.return=c,w):(w=xi(f.type,f.key,f.props,null,c.mode,w),w.ref=rr(c,u,f),w.return=c,w)}function p(c,u,f,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=gl(f,c.mode,w),u.return=c,u):(u=i(u,f.children||[]),u.return=c,u)}function v(c,u,f,w,T){return u===null||u.tag!==7?(u=ln(f,c.mode,w,T),u.return=c,u):(u=i(u,f),u.return=c,u)}function g(c,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=vl(""+u,c.mode,f),u.return=c,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case be:return f=xi(u.type,u.key,u.props,null,c.mode,f),f.ref=rr(c,null,u),f.return=c,f;case Se:return u=gl(u,c.mode,f),u.return=c,u;case _e:var w=u._init;return g(c,w(u._payload),f)}if(Dn(u)||I(u))return u=ln(u,c.mode,f,null),u.return=c,u;Yr(c,u)}return null}function m(c,u,f,w){var T=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return T!==null?null:a(c,u,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case be:return f.key===T?s(c,u,f,w):null;case Se:return f.key===T?p(c,u,f,w):null;case _e:return T=f._init,m(c,u,T(f._payload),w)}if(Dn(f)||I(f))return T!==null?null:v(c,u,f,w,null);Yr(c,f)}return null}function N(c,u,f,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return c=c.get(f)||null,a(u,c,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case be:return c=c.get(w.key===null?f:w.key)||null,s(u,c,w,T);case Se:return c=c.get(w.key===null?f:w.key)||null,p(u,c,w,T);case _e:var P=w._init;return N(c,u,f,P(w._payload),T)}if(Dn(w)||I(w))return c=c.get(f)||null,v(u,c,w,T,null);Yr(u,w)}return null}function L(c,u,f,w){for(var T=null,P=null,C=u,_=u=0,he=null;C!==null&&_<f.length;_++){C.index>_?(he=C,C=null):he=C.sibling;var O=m(c,C,f[_],w);if(O===null){C===null&&(C=he);break}e&&C&&O.alternate===null&&t(c,C),u=o(O,u,_),P===null?T=O:P.sibling=O,P=O,C=he}if(_===f.length)return n(c,C),b&&Xt(c,_),T;if(C===null){for(;_<f.length;_++)C=g(c,f[_],w),C!==null&&(u=o(C,u,_),P===null?T=C:P.sibling=C,P=C);return b&&Xt(c,_),T}for(C=r(c,C);_<f.length;_++)he=N(C,c,_,f[_],w),he!==null&&(e&&he.alternate!==null&&C.delete(he.key===null?_:he.key),u=o(he,u,_),P===null?T=he:P.sibling=he,P=he);return e&&C.forEach(function(Vt){return t(c,Vt)}),b&&Xt(c,_),T}function S(c,u,f,w){var T=I(f);if(typeof T!="function")throw Error(h(150));if(f=T.call(f),f==null)throw Error(h(151));for(var P=T=null,C=u,_=u=0,he=null,O=f.next();C!==null&&!O.done;_++,O=f.next()){C.index>_?(he=C,C=null):he=C.sibling;var Vt=m(c,C,O.value,w);if(Vt===null){C===null&&(C=he);break}e&&C&&Vt.alternate===null&&t(c,C),u=o(Vt,u,_),P===null?T=Vt:P.sibling=Vt,P=Vt,C=he}if(O.done)return n(c,C),b&&Xt(c,_),T;if(C===null){for(;!O.done;_++,O=f.next())O=g(c,O.value,w),O!==null&&(u=o(O,u,_),P===null?T=O:P.sibling=O,P=O);return b&&Xt(c,_),T}for(C=r(c,C);!O.done;_++,O=f.next())O=N(C,c,_,O.value,w),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?_:O.key),u=o(O,u,_),P===null?T=O:P.sibling=O,P=O);return e&&C.forEach(function(Cc){return t(c,Cc)}),b&&Xt(c,_),T}function le(c,u,f,w){if(typeof f=="object"&&f!==null&&f.type===Ie&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case be:e:{for(var T=f.key,P=u;P!==null;){if(P.key===T){if(T=f.type,T===Ie){if(P.tag===7){n(c,P.sibling),u=i(P,f.props.children),u.return=c,c=u;break e}}else if(P.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===_e&&es(T)===P.type){n(c,P.sibling),u=i(P,f.props),u.ref=rr(c,P,f),u.return=c,c=u;break e}n(c,P);break}else t(c,P);P=P.sibling}f.type===Ie?(u=ln(f.props.children,c.mode,w,f.key),u.return=c,c=u):(w=xi(f.type,f.key,f.props,null,c.mode,w),w.ref=rr(c,u,f),w.return=c,c=w)}return l(c);case Se:e:{for(P=f.key;u!==null;){if(u.key===P)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(c,u.sibling),u=i(u,f.children||[]),u.return=c,c=u;break e}else{n(c,u);break}else t(c,u);u=u.sibling}u=gl(f,c.mode,w),u.return=c,c=u}return l(c);case _e:return P=f._init,le(c,u,P(f._payload),w)}if(Dn(f))return L(c,u,f,w);if(I(f))return S(c,u,f,w);Yr(c,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(c,u.sibling),u=i(u,f),u.return=c,c=u):(n(c,u),u=vl(f,c.mode,w),u.return=c,c=u),l(c)):n(c,u)}return le}var kn=ts(!0),ns=ts(!1),Xr=Ft(null),Jr=null,Ln=null,Po=null;function Co(){Po=Ln=Jr=null}function Io(e){var t=Xr.current;G(Xr),e._currentValue=t}function _o(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sn(e,t){Jr=e,Po=Ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ue=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(Po!==e)if(e={context:e,memoizedValue:t,next:null},Ln===null){if(Jr===null)throw Error(h(308));Ln=e,Jr.dependencies={lanes:0,firstContext:e}}else Ln=Ln.next=e;return t}var Jt=null;function Ro(e){Jt===null?Jt=[e]:Jt.push(e)}function rs(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ro(t)):(n.next=i.next,i.next=n),t.interleaved=n,Et(e,r)}function Et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bt=!1;function Do(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function is(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(z&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Et(e,n)}return i=r.interleaved,i===null?(t.next=t,Ro(r)):(t.next=i.next,i.next=t),r.interleaved=t,Et(e,n)}function br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vi(e,n)}}function os(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ei(e,t,n,r){var i=e.updateQueue;Bt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,p=s.next;s.next=null,l===null?o=p:l.next=p,l=s;var v=e.alternate;v!==null&&(v=v.updateQueue,a=v.lastBaseUpdate,a!==l&&(a===null?v.firstBaseUpdate=p:a.next=p,v.lastBaseUpdate=s))}if(o!==null){var g=i.baseState;l=0,v=p=s=null,a=o;do{var m=a.lane,N=a.eventTime;if((r&m)===m){v!==null&&(v=v.next={eventTime:N,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var L=e,S=a;switch(m=t,N=n,S.tag){case 1:if(L=S.payload,typeof L=="function"){g=L.call(N,g,m);break e}g=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=S.payload,m=typeof L=="function"?L.call(N,g,m):L,m==null)break e;g=k({},g,m);break e;case 2:Bt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else N={eventTime:N,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},v===null?(p=v=N,s=g):v=v.next=N,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(v===null&&(s=g),i.baseState=s,i.firstBaseUpdate=p,i.lastBaseUpdate=v,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);tn|=l,e.lanes=l,e.memoizedState=g}}function ls(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(h(191,i));i.call(r)}}}var ir={},pt=Ft(ir),or=Ft(ir),lr=Ft(ir);function bt(e){if(e===ir)throw Error(h(174));return e}function Uo(e,t){switch($(lr,t),$(or,e),$(pt,ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ui(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ui(t,e)}G(pt),$(pt,t)}function Tn(){G(pt),G(or),G(lr)}function as(e){bt(lr.current);var t=bt(pt.current),n=Ui(t,e.type);t!==n&&($(or,e),$(pt,n))}function Fo(e){or.current===e&&(G(pt),G(or))}var te=Ft(0);function ti(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ao=[];function zo(){for(var e=0;e<Ao.length;e++)Ao[e]._workInProgressVersionPrimary=null;Ao.length=0}var ni=we.ReactCurrentDispatcher,Bo=we.ReactCurrentBatchConfig,en=0,ne=null,se=null,fe=null,ri=!1,ar=!1,sr=0,Yd=0;function Ne(){throw Error(h(321))}function Mo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,o){if(en=o,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ni.current=e===null||e.memoizedState===null?ec:tc,e=n(r,i),ar){o=0;do{if(ar=!1,sr=0,25<=o)throw Error(h(301));o+=1,fe=se=null,t.updateQueue=null,ni.current=nc,e=n(r,i)}while(ar)}if(ni.current=li,t=se!==null&&se.next!==null,en=0,fe=se=ne=null,ri=!1,t)throw Error(h(300));return e}function qo(){var e=sr!==0;return sr=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?ne.memoizedState=fe=e:fe=fe.next=e,fe}function Ge(){if(se===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=fe===null?ne.memoizedState:fe.next;if(t!==null)fe=t,se=e;else{if(e===null)throw Error(h(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},fe===null?ne.memoizedState=fe=e:fe=fe.next=e}return fe}function ur(e,t){return typeof t=="function"?t(e):t}function Wo(e){var t=Ge(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=se,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,p=o;do{var v=p.lane;if((en&v)===v)s!==null&&(s=s.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var g={lane:v,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};s===null?(a=s=g,l=r):s=s.next=g,ne.lanes|=v,tn|=v}p=p.next}while(p!==null&&p!==o);s===null?l=r:s.next=a,nt(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ne.lanes|=o,tn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function jo(e){var t=Ge(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);nt(o,t.memoizedState)||(Ue=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ss(){}function us(e,t){var n=ne,r=Ge(),i=t(),o=!nt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ue=!0),r=r.queue,Qo(fs.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,dr(9,cs.bind(null,n,r,i,t),void 0,null),pe===null)throw Error(h(349));(en&30)!==0||ds(n,t,i)}return i}function ds(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cs(e,t,n,r){t.value=n,t.getSnapshot=r,ps(t)&&hs(e)}function fs(e,t,n){return n(function(){ps(t)&&hs(e)})}function ps(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function hs(e){var t=Et(e,1);t!==null&&at(t,e,1,-1)}function ms(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:e},t.queue=e,e=e.dispatch=bd.bind(null,ne,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ys(){return Ge().memoizedState}function ii(e,t,n,r){var i=ht();ne.flags|=e,i.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function oi(e,t,n,r){var i=Ge();r=r===void 0?null:r;var o=void 0;if(se!==null){var l=se.memoizedState;if(o=l.destroy,r!==null&&Mo(r,l.deps)){i.memoizedState=dr(t,n,o,r);return}}ne.flags|=e,i.memoizedState=dr(1|t,n,o,r)}function vs(e,t){return ii(8390656,8,e,t)}function Qo(e,t){return oi(2048,8,e,t)}function gs(e,t){return oi(4,2,e,t)}function ws(e,t){return oi(4,4,e,t)}function xs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ns(e,t,n){return n=n!=null?n.concat([e]):null,oi(4,4,xs.bind(null,t,e),n)}function Ho(){}function Es(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ks(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ls(e,t,n){return(en&21)===0?(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=n):(nt(n,t)||(n=ea(),ne.lanes|=n,tn|=n,e.baseState=!0),t)}function Xd(e,t){var n=j;j=n!==0&&4>n?n:4,e(!0);var r=Bo.transition;Bo.transition={};try{e(!1),t()}finally{j=n,Bo.transition=r}}function Ss(){return Ge().memoizedState}function Jd(e,t,n){var r=jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ts(e))Ps(t,n);else if(n=rs(e,t,n,r),n!==null){var i=Pe();at(n,e,r,i),Cs(n,t,r)}}function bd(e,t,n){var r=jt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ts(e))Ps(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,nt(a,l)){var s=t.interleaved;s===null?(i.next=i,Ro(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=rs(e,t,i,r),n!==null&&(i=Pe(),at(n,e,r,i),Cs(n,t,r))}}function Ts(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Ps(e,t){ar=ri=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cs(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vi(e,n)}}var li={readContext:Ke,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},ec={readContext:Ke,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:vs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ii(4194308,4,xs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ii(4194308,4,e,t)},useInsertionEffect:function(e,t){return ii(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Jd.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:ms,useDebugValue:Ho,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=ms(!1),t=e[0];return e=Xd.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,i=ht();if(b){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),pe===null)throw Error(h(349));(en&30)!==0||ds(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,vs(fs.bind(null,r,o,e),[e]),r.flags|=2048,dr(9,cs.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ht(),t=pe.identifierPrefix;if(b){var n=Nt,r=xt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Yd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tc={readContext:Ke,useCallback:Es,useContext:Ke,useEffect:Qo,useImperativeHandle:Ns,useInsertionEffect:gs,useLayoutEffect:ws,useMemo:ks,useReducer:Wo,useRef:ys,useState:function(){return Wo(ur)},useDebugValue:Ho,useDeferredValue:function(e){var t=Ge();return Ls(t,se.memoizedState,e)},useTransition:function(){var e=Wo(ur)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:ss,useSyncExternalStore:us,useId:Ss,unstable_isNewReconciler:!1},nc={readContext:Ke,useCallback:Es,useContext:Ke,useEffect:Qo,useImperativeHandle:Ns,useInsertionEffect:gs,useLayoutEffect:ws,useMemo:ks,useReducer:jo,useRef:ys,useState:function(){return jo(ur)},useDebugValue:Ho,useDeferredValue:function(e){var t=Ge();return se===null?t.memoizedState=e:Ls(t,se.memoizedState,e)},useTransition:function(){var e=jo(ur)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:ss,useSyncExternalStore:us,useId:Ss,unstable_isNewReconciler:!1};function it(e,t){if(e&&e.defaultProps){t=k({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:k({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ai={isMounted:function(e){return(e=e._reactInternals)?Zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=jt(e),o=kt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Mt(e,o,i),t!==null&&(at(t,e,i,r),br(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=jt(e),o=kt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Mt(e,o,i),t!==null&&(at(t,e,i,r),br(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=jt(e),i=kt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Mt(e,i,r),t!==null&&(at(t,e,r,n),br(t,e,r))}};function Is(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(i,o):!0}function _s(e,t,n){var r=!1,i=At,o=t.contextType;return typeof o=="object"&&o!==null?o=Ke(o):(i=De(t)?Gt:xe.current,r=t.contextTypes,o=(r=r!=null)?wn(e,i):At),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ai,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Rs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ai.enqueueReplaceState(t,t.state,null)}function $o(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Do(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ke(o):(o=De(t)?Gt:xe.current,i.context=wn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Vo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ai.enqueueReplaceState(i,i.state,null),ei(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Pn(e,t){try{var n="",r=t;do n+=B(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Zo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ko(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rc=typeof WeakMap=="function"?WeakMap:Map;function Ds(e,t,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){hi||(hi=!0,ul=r),Ko(e,t)},n}function Us(e,t,n){n=kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ko(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ko(e,t),typeof r!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Fs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rc;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=vc.bind(null,e,t,n),t.then(e,e))}function As(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zs(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kt(-1,1),t.tag=2,Mt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ic=we.ReactCurrentOwner,Ue=!1;function Te(e,t,n,r){t.child=e===null?ns(t,null,n,r):kn(t,e.child,n,r)}function Bs(e,t,n,r,i){n=n.render;var o=t.ref;return Sn(t,i),r=Oo(e,t,n,r,o,i),n=qo(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Lt(e,t,i)):(b&&n&&Eo(t),t.flags|=1,Te(e,t,r,i),t.child)}function Ms(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!yl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Os(e,t,o,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(l,r)&&e.ref===t.ref)return Lt(e,t,i)}return t.flags|=1,e=Ht(o,r),e.ref=t.ref,e.return=t,t.child=e}function Os(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Yn(o,r)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,Lt(e,t,i)}return Go(e,t,n,r,i)}function qs(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(In,je),je|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$(In,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,$(In,je),je|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,$(In,je),je|=r;return Te(e,t,i,n),t.child}function Ws(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Go(e,t,n,r,i){var o=De(n)?Gt:xe.current;return o=wn(t,o),Sn(t,i),n=Oo(e,t,n,r,o,i),r=qo(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Lt(e,t,i)):(b&&r&&Eo(t),t.flags|=1,Te(e,t,n,i),t.child)}function js(e,t,n,r,i){if(De(n)){var o=!0;Vr(t)}else o=!1;if(Sn(t,i),t.stateNode===null)ui(e,t),_s(t,n,r),$o(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,p=n.contextType;typeof p=="object"&&p!==null?p=Ke(p):(p=De(n)?Gt:xe.current,p=wn(t,p));var v=n.getDerivedStateFromProps,g=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==p)&&Rs(t,l,r,p),Bt=!1;var m=t.memoizedState;l.state=m,ei(t,r,l,i),s=t.memoizedState,a!==r||m!==s||Re.current||Bt?(typeof v=="function"&&(Vo(t,n,v,r),s=t.memoizedState),(a=Bt||Is(t,n,a,r,m,s,p))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=p,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,is(e,t),a=t.memoizedProps,p=t.type===t.elementType?a:it(t.type,a),l.props=p,g=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ke(s):(s=De(n)?Gt:xe.current,s=wn(t,s));var N=n.getDerivedStateFromProps;(v=typeof N=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==g||m!==s)&&Rs(t,l,r,s),Bt=!1,m=t.memoizedState,l.state=m,ei(t,r,l,i);var L=t.memoizedState;a!==g||m!==L||Re.current||Bt?(typeof N=="function"&&(Vo(t,n,N,r),L=t.memoizedState),(p=Bt||Is(t,n,p,r,m,L,s)||!1)?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,L,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,L,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=L),l.props=r,l.state=L,l.context=s,r=p):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Yo(e,t,n,r,o,i)}function Yo(e,t,n,r,i,o){Ws(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Za(t,n,!1),Lt(e,t,o);r=t.stateNode,ic.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=kn(t,e.child,null,o),t.child=kn(t,null,a,o)):Te(e,t,a,o),t.memoizedState=r.state,i&&Za(t,n,!0),t.child}function Qs(e){var t=e.stateNode;t.pendingContext?Va(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Va(e,t.context,!1),Uo(e,t.containerInfo)}function Hs(e,t,n,r,i){return En(),To(i),t.flags|=256,Te(e,t,n,r),t.child}var Xo={dehydrated:null,treeContext:null,retryLane:0};function Jo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vs(e,t,n){var r=t.pendingProps,i=te.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),$(te,i&1),e===null)return So(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ni(l,r,0,null),e=ln(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Jo(n),t.memoizedState=Xo,e):bo(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return oc(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Ht(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ht(a,o):(o=ln(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Jo(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Xo,r}return o=e.child,e=o.sibling,r=Ht(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bo(e,t){return t=Ni({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function si(e,t,n,r){return r!==null&&To(r),kn(t,e.child,null,n),e=bo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function oc(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Zo(Error(h(422))),si(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ni({mode:"visible",children:r.children},i,0,null),o=ln(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&kn(t,e.child,null,l),t.child.memoizedState=Jo(l),t.memoizedState=Xo,o);if((t.mode&1)===0)return si(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(h(419)),r=Zo(o,r,void 0),si(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ue||a){if(r=pe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|l))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Et(e,i),at(r,e,i,-1))}return ml(),r=Zo(Error(h(421))),si(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=gc.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,We=Ut(i.nextSibling),qe=t,b=!0,rt=null,e!==null&&($e[Ze++]=xt,$e[Ze++]=Nt,$e[Ze++]=Yt,xt=e.id,Nt=e.overflow,Yt=t),t=bo(t,r.children),t.flags|=4096,t)}function $s(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_o(e.return,t,n)}function el(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Zs(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Te(e,t,r.children,n),r=te.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$s(e,n,t);else if(e.tag===19)$s(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(te,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ti(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),el(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ti(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}el(t,!0,n,null,o);break;case"together":el(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ui(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function lc(e,t,n){switch(t.tag){case 3:Qs(t),En();break;case 5:as(t);break;case 1:De(t.type)&&Vr(t);break;case 4:Uo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;$(Xr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($(te,te.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Vs(e,t,n):($(te,te.current&1),e=Lt(e,t,n),e!==null?e.sibling:null);$(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Zs(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,qs(e,t,n)}return Lt(e,t,n)}var Ks,tl,Gs,Ys;Ks=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},tl=function(){},Gs=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,bt(pt.current);var o=null;switch(n){case"input":i=Ii(e,i),r=Ii(e,r),o=[];break;case"select":i=k({},i,{value:void 0}),r=k({},r,{value:void 0}),o=[];break;case"textarea":i=Di(e,i),r=Di(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=jr)}Fi(n,r);var l;n=null;for(p in i)if(!r.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var a=i[p];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(D.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in r){var s=r[p];if(a=i!=null?i[p]:void 0,r.hasOwnProperty(p)&&s!==a&&(s!=null||a!=null))if(p==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(p,n)),n=s;else p==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(p,s)):p==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(p,""+s):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(D.hasOwnProperty(p)?(s!=null&&p==="onScroll"&&K("scroll",e),o||a===s||(o=[])):(o=o||[]).push(p,s))}n&&(o=o||[]).push("style",n);var p=o;(t.updateQueue=p)&&(t.flags|=4)}},Ys=function(e,t,n,r){n!==r&&(t.flags|=4)};function cr(e,t){if(!b)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ac(e,t,n){var r=t.pendingProps;switch(ko(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return De(t.type)&&Hr(),Ee(t),null;case 3:return r=t.stateNode,Tn(),G(Re),G(xe),zo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Gr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rt!==null&&(fl(rt),rt=null))),tl(e,t),Ee(t),null;case 5:Fo(t);var i=bt(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)Gs(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(h(166));return Ee(t),null}if(e=bt(pt.current),Gr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ft]=t,r[tr]=o,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<Jn.length;i++)K(Jn[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":_l(r,o),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},K("invalid",r);break;case"textarea":Ul(r,o),K("invalid",r)}Fi(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Wr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Wr(r.textContent,a,e),i=["children",""+a]):D.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&K("scroll",r)}switch(n){case"input":gr(r),Dl(r,o,!0);break;case"textarea":gr(r),Al(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=jr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ft]=t,e[tr]=r,Ks(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ai(n,r),n){case"dialog":K("cancel",e),K("close",e),i=r;break;case"iframe":case"object":case"embed":K("load",e),i=r;break;case"video":case"audio":for(i=0;i<Jn.length;i++)K(Jn[i],e);i=r;break;case"source":K("error",e),i=r;break;case"img":case"image":case"link":K("error",e),K("load",e),i=r;break;case"details":K("toggle",e),i=r;break;case"input":_l(e,r),i=Ii(e,r),K("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=k({},r,{value:void 0}),K("invalid",e);break;case"textarea":Ul(e,r),i=Di(e,r),K("invalid",e);break;default:i=r}Fi(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Ol(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Bl(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Un(e,s):typeof s=="number"&&Un(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(D.hasOwnProperty(o)?s!=null&&o==="onScroll"&&K("scroll",e):s!=null&&Je(e,o,s,l))}switch(n){case"input":gr(e),Dl(e,r,!1);break;case"textarea":gr(e),Al(e);break;case"option":r.value!=null&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?an(e,!!r.multiple,o,!1):r.defaultValue!=null&&an(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)Ys(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(h(166));if(n=bt(lr.current),bt(pt.current),Gr(t)){if(r=t.stateNode,n=t.memoizedProps,r[ft]=t,(o=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:Wr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=t,t.stateNode=r}return Ee(t),null;case 13:if(G(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(b&&We!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ba(),En(),t.flags|=98560,o=!1;else if(o=Gr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(h(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(h(317));o[ft]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),o=!1}else rt!==null&&(fl(rt),rt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(te.current&1)!==0?ue===0&&(ue=3):ml())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return Tn(),tl(e,t),e===null&&bn(t.stateNode.containerInfo),Ee(t),null;case 10:return Io(t.type._context),Ee(t),null;case 17:return De(t.type)&&Hr(),Ee(t),null;case 19:if(G(te),o=t.memoizedState,o===null)return Ee(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)cr(o,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ti(e),l!==null){for(t.flags|=128,cr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(te,te.current&1|2),t.child}e=e.sibling}o.tail!==null&&oe()>_n&&(t.flags|=128,r=!0,cr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ti(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),cr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!b)return Ee(t),null}else 2*oe()-o.renderingStartTime>_n&&n!==1073741824&&(t.flags|=128,r=!0,cr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=oe(),t.sibling=null,n=te.current,$(te,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return hl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(je&1073741824)!==0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function sc(e,t){switch(ko(t),t.tag){case 1:return De(t.type)&&Hr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(),G(Re),G(xe),zo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Fo(t),null;case 13:if(G(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(te),null;case 4:return Tn(),null;case 10:return Io(t.type._context),null;case 22:case 23:return hl(),null;case 24:return null;default:return null}}var di=!1,ke=!1,uc=typeof WeakSet=="function"?WeakSet:Set,E=null;function Cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function nl(e,t,n){try{n()}catch(r){ie(e,t,r)}}var Xs=!1;function dc(e,t){if(ho=_r,e=Ia(),oo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,p=0,v=0,g=e,m=null;t:for(;;){for(var N;g!==n||i!==0&&g.nodeType!==3||(a=l+i),g!==o||r!==0&&g.nodeType!==3||(s=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(N=g.firstChild)!==null;)m=g,g=N;for(;;){if(g===e)break t;if(m===n&&++p===i&&(a=l),m===o&&++v===r&&(s=l),(N=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=N}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(mo={focusedElem:e,selectionRange:n},_r=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var L=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(L!==null){var S=L.memoizedProps,le=L.memoizedState,c=t.stateNode,u=c.getSnapshotBeforeUpdate(t.elementType===t.type?S:it(t.type,S),le);c.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(w){ie(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return L=Xs,Xs=!1,L}function fr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&nl(t,n,o)}i=i.next}while(i!==r)}}function ci(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function rl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Js(e){var t=e.alternate;t!==null&&(e.alternate=null,Js(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[tr],delete t[wo],delete t[$d],delete t[Zd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bs(e){return e.tag===5||e.tag===3||e.tag===4}function eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jr));else if(r!==4&&(e=e.child,e!==null))for(il(e,t,n),e=e.sibling;e!==null;)il(e,t,n),e=e.sibling}function ol(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ol(e,t,n),e=e.sibling;e!==null;)ol(e,t,n),e=e.sibling}var me=null,ot=!1;function Ot(e,t,n){for(n=n.child;n!==null;)tu(e,t,n),n=n.sibling}function tu(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Lr,n)}catch{}switch(n.tag){case 5:ke||Cn(n,t);case 6:var r=me,i=ot;me=null,Ot(e,t,n),me=r,ot=i,me!==null&&(ot?(e=me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(ot?(e=me,n=n.stateNode,e.nodeType===8?go(e.parentNode,n):e.nodeType===1&&go(e,n),Hn(e)):go(me,n.stateNode));break;case 4:r=me,i=ot,me=n.stateNode.containerInfo,ot=!0,Ot(e,t,n),me=r,ot=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&nl(n,t,l),i=i.next}while(i!==r)}Ot(e,t,n);break;case 1:if(!ke&&(Cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ie(n,t,a)}Ot(e,t,n);break;case 21:Ot(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,Ot(e,t,n),ke=r):Ot(e,t,n);break;default:Ot(e,t,n)}}function nu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new uc),t.forEach(function(r){var i=wc.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:me=a.stateNode,ot=!1;break e;case 3:me=a.stateNode.containerInfo,ot=!0;break e;case 4:me=a.stateNode.containerInfo,ot=!0;break e}a=a.return}if(me===null)throw Error(h(160));tu(o,l,i),me=null,ot=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(p){ie(i,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ru(t,e),t=t.sibling}function ru(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),mt(e),r&4){try{fr(3,e,e.return),ci(3,e)}catch(S){ie(e,e.return,S)}try{fr(5,e,e.return)}catch(S){ie(e,e.return,S)}}break;case 1:lt(t,e),mt(e),r&512&&n!==null&&Cn(n,n.return);break;case 5:if(lt(t,e),mt(e),r&512&&n!==null&&Cn(n,n.return),e.flags&32){var i=e.stateNode;try{Un(i,"")}catch(S){ie(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Rl(i,o),Ai(a,l);var p=Ai(a,o);for(l=0;l<s.length;l+=2){var v=s[l],g=s[l+1];v==="style"?Ol(i,g):v==="dangerouslySetInnerHTML"?Bl(i,g):v==="children"?Un(i,g):Je(i,v,g,p)}switch(a){case"input":_i(i,o);break;case"textarea":Fl(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var N=o.value;N!=null?an(i,!!o.multiple,N,!1):m!==!!o.multiple&&(o.defaultValue!=null?an(i,!!o.multiple,o.defaultValue,!0):an(i,!!o.multiple,o.multiple?[]:"",!1))}i[tr]=o}catch(S){ie(e,e.return,S)}}break;case 6:if(lt(t,e),mt(e),r&4){if(e.stateNode===null)throw Error(h(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(S){ie(e,e.return,S)}}break;case 3:if(lt(t,e),mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hn(t.containerInfo)}catch(S){ie(e,e.return,S)}break;case 4:lt(t,e),mt(e);break;case 13:lt(t,e),mt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(sl=oe())),r&4&&nu(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(p=ke)||v,lt(t,e),ke=p):lt(t,e),mt(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!v&&(e.mode&1)!==0)for(E=e,v=e.child;v!==null;){for(g=E=v;E!==null;){switch(m=E,N=m.child,m.tag){case 0:case 11:case 14:case 15:fr(4,m,m.return);break;case 1:Cn(m,m.return);var L=m.stateNode;if(typeof L.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,L.props=t.memoizedProps,L.state=t.memoizedState,L.componentWillUnmount()}catch(S){ie(r,n,S)}}break;case 5:Cn(m,m.return);break;case 22:if(m.memoizedState!==null){lu(g);continue}}N!==null?(N.return=m,E=N):lu(g)}v=v.sibling}e:for(v=null,g=e;;){if(g.tag===5){if(v===null){v=g;try{i=g.stateNode,p?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=g.stateNode,s=g.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Ml("display",l))}catch(S){ie(e,e.return,S)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=p?"":g.memoizedProps}catch(S){ie(e,e.return,S)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:lt(t,e),mt(e),r&4&&nu(e);break;case 21:break;default:lt(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bs(n)){var r=n;break e}n=n.return}throw Error(h(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Un(i,""),r.flags&=-33);var o=eu(e);ol(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=eu(e);il(e,a,l);break;default:throw Error(h(161))}}catch(s){ie(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cc(e,t,n){E=e,iu(e)}function iu(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||di;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||ke;a=di;var p=ke;if(di=l,(ke=s)&&!p)for(E=i;E!==null;)l=E,s=l.child,l.tag===22&&l.memoizedState!==null?au(i):s!==null?(s.return=l,E=s):au(i);for(;o!==null;)E=o,iu(o),o=o.sibling;E=i,di=a,ke=p}ou(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,E=o):ou(e)}}function ou(e){for(;E!==null;){var t=E;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ke||ci(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ls(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ls(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var v=p.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&Hn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}ke||t.flags&512&&rl(t)}catch(m){ie(t,t.return,m)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function lu(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function au(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ci(4,t)}catch(s){ie(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ie(t,i,s)}}var o=t.return;try{rl(t)}catch(s){ie(t,o,s)}break;case 5:var l=t.return;try{rl(t)}catch(s){ie(t,l,s)}}}catch(s){ie(t,t.return,s)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var fc=Math.ceil,fi=we.ReactCurrentDispatcher,ll=we.ReactCurrentOwner,Ye=we.ReactCurrentBatchConfig,z=0,pe=null,ae=null,ye=0,je=0,In=Ft(0),ue=0,pr=null,tn=0,pi=0,al=0,hr=null,Fe=null,sl=0,_n=1/0,St=null,hi=!1,ul=null,qt=null,mi=!1,Wt=null,yi=0,mr=0,dl=null,vi=-1,gi=0;function Pe(){return(z&6)!==0?oe():vi!==-1?vi:vi=oe()}function jt(e){return(e.mode&1)===0?1:(z&2)!==0&&ye!==0?ye&-ye:Gd.transition!==null?(gi===0&&(gi=ea()),gi):(e=j,e!==0||(e=window.event,e=e===void 0?16:ua(e.type)),e)}function at(e,t,n,r){if(50<mr)throw mr=0,dl=null,Error(h(185));On(e,n,r),((z&2)===0||e!==pe)&&(e===pe&&((z&2)===0&&(pi|=n),ue===4&&Qt(e,ye)),Ae(e,r),n===1&&z===0&&(t.mode&1)===0&&(_n=oe()+500,$r&&zt()))}function Ae(e,t){var n=e.callbackNode;Gu(e,t);var r=Pr(e,e===pe?ye:0);if(r===0)n!==null&&Xl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xl(n),t===1)e.tag===0?Kd(uu.bind(null,e)):Ka(uu.bind(null,e)),Hd(function(){(z&6)===0&&zt()}),n=null;else{switch(ta(r)){case 1:n=ji;break;case 4:n=Jl;break;case 16:n=kr;break;case 536870912:n=bl;break;default:n=kr}n=vu(n,su.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function su(e,t){if(vi=-1,gi=0,(z&6)!==0)throw Error(h(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=Pr(e,e===pe?ye:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=wi(e,r);else{t=r;var i=z;z|=2;var o=cu();(pe!==e||ye!==t)&&(St=null,_n=oe()+500,rn(e,t));do try{mc();break}catch(a){du(e,a)}while(!0);Co(),fi.current=o,z=i,ae!==null?t=0:(pe=null,ye=0,t=ue)}if(t!==0){if(t===2&&(i=Qi(e),i!==0&&(r=i,t=cl(e,i))),t===1)throw n=pr,rn(e,0),Qt(e,r),Ae(e,oe()),n;if(t===6)Qt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!pc(i)&&(t=wi(e,r),t===2&&(o=Qi(e),o!==0&&(r=o,t=cl(e,o))),t===1))throw n=pr,rn(e,0),Qt(e,r),Ae(e,oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(h(345));case 2:on(e,Fe,St);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=sl+500-oe(),10<t)){if(Pr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vo(on.bind(null,e,Fe,St),t);break}on(e,Fe,St);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-tt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fc(r/1960))-r,10<r){e.timeoutHandle=vo(on.bind(null,e,Fe,St),r);break}on(e,Fe,St);break;case 5:on(e,Fe,St);break;default:throw Error(h(329))}}}return Ae(e,oe()),e.callbackNode===n?su.bind(null,e):null}function cl(e,t){var n=hr;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=wi(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&fl(t)),e}function fl(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function pc(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!nt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~al,t&=~pi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function uu(e){if((z&6)!==0)throw Error(h(327));Rn();var t=Pr(e,0);if((t&1)===0)return Ae(e,oe()),null;var n=wi(e,t);if(e.tag!==0&&n===2){var r=Qi(e);r!==0&&(t=r,n=cl(e,r))}if(n===1)throw n=pr,rn(e,0),Qt(e,t),Ae(e,oe()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,Fe,St),Ae(e,oe()),null}function pl(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(_n=oe()+500,$r&&zt())}}function nn(e){Wt!==null&&Wt.tag===0&&(z&6)===0&&Rn();var t=z;z|=1;var n=Ye.transition,r=j;try{if(Ye.transition=null,j=1,e)return e()}finally{j=r,Ye.transition=n,z=t,(z&6)===0&&zt()}}function hl(){je=In.current,G(In)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qd(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(ko(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:Tn(),G(Re),G(xe),zo();break;case 5:Fo(r);break;case 4:Tn();break;case 13:G(te);break;case 19:G(te);break;case 10:Io(r.type._context);break;case 22:case 23:hl()}n=n.return}if(pe=e,ae=e=Ht(e.current,null),ye=je=t,ue=0,pr=null,al=pi=tn=0,Fe=hr=null,Jt!==null){for(t=0;t<Jt.length;t++)if(n=Jt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Jt=null}return e}function du(e,t){do{var n=ae;try{if(Co(),ni.current=li,ri){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ri=!1}if(en=0,fe=se=ne=null,ar=!1,sr=0,ll.current=null,n===null||n.return===null){ue=1,pr=t,ae=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=ye,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=s,v=a,g=v.tag;if((v.mode&1)===0&&(g===0||g===11||g===15)){var m=v.alternate;m?(v.updateQueue=m.updateQueue,v.memoizedState=m.memoizedState,v.lanes=m.lanes):(v.updateQueue=null,v.memoizedState=null)}var N=As(l);if(N!==null){N.flags&=-257,zs(N,l,a,o,t),N.mode&1&&Fs(o,p,t),t=N,s=p;var L=t.updateQueue;if(L===null){var S=new Set;S.add(s),t.updateQueue=S}else L.add(s);break e}else{if((t&1)===0){Fs(o,p,t),ml();break e}s=Error(h(426))}}else if(b&&a.mode&1){var le=As(l);if(le!==null){(le.flags&65536)===0&&(le.flags|=256),zs(le,l,a,o,t),To(Pn(s,a));break e}}o=s=Pn(s,a),ue!==4&&(ue=2),hr===null?hr=[o]:hr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var c=Ds(o,s,t);os(o,c);break e;case 1:a=s;var u=o.type,f=o.stateNode;if((o.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(qt===null||!qt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Us(o,a,t);os(o,w);break e}}o=o.return}while(o!==null)}pu(n)}catch(T){t=T,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function cu(){var e=fi.current;return fi.current=li,e===null?li:e}function ml(){(ue===0||ue===3||ue===2)&&(ue=4),pe===null||(tn&268435455)===0&&(pi&268435455)===0||Qt(pe,ye)}function wi(e,t){var n=z;z|=2;var r=cu();(pe!==e||ye!==t)&&(St=null,rn(e,t));do try{hc();break}catch(i){du(e,i)}while(!0);if(Co(),z=n,fi.current=r,ae!==null)throw Error(h(261));return pe=null,ye=0,ue}function hc(){for(;ae!==null;)fu(ae)}function mc(){for(;ae!==null&&!qu();)fu(ae)}function fu(e){var t=yu(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?pu(e):ae=t,ll.current=null}function pu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=ac(n,t,je),n!==null){ae=n;return}}else{if(n=sc(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,ae=null;return}}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);ue===0&&(ue=5)}function on(e,t,n){var r=j,i=Ye.transition;try{Ye.transition=null,j=1,yc(e,t,n,r)}finally{Ye.transition=i,j=r}return null}function yc(e,t,n,r){do Rn();while(Wt!==null);if((z&6)!==0)throw Error(h(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Yu(e,o),e===pe&&(ae=pe=null,ye=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||mi||(mi=!0,vu(kr,function(){return Rn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=Ye.transition,Ye.transition=null;var l=j;j=1;var a=z;z|=4,ll.current=null,dc(e,n),ru(n,e),zd(mo),_r=!!ho,mo=ho=null,e.current=n,cc(n),Wu(),z=a,j=l,Ye.transition=o}else e.current=n;if(mi&&(mi=!1,Wt=e,yi=i),o=e.pendingLanes,o===0&&(qt=null),Hu(n.stateNode),Ae(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(hi)throw hi=!1,e=ul,ul=null,e;return(yi&1)!==0&&e.tag!==0&&Rn(),o=e.pendingLanes,(o&1)!==0?e===dl?mr++:(mr=0,dl=e):mr=0,zt(),null}function Rn(){if(Wt!==null){var e=ta(yi),t=Ye.transition,n=j;try{if(Ye.transition=null,j=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,yi=0,(z&6)!==0)throw Error(h(331));var i=z;for(z|=4,E=e.current;E!==null;){var o=E,l=o.child;if((E.flags&16)!==0){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var p=a[s];for(E=p;E!==null;){var v=E;switch(v.tag){case 0:case 11:case 15:fr(8,v,o)}var g=v.child;if(g!==null)g.return=v,E=g;else for(;E!==null;){v=E;var m=v.sibling,N=v.return;if(Js(v),v===p){E=null;break}if(m!==null){m.return=N,E=m;break}E=N}}}var L=o.alternate;if(L!==null){var S=L.child;if(S!==null){L.child=null;do{var le=S.sibling;S.sibling=null,S=le}while(S!==null)}}E=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,E=l;else e:for(;E!==null;){if(o=E,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:fr(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,E=c;break e}E=o.return}}var u=e.current;for(E=u;E!==null;){l=E;var f=l.child;if((l.subtreeFlags&2064)!==0&&f!==null)f.return=l,E=f;else e:for(l=u;E!==null;){if(a=E,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:ci(9,a)}}catch(T){ie(a,a.return,T)}if(a===l){E=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,E=w;break e}E=a.return}}if(z=i,zt(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Lr,e)}catch{}r=!0}return r}finally{j=n,Ye.transition=t}}return!1}function hu(e,t,n){t=Pn(n,t),t=Ds(e,t,1),e=Mt(e,t,1),t=Pe(),e!==null&&(On(e,1,t),Ae(e,t))}function ie(e,t,n){if(e.tag===3)hu(e,e,n);else for(;t!==null;){if(t.tag===3){hu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qt===null||!qt.has(r))){e=Pn(n,e),e=Us(t,e,1),t=Mt(t,e,1),e=Pe(),t!==null&&(On(t,1,e),Ae(t,e));break}}t=t.return}}function vc(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(ye&n)===n&&(ue===4||ue===3&&(ye&130023424)===ye&&500>oe()-sl?rn(e,0):al|=n),Ae(e,t)}function mu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Tr,Tr<<=1,(Tr&130023424)===0&&(Tr=4194304)));var n=Pe();e=Et(e,t),e!==null&&(On(e,t,n),Ae(e,n))}function gc(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mu(e,n)}function wc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(t),mu(e,n)}var yu;yu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Ue=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ue=!1,lc(e,t,n);Ue=(e.flags&131072)!==0}else Ue=!1,b&&(t.flags&1048576)!==0&&Ga(t,Kr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ui(e,t),e=t.pendingProps;var i=wn(t,xe.current);Sn(t,n),i=Oo(null,t,r,e,i,n);var o=qo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(r)?(o=!0,Vr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Do(t),i.updater=ai,t.stateNode=i,i._reactInternals=t,$o(t,r,e,n),t=Yo(null,t,r,!0,o,n)):(t.tag=0,b&&o&&Eo(t),Te(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ui(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Nc(r),e=it(r,e),i){case 0:t=Go(null,t,r,e,n);break e;case 1:t=js(null,t,r,e,n);break e;case 11:t=Bs(null,t,r,e,n);break e;case 14:t=Ms(null,t,r,it(r.type,e),n);break e}throw Error(h(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Go(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),js(e,t,r,i,n);case 3:e:{if(Qs(t),e===null)throw Error(h(387));r=t.pendingProps,o=t.memoizedState,i=o.element,is(e,t),ei(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Pn(Error(h(423)),t),t=Hs(e,t,r,n,i);break e}else if(r!==i){i=Pn(Error(h(424)),t),t=Hs(e,t,r,n,i);break e}else for(We=Ut(t.stateNode.containerInfo.firstChild),qe=t,b=!0,rt=null,n=ns(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(En(),r===i){t=Lt(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return as(t),e===null&&So(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,yo(r,i)?l=null:o!==null&&yo(r,o)&&(t.flags|=32),Ws(e,t),Te(e,t,l,n),t.child;case 6:return e===null&&So(t),null;case 13:return Vs(e,t,n);case 4:return Uo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kn(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Bs(e,t,r,i,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,$(Xr,r._currentValue),r._currentValue=l,o!==null)if(nt(o.value,l)){if(o.children===i.children&&!Re.current){t=Lt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=kt(-1,n&-n),s.tag=2;var p=o.updateQueue;if(p!==null){p=p.shared;var v=p.pending;v===null?s.next=s:(s.next=v.next,v.next=s),p.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),_o(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(h(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),_o(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Te(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Sn(t,n),i=Ke(i),r=r(i),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,i=it(r,t.pendingProps),i=it(r.type,i),Ms(e,t,r,i,n);case 15:return Os(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),ui(e,t),t.tag=1,De(r)?(e=!0,Vr(t)):e=!1,Sn(t,n),_s(t,r,i),$o(t,r,i,n),Yo(null,t,r,!0,e,n);case 19:return Zs(e,t,n);case 22:return qs(e,t,n)}throw Error(h(156,t.tag))};function vu(e,t){return Yl(e,t)}function xc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(e,t,n,r){return new xc(e,t,n,r)}function yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nc(e){if(typeof e=="function")return yl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ut)return 11;if(e===dt)return 14}return 2}function Ht(e,t){var n=e.alternate;return n===null?(n=Xe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")yl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ie:return ln(n.children,i,o,t);case Ve:l=8,i|=8;break;case Tt:return e=Xe(12,n,t,i|2),e.elementType=Tt,e.lanes=o,e;case Be:return e=Xe(13,n,t,i),e.elementType=Be,e.lanes=o,e;case et:return e=Xe(19,n,t,i),e.elementType=et,e.lanes=o,e;case re:return Ni(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vt:l=10;break e;case $t:l=9;break e;case ut:l=11;break e;case dt:l=14;break e;case _e:l=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=Xe(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ln(e,t,n,r){return e=Xe(7,e,r,t),e.lanes=n,e}function Ni(e,t,n,r){return e=Xe(22,e,r,t),e.elementType=re,e.lanes=n,e.stateNode={isHidden:!1},e}function vl(e,t,n){return e=Xe(6,e,null,t),e.lanes=n,e}function gl(e,t,n){return t=Xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ec(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hi(0),this.expirationTimes=Hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wl(e,t,n,r,i,o,l,a,s){return e=new Ec(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Xe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Do(o),e}function kc(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gu(e){if(!e)return At;e=e._reactInternals;e:{if(Zt(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(De(n))return $a(e,n,t)}return t}function wu(e,t,n,r,i,o,l,a,s){return e=wl(n,r,!0,e,i,o,l,a,s),e.context=gu(null),n=e.current,r=Pe(),i=jt(n),o=kt(r,i),o.callback=t??null,Mt(n,o,i),e.current.lanes=i,On(e,i,r),Ae(e,r),e}function Ei(e,t,n,r){var i=t.current,o=Pe(),l=jt(i);return n=gu(n),t.context===null?t.context=n:t.pendingContext=n,t=kt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Mt(i,t,l),e!==null&&(at(e,i,l,o),br(e,i,l)),l}function ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xl(e,t){xu(e,t),(e=e.alternate)&&xu(e,t)}function Lc(){return null}var Nu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nl(e){this._internalRoot=e}Li.prototype.render=Nl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));Ei(e,t,null,null)},Li.prototype.unmount=Nl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){Ei(null,e,null,null)}),t[gt]=null}};function Li(e){this._internalRoot=e}Li.prototype.unstable_scheduleHydration=function(e){if(e){var t=ia();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&aa(e)}};function El(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Si(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Eu(){}function Sc(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var p=ki(l);o.call(p)}}var l=wu(t,r,e,0,null,!1,!1,"",Eu);return e._reactRootContainer=l,e[gt]=l.current,bn(e.nodeType===8?e.parentNode:e),nn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var p=ki(s);a.call(p)}}var s=wl(e,0,!1,null,null,!1,!1,"",Eu);return e._reactRootContainer=s,e[gt]=s.current,bn(e.nodeType===8?e.parentNode:e),nn(function(){Ei(t,s,n,r)}),s}function Ti(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=ki(l);a.call(s)}}Ei(t,l,e,i)}else l=Sc(n,t,e,i,r);return ki(l)}na=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mn(t.pendingLanes);n!==0&&(Vi(t,n|1),Ae(t,oe()),(z&6)===0&&(_n=oe()+500,zt()))}break;case 13:nn(function(){var r=Et(e,1);if(r!==null){var i=Pe();at(r,e,1,i)}}),xl(e,1)}},$i=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var n=Pe();at(t,e,134217728,n)}xl(e,134217728)}},ra=function(e){if(e.tag===13){var t=jt(e),n=Et(e,t);if(n!==null){var r=Pe();at(n,e,t,r)}xl(e,t)}},ia=function(){return j},oa=function(e,t){var n=j;try{return j=e,t()}finally{j=n}},Mi=function(e,t,n){switch(t){case"input":if(_i(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Qr(r);if(!i)throw Error(h(90));Il(r),_i(r,i)}}}break;case"textarea":Fl(e,n);break;case"select":t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}},Ql=pl,Hl=nn;var Tc={usingClientEntryPoint:!1,Events:[nr,vn,Qr,Wl,jl,pl]},yr={findFiberByHostInstance:Kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pc={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kl(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||Lc,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{Lr=Pi.inject(Pc),ct=Pi}catch{}}return ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tc,ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!El(t))throw Error(h(200));return kc(e,t,null,n)},ze.createRoot=function(e,t){if(!El(e))throw Error(h(299));var n=!1,r="",i=Nu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=wl(e,1,!1,null,null,n,!1,r,i),e[gt]=t.current,bn(e.nodeType===8?e.parentNode:e),new Nl(t)},ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=Kl(t),e=e===null?null:e.stateNode,e},ze.flushSync=function(e){return nn(e)},ze.hydrate=function(e,t,n){if(!Si(t))throw Error(h(200));return Ti(null,e,t,!0,n)},ze.hydrateRoot=function(e,t,n){if(!El(e))throw Error(h(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Nu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=wu(t,null,e,1,n??null,i,!1,o,l),e[gt]=t.current,bn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Li(t)},ze.render=function(e,t,n){if(!Si(t))throw Error(h(200));return Ti(null,e,t,!1,n)},ze.unmountComponentAtNode=function(e){if(!Si(e))throw Error(h(40));return e._reactRootContainer?(nn(function(){Ti(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1},ze.unstable_batchedUpdates=pl,ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Si(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return Ti(e,t,n,!1,r)},ze.version="18.3.1-next-f1338f8080-20240426",ze}var _u;function Ac(){if(_u)return Sl.exports;_u=1;function R(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R)}catch(q){console.error(q)}}return R(),Sl.exports=Fc(),Sl.exports}var Ru;function zc(){if(Ru)return Ci;Ru=1;var R=Ac();return Ci.createRoot=R.createRoot,Ci.hydrateRoot=R.hydrateRoot,Ci}var Bc=zc();function Mc(){const[R,q]=Du.useState(null),h=[{id:1,question:"1. What is a Stack?",answer:"A stack is a linear data structure that follows the LIFO (Last In, First Out) principle. Elements can be added or removed only from the top of the stack. \\n	Last element inserted → first to be removed. \\n	Think of a stack of books or plates.",codeExample:`

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

// Function to display all elements in stack
void display() {
    if (top == -1) {
        printf("Stack is Empty\\n");
    } else {
        printf("Stack elements are:\\n");
        for (int i = top; i >= 0; i--) {
            printf("%d\\n", stack[i]);
        }
    }
}

int main() {
    push(10);
    push(20);
    push(30);
    display();    // Display all elements
    peek();       // Shows 30
    pop();        // Removes 30
    display();    // Display after pop
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
`},{id:2,question:"2. Infix to Postfix using Stack.",answer:"Infix Expression → Operator between operands. \\n	Example: A + B , (A + B) * C \\n\\nPostfix Expression (Reverse Polish Notation, RPN) → Operator comes after operands. \\n	Example: A B + , A B + C *",codeExample:`
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
🧠 Explanation

Postfix (Reverse Polish Notation) → Operators come after operands.
Example: (A+B)*C-D → AB+C*D-

Prefix (Polish Notation) → Operators come before operands.
Example: (A+B)*C-D → -*+ABCD



🔹 C Example Code


#include <stdio.h>
#include <string.h>
#include <ctype.h>   // for isalnum

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

// Function to convert infix to postfix
void infixToPostfix(char* exp) {
    char result[SIZE];
    int k = 0;
    top = -1;

    for (int i = 0; exp[i]; i++) {
        char c = exp[i];

        if (isalnum(c)) {
            result[k++] = c;
        }
        else if (c == '(') {
            push(c);
        }
        else if (c == ')') {
            while (top != -1 && stack[top] != '(')
                result[k++] = pop();
            pop(); // remove '('
        }
        else {
            while (top != -1 && precedence(stack[top]) >= precedence(c))
                result[k++] = pop();
            push(c);
        }
    }

    while (top != -1)
        result[k++] = pop();

    result[k] = '\0';                  '\0' -> Marks the end of a C string
    printf("Postfix: %s\\n", result);
}

// Helper function to reverse a string
void reverse(char* str) {
    int len = strlen(str);
    for (int i = 0; i < len / 2; i++) {             In C, when you divide two integers, the fractional part is discarded (not rounded).
        char temp = str[i];                         So, for example, 5 / 2 = 2 (not 2.5).
        str[i] = str[len - i - 1];
        str[len - i - 1] = temp;
    }
}

// Function to convert infix to prefix
void infixToPrefix(char* exp) {
    char result[SIZE];
    int k = 0;
    top = -1;

    // Step 1: Reverse the infix expression
    reverse(exp);

    // Step 2: Swap '(' and ')'
    for (int i = 0; exp[i]; i++) {
        if (exp[i] == '(') exp[i] = ')';
        else if (exp[i] == ')') exp[i] = '(';
    }

    // Step 3: Convert to postfix (of reversed)
    for (int i = 0; exp[i]; i++) {
        char c = exp[i];

        if (isalnum(c)) {
            result[k++] = c;
        }
        else if (c == '(') {
            push(c);
        }
        else if (c == ')') {
            while (top != -1 && stack[top] != '(')
                result[k++] = pop();
            pop(); // remove '('
        }
        else {
            while (top != -1 && precedence(stack[top]) > precedence(c))
                result[k++] = pop();
            push(c);
        }
    }

    while (top != -1)
        result[k++] = pop();

    result[k] = '\0';                   '\0' -> Marks the end of a C string

    // Step 4: Reverse the result to get prefix
    reverse(result);
    printf("Prefix: %s\\n", result);
}

int main() {
    char exp[] = "(A+B)*C-D";
    printf("Infix: %s\\n", exp);
    infixToPostfix(exp);

    // Make a copy because infixToPrefix modifies it
    char exp2[] = "(A+B)*C-D";
    infixToPrefix(exp2);

    return 0;
}



👉 Output:
  Infix: (A+B)*C-D
  Postfix: AB+C*D-
  Prefix: - * + A B C D


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
  printf("%d\\n", ++top);   // increases top to 0, then prints 0

  // Case 2: top++
  printf("%d\\n", top++);   // prints 0 first, then increases top to 1

👉 Output:
0
0

But after execution, top becomes 1.

✅ Final Summary:

++top → increase first, then use (good for stack push).
top++ → use first, then increase.


`},{id:3,question:"3. What is a Queue?",answer:"A queue is a linear data structure that follows the FIFO (First In, First Out) principle. Elements are added at the rear (end) and removed from the front (beginning). \\n	First element inserted → first to be removed. \\n	Think of a line of people waiting. \\n	The first person in line is the first to get the ticket and leave.",codeExample:`
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
    if (front == -1 || front > rear) {          you must be used this condition front > rear because after some dequeue operation front will be greater than rear
        printf("Queue Underflow\\n");
    } else {
        printf("%d dequeued from queue\\n", queue[front++]);
    }
}


{used this code for used queue again and again}

void dequeue() {
    if (front == -1 || front > rear) {            you can used front == rear condition so you don't need write this condition (front > rear)
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
    } else {                                        this conditiom is used when rear < front
        for (int i = front; i < SIZE; i++)          It is used to display elements from front to end of array (like print last part of array)
            printf("%d ", queue[i]);
        for (int i = 0; i <= rear; i++)             It is used to display elements from start of array to rear (like print first part of array)
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

output:

10 enqueued
20 enqueued
30 enqueued
40 enqueued
50 enqueued
Queue: 10 20 30 40 50 
10 dequeued
60 enqueued
Queue: 20 30 40 50 60 

--------------------------------------------------------------------------------
this is how display function works when rear < front

⚙️ Suppose queue size = 5

Let’s take SIZE = 5.

| Index  | 0  | 1    | 2 | 3     | 4  |
| ------ | -- | ---- | - | ----- | -- |
| Value  | 10 | 20   | — | 30    | 40 |
|        | ↑  | ↑    |   | ↑     | ↑  |
| rear=1 |    | rear |   | front |    |


So:
    front = 3  
    rear = 1

That gives us elements:
    queue[3] = 30
    queue[4] = 40
    queue[0] = 10
    queue[1] = 20

✅ Output → 30 40 10 20

Now to display:

    First loop prints queue[3], queue[4]
    Second loop prints queue[0], queue[1]


🧩 Now step-by-step function calls (the fun part!)

Let’s change main() a bit to see the interesting circular case:

int main() {
    enqueue(10);
    enqueue(20);
    enqueue(30);
    enqueue(40);
    dequeue();  // removes 10
    dequeue();  // removes 20
    enqueue(50);
    enqueue(60);
    display();  // this will print 30, 40, 50, 60 (circular order)
}


🔍 Step-by-step trace
| Step | Operation   | front | rear        | Queue array          | Output      |
| ---- | ----------- | ----- | ----------- | -------------------- | ----------- |
| 1    | enqueue(10) | 0     | 0           | [10, -, -, -, -]     | 10 enqueued |
| 2    | enqueue(20) | 0     | 1           | [10, 20, -, -, -]    | 20 enqueued |
| 3    | enqueue(30) | 0     | 2           | [10, 20, 30, -, -]   | 30 enqueued |
| 4    | enqueue(40) | 0     | 3           | [10, 20, 30, 40, -]  | 40 enqueued |
| 5    | dequeue()   | 1     | 3           | [10, 20, 30, 40, -]  | 10 dequeued |
| 6    | dequeue()   | 2     | 3           | [10, 20, 30, 40, -]  | 20 dequeued |
| 7    | enqueue(50) | 2     | 4           | [10, 20, 30, 40, 50] | 50 enqueued |
| 8    | enqueue(60) | 2     | 0 (wrapped) | [60, 20, 30, 40, 50] | 60 enqueued |


Now, front = 2, rear = 0
Order is:
[30, 40, 50, 60]


Why it prints in that order
From index 2 → 4 → prints 30, 40, 50
Then wraps around and prints 0 → 0 → 60



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


➡️ In a normal queue, elements are served in First In First Out (FIFO) order.
➡️ In a priority queue, elements are served according to priority, not arrival order.

🧩 Types of Priority Queues

| Type                          | Description                                    |
| ----------------------------- | ---------------------------------------------- |
| Ascending Priority Queue      | Lower number = higher priority (1 is highest)  |
| Descending Priority Queue     | Higher number = higher priority (9 is highest) |


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
    while (i >= 0 && pq[i] > value) {                       you only change for descending priority queue pq[i] < value
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
    for (int i = 0; i < n - 1; i++) {                          -> this for loop is used to shift left all elements after dequeue operation
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



`},{id:12,question:"12. Explain Tree or what is tree (concept and terminologies of tree)",answer:"",codeExample:`
🌲 What is a Tree?

A Tree is a non-linear data structure that stores data in a hierarchical (top-down) form.
It looks like an upside-down tree with one root and many branches.



🔹 Example:

          A          ← Root
         /         B   C        ← Children
       /          D   E   F      ← Leaf Nodes


Here:
    A is the root node 
    B and C are children of A
    D, E, F are leaf nodes (no children)


🔹 Basic Terms in Tree
| Term      | Meaning                                 |
| ----------| --------------------------------------- |
| Root      | The topmost node (starting point)       |
| Parent    | A node that has child nodes             |
| Child     | A node that descends from another node  |
| Leaf Node | Node with no children                   |
| Edge      | Connection between two nodes            |
| Path      | Sequence of nodes connected by edges    |
| Level     | Distance from the root (root = level 0) |
| Height    | Longest path from root to any leaf      |
| Degree    | Number of children a node has           |



🔹 Types of Trees

1. General Tree → Any number of children.                                       ------ 
2. Binary Tree → Each node has at most two children (Left and Right).           ------
3. Binary Search Tree (BST) → Left child < Root < Right child.                  ------
4. Full Binary Tree → Every node has 0 or 2 children.                           
5. Complete Binary Tree → All levels are filled except possibly the last.       ------
6. AVL Tree → Balanced Binary Search Tree (difference of heights ≤ 1).         
7. B-Tree / B+ Tree → Used in databases and file systems.                       



🔹 Advantages of Tree

✅ Reflects hierarchical structure (like family tree, file system).
✅ Faster search than linked lists (especially in Binary Search Trees).
✅ Used in decision-making, indexing, and expression evaluation.

🔹 Real-Life Examples

Family Tree (Parent–Child relationships)
Computer File System (Folders and subfolders)
Organization Chart (CEO → Manager → Employee)
Decision Trees (used in AI and ML)



🔹 Tree Traversals

To access all nodes, we use traversal methods:

1. Inorder (Left, Root, Right)
    Output nodes in sorted order for BST.

2. Preorder (Root, Left, Right)
    Used to create a copy of the tree.

3. Postorder (Left, Right, Root)
    Used to delete the tree safely.

🔹 Example (Binary Tree Traversal)

      A
     /     B   C
   /   D   E


| Traversal Type | Order of Visiting Nodes |
| -------------- | ----------------------- |
| Inorder        | D, B, E, A, C           |
| Preorder       | A, B, D, E, C           |
| Postorder      | D, E, B, C, A           |


✅ In short:

    A Tree is a hierarchical data structure with nodes connected by edges.
    It starts from a root node and branches out to child nodes — just like a real tree.

`},{id:12.1,question:"12.1 Explain General Tree",answer:"",codeExample:`
🌳 Definition:

A General Tree is a non-linear data structure in which each node can have any number of children (not limited to 2 like a Binary Tree).

Each node contains:

    Data (value)
    Links to its child nodes

There is one special node called the root node, and all other nodes are connected below it.

🧩 Structure of a General Tree:

           A
        /  |         B   C   D
          /          E   F

Explanation:

Node A is the root node.
A has 3 children → B, C, D.
Node C has 2 children → E, F.
B, D, E, and F are leaf nodes (no children).


🏗 Basic Terms:
| Term      | Description                                             |
| ----------| ------------------------------------------------------- |
| Root      | The topmost node of the tree (like A).                  |
| Parent    | A node that has child nodes (like C is parent of E, F). |
| Child     | Nodes that are descendants of a parent node.            |
| Leaf Node | Node with no children (like B, D, E, F).                |
| Siblings  | Nodes having the same parent (like E and F).            |
| Level     | Distance of a node from the root (Root = level 0).      |


⚙️ Algorithm (General Idea to Create a General Tree):

There is no single simple array-based representation like binary trees.
Usually, general trees are represented using the Child-Sibling Representation.

📘 Child-Sibling Representation:

Each node has two pointers:

    firstChild → points to its first child.
    nextSibling → points to its next sibling.

Example in structure form:

struct Node {
    char data;
    struct Node* firstChild;
    struct Node* nextSibling;
};



✅ Advantages of General Tree:

More flexible than binary trees.
Represents hierarchical structures like organization charts, file systems, etc.
Useful when nodes can have varying numbers of children.

💡 Real-life Examples:
| Example            | Explanation                                    |
| -------------------| ---------------------------------------------- |
| File system        | A folder can contain many files or subfolders. |
| Organization chart | A manager can have multiple subordinates.      |
| HTML Document      | Each tag can have multiple nested tags.        |


`},{id:12.2,question:"12.2 Explain Binary Tree",answer:"",codeExample:`
🌳 Definition:

A Binary Tree is a type of tree data structure in which each node can have at most two children —
usually referred to as the left child and the right child.

🧠 Structure of a Binary Tree:

        A
       /       B   C
     /     D   E


Explanation:

    A → Root node
    B and C → Children of A
    D and E → Children of B
    Nodes C, D, and E are leaf nodes (no children).
    

⚙️ Basic Terms:    
| Term      | Description                                               |
| ----------| --------------------------------------------------------- |
| Root      | The topmost node (A).                                     |
| Parent    | A node that has child nodes (like B).                     |
| Child     | A node below a parent node (like D, E are children of B). |
| Leaf Node | Node with no children (like D, E, C).                     |
| Subtree   | Any node and all its descendants.                         |
| Level     | Distance from the root (Root = Level 0).                  |
| Height    | Number of edges in the longest path from root to a leaf.  |



🏗 Structure in C:

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};


Each node contains:
data → stores the value
left → pointer to the left child
right → pointer to the right child



🧩 Types of Binary Trees:

| Type                     | Description                                                                         |
| -------------------------| ----------------------------------------------------------------------------------- |
| Full Binary Tree         | Every node has 0 or 2 children.                                                     |
| Complete Binary Tree     | All levels are filled except possibly the last, which is filled from left to right. |
| Perfect Binary Tree      | All internal nodes have 2 children, and all leaf nodes are at the same level.       |
| Skewed Binary Tree       | All nodes have only one child (either left or right).                               |
| Binary Search Tree (BST) | Left < Root < Right (special binary tree used for searching).                       |


🔄 Tree Traversals (Ways to Visit All Nodes):
| Traversal Type | Order               | Example Output |
| -------------- | ------------------- | -------------- |
| Inorder        | Left → Root → Right | D, B, E, A, C  |
| Preorder       | Root → Left → Right | A, B, D, E, C  |
| Postorder      | Left → Right → Root | D, E, B, C, A  |


💡 Real-Life Examples:
| Example             | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| Decision Tree       | Used in AI and machine learning for decision-making.         |
| File System         | Directory structure with subfolders (binary-like hierarchy). |
| Expression Tree     | Used in compilers to evaluate mathematical expressions.      |


⚡ Advantages:

Faster searching and sorting (especially in BST).
Useful for hierarchical data representation.
Easy to implement recursive algorithms.

`},{id:1221,question:"12.2.1 Explain Complete Binary Tree ",answer:"",codeExample:`
🌳 Definition:

A Complete Binary Tree is a type of binary tree in which all levels are completely filled,
except possibly the last level, which is filled from left to right.

👉 In simple words:

Every level is full.
The last level may not be full, but all its nodes appear as left as possible.


🧠 Example 1: Complete Binary Tree
        1
       /       2   3
     /   /
    4  5 6


✅ Why it’s Complete:

    Levels 1 and 2 are completely filled.
    Level 3 has 3 nodes (4, 5, 6), all placed from left to right.



❌ Example 2: Not Complete

        1
       /       2   3
                  5   6

❌ Why not complete:

The leftmost position at the last level (under 2) is empty,
but a node exists to the right, which breaks the rule.


⚡ Advantages:

Efficient memory usage — no large gaps in nodes.
Ideal for heap structures (used in Priority Queues).
Easy to store in arrays because of its predictable structure.



🧮 Array Representation Example:

You can store a Complete Binary Tree in an array like this:

Index:  0  1  2  3  4  5
Value: [1, 2, 3, 4, 5, 6]


For any node at index i:

    Left child = 2i + 1
    Right child = 2i + 2
    Parent = (i - 1) / 2

      `},{id:1222,question:"12.2.2 Explain Binary Search Tree",answer:"",codeExample:`
🌳 Definition:

A Binary Search Tree (BST) is a special type of Binary Tree where:

    Each node contains a unique value.
    The left subtree of a node contains values smaller than the node’s value.
    The right subtree of a node contains values greater than the node’s value.
    Both left and right subtrees must also be Binary Search Trees.

🧠 Example of a BST

        50
       /       30    70
    /     /    20 40  60 80


✅ Why this is a BST:

Left child < Parent (30 < 50)
Right child > Parent (70 > 50)
And this rule applies to every subtree.



❌ Not a BST Example
        50
       /       70    30


❌ Here, 70 is in the left subtree but greater than 50 → violates BST rule.


⚙️ Properties of BST
| Property                 | Description                        |
| -------------------------| ---------------------------------- |
| Left < Root < Right      | Key rule of BST                    |
| Inorder Traversal        | Always gives sorted order          |
| Search Efficiency        | Average time complexity = O(log n) |
| Worst Case (Skewed Tree) | Time complexity = O(n)             |



💡 Real-Life Examples:
| Example                 | Description                           |
| ------------------------| ------------------------------------- |
| Phonebook               | Searching names in alphabetical order |
| Database Indexing       | Faster searching, insertion, deletion |
| Auto-suggestion systems | Searching words based on order        |



🧩 C Structure of BST
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *left, *right;
};

// Function to create a new node
struct Node* newNode(int value) {
    struct Node* temp = (struct Node*)malloc(sizeof(struct Node));
    temp->data = value;
    temp->left = temp->right = NULL;
    return temp;
}



⚙️ Algorithms of BST

1️⃣ Insertion
Algorithm Insert(root, value)
1. If root is NULL → create a new node and return it.
2. If value < root->data → Insert in left subtree.
3. Else if value > root->data → Insert in right subtree.
4. Return root.


2️⃣ Searching
Algorithm Search(root, value)
1. If root is NULL → return "Not Found".
2. If value == root->data → return "Found".
3. If value < root->data → search in left subtree.
4. Else → search in right subtree.


3️⃣ Deletion
Algorithm Delete(root, value)
1. Search for the node to delete.
2. Case 1: Node has no children → delete it.
3. Case 2: Node has one child → replace with child.
4. Case 3: Node has two children → find inorder successor (smallest in right subtree), replace node’s value, then delete successor.


4️⃣ Traversals
| Type      | Order               | Output for Example Tree    |
| ----------| ------------------- | -------------------------- |
| Inorder   | Left → Root → Right | 20, 30, 40, 50, 60, 70, 80 |
| Preorder  | Root → Left → Right | 50, 30, 20, 40, 70, 60, 80 |
| Postorder | Left → Right → Root | 20, 40, 30, 60, 80, 70, 50 |



✅ Complete Example: BST Implementation in C
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *left, *right;
};

struct Node* newNode(int value) {
    struct Node* temp = (struct Node*)malloc(sizeof(struct Node));
    temp->data = value;
    temp->left = temp->right = NULL;
    return temp;
}

// Insert
struct Node* insert(struct Node* root, int value) {
    if (root == NULL)
        return newNode(value);
    if (value < root->data)
        root->left = insert(root->left, value);
    else if (value > root->data)
        root->right = insert(root->right, value);
    return root;
}

// Inorder Traversal
void inorder(struct Node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

// Search
struct Node* search(struct Node* root, int value) {
    if (root == NULL || root->data == value)
        return root;
    if (value < root->data)
        return search(root->left, value);
    return search(root->right, value);
}

int main() {
    struct Node* root = NULL;
    root = insert(root, 50);
    insert(root, 30);
    insert(root, 70);
    insert(root, 20);
    insert(root, 40);
    insert(root, 60);
    insert(root, 80);

    printf("Inorder traversal (Sorted order): ");
    inorder(root);

    int key = 60;
    if (search(root, key))
        printf("\\n%d found in the BST\\n", key);
    else
        printf("\\n%d not found in the BST\\n", key);

    return 0;
}

⚡ Output:
Inorder traversal (Sorted order): 20 30 40 50 60 70 80
60 found in the BST

      `},{id:1223,question:"12.2.3  Explain Full Binary Tree.",answer:"",codeExample:`
🌳 Definition:

A Full Binary Tree (also called a Proper or Strict Binary Tree) is a binary tree in which every node has either:

0 children (leaf node) or
2 children (internal node)

👉 No node in a full binary tree has only one child.


🧠 Example of a Full Binary Tree
        1
       /       2   3
     /  /     4  5 6  7


✅ Why it’s full:

    Node 1 has two children (2, 3)
    Node 2 has two children (4, 5)
    Node 3 has two children (6, 7)
    Nodes 4, 5, 6, 7 have no children (leaf nodes)

Hence, all nodes have either 0 or 2 children.


❌ Not a Full Binary Tree Example
        1
       /       2   3
               4


❌ Node 2 has only one child (4) → breaks the full binary tree rule.

⚙️ Properties of a Full Binary Tree
| Property                  | Description                                      |
| --------------------------| ------------------------------------------------ |
| Each node                 | Has either 0 or 2 children                       |
| Number of leaf nodes (L)  | L = I + 1 (where I = number of internal nodes) |
| Total nodes (N)           | N = 2 * I + 1                                  |
| Height (h)                | h = log₂(L) (approx.)                          |
| Maximum nodes at height h | 2^(h+1) - 1                                    |



🧮 Example Calculation

If a full binary tree has 7 nodes,
then number of internal nodes = 3,
and number of leaf nodes = 4.
✅ Because: L = I + 1 → 4 = 3 + 1.



🧩 C Representation of Full Binary Tree

#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *left, *right;
};

// Function to create a new node
struct Node* newNode(int value) {
    struct Node* temp = (struct Node*)malloc(sizeof(struct Node));
    temp->data = value;
    temp->left = temp->right = NULL;
    return temp;
}

// Preorder traversal
void preorder(struct Node* root) {
    if (root != NULL) {
        printf("%d ", root->data);
        preorder(root->left);
        preorder(root->right);
    }
}

int main() {
    // Create Full Binary Tree
    struct Node* root = newNode(1);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->left = newNode(4);
    root->left->right = newNode(5);
    root->right->left = newNode(6);
    root->right->right = newNode(7);

    printf("Preorder traversal of Full Binary Tree: ");
    preorder(root);
    return 0;
}


⚡ Output:
Preorder traversal of Full Binary Tree: 1 2 4 5 3 6 7



💡 Real-Life Examples of Full Binary Trees
| Example                     | Description                                                                     |
| ----------------------------| ------------------------------------------------------------------------------- |
| Tournament Bracket          | Every match has exactly 2 players (2 children) until one winner (root) remains. |
| Decision Tree (Yes/No type) | Each question splits into exactly two possible answers.                         |
| Expression Tree             | Every operator has exactly two operands.                                        |


✅ Advantages

    Efficient structure for recursion and binary operations.
    Easy to store in arrays.
    Reduces unnecessary memory usage.
      `},{id:12.3,question:"12.3 Explain AVL Tree",answer:"",codeExample:`
🌳 Definition:

An AVL Tree is a type of self-balancing Binary Search Tree (BST).
It was invented by Adelson-Velsky and Landis (AVL) — hence the name.

👉 In an AVL Tree, the difference between the heights of the left and right subtrees of any node is at most 1.


🧠 Balance Factor (BF):

For each node:
    Balance Factor (BF) = height(left subtree) - height(right subtree)


✅ The Balance Factor can be:

-1, 0, or +1

❌ If BF < -1 or BF > +1 → The tree is unbalanced and needs to be rotated to restore balance.


🌿 Example of an AVL Tree

        30
       /       20    40
    /
   10


Balance Factor for each node:

10 → 0
20 → 1
40 → 0
30 → 1

✅ All nodes have BF in {-1, 0, +1} → It’s a balanced AVL Tree.


❌ Example of Unbalanced Tree

      30
     /
    20
   /
  10


Here:
    30 → BF = 2 (too high!)
    So, it’s not balanced → needs rotation.


⚙️ Balancing Using Rotations

There are 4 types of rotations used to fix unbalanced AVL trees:

| Case             | Condition                                 | Rotation Used         |
| -----------------| ----------------------------------------- | ----------------------|
| LL (Left-Left)   | Insertion in left subtree of left child   | Right Rotation        |
| RR (Right-Right) | Insertion in right subtree of right child | Left Rotation         |
| LR (Left-Right)  | Insertion in right subtree of left child  | Left + Right Rotation |
| RL (Right-Left)  | Insertion in left subtree of right child  | Right + Left Rotation |



🔁 1. LL Rotation (Right Rotation)

Unbalanced:
        30
       /
      20
     /
    10

After Right Rotation:
        20
       /       10    30



🔁 2. RR Rotation (Left Rotation)

Unbalanced:
      10
                 20
                       30

After Left Rotation:
        20
       /       10    30



🔁 3. LR Rotation (Left-Right Rotation)

Unbalanced:
        30
       /
      10
                 20

After LR Rotation:
        20
       /       10    30



🔁 4. RL Rotation (Right-Left Rotation)

Unbalanced:
      10
                 30
        /
      20

After RL Rotation:
        20
       /       10    30



🧩 C Structure of AVL Tree

#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *left, *right;
    int height;
};

// Function to get height of tree
int height(struct Node *N) {
    if (N == NULL)
        return 0;
    return N->height;
}

// Create a new node
struct Node* newNode(int value) {
    struct Node* node = (struct Node*)malloc(sizeof(struct Node));
    node->data = value;
    node->left = node->right = NULL;
    node->height = 1;
    return node;
}

// Get balance factor
int getBalance(struct Node *N) {
    if (N == NULL)
        return 0;
    return height(N->left) - height(N->right);
}

// Right rotation
struct Node* rightRotate(struct Node *y) {
    struct Node *x = y->left;
    struct Node *T2 = x->right;

    x->right = y;
    y->left = T2;

    y->height = 1 + (height(y->left) > height(y->right) ? height(y->left) : height(y->right));
    x->height = 1 + (height(x->left) > height(x->right) ? height(x->left) : height(x->right));

    return x;
}

// Left rotation
struct Node* leftRotate(struct Node *x) {
    struct Node *y = x->right;
    struct Node *T2 = y->left;

    y->left = x;
    x->right = T2;

    x->height = 1 + (height(x->left) > height(x->right) ? height(x->left) : height(x->right));
    y->height = 1 + (height(y->left) > height(y->right) ? height(y->left) : height(y->right));

    return y;
}

// Insert node
struct Node* insert(struct Node* node, int key) {
    if (node == NULL)
        return newNode(key);

    if (key < node->data)
        node->left = insert(node->left, key);
    else if (key > node->data)
        node->right = insert(node->right, key);
    else
        return node;

    node->height = 1 + (height(node->left) > height(node->right) ? height(node->left) : height(node->right));

    int balance = getBalance(node);

    // LL Case
    if (balance > 1 && key < node->left->data)
        return rightRotate(node);

    // RR Case
    if (balance < -1 && key > node->right->data)
        return leftRotate(node);

    // LR Case
    if (balance > 1 && key > node->left->data) {
        node->left = leftRotate(node->left);
        return rightRotate(node);
    }

    // RL Case
    if (balance < -1 && key < node->right->data) {
        node->right = rightRotate(node->right);
        return leftRotate(node);
    }

    return node;
}

// Inorder Traversal
void inorder(struct Node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

int main() {
    struct Node *root = NULL;

    root = insert(root, 30);
    root = insert(root, 20);
    root = insert(root, 40);
    root = insert(root, 10);
    root = insert(root, 25);
    root = insert(root, 50);

    printf("Inorder traversal of AVL Tree: ");
    inorder(root);
    return 0;
}


⚡ Output:
Inorder traversal of AVL Tree: 10 20 25 30 40 50



✅ Advantages of AVL Tree:

| Advantage          | Explanation                                       |
| -------------------| ------------------------------------------------- |
| Self-balancing     | Prevents tree from becoming skewed                |
| Faster searching   | O(log n) time complexity                          |
| Better performance | Insertion, deletion, and search are all efficient |
| Used in databases  | For indexing and searching operations             |


❌ Disadvantages:

| Disadvantage                  | Explanation                            |
| ----------------------------- | -------------------------------------- |
| More complex                  | Requires rotations and height tracking |
| Slower insertion/deletion     | Because of rebalancing steps           |



💡 Real-Life Applications:

    Databases for maintaining sorted data
    Memory management systems
    File indexing systems
    Search engines (to store sorted words or URLs)

`},{id:12.4,question:"12.4 Explain B-Tree / B+ Tree",answer:"",codeExample:`
🌳 1. B-Tree (Balanced Tree)
Definition:

A B-Tree is a self-balancing search tree where each node can have multiple keys and children.
It keeps data sorted and allows search, insertion, and deletion operations in logarithmic time.

Properties of B-Tree:

    1. All leaves are at the same level.
    2. Each node contains multiple keys.
    3. A node with n keys has (n + 1) children.
    4. The keys inside a node are sorted in ascending order.
    5. All data is stored in every node (internal + leaf nodes).
    6. The tree grows and shrinks from the root, keeping it balanced.

Example Structure:

             [30]
           /            [10,20]   [40,50,60]


Root has one key → 30
Left child has keys → 10, 20
Right child has keys → 40, 50, 60


Operations:

    Search: Similar to binary search but across multiple keys per node.
    Insertion: Add the key in sorted order; if a node overflows, split it.
    Deletion: Remove the key; if underflow occurs, merge or redistribute nodes.


Applications:

Database indexing
File system storage
Multilevel memory indexing (e.g., SSD, HDD)



🌳 2. B+ Tree
Definition:

A B+ Tree is an extension of the B-Tree, optimized for range queries and database indexing.
It stores all actual data only in leaf nodes, while internal nodes store only keys for navigation.


Properties of B+ Tree:

    1. All leaf nodes are linked sequentially (like a linked list).
    2. Internal nodes don’t store actual data — only keys.
    3. Searching is faster because leaf nodes form a continuous sequence.
    4. Ideal for range-based searching (e.g., finding records between 10 and 50).



Example Structure:
             [30, 60]
           /     |            [10,20] [40,50] [70,80]

Leaf nodes linked:  [10,20] → [40,50] → [70,80]



Difference Between B-Tree and B+ Tree:
| Aspect          | B-Tree                                 | B+ Tree                               |
| ----------------|--------------------------------------- | ----------------------------------------- |
| Data storage    | Data stored in internal and leaf nodes | Data stored only in leaf nodes            |
| Search speed    | Slower (more disk accesses)            | Faster (less disk access)                 |
| Leaf connection | Not linked                             | All leaf nodes are linked                 |
| Traversal       | Needs full tree traversal              | Sequential traversal possible             |
| Use case        | General indexing                       | Database and file systems (range queries) |


Applications of B+ Tree:

    Used in database indexing (MySQL, Oracle)
    File systems (NTFS, ReFS, EXT4)
    Search engines for quick record lookup


✅ In Simple Words:

B-Tree = Fast for single searches, stores data everywhere.
B+ Tree = Fast for range searches, stores data only in leaves.

      `},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""}],ve=D=>{q(R===D?null:D)};return Ce.jsxs("div",{className:"app-container",children:[Ce.jsx("h1",{children:"DSA Interview Questions"}),Ce.jsx("div",{className:"questions-container",children:h.map(D=>Ce.jsxs("div",{className:"question-item",children:[Ce.jsx("button",{className:`question-button ${R===D.id?"active":""}`,onClick:()=>ve(D.id),children:D.question}),R===D.id&&Ce.jsxs("div",{className:"answer-container",children:[Ce.jsxs("div",{className:"answer",children:[Ce.jsx("h3",{children:"Answer:"}),Ce.jsx("p",{children:D.answer})]}),D.codeExample&&Ce.jsxs("div",{className:"code-example",children:[Ce.jsx("h3",{children:"Code Example:"}),Ce.jsx("pre",{children:Ce.jsx("code",{children:D.codeExample})})]})]})]},D.id))})]})}Bc.createRoot(document.getElementById("root")).render(Ce.jsx(Du.StrictMode,{children:Ce.jsx(Mc,{})}));
