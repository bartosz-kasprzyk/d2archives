/*! For license information please see main.18463a61.js.LICENSE.txt */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,mB=qe(RB)`
    display: flex;
    flex-direction: column;
    align-items: center;   
    gap: 20px;         
    grid-column: 1 / 3;
    margin: 20px;
`,fB=qe.img`
    width: 300px;
`,kB=qe.img`
    width: 250px;
    padding: 20px;
    margin-top: -40px;
    background-image: url(${HB});
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: 50% 20px;
        display: inline-block;
`,xB=qe.ul`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 80px;
    justify-items: center;
    list-style-type: none;
    margin: 0;
    padding: 20px 0 10px;
`,JB=qe(GB)`
    display: inline-block;
    padding-bottom: 15px;
    transition: transform 300ms ease, filter 300ms ease;

    &:hover {
        transform: scale(1.02);
        filter: brightness(1.3);
    }

    &.active {
        filter: brightness(2.5);
    }
`,KB=qe.img`
    width: 700px;
    margin: -340px auto;
    z-index: -1;
`,OB=qe.img`
    width: 40px;
    margin-top: -30px;
    z-index: 0;
    filter: brightness(0.3);
`,TB=qe.div`
    position: absolute;
    top: 20px;
    ${A=>{let{$position:e="right"}=A;return"left"===e?"left: 20px;":"right: 20px; transform: scaleX(-1);"}}
    width: 150px;
    height: 150px;
    background: url(${SB}) no-repeat center center;
    background-size: contain;
    z-index: 100;
    filter: brightness(0.3);
`;var NB=g(76168),yB=g(90942),bB=g(67039),zB=g(52019),PB=g(97716),jB=g(39357),VB=g(16677),LB=g(14221),ZB=g(70579);const WB=()=>(0,ZB.jsxs)(YB,{children:[(0,ZB.jsx)(TB,{$position:"left"}),(0,ZB.jsx)(TB,{}),(0,ZB.jsxs)(mB,{to:"/runes",children:[(0,ZB.jsx)(fB,{src:NB,alt:"Diablo II Logo"}),(0,ZB.jsx)(kB,{src:yB,alt:"Archives Logo"})]}),(0,ZB.jsxs)(xB,{children:[(0,ZB.jsx)("li",{children:(0,ZB.jsx)(JB,{to:"/runes",children:(0,ZB.jsx)("img",{src:bB,alt:"Runes"})})}),(0,ZB.jsx)("li",{children:(0,ZB.jsx)(JB,{to:"/runewords",children:(0,ZB.jsx)("img",{src:zB,alt:"Runewords"})})}),(0,ZB.jsx)("li",{children:(0,ZB.jsx)(JB,{to:"/uniques",children:(0,ZB.jsx)("img",{src:PB,alt:"Uniques"})})}),(0,ZB.jsx)("li",{children:(0,ZB.jsx)(JB,{to:"/sets",children:(0,ZB.jsx)("img",{src:jB,alt:"sets"})})})]}),(0,ZB.jsx)(KB,{src:VB}),(0,ZB.jsx)(OB,{src:LB})]}),vB=e=>{const[B,t]=(0,A.useState)({status:"loading",content:null});return(0,A.useEffect)((()=>{(async()=>{if(e)try{let A;if("runeAndRuneword"===e)A=await g.e(221).then(g.t.bind(g,221,19));else{if("uniqueAndSet"!==e)throw new Error("Invalid data type");A=await g.e(672).then(g.t.bind(g,17672,19))}setTimeout((()=>{t({status:"success",content:A})}),800)}catch(A){console.error("Error loading content:",A),t({status:"error",content:null})}})()}),[e]),B},XB=g.p+"static/media/box_top_left.2d8b7fbb8564b77f6ebb.webp",qB=g.p+"static/media/box_top_right.548ff05320d163be9566.webp",_B=g.p+"static/media/box_bottom_left.f3b784dc5e220d4d45b9.webp",$B=g.p+"static/media/box_bottom_right.30df33f706e3cceb5d4d.webp",At=g.p+"static/media/box_top.b98ce4df90bfb72eab63.webp",et=g.p+"static/media/box_bottom.15bc793b5736cf6b3df6.webp",gt=g.p+"static/media/box_left.87966edf7bad9b960430.webp",Bt=g.p+"static/media/box_right.87966edf7bad9b960430.webp",tt=g.p+"static/media/box_background.3c5aa480a3ef63fc5bc1.webp",it=qe.div`
    display: flex;
    overflow-x: auto;
    justify-content: center;
`,Et=qe.table`
    border-collapse: collapse;
    margin: 20px 0 100px;
    width: 100%;
`,Qt=qe.th`
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
    color: #DDDDDD;
    transition: background-color 1s ease;

    ${A=>A.$highlight&&"\n        background-color: #D1AD665A;\n    "}
`,Ct=qe(Qt)`
    color: #4f53c5;
`,nt=qe.th`
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
    color: #885C02;
    background: #0000003A;
    font-size: 20px;
`,ot=qe(nt)`
    color: #1B9718;
    background: #0000009A;
    font-size: 40px;
    margin: 20px 5px -10px;
    transition: filter 1s ease, transform 1s ease;

    ${A=>A.$highlight&&"\n        filter: brightness(3);\n        transform: scale(1.1);\n    "}
`,at=qe.th`
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
    color: ${A=>{let{$color:e}=A;return e||"inherit"}};
    transition: background-color 1s ease;

    ${A=>A.$highlight&&"\n        background-color: #D1AD665A;\n    "}
`,st=qe.tr`
    font-family: 'AvQest', sans-serif;
    font-size: 17px;
    position: relative;
    z-index: 0;
    background: ${A=>{let{$index:e}=A;return e%2===0?"#1413138A":"#201F1F5A"}};
    background-image: url(${tt});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    background-blend-mode: overlay;
    transition: background-color 1s ease;

    ${A=>A.$highlight&&"\n        background-color: #D1AD665A;\n    "}
`,wt=qe.img`
    width: 30px;
`,rt=qe.img`
    transform: scale(0.8);
    vertical-align: top;
`,It=qe.span`
    display: block;
    text-align: center;
    font-size: 18px;
    margin: 0;
`,Dt=qe.span`
    display: block;
    text-align: center;
    font-size: 15px;
    margin: 0;
`,ct=qe.div`
    color: #979797;
    border-top: 1px solid #97979770;
    margin: 0;
    margin-top: 2px;
    padding-top: 5px;
`,lt=qe.span`
    color: #8470ff;
    padding: 3px 8px 1px;
    filter: opacity(0.8);
    background: 
        url(${XB}) top left no-repeat,
        url(${qB}) top right no-repeat,
        url(${_B}) bottom left no-repeat,
        url(${$B}) bottom right no-repeat,
        url(${At}) top repeat-x,
        url(${et}) bottom repeat-x,
        url(${gt}) left repeat-y,
        url(${Bt}) right repeat-y,
        url(${tt}) center center repeat;
`,ht=qe.span`
    color: grey;
    font-style: italic;
`,Mt=qe.span`
    color: #86735a;
`,ut=qe.span`
    color: green;
    font-weight: bold;
    margin: 0 5px;
`,Ft=qe.span`
    color: #ca8120;
`,Rt=qe.h2`
    color: #DDDDDD;
`,Gt=qe.ul`
    list-style-type: none;
    padding: 0;
    padding-bottom: 60px;
`,Ut=qe.li`
    color: #86735A;
`,dt=qe.span`
    color: #000;
    background-color: #F8F412;
    padding: 0 2px;
    border-radius: 3px;
`;const pt={El:g(8967),Eld:g(70665),Tir:g(79309),Nef:g(14355),Eth:g(39565),Ith:g(69601),Tal:g(32923),Ral:g(5513),Ort:g(79037),Thul:g(4323),Amn:g(25914),Sol:g(60820),Shael:g(55221),Dol:g(64117),Hel:g(98483),Io:g(97558),Lum:g(25668),Ko:g(17520),Fal:g(82605),Lem:g(6196),Pul:g(31515),Um:g(50620),Mal:g(99876),Ist:g(83490),Gul:g(26690),Vex:g(91029),Ohm:g(58780),Lo:g(93155),Sur:g(98820),Ber:g(99947),Jah:g(23173),Cham:g(5635),Zod:g(40823)},Ht=qe.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(11, 60px);
    grid-template-rows: repeat(3, auto);
    gap: 15px;
    margin: 20px 0;
`,St=qe.button`
    background: none;
    border: none;
    padding: 5px;
    margin: 0;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 1));
    transition: transform 300ms ease, filter 300ms ease;
    
    &:focus {
        outline: none;
    }

    &:hover {
        transform: scale(1.20);
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 1));
    }

    &:active {
        transform: scale(0.80);
        filter: brightness(1.2);
    }
`,Yt=qe.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`,mt=qe.div`
    width: 70%;
    margin: 56px auto;
`;var ft=g(97773),kt=g(51842),xt=g(43551),Jt=g(75764);const Kt=qe.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 300px;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`,Ot=qe.img`
    width: 500px;
    height: 400px;
    margin: 50px auto;
`,Tt=[ft,kt,xt,Jt],Nt=e=>{let{dataType:g}=e;const[B,t]=(0,A.useState)(Tt[0]),i=vB(g);return(0,A.useEffect)((()=>{if("loading"!==i.status)return void t(Tt[Tt.length-1]);let A=0;const e=setInterval((()=>{A<Tt.length?(t(Tt[A]),A++):clearInterval(e)}),200);return()=>clearInterval(e)}),[i.status]),(0,ZB.jsx)(Kt,{children:(0,ZB.jsx)(Ot,{src:B,alt:"Loading"})})},yt=Object.keys(pt),bt=(e,g,B)=>{const t=/(?<!Damage:\s|\bDefense:\s|\bAdds\s)\b\d+-\d+\b/g,i=new RegExp(`\\b(${yt.join("|")})\\b`,"gi"),E=e.split("\n"),Q=B?new RegExp(`(${C=B,C.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"gi"):null;var C;return E.map(((e,E)=>{const C=e.split(/(\*Ladder only\*|\(Weapon Version\)|\(Shield Version\)|\(Armor Version\)|\(Sword Version\)|(?<!Adds\s)\b\d+-\d+\b|Weapon:|Helmet\/Armor:|Shield:|Damage:\s\d+-\d+|Defense:\s\d+-\d+)/g);return(0,ZB.jsxs)(A.Fragment,{children:[C.map(((A,e)=>"+Ladder only+"===A?(0,ZB.jsx)(ut,{children:A},e):"(Weapon Version)"===A||"(Shield Version)"===A||"(Armor Version)"===A||"(Sword Version)"===A?(0,ZB.jsx)(ht,{children:A},e):"Weapon:"===A||"Helmet/Armor:"===A||"Shield:"===A?(0,ZB.jsx)(Mt,{children:A},e):"/runewords"!==g&&"/uniques"!==g||!t.test(A)?"/runewords"===g&&i.test(A)?A.split(i).map(((A,e)=>{const g=yt.some((e=>e.toLowerCase()===A.toLowerCase()));return(B?A.split(Q):[A]).map(((A,t)=>{const i=A.toLowerCase()===B.toLowerCase(),E=`${e}-${t}`;return g?i?(0,ZB.jsx)(Ft,{children:(0,ZB.jsx)(dt,{children:A})},E):(0,ZB.jsx)(Ft,{children:A},E):A}))})):Q&&Q.test(A)?A.split(Q).map(((A,e)=>A.toLowerCase()===B.toLowerCase()?(0,ZB.jsx)(dt,{children:A},e):A)):A:(0,ZB.jsx)(lt,{children:A},e))),(0,ZB.jsx)("br",{})]},E)}))};const zt=[{name:"Chipped Topaz",image:g(20870)},{name:"Chipped Amethyst",image:g(56381)},{name:"Chipped Sapphire",image:g(5818)},{name:"Chipped Ruby",image:g(24756)},{name:"Chipped Emerald",image:g(806)},{name:"Chipped Diamond",image:g(13038)},{name:"Flawed Topaz",image:g(57468)},{name:"Flawed Amethyst",image:g(58931)},{name:"Flawed Sapphire",image:g(75060)},{name:"Flawed Ruby",image:g(73934)},{name:"Flawed Emerald",image:g(68528)},{name:"Flawed Diamond",image:g(68844)},{name:"Topaz",image:g(17250)},{name:"Amethyst",image:g(36529)},{name:"Sapphire",image:g(52182)},{name:"Ruby",image:g(30544)},{name:"Emerald",image:g(54666)},{name:"Diamond",image:g(3042)},{name:"Flawless Topaz",image:g(66776)},{name:"Flawless Amethyst",image:g(62183)},{name:"Flawless Sapphire",image:g(1e4)},{name:"Flawless Ruby",image:g(27722)},{name:"Flawless Emerald",image:g(91204)}],Pt=qe.p`
    color: #DDDDDD;
    font-size: 17px;
`,jt=qe(RB)`
    color: #ca8120;
    transition: filter 0.3s ease;

    &:hover {
        filter: brightness(1.5);
    }
`,Vt=qe.span`
    color: ${A=>{let{$color:e}=A;return e||"inherit"}};
    font-weight: 700;
`,Lt=()=>{const e=vB("runeAndRuneword").content,g=(0,A.useRef)({}),[B,t]=(0,A.useState)(null);if(!e)return(0,ZB.jsx)(Nt,{});const i=Object.keys(e.content.runesTable).filter((A=>A.startsWith("row"))).map((A=>e.content.runesTable[A]));return(0,ZB.jsxs)(mt,{children:[(0,ZB.jsxs)(Pt,{children:[(0,ZB.jsx)(Vt,{$color:"#CA8120",children:"Runes"})," are stones that enhance items with socketed slots. They add various properties depending on the item type. When inserted in the correct order, they form ",(0,ZB.jsx)(jt,{to:"/runewords",children:"runewords"})," that give items new properties. Here is a list of all runes:"]}),(0,ZB.jsx)(Ht,{children:Object.keys(pt).map((A=>(0,ZB.jsx)(St,{onClick:()=>(A=>{g.current[A]&&(g.current[A].scrollIntoView({behavior:"smooth",block:"center"}),t(A),setTimeout((()=>{t(null)}),1e3))})(A),children:(0,ZB.jsx)(Yt,{src:pt[A],alt:`${A} Rune`,title:`${A} Rune`})},A)))}),(0,ZB.jsx)(it,{children:(0,ZB.jsxs)(Et,{children:[(0,ZB.jsx)("thead",{children:(0,ZB.jsxs)(st,{$index:0,children:[(0,ZB.jsx)(nt,{colSpan:"2",children:"Rune"}),(0,ZB.jsx)(nt,{children:"Ingredients"}),(0,ZB.jsx)(nt,{children:"Properties"})]})}),(0,ZB.jsx)("tbody",{children:i.map(((A,e)=>(0,ZB.jsxs)(st,{id:`rune-${A[0]}`,ref:e=>g.current[A[0]]=e,$highlight:B===A[0],$index:e+1,children:[(0,ZB.jsxs)(at,{$color:"#86735A",children:["#",e+1]}),(0,ZB.jsxs)(Qt,{children:[(0,ZB.jsx)(Ft,{children:bt(A[0])}),(0,ZB.jsx)(wt,{src:pt[A[0]],alt:`${A[0]} Rune`,title:`${A[0]} Rune`})]}),(0,ZB.jsx)(Qt,{children:"El"===A[0]?"-":(0,ZB.jsxs)(ZB.Fragment,{children:[(0,ZB.jsx)(wt,{src:pt[A[1]],alt:`${A[1]} Rune`,title:`${A[1]} Rune`}),(0,ZB.jsx)(wt,{src:pt[A[1]],alt:`${A[1]} Rune`,title:`${A[1]} Rune`}),e<21&&(0,ZB.jsx)(wt,{src:pt[A[1]],alt:`${A[1]} Rune`,title:`${A[1]} Rune`}),e>=10&&(0,ZB.jsx)(ZB.Fragment,{children:(0,ZB.jsx)(wt,{src:zt[e-10].image,alt:zt[e-10].name,title:zt[e-10].name})})]})}),(0,ZB.jsxs)(Qt,{children:[bt(A[2]),(0,ZB.jsx)(ct,{children:A[3]})]})]},e)))})]})})]})},Zt=qe.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 3px;
`,Wt=qe.div`
  position: relative;
  display: inline-block;
`,vt=qe.input`
  border: none;
  outline: none;
  padding: 8px 0;
  border-bottom: 1px solid #885C025A;
  background: transparent;
  color: inherit;
`,Xt=qe.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #885C02;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;

  ${vt}:focus + & {
    animation: glow 0.5s forwards;
  }

  @keyframes glow {
    0% {
      transform: scaleX(0);
    }
    50% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(1);
    }
  }
`,qt=A=>{let{value:e,onChange:g,placeholder:B}=A;return(0,ZB.jsx)(Zt,{children:(0,ZB.jsxs)(Wt,{children:[(0,ZB.jsx)(vt,{type:"text",placeholder:B,value:e,onChange:g}),(0,ZB.jsx)(Xt,{})]})})},_t=qe.div`
    margin: auto 300px;
`,$t=qe.div`
    width: 700px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    background: #2E29296A;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    margin: 20px;

    &:after {
        content: '';
        position: absolute;
        top: 100%;
        left: 10px;
        border-width: 10px;
        border-style: solid;
        border-color: #2E29296A transparent transparent transparent;
    }
`,Ai=qe.p`
    font-size: 18px;
    color: #aaa;
    margin: 0;
`,ei=qe.img`
    width: 50px;
`,gi=g.p+"static/media/Decard_Cain.257ed3bca2cd601f2b11.webp",Bi=()=>(0,ZB.jsx)("main",{children:(0,ZB.jsxs)(_t,{children:[(0,ZB.jsx)($t,{children:(0,ZB.jsx)(Ai,{children:"Ah, it seems your search has led to a dead end, my friend. Perhaps you should try a different path."})}),(0,ZB.jsx)(ei,{src:gi})]})}),ti=()=>{const e=vB("runeAndRuneword").content,g=(0,A.useRef)({}),B=Zg(),[t,i]=(0,A.useState)("");if(!e)return(0,ZB.jsx)(Nt,{});const E=Object.keys(e.content.runewordsTable).filter((A=>A.startsWith("runeword"))).map((A=>e.content.runewordsTable[A])).filter((A=>A.some((A=>A.toLowerCase().includes(t.toLowerCase())))));return(0,ZB.jsxs)(mt,{children:[(0,ZB.jsxs)(Pt,{children:[(0,ZB.jsx)(Vt,{$color:"#86735A",children:"Runewords"})," are combinations of several different ",(0,ZB.jsx)(jt,{to:"/runes",children:"runes"})," designed to create powerful weapons or armor. The correct arrangement of runes in socketed items not only provides basic attributes but also bonus effects that enhance the item's power. Most of the most important weapons and armor in the game come from runewords. Many of these are very difficult to obtain due to the rare appearance of runes at higher levels. Besides the runes, you also need to find the appropriate item. It is worth mentioning that runewords that deal high damage are best combined with items that also have a high base attack rating. Experienced players spend a lot of time searching for the right items and runes to ultimately create their desired equipment. Here is a list of all runewords:"]}),(0,ZB.jsx)(qt,{placeholder:"Search runewords...",value:t,onChange:A=>i(A.target.value)}),0===E.length?(0,ZB.jsx)(Bi,{}):(0,ZB.jsx)(it,{children:(0,ZB.jsxs)(Et,{children:[(0,ZB.jsx)("thead",{children:(0,ZB.jsxs)(st,{$index:0,children:[(0,ZB.jsx)(nt,{children:"Runeword"}),(0,ZB.jsx)(nt,{children:"Base"}),(0,ZB.jsx)(nt,{children:"Runes"}),(0,ZB.jsx)(nt,{children:"Properties"})]})}),(0,ZB.jsx)("tbody",{children:E.map(((A,e)=>(0,ZB.jsxs)(st,{$index:e+1,ref:e=>g.current[A[0]]=e,children:[(0,ZB.jsx)(at,{$color:"#86735A",children:bt(A[0],B.pathname,t)}),(0,ZB.jsx)(Qt,{children:bt(A[1],B.pathname,t)}),(0,ZB.jsx)(Qt,{children:bt(A[2],B.pathname,t)}),(0,ZB.jsx)(Ct,{children:bt(A[3],B.pathname,t)})]},e)))})]})})]})};const ii=function(A){let e={};return A.keys().forEach((g=>{const B=g.replace("./","").replace(/\.(png|jpg|gif|jpeg)$/,"");e[B]=A(g)})),e}(g(34912)),Ei=()=>{const e=vB("uniqueAndSet").content,[g,B]=(0,A.useState)(""),t=Zg();if(!e)return(0,ZB.jsx)(Nt,{});const i=Object.values(e.content.uniqueItems).filter((A=>{const e=A.name.toLowerCase().includes(g.toLowerCase()),B=A.type.toLowerCase().includes(g.toLowerCase()),t=A.category.toLowerCase().includes(g.toLowerCase()),i=A.props.some((A=>A.toLowerCase().includes(g.toLowerCase())));return e||B||t||i}));return(0,ZB.jsxs)(mt,{children:[(0,ZB.jsxs)(Pt,{children:[(0,ZB.jsx)(Vt,{$color:"#86735A",children:"Unique Items"})," are by far the most sought-after, possessing many magical properties that no Magical, Rare, or Crafted Item has. There is usually only one Unique item for every type of weapon and armor in the game. Unique items are denoted by their names being colored gold. ",(0,ZB.jsx)(jt,{to:"/sets",children:"Set Items"})," are different from Unique ones, but very similar to them in terms of how they work and rarity. Here is a list of all Unique Items:"]}),(0,ZB.jsx)(qt,{placeholder:"Search uniques...",value:g,onChange:A=>B(A.target.value)}),0===i.length?(0,ZB.jsx)(Bi,{}):(0,ZB.jsx)(it,{children:(0,ZB.jsxs)(Et,{children:[(0,ZB.jsx)("thead",{children:(0,ZB.jsxs)(st,{$index:0,children:[(0,ZB.jsx)(nt,{children:"Item"}),(0,ZB.jsx)(nt,{children:"Category"}),(0,ZB.jsx)(nt,{children:"Properties"})]})}),(0,ZB.jsx)("tbody",{children:i.map(((A,e)=>{const B=A.image.replace(/^\/images\//,"").replace(/\.(png|jpg|gif|jpeg)$/,""),i=ii[B]||"/default_image.png";return(0,ZB.jsxs)(st,{$index:e+1,children:[(0,ZB.jsxs)(at,{$color:"#86735A",children:[(0,ZB.jsx)(rt,{src:i,alt:A.name}),(0,ZB.jsxs)("div",{children:[(0,ZB.jsx)("big",{children:bt(A.name,t.pathname,g)}),(0,ZB.jsx)("small",{children:bt(A.type,t.pathname,g)})]})]}),(0,ZB.jsx)(Qt,{children:bt(A.category.split(" ").slice(0,2).join(" "),t.pathname,g)}),(0,ZB.jsx)(Qt,{children:A.props.map(((A,e,B)=>{const i=B.findIndex((A=>A.startsWith("Required Level:"))),E=A.startsWith("Required");return(0,ZB.jsx)("div",{style:{color:e<=i?E?"#9d4a3c":"#fff":"#4f53c5"},children:bt(A,t.pathname,g)},e)}))})]},A.name)}))})]})})]})},Qi=qe.nav`
    column-count: 5;
    column-gap: 0;
    margin-bottom: 20px;
`,Ci=qe.ul`
    padding: 0;
    list-style: none;
    margin: 0;
    break-inside: avoid;
`,ni=qe.ul`
    list-style-type: none;
    padding-left: 20px;

    li {
        position: relative;

    &::before {
        content: '◈';
        color: #135F11;
        font-size: 0.75em;
        position: absolute;
        left: -15px;
        top: 3px;
    }
  }
`,oi=qe.button`
    background: none;
    border: none;
    color: #ca8120;
    text-align: left;
    cursor: pointer;
    transition: filter 0.1s ease, transform 0.1s ease;
    color: #1B9718;
    font-family: 'AvQest', sans-serif;
    font-size: 20px;
    padding: 0;
    margin: 0;
    margin-top: 15px;

    &:focus {
        outline: none;
    }

    &:hover {
        filter: brightness(1.5);
        transform: scale(1.01);
    }

    &:active {
        filter: brightness(5);
        transform: scale(0.98);
    }
`,ai=qe(oi)`
    font-size: 13px;
    margin-top: 0;
    opacity: 0.9;
`,si=()=>{const e=vB("uniqueAndSet").content,g=Zg(),B=(0,A.useRef)({}),t=(0,A.useRef)({}),[i,E]=(0,A.useState)(null),[Q,C]=(0,A.useState)(null);if(!e||!e.content||!e.content.setItems)return(0,ZB.jsx)(Nt,{});const n=Object.values(e.content.setItems).reduce(((A,e)=>{const g=e.category;return A[g]||(A[g]=[]),A[g].push(e),A}),{});return(0,ZB.jsxs)(mt,{children:[(0,ZB.jsxs)(Pt,{children:[(0,ZB.jsx)(Vt,{$color:"#1B9718",children:"Set Items"})," are special items introduced in Diablo II. They are like ",(0,ZB.jsx)(jt,{to:"/uniques",children:"Unique Items"}),', in the way that every time you find the same item, it has the same attributes. However, in general, Set Items are a tad weaker than Unique Items, or so called "Uniques". This is because Set Items are each part of specific sets, and moreover, if you equip the entire set, you will gain an extra set of Bonus Affixes, hence the name "Set Items". Set Items are denoted by their name appearing in bright green. Here are all the Sets:']}),(0,ZB.jsx)(Qi,{children:Object.entries(n).map(((A,e)=>{let[g,i]=A;return(0,ZB.jsx)(Ci,{children:(0,ZB.jsxs)("li",{children:[(0,ZB.jsx)(oi,{onClick:()=>(A=>{const e=B.current[A];e&&(e.scrollIntoView({behavior:"smooth"}),C(A),setTimeout((()=>{C(null)}),1e3))})(g),children:g}),(0,ZB.jsx)(ni,{children:i.map(((A,e)=>(0,ZB.jsx)("li",{children:(0,ZB.jsx)(ai,{onClick:()=>(A=>{const e=t.current[A];e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),E(A),setTimeout((()=>{E(null)}),1e3))})(A.name),children:A.name})},e)))})]})},e)}))}),Object.entries(n).map(((A,E)=>{let[C,n]=A;const o=e.content.setBonuses[C]||{};return(0,ZB.jsx)("div",{children:(0,ZB.jsx)(it,{children:(0,ZB.jsxs)(Et,{children:[(0,ZB.jsxs)("thead",{children:[(0,ZB.jsx)(st,{ref:A=>B.current[C]=A,children:(0,ZB.jsxs)(ot,{colSpan:3,$highlight:Q===C,children:["+ ",C," +"]})}),(0,ZB.jsxs)(st,{$index:0,children:[(0,ZB.jsx)(nt,{children:"Item"}),(0,ZB.jsx)(nt,{children:"Properties"}),(0,ZB.jsx)(nt,{children:"Set Bonuses"})]})]}),(0,ZB.jsx)("tbody",{children:n.map(((A,e)=>{var B,E;const Q=A.image.replace(/^\/images\//,"").replace(/\.(png|jpg|gif|jpeg)$/,""),C=ii[Q]||"/default_image.png";return(0,ZB.jsxs)(st,{$index:e+1,ref:e=>t.current[A.name]=e,children:[(0,ZB.jsxs)(at,{$color:"#1B9718",$highlight:i===A.name,children:[(0,ZB.jsx)(rt,{src:C,alt:A.name}),(0,ZB.jsx)(It,{children:A.name}),(0,ZB.jsx)(Dt,{children:A.type})]}),(0,ZB.jsx)(Qt,{$highlight:i===A.name,children:A.props.map(((A,e,B)=>{const t=B.findIndex((A=>A.startsWith("Required Level:"))),i=A.startsWith("Required"),E=A.toLowerCase().includes("set items");return(0,ZB.jsx)("div",{style:{color:E?"#1B9718":e<=t?i?"#9d4a3c":"#DDDDDD":"#4f53c5"},children:bt(A,g.pathname)},e)}))}),0===e?(0,ZB.jsxs)(Qt,{rowSpan:n.length,children:[(0,ZB.jsxs)("div",{children:[(0,ZB.jsx)(Rt,{children:"Partial Set Bonus:"}),(0,ZB.jsx)(Gt,{children:null===(B=o["Partial Set Bonus"])||void 0===B?void 0:B.map(((A,e)=>(0,ZB.jsx)(Ut,{children:A},e)))})]}),(0,ZB.jsxs)("div",{children:[(0,ZB.jsx)(Rt,{children:"Full Set Bonus:"}),(0,ZB.jsx)(Gt,{children:null===(E=o["Full Set Bonus"])||void 0===E?void 0:E.map(((A,e)=>(0,ZB.jsx)(Ut,{children:A},e)))})]})]}):null]},A.name)}))})]})})},E)}))]})},wi=g.p+"static/media/button_left.ba6eae1e51009952aa02.webp",ri=g.p+"static/media/button_right.d9e7d43086808075ab94.webp",Ii=g.p+"static/media/button_mid.65362b851a1e01a4276d.webp";var Di=g(18286);const ci=qe.button`
    width: 220px;
    color: #BD9B4E;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 1);
    font-family: 'AvQest', sans-serif;
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: 
        url(${wi}) left center no-repeat,
        url(${ri}) right center no-repeat,
        url(${Ii}) center repeat-x;
    background-size: auto 100%, auto 100%, auto 100%;
    border: none;
    outline: none;
    cursor: pointer;
    position: fixed;
    bottom: 10px;
    right: 20px;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease, filter 0.3s ease;

    ${A=>{let{$isVisible:e}=A;return e&&"\n        opacity: 1;\n        visibility: visible;\n    "}}

    &:hover {
        filter: brightness(1.2);
    }

    &:active {
        transform: scale(0.99, 0.97);
    }
`,li=qe.div`
    position: fixed;
    bottom: 16px;
    right: 27px;
    width: 226px;
    height: 48px;
    background: url(${Di});
    background-size: auto 100%;
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;

    ${A=>{let{$isVisible:e}=A;return e&&"\n        opacity: 1;\n        visibility: visible;\n    "}}
`,hi=()=>{const[e,g]=(0,A.useState)(!1),B=()=>{window.scrollY>window.innerHeight?g(!0):g(!1)};return(0,A.useEffect)((()=>(window.addEventListener("scroll",B),()=>{window.removeEventListener("scroll",B)})),[]),(0,ZB.jsx)(li,{$isVisible:e,children:(0,ZB.jsx)(ci,{$isVisible:e,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:"scroll to the top"})})};var Mi=g(5107),ui=g(38144);const Fi=qe.a`
    position: fixed;
    bottom: ${A=>{let{$bottom:e}=A;return e||"auto"}};
    right: -200px;
    background-color: ${A=>{let{$color:e}=A;return e||"inherit"}};
    z-index: 9999;
    height: 62px;
    width: 260px;
    display: inline-flex;
    align-items: center;
    color: #ffffff;
    font-family: "Cookie", cursive;
    font-size: 30px;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 10px;
    filter: brightness(0.6);
    transition: transform 1s ease, filter 1s ease;

    &:hover {
        transform: translateX(${A=>{let{$translateX:e}=A;return e||"0px"}});
        filter: brightness(1.2);
    }
`,Ri=qe.img`
    width: 45px;
    margin: -2px 7px 0 -11px;
`,Gi=A=>{let{icon:e,text:g,href:B,$bottom:t,$color:i,$translateX:E}=A;return(0,ZB.jsxs)(Fi,{href:B,target:"_blank",rel:"noopener noreferrer",$bottom:t,$color:i,$translateX:E,children:[(0,ZB.jsx)(Ri,{src:e}),g]})};function Ui(e){let{dataType:g}=e;const B=vB(g).status;return(0,A.useEffect)((()=>{"loading"===B&&window.scrollTo(0,0)}),[B]),null}const di=function(){return(0,ZB.jsxs)(MB,{children:[(0,ZB.jsx)(WB,{}),(0,ZB.jsx)(Ui,{}),(0,ZB.jsxs)(sB,{children:[(0,ZB.jsx)(oB,{path:"/runes",element:(0,ZB.jsx)(Lt,{dataType:"runeAndRuneword"})}),(0,ZB.jsx)(oB,{path:"/runewords",element:(0,ZB.jsx)(ti,{dataType:"runeAndRuneword"})}),(0,ZB.jsx)(oB,{path:"/uniques",element:(0,ZB.jsx)(Ei,{dataType:"uniqueAndSet"})}),(0,ZB.jsx)(oB,{path:"/sets",element:(0,ZB.jsx)(si,{dataType:"uniqueAndSet"})}),(0,ZB.jsx)(oB,{path:"/",element:(0,ZB.jsx)(nB,{to:"/runes"})})]}),(0,ZB.jsx)(Gi,{icon:Mi,text:"Follow Me",href:"https://github.com/bartosz-kasprzyk",$bottom:"280px",$color:"#21262D",$translateX:"-110px"}),(0,ZB.jsx)(Gi,{icon:ui,text:"Buy Me A Coffee",href:"https://buymeacoffee.com/bkasprzyk",$bottom:"200px",$color:"#9D590C",$translateX:"-170px"}),(0,ZB.jsx)(hi,{})]})},pi=A=>{A&&A instanceof Function&&g.e(453).then(g.bind(g,46453)).then((e=>{let{getCLS:g,getFID:B,getFCP:t,getLCP:i,getTTFB:E}=e;g(A),B(A),t(A),i(A),E(A)}))},Hi=(function(e){for(var g=[],B=1;B<arguments.length;B++)g[B-1]=arguments[B];var E=We.apply(void 0,i([e],g,!1)),Q="sc-global-".concat(fA(JSON.stringify(E))),C=new _e(E,Q),n=function(e){var g=me(),B=A.useContext(ze),t=A.useRef(g.styleSheet.allocateGSInstance(Q)).current;return g.styleSheet.server&&o(t,e,g.styleSheet,B,g.stylis),A.useLayoutEffect((function(){if(!g.styleSheet.server)return o(t,e,g.styleSheet,B,g.stylis),function(){return C.removeStyles(t,g.styleSheet)}}),[t,e,g.styleSheet,B,g.stylis]),null};function o(A,e,g,B,i){if(C.isStatic)C.renderStyles(A,DA,g,i);else{var E=t(t({},e),{theme:hA(e,B,n.defaultProps)});C.renderStyles(A,E,g,i)}}return A.memo(n)})`
    html {
        box-sizing: border-box;
        font-size: 15px;
        line-height: 1.5;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        margin: auto;
        background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(31, 18, 0, 1) 55%, rgba(0, 0, 0, 1) 100%);
        color: #DDDDDD;
        font-family: "Ubuntu", sans-serif;
    }
`;B.createRoot(document.getElementById("root")).render((0,ZB.jsx)(A.StrictMode,{children:(0,ZB.jsxs)(Pe,{theme:{color:{white:"#FFFFFF",whisper:"#F5F5FA",mystic:"#E4E6F0",waterloo:"#7E839A",stormGrey:"#74788B",woodsmoke:"#18181B",mineShaft:"#333333",heater:"#BAC7D5",pattensBlue:"#D6E4FF",scienceBlue:"#0044CC",black:"#000000"},breakpoint:{laptop:"1480px",tablet:"1278px",tabletOne:"1120px",tabletTwo:"1045px",tabletPortrait:"990px",phone:"767px",phoneTwo:"700px",phonePortrait:"481px"},fontWeight:{regular:"400",medium:"500",semiBold:"600",bold:"700"},fontSize:{xs:"10px",sm:"13px",md:"14px",lg:"16px",xl:"18px",xl2:"20px",xl3:"22px",xl4:"24px",xl5:"28px",xl6:"36px",xl7:"48px",xl8:"64px"}},children:[(0,ZB.jsx)(Hi,{}),(0,ZB.jsx)(di,{})]})})),pi()})()})();
//# sourceMappingURL=main.18463a61.js.map