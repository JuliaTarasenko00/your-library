import{$ as e,j as s}from"./index-Gdo5W-Ll.js";const r="/books",x=async(a=1,t=10,o="",n="")=>{const{data:d}=await e.get(`${r}/recommend?page=${a}&limit=${t}&title=${o}&author=${n}`);return d},p=async a=>{const{data:t}=await e.post(`${r}/add/${a}`);return t},l=async()=>{const{data:a}=await e.get(`${r}/own`);return a},m=async a=>{const{data:t}=await e.delete(`${r}/remove/${a}`);return t},g=async a=>{const{data:t}=await e.post(`${r}/add`,a);return t},u=async a=>{const{data:t}=await e.get(`${r}/${a}`);return t},y=()=>s.jsx("div",{className:"flex h-full w-full items-center justify-center",children:s.jsx("div",{className:"loader border-r-1 box-border h-[50px] w-[50px] animate-spin rounded-full border-t-2 border-solid border-white border-r-transparent"})}),c=({children:a})=>s.jsx("aside",{className:"flex max-h-max flex-col items-start gap-[20px] rounded-[30px] bg-[#1F1F1F] px-[20px] py-[20px] md:grid md:grid-cols-2 md:gap-[32px] md:py-[32px] lg:flex lg:gap-[20px] lg:py-[40px]",children:a}),b=({children:a,childrenSecond:t})=>s.jsxs("div",{className:"container-custom grid gap-[16px] pb-[27px] lg:grid-cols-[1fr_2.6fr]",children:[s.jsx(c,{children:t}),s.jsx("section",{className:"min-h-[398px] rounded-[30px] bg-[#1F1F1F] px-[20px] py-[40px] md:min-h-[681px] md:p-[40px] lg:min-h-full",children:a})]}),$=({children:a})=>s.jsx("h2",{className:"text-[20px] font-bold leading-[32px] text-[#F9F9F9] md:text-[28px]",children:a});export{b as C,y as L,$ as T,g as a,p as b,x as c,u as d,l as g,m as r};
