/*! For license information please see main.f31fe196.js.LICENSE.txt */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,kn=_e(Mn)`
    display: flex;
    flex-direction: column;
    align-items: center;   
    gap: 20px;         
    grid-column: 1 / 3;
    margin: 20px;

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) { 
        margin-bottom: 5px;
    }
`,bn=_e.img`
    width: 300px;

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tabletPortrait}}) { 
        width: 225px;
        margin-top: 20px;
    }

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) { 
        width: 150px;
        margin-top: 40px;
    }
`,zn=_e.img`
    width: 250px;
    padding: 20px;
    margin-top: -40px;
    background-image: url(${Fn});
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: 50% 20px;
        display: inline-block;

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tabletPortrait}}) { 
        width: 200px;
        padding: 15px;
        margin-top: -32px;
        background-size: 50% 10px;
    }

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) { 
        width: 120px;
        padding: 10px;
        margin-top: -30px;
        background-size: 50% 10px;
    }
`,vn=_e.div`
    position: absolute;
    top: 20px;
    ${A=>{let{$position:e="right"}=A;return"left"===e?"left: 20px;":"right: 20px; transform: scaleX(-1);"}}
    width: 150px;
    height: 150px;
    background: url(${Hn}) no-repeat center center;
    background-size: contain;
    z-index: 100;
    filter: brightness(0.3);

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) { 
        width: 125px;
        height: 125px;
    }

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) { 
        width: 100px;
        height: 100px;
    }
`;var Tn=t(6168),yn=t(942);const On=_e.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) { 
        margin: -50px 0 60px;
    }
`,Pn=_e.ul`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 80px;
    justify-items: center;
    list-style-type: none;
    margin: 0;
    padding: 20px 0 10px;

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tabletPortrait}}) { 
        grid-gap: 40px;
    }

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) { 
        grid-template-columns: auto;
        grid-gap: 0;
        padding: 0;
    }
`,Jn=_e(Rn)`
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

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tabletPortrait}}) { 
        transform: scale(0.9);

        &:hover {
        transform: scale(0.92);
    }
    }

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) { 
        transform: scale(0.8);
        padding-bottom: 0;

        &:hover {
            transform: scale(0.82);
    }
    }

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) { 
        transform: scale(0.6);
        padding-bottom: 0;

        &:hover {
            transform: scale(0.62);
    }
    }
`,Yn=_e.img`
    width: 700px;
    margin: -340px auto;
    z-index: -2;

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) { 
        width: 330px;
        margin: -150px auto -120px;
    }

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) { 
        width: 200px;
        margin: -90px auto;
    }
`,Nn=_e.img`
    width: 40px;
    margin-top: -30px;
    z-index: -1;
    filter: brightness(0.3);

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) { 
        width: 30px;
        margin-top: -60px;
    }

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) { 
        width: 20px;
        margin-top: -20px;
    }
`,Vn=_e.img`
    width: 16px;
    margin: -28px auto;
    z-index: 0;
    cursor: pointer;

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) { 
        width: 14px;
        margin-top: -22px;
    }

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) { 
        width: 12px;
        margin-top: -16px;
    }
`;var jn=t(7039),Ln=t(2019),Kn=t(7716),Zn=t(9357),Xn=t(6677),Wn=t(4221);const qn=t.p+"static/media/chatgem_blue.d4f3e971f2b517364dce.webp",_n=t.p+"static/media/chatgem_pink.9be57a50ece13cd2c7bb.webp";var $n=t(579);const Ag=()=>{const[e,t]=(0,A.useState)(!0),n=e?qn:_n;return(0,$n.jsxs)(On,{children:[(0,$n.jsxs)(Pn,{children:[(0,$n.jsx)("li",{children:(0,$n.jsx)(Jn,{to:"/runes",children:(0,$n.jsx)("img",{src:jn,alt:"Runes"})})}),(0,$n.jsx)("li",{children:(0,$n.jsx)(Jn,{to:"/runewords",children:(0,$n.jsx)("img",{src:Ln,alt:"Runewords"})})}),(0,$n.jsx)("li",{children:(0,$n.jsx)(Jn,{to:"/uniques",children:(0,$n.jsx)("img",{src:Kn,alt:"Uniques"})})}),(0,$n.jsx)("li",{children:(0,$n.jsx)(Jn,{to:"/sets",children:(0,$n.jsx)("img",{src:Zn,alt:"sets"})})})]}),(0,$n.jsx)(Yn,{src:Xn}),(0,$n.jsx)(Nn,{src:Wn}),(0,$n.jsx)(Vn,{src:n,onClick:()=>{t((A=>!A))},alt:"Chat Gem"})]})},eg=()=>{const[e,t]=(0,A.useState)(window.innerWidth);return(0,A.useEffect)((()=>{const A=()=>{t(window.innerWidth)};return window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A)}}),[]),e},tg=()=>{const A=eg()>767;return(0,$n.jsxs)(Gn,{children:[(0,$n.jsx)(vn,{$position:"left"}),(0,$n.jsx)(vn,{}),(0,$n.jsxs)(kn,{to:"/runes",children:[(0,$n.jsx)(bn,{src:Tn,alt:"Diablo II Logo"}),(0,$n.jsx)(zn,{src:yn,alt:"Archives Logo"})]}),A&&(0,$n.jsx)(Ag,{})]})},ng=e=>{const[n,g]=(0,A.useState)({status:"loading",content:null});return(0,A.useEffect)((()=>{(async()=>{if(e)try{let A;if("runeAndRuneword"===e)A=await t.e(221).then(t.t.bind(t,221,19));else{if("uniqueAndSet"!==e)throw new Error("Invalid data type");A=await t.e(672).then(t.t.bind(t,7672,19))}setTimeout((()=>{g({status:"success",content:A})}),800)}catch(A){console.error("Error loading content:",A),g({status:"error",content:null})}})()}),[e]),n},gg=t.p+"static/media/box_top_left.2d8b7fbb8564b77f6ebb.webp",rg=t.p+"static/media/box_top_right.548ff05320d163be9566.webp",ig=t.p+"static/media/box_bottom_left.f3b784dc5e220d4d45b9.webp",ag=t.p+"static/media/box_bottom_right.30df33f706e3cceb5d4d.webp",og=t.p+"static/media/box_top.b98ce4df90bfb72eab63.webp",sg=t.p+"static/media/box_bottom.15bc793b5736cf6b3df6.webp",Bg=t.p+"static/media/box_left.87966edf7bad9b960430.webp",lg=t.p+"static/media/box_right.87966edf7bad9b960430.webp",cg=t.p+"static/media/box_background.3c5aa480a3ef63fc5bc1.webp",Eg=_e.div`
    display: flex;
    justify-content: center;
`,ug=_e.table`
    border-collapse: collapse;
    margin: 20px 0 100px;
    width: 100%;
`,Qg=_e.th`
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
    color: ${A=>{let{theme:e}=A;return e.color.white}};
    transition: background-color 1s ease;

    ${A=>{let{$highlight:e,theme:t}=A;return e&&`\n        background-color: ${t.color.highlight};\n    `}}
`,Cg=_e(Qg)`
    color: ${A=>{let{theme:e}=A;return e.color.magic}};
`,wg=_e.th`
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
    color: ${A=>{let{theme:e}=A;return e.color.brown}};
    background: ${A=>{let{theme:e}=A;return e.color.black.light}};
    font-size: 20px;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: 14px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        font-size: 11px;
    }
`,dg=_e(wg)`
    color: ${A=>{let{theme:e}=A;return e.color.set}};
    background: ${A=>{let{theme:e}=A;return e.color.black.deep}};
    font-size: 40px;
    margin: 20px 5px -10px;
    transition: filter 1s ease, transform 1s ease, background-color 1s ease;

    ${A=>{let{$highlight:e,theme:t}=A;return e&&`\n        background-color: ${t.color.highlight};\n    `}}

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tablet}}) {
        font-size: 30px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: 18px;
    }
`,Dg=_e.th`
    border: 3px solid ${A=>{let{theme:e}=A;return e.color.black.dark}};
    padding: 10px;
    text-align: center;
    color: ${A=>{let{$color:e}=A;return e||"inherit"}};
    transition: background-color 1s ease;
    overflow: hidden;

    ${A=>{let{$highlight:e,theme:t}=A;return e&&`\n        background-color: ${t.color.highlight};\n    `}}

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        padding: 5px;
    }
`,pg=_e.tr`
    font-family: 'AvQest', sans-serif;
    font-size: 17px;
    position: relative;
    z-index: 0;
    background: ${A=>{let{$index:e,theme:t}=A;return e%2===0?t.color.black.medium:t.color.black.light}};
    background-image: url(${cg});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    background-blend-mode: overlay;
    transition: background-color 1s ease;

    ${A=>{let{$highlight:e,theme:t}=A;return e&&`\n        background-color: ${t.color.highlight};\n    `}}

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tablet}}) {
        font-size: 14px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: 12px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        font-size: 7px;
    }
`,Ig=_e.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
`,hg=_e.span`
    margin-right: 5px;
`,fg=_e.img`
    width: 30px;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        width: 25px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        width: 20px;
    }
`,mg=_e.img`
    transform: scale(0.8);
    max-width: 100%;
    max-height: 100%;
    margin: -25px auto 0;
    padding: 10px;
    display: block;
    object-fit: contain;
    position: relative;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.laptop}}) {
        transform: scale(0.7);
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tablet}}) {
        transform: scale(0.65);
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        transform: scale(0.6);
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        transform: scale(0.55);
        max-height: 100px;
    }
`,Mg=_e.span`
    display: block;
    text-align: center;
    font-size: 18px;
    margin: 0;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tablet}}) {
        font-size: 15px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: 13px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        font-size: 8px;
    }
`,Rg=_e.span`
    display: block;
    text-align: center;
    font-size: 15px;
    margin: 0;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tablet}}) {
        font-size: 12px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: 10px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        font-size: 6px;
    }
`,Ug=_e.div`
    color: ${A=>{let{theme:e}=A;return e.color.grey.dark}};
    border-top: 2px solid ${A=>{let{theme:e}=A;return e.color.grey.light}};
    margin: 0 30px;
    margin-top: 2px;
    padding-top: 5px;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tablet}}) {
        margin: 0 10px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        margin: 0 5px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        margin: 0;
    }
`,Sg=_e.span`
    color: ${A=>{let{theme:e}=A;return e.color.value}};
    padding: 3px 8px 1px;
    filter: opacity(0.8);
    background: 
        url(${gg}) top left no-repeat,
        url(${rg}) top right no-repeat,
        url(${ig}) bottom left no-repeat,
        url(${ag}) bottom right no-repeat,
        url(${og}) top repeat-x,
        url(${sg}) bottom repeat-x,
        url(${Bg}) left repeat-y,
        url(${lg}) right repeat-y,
        url(${cg}) center center repeat;
`,xg=_e.span`
    color: ${A=>{let{theme:e}=A;return e.color.grey.dark}};;
    font-style: italic;
`,Fg=_e.span`
    color: ${A=>{let{theme:e}=A;return e.color.unique}};
`,Hg=_e.span`
    color: ${A=>{let{theme:e}=A;return e.color.darkGreen}};
    font-weight: bold;
    margin: 0 5px;
`,Gg=_e.span`
    color: ${A=>{let{theme:e}=A;return e.color.rune}};
`,kg=_e.h2`
    color: ${A=>{let{theme:e}=A;return e.color.white}};

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        padding-top: 5px;
    }
`,bg=_e.ul`
    list-style-type: none;
    padding: 0;
    padding-bottom: 60px;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        padding-bottom: 15px;
    }
`,zg=_e.li`
    color: ${A=>{let{theme:e}=A;return e.color.unique}};
`,vg=_e.span`
    color: ${A=>{let{theme:e}=A;return e.color.black.dark}};
    background-color: ${A=>{let{theme:e}=A;return e.color.search}};
    padding: 0 2px;
    border-radius: 3px;
`;const Tg={El:t(8967),Eld:t(665),Tir:t(9309),Nef:t(4355),Eth:t(9565),Ith:t(9601),Tal:t(2923),Ral:t(5513),Ort:t(9037),Thul:t(4323),Amn:t(5914),Sol:t(820),Shael:t(5221),Dol:t(4117),Hel:t(8483),Io:t(7558),Lum:t(5668),Ko:t(7520),Fal:t(2605),Lem:t(6196),Pul:t(1515),Um:t(620),Mal:t(9876),Ist:t(3490),Gul:t(6690),Vex:t(1029),Ohm:t(8780),Lo:t(3155),Sur:t(8820),Ber:t(9947),Jah:t(3173),Cham:t(5635),Zod:t(823)},yg=_e.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(11, 60px);
    grid-template-rows: repeat(3, auto);
    gap: 15px;
    margin: 20px 0;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tabletPortrait}}) {
        grid-template-columns: repeat(9, 60px);
        gap: 10px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phoneTwo}}) {
        grid-template-columns: repeat(7, 60px);
        gap: 10px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        grid-template-columns: repeat(6, 50px);
        gap: 8px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        grid-template-columns: repeat(6, 35px);
        gap: 5px;
    }
`,Og=_e.button`
    background: none;
    border: none;
    padding: 5px;
    margin: 0;
    width: 60px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 1));
    transition: transform 300ms ease, filter 300ms ease;

    &:focus {
        outline: none;
    }

    &:hover {
        transform: scale(1.10);
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 1));
    }

    &:active {
        transform: scale(0.80);
        filter: brightness(2);
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tabletPortrait}}) {
        width: 50px;
        height: 70px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        width: 45px;
        height: 65px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        width: 35px;
        height: 55px;
    }
`,Pg=_e.img`
    width: 100%;
    height: 60%;
    object-fit: cover;
    display: block;
    opacity: ${A=>{let{$opacity:e}=A;return e||"inherit"}};
`,Jg=_e.div`
    font-family: 'AvQest', sans-serif;
    font-size: 13px;
    color: ${A=>{let{theme:e}=A;return e.color.rune}};
    text-align: center;
    margin-top: 5px;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: 11px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        font-size: 10px;
    }
`,Yg=_e.div`
  width: 70%;
  margin: 56px auto;
  animation: fadeIn 500ms ease-in-out;

  @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    25% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  }
`;var Ng=t(7773),Vg=t(1842),jg=t(3551),Lg=t(5764);const Kg=_e.div`
    position: fixed;
    top: 100px;
    left: 0;
    width: 100%;
    padding-top: 300px;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        padding-top: 0;
        top: 230px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        top: 200px;
    }
`,Zg=_e.img`
    width: 500px;
    height: 400px;
    margin: 0 auto;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        width: 400px;
        height: 350px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        width: 300px;
        height: 300px;
    }
`,Xg=[Ng,Vg,jg,Lg],Wg=e=>{let{dataType:t}=e;const[n,g]=(0,A.useState)(Xg[0]),r=ng(t);return(0,A.useEffect)((()=>{if("loading"!==r.status)return void g(Xg[Xg.length-1]);let A=0;const e=setInterval((()=>{A<Xg.length?(g(Xg[A]),A++):clearInterval(e)}),200);return()=>clearInterval(e)}),[r.status]),(0,$n.jsx)(Kg,{children:(0,$n.jsx)(Zg,{src:n,alt:"Loading"})})},qg=Object.keys(Tg),_g=(e,t,n)=>{const g=/(?<!Damage:\s|\bDefense:\s|\bAdds\s)\b\d+-\d+\b/g,r=new RegExp(`\\b(${qg.join("|")})\\b`,"gi"),i=e.split("\n"),a=n?new RegExp(`(${o=n,o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"gi"):null;var o;return i.map(((e,i)=>{const o=e.split(/(\*Ladder\u00A0only\*|\(Weapon Version\)|\(Shield Version\)|\(Armor Version\)|\(Sword Version\)|(?<!Adds\s)\b\d+-\d+\b|Weapon:|Helmet\/Armor:|Shield:|Damage:\s\d+-\d+|Defense:\s\d+-\d+)/g);return(0,$n.jsxs)(A.Fragment,{children:[o.map(((A,e)=>"+Ladder\xa0only+"===A?(0,$n.jsx)(Hg,{children:A},e):"(Weapon Version)"===A||"(Shield Version)"===A||"(Armor Version)"===A||"(Sword Version)"===A?(0,$n.jsx)(xg,{children:A},e):"Weapon:"===A||"Helmet/Armor:"===A||"Shield:"===A?(0,$n.jsx)(Fg,{children:A},e):"/runewords"!==t&&"/uniques"!==t&&"/sets"!==t||!g.test(A)?"/runewords"===t&&r.test(A)?A.split(r).map(((A,e)=>{const t=qg.some((e=>e.toLowerCase()===A.toLowerCase()));return(n?A.split(a):[A]).map(((A,g)=>{const r=A.toLowerCase()===n.toLowerCase(),i=`${e}-${g}`;return t?r?(0,$n.jsx)(Gg,{children:(0,$n.jsx)(vg,{children:A})},i):(0,$n.jsx)(Gg,{children:A},i):A}))})):a&&a.test(A)?A.split(a).map(((A,e)=>A.toLowerCase()===n.toLowerCase()?(0,$n.jsx)(vg,{children:A},e):A)):A:(0,$n.jsx)(Sg,{children:A},e))),(0,$n.jsx)("br",{})]},i)}))};const $g=[{name:"Chipped Topaz",image:t(870)},{name:"Chipped Amethyst",image:t(6381)},{name:"Chipped Sapphire",image:t(5818)},{name:"Chipped Ruby",image:t(4756)},{name:"Chipped Emerald",image:t(806)},{name:"Chipped Diamond",image:t(3038)},{name:"Flawed Topaz",image:t(7468)},{name:"Flawed Amethyst",image:t(8931)},{name:"Flawed Sapphire",image:t(5060)},{name:"Flawed Ruby",image:t(3934)},{name:"Flawed Emerald",image:t(8528)},{name:"Flawed Diamond",image:t(8844)},{name:"Topaz",image:t(7250)},{name:"Amethyst",image:t(6529)},{name:"Sapphire",image:t(2182)},{name:"Ruby",image:t(544)},{name:"Emerald",image:t(4666)},{name:"Diamond",image:t(3042)},{name:"Flawless Topaz",image:t(6776)},{name:"Flawless Amethyst",image:t(2183)},{name:"Flawless Sapphire",image:t(0)},{name:"Flawless Ruby",image:t(7722)},{name:"Flawless Emerald",image:t(1204)}],Ar=_e.p`
    color: ${A=>{let{theme:e}=A;return e.color.white}};
    font-size: 17px;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: 13px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        font-size: 9px;
    }
`,er=_e(Mn)`
    color: ${A=>{let{theme:e}=A;return e.color.rune}};
    transition: filter 0.3s ease;

    &:hover {
        filter: brightness(1.5);
    }
`,tr=_e.span`
    color: ${A=>{let{$color:e}=A;return e||"inherit"}};
    font-weight: 700;
`,nr=()=>{const e=Ne(),t=ng("runeAndRuneword").content,n=eg()>767,g=(0,A.useRef)({}),[r,i]=(0,A.useState)(null);if(!t)return(0,$n.jsx)(Wg,{});const a=Object.keys(t.content.runesTable).filter((A=>A.startsWith("row"))).map((A=>t.content.runesTable[A]));return(0,$n.jsxs)(Yg,{children:[!n&&(0,$n.jsx)(Ag,{}),(0,$n.jsxs)(Ar,{children:[(0,$n.jsx)(tr,{$color:"#CA8120",children:"Runes"})," are stones that enhance items with socketed slots. They add various properties depending on the item type. When inserted in the correct order, they form ",(0,$n.jsx)(er,{to:"/runewords",children:"runewords"})," that give items new properties. Here is a list of all runes:"]}),(0,$n.jsx)(yg,{children:Object.keys(Tg).map((A=>(0,$n.jsxs)(Og,{onClick:()=>(A=>{g.current[A]&&(g.current[A].scrollIntoView({behavior:"smooth",block:"center"}),i(A),setTimeout((()=>{i(null)}),1e3))})(A),children:[(0,$n.jsx)(Pg,{src:Tg[A],alt:`${A} Rune`,title:`${A} Rune`}),(0,$n.jsx)(Jg,{children:A})]},A)))}),(0,$n.jsx)(Eg,{children:(0,$n.jsxs)(ug,{children:[(0,$n.jsx)("thead",{children:(0,$n.jsxs)(pg,{$index:0,children:[(0,$n.jsx)(wg,{colSpan:n?2:1,children:"Rune"}),(0,$n.jsx)(wg,{children:n?"Ingredients":"Ingr."}),(0,$n.jsx)(wg,{children:"Properties"})]})}),(0,$n.jsx)("tbody",{children:a.map(((A,t)=>(0,$n.jsxs)(pg,{id:`rune-${A[0]}`,ref:e=>g.current[A[0]]=e,$highlight:r===A[0],$index:t+1,children:[n&&(0,$n.jsxs)(Dg,{$color:e.color.unique,children:["#",t+1]}),(0,$n.jsxs)(Qg,{children:[(0,$n.jsx)(Gg,{children:_g(A[0])}),(0,$n.jsx)(fg,{src:Tg[A[0]],alt:`${A[0]} Rune`,title:`${A[0]} Rune`})]}),(0,$n.jsx)(Qg,{children:"El"===A[0]?"-":n?(0,$n.jsxs)($n.Fragment,{children:[(0,$n.jsx)(fg,{src:Tg[A[1]],alt:`${A[1]} Rune`,title:`${A[1]} Rune`}),(0,$n.jsx)(fg,{src:Tg[A[1]],alt:`${A[1]} Rune`,title:`${A[1]} Rune`}),t<21&&(0,$n.jsx)(fg,{src:Tg[A[1]],alt:`${A[1]} Rune`,title:`${A[1]} Rune`}),t>=10&&(0,$n.jsx)($n.Fragment,{children:(0,$n.jsx)(fg,{src:$g[t-10].image,alt:$g[t-10].name,title:$g[t-10].name})})]}):(0,$n.jsxs)($n.Fragment,{children:[(0,$n.jsxs)(Ig,{children:[(0,$n.jsx)(hg,{children:t<21?"3x":"2x"}),(0,$n.jsx)(fg,{src:Tg[A[1]],alt:`${A[1]} Rune`,title:`${A[1]} Rune`})]}),t>=10&&(0,$n.jsxs)(Ig,{children:[(0,$n.jsx)(hg,{children:"1x"}),(0,$n.jsx)(fg,{src:$g[t-10].image,alt:$g[t-10].name,title:$g[t-10].name})]})]})}),(0,$n.jsxs)(Qg,{children:[_g(A[2]),(0,$n.jsx)(Ug,{children:n?A[3]:A[4]})]})]},t)))})]})})]})};var gr,rr;function ir(){return ir=Object.assign?Object.assign.bind():function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(A[n]=t[n])}return A},ir.apply(null,arguments)}function ar(e,t){let{title:n,titleId:g,...r}=e;return A.createElement("svg",ir({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",ref:t,"aria-labelledby":g},r),n?A.createElement("title",{id:g},n):null,gr||(gr=A.createElement("g",{clipPath:"url(#a)"},A.createElement("path",{fill:"#aaa",d:"M14 12.94 10.16 9.1c1.25-1.76 1.1-4.2-.48-5.78a4.49 4.49 0 0 0-6.36 0 4.49 4.49 0 0 0 0 6.36 4.486 4.486 0 0 0 5.78.48L12.94 14 14 12.94ZM4.38 8.62a3 3 0 0 1 0-4.24 3 3 0 0 1 4.24 0 3 3 0 0 1 0 4.24 3 3 0 0 1-4.24 0Z"}))),rr||(rr=A.createElement("defs",null,A.createElement("clipPath",{id:"a"},A.createElement("path",{fill:"#aaa",d:"M0 0h16v16H0z"})))))}const or=A.forwardRef(ar),sr=(t.p,_e.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 3px;
`),Br=_e.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px solid #885C025A;
  transition: border-bottom 300ms ease;

  &:hover {
    border-bottom: 1px solid #C88C0E5A;
    }
`,lr=_e(or)`
  width: 18px;
  height: 18px;
  margin-bottom: -3px;

  @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
    width: 15px;
    height: 15px;
    margin-bottom: -2px;
  }

  @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
    width: 13px;
    height: 13px;
  }
`,cr=_e.input`
  border: none;
  outline: none;
  padding: 8px;
  font-size: 18px;
  background: transparent;
  color: inherit;

  @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
    width: 150px;
    padding: 5px;
    font-size: 15px;
  }

  @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
    width: 130px;
    padding: 3px;
    font-size: 13px;
  }
`,Er=_e.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: ${A=>{let{theme:e}=A;return e.color.brown}};
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;

  ${cr}:focus + & {
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

  @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
    height: 1px;
  }
`,ur=A=>{let{value:e,onChange:t,placeholder:n}=A;return(0,$n.jsx)(sr,{children:(0,$n.jsxs)(Br,{children:[(0,$n.jsx)(lr,{}),(0,$n.jsx)(cr,{type:"text",placeholder:n,value:e,onChange:t}),(0,$n.jsx)(Er,{})]})})},Qr=_e.div`
    margin: auto 20%;
`,Cr=_e.div`
    width: 700px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    background: ${A=>{let{theme:e}=A;return e.color.grey.light}};
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
        border-color: ${A=>{let{theme:e}=A;return e.color.grey.light}} transparent transparent transparent;
    }

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.laptop}}) { 
        width: 600px;
    }

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tablet}}) { 
        width: auto;
    }

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) { 
        width: 120%;
        padding: 15px;
        margin-left: -10px;
    }
`,wr=_e.p`
    font-size: 18px;
    color: ${A=>{let{theme:e}=A;return e.color.silver}};
    margin: 0;

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) { 
        font-size: 13px;
    }
`,dr=_e.img`
    width: 50px;

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) { 
        width: 30px;
    }

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) { 
        width: 30px;
        margin-left: -15px;
    }
`,Dr=t.p+"static/media/Decard_Cain.257ed3bca2cd601f2b11.webp",pr=A=>{let{text:e}=A;return(0,$n.jsx)("main",{children:(0,$n.jsxs)(Qr,{children:[(0,$n.jsx)(Cr,{children:(0,$n.jsx)(wr,{children:e})}),(0,$n.jsx)(dr,{src:Dr})]})})};var Ir,hr=t(9103);function fr(){return fr=Object.assign?Object.assign.bind():function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(A[n]=t[n])}return A},fr.apply(null,arguments)}function mr(e,t){let{title:n,titleId:g,...r}=e;return A.createElement("svg",fr({xmlns:"http://www.w3.org/2000/svg",width:"512.000000pt",height:"512.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet",ref:t,"aria-labelledby":g},r),n?A.createElement("title",{id:g},n):null,Ir||(Ir=A.createElement("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"#ddd",stroke:"none"},A.createElement("path",{d:"M3025 4798 c-27 -10 -497 -380 -573 -452 -19 -17 -40 -44 -49 -60 -18 -34 -19 -116 -2 -148 36 -67 380 -577 405 -600 62 -56 167 -57 226 -1 47 45 61 79 56 142 -4 50 -13 70 -86 181 -67 103 -78 126 -64 128 29 5 251 -72 356 -122 228 -110 460 -301 617 -511 397 -528 446 -1250 123 -1827 -246 -438 -674 -746 -1169 -840 -171 -32 -439 -32 -610 0 -704 133 -1243 686 -1362 1395 -11 69 -17 158 -17 272 1 255 39 439 141 675 56 129 60 179 19 240 -50 76 -143 99 -226 58 -41 -21 -50 -33 -95 -123 -100 -200 -165 -448 -187 -712 -27 -331 42 -703 189 -1013 171 -362 464 -684 806 -884 376 -221 818 -319 1237 -276 805 84 1483 629 1735 1395 122 369 134 767 35 1149 -34 134 -61 205 -134 361 -195 412 -536 754 -951 955 -117 57 -323 132 -397 146 -21 3 -38 9 -38 13 0 4 47 47 105 94 57 47 111 97 120 111 39 58 31 147 -18 203 -51 58 -120 77 -192 51z"}))))}const Mr=A.forwardRef(mr),Rr=(t.p,_e.div`
    position: fixed;
    top: 19%;
    left: ${A=>{let{$isOpen:e}=A;return e?"-10px":"-175px"}};
    width: 190px;
    height: auto;
    background: ${A=>{let{theme:e}=A;return e.color.black.deep}};
    background-image: url(${cg});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    background-blend-mode: overlay;
    border: 10px solid transparent;
    border-image: url(${hr}) 30 stretch;
    border-left: none;
    border-radius: 0 10px 10px 0;
    transition: left 300ms ease;
    z-index: 2000;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.laptop}}) {
        top: 50%;
        transform: translateY(-50%);
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        left: ${A=>{let{$isOpen:e}=A;return e?"-10px":"-155px"}};
        width: 170px;
    }
`),Ur=_e.div`
    display: grid;
    grid-template-columns: repeat(3, 45px);
    grid-template-rows: repeat(12, auto);
    gap: 2px;
    padding: 3px 20px 7px;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        grid-template-columns: repeat(3, 35px);
        padding: 3px 20px 7px 28px;
        gap: 4px;
    }
`,Sr=_e.img`
    position: absolute;
    right: ${A=>{let{$isOpen:e}=A;return e?"-15px":"-29px"}};
    top: 45%;
    transform: translateY(-50%);
    padding: 20px 0;
    cursor: pointer;
    width: 30px;
    transform: ${A=>{let{$isOpen:e}=A;return e?"rotate(180deg)":"rotate(0deg)"}};
`,xr=_e.span`
    display: block;
    font-family: 'AvQest', sans-serif;
    font-size: 20px;
    padding: 4px;
    padding-bottom: 0;
    text-align: center;
    
    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: 18px;
        padding-left: 15px;
    }
`,Fr=_e.button`
    background: none;
    border: none;
    padding: 5px;
    margin: 0;
    width: 45px;
    height: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 1));
    transition: transform 300ms ease, filter 1000ms ease;

    &:focus {
        outline: none;
    }

    &:hover {
        transform: ${A=>{let{$isLargeScreen:e}=A;return e?"scale(1.05)":"none"}};
    }

    &:active {
        transform: scale(0.80);
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        width: 35px;
        height: 40px;
    }
`,Hr=_e.img`
    width: 100%;
    height: 60%;
    object-fit: cover;
    display: block;
    opacity: ${A=>{let{$opacity:e}=A;return e||"inherit"}};

    ${A=>{let{$opacity:e}=A;return 1===e&&"\n        animation: goldenSheen 1s linear;\n    "}}

    @keyframes goldenSheen {
        0% {
            filter: brightness(2) drop-shadow(0 0 30px rgba(255, 215, 0, 1));
        }
        50% {
            filter: brightness(1.5) drop-shadow(0 0 20px rgba(255, 215, 0, 0.5));
        }
        100% {
            filter: brightness(1) drop-shadow(0 0 10px rgba(255, 215, 0, 0));
        }
    }
`,Gr=_e.div`
    font-family: 'AvQest', sans-serif;
    font-size: 13px;
    color: ${A=>{let{theme:e}=A;return e.color.rune}};
    text-align: center;
    margin-top: 5px;
    opacity: ${A=>{let{$opacity:e}=A;return e||"inherit"}};

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        margin-top: 2px;
    }
`,kr=(_e.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`,_e(Mr)`
    width: 18px;
    height: 18px;
    margin: 3px 10px -3px 0;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        width: 14px;
        height: 14px;
        margin-right: 7px;
    }
`),br=_e.button`
    grid-column: span 3;
    font-family: 'AvQest', sans-serif;
    font-size: 20px;
    padding: 7px;
    margin: 2px 7px;
    background-image: url(${cg});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    color: ${A=>{let{theme:e}=A;return e.color.white}};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
    filter: brightness(1.3);
    transition: transform 300ms ease, filter 300ms ease;

    &:hover {
        transform: scale(1.005);
        filter: brightness(1.4);
    }

    &:active {
        transform: scale(0.97, 0.9);
        filter: brightness(2);
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: 16px;
    }
`;var zr=t(8991),vr=t(5858);const Tr=()=>{const e=Ne(),t=ng("runeAndRuneword").content,n=eg()>767,g=(0,A.useRef)({}),r=Zt(),[i,a]=(0,A.useState)(""),[o,s]=(0,A.useState)([]),[B,l]=(0,A.useState)(!1),[c,E]=(0,A.useState)(!1);if(!t)return(0,$n.jsx)(Wg,{});const u=Object.keys(t.content.runewordsTable).filter((A=>A.startsWith("runeword"))).map((A=>t.content.runewordsTable[A])).filter((A=>A.some((A=>A.toLowerCase().includes(i.toLowerCase()))))),Q=o.length>0?u.filter((A=>A[2].split(/\s*\+\s*/).every((A=>o.includes(A))))):u;return(0,$n.jsxs)(Yg,{children:[!n&&(0,$n.jsx)(Ag,{}),(0,$n.jsxs)(Ar,{children:[(0,$n.jsx)(tr,{$color:e.color.unique,children:"Runewords"})," are combinations of several different ",(0,$n.jsx)(er,{to:"/runes",children:"runes"})," designed to create powerful weapons or armor. The correct arrangement of runes in socketed items not only provides basic attributes but also bonus effects that enhance the item's power. Most of the most important weapons and armor in the game come from runewords. Many of these are very difficult to obtain due to the rare appearance of runes at higher levels. Besides the runes, you also need to find the appropriate item. It is worth mentioning that runewords that deal high damage are best combined with items that also have a high base attack rating. Experienced players spend a lot of time searching for the right items and runes to ultimately create their desired equipment."]}),(0,$n.jsxs)(Rr,{$isOpen:B,children:[(0,$n.jsx)(Sr,{src:c?vr:zr,$isOpen:B,onMouseEnter:()=>E(!0),onMouseLeave:()=>E(!1),onClick:()=>{l(!B)}}),(0,$n.jsx)(xr,{children:"Filter by runes"}),(0,$n.jsxs)(Ur,{$isOpen:B,children:[Object.keys(Tg).map((A=>(0,$n.jsxs)(Fr,{$isLargeScreen:n,onClick:()=>{return e=A,void s((A=>A.includes(e)?A.filter((A=>A!==e)):[...A,e]));var e},children:[(0,$n.jsx)(Hr,{src:Tg[A],alt:`${A} Rune`,title:`${A} Rune`,$opacity:o.includes(A)?1:.2}),(0,$n.jsx)(Gr,{$opacity:o.includes(A)?1:.4,children:A})]},A))),(0,$n.jsxs)(br,{onClick:()=>{s([])},children:[(0,$n.jsx)(kr,{}),"Reset"]})]})]}),(0,$n.jsx)(ur,{placeholder:"Search runewords...",value:i,onChange:A=>a(A.target.value)}),0===Q.length?o.length>0?(0,$n.jsx)(pr,{text:"Ah, it seems the runes you possess do not create anything formidable, my friend. Perhaps you should seek out more runes to reveal greater secrets."}):(0,$n.jsx)(pr,{text:"Ah, it seems your search has led to a dead end, my friend. Perhaps you should try a different path."}):(0,$n.jsx)(Eg,{children:(0,$n.jsxs)(ug,{children:[(0,$n.jsx)("thead",{children:(0,$n.jsxs)(pg,{$index:0,children:[(0,$n.jsx)(wg,{children:"Runeword"}),n&&(0,$n.jsx)(wg,{children:"Base"}),n&&(0,$n.jsx)(wg,{children:"Runes"}),(0,$n.jsx)(wg,{children:"Properties"})]})}),(0,$n.jsx)("tbody",{children:Q.map(((A,t)=>(0,$n.jsxs)(pg,{$index:t+1,ref:e=>g.current[A[0]]=e,children:[(0,$n.jsxs)(Dg,{$color:e.color.unique,children:[_g(A[0],r.pathname,i),!n&&(0,$n.jsxs)("div",{style:{color:e.color.white},children:[(0,$n.jsx)("small",{children:_g(A[2],r.pathname,i)}),(0,$n.jsx)("div",{style:{fontSize:"0.85em",paddingTop:"10px",opacity:.7},children:_g(A[1],r.pathname,i)})]})]}),n&&(0,$n.jsx)(Qg,{style:{opacity:.7},children:_g(A[1],r.pathname,i)}),n&&(0,$n.jsx)(Qg,{children:_g(A[2],r.pathname,i)}),(0,$n.jsx)(Cg,{children:_g(A[3],r.pathname,i)})]},t)))})]})})]})};const yr=function(A){let e={};return A.keys().forEach((t=>{const n=t.replace("./","").replace(/\.(png|jpg|gif|jpeg)$/,"");e[n]=A(t)})),e}(t(4912)),Or=()=>{const e=Ne(),t=ng("uniqueAndSet").content,n=eg()>767,g=Zt(),[r,i]=(0,A.useState)("");if(!t)return(0,$n.jsx)(Wg,{});const a=Object.values(t.content.uniqueItems).filter((A=>{const e=A.name.toLowerCase().includes(r.toLowerCase()),t=A.type.toLowerCase().includes(r.toLowerCase()),n=A.category.toLowerCase().includes(r.toLowerCase()),g=A.props.some((A=>A.toLowerCase().includes(r.toLowerCase())));return e||t||n||g}));return(0,$n.jsxs)(Yg,{children:[!n&&(0,$n.jsx)(Ag,{}),(0,$n.jsxs)(Ar,{children:[(0,$n.jsx)(tr,{$color:e.color.unique,children:"Unique Items"})," are by far the most sought-after, possessing many magical properties that no Magical, Rare, or Crafted Item has. There is usually only one Unique item for every type of weapon and armor in the game. Unique items are denoted by their names being colored gold. ",(0,$n.jsx)(er,{to:"/sets",children:"Set Items"})," are different from Unique ones, but very similar to them in terms of how they work and rarity."]}),(0,$n.jsx)(ur,{placeholder:"Search uniques...",value:r,onChange:A=>i(A.target.value)}),0===a.length?(0,$n.jsx)(pr,{text:"Ah, it seems your search has led to a dead end, my friend. Perhaps you should try a different path."}):(0,$n.jsx)(Eg,{children:(0,$n.jsxs)(ug,{children:[(0,$n.jsx)("thead",{children:(0,$n.jsxs)(pg,{$index:0,children:[(0,$n.jsx)(wg,{children:"Item"}),n&&(0,$n.jsx)(wg,{children:"Category"}),(0,$n.jsx)(wg,{children:"Properties"})]})}),(0,$n.jsx)("tbody",{children:a.map(((A,t)=>{const i=A.image.replace(/^\/images\//,"").replace(/\.(png|jpg|gif|jpeg)$/,""),a=yr[i]||"/default_image.png";return(0,$n.jsxs)(pg,{$index:t+1,children:[(0,$n.jsxs)(Dg,{$color:e.color.unique,children:[(0,$n.jsx)(mg,{src:a,alt:A.name}),(0,$n.jsxs)("div",{style:{marginTop:"-15px"},children:[(0,$n.jsx)(Mg,{children:_g(A.name,g.pathname,r)}),(0,$n.jsx)(Rg,{children:_g(A.type,g.pathname,r)}),(0,$n.jsx)("div",{style:{fontSize:"0.70em",marginTop:"3px",color:e.color.white},children:!n&&_g(A.category.split(" ").slice(0,2).join(" "),g.pathname,r)})]})]}),n&&(0,$n.jsx)(Qg,{children:_g(A.category.split(" ").slice(0,2).join(" "),g.pathname,r)}),(0,$n.jsx)(Qg,{children:A.props.map(((A,t,n)=>{const i=n.findIndex((A=>A.startsWith("Required Level:"))),a=A.startsWith("Required");return(0,$n.jsx)("div",{style:{color:t<=i?a?e.color.required:e.color.white:e.color.magic},children:_g(A,g.pathname,r)},t)}))})]},A.name)}))})]})})]})},Pr=_e.nav`
    column-count: 5;
    column-gap: 0;
    margin-bottom: 20px;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.laptop}}) {
        column-gap: 15px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tabletTwo}}) {
        column-gap: 50px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        column-count: 3;
    }
`,Jr=_e.ul`
    padding: 0;
    list-style: none;
    margin: 0;
    break-inside: avoid;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tabletTwo}}) {
        li {
            position: relative;

            &::before {
                content: '◈';
                color: ${A=>{let{theme:e}=A;return e.color.darkGreen}};
                font-size: 10px;
                position: absolute;
                left: -15px;
                top: 15px;
                }
        }
    }
`,Yr=_e.ul`
    list-style-type: none;
    padding-left: 18px;

    li {
        position: relative;

        &::before {
            content: '◈';
            color: ${A=>{let{theme:e}=A;return e.color.darkGreen}};
            font-size: 10px;
            position: absolute;
            left: -15px;
            top: 5px;

            @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.laptop}}) {
                font-size: 8px;
                top: 7px;
            }
        }
    }
`,Nr=_e.button`
    background: none;
    border: none;
    color: ${A=>{let{theme:e}=A;return e.color.rune}};
    text-align: left;
    cursor: pointer;
    transition: filter 0.1s ease, transform 0.1s ease;
    color: ${A=>{let{theme:e}=A;return e.color.set}};
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

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.laptop}}) {
        font-size: 17px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: 11px;
    }
`,Vr=_e(Nr)`
    font-size: 13px;
    margin: 0;
    opacity: 0.9;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.laptop}}) {
        font-size: 11px;
        margin: 0 -3px;
    }
`,jr=()=>{const e=Ne(),t=ng("uniqueAndSet").content,n=eg(),g=n>1322,r=n>767,i=(0,A.useRef)({}),a=(0,A.useRef)({}),o=Zt(),[s,B]=(0,A.useState)(null),[l,c]=(0,A.useState)(null),[E,u]=(0,A.useState)("");if(!t||!t.content||!t.content.setItems)return(0,$n.jsx)(Wg,{});const Q=Object.values(t.content.setItems).filter((A=>{const e=A.name.toLowerCase().includes(E.toLowerCase()),t=A.type.toLowerCase().includes(E.toLowerCase()),n=A.category.toLowerCase().includes(E.toLowerCase()),g=A.props.some((A=>A.toLowerCase().includes(E.toLowerCase())));return e||t||n||g})),C=Q.reduce(((A,e)=>{const t=e.category;return A[t]||(A[t]=[]),A[t].push(e),A}),{});return(0,$n.jsxs)(Yg,{children:[!r&&(0,$n.jsx)(Ag,{}),(0,$n.jsxs)(Ar,{children:[(0,$n.jsx)(tr,{$color:e.color.set,children:"Set Items"})," are special items introduced in Diablo II. They are like ",(0,$n.jsx)(er,{to:"/uniques",children:"Unique Items"}),', in the way that every time you find the same item, it has the same attributes. However, in general, Set Items are a tad weaker than Unique Items, or so called "Uniques". This is because Set Items are each part of specific sets, and moreover, if you equip the entire set, you will gain an extra set of Bonus Affixes, hence the name "Set Items". Set Items are denoted by their name appearing in bright green. Here are all the Sets:']}),(0,$n.jsx)(Pr,{children:Object.entries(C).map(((A,e)=>{let[t,n]=A;return(0,$n.jsx)(Jr,{children:(0,$n.jsxs)("li",{children:[(0,$n.jsx)(Nr,{onClick:()=>(A=>{const e=i.current[A];e&&(e.scrollIntoView({behavior:"smooth"}),c(A),setTimeout((()=>{c(null)}),1e3))})(t),children:t}),(0,$n.jsx)(Yr,{children:g&&n.map(((A,e)=>(0,$n.jsx)("li",{children:(0,$n.jsx)(Vr,{onClick:()=>(A=>{const e=a.current[A];e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),B(A),setTimeout((()=>{B(null)}),1e3))})(A.name),children:A.name})},e)))})]})},e)}))}),(0,$n.jsx)(ur,{placeholder:"Search sets...",value:E,onChange:A=>u(A.target.value)}),0===Q.length?(0,$n.jsx)(pr,{text:"Ah, it seems your search has led to a dead end, my friend. Perhaps you should try a different path."}):Object.entries(C).map(((n,g)=>{let[B,c]=n;const u=t.content.setBonuses[B]||{};return(0,$n.jsx)("div",{children:(0,$n.jsx)(Eg,{children:(0,$n.jsxs)(ug,{children:[(0,$n.jsxs)("thead",{children:[(0,$n.jsx)(pg,{ref:A=>i.current[B]=A,children:(0,$n.jsxs)(dg,{colSpan:r?3:2,$highlight:l===B,children:["+\xa0",B,"\xa0+"]})}),(0,$n.jsxs)(pg,{$index:0,children:[(0,$n.jsx)(wg,{children:"Item"}),(0,$n.jsx)(wg,{children:"Properties"}),r&&(0,$n.jsx)(wg,{children:"Set Bonuses"})]})]}),(0,$n.jsx)("tbody",{children:c.map(((t,n)=>{var g,i,B,l;const Q=t.image.replace(/^\/images\//,"").replace(/\.(png|jpg|gif|jpeg)$/,""),C=yr[Q]||"/default_image.png";return(0,$n.jsxs)(A.Fragment,{children:[(0,$n.jsxs)(pg,{$index:n+1,ref:A=>a.current[t.name]=A,children:[(0,$n.jsxs)(Dg,{$color:e.color.set,$highlight:s===t.name,children:[(0,$n.jsx)(mg,{src:C,alt:t.name}),(0,$n.jsxs)("div",{style:{marginTop:"-15px"},children:[(0,$n.jsx)(Mg,{children:_g(t.name,o.pathname,E)}),(0,$n.jsx)(Rg,{children:_g(t.type,o.pathname,E)})]})]}),(0,$n.jsx)(Qg,{$highlight:s===t.name,children:t.props.map(((A,t,n)=>{const g=n.findIndex((A=>A.startsWith("Required Level:"))),r=A.startsWith("Required"),i=A.toLowerCase().includes("set items");return(0,$n.jsx)("div",{style:{color:i?e.color.set:t<=g?r?e.color.required:e.color.white:e.color.magic},children:_g(A,o.pathname,E)},t)}))}),r&&0===n&&(0,$n.jsxs)(Qg,{rowSpan:c.length,children:[u["Partial Set Bonus"]?(0,$n.jsxs)("div",{children:[(0,$n.jsx)(kg,{children:"Partial Set Bonus:"}),(0,$n.jsx)(bg,{children:null===(g=u["Partial Set Bonus"])||void 0===g?void 0:g.map(((A,e)=>(0,$n.jsx)(zg,{children:_g(A,o.pathname,E)},e)))})]}):null,(0,$n.jsxs)("div",{children:[(0,$n.jsx)(kg,{children:"Full Set Bonus:"}),(0,$n.jsx)(bg,{children:null===(i=u["Full Set Bonus"])||void 0===i?void 0:i.map(((A,e)=>(0,$n.jsx)(zg,{children:_g(A,o.pathname,E)},e)))})]})]})]}),!r&&n===c.length-1&&(0,$n.jsxs)(A.Fragment,{children:[(0,$n.jsx)(pg,{$index:0,children:(0,$n.jsx)(wg,{colSpan:2,children:"Set Bonuses"})}),(0,$n.jsx)(pg,{children:(0,$n.jsxs)(Qg,{colSpan:2,children:[(0,$n.jsxs)("div",{children:[(0,$n.jsx)(kg,{children:"Partial Set Bonus:"}),(0,$n.jsx)(bg,{children:null===(B=u["Partial Set Bonus"])||void 0===B?void 0:B.map(((A,e)=>(0,$n.jsx)(zg,{children:_g(A,o.pathname,E)},e)))})]}),(0,$n.jsxs)("div",{children:[(0,$n.jsx)(kg,{children:"Full Set Bonus:"}),(0,$n.jsx)(bg,{children:null===(l=u["Full Set Bonus"])||void 0===l?void 0:l.map(((A,e)=>(0,$n.jsx)(zg,{children:_g(A,o.pathname,E)},e)))})]})]})})]})]},t.name)}))})]})})},g)}))]})},Lr=t.p+"static/media/button_left.ba6eae1e51009952aa02.webp",Kr=t.p+"static/media/button_right.d9e7d43086808075ab94.webp",Zr=t.p+"static/media/button_mid.65362b851a1e01a4276d.webp";var Xr=t(8286);const Wr=_e.div`
    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tablet}}) {
        display: block;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 65px;
        background-color: #000000;
        z-index: 999;
        opacity: 0;
        visibility: hidden;

        ${A=>{let{$isVisible:e}=A;return e&&"\n            opacity: 1;\n            visibility: visible;\n        "}}
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        height: 50px;
    }
`,qr=_e.button`
    width: 220px;
    color: ${A=>{let{theme:e}=A;return e.color.gold}};
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 1);
    font-family: 'AvQest', sans-serif;
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: 
        url(${Lr}) left center no-repeat,
        url(${Kr}) right center no-repeat,
        url(${Zr}) center repeat-x;
    background-size: auto 100%, auto 100%, auto 100%;
    border: none;
    outline: none;
    cursor: pointer;
    position: fixed;
    bottom: 10px;
    right: 20px;
    z-index: 1001;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease, filter 0.3s ease;

    ${A=>{let{$isVisible:e}=A;return e&&"\n        opacity: 1;\n        visibility: visible;\n    "}}

    &:hover {
        filter: brightness(1.2);
    }

    &:active {
        transform: scale(0.99, 0.97);

        @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tablet}}) {
            transform: translateX(-50%) scale(0.99, 0.97);
        }
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tablet}}) {
        margin: 0;
        bottom: 4px;
        right: auto;
        left: 50%;
        transform: translateX(-50%);
    }
`,_r=_e.div`
    position: fixed;
    bottom: 16px;
    right: 27px;
    width: 226px;
    height: 48px;
    background: url(${Xr});
    background-size: auto 100%;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;

    ${A=>{let{$isVisible:e}=A;return e&&"\n        opacity: 1;\n        visibility: visible;\n    "}}

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tablet}}) {
        bottom: 8px;
        right: auto;
        left: 50%;
        transform: translateX(-50%);
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        bottom: 1px;
        right: auto;
        left: 50%;
        transform: translateX(-50%) scale(0.6);
    }
`,$r=()=>{const[e,t]=(0,A.useState)(!1),n=()=>{window.scrollY>window.innerHeight?t(!0):t(!1)};return(0,A.useEffect)((()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)})),[]),(0,$n.jsx)(Wr,{$isVisible:e,children:(0,$n.jsx)(_r,{$isVisible:e,children:(0,$n.jsx)(qr,{$isVisible:e,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:"scroll to the top"})})})};var Ai=t(5107),ei=t(8144);const ti=_e.a`
    position: fixed;
    bottom: ${A=>{let{$bottom:e}=A;return e||"auto"}};
    right: -200px;
    background-color: ${A=>{let{$color:e}=A;return e||"inherit"}};
    z-index: 9999;
    height: 62px;
    width: 260px;
    display: inline-flex;
    align-items: center;
    color: ${A=>{let{theme:e}=A;return e.color.white}};
    font-family: "Cookie", cursive;
    font-size: 30px;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 10px;
    filter: brightness(0.6);
    transition: transform 1s ease, filter 1s ease;
    cursor: pointer;

    &:hover {
        transform: translateX(${A=>{let{$translateX:e}=A;return e||"0px"}});
        filter: brightness(1.2);
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        bottom: ${A=>{let{$bottomPhone:e}=A;return e||"auto"}};
        right: -110px;
        height: 42px;
        width: 150px;
        font-size: 15px;
        transform: translateX(${A=>{let{$translateXPhone:e}=A;return e||"0px"}});
        text-decoration: underline;

        &:hover {
            filter: brightness(1.2);
            transform: translateX(${A=>{let{$translateXPhone:e}=A;return e||"0px"}});
        }
    }
`,ni=_e.img`
    width: 45px;
    margin: -2px 7px 0 -11px;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        width: 25px;
        margin: -2px 7px 0 -11px;
    }
`,gi=e=>{let{icon:t,text:n,href:g,$bottom:r,$bottomPhone:i,$color:a,$translateX:o,$translateXPhone:s}=e;const[B,l]=(0,A.useState)("0px"),c=(0,A.useRef)(null),E=eg()>767;(0,A.useEffect)((()=>{const A=A=>{c.current&&!c.current.contains(A.target)&&l("0px")};return"0px"!==B&&document.addEventListener("click",A),()=>{document.removeEventListener("click",A)}}),[B]);return(0,$n.jsxs)(ti,{ref:c,href:"0px"!==B?g:void 0,target:"_blank",rel:"noopener noreferrer",$bottom:r,$bottomPhone:i,$color:a,$translateX:E?o:"0px",$translateXPhone:B,onClick:A=>{E?window.open(g,"_blank"):"0px"===B?(A.preventDefault(),l(s)):window.open(g,"_blank")},children:[(0,$n.jsx)(ni,{src:t}),n]})};function ri(e){let{dataType:t}=e;const n=ng(t).status;return(0,A.useEffect)((()=>{"loading"===n&&window.scrollTo(0,0)}),[n]),null}const ii=function(){return(0,$n.jsxs)(hn,{children:[(0,$n.jsx)(tg,{}),(0,$n.jsx)(ri,{}),(0,$n.jsxs)(un,{children:[(0,$n.jsx)(cn,{path:"/runes",element:(0,$n.jsx)(nr,{dataType:"runeAndRuneword"})}),(0,$n.jsx)(cn,{path:"/runewords",element:(0,$n.jsx)(Tr,{dataType:"runeAndRuneword"})}),(0,$n.jsx)(cn,{path:"/uniques",element:(0,$n.jsx)(Or,{dataType:"uniqueAndSet"})}),(0,$n.jsx)(cn,{path:"/sets",element:(0,$n.jsx)(jr,{dataType:"uniqueAndSet"})}),(0,$n.jsx)(cn,{path:"/",element:(0,$n.jsx)(ln,{to:"/runes"})})]}),(0,$n.jsx)(gi,{icon:Ai,text:"Follow Me",href:"https://github.com/bartosz-kasprzyk",$bottom:"280px",$bottomPhone:"160px",$color:"#21262D",$translateX:"-110px",$translateXPhone:"-60px"}),(0,$n.jsx)(gi,{icon:ei,text:"Buy Me A Coffee",href:"https://buymeacoffee.com/bkasprzyk",$bottom:"200px",$bottomPhone:"100px",$color:"#9D590C",$translateX:"-170px",$translateXPhone:"-90px"}),(0,$n.jsx)($r,{})]})},ai=A=>{A&&A instanceof Function&&t.e(453).then(t.bind(t,6453)).then((e=>{let{getCLS:t,getFID:n,getFCP:g,getLCP:r,getTTFB:i}=e;t(A),n(A),g(A),r(A),i(A)}))},oi=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=Xe.apply(void 0,r([e],t,!1)),a="sc-global-".concat(GA(JSON.stringify(i))),o=new $e(i,a),s=function(e){var t=He(),n=A.useContext(Ye),g=A.useRef(t.styleSheet.allocateGSInstance(a)).current;return t.styleSheet.server&&B(g,e,t.styleSheet,n,t.stylis),A.useLayoutEffect((function(){if(!t.styleSheet.server)return B(g,e,t.styleSheet,n,t.stylis),function(){return o.removeStyles(g,t.styleSheet)}}),[g,e,t.styleSheet,n,t.stylis]),null};function B(A,e,t,n,r){if(o.isStatic)o.renderStyles(A,CA,t,r);else{var i=g(g({},e),{theme:DA(e,n,s.defaultProps)});o.renderStyles(A,i,t,r)}}return A.memo(s)})`
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
        color: ${A=>{let{theme:e}=A;return e.color.white}};
        font-family: "Ubuntu", sans-serif;
        -webkit-tap-highlight-color: transparent;
    }
`;n.createRoot(document.getElementById("root")).render((0,$n.jsx)(A.StrictMode,{children:(0,$n.jsxs)(Ve,{theme:{color:{white:"#DDDDDD",grey:{dark:"#979797",light:"#97979720"},silver:"#AAAAAA",gold:"#BD9B4E",highlight:"#D1AD665A",search:"#F8F412",rune:"#CA8120",unique:"#86735A",set:"#1B9718",darkGreen:"#135F11",required:"#9D4A3C",magic:"#4F53C5",value:"#8470ff",brown:"#885C02",black:{dark:"#000000",deep:"#0000009A",medium:"#0000007A",light:"#0000004A"}},breakpoint:{laptop:"1480px",tabletTwo:"1322px",tablet:"1170px",tabletPortrait:"990px",phoneTwo:"900px",phone:"767px",phonePortrait:"481px"},fontWeight:{regular:"400",medium:"500",semiBold:"600",bold:"700"},fontSize:{xs:"10px",sm:"13px",md:"14px",lg:"16px",xl:"18px",xl2:"20px",xl3:"22px",xl4:"24px",xl5:"28px",xl6:"36px",xl7:"48px",xl8:"64px"}},children:[(0,$n.jsx)(oi,{}),(0,$n.jsx)(ii,{})]})})),ai()})()})();
//# sourceMappingURL=main.f31fe196.js.map