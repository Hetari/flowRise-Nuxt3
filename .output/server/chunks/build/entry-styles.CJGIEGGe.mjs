import { a as buildAssetsURL } from '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'vue';
import 'unhead';
import '@unhead/shared';

const main = '/*! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-feature-settings:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.-bottom-10{bottom:-2.5rem}.-top-14{top:-3.5rem}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.z-20{z-index:20}.z-\\[-1\\]{z-index:-1}.-m-3{margin:-.75rem}.m-auto{margin:auto}.mx-1{margin-left:.25rem;margin-right:.25rem}.mt-8{margin-top:2rem}.flex{display:flex}.grid{display:grid}.size-10{height:2.5rem;width:2.5rem}.size-32{height:8rem;width:8rem}.size-40{height:10rem;width:10rem}.h-\\[80dvh\\]{height:80dvh}.w-3\\/4{width:75%}.w-\\[345px\\]{width:345px}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.max-w-\\[1400px\\]{max-width:1400px}.max-w-md{max-width:28rem}.max-w-sm{max-width:24rem}.translate-y-16{--tw-translate-y:4rem}.translate-y-16,.translate-y-20{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-20{--tw-translate-y:5rem}.scale-110{--tw-scale-x:1.1;--tw-scale-y:1.1}.scale-110,.scale-75{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-75{--tw-scale-x:.75;--tw-scale-y:.75}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.place-items-center{place-items:center}.content-center{align-content:center}.content-between{align-content:space-between}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-items-center{justify-items:center}.gap-10{gap:2.5rem}.gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.space-y-10>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2.5rem*var(--tw-space-y-reverse));margin-top:calc(2.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-36>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(9rem*var(--tw-space-y-reverse));margin-top:calc(9rem*(1 - var(--tw-space-y-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.rounded-2xl{border-radius:1rem}.rounded-3xl{border-radius:1.5rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.bg-secondary{--tw-bg-opacity:1;background-color:rgb(14 116 144/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}.bg-gradient-to-l{background-image:linear-gradient(to left,var(--tw-gradient-stops))}.bg-gradient-to-tr{background-image:linear-gradient(to top right,var(--tw-gradient-stops))}.from-cyan-50{--tw-gradient-from:#ecfeff var(--tw-gradient-from-position);--tw-gradient-to:rgba(236,254,255,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.from-emerald-50{--tw-gradient-from:#ecfdf5 var(--tw-gradient-from-position);--tw-gradient-to:rgba(236,253,245,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.from-purple-700{--tw-gradient-from:#7e22ce var(--tw-gradient-from-position);--tw-gradient-to:rgba(126,34,206,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.from-purple-900{--tw-gradient-from:#581c87 var(--tw-gradient-from-position);--tw-gradient-to:rgba(88,28,135,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.via-white{--tw-gradient-to:hsla(0,0%,100%,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),#fff var(--tw-gradient-via-position),var(--tw-gradient-to)}.to-cyan-50{--tw-gradient-to:#ecfeff var(--tw-gradient-to-position)}.to-cyan-500\\/80{--tw-gradient-to:rgba(6,182,212,.8) var(--tw-gradient-to-position)}.to-cyan-900{--tw-gradient-to:#164e63 var(--tw-gradient-to-position)}.to-emerald-50{--tw-gradient-to:#ecfdf5 var(--tw-gradient-to-position)}.p-12{padding:3rem}.p-3{padding:.75rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.px-12{padding-left:3rem;padding-right:3rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-10{padding-bottom:2.5rem;padding-top:2.5rem}.py-12{padding-bottom:3rem;padding-top:3rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.py-4{padding-top:1rem}.pb-4,.py-4{padding-bottom:1rem}.text-center{text-align:center}.text-start{text-align:start}.font-body{font-family:Nunito Sans Variable,sans-serif}.font-heading{font-family:Nunito Variable,sans-serif}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-5xl{font-size:3rem;line-height:1}.text-\\[16px\\]{font-size:16px}.text-xs{font-size:.75rem;line-height:1rem}.\\!font-normal{font-weight:400!important}.\\!font-semibold{font-weight:600!important}.font-\\[300\\]{font-weight:300}.font-bold{font-weight:700}.font-normal{font-weight:400}.font-semibold{font-weight:600}.leading-10{line-height:2.5rem}.leading-loose{line-height:2}.text-\\[\\#6F6F6F\\]{--tw-text-opacity:1;color:rgb(111 111 111/var(--tw-text-opacity))}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.opacity-0{opacity:0}.opacity-80{opacity:.8}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.shadow-lg,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.blur-3xl{--tw-blur:blur(64px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-\\[background-color\\|scale\\|shadow\\]{transition-duration:.15s;transition-property:background-color|scale|shadow;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-\\[color\\]{transition-duration:.15s;transition-property:color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}body{--tw-text-opacity:1;color:rgb(51 65 85/var(--tw-text-opacity))}h1,h2,h3{font-family:Nunito Sans Variable,sans-serif;font-weight:700;line-height:2.5rem}h1{font-size:4.5rem}h1,h2{line-height:1}h2{font-size:3rem}h3{font-size:2.25rem;line-height:2.5rem}.text-body-large,.text-body-normal,.text-body-small{font-family:Nunito Variable,sans-serif;font-weight:400;line-height:2.5rem}.text-body-large{font-size:3rem;font-weight:700;line-height:1}@media (min-width:768px){.text-body-large{font-size:4.5rem;line-height:1}}.text-body-normal{font-size:2.25rem;font-weight:600;line-height:2.5rem}@media (min-width:768px){.text-body-normal{font-size:3rem;line-height:1}}.text-body-small{font-size:1.125rem;line-height:1.75rem}.button{font-weight:700}.button,.nav-link{font-family:Nunito Sans Variable,sans-serif;font-size:1rem;line-height:1.5rem}.nav-link{font-weight:400;transition-duration:.2s;transition-property:color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.nav-link:hover{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.router-link-active{color:rgba(0,0,0,.6)}body{overflow-x:hidden}.hover\\:scale-105:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:rounded-3xl:hover{border-radius:1.5rem}.hover\\:bg-primary:hover{--tw-bg-opacity:1;background-color:rgb(51 65 85/var(--tw-bg-opacity))}.hover\\:text-slate-900:hover{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.group:hover .group-hover\\:scale-100{--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media (min-width:768px){.md\\:-bottom-32{bottom:-8rem}.md\\:-top-12{top:-3rem}.md\\:left-10{left:2.5rem}.md\\:mx-10{margin-left:2.5rem;margin-right:2.5rem}.md\\:flex{display:flex}.md\\:size-72{height:18rem;width:18rem}.md\\:size-96{height:24rem;width:24rem}.md\\:w-2\\/4{width:50%}.md\\:w-64{width:16rem}.md\\:w-full{width:100%}.md\\:max-w-full{max-width:100%}.md\\:max-w-xl{max-width:36rem}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:items-start{align-items:flex-start}.md\\:items-center{align-items:center}.md\\:justify-around{justify-content:space-around}.md\\:gap-36{gap:9rem}.md\\:gap-4{gap:1rem}.md\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}.md\\:px-12{padding-left:3rem;padding-right:3rem}.md\\:px-16{padding-left:4rem;padding-right:4rem}.md\\:py-6{padding-bottom:1.5rem;padding-top:1.5rem}.md\\:pb-56{padding-bottom:14rem}.md\\:pt-32{padding-top:8rem}.md\\:text-start{text-align:start}.md\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.md\\:text-6xl{font-size:3.75rem;line-height:1}.md\\:opacity-40{opacity:.4}.md\\:opacity-60{opacity:.6}.md\\:last\\:pb-0:last-child{padding-bottom:0}.md\\:even\\:flex-row-reverse:nth-child(2n){flex-direction:row-reverse}}@media (min-width:1024px){.lg\\:w-2\\/3{width:66.666667%}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:px-24{padding-left:6rem;padding-right:6rem}.lg\\:py-8{padding-bottom:2rem;padding-top:2rem}}@media (min-width:1280px){.xl\\:px-36{padding-left:9rem;padding-right:9rem}}';

const index$1 = "@font-face{font-display:swap;font-family:Nunito Variable;font-style:normal;font-weight:200 1000;src:url(" + buildAssetsURL("nunito-cyrillic-ext-wght-normal.BWI5zH9R.woff2") + ') format("woff2-variations");unicode-range:u+0460-052f,u+1c80-1c88,u+20b4,u+2de0-2dff,u+a640-a69f,u+fe2e-fe2f}@font-face{font-display:swap;font-family:Nunito Variable;font-style:normal;font-weight:200 1000;src:url(' + buildAssetsURL("nunito-cyrillic-wght-normal.C3IBG1kp.woff2") + ') format("woff2-variations");unicode-range:u+0301,u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-display:swap;font-family:Nunito Variable;font-style:normal;font-weight:200 1000;src:url(' + buildAssetsURL("nunito-vietnamese-wght-normal.B55YuedR.woff2") + ') format("woff2-variations");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:Nunito Variable;font-style:normal;font-weight:200 1000;src:url(' + buildAssetsURL("nunito-latin-ext-wght-normal.DcJfvmGA.woff2") + ') format("woff2-variations");unicode-range:u+0100-02af,u+0304,u+0308,u+0329,u+1e00-1e9f,u+1ef2-1eff,u+2020,u+20a0-20ab,u+20ad-20c0,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:Nunito Variable;font-style:normal;font-weight:200 1000;src:url(' + buildAssetsURL("nunito-latin-wght-normal.BaTF6Vo7.woff2") + ') format("woff2-variations");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}';

const index = "@font-face{font-display:swap;font-family:Nunito Sans Variable;font-style:normal;font-weight:200 1000;src:url(" + buildAssetsURL("nunito-sans-cyrillic-ext-wght-normal.Dsij8Y2R.woff2") + ') format("woff2-variations");unicode-range:u+0460-052f,u+1c80-1c88,u+20b4,u+2de0-2dff,u+a640-a69f,u+fe2e-fe2f}@font-face{font-display:swap;font-family:Nunito Sans Variable;font-style:normal;font-weight:200 1000;src:url(' + buildAssetsURL("nunito-sans-cyrillic-wght-normal.CwlCx3uU.woff2") + ') format("woff2-variations");unicode-range:u+0301,u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-display:swap;font-family:Nunito Sans Variable;font-style:normal;font-weight:200 1000;src:url(' + buildAssetsURL("nunito-sans-vietnamese-wght-normal.CA_Ew_Q_.woff2") + ') format("woff2-variations");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:Nunito Sans Variable;font-style:normal;font-weight:200 1000;src:url(' + buildAssetsURL("nunito-sans-latin-ext-wght-normal.pFeyoCiG.woff2") + ') format("woff2-variations");unicode-range:u+0100-02af,u+0304,u+0308,u+0329,u+1e00-1e9f,u+1ef2-1eff,u+2020,u+20a0-20ab,u+20ad-20c0,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:Nunito Sans Variable;font-style:normal;font-weight:200 1000;src:url(' + buildAssetsURL("nunito-sans-latin-wght-normal.McYlyt2m.woff2") + ') format("woff2-variations");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}';

const entryStyles_CJGIEGGe = [main, index$1, index];

export { entryStyles_CJGIEGGe as default };
//# sourceMappingURL=entry-styles.CJGIEGGe.mjs.map
