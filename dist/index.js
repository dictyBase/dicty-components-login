var S=Object.defineProperty;var z=r=>S(r,"__esModule",{value:!0});var p=(r,t)=>{z(r);for(var n in t)S(r,n,{get:t[n],enumerable:!0})};var y={};p(y,{$$default:()=>N,Styles:()=>V,default:()=>N,make:()=>A});function m(r,t,n){for(var e=new Array(n),u=0,i=t;u<n;)e[u]=r[i],u=u+1|0,i=i+1|0;return e}function k(r,t){for(;;){var n=t,e=r,u=e.length,i=u===0?1:u,o=n.length,s=i-o|0;if(s===0)return e.apply(null,n);if(s>=0)return function(d,O){return function($){return k(d,O.concat([$]))}}(e,n);t=m(n,i,-s|0),r=e.apply(null,m(n,0,i))}}function c(r,t){var n=r.length;if(n===1)return r(t);switch(n){case 1:return r(t);case 2:return function(e){return r(t,e)};case 3:return function(e,u){return r(t,e,u)};case 4:return function(e,u,i){return r(t,e,u,i)};case 5:return function(e,u,i,o){return r(t,e,u,i,o)};case 6:return function(e,u,i,o,s){return r(t,e,u,i,o,s)};case 7:return function(e,u,i,o,s,d){return r(t,e,u,i,o,s,d)};default:return k(r,[t])}}import{createElement as g}from"react";function l(r,t,n){var e={};return e[t]=n,Object.assign({},r,e)}import{Button as P,Typography as W}from"@material-ui/core";import{makeStyles as H}from"@material-ui/core/styles";import{createElement as a}from"react";import{SvgIcon as G}from"@material-ui/core";function T(r){return a(G,{children:null,viewBox:"0 0 533.5 544.3"},a("path",{d:"M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z",fill:"#fff"}),a("path",{d:"M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z",fill:"#fff"}),a("path",{d:"M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z",fill:"#fff"}),a("path",{d:"M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z",fill:"#fff"}))}var R=T;var x=H(function(r){return{subtitle:{color:"#fafafa",fontWeight:"600",width:"100%"},button:l({backgroundColor:"#df4b37",paddingTop:String(c(r.spacing,2))+"px",paddingRight:String(c(r.spacing,3))+"px",paddingBottom:String(c(r.spacing,2))+"px",paddingLeft:String(c(r.spacing,3))+"px",textTransform:"none"},"&:hover",{backgroundColor:"#a60e0e"})}}),V={useStyles:x};function b(r){var t=r.text,n=r.handleClick,e=c(x,void 0);return g(P,{onClick:n,children:g(W,{align:"center",children:t,className:e.subtitle,color:"textSecondary",variant:"inherit"}),className:e.button,fullWidth:!0,size:"large",startIcon:g(R,{}),variant:"contained"})}var A=b,N=b;var j=y,X=j.make;var v={};p(v,{$$default:()=>Q,Styles:()=>J,default:()=>Q,make:()=>K});import{createElement as h}from"react";import{Button as Y,Typography as Z}from"@material-ui/core";import{makeStyles as U}from"@material-ui/core/styles";import{createElement as I}from"react";import{SvgIcon as F}from"@material-ui/core";function q(r){return I(F,{children:I("path",{d:`M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
        C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
        H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
        c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
        s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
        c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
        c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
        c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
        L341.91,330.654L341.91,330.654z`,fill:"white"}),viewBox:"0 0 382 382"})}var E=q;var B=U(function(r){return{subtitle:{color:"#fff",fontWeight:"600",width:"100%"},button:l({backgroundColor:"#2867B2",paddingTop:String(c(r.spacing,2))+"px",paddingRight:String(c(r.spacing,3))+"px",paddingBottom:String(c(r.spacing,2))+"px",paddingLeft:String(c(r.spacing,3))+"px",textTransform:"none"},"&:hover",{backgroundColor:"#003d82"})}}),J={useStyles:B};function w(r){var t=r.text,n=r.handleClick,e=c(B,void 0);return h(Y,{onClick:n,children:h(Z,{align:"center",children:t,className:e.subtitle,color:"textSecondary",variant:"inherit"}),className:e.button,fullWidth:!0,size:"large",startIcon:h(E,{}),variant:"contained"})}var K=w,Q=w;var rr=v,er=rr.make;var C={};p(C,{$$default:()=>ir,Styles:()=>cr,default:()=>ir,make:()=>ur});import{createElement as _}from"react";import{Button as sr,Typography as lr}from"@material-ui/core";import{makeStyles as or}from"@material-ui/core/styles";import{createElement as f}from"react";import{SvgIcon as nr}from"@material-ui/core";function tr(r){return f(nr,{children:null,viewBox:"0 0 256 256"},f("path",{d:"M256,128c0,70.7-57.3,128-128,128C57.3,256,0,198.7,0,128C0,57.3,57.3,0,128,0C198.7,0,256,57.3,256,128z",fill:"white"}),f("g",void 0,f("path",{d:"M86.3,186.2H70.9V79.1h15.4v48.4V186.2z",fill:"#689f38"}),f("path",{d:`M108.9,79.1h41.6c39.6,0,57,28.3,57,53.6c0,27.5-21.5,53.6-56.8,53.6h-41.8V79.1z M124.3,172.4h24.5
		c34.9,0,42.9-26.5,42.9-39.7c0-21.5-13.7-39.7-43.7-39.7h-23.7V172.4z`,fill:"#689f38"}),f("path",{d:`M88.7,56.8c0,5.5-4.5,10.1-10.1,10.1c-5.6,0-10.1-4.6-10.1-10.1c0-5.6,4.5-10.1,10.1-10.1
		C84.2,46.7,88.7,51.3,88.7,56.8z`,fill:"##689f38"})))}var M=tr;var L=or(function(r){return{subtitle:{color:"#4D4D4D",fontWeight:"600",width:"100%"},button:l({backgroundColor:"#a6ce39",paddingTop:String(c(r.spacing,2))+"px",paddingRight:String(c(r.spacing,3))+"px",paddingBottom:String(c(r.spacing,2))+"px",paddingLeft:String(c(r.spacing,3))+"px",textTransform:"none"},"&:hover",{backgroundColor:"#739d00"})}}),cr={useStyles:L};function D(r){var t=r.text,n=r.handleClick,e=c(L,void 0);return _(sr,{onClick:n,children:_(lr,{align:"center",children:t,className:e.subtitle,color:"textSecondary",variant:"inherit"}),className:e.button,fullWidth:!0,size:"large",startIcon:_(M,{}),variant:"contained"})}var ur=D,ir=D;var fr=C,ar=fr.make;export{X as GoogleButton,er as LinkedInButton,ar as OrcidButton};
//# sourceMappingURL=index.js.map
