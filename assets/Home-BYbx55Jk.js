import{u as N,j as e,b as h,r as c}from"./index-Gdo5W-Ll.js";import{u as v,s as j,w as g,n as b,t as A,F as k,a as B,B as P}from"./index-C76BDf6N.js";import{a as C,b as z}from"./index-BbvxWpV7.js";import{C as S,T as Z,L as T}from"./Title-B6AE3tXi.js";import{u as O,C as f}from"./index-CCC61CHv.js";import{T as F}from"./TextInput-FqEeqoD9.js";import"./iconBase-sbVVsZG_.js";import"./toastStyle-CnZ7v1oI.js";const X="data:image/webp;base64,UklGRuIDAABXRUJQVlA4WAoAAAAQAAAAJwAAKAAAQUxQSIcBAAABkAPZtmlba59n27ZtfFuZ9ZB924ysyLat0LYZPdvGwXrcZ6+PPCImAP71DnEjl1+5N9GagBnbug5evPdZXo2MWHV9kLkY5jYge+/9X+3IWbE/kOliISNP/K5rUVGn+nOth6EO29f1KLbj6XhzvoAKFK48HGLEE0qAWHgkQurPPY8CtcJVHv1IKyooEOWvWW6sFxgvkkkQ207Z9gEwu4Zmgb9BPxYrSNq8oW8DsJuhUVRb9hV2bN+3CqRUcmz7mNiM1A0XvHrlthO1599Y694rq42i7dO+7BgrBr1jSygKk4BTOqIQyOt4ICGfAD9Z8xhuomjLYhzgV0Kg3rTlgfUd4rTaZK7g9+JadtlzsTnisGQcF9g8Eod1WRKP4cwmcfJXRx6wvC+uYJTEBZOrhX1yB36LS8K+eumAiBZR9dP1GJwWo3bUXZF0QFqRLrn69509Cyd4gl7jzVo/akvx5zv7Fg4PdrU0YSAwIB8ROyufHlszPcXbnIF4KWvr8MGBNgzoLW0lBv9NAFZQOCA0AgAAkAsAnQEqKAApAD6RPphIJaOioS47+ZiwEglsDLAA37xXHMvK4AG2557nTOd5XX85T/VBOjX6AH6kh1bzmIQTqdiaAQb0qp+FmS1FEb7liV4fts/FHg7QB8lNhn8ivN1/Bv/f/AAA+diZw5wFmsWghL8BrQ6DoHKhiN2czoJNfiaSfTRsvxGBawY8by91VAcjZJ+131dJFdHP8P3JvWvyIZyrACUhyhFeAyzgmppL1egHFv64Gvis1fS3XVprtT3FbiwT2i6pmsMJWBXQPDp3WSOO5DjrQ0grGa+qitP/9m7mCSuZgwzRESn3fpItlf0MfcJcAce1oDihRP/bHSacKDeyGmmOmHywh5lVqMrR3RzzrwV6AHoVD7ObU9kfV0rLNiAh+rs5XbjF9ydqNXg8lvsqZi10ofXF/tzrquvPxvX/g3N/zUzzW4Q3ozLvZ8zj3ytu6joYtPOHx6twNOgkl5tQgnPghXrqlYEES3cTdnzb35mQcZnKTjmMm5aQ6Krt83Mt5Kjg1v2ZBOJPFhVsnMoyJoxhoPlCBfwcghayXGlnJt0hx+rsYNPVO7/3tOEiv4aRrt/oyv8UGw/INW1CHgfkVcQp404aNZs7BTpizmIlOCIvCI8n/TkRCQmCDd6DylRdZFA02fKC7jQozmeJ8jTXWTJa838uS0ZCJ39uziBXrODs6ivnDfYLZnli1nIc/TxJlhy/454///n6j4tX/BVT+vLpc38gz9kNLlosRUnCAAAA",I={title:"",author:""},L=({setCurrentPage:t,currentPage:i})=>{const{setValue:x}=v(),r=N(),{control:n,reset:m,handleSubmit:s,formState:{errors:d,isDirty:p,isSubmitted:u}}=O({defaultValues:I,mode:"onChange"}),o=()=>{if(i!==1){t(1);return}},y=a=>{o(),x({title:a.title,author:a.author})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-[100%]",children:[e.jsx("h2",{className:"mb-[8px] text-[10px] font-medium text-[#F9F9F9] md:text-[14px]",children:"Filters:"}),e.jsxs("form",{onSubmit:s(y),children:[e.jsxs("div",{className:"flex flex-col gap-[8px]",children:[e.jsx(f,{name:"title",control:n,render:({field:a})=>{var l;return e.jsx(F,{...a,errorMessage:(l=d.title)==null?void 0:l.message,label:"Book title:"})}}),e.jsx(f,{name:"author",control:n,render:({field:a})=>{var l;return e.jsx(F,{...a,errorMessage:(l=d.title)==null?void 0:l.message,label:"The author:"})}})]}),e.jsxs("div",{className:"mt-[20px] flex items-center justify-between md:mt-[32px] lg:mt-[20px]",children:[e.jsx("button",{type:"submit",className:j,disabled:!p,children:"To apply"}),u&&e.jsx("button",{type:"button",className:j,onClick:()=>{m(),x({title:"",author:""}),o()},children:"To clear"})]})]})]}),e.jsxs("div",{className:"rounded-[12px] bg-[#262626] p-[20px]",children:[e.jsx("h3",{className:"mb-[40px] text-[18px] font-bold text-[#F9F9F9] md:text-[20px]",children:"Start your workout"}),e.jsxs("div",{className:"flex flex-col gap-[20px]",children:[e.jsxs("div",{className:g,children:[e.jsx("p",{className:b,children:e.jsx("span",{children:"1"})}),e.jsxs("p",{className:A,children:[e.jsx("span",{className:"text-[#F9F9F9]",children:"Create a personal library:"})," ","add the books you intend to read to it."]})]}),e.jsxs("div",{className:g,children:[e.jsx("p",{className:b,children:e.jsx("span",{children:"2"})}),e.jsxs("p",{className:A,children:[e.jsx("span",{className:"text-[#F9F9F9]",children:"Create your first workout:"})," ","define a goal, choose a period, start training."]})]})]}),e.jsxs("div",{className:"mt-[20px] flex items-center justify-between",children:[e.jsx("button",{type:"button",onClick:()=>r(h.library),className:"text-[14px] leading-[18px] text-[#686868] underline",children:"My library"}),e.jsx("button",{type:"button",onClick:()=>r(h.library),children:e.jsx(k,{})})]})]}),e.jsxs("div",{className:"hidden items-center gap-[14px] rounded-[12px] bg-[#262626] px-[20px] py-[15px] lg:flex",children:[e.jsx("img",{src:X,alt:"book"}),e.jsxs("p",{className:"text-balance text-[14px] leading-[18px] text-[#686868]",children:['"Books are ',e.jsx("span",{className:"text-[#F9F9F9]",children:"windows"}),' to the world, and reading is a journey into the unknown."']})]})]})},w="flex md:h-[40px] md:w-[40px] w-[32px] h-[32px] items-center justify-center rounded-[30px] border-[1px] border-[#F9F9F933] text-[#F9F9F9] disabled:text-[#F9F9F933]";function D(){const[t,i]=c.useState(1),[x,r]=c.useState(2),[n,m]=c.useState(window.innerWidth),{data:s,isLoading:d}=B(t,x),p=()=>{(s==null?void 0:s.totalPages)!==t&&i(t+1)},u=()=>{t!==1&&i(t-1)};return c.useEffect(()=>{const o=()=>m(window.innerWidth);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),c.useEffect(()=>{if(n>=1280){r(10);return}else if(n>=768){r(8);return}else{r(2);return}},[n]),e.jsxs(S,{childrenSecond:e.jsx(L,{setCurrentPage:i,currentPage:t}),children:[e.jsxs("div",{className:"mb-[20px] flex items-center justify-between",children:[e.jsx(Z,{children:"Recommended"}),e.jsxs("div",{className:"flex items-center justify-end gap-[8px]",children:[e.jsx("button",{type:"button",onClick:u,disabled:t===1,className:w,children:e.jsx(C,{className:"h-[20px] w-[20px]"})}),e.jsx("button",{type:"button",onClick:p,disabled:(s==null?void 0:s.totalPages)===t,className:w,children:e.jsx(z,{className:"h-[20px] w-[20px]"})})]})]}),d?e.jsx(T,{}):e.jsx(P,{data:s==null?void 0:s.results})]})}export{D as default};
