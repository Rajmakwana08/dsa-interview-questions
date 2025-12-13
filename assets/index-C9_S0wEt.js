(function(){const z=document.createElement("link").relList;if(z&&z.supports&&z.supports("modulepreload"))return;for(const F of document.querySelectorAll('link[rel="modulepreload"]'))ge(F);new MutationObserver(F=>{for(const G of F)if(G.type==="childList")for(const de of G.addedNodes)de.tagName==="LINK"&&de.rel==="modulepreload"&&ge(de)}).observe(document,{childList:!0,subtree:!0});function h(F){const G={};return F.integrity&&(G.integrity=F.integrity),F.referrerPolicy&&(G.referrerPolicy=F.referrerPolicy),F.crossOrigin==="use-credentials"?G.credentials="include":F.crossOrigin==="anonymous"?G.credentials="omit":G.credentials="same-origin",G}function ge(F){if(F.ep)return;F.ep=!0;const G=h(F);fetch(F.href,G)}})();var ka={exports:{}},gr={},Na={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ku;function Ic(){if(ku)return B;ku=1;var D=Symbol.for("react.element"),z=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),ge=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),de=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),Ne=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),ee=Symbol.iterator;function Z(d){return d===null||typeof d!="object"?null:(d=ee&&d[ee]||d["@@iterator"],typeof d=="function"?d:null)}var He={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qe=Object.assign,K={};function Q(d,y,R){this.props=d,this.context=y,this.refs=K,this.updater=R||He}Q.prototype.isReactComponent={},Q.prototype.setState=function(d,y){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,y,"setState")},Q.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function yt(){}yt.prototype=Q.prototype;function st(d,y,R){this.props=d,this.context=y,this.refs=K,this.updater=R||He}var Xe=st.prototype=new yt;Xe.constructor=st,Qe(Xe,Q.prototype),Xe.isPureReactComponent=!0;var we=Array.isArray,Je=Object.prototype.hasOwnProperty,Le={current:null},Ie={key:!0,ref:!0,__self:!0,__source:!0};function Ve(d,y,R){var _,U={},M=null,V=null;if(y!=null)for(_ in y.ref!==void 0&&(V=y.ref),y.key!==void 0&&(M=""+y.key),y)Je.call(y,_)&&!Ie.hasOwnProperty(_)&&(U[_]=y[_]);var q=arguments.length-2;if(q===1)U.children=R;else if(1<q){for(var X=Array(q),Me=0;Me<q;Me++)X[Me]=arguments[Me+2];U.children=X}if(d&&d.defaultProps)for(_ in q=d.defaultProps,q)U[_]===void 0&&(U[_]=q[_]);return{$$typeof:D,type:d,key:M,ref:V,props:U,_owner:Le.current}}function At(d,y){return{$$typeof:D,type:d.type,key:y,ref:d.ref,props:d.props,_owner:d._owner}}function gt(d){return typeof d=="object"&&d!==null&&d.$$typeof===D}function bt(d){var y={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(R){return y[R]})}var ut=/\/+/g;function Ue(d,y){return typeof d=="object"&&d!==null&&d.key!=null?bt(""+d.key):y.toString(36)}function et(d,y,R,_,U){var M=typeof d;(M==="undefined"||M==="boolean")&&(d=null);var V=!1;if(d===null)V=!0;else switch(M){case"string":case"number":V=!0;break;case"object":switch(d.$$typeof){case D:case z:V=!0}}if(V)return V=d,U=U(V),d=_===""?"."+Ue(V,0):_,we(U)?(R="",d!=null&&(R=d.replace(ut,"$&/")+"/"),et(U,y,R,"",function(Me){return Me})):U!=null&&(gt(U)&&(U=At(U,R+(!U.key||V&&V.key===U.key?"":(""+U.key).replace(ut,"$&/")+"/")+d)),y.push(U)),1;if(V=0,_=_===""?".":_+":",we(d))for(var q=0;q<d.length;q++){M=d[q];var X=_+Ue(M,q);V+=et(M,y,R,X,U)}else if(X=Z(d),typeof X=="function")for(d=X.call(d),q=0;!(M=d.next()).done;)M=M.value,X=_+Ue(M,q++),V+=et(M,y,R,X,U);else if(M==="object")throw y=String(d),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.");return V}function dt(d,y,R){if(d==null)return d;var _=[],U=0;return et(d,_,"","",function(M){return y.call(R,M,U++)}),_}function Pe(d){if(d._status===-1){var y=d._result;y=y(),y.then(function(R){(d._status===0||d._status===-1)&&(d._status=1,d._result=R)},function(R){(d._status===0||d._status===-1)&&(d._status=2,d._result=R)}),d._status===-1&&(d._status=0,d._result=y)}if(d._status===1)return d._result.default;throw d._result}var re={current:null},S={transition:null},I={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:S,ReactCurrentOwner:Le};function k(){throw Error("act(...) is not supported in production builds of React.")}return B.Children={map:dt,forEach:function(d,y,R){dt(d,function(){y.apply(this,arguments)},R)},count:function(d){var y=0;return dt(d,function(){y++}),y},toArray:function(d){return dt(d,function(y){return y})||[]},only:function(d){if(!gt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},B.Component=Q,B.Fragment=h,B.Profiler=F,B.PureComponent=st,B.StrictMode=ge,B.Suspense=H,B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,B.act=k,B.cloneElement=function(d,y,R){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var _=Qe({},d.props),U=d.key,M=d.ref,V=d._owner;if(y!=null){if(y.ref!==void 0&&(M=y.ref,V=Le.current),y.key!==void 0&&(U=""+y.key),d.type&&d.type.defaultProps)var q=d.type.defaultProps;for(X in y)Je.call(y,X)&&!Ie.hasOwnProperty(X)&&(_[X]=y[X]===void 0&&q!==void 0?q[X]:y[X])}var X=arguments.length-2;if(X===1)_.children=R;else if(1<X){q=Array(X);for(var Me=0;Me<X;Me++)q[Me]=arguments[Me+2];_.children=q}return{$$typeof:D,type:d.type,key:U,ref:M,props:_,_owner:V}},B.createContext=function(d){return d={$$typeof:de,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:G,_context:d},d.Consumer=d},B.createElement=Ve,B.createFactory=function(d){var y=Ve.bind(null,d);return y.type=d,y},B.createRef=function(){return{current:null}},B.forwardRef=function(d){return{$$typeof:ce,render:d}},B.isValidElement=gt,B.lazy=function(d){return{$$typeof:ve,_payload:{_status:-1,_result:d},_init:Pe}},B.memo=function(d,y){return{$$typeof:Ne,type:d,compare:y===void 0?null:y}},B.startTransition=function(d){var y=S.transition;S.transition={};try{d()}finally{S.transition=y}},B.unstable_act=k,B.useCallback=function(d,y){return re.current.useCallback(d,y)},B.useContext=function(d){return re.current.useContext(d)},B.useDebugValue=function(){},B.useDeferredValue=function(d){return re.current.useDeferredValue(d)},B.useEffect=function(d,y){return re.current.useEffect(d,y)},B.useId=function(){return re.current.useId()},B.useImperativeHandle=function(d,y,R){return re.current.useImperativeHandle(d,y,R)},B.useInsertionEffect=function(d,y){return re.current.useInsertionEffect(d,y)},B.useLayoutEffect=function(d,y){return re.current.useLayoutEffect(d,y)},B.useMemo=function(d,y){return re.current.useMemo(d,y)},B.useReducer=function(d,y,R){return re.current.useReducer(d,y,R)},B.useRef=function(d){return re.current.useRef(d)},B.useState=function(d){return re.current.useState(d)},B.useSyncExternalStore=function(d,y,R){return re.current.useSyncExternalStore(d,y,R)},B.useTransition=function(){return re.current.useTransition()},B.version="18.3.1",B}var Nu;function Ta(){return Nu||(Nu=1,Na.exports=Ic()),Na.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function Pc(){if(Lu)return gr;Lu=1;var D=Ta(),z=Symbol.for("react.element"),h=Symbol.for("react.fragment"),ge=Object.prototype.hasOwnProperty,F=D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G={key:!0,ref:!0,__self:!0,__source:!0};function de(ce,H,Ne){var ve,ee={},Z=null,He=null;Ne!==void 0&&(Z=""+Ne),H.key!==void 0&&(Z=""+H.key),H.ref!==void 0&&(He=H.ref);for(ve in H)ge.call(H,ve)&&!G.hasOwnProperty(ve)&&(ee[ve]=H[ve]);if(ce&&ce.defaultProps)for(ve in H=ce.defaultProps,H)ee[ve]===void 0&&(ee[ve]=H[ve]);return{$$typeof:z,type:ce,key:Z,ref:He,props:ee,_owner:F.current}}return gr.Fragment=h,gr.jsx=de,gr.jsxs=de,gr}var Au;function Dc(){return Au||(Au=1,ka.exports=Pc()),ka.exports}var Te=Dc(),Fu=Ta(),Ti={},La={exports:{}},Oe={},Aa={exports:{}},Ca={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cu;function Fc(){return Cu||(Cu=1,(function(D){function z(S,I){var k=S.length;S.push(I);e:for(;0<k;){var d=k-1>>>1,y=S[d];if(0<F(y,I))S[d]=I,S[k]=y,k=d;else break e}}function h(S){return S.length===0?null:S[0]}function ge(S){if(S.length===0)return null;var I=S[0],k=S.pop();if(k!==I){S[0]=k;e:for(var d=0,y=S.length,R=y>>>1;d<R;){var _=2*(d+1)-1,U=S[_],M=_+1,V=S[M];if(0>F(U,k))M<y&&0>F(V,U)?(S[d]=V,S[M]=k,d=M):(S[d]=U,S[_]=k,d=_);else if(M<y&&0>F(V,k))S[d]=V,S[M]=k,d=M;else break e}}return I}function F(S,I){var k=S.sortIndex-I.sortIndex;return k!==0?k:S.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var G=performance;D.unstable_now=function(){return G.now()}}else{var de=Date,ce=de.now();D.unstable_now=function(){return de.now()-ce}}var H=[],Ne=[],ve=1,ee=null,Z=3,He=!1,Qe=!1,K=!1,Q=typeof setTimeout=="function"?setTimeout:null,yt=typeof clearTimeout=="function"?clearTimeout:null,st=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Xe(S){for(var I=h(Ne);I!==null;){if(I.callback===null)ge(Ne);else if(I.startTime<=S)ge(Ne),I.sortIndex=I.expirationTime,z(H,I);else break;I=h(Ne)}}function we(S){if(K=!1,Xe(S),!Qe)if(h(H)!==null)Qe=!0,Pe(Je);else{var I=h(Ne);I!==null&&re(we,I.startTime-S)}}function Je(S,I){Qe=!1,K&&(K=!1,yt(Ve),Ve=-1),He=!0;var k=Z;try{for(Xe(I),ee=h(H);ee!==null&&(!(ee.expirationTime>I)||S&&!bt());){var d=ee.callback;if(typeof d=="function"){ee.callback=null,Z=ee.priorityLevel;var y=d(ee.expirationTime<=I);I=D.unstable_now(),typeof y=="function"?ee.callback=y:ee===h(H)&&ge(H),Xe(I)}else ge(H);ee=h(H)}if(ee!==null)var R=!0;else{var _=h(Ne);_!==null&&re(we,_.startTime-I),R=!1}return R}finally{ee=null,Z=k,He=!1}}var Le=!1,Ie=null,Ve=-1,At=5,gt=-1;function bt(){return!(D.unstable_now()-gt<At)}function ut(){if(Ie!==null){var S=D.unstable_now();gt=S;var I=!0;try{I=Ie(!0,S)}finally{I?Ue():(Le=!1,Ie=null)}}else Le=!1}var Ue;if(typeof st=="function")Ue=function(){st(ut)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,dt=et.port2;et.port1.onmessage=ut,Ue=function(){dt.postMessage(null)}}else Ue=function(){Q(ut,0)};function Pe(S){Ie=S,Le||(Le=!0,Ue())}function re(S,I){Ve=Q(function(){S(D.unstable_now())},I)}D.unstable_IdlePriority=5,D.unstable_ImmediatePriority=1,D.unstable_LowPriority=4,D.unstable_NormalPriority=3,D.unstable_Profiling=null,D.unstable_UserBlockingPriority=2,D.unstable_cancelCallback=function(S){S.callback=null},D.unstable_continueExecution=function(){Qe||He||(Qe=!0,Pe(Je))},D.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):At=0<S?Math.floor(1e3/S):5},D.unstable_getCurrentPriorityLevel=function(){return Z},D.unstable_getFirstCallbackNode=function(){return h(H)},D.unstable_next=function(S){switch(Z){case 1:case 2:case 3:var I=3;break;default:I=Z}var k=Z;Z=I;try{return S()}finally{Z=k}},D.unstable_pauseExecution=function(){},D.unstable_requestPaint=function(){},D.unstable_runWithPriority=function(S,I){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var k=Z;Z=S;try{return I()}finally{Z=k}},D.unstable_scheduleCallback=function(S,I,k){var d=D.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?d+k:d):k=d,S){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=k+y,S={id:ve++,callback:I,priorityLevel:S,startTime:k,expirationTime:y,sortIndex:-1},k>d?(S.sortIndex=k,z(Ne,S),h(H)===null&&S===h(Ne)&&(K?(yt(Ve),Ve=-1):K=!0,re(we,k-d))):(S.sortIndex=y,z(H,S),Qe||He||(Qe=!0,Pe(Je))),S},D.unstable_shouldYield=bt,D.unstable_wrapCallback=function(S){var I=Z;return function(){var k=Z;Z=I;try{return S.apply(this,arguments)}finally{Z=k}}}})(Ca)),Ca}var Tu;function Rc(){return Tu||(Tu=1,Aa.exports=Fc()),Aa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu;function Bc(){if(Iu)return Oe;Iu=1;var D=Ta(),z=Rc();function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ge=new Set,F={};function G(e,t){de(e,t),de(e+"Capture",t)}function de(e,t){for(F[e]=t,e=0;e<t.length;e++)ge.add(t[e])}var ce=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),H=Object.prototype.hasOwnProperty,Ne=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ve={},ee={};function Z(e){return H.call(ee,e)?!0:H.call(ve,e)?!1:Ne.test(e)?ee[e]=!0:(ve[e]=!0,!1)}function He(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qe(e,t,n,r){if(t===null||typeof t>"u"||He(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function K(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new K(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Q[t]=new K(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new K(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new K(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new K(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new K(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new K(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new K(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new K(e,5,!1,e.toLowerCase(),null,!1,!1)});var yt=/[\-:]([a-z])/g;function st(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yt,st);Q[t]=new K(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yt,st);Q[t]=new K(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yt,st);Q[t]=new K(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new K(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new K(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xe(e,t,n,r){var i=Q.hasOwnProperty(t)?Q[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qe(t,n,i,r)&&(n=null),r||i===null?Z(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var we=D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Je=Symbol.for("react.element"),Le=Symbol.for("react.portal"),Ie=Symbol.for("react.fragment"),Ve=Symbol.for("react.strict_mode"),At=Symbol.for("react.profiler"),gt=Symbol.for("react.provider"),bt=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),Ue=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),Pe=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),S=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=S&&e[S]||e["@@iterator"],typeof e=="function"?e:null)}var k=Object.assign,d;function y(e){if(d===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var R=!1;function _(e,t){if(!e||R)return"";R=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{R=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?y(e):""}function U(e){switch(e.tag){case 5:return y(e.type);case 16:return y("Lazy");case 13:return y("Suspense");case 19:return y("SuspenseList");case 0:case 2:case 15:return e=_(e.type,!1),e;case 11:return e=_(e.type.render,!1),e;case 1:return e=_(e.type,!0),e;default:return""}}function M(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ie:return"Fragment";case Le:return"Portal";case At:return"Profiler";case Ve:return"StrictMode";case Ue:return"Suspense";case et:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bt:return(e.displayName||"Context")+".Consumer";case gt:return(e._context.displayName||"Context")+".Provider";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dt:return t=e.displayName||null,t!==null?t:M(e.type)||"Memo";case Pe:t=e._payload,e=e._init;try{return M(e(t))}catch{}}return null}function V(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return M(t);case 8:return t===Ve?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function X(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Me(e){var t=X(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vr(e){e._valueTracker||(e._valueTracker=Me(e))}function Ia(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=X(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ii(e,t){var n=t.checked;return k({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Pa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=q(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Da(e,t){t=t.checked,t!=null&&Xe(e,"checked",t,!1)}function Pi(e,t){Da(e,t);var n=q(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Di(e,t.type,n):t.hasOwnProperty("defaultValue")&&Di(e,t.type,q(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Di(e,t,n){(t!=="number"||wr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+q(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return k({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ra(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(Fn(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:q(n)}}function Ba(e,t){var n=q(t.value),r=q(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _a(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Oa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ri(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Oa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,Ua=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ru=["Webkit","ms","Moz","O"];Object.keys(Bn).forEach(function(e){Ru.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bn[t]=Bn[e]})});function Ma(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Bn.hasOwnProperty(e)&&Bn[e]?(""+t).trim():t+"px"}function ja(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ma(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Bu=k({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bi(e,t){if(t){if(Bu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function _i(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=null;function Ui(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mi=null,sn=null,un=null;function za(e){if(e=nr(e)){if(typeof Mi!="function")throw Error(h(280));var t=e.stateNode;t&&(t=Hr(t),Mi(e.stateNode,e.type,t))}}function qa(e){sn?un?un.push(e):un=[e]:sn=e}function Wa(){if(sn){var e=sn,t=un;if(un=sn=null,za(e),t)for(e=0;e<t.length;e++)za(t[e])}}function Ha(e,t){return e(t)}function Qa(){}var ji=!1;function Va(e,t,n){if(ji)return e(t,n);ji=!0;try{return Ha(e,t,n)}finally{ji=!1,(sn!==null||un!==null)&&(Qa(),Wa())}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=Hr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var zi=!1;if(ce)try{var On={};Object.defineProperty(On,"passive",{get:function(){zi=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{zi=!1}function _u(e,t,n,r,i,o,a,l,s){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(g){this.onError(g)}}var Un=!1,xr=null,Er=!1,qi=null,Ou={onError:function(e){Un=!0,xr=e}};function Uu(e,t,n,r,i,o,a,l,s){Un=!1,xr=null,_u.apply(Ou,arguments)}function Mu(e,t,n,r,i,o,a,l,s){if(Uu.apply(this,arguments),Un){if(Un){var p=xr;Un=!1,xr=null}else throw Error(h(198));Er||(Er=!0,qi=p)}}function Gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ba(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ga(e){if(Gt(e)!==e)throw Error(h(188))}function ju(e){var t=e.alternate;if(!t){if(t=Gt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ga(i),e;if(o===r)return Ga(i),t;o=o.sibling}throw Error(h(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function $a(e){return e=ju(e),e!==null?Ya(e):null}function Ya(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ya(e);if(t!==null)return t;e=e.sibling}return null}var Za=z.unstable_scheduleCallback,Ka=z.unstable_cancelCallback,zu=z.unstable_shouldYield,qu=z.unstable_requestPaint,oe=z.unstable_now,Wu=z.unstable_getCurrentPriorityLevel,Wi=z.unstable_ImmediatePriority,Xa=z.unstable_UserBlockingPriority,kr=z.unstable_NormalPriority,Hu=z.unstable_LowPriority,Ja=z.unstable_IdlePriority,Nr=null,ct=null;function Qu(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Nr,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Gu,Vu=Math.log,bu=Math.LN2;function Gu(e){return e>>>=0,e===0?32:31-(Vu(e)/bu|0)|0}var Lr=64,Ar=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Cr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Mn(l):(o&=a,o!==0&&(r=Mn(o)))}else a=n&~i,a!==0?r=Mn(a):o!==0&&(r=Mn(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),i=1<<n,r|=e[n],t&=~i;return r}function $u(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-tt(o),l=1<<a,s=i[a];s===-1?((l&n)===0||(l&r)!==0)&&(i[a]=$u(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Hi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function el(){var e=Lr;return Lr<<=1,(Lr&4194240)===0&&(Lr=64),e}function Qi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function jn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function Zu(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Vi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var W=0;function tl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var nl,bi,rl,il,ol,Gi=!1,Tr=[],Ct=null,Tt=null,It=null,zn=new Map,qn=new Map,Pt=[],Ku="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function al(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(t.pointerId)}}function Wn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=nr(t),t!==null&&bi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Xu(e,t,n,r,i){switch(t){case"focusin":return Ct=Wn(Ct,e,t,n,r,i),!0;case"dragenter":return Tt=Wn(Tt,e,t,n,r,i),!0;case"mouseover":return It=Wn(It,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return zn.set(o,Wn(zn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,qn.set(o,Wn(qn.get(o)||null,e,t,n,r,i)),!0}return!1}function ll(e){var t=$t(e.target);if(t!==null){var n=Gt(t);if(n!==null){if(t=n.tag,t===13){if(t=ba(n),t!==null){e.blockedOn=t,ol(e.priority,function(){rl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ir(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Oi=r,n.target.dispatchEvent(r),Oi=null}else return t=nr(n),t!==null&&bi(t),e.blockedOn=n,!1;t.shift()}return!0}function sl(e,t,n){Ir(e)&&n.delete(t)}function Ju(){Gi=!1,Ct!==null&&Ir(Ct)&&(Ct=null),Tt!==null&&Ir(Tt)&&(Tt=null),It!==null&&Ir(It)&&(It=null),zn.forEach(sl),qn.forEach(sl)}function Hn(e,t){e.blockedOn===t&&(e.blockedOn=null,Gi||(Gi=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,Ju)))}function Qn(e){function t(i){return Hn(i,e)}if(0<Tr.length){Hn(Tr[0],e);for(var n=1;n<Tr.length;n++){var r=Tr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ct!==null&&Hn(Ct,e),Tt!==null&&Hn(Tt,e),It!==null&&Hn(It,e),zn.forEach(t),qn.forEach(t),n=0;n<Pt.length;n++)r=Pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)ll(n),n.blockedOn===null&&Pt.shift()}var dn=we.ReactCurrentBatchConfig,Pr=!0;function ed(e,t,n,r){var i=W,o=dn.transition;dn.transition=null;try{W=1,$i(e,t,n,r)}finally{W=i,dn.transition=o}}function td(e,t,n,r){var i=W,o=dn.transition;dn.transition=null;try{W=4,$i(e,t,n,r)}finally{W=i,dn.transition=o}}function $i(e,t,n,r){if(Pr){var i=Yi(e,t,n,r);if(i===null)po(e,t,r,Dr,n),al(e,r);else if(Xu(i,e,t,n,r))r.stopPropagation();else if(al(e,r),t&4&&-1<Ku.indexOf(e)){for(;i!==null;){var o=nr(i);if(o!==null&&nl(o),o=Yi(e,t,n,r),o===null&&po(e,t,r,Dr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else po(e,t,r,null,n)}}var Dr=null;function Yi(e,t,n,r){if(Dr=null,e=Ui(r),e=$t(e),e!==null)if(t=Gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ba(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Dr=e,null}function ul(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wu()){case Wi:return 1;case Xa:return 4;case kr:case Hu:return 16;case Ja:return 536870912;default:return 16}default:return 16}}var Dt=null,Zi=null,Fr=null;function dl(){if(Fr)return Fr;var e,t=Zi,n=t.length,r,i="value"in Dt?Dt.value:Dt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Fr=i.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Br(){return!0}function cl(){return!1}function je(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Br:cl,this.isPropagationStopped=cl,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Br)},persist:function(){},isPersistent:Br}),t}var cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ki=je(cn),Vn=k({},cn,{view:0,detail:0}),nd=je(Vn),Xi,Ji,bn,_r=k({},Vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:to,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bn&&(bn&&e.type==="mousemove"?(Xi=e.screenX-bn.screenX,Ji=e.screenY-bn.screenY):Ji=Xi=0,bn=e),Xi)},movementY:function(e){return"movementY"in e?e.movementY:Ji}}),fl=je(_r),rd=k({},_r,{dataTransfer:0}),id=je(rd),od=k({},Vn,{relatedTarget:0}),eo=je(od),ad=k({},cn,{animationName:0,elapsedTime:0,pseudoElement:0}),ld=je(ad),sd=k({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ud=je(sd),dd=k({},cn,{data:0}),pl=je(dd),cd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pd[e])?!!t[e]:!1}function to(){return hd}var md=k({},Vn,{key:function(e){if(e.key){var t=cd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:to,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yd=je(md),gd=k({},_r,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hl=je(gd),vd=k({},Vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:to}),wd=je(vd),Sd=k({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),xd=je(Sd),Ed=k({},_r,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kd=je(Ed),Nd=[9,13,27,32],no=ce&&"CompositionEvent"in window,Gn=null;ce&&"documentMode"in document&&(Gn=document.documentMode);var Ld=ce&&"TextEvent"in window&&!Gn,ml=ce&&(!no||Gn&&8<Gn&&11>=Gn),yl=" ",gl=!1;function vl(e,t){switch(e){case"keyup":return Nd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function Ad(e,t){switch(e){case"compositionend":return wl(t);case"keypress":return t.which!==32?null:(gl=!0,yl);case"textInput":return e=t.data,e===yl&&gl?null:e;default:return null}}function Cd(e,t){if(fn)return e==="compositionend"||!no&&vl(e,t)?(e=dl(),Fr=Zi=Dt=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ml&&t.locale!=="ko"?null:t.data;default:return null}}var Td={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Td[e.type]:t==="textarea"}function xl(e,t,n,r){qa(r),t=zr(t,"onChange"),0<t.length&&(n=new Ki("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $n=null,Yn=null;function Id(e){jl(e,0)}function Or(e){var t=gn(e);if(Ia(t))return e}function Pd(e,t){if(e==="change")return t}var El=!1;if(ce){var ro;if(ce){var io="oninput"in document;if(!io){var kl=document.createElement("div");kl.setAttribute("oninput","return;"),io=typeof kl.oninput=="function"}ro=io}else ro=!1;El=ro&&(!document.documentMode||9<document.documentMode)}function Nl(){$n&&($n.detachEvent("onpropertychange",Ll),Yn=$n=null)}function Ll(e){if(e.propertyName==="value"&&Or(Yn)){var t=[];xl(t,Yn,e,Ui(e)),Va(Id,t)}}function Dd(e,t,n){e==="focusin"?(Nl(),$n=t,Yn=n,$n.attachEvent("onpropertychange",Ll)):e==="focusout"&&Nl()}function Fd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Or(Yn)}function Rd(e,t){if(e==="click")return Or(t)}function Bd(e,t){if(e==="input"||e==="change")return Or(t)}function _d(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:_d;function Zn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!H.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function Al(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cl(e,t){var n=Al(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Al(n)}}function Tl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Il(){for(var e=window,t=wr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wr(e.document)}return t}function oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Od(e){var t=Il(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Tl(n.ownerDocument.documentElement,n)){if(r!==null&&oo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Cl(n,o);var a=Cl(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ud=ce&&"documentMode"in document&&11>=document.documentMode,pn=null,ao=null,Kn=null,lo=!1;function Pl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lo||pn==null||pn!==wr(r)||(r=pn,"selectionStart"in r&&oo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kn&&Zn(Kn,r)||(Kn=r,r=zr(ao,"onSelect"),0<r.length&&(t=new Ki("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pn)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hn={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},so={},Dl={};ce&&(Dl=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function Mr(e){if(so[e])return so[e];if(!hn[e])return e;var t=hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Dl)return so[e]=t[n];return e}var Fl=Mr("animationend"),Rl=Mr("animationiteration"),Bl=Mr("animationstart"),_l=Mr("transitionend"),Ol=new Map,Ul="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ft(e,t){Ol.set(e,t),G(t,[e])}for(var uo=0;uo<Ul.length;uo++){var co=Ul[uo],Md=co.toLowerCase(),jd=co[0].toUpperCase()+co.slice(1);Ft(Md,"on"+jd)}Ft(Fl,"onAnimationEnd"),Ft(Rl,"onAnimationIteration"),Ft(Bl,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(_l,"onTransitionEnd"),de("onMouseEnter",["mouseout","mouseover"]),de("onMouseLeave",["mouseout","mouseover"]),de("onPointerEnter",["pointerout","pointerover"]),de("onPointerLeave",["pointerout","pointerover"]),G("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),G("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),G("onBeforeInput",["compositionend","keypress","textInput","paste"]),G("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),G("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),G("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xn));function Ml(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Mu(r,t,void 0,e),e.currentTarget=null}function jl(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,p=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Ml(i,l,p),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,p=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Ml(i,l,p),o=s}}}if(Er)throw e=qi,Er=!1,qi=null,e}function $(e,t){var n=t[wo];n===void 0&&(n=t[wo]=new Set);var r=e+"__bubble";n.has(r)||(zl(t,e,2,!1),n.add(r))}function fo(e,t,n){var r=0;t&&(r|=4),zl(n,e,r,t)}var jr="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[jr]){e[jr]=!0,ge.forEach(function(n){n!=="selectionchange"&&(zd.has(n)||fo(n,!1,e),fo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jr]||(t[jr]=!0,fo("selectionchange",!1,t))}}function zl(e,t,n,r){switch(ul(t)){case 1:var i=ed;break;case 4:i=td;break;default:i=$i}n=i.bind(null,t,n,e),i=void 0,!zi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function po(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=$t(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Va(function(){var p=o,g=Ui(n),v=[];e:{var m=Ol.get(e);if(m!==void 0){var x=Ki,N=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":x=yd;break;case"focusin":N="focus",x=eo;break;case"focusout":N="blur",x=eo;break;case"beforeblur":case"afterblur":x=eo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=fl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=wd;break;case Fl:case Rl:case Bl:x=ld;break;case _l:x=xd;break;case"scroll":x=nd;break;case"wheel":x=kd;break;case"copy":case"cut":case"paste":x=ud;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=hl}var L=(t&4)!==0,ae=!L&&e==="scroll",c=L?m!==null?m+"Capture":null:m;L=[];for(var u=p,f;u!==null;){f=u;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,c!==null&&(w=_n(u,c),w!=null&&L.push(er(u,w,f)))),ae)break;u=u.return}0<L.length&&(m=new x(m,N,null,n,g),v.push({event:m,listeners:L}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==Oi&&(N=n.relatedTarget||n.fromElement)&&($t(N)||N[vt]))break e;if((x||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,x?(N=n.relatedTarget||n.toElement,x=p,N=N?$t(N):null,N!==null&&(ae=Gt(N),N!==ae||N.tag!==5&&N.tag!==6)&&(N=null)):(x=null,N=p),x!==N)){if(L=fl,w="onMouseLeave",c="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(L=hl,w="onPointerLeave",c="onPointerEnter",u="pointer"),ae=x==null?m:gn(x),f=N==null?m:gn(N),m=new L(w,u+"leave",x,n,g),m.target=ae,m.relatedTarget=f,w=null,$t(g)===p&&(L=new L(c,u+"enter",N,n,g),L.target=f,L.relatedTarget=ae,w=L),ae=w,x&&N)t:{for(L=x,c=N,u=0,f=L;f;f=mn(f))u++;for(f=0,w=c;w;w=mn(w))f++;for(;0<u-f;)L=mn(L),u--;for(;0<f-u;)c=mn(c),f--;for(;u--;){if(L===c||c!==null&&L===c.alternate)break t;L=mn(L),c=mn(c)}L=null}else L=null;x!==null&&ql(v,m,x,L,!1),N!==null&&ae!==null&&ql(v,ae,N,L,!0)}}e:{if(m=p?gn(p):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var A=Pd;else if(Sl(m))if(El)A=Bd;else{A=Fd;var C=Dd}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(A=Rd);if(A&&(A=A(e,p))){xl(v,A,n,g);break e}C&&C(e,m,p),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Di(m,"number",m.value)}switch(C=p?gn(p):window,e){case"focusin":(Sl(C)||C.contentEditable==="true")&&(pn=C,ao=p,Kn=null);break;case"focusout":Kn=ao=pn=null;break;case"mousedown":lo=!0;break;case"contextmenu":case"mouseup":case"dragend":lo=!1,Pl(v,n,g);break;case"selectionchange":if(Ud)break;case"keydown":case"keyup":Pl(v,n,g)}var T;if(no)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else fn?vl(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(ml&&n.locale!=="ko"&&(fn||P!=="onCompositionStart"?P==="onCompositionEnd"&&fn&&(T=dl()):(Dt=g,Zi="value"in Dt?Dt.value:Dt.textContent,fn=!0)),C=zr(p,P),0<C.length&&(P=new pl(P,e,null,n,g),v.push({event:P,listeners:C}),T?P.data=T:(T=wl(n),T!==null&&(P.data=T)))),(T=Ld?Ad(e,n):Cd(e,n))&&(p=zr(p,"onBeforeInput"),0<p.length&&(g=new pl("onBeforeInput","beforeinput",null,n,g),v.push({event:g,listeners:p}),g.data=T))}jl(v,t)})}function er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=_n(e,n),o!=null&&r.unshift(er(e,o,i)),o=_n(e,t),o!=null&&r.push(er(e,o,i))),e=e.return}return r}function mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ql(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,p=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&p!==null&&(l=p,i?(s=_n(n,o),s!=null&&a.unshift(er(n,s,l))):i||(s=_n(n,o),s!=null&&a.push(er(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var qd=/\r\n?/g,Wd=/\u0000|\uFFFD/g;function Wl(e){return(typeof e=="string"?e:""+e).replace(qd,`
`).replace(Wd,"")}function qr(e,t,n){if(t=Wl(t),Wl(e)!==t&&n)throw Error(h(425))}function Wr(){}var ho=null,mo=null;function yo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var go=typeof setTimeout=="function"?setTimeout:void 0,Hd=typeof clearTimeout=="function"?clearTimeout:void 0,Hl=typeof Promise=="function"?Promise:void 0,Qd=typeof queueMicrotask=="function"?queueMicrotask:typeof Hl<"u"?function(e){return Hl.resolve(null).then(e).catch(Vd)}:go;function Vd(e){setTimeout(function(){throw e})}function vo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qn(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ql(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),ft="__reactFiber$"+yn,tr="__reactProps$"+yn,vt="__reactContainer$"+yn,wo="__reactEvents$"+yn,bd="__reactListeners$"+yn,Gd="__reactHandles$"+yn;function $t(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ql(e);e!==null;){if(n=e[ft])return n;e=Ql(e)}return t}e=n,n=e.parentNode}return null}function nr(e){return e=e[ft]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function Hr(e){return e[tr]||null}var So=[],vn=-1;function Bt(e){return{current:e}}function Y(e){0>vn||(e.current=So[vn],So[vn]=null,vn--)}function b(e,t){vn++,So[vn]=e.current,e.current=t}var _t={},Se=Bt(_t),De=Bt(!1),Yt=_t;function wn(e,t){var n=e.type.contextTypes;if(!n)return _t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(e){return e=e.childContextTypes,e!=null}function Qr(){Y(De),Y(Se)}function Vl(e,t,n){if(Se.current!==_t)throw Error(h(168));b(Se,t),b(De,n)}function bl(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(h(108,V(e)||"Unknown",i));return k({},n,r)}function Vr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_t,Yt=Se.current,b(Se,e),b(De,De.current),!0}function Gl(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=bl(e,t,Yt),r.__reactInternalMemoizedMergedChildContext=e,Y(De),Y(Se),b(Se,e)):Y(De),b(De,n)}var wt=null,br=!1,xo=!1;function $l(e){wt===null?wt=[e]:wt.push(e)}function $d(e){br=!0,$l(e)}function Ot(){if(!xo&&wt!==null){xo=!0;var e=0,t=W;try{var n=wt;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,br=!1}catch(i){throw wt!==null&&(wt=wt.slice(e+1)),Za(Wi,Ot),i}finally{W=t,xo=!1}}return null}var Sn=[],xn=0,Gr=null,$r=0,be=[],Ge=0,Zt=null,St=1,xt="";function Kt(e,t){Sn[xn++]=$r,Sn[xn++]=Gr,Gr=e,$r=t}function Yl(e,t,n){be[Ge++]=St,be[Ge++]=xt,be[Ge++]=Zt,Zt=e;var r=St;e=xt;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var o=32-tt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,St=1<<32-tt(t)+i|n<<i|r,xt=o+e}else St=1<<o|n<<i|r,xt=e}function Eo(e){e.return!==null&&(Kt(e,1),Yl(e,1,0))}function ko(e){for(;e===Gr;)Gr=Sn[--xn],Sn[xn]=null,$r=Sn[--xn],Sn[xn]=null;for(;e===Zt;)Zt=be[--Ge],be[Ge]=null,xt=be[--Ge],be[Ge]=null,St=be[--Ge],be[Ge]=null}var ze=null,qe=null,J=!1,rt=null;function Zl(e,t){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Kl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,qe=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:St,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,qe=null,!0):!1;default:return!1}}function No(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Lo(e){if(J){var t=qe;if(t){var n=t;if(!Kl(e,t)){if(No(e))throw Error(h(418));t=Rt(n.nextSibling);var r=ze;t&&Kl(e,t)?Zl(r,n):(e.flags=e.flags&-4097|2,J=!1,ze=e)}}else{if(No(e))throw Error(h(418));e.flags=e.flags&-4097|2,J=!1,ze=e}}}function Xl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Yr(e){if(e!==ze)return!1;if(!J)return Xl(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yo(e.type,e.memoizedProps)),t&&(t=qe)){if(No(e))throw Jl(),Error(h(418));for(;t;)Zl(e,t),t=Rt(t.nextSibling)}if(Xl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=ze?Rt(e.stateNode.nextSibling):null;return!0}function Jl(){for(var e=qe;e;)e=Rt(e.nextSibling)}function En(){qe=ze=null,J=!1}function Ao(e){rt===null?rt=[e]:rt.push(e)}var Yd=we.ReactCurrentBatchConfig;function rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function Zr(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function es(e){var t=e._init;return t(e._payload)}function ts(e){function t(c,u){if(e){var f=c.deletions;f===null?(c.deletions=[u],c.flags|=16):f.push(u)}}function n(c,u){if(!e)return null;for(;u!==null;)t(c,u),u=u.sibling;return null}function r(c,u){for(c=new Map;u!==null;)u.key!==null?c.set(u.key,u):c.set(u.index,u),u=u.sibling;return c}function i(c,u){return c=Qt(c,u),c.index=0,c.sibling=null,c}function o(c,u,f){return c.index=f,e?(f=c.alternate,f!==null?(f=f.index,f<u?(c.flags|=2,u):f):(c.flags|=2,u)):(c.flags|=1048576,u)}function a(c){return e&&c.alternate===null&&(c.flags|=2),c}function l(c,u,f,w){return u===null||u.tag!==6?(u=ga(f,c.mode,w),u.return=c,u):(u=i(u,f),u.return=c,u)}function s(c,u,f,w){var A=f.type;return A===Ie?g(c,u,f.props.children,w,f.key):u!==null&&(u.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Pe&&es(A)===u.type)?(w=i(u,f.props),w.ref=rr(c,u,f),w.return=c,w):(w=Si(f.type,f.key,f.props,null,c.mode,w),w.ref=rr(c,u,f),w.return=c,w)}function p(c,u,f,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=va(f,c.mode,w),u.return=c,u):(u=i(u,f.children||[]),u.return=c,u)}function g(c,u,f,w,A){return u===null||u.tag!==7?(u=an(f,c.mode,w,A),u.return=c,u):(u=i(u,f),u.return=c,u)}function v(c,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ga(""+u,c.mode,f),u.return=c,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Je:return f=Si(u.type,u.key,u.props,null,c.mode,f),f.ref=rr(c,null,u),f.return=c,f;case Le:return u=va(u,c.mode,f),u.return=c,u;case Pe:var w=u._init;return v(c,w(u._payload),f)}if(Fn(u)||I(u))return u=an(u,c.mode,f,null),u.return=c,u;Zr(c,u)}return null}function m(c,u,f,w){var A=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return A!==null?null:l(c,u,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Je:return f.key===A?s(c,u,f,w):null;case Le:return f.key===A?p(c,u,f,w):null;case Pe:return A=f._init,m(c,u,A(f._payload),w)}if(Fn(f)||I(f))return A!==null?null:g(c,u,f,w,null);Zr(c,f)}return null}function x(c,u,f,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return c=c.get(f)||null,l(u,c,""+w,A);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Je:return c=c.get(w.key===null?f:w.key)||null,s(u,c,w,A);case Le:return c=c.get(w.key===null?f:w.key)||null,p(u,c,w,A);case Pe:var C=w._init;return x(c,u,f,C(w._payload),A)}if(Fn(w)||I(w))return c=c.get(f)||null,g(u,c,w,A,null);Zr(u,w)}return null}function N(c,u,f,w){for(var A=null,C=null,T=u,P=u=0,he=null;T!==null&&P<f.length;P++){T.index>P?(he=T,T=null):he=T.sibling;var j=m(c,T,f[P],w);if(j===null){T===null&&(T=he);break}e&&T&&j.alternate===null&&t(c,T),u=o(j,u,P),C===null?A=j:C.sibling=j,C=j,T=he}if(P===f.length)return n(c,T),J&&Kt(c,P),A;if(T===null){for(;P<f.length;P++)T=v(c,f[P],w),T!==null&&(u=o(T,u,P),C===null?A=T:C.sibling=T,C=T);return J&&Kt(c,P),A}for(T=r(c,T);P<f.length;P++)he=x(T,c,P,f[P],w),he!==null&&(e&&he.alternate!==null&&T.delete(he.key===null?P:he.key),u=o(he,u,P),C===null?A=he:C.sibling=he,C=he);return e&&T.forEach(function(Vt){return t(c,Vt)}),J&&Kt(c,P),A}function L(c,u,f,w){var A=I(f);if(typeof A!="function")throw Error(h(150));if(f=A.call(f),f==null)throw Error(h(151));for(var C=A=null,T=u,P=u=0,he=null,j=f.next();T!==null&&!j.done;P++,j=f.next()){T.index>P?(he=T,T=null):he=T.sibling;var Vt=m(c,T,j.value,w);if(Vt===null){T===null&&(T=he);break}e&&T&&Vt.alternate===null&&t(c,T),u=o(Vt,u,P),C===null?A=Vt:C.sibling=Vt,C=Vt,T=he}if(j.done)return n(c,T),J&&Kt(c,P),A;if(T===null){for(;!j.done;P++,j=f.next())j=v(c,j.value,w),j!==null&&(u=o(j,u,P),C===null?A=j:C.sibling=j,C=j);return J&&Kt(c,P),A}for(T=r(c,T);!j.done;P++,j=f.next())j=x(T,c,P,j.value,w),j!==null&&(e&&j.alternate!==null&&T.delete(j.key===null?P:j.key),u=o(j,u,P),C===null?A=j:C.sibling=j,C=j);return e&&T.forEach(function(Tc){return t(c,Tc)}),J&&Kt(c,P),A}function ae(c,u,f,w){if(typeof f=="object"&&f!==null&&f.type===Ie&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Je:e:{for(var A=f.key,C=u;C!==null;){if(C.key===A){if(A=f.type,A===Ie){if(C.tag===7){n(c,C.sibling),u=i(C,f.props.children),u.return=c,c=u;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Pe&&es(A)===C.type){n(c,C.sibling),u=i(C,f.props),u.ref=rr(c,C,f),u.return=c,c=u;break e}n(c,C);break}else t(c,C);C=C.sibling}f.type===Ie?(u=an(f.props.children,c.mode,w,f.key),u.return=c,c=u):(w=Si(f.type,f.key,f.props,null,c.mode,w),w.ref=rr(c,u,f),w.return=c,c=w)}return a(c);case Le:e:{for(C=f.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(c,u.sibling),u=i(u,f.children||[]),u.return=c,c=u;break e}else{n(c,u);break}else t(c,u);u=u.sibling}u=va(f,c.mode,w),u.return=c,c=u}return a(c);case Pe:return C=f._init,ae(c,u,C(f._payload),w)}if(Fn(f))return N(c,u,f,w);if(I(f))return L(c,u,f,w);Zr(c,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(c,u.sibling),u=i(u,f),u.return=c,c=u):(n(c,u),u=ga(f,c.mode,w),u.return=c,c=u),a(c)):n(c,u)}return ae}var kn=ts(!0),ns=ts(!1),Kr=Bt(null),Xr=null,Nn=null,Co=null;function To(){Co=Nn=Xr=null}function Io(e){var t=Kr.current;Y(Kr),e._currentValue=t}function Po(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ln(e,t){Xr=e,Co=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Re=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(Co!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(Xr===null)throw Error(h(308));Nn=e,Xr.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var Xt=null;function Do(e){Xt===null?Xt=[e]:Xt.push(e)}function rs(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Do(t)):(n.next=i.next,i.next=n),t.interleaved=n,Et(e,r)}function Et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function is(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(O&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Et(e,n)}return i=r.interleaved,i===null?(t.next=t,Do(r)):(t.next=i.next,i.next=t),r.interleaved=t,Et(e,n)}function Jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vi(e,n)}}function os(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ei(e,t,n,r){var i=e.updateQueue;Ut=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,p=s.next;s.next=null,a===null?o=p:a.next=p,a=s;var g=e.alternate;g!==null&&(g=g.updateQueue,l=g.lastBaseUpdate,l!==a&&(l===null?g.firstBaseUpdate=p:l.next=p,g.lastBaseUpdate=s))}if(o!==null){var v=i.baseState;a=0,g=p=s=null,l=o;do{var m=l.lane,x=l.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=e,L=l;switch(m=t,x=n,L.tag){case 1:if(N=L.payload,typeof N=="function"){v=N.call(x,v,m);break e}v=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=L.payload,m=typeof N=="function"?N.call(x,v,m):N,m==null)break e;v=k({},v,m);break e;case 2:Ut=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else x={eventTime:x,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},g===null?(p=g=x,s=v):g=g.next=x,a|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(g===null&&(s=v),i.baseState=s,i.firstBaseUpdate=p,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);tn|=a,e.lanes=a,e.memoizedState=v}}function as(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(h(191,i));i.call(r)}}}var ir={},pt=Bt(ir),or=Bt(ir),ar=Bt(ir);function Jt(e){if(e===ir)throw Error(h(174));return e}function Ro(e,t){switch(b(ar,t),b(or,e),b(pt,ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ri(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ri(t,e)}Y(pt),b(pt,t)}function An(){Y(pt),Y(or),Y(ar)}function ls(e){Jt(ar.current);var t=Jt(pt.current),n=Ri(t,e.type);t!==n&&(b(or,e),b(pt,n))}function Bo(e){or.current===e&&(Y(pt),Y(or))}var te=Bt(0);function ti(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=[];function Oo(){for(var e=0;e<_o.length;e++)_o[e]._workInProgressVersionPrimary=null;_o.length=0}var ni=we.ReactCurrentDispatcher,Uo=we.ReactCurrentBatchConfig,en=0,ne=null,se=null,fe=null,ri=!1,lr=!1,sr=0,Zd=0;function xe(){throw Error(h(321))}function Mo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function jo(e,t,n,r,i,o){if(en=o,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ni.current=e===null||e.memoizedState===null?ec:tc,e=n(r,i),lr){o=0;do{if(lr=!1,sr=0,25<=o)throw Error(h(301));o+=1,fe=se=null,t.updateQueue=null,ni.current=nc,e=n(r,i)}while(lr)}if(ni.current=ai,t=se!==null&&se.next!==null,en=0,fe=se=ne=null,ri=!1,t)throw Error(h(300));return e}function zo(){var e=sr!==0;return sr=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?ne.memoizedState=fe=e:fe=fe.next=e,fe}function Ye(){if(se===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=fe===null?ne.memoizedState:fe.next;if(t!==null)fe=t,se=e;else{if(e===null)throw Error(h(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},fe===null?ne.memoizedState=fe=e:fe=fe.next=e}return fe}function ur(e,t){return typeof t=="function"?t(e):t}function qo(e){var t=Ye(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=se,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,p=o;do{var g=p.lane;if((en&g)===g)s!==null&&(s=s.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var v={lane:g,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};s===null?(l=s=v,a=r):s=s.next=v,ne.lanes|=g,tn|=g}p=p.next}while(p!==null&&p!==o);s===null?a=r:s.next=l,nt(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ne.lanes|=o,tn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wo(e){var t=Ye(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);nt(o,t.memoizedState)||(Re=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ss(){}function us(e,t){var n=ne,r=Ye(),i=t(),o=!nt(r.memoizedState,i);if(o&&(r.memoizedState=i,Re=!0),r=r.queue,Ho(fs.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,dr(9,cs.bind(null,n,r,i,t),void 0,null),pe===null)throw Error(h(349));(en&30)!==0||ds(n,t,i)}return i}function ds(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cs(e,t,n,r){t.value=n,t.getSnapshot=r,ps(t)&&hs(e)}function fs(e,t,n){return n(function(){ps(t)&&hs(e)})}function ps(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function hs(e){var t=Et(e,1);t!==null&&lt(t,e,1,-1)}function ms(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:e},t.queue=e,e=e.dispatch=Jd.bind(null,ne,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ys(){return Ye().memoizedState}function ii(e,t,n,r){var i=ht();ne.flags|=e,i.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function oi(e,t,n,r){var i=Ye();r=r===void 0?null:r;var o=void 0;if(se!==null){var a=se.memoizedState;if(o=a.destroy,r!==null&&Mo(r,a.deps)){i.memoizedState=dr(t,n,o,r);return}}ne.flags|=e,i.memoizedState=dr(1|t,n,o,r)}function gs(e,t){return ii(8390656,8,e,t)}function Ho(e,t){return oi(2048,8,e,t)}function vs(e,t){return oi(4,2,e,t)}function ws(e,t){return oi(4,4,e,t)}function Ss(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){return n=n!=null?n.concat([e]):null,oi(4,4,Ss.bind(null,t,e),n)}function Qo(){}function Es(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ks(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ns(e,t,n){return(en&21)===0?(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n):(nt(n,t)||(n=el(),ne.lanes|=n,tn|=n,e.baseState=!0),t)}function Kd(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=Uo.transition;Uo.transition={};try{e(!1),t()}finally{W=n,Uo.transition=r}}function Ls(){return Ye().memoizedState}function Xd(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},As(e))Cs(t,n);else if(n=rs(e,t,n,r),n!==null){var i=Ce();lt(n,e,r,i),Ts(n,t,r)}}function Jd(e,t,n){var r=Wt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(As(e))Cs(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,nt(l,a)){var s=t.interleaved;s===null?(i.next=i,Do(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=rs(e,t,i,r),n!==null&&(i=Ce(),lt(n,e,r,i),Ts(n,t,r))}}function As(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Cs(e,t){lr=ri=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ts(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vi(e,n)}}var ai={readContext:$e,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},ec={readContext:$e,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:gs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ii(4194308,4,Ss.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ii(4194308,4,e,t)},useInsertionEffect:function(e,t){return ii(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xd.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:ms,useDebugValue:Qo,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=ms(!1),t=e[0];return e=Kd.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,i=ht();if(J){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),pe===null)throw Error(h(349));(en&30)!==0||ds(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,gs(fs.bind(null,r,o,e),[e]),r.flags|=2048,dr(9,cs.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ht(),t=pe.identifierPrefix;if(J){var n=xt,r=St;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tc={readContext:$e,useCallback:Es,useContext:$e,useEffect:Ho,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ws,useMemo:ks,useReducer:qo,useRef:ys,useState:function(){return qo(ur)},useDebugValue:Qo,useDeferredValue:function(e){var t=Ye();return Ns(t,se.memoizedState,e)},useTransition:function(){var e=qo(ur)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:ss,useSyncExternalStore:us,useId:Ls,unstable_isNewReconciler:!1},nc={readContext:$e,useCallback:Es,useContext:$e,useEffect:Ho,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ws,useMemo:ks,useReducer:Wo,useRef:ys,useState:function(){return Wo(ur)},useDebugValue:Qo,useDeferredValue:function(e){var t=Ye();return se===null?t.memoizedState=e:Ns(t,se.memoizedState,e)},useTransition:function(){var e=Wo(ur)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:ss,useSyncExternalStore:us,useId:Ls,unstable_isNewReconciler:!1};function it(e,t){if(e&&e.defaultProps){t=k({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:k({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var li={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=Wt(e),o=kt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Mt(e,o,i),t!==null&&(lt(t,e,i,r),Jr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=Wt(e),o=kt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Mt(e,o,i),t!==null&&(lt(t,e,i,r),Jr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=Wt(e),i=kt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Mt(e,i,r),t!==null&&(lt(t,e,r,n),Jr(t,e,r))}};function Is(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(i,o):!0}function Ps(e,t,n){var r=!1,i=_t,o=t.contextType;return typeof o=="object"&&o!==null?o=$e(o):(i=Fe(t)?Yt:Se.current,r=t.contextTypes,o=(r=r!=null)?wn(e,i):_t),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=li,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ds(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&li.enqueueReplaceState(t,t.state,null)}function bo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Fo(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=$e(o):(o=Fe(t)?Yt:Se.current,i.context=wn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Vo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&li.enqueueReplaceState(i,i.state,null),ei(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Cn(e,t){try{var n="",r=t;do n+=U(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Go(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $o(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rc=typeof WeakMap=="function"?WeakMap:Map;function Fs(e,t,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){hi||(hi=!0,ua=r),$o(e,t)},n}function Rs(e,t,n){n=kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){$o(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){$o(e,t),typeof r!="function"&&(zt===null?zt=new Set([this]):zt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Bs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rc;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=gc.bind(null,e,t,n),t.then(e,e))}function _s(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Os(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kt(-1,1),t.tag=2,Mt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ic=we.ReactCurrentOwner,Re=!1;function Ae(e,t,n,r){t.child=e===null?ns(t,null,n,r):kn(t,e.child,n,r)}function Us(e,t,n,r,i){n=n.render;var o=t.ref;return Ln(t,i),r=jo(e,t,n,r,o,i),n=zo(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(J&&n&&Eo(t),t.flags|=1,Ae(e,t,r,i),t.child)}function Ms(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ya(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,js(e,t,o,r,i)):(e=Si(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(a,r)&&e.ref===t.ref)return Nt(e,t,i)}return t.flags|=1,e=Qt(o,r),e.ref=t.ref,e.return=t,t.child=e}function js(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Zn(o,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Re=!0);else return t.lanes=e.lanes,Nt(e,t,i)}return Yo(e,t,n,r,i)}function zs(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(In,We),We|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,b(In,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,b(In,We),We|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,b(In,We),We|=r;return Ae(e,t,i,n),t.child}function qs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yo(e,t,n,r,i){var o=Fe(n)?Yt:Se.current;return o=wn(t,o),Ln(t,i),n=jo(e,t,n,r,o,i),r=zo(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(J&&r&&Eo(t),t.flags|=1,Ae(e,t,n,i),t.child)}function Ws(e,t,n,r,i){if(Fe(n)){var o=!0;Vr(t)}else o=!1;if(Ln(t,i),t.stateNode===null)ui(e,t),Ps(t,n,r),bo(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,p=n.contextType;typeof p=="object"&&p!==null?p=$e(p):(p=Fe(n)?Yt:Se.current,p=wn(t,p));var g=n.getDerivedStateFromProps,v=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";v||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==p)&&Ds(t,a,r,p),Ut=!1;var m=t.memoizedState;a.state=m,ei(t,r,a,i),s=t.memoizedState,l!==r||m!==s||De.current||Ut?(typeof g=="function"&&(Vo(t,n,g,r),s=t.memoizedState),(l=Ut||Is(t,n,l,r,m,s,p))?(v||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=p,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,is(e,t),l=t.memoizedProps,p=t.type===t.elementType?l:it(t.type,l),a.props=p,v=t.pendingProps,m=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=$e(s):(s=Fe(n)?Yt:Se.current,s=wn(t,s));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==v||m!==s)&&Ds(t,a,r,s),Ut=!1,m=t.memoizedState,a.state=m,ei(t,r,a,i);var N=t.memoizedState;l!==v||m!==N||De.current||Ut?(typeof x=="function"&&(Vo(t,n,x,r),N=t.memoizedState),(p=Ut||Is(t,n,p,r,m,N,s)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,N,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,N,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),a.props=r,a.state=N,a.context=s,r=p):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Zo(e,t,n,r,o,i)}function Zo(e,t,n,r,i,o){qs(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Gl(t,n,!1),Nt(e,t,o);r=t.stateNode,ic.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=kn(t,e.child,null,o),t.child=kn(t,null,l,o)):Ae(e,t,l,o),t.memoizedState=r.state,i&&Gl(t,n,!0),t.child}function Hs(e){var t=e.stateNode;t.pendingContext?Vl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vl(e,t.context,!1),Ro(e,t.containerInfo)}function Qs(e,t,n,r,i){return En(),Ao(i),t.flags|=256,Ae(e,t,n,r),t.child}var Ko={dehydrated:null,treeContext:null,retryLane:0};function Xo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vs(e,t,n){var r=t.pendingProps,i=te.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),b(te,i&1),e===null)return Lo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=a):o=xi(a,r,0,null),e=an(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Xo(n),t.memoizedState=Ko,e):Jo(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return oc(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Qt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Qt(l,o):(o=an(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Xo(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Ko,r}return o=e.child,e=o.sibling,r=Qt(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Jo(e,t){return t=xi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function si(e,t,n,r){return r!==null&&Ao(r),kn(t,e.child,null,n),e=Jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function oc(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Go(Error(h(422))),si(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=xi({mode:"visible",children:r.children},i,0,null),o=an(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&kn(t,e.child,null,a),t.child.memoizedState=Xo(a),t.memoizedState=Ko,o);if((t.mode&1)===0)return si(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(h(419)),r=Go(o,r,void 0),si(e,t,a,r)}if(l=(a&e.childLanes)!==0,Re||l){if(r=pe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|a))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Et(e,i),lt(r,e,i,-1))}return ma(),r=Go(Error(h(421))),si(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=vc.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,qe=Rt(i.nextSibling),ze=t,J=!0,rt=null,e!==null&&(be[Ge++]=St,be[Ge++]=xt,be[Ge++]=Zt,St=e.id,xt=e.overflow,Zt=t),t=Jo(t,r.children),t.flags|=4096,t)}function bs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Po(e.return,t,n)}function ea(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Gs(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ae(e,t,r.children,n),r=te.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bs(e,n,t);else if(e.tag===19)bs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(b(te,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ti(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ea(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ti(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ea(t,!0,n,null,o);break;case"together":ea(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ui(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ac(e,t,n){switch(t.tag){case 3:Hs(t),En();break;case 5:ls(t);break;case 1:Fe(t.type)&&Vr(t);break;case 4:Ro(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;b(Kr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(b(te,te.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Vs(e,t,n):(b(te,te.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);b(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Gs(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),b(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,zs(e,t,n)}return Nt(e,t,n)}var $s,ta,Ys,Zs;$s=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ta=function(){},Ys=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Jt(pt.current);var o=null;switch(n){case"input":i=Ii(e,i),r=Ii(e,r),o=[];break;case"select":i=k({},i,{value:void 0}),r=k({},r,{value:void 0}),o=[];break;case"textarea":i=Fi(e,i),r=Fi(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}Bi(n,r);var a;n=null;for(p in i)if(!r.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var l=i[p];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(F.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in r){var s=r[p];if(l=i!=null?i[p]:void 0,r.hasOwnProperty(p)&&s!==l&&(s!=null||l!=null))if(p==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(p,n)),n=s;else p==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(p,s)):p==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(p,""+s):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(F.hasOwnProperty(p)?(s!=null&&p==="onScroll"&&$("scroll",e),o||l===s||(o=[])):(o=o||[]).push(p,s))}n&&(o=o||[]).push("style",n);var p=o;(t.updateQueue=p)&&(t.flags|=4)}},Zs=function(e,t,n,r){n!==r&&(t.flags|=4)};function cr(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lc(e,t,n){var r=t.pendingProps;switch(ko(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Fe(t.type)&&Qr(),Ee(t),null;case 3:return r=t.stateNode,An(),Y(De),Y(Se),Oo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rt!==null&&(fa(rt),rt=null))),ta(e,t),Ee(t),null;case 5:Bo(t);var i=Jt(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)Ys(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(h(166));return Ee(t),null}if(e=Jt(pt.current),Yr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ft]=t,r[tr]=o,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<Xn.length;i++)$(Xn[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Pa(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":Ra(r,o),$("invalid",r)}Bi(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&qr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&qr(r.textContent,l,e),i=["children",""+l]):F.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&$("scroll",r)}switch(n){case"input":vr(r),Fa(r,o,!0);break;case"textarea":vr(r),_a(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Wr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Oa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[ft]=t,e[tr]=r,$s(e,t,!1,!1),t.stateNode=e;e:{switch(a=_i(n,r),n){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<Xn.length;i++)$(Xn[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":Pa(e,r),i=Ii(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=k({},r,{value:void 0}),$("invalid",e);break;case"textarea":Ra(e,r),i=Fi(e,r),$("invalid",e);break;default:i=r}Bi(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?ja(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ua(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Rn(e,s):typeof s=="number"&&Rn(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(F.hasOwnProperty(o)?s!=null&&o==="onScroll"&&$("scroll",e):s!=null&&Xe(e,o,s,a))}switch(n){case"input":vr(e),Fa(e,r,!1);break;case"textarea":vr(e),_a(e);break;case"option":r.value!=null&&e.setAttribute("value",""+q(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Wr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)Zs(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(h(166));if(n=Jt(ar.current),Jt(pt.current),Yr(t)){if(r=t.stateNode,n=t.memoizedProps,r[ft]=t,(o=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:qr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=t,t.stateNode=r}return Ee(t),null;case 13:if(Y(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&qe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Jl(),En(),t.flags|=98560,o=!1;else if(o=Yr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(h(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(h(317));o[ft]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),o=!1}else rt!==null&&(fa(rt),rt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(te.current&1)!==0?ue===0&&(ue=3):ma())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return An(),ta(e,t),e===null&&Jn(t.stateNode.containerInfo),Ee(t),null;case 10:return Io(t.type._context),Ee(t),null;case 17:return Fe(t.type)&&Qr(),Ee(t),null;case 19:if(Y(te),o=t.memoizedState,o===null)return Ee(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)cr(o,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=ti(e),a!==null){for(t.flags|=128,cr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return b(te,te.current&1|2),t.child}e=e.sibling}o.tail!==null&&oe()>Pn&&(t.flags|=128,r=!0,cr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ti(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),cr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!J)return Ee(t),null}else 2*oe()-o.renderingStartTime>Pn&&n!==1073741824&&(t.flags|=128,r=!0,cr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=oe(),t.sibling=null,n=te.current,b(te,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return ha(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(We&1073741824)!==0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function sc(e,t){switch(ko(t),t.tag){case 1:return Fe(t.type)&&Qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return An(),Y(De),Y(Se),Oo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Bo(t),null;case 13:if(Y(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(te),null;case 4:return An(),null;case 10:return Io(t.type._context),null;case 22:case 23:return ha(),null;case 24:return null;default:return null}}var di=!1,ke=!1,uc=typeof WeakSet=="function"?WeakSet:Set,E=null;function Tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function na(e,t,n){try{n()}catch(r){ie(e,t,r)}}var Ks=!1;function dc(e,t){if(ho=Pr,e=Il(),oo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,p=0,g=0,v=e,m=null;t:for(;;){for(var x;v!==n||i!==0&&v.nodeType!==3||(l=a+i),v!==o||r!==0&&v.nodeType!==3||(s=a+r),v.nodeType===3&&(a+=v.nodeValue.length),(x=v.firstChild)!==null;)m=v,v=x;for(;;){if(v===e)break t;if(m===n&&++p===i&&(l=a),m===o&&++g===r&&(s=a),(x=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=x}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(mo={focusedElem:e,selectionRange:n},Pr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var N=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var L=N.memoizedProps,ae=N.memoizedState,c=t.stateNode,u=c.getSnapshotBeforeUpdate(t.elementType===t.type?L:it(t.type,L),ae);c.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(w){ie(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return N=Ks,Ks=!1,N}function fr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&na(t,n,o)}i=i.next}while(i!==r)}}function ci(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ra(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xs(e){var t=e.alternate;t!==null&&(e.alternate=null,Xs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[tr],delete t[wo],delete t[bd],delete t[Gd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Js(e){return e.tag===5||e.tag===3||e.tag===4}function eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Js(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(ia(e,t,n),e=e.sibling;e!==null;)ia(e,t,n),e=e.sibling}function oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oa(e,t,n),e=e.sibling;e!==null;)oa(e,t,n),e=e.sibling}var me=null,ot=!1;function jt(e,t,n){for(n=n.child;n!==null;)tu(e,t,n),n=n.sibling}function tu(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Nr,n)}catch{}switch(n.tag){case 5:ke||Tn(n,t);case 6:var r=me,i=ot;me=null,jt(e,t,n),me=r,ot=i,me!==null&&(ot?(e=me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(ot?(e=me,n=n.stateNode,e.nodeType===8?vo(e.parentNode,n):e.nodeType===1&&vo(e,n),Qn(e)):vo(me,n.stateNode));break;case 4:r=me,i=ot,me=n.stateNode.containerInfo,ot=!0,jt(e,t,n),me=r,ot=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&((o&2)!==0||(o&4)!==0)&&na(n,t,a),i=i.next}while(i!==r)}jt(e,t,n);break;case 1:if(!ke&&(Tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ie(n,t,l)}jt(e,t,n);break;case 21:jt(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,jt(e,t,n),ke=r):jt(e,t,n);break;default:jt(e,t,n)}}function nu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new uc),t.forEach(function(r){var i=wc.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:me=l.stateNode,ot=!1;break e;case 3:me=l.stateNode.containerInfo,ot=!0;break e;case 4:me=l.stateNode.containerInfo,ot=!0;break e}l=l.return}if(me===null)throw Error(h(160));tu(o,a,i),me=null,ot=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(p){ie(i,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ru(t,e),t=t.sibling}function ru(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),mt(e),r&4){try{fr(3,e,e.return),ci(3,e)}catch(L){ie(e,e.return,L)}try{fr(5,e,e.return)}catch(L){ie(e,e.return,L)}}break;case 1:at(t,e),mt(e),r&512&&n!==null&&Tn(n,n.return);break;case 5:if(at(t,e),mt(e),r&512&&n!==null&&Tn(n,n.return),e.flags&32){var i=e.stateNode;try{Rn(i,"")}catch(L){ie(e,e.return,L)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Da(i,o),_i(l,a);var p=_i(l,o);for(a=0;a<s.length;a+=2){var g=s[a],v=s[a+1];g==="style"?ja(i,v):g==="dangerouslySetInnerHTML"?Ua(i,v):g==="children"?Rn(i,v):Xe(i,g,v,p)}switch(l){case"input":Pi(i,o);break;case"textarea":Ba(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?ln(i,!!o.multiple,x,!1):m!==!!o.multiple&&(o.defaultValue!=null?ln(i,!!o.multiple,o.defaultValue,!0):ln(i,!!o.multiple,o.multiple?[]:"",!1))}i[tr]=o}catch(L){ie(e,e.return,L)}}break;case 6:if(at(t,e),mt(e),r&4){if(e.stateNode===null)throw Error(h(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(L){ie(e,e.return,L)}}break;case 3:if(at(t,e),mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(L){ie(e,e.return,L)}break;case 4:at(t,e),mt(e);break;case 13:at(t,e),mt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(sa=oe())),r&4&&nu(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(p=ke)||g,at(t,e),ke=p):at(t,e),mt(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!g&&(e.mode&1)!==0)for(E=e,g=e.child;g!==null;){for(v=E=g;E!==null;){switch(m=E,x=m.child,m.tag){case 0:case 11:case 14:case 15:fr(4,m,m.return);break;case 1:Tn(m,m.return);var N=m.stateNode;if(typeof N.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(L){ie(r,n,L)}}break;case 5:Tn(m,m.return);break;case 22:if(m.memoizedState!==null){au(v);continue}}x!==null?(x.return=m,E=x):au(v)}g=g.sibling}e:for(g=null,v=e;;){if(v.tag===5){if(g===null){g=v;try{i=v.stateNode,p?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=v.stateNode,s=v.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Ma("display",a))}catch(L){ie(e,e.return,L)}}}else if(v.tag===6){if(g===null)try{v.stateNode.nodeValue=p?"":v.memoizedProps}catch(L){ie(e,e.return,L)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:at(t,e),mt(e),r&4&&nu(e);break;case 21:break;default:at(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Js(n)){var r=n;break e}n=n.return}throw Error(h(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Rn(i,""),r.flags&=-33);var o=eu(e);oa(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=eu(e);ia(e,l,a);break;default:throw Error(h(161))}}catch(s){ie(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cc(e,t,n){E=e,iu(e)}function iu(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||di;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||ke;l=di;var p=ke;if(di=a,(ke=s)&&!p)for(E=i;E!==null;)a=E,s=a.child,a.tag===22&&a.memoizedState!==null?lu(i):s!==null?(s.return=a,E=s):lu(i);for(;o!==null;)E=o,iu(o),o=o.sibling;E=i,di=l,ke=p}ou(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,E=o):ou(e)}}function ou(e){for(;E!==null;){var t=E;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ke||ci(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&as(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}as(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var g=p.memoizedState;if(g!==null){var v=g.dehydrated;v!==null&&Qn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}ke||t.flags&512&&ra(t)}catch(m){ie(t,t.return,m)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function au(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function lu(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ci(4,t)}catch(s){ie(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ie(t,i,s)}}var o=t.return;try{ra(t)}catch(s){ie(t,o,s)}break;case 5:var a=t.return;try{ra(t)}catch(s){ie(t,a,s)}}}catch(s){ie(t,t.return,s)}if(t===e){E=null;break}var l=t.sibling;if(l!==null){l.return=t.return,E=l;break}E=t.return}}var fc=Math.ceil,fi=we.ReactCurrentDispatcher,aa=we.ReactCurrentOwner,Ze=we.ReactCurrentBatchConfig,O=0,pe=null,le=null,ye=0,We=0,In=Bt(0),ue=0,pr=null,tn=0,pi=0,la=0,hr=null,Be=null,sa=0,Pn=1/0,Lt=null,hi=!1,ua=null,zt=null,mi=!1,qt=null,yi=0,mr=0,da=null,gi=-1,vi=0;function Ce(){return(O&6)!==0?oe():gi!==-1?gi:gi=oe()}function Wt(e){return(e.mode&1)===0?1:(O&2)!==0&&ye!==0?ye&-ye:Yd.transition!==null?(vi===0&&(vi=el()),vi):(e=W,e!==0||(e=window.event,e=e===void 0?16:ul(e.type)),e)}function lt(e,t,n,r){if(50<mr)throw mr=0,da=null,Error(h(185));jn(e,n,r),((O&2)===0||e!==pe)&&(e===pe&&((O&2)===0&&(pi|=n),ue===4&&Ht(e,ye)),_e(e,r),n===1&&O===0&&(t.mode&1)===0&&(Pn=oe()+500,br&&Ot()))}function _e(e,t){var n=e.callbackNode;Yu(e,t);var r=Cr(e,e===pe?ye:0);if(r===0)n!==null&&Ka(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ka(n),t===1)e.tag===0?$d(uu.bind(null,e)):$l(uu.bind(null,e)),Qd(function(){(O&6)===0&&Ot()}),n=null;else{switch(tl(r)){case 1:n=Wi;break;case 4:n=Xa;break;case 16:n=kr;break;case 536870912:n=Ja;break;default:n=kr}n=gu(n,su.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function su(e,t){if(gi=-1,vi=0,(O&6)!==0)throw Error(h(327));var n=e.callbackNode;if(Dn()&&e.callbackNode!==n)return null;var r=Cr(e,e===pe?ye:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=wi(e,r);else{t=r;var i=O;O|=2;var o=cu();(pe!==e||ye!==t)&&(Lt=null,Pn=oe()+500,rn(e,t));do try{mc();break}catch(l){du(e,l)}while(!0);To(),fi.current=o,O=i,le!==null?t=0:(pe=null,ye=0,t=ue)}if(t!==0){if(t===2&&(i=Hi(e),i!==0&&(r=i,t=ca(e,i))),t===1)throw n=pr,rn(e,0),Ht(e,r),_e(e,oe()),n;if(t===6)Ht(e,r);else{if(i=e.current.alternate,(r&30)===0&&!pc(i)&&(t=wi(e,r),t===2&&(o=Hi(e),o!==0&&(r=o,t=ca(e,o))),t===1))throw n=pr,rn(e,0),Ht(e,r),_e(e,oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(h(345));case 2:on(e,Be,Lt);break;case 3:if(Ht(e,r),(r&130023424)===r&&(t=sa+500-oe(),10<t)){if(Cr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=go(on.bind(null,e,Be,Lt),t);break}on(e,Be,Lt);break;case 4:if(Ht(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-tt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fc(r/1960))-r,10<r){e.timeoutHandle=go(on.bind(null,e,Be,Lt),r);break}on(e,Be,Lt);break;case 5:on(e,Be,Lt);break;default:throw Error(h(329))}}}return _e(e,oe()),e.callbackNode===n?su.bind(null,e):null}function ca(e,t){var n=hr;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=wi(e,t),e!==2&&(t=Be,Be=n,t!==null&&fa(t)),e}function fa(e){Be===null?Be=e:Be.push.apply(Be,e)}function pc(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!nt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ht(e,t){for(t&=~la,t&=~pi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function uu(e){if((O&6)!==0)throw Error(h(327));Dn();var t=Cr(e,0);if((t&1)===0)return _e(e,oe()),null;var n=wi(e,t);if(e.tag!==0&&n===2){var r=Hi(e);r!==0&&(t=r,n=ca(e,r))}if(n===1)throw n=pr,rn(e,0),Ht(e,t),_e(e,oe()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,Be,Lt),_e(e,oe()),null}function pa(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Pn=oe()+500,br&&Ot())}}function nn(e){qt!==null&&qt.tag===0&&(O&6)===0&&Dn();var t=O;O|=1;var n=Ze.transition,r=W;try{if(Ze.transition=null,W=1,e)return e()}finally{W=r,Ze.transition=n,O=t,(O&6)===0&&Ot()}}function ha(){We=In.current,Y(In)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hd(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(ko(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qr();break;case 3:An(),Y(De),Y(Se),Oo();break;case 5:Bo(r);break;case 4:An();break;case 13:Y(te);break;case 19:Y(te);break;case 10:Io(r.type._context);break;case 22:case 23:ha()}n=n.return}if(pe=e,le=e=Qt(e.current,null),ye=We=t,ue=0,pr=null,la=pi=tn=0,Be=hr=null,Xt!==null){for(t=0;t<Xt.length;t++)if(n=Xt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Xt=null}return e}function du(e,t){do{var n=le;try{if(To(),ni.current=ai,ri){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ri=!1}if(en=0,fe=se=ne=null,lr=!1,sr=0,aa.current=null,n===null||n.return===null){ue=1,pr=t,le=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=ye,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=s,g=l,v=g.tag;if((g.mode&1)===0&&(v===0||v===11||v===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=_s(a);if(x!==null){x.flags&=-257,Os(x,a,l,o,t),x.mode&1&&Bs(o,p,t),t=x,s=p;var N=t.updateQueue;if(N===null){var L=new Set;L.add(s),t.updateQueue=L}else N.add(s);break e}else{if((t&1)===0){Bs(o,p,t),ma();break e}s=Error(h(426))}}else if(J&&l.mode&1){var ae=_s(a);if(ae!==null){(ae.flags&65536)===0&&(ae.flags|=256),Os(ae,a,l,o,t),Ao(Cn(s,l));break e}}o=s=Cn(s,l),ue!==4&&(ue=2),hr===null?hr=[o]:hr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var c=Fs(o,s,t);os(o,c);break e;case 1:l=s;var u=o.type,f=o.stateNode;if((o.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(zt===null||!zt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Rs(o,l,t);os(o,w);break e}}o=o.return}while(o!==null)}pu(n)}catch(A){t=A,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function cu(){var e=fi.current;return fi.current=ai,e===null?ai:e}function ma(){(ue===0||ue===3||ue===2)&&(ue=4),pe===null||(tn&268435455)===0&&(pi&268435455)===0||Ht(pe,ye)}function wi(e,t){var n=O;O|=2;var r=cu();(pe!==e||ye!==t)&&(Lt=null,rn(e,t));do try{hc();break}catch(i){du(e,i)}while(!0);if(To(),O=n,fi.current=r,le!==null)throw Error(h(261));return pe=null,ye=0,ue}function hc(){for(;le!==null;)fu(le)}function mc(){for(;le!==null&&!zu();)fu(le)}function fu(e){var t=yu(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?pu(e):le=t,aa.current=null}function pu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=lc(n,t,We),n!==null){le=n;return}}else{if(n=sc(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,le=null;return}}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ue===0&&(ue=5)}function on(e,t,n){var r=W,i=Ze.transition;try{Ze.transition=null,W=1,yc(e,t,n,r)}finally{Ze.transition=i,W=r}return null}function yc(e,t,n,r){do Dn();while(qt!==null);if((O&6)!==0)throw Error(h(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Zu(e,o),e===pe&&(le=pe=null,ye=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||mi||(mi=!0,gu(kr,function(){return Dn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=Ze.transition,Ze.transition=null;var a=W;W=1;var l=O;O|=4,aa.current=null,dc(e,n),ru(n,e),Od(mo),Pr=!!ho,mo=ho=null,e.current=n,cc(n),qu(),O=l,W=a,Ze.transition=o}else e.current=n;if(mi&&(mi=!1,qt=e,yi=i),o=e.pendingLanes,o===0&&(zt=null),Qu(n.stateNode),_e(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(hi)throw hi=!1,e=ua,ua=null,e;return(yi&1)!==0&&e.tag!==0&&Dn(),o=e.pendingLanes,(o&1)!==0?e===da?mr++:(mr=0,da=e):mr=0,Ot(),null}function Dn(){if(qt!==null){var e=tl(yi),t=Ze.transition,n=W;try{if(Ze.transition=null,W=16>e?16:e,qt===null)var r=!1;else{if(e=qt,qt=null,yi=0,(O&6)!==0)throw Error(h(331));var i=O;for(O|=4,E=e.current;E!==null;){var o=E,a=o.child;if((E.flags&16)!==0){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var p=l[s];for(E=p;E!==null;){var g=E;switch(g.tag){case 0:case 11:case 15:fr(8,g,o)}var v=g.child;if(v!==null)v.return=g,E=v;else for(;E!==null;){g=E;var m=g.sibling,x=g.return;if(Xs(g),g===p){E=null;break}if(m!==null){m.return=x,E=m;break}E=x}}}var N=o.alternate;if(N!==null){var L=N.child;if(L!==null){N.child=null;do{var ae=L.sibling;L.sibling=null,L=ae}while(L!==null)}}E=o}}if((o.subtreeFlags&2064)!==0&&a!==null)a.return=o,E=a;else e:for(;E!==null;){if(o=E,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:fr(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,E=c;break e}E=o.return}}var u=e.current;for(E=u;E!==null;){a=E;var f=a.child;if((a.subtreeFlags&2064)!==0&&f!==null)f.return=a,E=f;else e:for(a=u;E!==null;){if(l=E,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:ci(9,l)}}catch(A){ie(l,l.return,A)}if(l===a){E=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,E=w;break e}E=l.return}}if(O=i,Ot(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Nr,e)}catch{}r=!0}return r}finally{W=n,Ze.transition=t}}return!1}function hu(e,t,n){t=Cn(n,t),t=Fs(e,t,1),e=Mt(e,t,1),t=Ce(),e!==null&&(jn(e,1,t),_e(e,t))}function ie(e,t,n){if(e.tag===3)hu(e,e,n);else for(;t!==null;){if(t.tag===3){hu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zt===null||!zt.has(r))){e=Cn(n,e),e=Rs(t,e,1),t=Mt(t,e,1),e=Ce(),t!==null&&(jn(t,1,e),_e(t,e));break}}t=t.return}}function gc(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(ye&n)===n&&(ue===4||ue===3&&(ye&130023424)===ye&&500>oe()-sa?rn(e,0):la|=n),_e(e,t)}function mu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ar,Ar<<=1,(Ar&130023424)===0&&(Ar=4194304)));var n=Ce();e=Et(e,t),e!==null&&(jn(e,t,n),_e(e,n))}function vc(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mu(e,n)}function wc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(t),mu(e,n)}var yu;yu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Re=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Re=!1,ac(e,t,n);Re=(e.flags&131072)!==0}else Re=!1,J&&(t.flags&1048576)!==0&&Yl(t,$r,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ui(e,t),e=t.pendingProps;var i=wn(t,Se.current);Ln(t,n),i=jo(null,t,r,e,i,n);var o=zo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(o=!0,Vr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fo(t),i.updater=li,t.stateNode=i,i._reactInternals=t,bo(t,r,e,n),t=Zo(null,t,r,!0,o,n)):(t.tag=0,J&&o&&Eo(t),Ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ui(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=xc(r),e=it(r,e),i){case 0:t=Yo(null,t,r,e,n);break e;case 1:t=Ws(null,t,r,e,n);break e;case 11:t=Us(null,t,r,e,n);break e;case 14:t=Ms(null,t,r,it(r.type,e),n);break e}throw Error(h(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Yo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Ws(e,t,r,i,n);case 3:e:{if(Hs(t),e===null)throw Error(h(387));r=t.pendingProps,o=t.memoizedState,i=o.element,is(e,t),ei(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Cn(Error(h(423)),t),t=Qs(e,t,r,n,i);break e}else if(r!==i){i=Cn(Error(h(424)),t),t=Qs(e,t,r,n,i);break e}else for(qe=Rt(t.stateNode.containerInfo.firstChild),ze=t,J=!0,rt=null,n=ns(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(En(),r===i){t=Nt(e,t,n);break e}Ae(e,t,r,n)}t=t.child}return t;case 5:return ls(t),e===null&&Lo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,yo(r,i)?a=null:o!==null&&yo(r,o)&&(t.flags|=32),qs(e,t),Ae(e,t,a,n),t.child;case 6:return e===null&&Lo(t),null;case 13:return Vs(e,t,n);case 4:return Ro(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kn(t,null,r,n):Ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Us(e,t,r,i,n);case 7:return Ae(e,t,t.pendingProps,n),t.child;case 8:return Ae(e,t,t.pendingProps.children,n),t.child;case 12:return Ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,b(Kr,r._currentValue),r._currentValue=a,o!==null)if(nt(o.value,a)){if(o.children===i.children&&!De.current){t=Nt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=kt(-1,n&-n),s.tag=2;var p=o.updateQueue;if(p!==null){p=p.shared;var g=p.pending;g===null?s.next=s:(s.next=g.next,g.next=s),p.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Po(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(h(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Po(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ln(t,n),i=$e(i),r=r(i),t.flags|=1,Ae(e,t,r,n),t.child;case 14:return r=t.type,i=it(r,t.pendingProps),i=it(r.type,i),Ms(e,t,r,i,n);case 15:return js(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),ui(e,t),t.tag=1,Fe(r)?(e=!0,Vr(t)):e=!1,Ln(t,n),Ps(t,r,i),bo(t,r,i,n),Zo(null,t,r,!0,e,n);case 19:return Gs(e,t,n);case 22:return zs(e,t,n)}throw Error(h(156,t.tag))};function gu(e,t){return Za(e,t)}function Sc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,t,n,r){return new Sc(e,t,n,r)}function ya(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xc(e){if(typeof e=="function")return ya(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ut)return 11;if(e===dt)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=Ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Si(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")ya(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ie:return an(n.children,i,o,t);case Ve:a=8,i|=8;break;case At:return e=Ke(12,n,t,i|2),e.elementType=At,e.lanes=o,e;case Ue:return e=Ke(13,n,t,i),e.elementType=Ue,e.lanes=o,e;case et:return e=Ke(19,n,t,i),e.elementType=et,e.lanes=o,e;case re:return xi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gt:a=10;break e;case bt:a=9;break e;case ut:a=11;break e;case dt:a=14;break e;case Pe:a=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=Ke(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function an(e,t,n,r){return e=Ke(7,e,r,t),e.lanes=n,e}function xi(e,t,n,r){return e=Ke(22,e,r,t),e.elementType=re,e.lanes=n,e.stateNode={isHidden:!1},e}function ga(e,t,n){return e=Ke(6,e,null,t),e.lanes=n,e}function va(e,t,n){return t=Ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ec(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wa(e,t,n,r,i,o,a,l,s){return e=new Ec(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ke(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fo(o),e}function kc(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Le,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vu(e){if(!e)return _t;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(Fe(n))return bl(e,n,t)}return t}function wu(e,t,n,r,i,o,a,l,s){return e=wa(n,r,!0,e,i,o,a,l,s),e.context=vu(null),n=e.current,r=Ce(),i=Wt(n),o=kt(r,i),o.callback=t??null,Mt(n,o,i),e.current.lanes=i,jn(e,i,r),_e(e,r),e}function Ei(e,t,n,r){var i=t.current,o=Ce(),a=Wt(i);return n=vu(n),t.context===null?t.context=n:t.pendingContext=n,t=kt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Mt(i,t,a),e!==null&&(lt(e,i,a,o),Jr(e,i,a)),a}function ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Su(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Sa(e,t){Su(e,t),(e=e.alternate)&&Su(e,t)}function Nc(){return null}var xu=typeof reportError=="function"?reportError:function(e){console.error(e)};function xa(e){this._internalRoot=e}Ni.prototype.render=xa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));Ei(e,t,null,null)},Ni.prototype.unmount=xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){Ei(null,e,null,null)}),t[vt]=null}};function Ni(e){this._internalRoot=e}Ni.prototype.unstable_scheduleHydration=function(e){if(e){var t=il();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pt.length&&t!==0&&t<Pt[n].priority;n++);Pt.splice(n,0,e),n===0&&ll(e)}};function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Li(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Eu(){}function Lc(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var p=ki(a);o.call(p)}}var a=wu(t,r,e,0,null,!1,!1,"",Eu);return e._reactRootContainer=a,e[vt]=a.current,Jn(e.nodeType===8?e.parentNode:e),nn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var p=ki(s);l.call(p)}}var s=wa(e,0,!1,null,null,!1,!1,"",Eu);return e._reactRootContainer=s,e[vt]=s.current,Jn(e.nodeType===8?e.parentNode:e),nn(function(){Ei(t,s,n,r)}),s}function Ai(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=ki(a);l.call(s)}}Ei(t,a,e,i)}else a=Lc(n,t,e,i,r);return ki(a)}nl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mn(t.pendingLanes);n!==0&&(Vi(t,n|1),_e(t,oe()),(O&6)===0&&(Pn=oe()+500,Ot()))}break;case 13:nn(function(){var r=Et(e,1);if(r!==null){var i=Ce();lt(r,e,1,i)}}),Sa(e,1)}},bi=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var n=Ce();lt(t,e,134217728,n)}Sa(e,134217728)}},rl=function(e){if(e.tag===13){var t=Wt(e),n=Et(e,t);if(n!==null){var r=Ce();lt(n,e,t,r)}Sa(e,t)}},il=function(){return W},ol=function(e,t){var n=W;try{return W=e,t()}finally{W=n}},Mi=function(e,t,n){switch(t){case"input":if(Pi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Hr(r);if(!i)throw Error(h(90));Ia(r),Pi(r,i)}}}break;case"textarea":Ba(e,n);break;case"select":t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}},Ha=pa,Qa=nn;var Ac={usingClientEntryPoint:!1,Events:[nr,gn,Hr,qa,Wa,pa]},yr={findFiberByHostInstance:$t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cc={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$a(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||Nc,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ci.isDisabled&&Ci.supportsFiber)try{Nr=Ci.inject(Cc),ct=Ci}catch{}}return Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ac,Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ea(t))throw Error(h(200));return kc(e,t,null,n)},Oe.createRoot=function(e,t){if(!Ea(e))throw Error(h(299));var n=!1,r="",i=xu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=wa(e,1,!1,null,null,n,!1,r,i),e[vt]=t.current,Jn(e.nodeType===8?e.parentNode:e),new xa(t)},Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=$a(t),e=e===null?null:e.stateNode,e},Oe.flushSync=function(e){return nn(e)},Oe.hydrate=function(e,t,n){if(!Li(t))throw Error(h(200));return Ai(null,e,t,!0,n)},Oe.hydrateRoot=function(e,t,n){if(!Ea(e))throw Error(h(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=xu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=wu(t,null,e,1,n??null,i,!1,o,a),e[vt]=t.current,Jn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ni(t)},Oe.render=function(e,t,n){if(!Li(t))throw Error(h(200));return Ai(null,e,t,!1,n)},Oe.unmountComponentAtNode=function(e){if(!Li(e))throw Error(h(40));return e._reactRootContainer?(nn(function(){Ai(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1},Oe.unstable_batchedUpdates=pa,Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Li(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return Ai(e,t,n,!1,r)},Oe.version="18.3.1-next-f1338f8080-20240426",Oe}var Pu;function _c(){if(Pu)return La.exports;Pu=1;function D(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D)}catch(z){console.error(z)}}return D(),La.exports=Bc(),La.exports}var Du;function Oc(){if(Du)return Ti;Du=1;var D=_c();return Ti.createRoot=D.createRoot,Ti.hydrateRoot=D.hydrateRoot,Ti}var Uc=Oc();function Mc(){const[D,z]=Fu.useState(null),h=[{id:1,question:"1. What is a Stack?",answer:"A stack is a linear data structure that follows the LIFO (Last In, First Out) principle. Elements can be added or removed only from the top of the stack. \\n\\tLast element inserted → first to be removed. \\n\\tThink of a stack of books or plates.",codeExample:`

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
`},{id:2,question:"2. Infix to Postfix using Stack.",answer:"Infix Expression → Operator between operands. \\n\\tExample: A + B , (A + B) * C \\n\\nPostfix Expression (Reverse Polish Notation, RPN) → Operator comes after operands. \\n\\tExample: A B + , A B + C *",codeExample:`
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

    result[k] = '\\0';                  '\\0' -> Marks the end of a C string
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

    result[k] = '\\0';                   '\\0' -> Marks the end of a C string

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


`},{id:3,question:"3. What is a Queue?",answer:"A queue is a linear data structure that follows the FIFO (First In, First Out) principle. Elements are added at the rear (end) and removed from the front (beginning). \\n\\tFirst element inserted → first to be removed. \\n\\tThink of a line of people waiting. \\n\\tThe first person in line is the first to get the ticket and leave.",codeExample:`
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
    for (int i = 1; i < pos - 1 && temp != NULL; i++) {          \\ and you enter position 3 your loop is run one time 
        temp = temp->next;  
    }

    if (temp == NULL) {                                  \\like you have 2 node you enter 4 so temp is null
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
    free(temp->next);                                     // delete last node like temp->next is 300 so free(300)
    temp->next = NULL;                                    // adter deleting last node set second last node next to null like temp->next = 300 t0 temp->next = null
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
         / \\
        B   C        ← Children
       / \\   \\
      D   E   F      ← Leaf Nodes


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
     / \\
    B   C
   / \\
  D   E


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
        /  |  \\
       B   C   D
          / \\
         E   F

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
       / \\
      B   C
     / \\
    D   E


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
       / \\
      2   3
     / \\  /
    4  5 6


✅ Why it’s Complete:

    Levels 1 and 2 are completely filled.
    Level 3 has 3 nodes (4, 5, 6), all placed from left to right.



❌ Example 2: Not Complete

        1
       / \\
      2   3
       \\   \\
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
       /  \\
     30    70
    / \\    / \\
   20 40  60 80


✅ Why this is a BST:

Left child < Parent (30 < 50)
Right child > Parent (70 > 50)
And this rule applies to every subtree.



❌ Not a BST Example
        50
       /  \\
     70    30


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
       / \\
      2   3
     / \\ / \\
    4  5 6  7


✅ Why it’s full:

    Node 1 has two children (2, 3)
    Node 2 has two children (4, 5)
    Node 3 has two children (6, 7)
    Nodes 4, 5, 6, 7 have no children (leaf nodes)

Hence, all nodes have either 0 or 2 children.


❌ Not a Full Binary Tree Example
        1
       / \\
      2   3
       \\
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
       /  \\
     20    40
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
       /  \\
     10    30



🔁 2. RR Rotation (Left Rotation)

Unbalanced:
      10
        \\
         20
           \\
            30

After Left Rotation:
        20
       /  \\
     10    30



🔁 3. LR Rotation (Left-Right Rotation)

Unbalanced:
        30
       /
      10
        \\
         20

After LR Rotation:
        20
       /  \\
     10    30



🔁 4. RL Rotation (Right-Left Rotation)

Unbalanced:
      10
        \\
         30
        /
      20

After RL Rotation:
        20
       /  \\
     10    30



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
           /     \\
       [10,20]   [40,50,60]


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
           /     |     \\
       [10,20] [40,50] [70,80]

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

      `},{id:1,question:"",answer:"",codeExample:""},{id:8888,question:"Mid exam paper questions and answers",answer:"",codeExample:`
✅ Q1 (a) Short Questions – 1 mark each


i) Define a primitive data structure.

    Primitive data structures are basic data types provided by the programming language.
    Examples: int, float, char, double, boolean.


ii) What is a stack overflow?

    Stack overflow happens when you try to push (add) elements into a stack that is already full.


iii) Give one real-life example of a queue.

    People standing in a line at a ticket counter
    Vehicles in a toll booth line


--------------------


✅ Q1 (b) MCQs / True-False / Fill in the blanks

1) A stack follows ____ order.
👉 LIFO (Last In First Out)


2) True or False: A binary tree can have more than two children.
👉 False
(Binary tree = maximum 2 children only.)


3) In a singly linked list, the last node points to:
👉 a) NULL


4) A circular queue helps in problem of a simple queue —
👉 Wastage of space
(Circular queue reuses empty spaces.)


5) A sparse matrix is one in which:
👉 a) Most elements are zeros


6) Which of the following is NOT a linear data structure?
👉 d) Tree


7) If A, B, C, D are inserted in queue & removed one by one → order?
👉 A B C D
(First in → First out)
Correct option: A


-------------------------------------------------------------------------------
      

✅ Q2 (a) 2-Mark Questions

1) Define an array. Explain advantages and disadvantages.
Array:

A collection of similar elements stored at contiguous memory locations.

Example: int arr[5];


Advantages:

Easy to access using index
Fast searching
Continuous memory improves performance

Disadvantages:

Fixed size
Insertion/deletion difficult
Wastage of memory if size unused



2) What is Linked List? Give its types.

A linked list is a dynamic data structure where elements (nodes) are connected using pointers.

Types:

Singly Linked List
Doubly Linked List
Circular Linked List
Circular Doubly Linked List


--------------------


✅ Q2 (b) 3-Mark Questions

1) Differentiate Stack and Queue

| Stack                        | Queue                             |
| ---------------------------- | --------------------------------- |
| Follows LIFO                 | Follows FIFO                      |
| Only top element accessible  | Insert at rear, delete from front |
| push(), pop() operations     | enqueue(), dequeue() operations   |
| Example: Browser back button | Example: Ticket line              |



2) Discuss types of Binary Trees with examples.

1. Full Binary Tree
Every node has 0 or 2 children.

2. Complete Binary Tree
All levels are full except last, filled left to right.

3. Perfect Binary Tree
All internal nodes have two children & all leaves at same level.

4. Skewed Binary Tree
Every node has only left or only right child.

5. Balanced Binary Tree
Difference between left & right subtree height ≤ 1.


-------------------------------------------------------------------------------


✅ Q3 (Attempt Any TWO)

Q3(i) Operations on Stack + Algorithms

Operations:

push()
pop()
peek()
isEmpty()
isFull()



Algorithm: PUSH(x)

if top == MAX-1
    print "Overflow"
else
    top = top + 1
    stack[top] = x



Algorithm: POP

if top == -1
    print "Underflow"
else
    x = stack[top]
    top = top - 1
    return x


Q3(ii) Static vs Dynamic Memory Allocation

| Static                       | Dynamic                         |
| ---------------------------- | ------------------------------- |
| Memory fixed at compile time | Memory allocated at runtime     |
| Uses array                   | Uses linked list, malloc(), new |
| Fast access                  | Flexible size                   |
| Wastage of memory possible   | No wastage, grows as needed     |
| Used when size known         | Used when size unknown          |



Q3(iii) Draw 4-node Singly Linked List + Insert at End

Initial List (4 nodes)
    [10] -> [20] -> [30] -> [40] -> NULL

Insert 50 at end

Steps:

    Create new node = 50
    Traverse to last node (40)
    Point last node's next to new node
    New node next = NULL

Final List
    [10] -> [20] -> [30] -> [40] -> [50] -> NULL


-------------------------------------------------------------------------------


✅ Q4 – 5 Marks

Q4(a) Find Inorder, Preorder & Postorder order traversal of below Tree:

                A
             /     \\
           B         C
         /   \\     /   \\
        D     F   G     H
      /   \\         \\
     I     J         K


| Traversal Type | Answer                  |
| -------------- | ----------------------- |
| Preorder       | A B D I J F C G K H     |
| Inorder        | I D J B F A G K C H     |
| Postorder      | I J D F B K G H C A     |




(b) Algorithm + Program to Insert Element in Simple Queue (Array Implementation)

ALGORITHM: ENQUEUE (Insert Element)


1. If rear == MAX - 1
      Print "Queue Overflow"
2. Else
      If front == -1
            front ← 0
      rear ← rear + 1
      queue[rear] ← element
3. EndIf



C PROGRAM (Array Implementation of Queue Insert / Enqueue)

#include <stdio.h>

#define MAX 50

int queue[MAX];
int front = -1, rear = -1;

void enqueue(int x) {
    if (rear == MAX - 1) {
        printf("Queue Overflow\\n");
    } else {
        if (front == -1)
            front = 0;  // first element being inserted
        
        rear = rear + 1;
        queue[rear] = x;
        printf("%d inserted into queue\\n", x);
    }
}

int main() {
    enqueue(10);
    enqueue(20);
    enqueue(30);

    return 0;
}



OR 
(b) Sparse Matrix – Representation

Given 5×6 matrix:

0 0 0 0 9 0
0 8 0 0 0 0
4 0 0 2 0 0
0 0 0 0 0 5
0 0 2 0 0 0


Non-zero elements:

| Row | Col | Value |
| --- | --- | ----- |
| 0   | 4   | 9     |
| 1   | 1   | 8     |
| 2   | 0   | 4     |
| 2   | 3   | 2     |
| 3   | 5   | 5     |
| 4   | 2   | 2     |


✔ Triplet Representation:

[5 6 6]     ← rows, columns, non-zero count
[0 4 9]
[1 1 8]
[2 0 4]
[2 3 2]
[3 5 5]
[4 2 2]

`},{id:1,question:"",answer:"",codeExample:""},{id:21,question:"21. Define Graph. Explain types of graphs.",answer:"",codeExample:`
Define Graph

A graph is a non-linear data structure made of:

    Vertices (nodes) → points
    Edges → lines that connect two vertices

A graph is written as:
👉 G = (V, E)

where

    V = set of vertices
    E = set of edges

Example:
If V = {1,2,3} and E = {(1,2), (2,3)}, this means 1 is connected to 2, and 2 is connected to 3.
      

Types of Graphs

1. Undirected Graph

Edges have no direction.
Connection is two-way.

If (A, B) exists → A is connected to B and B is connected to A.

Example:
A — B (both ways)

Diagram

1 --- 2
 \\   /
   3

Explanation
    Edge 1–2 means both 1 connects to 2 and 2 connects to 1.



2. Directed Graph (Digraph)

Edges have direction (→).
Shows one-way connection.

Example:
A → B (only from A to B)

Diagram

1 → 2 → 3
↑       |
|_______|

Explanation
    Arrows tell which direction the connection goes.



3. Weighted Graph

Each edge has a weight/value such as distance, cost, or time.
Edge is written as (u, v, w)
where w = weight.

Example:
A —5→ B (cost = 5)

Diagram

 (5)
1 ----- 2
  \\     |
 (3)\\   |(2)
      \\ |
        3

Explanation
    Weight between 1 and 2 is 5
    Weight between 2 and 3 is 2
    Weight between 1 and 3 is 3



4. Cyclic Graph

A graph that has at least one cycle (a path that starts and ends at the same vertex).

Example cycle:
A → B → C → A

Diagram

A → B → C
↑       ↓
|_______|

Explanation
    A → B → C → A forms a cycle.
      `},{id:22,question:"22.Explain Adjacency Matrix with example.",answer:"",codeExample:`
Adjacency Matrix (Easy Explanation)

An Adjacency Matrix is a 2D table (matrix) used to represent a graph.

Rows represent vertices
Columns represent vertices
Each cell contains either:
    1 → if there is an edge between vertices
    0 → if there is NO edge
So, it shows which vertex is connected to which.

Example Graph

Let’s take a simple undirected graph:

1 --- 2
|     |
|     |
3 --- 4


Edges:
(1,2), (1,3), (2,4), (3,4)

Adjacency Matrix for this Graph
Vertices = {1, 2, 3, 4}

Matrix:

      1  2  3  4
    -------------
1 |  0  1  1  0
2 |  1  0  0  1
3 |  1  0  0  1
4 |  0  1  1  0


Explanation of Matrix
    Row = starting vertex
    Column = ending vertex

Examples:

Row 1, Column 2 = 1 → means 1 is connected to 2
Row 1, Column 4 = 0 → means 1 is NOT connected to 4
Because the graph is undirected, the matrix is symmetric.


Weighted Graph Example (Bonus)

If the edges have weights:

      (5)
   1 ------ 2
   |        |
 (3)      (2)
   |        |
   3 ------/



Adjacency Matrix:

      1  2  3
    -----------
1 |  0  5  3
2 |  5  0  2
3 |  3  2  0
      
      
      `},{id:23,question:"23. Explain Adjacency List with example.",answer:"",codeExample:`
Adjacency List (Easy Explanation)

An Adjacency List is another way to represent a graph.
For each vertex, we store a list of all the vertices directly connected (adjacent) to it.
It is usually stored using:
    Array + Linked List
    Array of lists
It saves memory because it only stores the actual connections.

Example Graph

1 --- 2
|     |
|     |
3 --- 4

Edges:
(1,2), (1,3), (2,4), (3,4)


Adjacency List of this Graph
For each vertex, list its neighbors:

1 → 2 → 3
2 → 1 → 4
3 → 1 → 4
4 → 2 → 3

Explanation

Node 1 is connected to 2 and 3 → so list is: 1 → 2 → 3
Node 2 is connected to 1 and 4 → 2 → 1 → 4
Node 3 is connected to 1 and 4 → 3 → 1 → 4
Node 4 is connected to 2 and 3 → 4 → 2 → 3

This is exactly how adjacency list works.



Another Example (Directed Graph)

Graph:

1 → 2 → 3
↑       |
|_______|


Adjacency List:

1 → 2
2 → 3
3 → 1


Because direction matters, we only list outgoing edges.
      
      `},{id:24,question:"24. Write BFS algorithm with example.",answer:"",codeExample:`
✅ BFS (Breadth-First Search) Algorithm

BFS is a graph traversal method where we visit all neighbors first, then move to the next level.

It uses a Queue (FIFO → First In First Out).

✅ BFS Algorithm (Step-by-step)
BFS(G, start_vertex):

1. Create an empty queue.
2. Mark all vertices as NOT visited.
3. Enqueue the start_vertex into the queue.
4. Mark start_vertex as visited.

5. While queue is NOT empty:
       a. Dequeue a vertex → call it current
       b. Visit (process) current
       c. For each neighbor of current:
             If neighbor is NOT visited:
                 Mark neighbor as visited
                 Enqueue neighbor


Very easy:
👉 Put starting node in queue → visit → add neighbors → continue.

✅ Example Graph
0 --- 1
| \\   |
|  \\  |
3     2


Edges: (0,1), (0,2), (0,3), (1,2)

✅ Step-by-Step BFS from vertex 0

Step 1: Start at 0
Queue: [0]
Visited: {0}


Step 2: Remove 0 → visit neighbors (1,2,3)
Queue: [1, 2, 3]
Visited: {0,1,2,3}


Step 3: Remove 1 → visit neighbors (0,2)
(0 & 2 already visited → ignore)
Queue: [2, 3]


Step 4: Remove 2 → neighbors (0,1)
(both visited)
Queue: [3]


Step 5: Remove 3 → neighbors (0)
(already visited)
Queue: []


⏳ Queue empty → BFS Complete

✅ Final BFS Order
0 → 1 → 2 → 3


✅ ASCII Visualization of BFS Levels

Level 0:      0
             /|\\
            1 2 3

BFS visits like:
0 → (1,2,3) → then no more new nodes


-------------------------


✅ More Difficult Example Graph (ASCII Diagram)

      0
    / | \\
   1  2  3
  / \\ |   \\
 4   5     6
      \\   /
        7

Edges

(0,1), (0,2), (0,3)
(1,4), (1,5)
(2,5)
(3,6)
(5,7)
(6,7)


⭐ We will perform BFS starting from vertex 0

✅ Step-by-Step BFS from vertex 0

Step 1: Start at 0
Queue: [0]
Visited: {0}


Step 2: Remove 0 → visit neighbors (1,2,3)
Queue: [1, 2, 3]
Visited: {0,1,2,3}


Step 3: Remove 1 → visit neighbors (4,5)
(0 already visited, ignore)
Queue: [2, 3, 4, 5]
Visited: {0,1,2,3,4,5}


Step 4: Remove 2 → visit neighbor (5)
(5 already visited from previous step, ignore)
Queue: [3, 4, 5]


Step 5: Remove 3 → visit neighbor (6)
Queue: [4, 5, 6]
Visited: {0,1,2,3,4,5,6}


Step 6: Remove 4 → no new neighbors
(Only neighbor was 1, already visited)
Queue: [5, 6]


Step 7: Remove 5 → visit neighbor (7)
Queue: [6, 7]
Visited: {0,1,2,3,4,5,6,7}


Step 8: Remove 6 → visit neighbor (7)
(7 already visited → ignore)
Queue: [7]


Step 9: Remove 7 → no new neighbors
Queue: []
⏳ Queue empty → BFS complete.


⭐ Final BFS Order
0 → 1 → 2 → 3 → 4 → 5 → 6 → 7


✅ ASCII Visualization of BFS Levels

Level 0:        0
              / | \\
Level 1:     1  2  3
            / \\ |   \\
Level 2:   4    5     6
                   \\ /
Level 3:            7


BFS visits level-wise:

0
→ (1, 2, 3)
→ (4, 5, 6)
→ (7)



So the BFS traversal is:
👉 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7
      
      `},{id:25,question:"25. Write DFS algorithm with example.",answer:"",codeExample:`
✅ DFS (Depth-First Search) Algorithm

DFS explores a graph by going deep into one path before backtracking.

It uses a Stack (LIFO → Last In First Out) or recursion.

✅ DFS Algorithm (Step-by-step)
DFS(G, start_vertex):

1. Mark all vertices as NOT visited.
2. Push start_vertex onto stack.
3. Mark start_vertex as visited.

4. While stack is NOT empty:
       a. Pop the top element → call it current
       b. Visit (process) current
       c. For each neighbor of current:
             If neighbor is NOT visited:
                 Mark neighbor as visited
                 Push neighbor onto stack


Easy meaning →
👉 Go deep… deep… deep, until no way → then backtrack.

⭐ Example Graph (ASCII Diagram)
0 --- 1
| \\   |
|  \\  |
3     2


Edges:
(0,1), (0,2), (0,3), (1,2)

We will perform DFS starting from 0

✅ Step-by-Step DFS from vertex 0

Step 1: Start at 0
Stack: [0]
Visited: {0}

Pop 0 → visit it.


Step 2: From 0 → push neighbors (1,2,3)
(DFS pushes in order, but visits the last pushed first)
Stack: [1, 2, 3]
Visited: {0,1,2,3}


Step 3: Pop 3
Stack: [1, 2]
    3 has neighbor 0 → already visited
    So nothing new is added.


Step 4: Pop 2
Stack: [1]
Neighbors → (0,1)
Both visited → ignore


Step 5: Pop 1
Stack: []
    Neighbors → (0,2)
    Both visited → nothing to add

⏳ Stack empty → DFS complete


⭐ Final DFS Order
0 → 3 → 2 → 1

Remember:
DFS depends on the order of pushing neighbors, but the idea is:
👉 Go deep first, then backtrack.


⭐ ASCII Visualization of DFS Path

     0
   / | \\
  1  2  3

DFS goes like:
0 → 3 → backtrack → 2 → backtrack → 1


-------------------------


⭐ Difficult DFS Example Graph (ASCII Diagram)
        0
      / | \\
     1  2  3
    / \\ |   \\
   4   5     6
        \\   /
          7

Edges

(0,1), (0,2), (0,3)
(1,4), (1,5)
(2,5)
(3,6)
(5,7)
(6,7)

We perform DFS starting from vertex 0.
We will visit neighbors from left to right for consistency.


⭐ DFS Step-by-Step

Initialize

Stack: [0]
Visited: {0}

Pop 0 → visit it.



Step 1: Visit 0

Neighbors → 1, 2, 3
Push in order → 1, 2, 3
Stack (top at right):
[1, 2, 3]
Visited: {0,1,2,3}


Step 2: Pop 3

Stack: [1, 2]
Visit 3 → neighbor = 6
(0 already visited)

Push 6
Stack: [1, 2, 6]
Visited: {0,1,2,3,6}


Step 3: Pop 6

Stack: [1, 2]
Visit 6 → neighbor = 7
(3 already visited)

Push 7
Stack: [1, 2, 7]
Visited: {0,1,2,3,6,7}


Step 4: Pop 7

Stack: [1, 2]
Visit 7 → neighbor = 5
(6 already visited)

Push 5
Stack: [1, 2, 5]
Visited: {0,1,2,3,5,6,7}


Step 5: Pop 5

Stack: [1, 2]
Visit 5 → neighbors = 1,2,7
(All visited → add nothing)


Step 6: Pop 2

Stack: [1]
Visit 2 → neighbor = 5
(5 already visited)


Step 7: Pop 1

Stack: []
Visit 1 → neighbors = 4,5
Push 4 (5 already visited)

Stack: [4]
Visited: {0,1,2,3,4,5,6,7}


Step 8: Pop 4
Stack: []
Visit 4 → neighbor = 1 (already visited)


⏳ Stack empty → DFS complete.


⭐ Final DFS Order
0 → 3 → 6 → 7 → 5 → 2 → 1 → 4


⭐ DFS Traversal Path ASCII

Start at 0
↓
Go deep through 3 → 6 → 7 → 5
(backtrack)
Then go to 2
(backtrack)
Then go to 1 → 4
(backtrack)
Done


Note:
    like you asked Visited set stores is same in BFS and DFS - Yes
      
      `},{id:26,question:"26. Explain Graph Terminology.",answer:"",codeExample:`
⭐ 1. Graph

A graph has vertices (nodes) and edges (connections).

A ----- B
 \\     /
   \\ /
    C

Vertices: A, B, C
Edges: (A,B), (B,C), (A,C)


⭐ 2. Vertex (Node)

A vertex is a single point.

   A

A = one vertex


⭐ 3. Edge

An edge connects two vertices.

A ----- B

Edge = (A, B)


⭐ 4. Degree of a Vertex

Degree = number of edges touching the vertex.

    A
   / \\
  B   C
      |
      D

deg(A) = 2
deg(C) = 2
deg(B) = 1
deg(D) = 1


⭐ 5. Path

A path means moving from one vertex to another through edges.

A ---- B ---- C ---- D

Path: A → B → C → D


⭐ 6. Loop

A loop is when an edge connects a vertex to itself.

   A
  / \\
  \\_/

Loop = (A, A)


⭐ 7. Adjacent Nodes (Neighbours)

Nodes that are directly connected.

A ----- B ----- C

A & B are adjacent
B & C are adjacent
A & C are not adjacent


⭐ 8. Undirected Graph

Edges have no direction.

A ----- B
|       |
|       |
C ----- D


⭐ 9. Directed Graph (Digraph)

Edges have arrows (direction).

A → B → C
↑       ↓
|_______|


⭐ 10. Weighted Graph

Edges have numbers (cost, distance, time).

A -5- B
|     |
3     2
|     |
C -4- D


⭐ 11. Cycle

A path that starts and ends at the same vertex.

A → B
↑   ↓
C ← D

Cycle: A → B → D → C → A



⭐ 12. Connected Graph (Very Easy Explanation)

A connected graph means:

👉 You can travel from ANY vertex to ANY other vertex.
There is ALWAYS some path.

Diagram (Connected Graph)

A ----- B ----- C
        |
        D

✔ How to check it's connected?

From A → you can go to B → C → D
From D → you can go to B → A → C
From C → you can go to B → A → D

You can reach any vertex from any other vertex.

👉 That is why this is called a Connected Graph.



⭐ 13. Disconnected Graph (Very Easy Explanation)

A disconnected graph means:

👉 Some vertices cannot reach the others.
The graph is split into different parts.


Diagram (Disconnected Graph)

A ----- B       C ----- D

✔ Why is this disconnected?

Look carefully:

A is connected to B
C is connected to D
BUT ❌ there is NO path between (A,B) part and (C,D) part.

You cannot go from:

A to C
B to D
C to A
D to B

They are in different groups → so the graph is disconnected.
      
      `},{id:27,question:"27. Applications of BFS and DFS.",answer:"",codeExample:`
⭐ Applications of BFS (with simple diagrams)

Think of BFS as:

👉 Searching level by level (nearest first)


✅ 1. Finding Shortest Path

A -- B -- C -- D


From A to D, BFS checks:

A → B → C → D
(Shortest path)

Easy to remember: BFS = Nearest First = Shortest Path


✅ 2. Web Crawlers (Google Search)

Page A
 |  \\
 B   C
     |
     D


Google starts from Page A → visits all linked pages B, C → then pages linked to them (D).
Easy: BFS = Explore pages level by level


✅ 3. Social Networks (Friends suggestion)

You → Friend → Friend-of-Friend


BFS helps find friends-of-friends.
Easy: BFS = “People you may know”


✅ 4. Network Broadcasting

Server
 /  |  \\
A   B   C


One message → reaches A, B, C at the same time.
Easy: BFS = Spread message quickly




⭐ Applications of DFS (with simple diagrams)

Think of DFS as:

    👉 Going deep first
    👉 Backtracking


✅ 1. Solving a Maze

Start → → ↓
         Dead-end → go back


DFS goes deep into the maze until dead-end → backtracks → finds a path.
Easy: DFS = Maze solving


✅ 2. Detecting Cycles

A → B → C
↑       ↓
└───────┘


DFS can detect this cycle.
Easy: DFS = Finds loops


✅ 3. Topological Sorting (Task order)

A → B → C


A before B, B before C.
DFS helps find order.

Easy: DFS = Scheduling tasks


✅ 4. Finding Connected Components

A—B     C—D


DFS finds:

Component 1: A, B
Component 2: C, D

Easy: DFS = Find groups


⭐ SUPER EASY MEMORY TRICK

BFS = Nearest First

    Shortest path
    Social friends
    Web crawling
    Broadcasting


DFS = Deep First

    Maze solving
    Find cycles
    Task ordering
    Connected components

-------------------------

⭐ What is a Maze? (Super Easy Explanation)

A maze is like a puzzle of paths where you must find a way out.

Think of:

    A garden maze
    A game maze
    A path with many turns
    Some paths go forward
    Some paths are dead-ends (wrong way)

Here is a simple ASCII maze:

Start
  |
  v
+---+---+---+
| S |   |   |
+   +---+   +
|   |   | E |
+---+   +---+


S = Start point
E = Exit point
Boxes = paths
Lines = walls

Some paths go nowhere → dead-ends.


⭐ How DFS works in a maze

DFS does this:

1. Go deep in one direction
2. If stuck (dead-end), come back
3. Try another path
4. Continue until exit found

Example:

Start → → ↓
       (Dead-end) → go back (↑)
Try another direction


This is why DFS is used to solve mazes.


⭐ Super Simple Example Maze

S → A → B → X (dead-end)
        ↑
        |
        C → E (exit)


DFS path:

1. Go S → A → B → X
2. X is dead-end → go back to B
3. Try C
4. C leads to E (exit)

So DFS helps find a path by:

👉 going deep
👉 coming back
👉 trying new paths


⭐ EASY MEMORY TRICK:

DFS = exploring a game maze
Deep → stuck → backtrack → try next way.
      `},{id:28,question:"28. Difference: BFS vs DFS.",answer:"",codeExample:`
⭐ BFS vs DFS (Easy Difference Table)

| BFS                                                      | DFS                                              |
| ---------------------------------------------------------| -------------------------------------------------|
| Breadth-First Search                                     | Depth-First Search                               |
| Visits level by level                                    | Visits deep path first                           |
| Uses Queue (FIFO)                                        | Uses Stack (LIFO) or Recursion                   |
| Finds shortest path                                      | Does not always find shortest path               |
| Good for nearest-first search                            | Good for exploring whole structure               |
| Used in social networks, web crawling, shortest path     | Used in mazes, cycle detection, topological sort |
| Needs more memory                                        | Needs less memory                                |
| Looks like spreading outward                             | Looks like going deep inside                     |



⭐ Easy Diagram Difference

BFS Diagram (Level by Level)

     0
   / | \\
  1  2  3
 / \\
4   5

BFS: 0 → 1 → 2 → 3 → 4 → 5


👉 Visits all neighbors first
👉 Then next level



DFS Diagram (Deep First)

     0
   / | \\
  1  2  3
 /
4
 \\
  5

DFS: 0 → 1 → 4 → 5 → backtrack → 2 → backtrack → 3


👉 Goes deep: 0 → 1 → 4 → 5
👉 Then backtracks



⭐ Very Simple Real-Life Examples

BFS Real-Life

Finding nearest:

    nearest friend
    nearest hospital
    shortest route

Because BFS thinks like:
👉 “Check all nearby first.”


DFS Real-Life

Solving a maze:

    Go deep inside
    Hit a dead-end
    Come back and try another route

Because DFS thinks like:
👉 “Go deep until stuck, then return.”


⭐ Memory Trick (Very Easy)

BFS = Broad First
DFS = Deep First
      
      `},{id:29,question:"29. Explain Spanning Tree with example.",answer:"",codeExample:`
⭐ What is a Spanning Tree? (Easy Explanation)

A spanning tree is a sub-graph of an undirected connected graph that:

1. Includes all the vertices
2. Has the minimum number of edges
3. Has no cycles

👉 If a graph has N vertices, a spanning tree always has N − 1 edges.


⭐ Think of it like this:

You have a graph with many roads and loops.
A spanning tree removes extra edges but keeps every place connected.


⭐ Example Graph

Here is a normal graph:

    A
   / \\
  B---C
   \\ /
    D

Edges:
(A,B), (A,C), (B,C), (B,D), (C,D)

👉 This graph has cycles (triangles).


⭐ Spanning Tree of This Graph

A spanning tree removes cycles but keeps all vertices connected.

One possible spanning tree:

    A
   / \\
  B   C
   \\
    D

Edges used:
(A,B), (A,C), (B,D)

👉 Uses 4 vertices and 3 edges (N − 1 = 4 − 1 = 3)
👉 No cycles
👉 All vertices connected


⭐ Another example (even simpler)

Original Graph:

1 ----- 2
| \\     |
|   \\   |
3 ----- 4

Edges:
(1,2), (1,3), (1,4), (3,4), (2,4)


✔ Spanning Tree Example

1 ----- 2
|
3
 \\
  4

Edges used:
(1,2), (1,3), (3,4)

👉 All 4 vertices
👉 Only 3 edges
👉 No cycles → so it is a spanning tree


⭐ Important Points to Remember

A graph can have many different spanning trees
A spanning tree always contains all vertices
No cycles allowed
Edges = (Vertices − 1)


⭐ Very Easy Real-Life Example

Imagine 4 houses connected with many roads.
A spanning tree chooses the minimum roads needed so:

    Every house is still reachable
    No extra loops
    No confusing paths
      
      `},{id:30,question:"30. Explain Minimum Spanning Tree.",answer:"",codeExample:`
⭐ What is a Minimum Spanning Tree (MST)?

A Minimum Spanning Tree is a special type of Spanning Tree from a weighted graph.

A Minimum Spanning Tree must:

1. Include all vertices
2. Have no cycles
3. Use exactly N − 1 edges
4. Have the minimum total weight

👉 MST = Spanning Tree with lowest total cost

⭐ Example Weighted Graph

     (4)
  A ------ B
  | \\      |
(3)|  \\(2) |(6)
  |   \\    |
  C ------ D
      (5)


Edges:

A–B = 4
A–C = 3
A–D = 2
C–D = 5
B–D = 6


⭐ Goal of MST

Pick edges that:

✔ Connect all vertices
✔ Avoid cycles
✔ Give the minimum weight sum


⭐ Step-by-step (Very Easy)

We choose smallest edges first:

1️⃣ Pick A–D (2)

Smallest weight

2️⃣ Pick A–C (3)

Next smallest

3️⃣ Pick A–B (4)

Next smallest
(Do NOT pick C–D or B–D because they create cycles)


⭐ Minimum Spanning Tree (MST)

     A
   / | \\
 (3)(2)(4)
 /   |   \\
C    D    B


Edges chosen:

A–D = 2
A–C = 3
A–B = 4

Total weight = 2 + 3 + 4 = 9

👉 This is the minimum possible.


⭐ Simple Real-Life Example

Imagine 4 cities want to connect electricity wires.

    Many possible roads
    Some roads cost more
    Some roads cost less

MST finds the cheapest way to connect ALL cities without loops.


⭐ Easy Memory Trick

Spanning Tree = connects all nodes, no cycles
Minimum Spanning Tree = connects all nodes with minimum cost
      
      `},{id:31,question:"31. Linear Search vs Binary Search with algorithm.",answer:"",codeExample:`
⭐ 1. Linear Search (Easy Explanation)

Linear Search means:
👉 Check elements one by one from start to end

Example

Array:

[5, 8, 2, 9, 1]

Searching for 9:

Check in order:
5 → 8 → 2 → 9 (found)

When to use

✔ Works on unsorted or sorted lists
✔ Very simple
❌ Slow for large data
      

⭐ Algorithm of Linear Search
LinearSearch(A, key):

1. Repeat for i = 0 to n-1:
2.     If A[i] == key:
3.         return i   // key found
4. End Repeat
5. return -1   // key not found



⭐ 2. Binary Search (Easy Explanation)

Binary Search means:
👉 Divide the array into two halves
👉 Check middle
👉 Go LEFT or RIGHT
❗ Works ONLY on sorted arrays

Example (Sorted array)

[2, 4, 6, 8, 10, 12]


Search for 8

Steps:

Middle = 8 → found
(If not found, go left or right)

When to use

✔ Very fast
✔ Best for large sorted arrays
❌ Works only on sorted data

⭐ Algorithm of Binary Search (Iterative)
BinarySearch(A, key):

1. low = 0
2. high = n - 1

3. While low <= high:
4.     mid = (low + high) / 2
5.     
6.     If A[mid] == key:
7.         return mid
8.     Else If key < A[mid]:
9.         high = mid - 1
10.    Else:
11.         low = mid + 1
12. return -1    // key not found

--------------------------

⭐ Diagrams
Linear Search
Array: [3, 8, 1, 9, 5]
Search for 9

3 → 8 → 1 → 9 (Found)

Binary Search

Array must be sorted:

[2, 4, 6, 8, 10, 12]
Search for 10

Step 1: mid = 6
Step 2: key > mid → go right
Step 3: mid = 10 → found

--------------------------

⭐ Difference Table (Very Easy to Remember)

| Linear Search              | Binary Search                  |
| -------------------------- | ------------------------------ |
| Checks elements one by one | Divides list in half each time |
| Works on unsorted list     | Works only on sorted list  |
| Slow for large data        | Very fast                      |
| Time = O(n)                | Time = O(log n)                |
| Simple                     | More efficient                 |



⭐ 1. Linear Search in C
#include <stdio.h>

int main() {
    int n, key, i, found = 0;

    printf("Enter size of array: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter %d elements:\\n", n);
    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter element to search: ");
    scanf("%d", &key);

    // Linear Search
    for(i = 0; i < n; i++) {
        if(arr[i] == key) {
            found = 1;
            break;
        }
    }

    if(found)
        printf("Element found at position %d\\n", i + 1);
    else
        printf("Element not found.\\n");

    return 0;
}

⭐ 2. Binary Search in C

⚠️ Remember: Binary Search works only on sorted array.

#include <stdio.h>

int main() {
    int n, key, i, low, high, mid;

    printf("Enter size of sorted array: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter %d sorted elements:\\n", n);
    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter element to search: ");
    scanf("%d", &key);

    low = 0;
    high = n - 1;

    // Binary Search
    while(low <= high) {
        mid = (low + high) / 2;

        if(arr[mid] == key) {
            printf("Element found at position %d\\n", mid + 1);
            return 0;
        }
        else if(key < arr[mid]) {
            high = mid - 1;   // search left part
        }
        else {
            low = mid + 1;    // search right part
        }
    }

    printf("Element not found.\\n");

    return 0;
}




------------------------------------------------------------------


You are asking:

“(0 + 1) / 2 = 0.5 → Why you choose 0? Why not choose 1?”

This is the heart of your confusion.
Let me clear it VERY VERY SIMPLE.

⭐ In C Language:

INTEGER ÷ INTEGER = INTEGER
Decimals are removed (not rounded).

So:

0.5 → decimal part removed → 0

Not rounded to 1.


⭐ IMPORTANT RULE

C does NOT round numbers.
It truncates (cuts the decimal).

So:

| Math Value | C Integer Result |
| ---------- | ---------------- |
| 0.5        | 0                |
| 1.5        | 1                |
| 2.9        | 2                |
| 3.7        | 3                |


It NEVER makes 0.5 → 1.

❗ Why C chooses 0, not 1?

Because:

✔ C does TRUNCATION

Remove decimal → keep only whole number.


❌ C does NOT ROUND

Round 0.5 up → 1 → this is NOT done in C integer division.


⭐ So your example:

(0 + 1) / 2 = 1 / 2 = 0.5
C integer division = 0


You cannot choose 1.
Because C doesn’t round.


🔥 FINAL ONE-LINE ANSWER

C always drops decimals.
It never rounds.
So 0.5 becomes 0, not 1.
      `},{id:32,question:"32. Bubble Sort working with diagram.",answer:"",codeExample:`
⭐ Bubble Sort (Easy Explanation)

Bubble Sort works like this:

👉 Compare two numbers
👉 If they are in wrong order, swap them
👉 Repeat this again and again
👉 Biggest number “bubbles up” to the end in each round

Just like bubbles move upward in water.


⭐ Example Array

We will sort this array in ascending order:

[5, 1, 4, 2]


⭐ Bubble Sort Working (with diagrams)

We compare adjacent elements in each pass.


⭐ PASS 1

Array:

[5, 1, 4, 2]

Step 1: Compare 5 and 1
5 > 1 → swap

[1, 5, 4, 2]

Step 2: Compare 5 and 4
5 > 4 → swap

[1, 4, 5, 2]

Step 3: Compare 5 and 2
5 > 2 → swap

[1, 4, 2, 5]

➡ Largest element 5 moves to the end


⭐ PASS 2

Now array:

[1, 4, 2, 5]

Step 1: Compare 1 and 4
1 < 4 → NO swap

Step 2: Compare 4 and 2
4 > 2 → swap

[1, 2, 4, 5]

Largest element of this round → 4 is fixed.


⭐ PASS 3
[1, 2, 4, 5]

Step 1: Compare 1 and 2
1 < 2 → NO swap

Now only one element left—sorting is complete.


⭐ FINAL SORTED ARRAY
[1, 2, 4, 5]


⭐ Bubble Sort Diagram (Full)

Initial:      [5, 1, 4, 2]

Pass 1:       [1, 5, 4, 2]
               [1, 4, 5, 2]
               [1, 4, 2, 5]

Pass 2:       [1, 4, 2, 5]
               [1, 2, 4, 5]

Pass 3:       [1, 2, 4, 5]

Final:        [1, 2, 4, 5]



⭐ Easy Memory Trick

Bubble Sort = Compare + Swap + Bubble biggest to end



⭐ Bubble Sort Algorithm (Easy)

BubbleSort(A, n):

1. Repeat for i = 0 to n-2
2.     Repeat for j = 0 to n-i-2
3.         If A[j] > A[j+1]
4.             Swap A[j] and A[j+1]
5. End


Explanation:

Outer loop → number of passes
Inner loop → compares adjacent elements
Swap if element is in wrong order



⭐ Bubble Sort Program in C

#include <stdio.h>

int main() {
    int n, i, j, temp;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter %d elements:\\n", n);
    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Bubble Sort
    for(i = 0; i < n - 1; i++) {
        for(j = 0; j < n - i - 1; j++) {

            if(arr[j] > arr[j + 1]) {
                // Swap
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }
    }

    printf("Sorted array:\\n");
    for(i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}
      
      `},{id:33,question:"33. Selection Sort working.",answer:"",codeExample:`
⭐ Selection Sort (Easy Explanation)

Selection Sort works like this:

👉 Find the smallest element in the array
👉 Put it in the first position
👉 Then find the next smallest
👉 Put it in the second position
👉 Continue until the entire array is sorted

It is like selecting the smallest number and placing it in order.

⭐ Example Array

We will sort this:

[5, 3, 8, 1, 2]



⭐ Selection Sort Diagram Summary

Initial:     [5, 3, 8, 1, 2]

Pass 1:      [1, 3, 8, 5, 2]

Pass 2:      [1, 2, 8, 5, 3]

Pass 3:      [1, 2, 3, 5, 8]

Pass 4:      [1, 2, 3, 5, 8]

Sorted:      [1, 2, 3, 5, 8]



⭐ Selection Sort Algorithm (Very Easy)

SelectionSort(A, n):

1. Repeat for i = 0 to n-2
2.     minIndex = i
3.     
4.     Repeat for j = i+1 to n-1
5.         If A[j] < A[minIndex]
6.             minIndex = j
7.     
8.     Swap A[i] and A[minIndex]
9. End


✔ Explanation:

Pick position i
Find the smallest element in the remaining array
Swap smallest with A[i]
Continue until the whole array is sorted


⭐ Selection Sort Program in C

#include <stdio.h>

int main() {
    int n, i, j, minIndex, temp;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter %d elements:\\n", n);
    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Selection Sort
    for(i = 0; i < n - 1; i++) {

        minIndex = i;  // Assume current index is minimum

        // Find actual minimum from remaining elements
        for(j = i + 1; j < n; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap arr[i] with arr[minIndex]
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    printf("Sorted array:\\n");
    for(i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}
    

------------------------------------------------------


What the variables mean

    n = number of elements (here 5)
    arr[] = your array
    i = current index we want to fill with the correct (minimum) element
    minIndex = index of the smallest element found so far in the unsorted part
    j = index used to scan the unsorted part
    temp = temporary variable used to swap two elements


Initial state
n = 5
arr = [5, 3, 8, 1, 2]


Selection sort runs i from 0 to n-2 (i.e., 0..3). At each i we:

1. assume minIndex = i
2. scan j = i+1 .. 4 to find the actual minimum index
3. swap arr[i] and arr[minIndex] (even if minIndex == i)


---------------------


Iteration i = 0

Start: i = 0
Assume minIndex = 0 → arr[minIndex] = arr[0] = 5

Scan j from 1 to 4:

    j = 1: compare arr[1] = 3 with arr[minIndex] = 5 → 3 < 5 → update minIndex = 1
    j = 2: compare arr[2] = 8 with arr[1] = 3 → 8 < 3 ? No → minIndex remains 1
    j = 3: compare arr[3] = 1 with arr[1] = 3 → 1 < 3 → update minIndex = 3
    j = 4: compare arr[4] = 2 with arr[3] = 1 → 2 < 1 ? No → minIndex remains 3

After scanning, minIndex = 3 (value 1).


Swap arr[0] and arr[3]:

temp = arr[0] = 5
arr[0] = arr[3] = 1
arr[3] = temp = 5


Array becomes:

arr = [1, 3, 8, 5, 2]


---------------------


Iteration i = 1

Start: i = 1
Assume minIndex = 1 → arr[minIndex] = arr[1] = 3


Scan j = 2..4:

    j = 2: compare arr[2] = 8 with arr[1] = 3 → 8 < 3 ? No
    j = 3: compare arr[3] = 5 with arr[1] = 3 → 5 < 3 ? No
    j = 4: compare arr[4] = 2 with arr[1] = 3 → 2 < 3 → update minIndex = 4

After scanning, minIndex = 4 (value 2).


Swap arr[1] and arr[4]:

temp = arr[1] = 3
arr[1] = arr[4] = 2
arr[4] = temp = 3


Array becomes:

arr = [1, 2, 8, 5, 3]


---------------------


Iteration i = 2

Start: i = 2
Assume minIndex = 2 → arr[minIndex] = arr[2] = 8

Scan j = 3..4:

    j = 3: compare arr[3] = 5 with arr[2] = 8 → 5 < 8 → update minIndex = 3
    j = 4: compare arr[4] = 3 with arr[3] = 5 → 3 < 5 → update minIndex = 4

After scanning, minIndex = 4 (value 3).


Swap arr[2] and arr[4]:

temp = arr[2] = 8
arr[2] = arr[4] = 3
arr[4] = temp = 8


Array becomes:

arr = [1, 2, 3, 5, 8]


---------------------


Iteration i = 3

Start: i = 3
Assume minIndex = 3 → arr[minIndex] = arr[3] = 5

Scan j = 4:

    j = 4: compare arr[4] = 8 with arr[3] = 5 → 8 < 5 ? No → minIndex remains 3

After scanning, minIndex = 3. Swap with itself happens (harmless):


Swap arr[3] and arr[3]:

temp = arr[3] = 5
arr[3] = arr[3] = 5
arr[3] = temp = 5


Array remains:

arr = [1, 2, 3, 5, 8]




End

i stops at n-2 = 3. Final sorted array printed by the program:

Sorted array:
1 2 3 5 8


Visual summary of array after each outer iteration

After i = 0 → [1, 3, 8, 5, 2]
After i = 1 → [1, 2, 8, 5, 3]
After i = 2 → [1, 2, 3, 5, 8]
After i = 3 → [1, 2, 3, 5, 8] (no change)


Complexity quick note

Time: O(n²) comparisons in worst/average/best (selection sort always scans remaining elements)
Space: O(1) extra (in-place sort)
      `},{id:34,question:"34. Insertion Sort working.",answer:"",codeExample:`
⭐ Insertion Sort (Easy Explanation)

Insertion Sort works like this:

👉 You take elements one by one
👉 Insert each element into its correct position in the sorted part
👉 The left side becomes sorted gradually

Think of arranging playing cards in your hand.


⭐ Insertion Sort Algorithm
InsertionSort(A, n):

1. Repeat for i = 1 to n-1
2.     key = A[i]
3.     j = i - 1
4.     
5.     While j >= 0 AND A[j] > key
6.         A[j + 1] = A[j]
7.         j = j - 1
8.     
9.     A[j + 1] = key
10. End



⭐ Insertion Sort Program in C

#include <stdio.h>

int main() {
    int n, i, j, key;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter %d elements:\\n", n);
    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Insertion Sort
    for(i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        // Move elements greater than key
        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    printf("Sorted array:\\n");
    for(i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}


------------------------------------------------------


✔ Array = [5, 2, 4, 6, 1]

Insertion sort works like this:

Start from index 1
Take that element as key
Shift all bigger elements to the right
Insert key into correct position

Let’s go one pass at a time.

⭐ Initial Array
[5, 2, 4, 6, 1]


✅ i = 1
key = arr[1] = 2
j = 0


Compare:

arr[j] = 5 > key(2)  → shift 5 right


Array after shift:

[5, 5, 4, 6, 1]


j-- → j = -1

Insert key at position j+1 = 0

arr[0] = 2


Array becomes:

[2, 5, 4, 6, 1]



✅ i = 2
key = arr[2] = 4
j = 1


Compare:

arr[1] = 5 > key(4) → shift 5 right


Array:

[2, 5, 5, 6, 1]


j-- → j = 0

Compare:

arr[0] = 2 > 4 ? No → stop


Insert key at j+1 = 1:

arr[1] = 4


Array becomes:

[2, 4, 5, 6, 1]



✅ i = 3
key = 6
j = 2


Compare:

arr[2] = 5 > 6 ? No


No shifts. Insert key at same place.

Array remains:

[2, 4, 5, 6, 1]



✅ i = 4
key = 1
j = 3


Now big shifting happens:

Compare:

arr[3] = 6 > 1 → shift


Array:

[2, 4, 5, 6, 6]


j = 2

Compare:

arr[2] = 5 > 1 → shift


Array:

[2, 4, 5, 5, 6]


j = 1

Compare:

arr[1] = 4 > 1 → shift


Array:

[2, 4, 4, 5, 6]


j = 0

Compare:

arr[0] = 2 > 1 → shift


Array:

[2, 2, 4, 5, 6]

j = -1 → stop
Insert key at j+1 = 0

arr[0] = 1


Array becomes:

[1, 2, 4, 5, 6]


🎉 FINAL SORTED ARRAY
1 2 4 5 6


🌟 Summary of each step:

| i | key | Resulting array |
| - | --- | --------------- |
| 1 | 2   | [2, 5, 4, 6, 1] |
| 2 | 4   | [2, 4, 5, 6, 1] |
| 3 | 6   | [2, 4, 5, 6, 1] |
| 4 | 1   | [1, 2, 4, 5, 6] |

      `},{id:35,question:"35. Quick Sort – Pivot, Partition, Recursion.",answer:"",codeExample:`
⭐ 1. Quick Sort (Easy Explanation)

Quick Sort is a sorting method that works in 3 main steps:

1. Pivot

Choose one element from the array.
This element is called pivot.
The pivot helps to divide the array.


2. Partition

Move all smaller elements to left of pivot.
Move all larger elements to right of pivot.
After partition, pivot is in correct sorted position.


3. Recursion

Apply Quick Sort again on:
    Left part of pivot
    Right part of pivot
Continue until the whole array is sorted.



------------

⭐ 2. Example (Simple and Clear)

Array:

[8, 4, 7, 3, 9, 1]


Step 1: Choose pivot = 8

Partition result:

    Left side:  elements < 8 → [4, 7, 3, 1]
    Pivot:                         8
    Right side: elements > 8 → [9]


Step 2: Apply Quick Sort on left side:

    [4, 7, 3, 1]
    Pivot = 4


Step 3: Apply Quick Sort again until all parts are sorted.

Final sorted array:

[1, 3, 4, 7, 8, 9]


-------------------------------------------------------------


⭐ Simple Quick Sort Algorithm (matching the short program)

QuickSort(A, low, high):

1. Set i = low
2. Set j = high
3. Set pivot = A[(low + high) / 2]

4. While i <= j:
5.     Move i right until A[i] >= pivot
6.     Move j left until A[j] <= pivot
7.     If i <= j:
8.         Swap A[i] and A[j]
9.         i = i + 1
10.        j = j - 1

11. If low < j:
12.     QuickSort(A, low, j)

13. If i < high:
14.     QuickSort(A, i, high)




⭐ Simple & Short Quick Sort Program in C

#include <stdio.h>

void quickSort(int a[], int low, int high) {
    int i = low, j = high, pivot = a[(low + high) / 2], temp;

    while(i <= j) {
        while(a[i] < pivot) i++;
        while(a[j] > pivot) j--;

        if(i <= j) {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
            i++;
            j--;
        }
    }

    if(low < j) quickSort(a, low, j);
    if(i < high) quickSort(a, i, high);
}

int main() {
    int n, i;
    printf("Enter number of elements: ");
    scanf("%d", &n);

    int a[n];

    printf("Enter %d elements:\\n", n);
    for(i = 0; i < n; i++)
        scanf("%d", &a[i]);

    quickSort(a, 0, n - 1);

    printf("Sorted array:\\n");
    for(i = 0; i < n; i++)
        printf("%d ", a[i]);

    return 0;
}


--------------------------------------------------------------
code explaination with detailed steps


✅ Array: [8, 4, 7, 3, 9, 1]

And this time I will clearly show:

i, j, pivot

swaps

final partitions

AND whether these two conditions run or not:

if (low < j)
if (i < high)

⭐ START: quickSort(a, 0, 5)

Array: [8, 4, 7, 3, 9, 1]
low = 0, high = 5

Pivot = a[(0+5)/2] = a[2] = 7
i = 0
j = 5
pivot = 7

🔵 PASS 1 — Partitioning
Move i →
a[i] = 8 < 7 ? NO → stop i=0

Move j ←
a[j] = 1 > 7 ? NO → stop j=5

Swap a[0], a[5] → (8 ↔ 1)

Array becomes:

[1, 4, 7, 3, 9, 8]


Move i, j:

i = 1
j = 4

🔵 PASS 2
Move i →
a[i] = 4 < 7 → i=2
a[i] = 7 < 7 ? NO → stop i=2

Move j ←
a[j] = 9 > 7 → j=3
a[j] = 3 > 7 ? NO → stop j=3

Swap a[2], a[3] → (7 ↔ 3)

Array becomes:

[1, 4, 3, 7, 9, 8]


Move i, j:

i = 3
j = 2

🛑 STOP Partition (i > j)

So partition indices:

Left part: low = 0 → j = 2
Right part: i = 3 → high = 5

⭐ NOW CHECK CONDITIONS
CONDITION 1:
if (low < j)
0 < 2 → TRUE


👉 Call: quickSort(a, 0, 2)

CONDITION 2:
if (i < high)
3 < 5 → TRUE


👉 Call: quickSort(a, 3, 5)

🔥 Now we go inside both recursive calls.
==========================================
✅ LEFT RECURSION: quickSort(a, 0, 2)

Subarray: [1, 4, 3]

Pivot = middle = a[(0+2)/2] = a[1] = 4

i = 0
j = 2
pivot = 4

🔵 PASS 1

Move i →

a[i] = 1 < 4 → i=1
a[i] = 4 < 4 ? NO → stop i=1


Move j ←

a[j] = 3 > 4 ? NO → stop j=2


Swap a[1], a[2] → (4 ↔ 3)

Array:

[1, 3, 4, 7, 9, 8]


Move:

i = 2
j = 1


Stop loop.

✔ LEFT PARTITION RESULTS (0,2):

Left: 0 to j = 1
Right: i = 2 to 2

CONDITION 1:
if (low < j)
0 < 1 → TRUE


👉 Call: quickSort(a, 0, 1)

CONDITION 2:
if (i < high)
2 < 2 → FALSE


❌ No call to quickSort(a, 2, 2)

==========================================
✅ LEFT-LEFT RECURSION: quickSort(a, 0, 1)

Subarray: [1, 3]

Pivot = a[ (0+1)/2 ] = a[0] = 1

i = 0
j = 1
pivot = 1

Move i
a[i] = 1 < 1 ? NO → stop

Move j
a[j] = 3 > 1 → j=0
a[j] = 1 > 1 ? NO → stop

Swap a[0], a[0] (same element, no change)
i = 1
j = -1


Partition done.

Conditions:

Left:

if (0 < -1) → FALSE


Right:

if (1 < 1) → FALSE


No more recursion.

==========================================
🎉 LEFT SIDE COMPLETELY SORTED:
[1, 3, 4, 7, 9, 8]

==========================================
✅ RIGHT RECURSION: quickSort(a, 3, 5)

Subarray: [7, 9, 8]

Pivot = middle = a[(3+5)/2] = a[4] = 9

i = 3
j = 5
pivot = 9

🔵 PASS 1

Move i →

a[i] = 7 < 9 → i=4
a[i] = 9 < 9 ? NO → stop


Move j ←

a[j] = 8 > 9 ? NO → stop


Swap a[4], a[5] → (9 ↔ 8)

Array:

[1, 3, 4, 7, 8, 9]


i = 5
j = 4
Loop ends.

Left part: 3 → 4
Right part: 5 → 5

CONDITIONS:
if (3 < 4) → TRUE → quickSort(a, 3, 4)
if (5 < 5) → FALSE

==========================================
🔹 quickSort(a, 3, 4)

Subarray: [7, 8]

Pivot = a[3] = 7

i = 3
j = 4


Move i:

a[i] = 7 < 7 ? NO


Move j:

a[j] = 8 > 7 → j=3
a[j] = 7 > 7 ? NO


Swap → swap same element
i=4, j=2

Conditions:

if (3 < 2) FALSE
if (4 < 4) FALSE


No recursion.

🎉 FINAL SORTED ARRAY
[1, 3, 4, 7, 8, 9]


      `},{id:36,question:"36. Merge Sort – Divide, Conquer, Merge.",answer:"",codeExample:`
⭐ 1. Merge Sort (Easy Explanation)

Merge Sort works in three steps:

⭐ 1. Divide (Break the array)

👉 Break the array into two parts
👉 Then break those parts again
👉 Keep breaking until each part has only 1 element

Example:
If array is:

[8, 3, 5, 4]


Break into two parts:

[8, 3]   and   [5, 4]


Break again:

[8] [3]   and   [5] [4]

Now each part has 1 element → stop breaking.



⭐ 2. Conquer (Sort small parts)

A single element is already sorted.
So nothing to do here.

You just take the small parts and get ready to join them.



⭐ 3. Merge (Join in sorted order)

Now join the small parts in sorted order.

Example:

Join [8] and [3] → becomes [3, 8]
Join [5] and [4] → becomes [4, 5]

Now join [3, 8] and [4, 5] →

Final result:

[3, 4, 5, 8]

This is the sorted array.



⭐ ONE-LINE MEMORY TRICK

Break → Break → Join sorted.


⭐ WHY IS IT CALLED MERGE SORT?

Because the last step joins (merges) small sorted parts
to make the final sorted array.



⭐ 2. Simple Example

Array:

[8, 3, 5, 4]

Step 1: Divide

→ Break into smaller parts
→ Until each part has one element.

Step 2: Conquer

Each small part becomes sorted automatically
(because 1 element is already sorted).

Step 3: Merge

Merge small sorted parts into bigger sorted parts
until the whole array is sorted.



Final:

[3, 4, 5, 8]

⭐ 3. Merge Sort Algorithm (Easy and Short)

MergeSort(A, low, high):

1. If low < high:
2.     mid = (low + high) / 2
3.     MergeSort(A, low, mid)       // left half
4.     MergeSort(A, mid + 1, high)  // right half
5.     Merge(A, low, mid, high)     // merge both halves


Merge Algorithm

Merge(A, low, mid, high):

1. Create two temporary arrays: left, right
2. Copy data into left and right arrays
3. Compare elements of both arrays
4. Put smaller element back into original array
5. Copy remaining elements from left (if any)
6. Copy remaining elements from right (if any)


⭐ 4. Simple & Short Merge Sort Program in C

#include <stdio.h>

void merge(int a[], int low, int mid, int high) {
    int i = low, j = mid + 1, k = 0;
    int temp[high - low + 1];

    while(i <= mid && j <= high) {
        if(a[i] < a[j])
            temp[k++] = a[i++];
        else
            temp[k++] = a[j++];
    }

    while(i <= mid)
        temp[k++] = a[i++];

    while(j <= high)
        temp[k++] = a[j++];

    for(i = low, k = 0; i <= high; i++, k++)
        a[i] = temp[k];
}

void mergeSort(int a[], int low, int high) {
    if(low < high) {
        int mid = (low + high) / 2;

        mergeSort(a, low, mid);
        mergeSort(a, mid + 1, high);

        merge(a, low, mid, high);
    }
}

int main() {
    int n, i;
    printf("Enter number of elements: ");
    scanf("%d", &n);

    int a[n];
    printf("Enter %d elements:\\n", n);
    for(i = 0; i < n; i++)
        scanf("%d", &a[i]);

    mergeSort(a, 0, n - 1);

    printf("Sorted array:\\n");
    for(i = 0; i < n; i++)
        printf("%d ", a[i]);

    return 0;
}
 


--------------------------------------------------------------


⭐ ARRAY = [8, 4, 7, 3, 9, 1]

I will show:

When mergeSort() is called

What values of low, mid, high are

How merge() compares and copies values

How temp[] and a[] change

Everything step-by-step.

🚀 STEP 1 – main()
mergeSort(a, 0, 5);


So we start with:

low = 0
high = 5
array = [8, 4, 7, 3, 9, 1]

⭐ mergeSort(a, 0, 5)
mid = (0+5)/2 = 2


So two parts:

LEFT → mergeSort(a, 0, 2)
RIGHT → mergeSort(a, 3, 5)

================================================================
🔵 LEFT PART: mergeSort(a, 0, 2)
low=0, high=2
mid = (0+2)/2 = 1


Split again:

LEFT → mergeSort(a, 0,1)
RIGHT → mergeSort(a, 2,2)

🔵 mergeSort(a, 0,1)
low=0, high=1
mid = 0


LEFT → mergeSort(a,0,0)
RIGHT → mergeSort(a,1,1)

Both single → no action.

Now merge(a, 0, 0, 1)
Subarray: [8,4]

🟢 Explanation of merge(a,0,0,1)
i = 0
j = 1
temp = []


Compare:

a[i]=8, a[j]=4
4 < 8 → temp = [4], j=2


Now j > high → copy remaining i

temp = [4, 8]


Copy back into array:

a[0] = 4
a[1] = 8


Array becomes:

[4, 8, 7, 3, 9, 1]

🔵 mergeSort(a, 2,2)

Single element → do nothing
Subarray is simply [7]

🔵 Now merge(a,0,1,2)

Subarray = [4,8,7]

i = 0, j = 2
temp = []


Compare:

4 vs 7 → 4 smaller → temp=[4], i=1
8 vs 7 → 7 smaller → temp=[4,7], j=3
Copy remaining (8)
temp=[4,7,8]


Copy back:

Array becomes:

[4, 7, 8, 3, 9, 1]

⭐ LEFT SIDE COMPLETE
[4, 7, 8]

================================================================
🔴 RIGHT PART: mergeSort(a, 3, 5)
low=3, high=5
mid = 4


LEFT → mergeSort(a,3,4)
RIGHT → mergeSort(a,5,5)

🔴 mergeSort(a,3,4)
low=3, high=4
mid=3


LEFT → mergeSort(a,3,3)
RIGHT → mergeSort(a,4,4)

Both single.

Now merge(a,3,3,4)

Subarray = [3,9]

i=3, j=4
3 < 9 → temp=[3], i=4
copy remaining 9 → temp=[3,9]


Copy back:
Array becomes:

[4, 7, 8, 3, 9, 1]


(No change actually)

🔴 mergeSort(a,5,5)

Single → nothing.

Now final right merge:

merge(a,3,4,5)

Subarray = [3,9,1]

i=3, j=5


Compare:

3 vs 1 → take 1 → temp=[1], j=6
j passed → take remaining 3,9
temp=[1,3,9]


Copy back:

Array becomes:

[4, 7, 8, 1, 3, 9]

================================================================
⭐ FINAL MERGE: merge(a,0,2,5)

Left side: [4,7,8]
Right side: [1,3,9]

i=0, j=3
temp=[]


Compare step-by-step:

4 vs 1 → 1 → temp=[1]
4 vs 3 → 3 → temp=[1,3]
4 vs 9 → 4 → temp=[1,3,4]
7 vs 9 → 7 → temp=[1,3,4,7]
8 vs 9 → 8 → temp=[1,3,4,7,8]
Remaining → 9 → temp=[1,3,4,7,8,9]


Copy back:

Final array:

[1, 3, 4, 7, 8, 9]

🎉 FINAL SORTED ARRAY
1 3 4 7 8 9



------------------


Array: [4, 8, 7, 3, 9, 1]
We just finished merge(a, 0, 0, 1)


🔵 Back to mergeSort(a, 0, 2) — next step

We had:

mergeSort(a, 2, 2)   // right part of this call
mergeSort(a, 2, 2) is single element (low == high), so it returns immediately. Subarray at indices 0..2 is now: [4, 8, 7].

Now we call:

merge(a, 0, 1, 2)
Parameters: low=0, mid=1, high=2
Left part = a[0..1] = [4,8]
Right part = a[2..2] = [7]

Inside merge(a,0,1,2):

Initial:

i = low = 0
j = mid+1 = 2
k = 0
temp size = high-low+1 = 3  → temp = [ , , ]


Step-by-step comparisons:

Compare a[i]=a[0]=4 and a[j]=a[2]=7
4 < 7 → temp[0] = 4, then i++ and k++
Now: i=1, j=2, k=1, temp = [4, , ]

Compare a[i]=a[1]=8 and a[j]=a[2]=7
8 < 7? NO → take a[j] → temp[1] = 7, then j++ and k++
Now: i=1, j=3, k=2, temp = [4,7, ]


j (3) > high (2) → exit first while. Copy remaining left:

i <= mid → temp[2] = a[1] = 8, then i=2, k=3
temp = [4,7,8]


Copy temp back into a at positions i = low .. high:

a[0] = temp[0] = 4
a[1] = temp[1] = 7
a[2] = temp[2] = 8

Array becomes:

[4, 7, 8, 3, 9, 1]
Left side (indices 0..2) is now sorted: [4,7,8].



🔴 Right half of the original call: mergeSort(a, 3, 5)

Call:

mergeSort(a, 3, 5)
mid = (3+5)/2 = 4


So it calls:

mergeSort(a, 3, 4)
mergeSort(a, 5, 5)


mergeSort(a, 3, 4):

low=3, high=4, mid=3
Calls: mergeSort(a,3,3) and mergeSort(a,4,4) → both return (single elements)
Then merge(a, 3, 3, 4)


Subarray a[3..4] is [3,9] (from current full array [4,7,8,3,9,1]).
merge(a,3,3,4):

Initial:

i = 3, j = 4, k = 0, temp size = 2 → temp = [ , ]


Compare a[3]=3 and a[4]=9 → 3 < 9 → temp[0]=3, i=4,k=1
i > mid now → copy remaining right:
temp[1] = a[4] = 9

Copy back:

a[3] = 3
a[4] = 9


Array remains:

[4, 7, 8, 3, 9, 1]

(no change since it was already [3,9])

mergeSort(a, 5, 5) → single element [1], returns.


Now merge the two right subparts:

merge(a, 3, 4, 5)

Left part a[3..4] = [3,9], Right part a[5..5] = [1].

merge(a,3,4,5):

Initial:

i = 3, j = 5, k = 0, temp size = 3 → temp = [ , , ]


Step-by-step:

Compare a[3]=3 and a[5]=1 → 3 < 1? NO → take a[j]=1 → temp[0]=1, j=6,k=1
    Now j > high so exit first while.

Copy remaining left elements (i <= mid):

    temp[1] = a[3] = 3, i=4,k=2
    temp[2] = a[4] = 9, i=5,k=3

temp = [1,3,9]


Copy back into a[3..5]:

a[3] = 1
a[4] = 3
a[5] = 9


Array becomes:

[4, 7, 8, 1, 3, 9]

Right side (indices 3..5) is now [1,3,9].


🔵 Final merge of the whole array:
We now have two sorted halves:

Left a[0..2] = [4,7,8]

Right a[3..5] = [1,3,9]

Call:

merge(a, 0, 2, 5)


merge(a,0,2,5):
Initial:

i = 0, j = 3, k = 0
temp size = 6 → temp = [ , , , , , ]


Step-by-step:

Compare a[0]=4 vs a[3]=1 → take 1 → temp[0]=1, j=4,k=1
temp: [1, , , , , ]

Compare a[0]=4 vs a[4]=3 → take 3 → temp[1]=3, j=5,k=2
temp: [1,3, , , , ]

Compare a[0]=4 vs a[5]=9 → take 4 → temp[2]=4, i=1,k=3
temp: [1,3,4, , , ]

Compare a[1]=7 vs a[5]=9 → take 7 → temp[3]=7, i=2,k=4
temp: [1,3,4,7, , ]

Compare a[2]=8 vs a[5]=9 → take 8 → temp[4]=8, i=3,k=5
temp: [1,3,4,7,8, ]

Now i > mid (i=3, mid=2), copy remaining right:
temp[5] = a[5] = 9, k=6

Final temp = [1,3,4,7,8,9]

Copy back into a[0..5]:

a[0] = 1
a[1] = 3
a[2] = 4
a[3] = 7
a[4] = 8
a[5] = 9

Array becomes:
[1, 3, 4, 7, 8, 9]

✅ Final sorted array (after mergeSort(a, 0, 5)):
[1, 3, 4, 7, 8, 9]


----------------------

After merging (0,0) & (1,1), we had this:

Array = [4, 8, 7, 3, 9, 1]


Now we continue exactly from where you asked:

🔵 Back to mergeSort(a, 0, 2)

Earlier we did:

LEFT  → mergeSort(a,0,1)  ✔ (completed)
RIGHT → mergeSort(a,2,2)  ✔ (single element)


Now we must merge the two halves:

Left half = a[0..1] = [4, 8]
Right half = a[2..2] = [7]

So call:

merge(a, 0, 1, 2)


🟢 merge(a, 0, 1, 2) – STEP BY STEP

Initial values:
i = 0
j = 2
mid = 1
high = 2

temp = [ ]   (empty)

Compare a[i] and a[j]
| i | j | a[i] | a[j] |
| - | - | ---- | ---- |
| 0 | 2 | 4    | 7    |


✔ 4 < 7 → copy 4

temp = [4]
i = 1


Next compare:
| i | j | a[i] | a[j] |
| - | - | ---- | ---- |
| 1 | 2 | 8    | 7    |


✘ 8 < 7?
No → copy a[j]

temp = [4, 7]
j = 3


Now:

j = 3 > high (2)
→ stop comparing


🟣 Now copy remaining i elements:

i = 1 ≤ mid (1), so copy a[1]

temp = [4, 7, 8]
i = 2

Now i > mid → stop.


🔥 Now copy temp[] back to a[]

Indexes: 0 to 2
temp = [4, 7, 8]

a[0] = 4
a[1] = 7
a[2] = 8

🎉 Array after merge(a,0,1,2):

[4, 7, 8, 3, 9, 1]


🔵 Completed LEFT SIDE (0–2)

The entire left portion is now sorted:

Left sorted = [4, 7, 8]


⭐ NEXT STEP (ready?):
👉 Continue with Right side: mergeSort(a, 3, 5)
      `},{id:37,question:"37. Heap Sort – Max-Heap + Heapify.",answer:"",codeExample:`
⭐ 1. What is Heap Sort? (Easy Words)

Heap Sort is a sorting method that uses a special tree-like structure called a Heap.

There are two types:

Max-Heap → biggest element on top
Min-Heap → smallest element on top

For Heap Sort, we use a Max-Heap.



⭐ 2. What is Max-Heap? (Simple Words)

A Max-Heap means:

👉 The largest number is always at the top (root).
👉 Every parent is bigger than its children.

So we can easily remove the greatest element.



⭐ 3. What is Heapify? (Very Simple)

Heapify = fixing the heap.

If one element is out of order:
👉 Heapify moves it down
👉 Until the heap becomes correct Max-Heap again.

You can remember Heapify as:

“Arrange so that parent is bigger than child.”



⭐ 4. How Heap Sort Works (Easy Steps)

Heap Sort works in two phases:

⭐ Phase 1: Build Max-Heap

Convert the entire array into a Max-Heap.
Now the largest element is at index 0.

⭐ Phase 2: Sorting

1. Swap the first element (largest) with the last element
2. Reduce heap size
3. Call heapify to fix the heap
4. Repeat until array is sorted



⭐ 5. Easy Example

Array:

[4, 10, 3, 5, 1]

Step 1: Convert to Max-Heap → largest goes to first position
Step 2: Swap first and last
Step 3: Heapify
Step 4: Repeat

Final sorted array:

[1, 3, 4, 5, 10]


⭐ 6. Heap Sort Algorithm (Easy Version)

HeapSort(A, n):

1. Build a Max-Heap from the array
2. For i = n-1 down to 1:
3.     Swap A[0] and A[i]
4.     Heapify(A, 0, i)


⭐ Heapify Algorithm

Heapify(A, i, size):

1. largest = i
2. left = 2*i + 1
3. right = 2*i + 2

4. If left < size AND A[left] > A[largest]
5.     largest = left

6. If right < size AND A[right] > A[largest]
7.     largest = right

8. If largest != i:
9.     Swap A[i] and A[largest]
10.    Heapify(A, largest, size)



⭐ 7. Simple & Short C Program for Heap Sort

#include <stdio.h>

void heapify(int a[], int n, int i) {
    int largest = i;
    int left = 2*i + 1;
    int right = 2*i + 2;
    int temp;

    if(left < n && a[left] > a[largest])
        largest = left;

    if(right < n && a[right] > a[largest])
        largest = right;

    if(largest != i) {
        temp = a[i];
        a[i] = a[largest];
        a[largest] = temp;

        heapify(a, n, largest);
    }
}

void heapSort(int a[], int n) {
    int i, temp;

    // Build Max-Heap
    for(i = n/2 - 1; i >= 0; i--)
        heapify(a, n, i);

    // Sorting
    for(i = n - 1; i >= 1; i--) {
        temp = a[0];
        a[0] = a[i];
        a[i] = temp;

        heapify(a, i, 0);
    }
}

int main() {
    int n, i;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    int a[n];
    printf("Enter %d elements:\\n", n);
    for(i = 0; i < n; i++)
        scanf("%d", &a[i]);

    heapSort(a, n);

    printf("Sorted array:\\n");
    for(i = 0; i < n; i++)
        printf("%d ", a[i]);

    return 0;
}



--------------------------------------------------------------

⭐ ARRAY = [8, 4, 7, 3, 9, 1]

n = 6

🔹 BASIC IDEA OF HEAP SORT (1 minute)

First build a Max Heap
→ largest element comes to index 0

Then swap root with last element

Reduce heap size

Call heapify() again

Repeat until sorted

🔹 STEP 1: main()
heapSort(a, n);


So we enter:

heapSort(a, 6)
Array = [8, 4, 7, 3, 9, 1]

🔹 STEP 2: BUILD MAX HEAP
for(i = n/2 - 1; i >= 0; i--)
    heapify(a, n, i);

Why n/2 - 1?

Last non-leaf node index

For n=6 → 6/2 - 1 = 2

So loop runs:

i = 2, 1, 0

🔵 heapify(a, 6, 2)
i = 2
largest = 2
left = 2*2+1 = 5
right = 2*2+2 = 6


Array:

[8, 4, 7, 3, 9, 1]


Check:

left < n → a[5]=1 > a[2]=7 ? NO
right < n → false


No swap → return

🔵 heapify(a, 6, 1)
i = 1
largest = 1
left = 3
right = 4


Values:

a[1]=4, a[3]=3, a[4]=9


Check:

a[3] > a[1]? 3>4 NO
a[4] > a[1]? 9>4 YES → largest=4


Swap:

4 ↔ 9


Array becomes:

[8, 9, 7, 3, 4, 1]


Now recursive call:

heapify(a, 6, 4)


At index 4 → no children → return

🔵 heapify(a, 6, 0)
i = 0
largest = 0
left = 1
right = 2


Values:

a[0]=8, a[1]=9, a[2]=7


Check:

9 > 8 → largest=1
7 > 9? NO


Swap:

8 ↔ 9


Array:

[9, 8, 7, 3, 4, 1]


Recursive:

heapify(a, 6, 1)


At index 1:

left=3(3), right=4(4)
Both < 8 → no swap

✅ MAX HEAP BUILT
[9, 8, 7, 3, 4, 1]

🔹 STEP 3: SORTING PHASE
for(i = n-1; i >= 1; i--)

🔴 i = 5

Swap root with last:

9 ↔ 1


Array:

[1, 8, 7, 3, 4, 9]


Call:

heapify(a, 5, 0)

heapify(a,5,0)
largest=0
left=1(8)
right=2(7)


Largest = 1 → swap:

1 ↔ 8


Array:

[8, 1, 7, 3, 4, 9]


Recursive heapify at index 1:

left=3(3)
right=4(4)
largest=4


Swap:

1 ↔ 4


Array:

[8, 4, 7, 3, 1, 9]

🔴 i = 4

Swap:

8 ↔ 1


Array:

[1, 4, 7, 3, 8, 9]


heapify(a,4,0):

largest=2 (7)


Swap:

1 ↔ 7


Array:

[7, 4, 1, 3, 8, 9]


heapify(a,4,2) → no children

🔴 i = 3

Swap:

7 ↔ 3


Array:

[3, 4, 1, 7, 8, 9]


heapify(a,3,0):

largest=1 (4)


Swap:

3 ↔ 4


Array:

[4, 3, 1, 7, 8, 9]

🔴 i = 2

Swap:

4 ↔ 1


Array:

[1, 3, 4, 7, 8, 9]


heapify(a,2,0):

largest=1


Swap:

1 ↔ 3


Array:

[3, 1, 4, 7, 8, 9]

🔴 i = 1

Swap:

3 ↔ 1


Array:

[1, 3, 4, 7, 8, 9]


heap size = 1 → stop

🎉 FINAL SORTED ARRAY
[1, 3, 4, 7, 8, 9]


🔹 VERY SHORT SUMMARY

| Step     | Array         |
| -------- | ------------- |
| Original | [8,4,7,3,9,1] |
| Max Heap | [9,8,7,3,4,1] |
| Sorted   | [1,3,4,7,8,9] |


--------------------------------------------------------------

example: 


Given Array
[8, 4, 7, 3, 9, 1]

🔵 MAX-HEAP SORT (Ascending Order)
Step 1: Build Max-Heap

Start from last non-leaf index

n = 6 → n/2 - 1 = 2

Heapify at index 2
      8
    /   \\
   4     7
  / \\   /
 3   9 1


7 ≥ 1 → OK

[8, 4, 7, 3, 9, 1]

Heapify at index 1

Compare 4 with children (3, 9)

Largest = 9 → swap

[8, 9, 7, 3, 4, 1]

Heapify at index 0

Compare 8 with children (9, 7)

Largest = 9 → swap

[9, 8, 7, 3, 4, 1]


✅ Max-Heap built

Step 2: Heap Sort
Swap root with last element
[1, 8, 7, 3, 4, 9]


Heapify (size = 5):

[8, 4, 7, 3, 1, 9]

Next swap
[1, 4, 7, 3, 8, 9]


Heapify (size = 4):

[7, 4, 1, 3, 8, 9]

Next swap
[3, 4, 1, 7, 8, 9]


Heapify (size = 3):

[4, 3, 1, 7, 8, 9]

Next swap
[1, 3, 4, 7, 8, 9]


Heapify (size = 2):

[3, 1, 4, 7, 8, 9]

Final swap
[1, 3, 4, 7, 8, 9]

✅ Final Sorted Array (Ascending)
[1, 3, 4, 7, 8, 9]



🧠 Key Exam Lines

Max-Heap → largest element at index 0
Swap root with last
Reduce heap size
Heapify again
Repeat


      `},{id:38,question:"38. Radix Sort – Bucket method.",answer:"",codeExample:`
⭐ 1. Radix Sort (Easy Explanation)

Radix Sort sorts numbers digit by digit, not by comparing whole numbers.

👉 It starts from the last digit (rightmost)
👉 Then moves to the next digit
👉 Continues until the biggest number is fully processed



⭐ 2. Bucket Method (Very Simple)

In Radix Sort, we use 10 buckets:

Bucket 0 → for digit 0
Bucket 1 → for digit 1
Bucket 2 → for digit 2
...
Bucket 9 → for digit 9


Each number is placed into a bucket based on its current digit.



⭐ 3. Simple Example

Array:

[170, 45, 75, 90, 802, 24, 2, 66]


🔹 Pass 1 (Last digit)

Put numbers into buckets using last digit

Result after collecting:

[170, 90, 802, 2, 24, 45, 75, 66]


🔹 Pass 2 (Second digit)

Use middle digit

Result:

[802, 2, 24, 45, 66, 170, 75, 90]


🔹 Pass 3 (First digit)

Use first digit

Final sorted array:

[2, 24, 45, 66, 75, 90, 170, 802]


⭐ 4. Radix Sort Algorithm (Bucket Method)
RadixSort(A, n):

1. Find the maximum number in array
2. Find number of digits in maximum number

3. For each digit position (ones, tens, hundreds):
4.     Create 10 empty buckets (0 to 9)
5.     Place each element in bucket according to current digit
6.     Collect elements from bucket 0 to 9 back into array



⭐ 5. Simple & Short C Program (Radix Sort using Buckets)

#include <stdio.h>

int getMax(int a[], int n) {
    int max = a[0];
    for(int i = 1; i < n; i++)
        if(a[i] > max)
            max = a[i];
    return max;
}

void radixSort(int a[], int n) {
    int bucket[10][20], count[10];
    int i, j, k, exp = 1, max;

    max = getMax(a, n);

    while(max / exp > 0) {
        for(i = 0; i < 10; i++)
            count[i] = 0;

        for(i = 0; i < n; i++) {
            int digit = (a[i] / exp) % 10;
            bucket[digit][count[digit]++] = a[i];
        }

        i = 0;
        for(j = 0; j < 10; j++)
            for(k = 0; k < count[j]; k++)
                a[i++] = bucket[j][k];

        exp = exp * 10;
    }
}

int main() {
    int n, i;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    int a[n];
    printf("Enter %d elements:\\n", n);
    for(i = 0; i < n; i++)
        scanf("%d", &a[i]);

    radixSort(a, n);

    printf("Sorted array:\\n");
    for(i = 0; i < n; i++)
        printf("%d ", a[i]);

    return 0;
}


⭐ Memory Trick (Exam Ready)

Radix Sort = digit by digit sorting using buckets
      
      `},{id:39,question:"39. Hashing – Hash table + Hash function.",answer:"",codeExample:`
⭐ 1. What is Hashing? (Very Easy)

Hashing is a technique to store and find data very fast.

👉 We use a key
👉 A hash function converts the key into an index
👉 Data is stored at that index in a hash table

⭐ 2. What is a Hash Table? (Simple Words)

A Hash Table is an array used to store data.

Each position is called a slot

Data is stored using a calculated index

Example:

Hash Table Size = 10
Index: 0 1 2 3 4 5 6 7 8 9

⭐ 3. What is a Hash Function? (Very Simple)

A Hash Function:

Takes a key

Converts it into an index

Example hash function:

h(key) = key % table_size


Example:

key = 25
table_size = 10
index = 25 % 10 = 5


So, data goes to index 5.

⭐ 4. Simple Example

Keys:

15, 25, 35


Hash function:

h(key) = key % 10


Indexes:

15 → 5
25 → 5
35 → 5


👉 More than one key gives same index → this is called collision.

⭐ 5. Simple Hashing Algorithm
HashInsert(key):

1. index = key % table_size
2. Store key at hash_table[index]

⭐ 6. Collision Handling (Easy)

When two keys get same index:

Store them in the same position using a method

Common methods:

Linear Probing

Chaining

(Only basic idea is enough for exam.)

⭐ 7. Simple & Short C Program (Hash Table with Linear Probing)
#include <stdio.h>
#define SIZE 10

int table[SIZE];

void init() {
    for(int i = 0; i < SIZE; i++)
        table[i] = -1;
}

void insert(int key) {
    int index = key % SIZE;

    while(table[index] != -1) {
        index = (index + 1) % SIZE;
    }
    table[index] = key;
}

void display() {
    for(int i = 0; i < SIZE; i++) {
        if(table[i] == -1)
            printf("%d : empty\\n", i);
        else
            printf("%d : %d\\n", i, table[i]);
    }
}

int main() {
    init();

    insert(15);
    insert(25);
    insert(35);

    display();

    return 0;
}

⭐ Memory Trick (Exam Ready)

Hashing = Key → Hash Function → Index → Hash Table
      
      `},{id:40,question:"40. Collision resolution – Chain & Open addressing.",answer:"",codeExample:`
⭐ 1. What is Collision? (Very Easy)

A collision happens when:
👉 Two or more keys get the same index in a hash table.

Example:

Hash function: h(key) = key % 10

15 % 10 = 5
25 % 10 = 5


Both want to go to index 5 → collision.

⭐ 2. Collision Resolution Methods

Two main methods:

Chaining

Open Addressing

⭐ 3. Chaining (Easy Explanation)

In Chaining:

Each index of hash table stores a list

Multiple keys can be stored at the same index

Example:

Keys: 15, 25, 35
Index: 5

All keys are stored in a list at index 5.

⭐ Simple Chaining Algorithm
ChainingInsert(key):

1. index = key % table_size
2. Insert key into list at hash_table[index]

⭐ 4. Open Addressing (Easy Explanation)

In Open Addressing:

Only one key per index

If collision happens:
→ Find another empty index

Common Open Addressing Methods:

Linear Probing

Quadratic Probing

Double Hashing

(Linear probing is most common)

⭐ 5. Linear Probing (Simple Example)

If index is full:

Try next index → index + 1


Example:

Index 5 full → try 6 → try 7 → empty

⭐ 6. Open Addressing Algorithm (Linear Probing)
OpenAddressInsert(key):

1. index = key % table_size
2. While hash_table[index] is full:
3.     index = (index + 1) % table_size
4. Store key at hash_table[index]

⭐ 7. Simple C Program (Chaining)
#include <stdio.h>
#include <stdlib.h>
#define SIZE 10

struct Node {
    int data;
    struct Node* next;
};

struct Node* table[SIZE];

void insert(int key) {
    int index = key % SIZE;
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = key;
    newNode->next = table[index];
    table[index] = newNode;
}

void display() {
    for(int i = 0; i < SIZE; i++) {
        struct Node* temp = table[i];
        printf("%d : ", i);
        while(temp) {
            printf("%d -> ", temp->data);
            temp = temp->next;
        }
        printf("NULL\\n");
    }
}

int main() {
    for(int i = 0; i < SIZE; i++)
        table[i] = NULL;

    insert(15);
    insert(25);
    insert(35);

    display();
    return 0;
}

⭐ 8. Simple C Program (Open Addressing – Linear Probing)


#include <stdio.h>
#define SIZE 10

int table[SIZE];

void init() {
    for(int i = 0; i < SIZE; i++)
        table[i] = -1;
}

void insert(int key) {
    int index = key % SIZE;

    while(table[index] != -1)
        index = (index + 1) % SIZE;

    table[index] = key;
}

void display() {
    for(int i = 0; i < SIZE; i++) {
        if(table[i] == -1)
            printf("%d : empty\\n", i);
        else
            printf("%d : %d\\n", i, table[i]);
    }
}

int main() {
    init();

    insert(15);
    insert(25);
    insert(35);

    display();
    return 0;
}



⭐ Memory Trick (Exam Ready)

Chaining → many keys in one index (list)
Open Addressing → find next empty index
      
      `},{id:1111,question:"",answer:"",codeExample:`
🟧 FINAL 10 QUESTIONS TO STUDY (MOST LIKELY TO COME)

Linear Search vs Binary Search with algorithm.

Bubble Sort working with diagram.

Selection Sort working.

Insertion Sort working.

Quick Sort – Pivot, Partition, Recursion.--

Merge Sort – Divide, Conquer, Merge.

Heap Sort – Max-Heap + Heapify.

Radix Sort – Bucket method.

Hashing – Hash table + Hash function.

Collision resolution – Chain & Open addressing.




🟦 SUPER IMPORTANT TABLE TO REVISE (Sorting Time Complexity)

| Algorithm | Best           | Average        | Worst      | Space    |
| --------- | -------------- | -------------- | ---------- | -------- |
| Bubble    | O(n)           | O(n²)          | O(n²)      | O(1)     |
| Selection | O(n²)          | O(n²)          | O(n²)      | O(1)     |
| Insertion | O(n)           | O(n²)          | O(n²)      | O(1)     |
| Shell     | O(n log n)     | varies         | O(n²)      | O(1)     |
| Quick     | O(n log n)     | O(n log n)     | O(n²)      | O(log n) |
| Heap      | O(n log n)     | O(n log n)     | O(n log n) | O(1)     |
| Merge     | O(n log n)     | O(n log n)     | O(n log n) | O(n)     |
| Radix     | O(nk)          | O(nk)          | O(nk)      | O(n + k) |

      
      `},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""}],ge=F=>{z(D===F?null:F)};return Te.jsxs("div",{className:"app-container",children:[Te.jsx("h1",{children:"DSA Interview Questions"}),Te.jsx("div",{className:"questions-container",children:h.map(F=>Te.jsxs("div",{className:"question-item",children:[Te.jsx("button",{className:`question-button ${D===F.id?"active":""}`,onClick:()=>ge(F.id),children:F.question}),D===F.id&&Te.jsxs("div",{className:"answer-container",children:[Te.jsxs("div",{className:"answer",children:[Te.jsx("h3",{children:"Answer:"}),Te.jsx("p",{children:F.answer})]}),F.codeExample&&Te.jsxs("div",{className:"code-example",children:[Te.jsx("h3",{children:"Code Example:"}),Te.jsx("pre",{children:Te.jsx("code",{children:F.codeExample})})]})]})]},F.id))})]})}Uc.createRoot(document.getElementById("root")).render(Te.jsx(Fu.StrictMode,{children:Te.jsx(Mc,{})}));
