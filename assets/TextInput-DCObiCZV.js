import{r as e,j as t}from"./index-Dmf8GAkc.js";import{E as p}from"./iconBase-CwTBR0sZ.js";const d=e.forwardRef(({errorMessage:r,label:a,...l},x)=>{const s=e.useRef(null),[n,o]=e.useState(0);return e.useEffect(()=>{s.current&&o(s.current.offsetWidth+22)},[a]),t.jsxs("div",{className:"relative w-full",children:[t.jsxs("div",{className:"relative",children:[t.jsx("label",{ref:s,className:"absolute left-[14px] top-[50%] translate-y-[-50%] text-[12px] text-[#686868] md:text-[14px]",children:a}),t.jsx("input",{type:"text",...l,ref:x,className:`w-full rounded-[12px] border-[1px] bg-[#262626] py-[16px] pr-[14px] text-[12px] text-[#F9F9F9] md:text-[14px] ${r?"border-[#E90516]":"border-transparent hover:border-[#F9F9F91A] focus:border-[#F9F9F91A]"} outline-none transition duration-300`,style:{paddingLeft:`${n}px`}})]}),r&&t.jsx(p,{children:r})]})});d.displayName="TextInput";export{d as T};
