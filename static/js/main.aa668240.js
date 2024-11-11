/*! For license information please see main.aa668240.js.LICENSE.txt */
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
`,Gn=_e.img`
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
`;var Tn=t(6168),yn=t(942);const Pn=_e.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) { 
        margin: -50px 0 60px;
    }
`,On=_e.ul`
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
`;var jn=t(7039),Ln=t(2019),Kn=t(7716),Zn=t(9357),Xn=t(6677),Wn=t(4221);const qn=t.p+"static/media/chatgem_blue.d4f3e971f2b517364dce.webp",_n=t.p+"static/media/chatgem_pink.9be57a50ece13cd2c7bb.webp";var $n=t(579);const Ar=()=>{const[e,t]=(0,A.useState)(!0),n=e?qn:_n;return(0,$n.jsxs)(Pn,{children:[(0,$n.jsxs)(On,{children:[(0,$n.jsx)("li",{children:(0,$n.jsx)(Jn,{to:"/runes",children:(0,$n.jsx)("img",{src:jn,alt:"Runes"})})}),(0,$n.jsx)("li",{children:(0,$n.jsx)(Jn,{to:"/runewords",children:(0,$n.jsx)("img",{src:Ln,alt:"Runewords"})})}),(0,$n.jsx)("li",{children:(0,$n.jsx)(Jn,{to:"/uniques",children:(0,$n.jsx)("img",{src:Kn,alt:"Uniques"})})}),(0,$n.jsx)("li",{children:(0,$n.jsx)(Jn,{to:"/sets",children:(0,$n.jsx)("img",{src:Zn,alt:"sets"})})})]}),(0,$n.jsx)(Yn,{src:Xn}),(0,$n.jsx)(Nn,{src:Wn}),(0,$n.jsx)(Vn,{src:n,onClick:()=>{t((A=>!A))},alt:"Chat Gem"})]})},er=()=>{const[e,t]=(0,A.useState)(window.innerWidth);return(0,A.useEffect)((()=>{const A=()=>{t(window.innerWidth)};return window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A)}}),[]),e},tr=()=>{const A=er()>767;return(0,$n.jsxs)(bn,{children:[(0,$n.jsx)(vn,{$position:"left"}),(0,$n.jsx)(vn,{}),(0,$n.jsxs)(kn,{to:"/runes","aria-label":"Diablo II and Archives Logo",children:[(0,$n.jsx)(Gn,{src:Tn}),(0,$n.jsx)(zn,{src:yn})]}),A&&(0,$n.jsx)(Ar,{})]})},nr=e=>{const[n,r]=(0,A.useState)({status:"loading",content:null});return(0,A.useEffect)((()=>{(async()=>{if(e)try{let A;if("runeAndRuneword"===e)A=await t.e(221).then(t.t.bind(t,221,19));else{if("uniqueAndSet"!==e)throw new Error("Invalid data type");A=await t.e(672).then(t.t.bind(t,7672,19))}setTimeout((()=>{r({status:"success",content:A.default})}),800)}catch(A){console.error("Error loading content:",A),r({status:"error",content:null})}})()}),[e]),n},rr=t.p+"static/media/box_top_left.2d8b7fbb8564b77f6ebb.webp",gr=t.p+"static/media/box_top_right.548ff05320d163be9566.webp",ir=t.p+"static/media/box_bottom_left.f3b784dc5e220d4d45b9.webp",ar=t.p+"static/media/box_bottom_right.30df33f706e3cceb5d4d.webp",or=t.p+"static/media/box_top.b98ce4df90bfb72eab63.webp",sr=t.p+"static/media/box_bottom.15bc793b5736cf6b3df6.webp",lr=t.p+"static/media/box_left.87966edf7bad9b960430.webp",Br=t.p+"static/media/box_right.87966edf7bad9b960430.webp",cr=t.p+"static/media/box_background.3c5aa480a3ef63fc5bc1.webp",ur=_e.div`
    display: flex;
    justify-content: center;
`,Er=_e.table`
    border-collapse: collapse;
    margin: 20px 0 100px;
    width: 100%;
`,Qr=_e.th`
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
    color: ${A=>{let{theme:e}=A;return e.color.white.soft}};
    transition: background-color 1s ease;

    ${A=>{let{$highlight:e,theme:t}=A;return e&&`\n        background-color: ${t.color.highlight};\n    `}}

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        padding: 5px;
    }
`,Cr=_e(Qr)`
    color: ${A=>{let{theme:e}=A;return e.color.magic}};
`,wr=_e.th`
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
    color: ${A=>{let{theme:e}=A;return e.color.brown}};
    background: ${A=>{let{theme:e}=A;return e.color.black.light}};
    font-size: ${A=>{let{theme:e}=A;return e.fontSize.xl2}};

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.l}};
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.s}};
    }
`,dr=_e(wr)`
    color: ${A=>{let{theme:e}=A;return e.color.set}};
    background: ${A=>{let{theme:e}=A;return e.color.black.deep}};
    font-size: ${A=>{let{theme:e}=A;return e.fontSize.xl5}};
    margin: 20px 5px -10px;
    transition: filter 1s ease, transform 1s ease, background-color 1s ease;

    ${A=>{let{$highlight:e,theme:t}=A;return e&&`\n        background-color: ${t.color.highlight};\n    `}}

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tablet}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.xl4}};
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.xl}};
    }
`,Dr=_e.th`
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
`,pr=_e.tr`
    font-family: 'AvQest', sans-serif;
    font-size: ${A=>{let{theme:e}=A;return e.fontSize.xl}};
    position: relative;
    z-index: 0;
    background: ${A=>{let{$index:e,theme:t}=A;return"number"===typeof e?e%2===0?t.color.black.medium:t.color.black.light:t.color.black.deep}};
    background-image: url(${cr});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    background-blend-mode: overlay;
    transition: background-color 1s ease;

    ${A=>{let{$highlight:e,theme:t}=A;return e&&`\n        background-color: ${t.color.highlight};\n    `}}

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tablet}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.l}};
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.s}};
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.xxs}};
    }
`,hr=_e.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
`,Ir=_e.span`
    margin-right: 5px;
`,fr=_e.img`
    width: 35px;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        width: 25px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        width: 18px;
    }
`,mr=_e.img`
    width: 50px;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        width: 30px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        width: 23px;
    }
`,Mr=_e.img`
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
`,Rr=_e.span`
    display: block;
    text-align: center;
    margin: 0;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.m}};
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.xs}};
    }
`,Ur=_e.span`
    display: block;
    text-align: center;
    font-size: ${A=>{let{theme:e}=A;return e.fontSize.l}};
    margin: 0;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tablet}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.m}};
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.xs}};
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.xxs}};
    }
`,Sr=_e.div`
    color: ${A=>{let{theme:e}=A;return e.color.grey.dark}};
    border-top: 2px solid ${A=>{let{theme:e}=A;return e.color.grey.light}};
    margin: 5px 30px 0;
    padding-top: 5px;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tablet}}) {
        margin: 5px 10px 0;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        border-top: 1px solid ${A=>{let{theme:e}=A;return e.color.grey.light}};
        margin: 5px 5px 0;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        margin: 5px 0 0;
    }
`,xr=_e.span`
    color: ${A=>{let{theme:e}=A;return e.color.value}};
    padding: 3px 8px 1px;
    filter: opacity(0.8);
    background: 
        url(${rr}) top left no-repeat,
        url(${gr}) top right no-repeat,
        url(${ir}) bottom left no-repeat,
        url(${ar}) bottom right no-repeat,
        url(${or}) top repeat-x,
        url(${sr}) bottom repeat-x,
        url(${lr}) left repeat-y,
        url(${Br}) right repeat-y,
        url(${cr}) center center repeat;
`,Fr=_e.span`
    color: ${A=>{let{theme:e}=A;return e.color.grey.dark}};;
    font-style: italic;
`,Hr=_e.span`
    color: ${A=>{let{theme:e}=A;return e.color.unique}};
    margin-right: 5px;
`,br=_e.span`
    color: ${A=>{let{theme:e}=A;return e.color.darkGreen}};
    font-weight: ${A=>{let{theme:e}=A;return e.fontWeight.bold}};
    margin: 0 5px;
`,kr=_e.span`
    color: ${A=>{let{theme:e}=A;return e.color.rune}};
`,Gr=_e.h2`
    color: ${A=>{let{theme:e}=A;return e.color.white.soft}};

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        padding-top: 5px;
    }
`,zr=_e.ul`
    list-style-type: none;
    padding: 0;
    padding-bottom: 60px;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        padding-bottom: 15px;
    }
`,vr=_e.li`
    color: ${A=>{let{theme:e}=A;return e.color.unique}};
`,Tr=_e.span`
    color: ${A=>{let{theme:e}=A;return e.color.black.dark}};
    background-color: ${A=>{let{theme:e}=A;return e.color.search}};
    padding: 0 2px;
    border-radius: 3px;
`;var yr=t(8967),Pr=t(665),Or=t(9309),Jr=t(4355),Yr=t(9565),Nr=t(9601),Vr=t(2923),jr=t(5513),Lr=t(9037),Kr=t(4323),Zr=t(5914),Xr=t(820),Wr=t(5221),qr=t(4117),_r=t(8483),$r=t(7558),Ag=t(5668),eg=t(7520),tg=t(2605),ng=t(6196),rg=t(1515),gg=t(620),ig=t(9876),ag=t(3490),og=t(6690),sg=t(1029),lg=t(8780),Bg=t(3155),cg=t(8820),ug=t(9947),Eg=t(3173),Qg=t(5635),Cg=t(823);const wg={El:{image:yr,runes:[],gem:void 0},Eld:{image:Pr,runes:["El","El","El"],gem:void 0},Tir:{image:Or,runes:["Eld","Eld","Eld"],gem:void 0},Nef:{image:Jr,runes:["Tir","Tir","Tir"],gem:void 0},Eth:{image:Yr,runes:["Nef","Nef","Nef"],gem:void 0},Ith:{image:Nr,runes:["Eth","Eth","Eth"],gem:void 0},Tal:{image:Vr,runes:["Ith","Ith","Ith"],gem:void 0},Ral:{image:jr,runes:["Tal","Tal","Tal"],gem:void 0},Ort:{image:Lr,runes:["Ral","Ral","Ral"],gem:void 0},Thul:{image:Kr,runes:["Ort","Ort","Ort"],gem:void 0},Amn:{image:Zr,runes:["Thul","Thul","Thul"],gem:{name:"Chipped Topaz",image:t(870)}},Sol:{image:Xr,runes:["Amn","Amn","Amn"],gem:{name:"Chipped Amethyst",image:t(6381)}},Shael:{image:Wr,runes:["Sol","Sol","Sol"],gem:{name:"Chipped Sapphire",image:t(5818)}},Dol:{image:qr,runes:["Shael","Shael","Shael"],gem:{name:"Chipped Ruby",image:t(4756)}},Hel:{image:_r,runes:["Dol","Dol","Dol"],gem:{name:"Chipped Emerald",image:t(806)}},Io:{image:$r,runes:["Hel","Hel","Hel"],gem:{name:"Chipped Diamond",image:t(3038)}},Lum:{image:Ag,runes:["Io","Io","Io"],gem:{name:"Flawed Topaz",image:t(7468)}},Ko:{image:eg,runes:["Lum","Lum","Lum"],gem:{name:"Flawed Amethyst",image:t(8931)}},Fal:{image:tg,runes:["Ko","Ko","Ko"],gem:{name:"Flawed Sapphire",image:t(5060)}},Lem:{image:ng,runes:["Fal","Fal","Fal"],gem:{name:"Flawed Ruby",image:t(3934)}},Pul:{image:rg,runes:["Lem","Lem","Lem"],gem:{name:"Flawed Emerald",image:t(8528)}},Um:{image:gg,runes:["Pul","Pul"],gem:{name:"Flawed Diamond",image:t(8844)}},Mal:{image:ig,runes:["Um","Um"],gem:{name:"Topaz",image:t(7250)}},Ist:{image:ag,runes:["Mal","Mal"],gem:{name:"Amethyst",image:t(6529)}},Gul:{image:og,runes:["Ist","Ist"],gem:{name:"Sapphire",image:t(2182)}},Vex:{image:sg,runes:["Gul","Gul"],gem:{name:"Ruby",image:t(544)}},Ohm:{image:lg,runes:["Vex","Vex"],gem:{name:"Emerald",image:t(4666)}},Lo:{image:Bg,runes:["Ohm","Ohm"],gem:{name:"Diamond",image:t(3042)}},Sur:{image:cg,runes:["Lo","Lo"],gem:{name:"Flawless Topaz",image:t(6776)}},Ber:{image:ug,runes:["Sur","Sur"],gem:{name:"Flawless Amethyst",image:t(2183)}},Jah:{image:Eg,runes:["Ber","Ber"],gem:{name:"Flawless Sapphire",image:t(0)}},Cham:{image:Qg,runes:["Jah","Jah"],gem:{name:"Flawless Ruby",image:t(7722)}},Zod:{image:Cg,runes:["Cham","Cham"],gem:{name:"Flawless Emerald",image:t(1204)}}},dg=_e.div`
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
`,Dg=_e.button`
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
`,pg=_e.img`
    width: 100%;
    height: 60%;
    object-fit: cover;
    display: block;
    opacity: ${A=>{let{$opacity:e}=A;return e||"inherit"}};
`,hg=_e.div`
    font-family: 'AvQest', sans-serif;
    font-size: ${A=>{let{theme:e}=A;return e.fontSize.m}};
    color: ${A=>{let{theme:e}=A;return e.color.rune}};
    text-align: center;
    margin-top: 5px;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.s}};
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.xs}};
    }
`,Ig=_e.div`
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
`;var fg=t(7773),mg=t(1842),Mg=t(3551),Rg=t(5764);const Ug=_e.div`
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
`,Sg=_e.img`
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
`,xg=[fg,mg,Mg,Rg],Fg=e=>{let{dataType:t}=e;const[n,r]=(0,A.useState)(xg[0]),g=nr(t);return(0,A.useEffect)((()=>{if("loading"!==g.status)return void r(xg[xg.length-1]);let A=0;const e=setInterval((()=>{A<xg.length?(r(xg[A]),A++):clearInterval(e)}),200);return()=>clearInterval(e)}),[g.status]),(0,$n.jsx)(Ug,{children:(0,$n.jsx)(Sg,{src:n,alt:"Loading"})})},Hg=Object.keys(wg),bg=e=>{let{text:t,currentPath:n,searchQuery:r}=e;const g=/(?<!Damage:\s|\bDefense:\s|\bAdds\s)\b\d+-\d+\b/g,i=new RegExp(`\\b(${Hg.join("|")})\\b`,"gi"),a=t.split("\n"),o=r?new RegExp(`(${s=r,s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"gi"):null;var s;return a.map(((e,t)=>{const a=e.split(/(\*Ladder\u00A0only\*|\(Weapon Version\)|\(Shield Version\)|\(Armor Version\)|\(Sword Version\)|(?<!Adds\s)\b\d+-\d+\b|Damage:\s\d+-\d+|Defense:\s\d+-\d+)/g);return(0,$n.jsxs)(A.Fragment,{children:[a.map(((A,e)=>"+Ladder\xa0only+"===A?(0,$n.jsx)(br,{children:A},e):"(Weapon Version)"===A||"(Shield Version)"===A||"(Armor Version)"===A||"(Sword Version)"===A?(0,$n.jsx)(Fr,{children:A},e):"/runewords"!==n&&"/uniques"!==n&&"/sets"!==n||!g.test(A)?"/runewords"===n&&i.test(A)?A.split(i).map(((A,e)=>{const t=Hg.some((e=>e.toLowerCase()===A.toLowerCase()));return(r&&o?A.split(o):[A]).map(((A,n)=>{const g=A.toLowerCase()===(null===r||void 0===r?void 0:r.toLowerCase()),i=`${e}-${n}`;return t?g?(0,$n.jsx)(kr,{children:(0,$n.jsx)(Tr,{children:A})},i):(0,$n.jsx)(kr,{children:A},i):A}))})):o&&o.test(A)?A.split(o).map(((A,e)=>A.toLowerCase()===(null===r||void 0===r?void 0:r.toLowerCase())?(0,$n.jsx)(Tr,{children:A},e):A)):A:(0,$n.jsx)(xr,{children:A},e))),(0,$n.jsx)("br",{})]},t)}))},kg=_e.p`
    color: ${A=>{let{theme:e}=A;return e.color.white.soft}};
    font-size: ${A=>{let{theme:e}=A;return e.fontSize.xl}};

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.m}};
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.xs}};
    }
`,Gg=_e(Mn)`
    color: ${A=>{let{theme:e}=A;return e.color.rune}};
    transition: filter 0.3s ease;

    &:hover {
        filter: brightness(1.5);
    }
`,zg=_e.span`
    color: ${A=>{let{$color:e}=A;return e||"inherit"}};
    font-weight: ${A=>{let{theme:e}=A;return e.fontWeight.bold}};
`;var vg,Tg;function yg(){return yg=Object.assign?Object.assign.bind():function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(A[n]=t[n])}return A},yg.apply(null,arguments)}function Pg(e,t){let{title:n,titleId:r,...g}=e;return A.createElement("svg",yg({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",ref:t,"aria-labelledby":r},g),n?A.createElement("title",{id:r},n):null,vg||(vg=A.createElement("g",{clipPath:"url(#a)"},A.createElement("path",{fill:"#aaa",d:"M14 12.94 10.16 9.1c1.25-1.76 1.1-4.2-.48-5.78a4.49 4.49 0 0 0-6.36 0 4.49 4.49 0 0 0 0 6.36 4.486 4.486 0 0 0 5.78.48L12.94 14 14 12.94ZM4.38 8.62a3 3 0 0 1 0-4.24 3 3 0 0 1 4.24 0 3 3 0 0 1 0 4.24 3 3 0 0 1-4.24 0Z"}))),Tg||(Tg=A.createElement("defs",null,A.createElement("clipPath",{id:"a"},A.createElement("path",{fill:"#aaa",d:"M0 0h16v16H0z"})))))}const Og=A.forwardRef(Pg),Jg=(t.p,_e.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 3px;
`),Yg=_e.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px solid #885C025A;
  transition: border-bottom 300ms ease;

  &:hover {
    border-bottom: 1px solid #C88C0E5A;
    }
`,Ng=_e(Og)`
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
`,Vg=_e.input`
  border: none;
  outline: none;
  padding: 8px;
  font-size: ${A=>{let{theme:e}=A;return e.fontSize.xl}};
  background: transparent;
  color: inherit;

  @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
    width: 150px;
    padding: 5px;
    font-size: ${A=>{let{theme:e}=A;return e.fontSize.l}};
  }

  @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
    width: 130px;
    padding: 3px;
    font-size: ${A=>{let{theme:e}=A;return e.fontSize.m}};
  }
`,jg=_e.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: ${A=>{let{theme:e}=A;return e.color.brown}};
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;

  ${Vg}:focus + & {
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
`,Lg=A=>{let{placeholder:e,value:t,onChange:n}=A;return(0,$n.jsx)(Jg,{children:(0,$n.jsxs)(Yg,{children:[(0,$n.jsx)(Ng,{}),(0,$n.jsx)(Vg,{type:"text",placeholder:e,value:t,onChange:n}),(0,$n.jsx)(jg,{})]})})},Kg=_e.div`
    margin: auto 20%;
`,Zg=_e.div`
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
`,Xg=_e.p`
    font-size: ${A=>{let{theme:e}=A;return e.fontSize.xl}};
    color: ${A=>{let{theme:e}=A;return e.color.silver}};
    margin: 0;

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) { 
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.m}};
    }
`,Wg=_e.img`
    width: 50px;

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) { 
        width: 30px;
    }

    @media(max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) { 
        width: 30px;
        margin-left: -15px;
    }
`,qg=t.p+"static/media/Decard_Cain.257ed3bca2cd601f2b11.webp",_g=A=>{let{text:e}=A;return(0,$n.jsx)("main",{children:(0,$n.jsxs)(Kg,{children:[(0,$n.jsx)(Zg,{children:(0,$n.jsx)(Xg,{children:e})}),(0,$n.jsx)(Wg,{src:qg})]})})},$g=_e.footer`
    display: flex;
    justify-content: center;
    margin: 100px auto -30px;
    padding: 30px 0 0;
    border-top: 2px solid ${A=>{let{theme:e}=A;return e.color.grey.light}};
    color: ${A=>{let{theme:e}=A;return e.color.grey.dark}};
    font-size: ${A=>{let{theme:e}=A;return e.fontSize.m}};
    font-family: 'AvQest', sans-serif;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tablet}}) {
        margin: 80px auto 50px;
        padding-top: 20px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.xs}};
        margin: 60px auto -10px;
    }
`,Ai=_e.img`
    width: 150px;
    height: 150px;
    opacity: 0.3;
    margin-top: 20px;
    transition: opacity 0.2s linear, transform 0.2s linear;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.tablet}}) {
        width: 120px;
        height: 120px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        width: 100px;
        height: 100px;
        margin-top: 10px;
        margin-right: 10px;
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
        display: none;
    }

    &:hover {
        opacity: 0.5;
        transform: scale(1.01);
    }
`,ei=_e.div`
    justify-content: center;
    text-align: center;
`,ti=_e.sup`
    font-size: ${A=>{let{theme:e}=A;return e.fontSize.xs}};
    vertical-align: super;
    top: 3px;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.xxs}};
    }
`,ni=_e(ei)`
    margin-top: 5px;
    
    ul {
        list-style-type: none;
        padding: 0;
        margin-top: 0; 
    }

    li {
        margin: 2px 0;
    }

    a {
        color: ${A=>{let{theme:e}=A;return e.color.unique}};
        text-decoration: none;
        transition: filter 0.2s linear;
    }

    a:hover {
        filter: brightness(1.5);
    }
`,ri=_e.h4`
    margin-bottom: 0;
`;var gi=t(2311);const ii=()=>(0,$n.jsxs)($g,{children:[(0,$n.jsx)("a",{href:"https://github.com/bartosz-kasprzyk",children:(0,$n.jsx)(Ai,{src:gi,alt:"Author's logo linking to his GitHub profile",title:"Bartosz Kasprzyk's GitHub Profile"})}),(0,$n.jsxs)("div",{children:[(0,$n.jsxs)(ei,{children:["This page is a fan project and is not affiliated with, endorsed, or approved by Blizzard Entertainment",(0,$n.jsx)(ti,{children:"\xae"}),". ",(0,$n.jsx)("br",{}),"All Diablo II assets, trademarks, and copyrights are the property of Blizzard Entertainment",(0,$n.jsx)(ti,{children:"\xae"}),". ",(0,$n.jsx)("br",{})]}),(0,$n.jsxs)(ni,{children:[(0,$n.jsx)(ri,{children:"Created by:"}),(0,$n.jsx)("a",{href:"https://github.com/bartosz-kasprzyk",target:"_blank",rel:"noopener noreferrer",children:"Bartosz Kasprzyk"}),(0,$n.jsx)("br",{}),(0,$n.jsx)(ri,{children:"Credits:"}),(0,$n.jsxs)("ul",{children:[(0,$n.jsx)("li",{children:(0,$n.jsx)("a",{href:"https://diablo2.blizzard.com/en-gb/",target:"_blank",rel:"noopener noreferrer",children:"D2R Official Website"})}),(0,$n.jsx)("li",{children:(0,$n.jsx)("a",{href:"https://diablo2.io/",target:"_blank",rel:"noopener noreferrer",children:"D2R Database, Marketplace & Community"})}),(0,$n.jsx)("li",{children:(0,$n.jsx)("a",{href:"https://diablo.fandom.com/wiki/Diablo_Wiki",target:"_blank",rel:"noopener noreferrer",children:"Diablo Wiki"})})]})]})]})]}),ai=e=>{let{dataType:t}=e;const n=Ne(),r=nr(t).content,g=er()>767,i=(0,A.useRef)({}),[a,o]=(0,A.useState)(null),s=Zt(),[l,B]=(0,A.useState)("");if(!r)return(0,$n.jsx)(Fg,{dataType:t});const c=Object.keys(r.content.runesTable).filter((A=>A.startsWith("rune"))).map((A=>r.content.runesTable[A])).map(((A,e)=>({data:A,originalIndex:e+1}))).filter((A=>{let{data:e}=A;const t=e[0].toLowerCase().includes(l.toLowerCase()),n=e.slice(1).some((A=>A.toLowerCase().includes(l.toLowerCase())));return t||n}));return(0,$n.jsxs)(Ig,{children:[!g&&(0,$n.jsx)(Ar,{}),(0,$n.jsxs)(kg,{children:[(0,$n.jsx)(zg,{$color:"#CA8120",children:"Runes"})," are stones that enhance items with socketed slots. They add various properties depending on the item type. When inserted in the correct order, they form ",(0,$n.jsx)(Gg,{to:"/runewords",children:"runewords"})," that give items new properties. Here is a list of all runes:"]}),(0,$n.jsx)(dg,{children:Object.keys(wg).map((A=>(0,$n.jsxs)(Dg,{onClick:()=>(A=>{if(i.current[A]){const e=i.current[A];e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),o(A),setTimeout((()=>{o(null)}),1e3))}})(A),children:[(0,$n.jsx)(pg,{src:wg[A].image,alt:`${A} Rune`,title:`${A} Rune`}),(0,$n.jsx)(hg,{children:A})]},A)))}),(0,$n.jsx)(Lg,{placeholder:"Search runes...",value:l,onChange:A=>B(A.target.value)}),0===c.length?(0,$n.jsx)(_g,{text:"Ah, it seems your search has led to a dead end, my friend. Perhaps you should try a different path."}):(0,$n.jsx)(ur,{children:(0,$n.jsxs)(Er,{children:[(0,$n.jsx)("thead",{children:(0,$n.jsxs)(pr,{$index:0,children:[(0,$n.jsx)(wr,{colSpan:g?2:1,children:"Rune"}),(0,$n.jsx)(wr,{children:g?"Ingredients":"Ingr."}),(0,$n.jsx)(wr,{children:"Properties"})]})}),(0,$n.jsx)("tbody",{children:c.map(((A,e)=>{var t,r,o,B,c,u;let{data:E,originalIndex:Q}=A;return(0,$n.jsxs)(pr,{id:`rune-${E[0]}`,ref:A=>i.current[E[0]]=A,$highlight:a===E[0],$index:e+1,children:[g&&(0,$n.jsxs)(Dr,{$color:n.color.unique,children:["#",Q]}),(0,$n.jsxs)(Qr,{children:[(0,$n.jsx)(kr,{children:bg({text:E[0],currentPath:s.pathname,searchQuery:l})}),(0,$n.jsx)(mr,{src:wg[E[0]].image,alt:`${E[0]} Rune`,title:`${E[0]} Rune`})]}),(0,$n.jsx)(Qr,{children:"El"===E[0]?"-":g?(0,$n.jsxs)($n.Fragment,{children:[wg[E[0]].runes.map(((A,e)=>(0,$n.jsx)(fr,{src:wg[A].image,alt:`${A} Rune`,title:`${A} Rune`},e))),wg[E[0]].gem&&(0,$n.jsx)(fr,{src:null===(t=wg[E[0]].gem)||void 0===t?void 0:t.image,alt:null===(r=wg[E[0]].gem)||void 0===r?void 0:r.name,title:null===(o=wg[E[0]].gem)||void 0===o?void 0:o.name})]}):(0,$n.jsxs)($n.Fragment,{children:[(0,$n.jsxs)(hr,{children:[(0,$n.jsxs)(Ir,{children:[wg[E[0]].runes.length,"x"]}),(0,$n.jsx)(fr,{src:wg[wg[E[0]].runes[0]].image,alt:`${wg[E[0]].runes[0]} Rune`,title:`${wg[E[0]].runes[0]} Rune`})]}),wg[E[0]].gem&&(0,$n.jsxs)(hr,{children:[(0,$n.jsx)(Ir,{children:"1x"}),(0,$n.jsx)(fr,{src:null===(B=wg[E[0]].gem)||void 0===B?void 0:B.image,alt:null===(c=wg[E[0]].gem)||void 0===c?void 0:c.name,title:null===(u=wg[E[0]].gem)||void 0===u?void 0:u.name})]})]})}),(0,$n.jsxs)(Qr,{children:[(0,$n.jsx)(Hr,{children:"Weapon:"}),bg({text:E[1],currentPath:s.pathname,searchQuery:l}),(0,$n.jsx)(Hr,{children:"Helmet/Armor:"}),bg({text:E[2],currentPath:s.pathname,searchQuery:l}),(0,$n.jsx)(Hr,{children:"Shield:"}),bg({text:E[3],currentPath:s.pathname,searchQuery:l}),(0,$n.jsx)(Sr,{children:(g?"Required Character Level: ":"Req Clvl: ")+E[4]})]})]},e)}))})]})}),(0,$n.jsx)(ii,{})]})};var oi,si=t(9103);function li(){return li=Object.assign?Object.assign.bind():function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(A[n]=t[n])}return A},li.apply(null,arguments)}function Bi(e,t){let{title:n,titleId:r,...g}=e;return A.createElement("svg",li({xmlns:"http://www.w3.org/2000/svg",width:"512.000000pt",height:"512.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet",ref:t,"aria-labelledby":r},g),n?A.createElement("title",{id:r},n):null,oi||(oi=A.createElement("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"#ddd",stroke:"none"},A.createElement("path",{d:"M3025 4798 c-27 -10 -497 -380 -573 -452 -19 -17 -40 -44 -49 -60 -18 -34 -19 -116 -2 -148 36 -67 380 -577 405 -600 62 -56 167 -57 226 -1 47 45 61 79 56 142 -4 50 -13 70 -86 181 -67 103 -78 126 -64 128 29 5 251 -72 356 -122 228 -110 460 -301 617 -511 397 -528 446 -1250 123 -1827 -246 -438 -674 -746 -1169 -840 -171 -32 -439 -32 -610 0 -704 133 -1243 686 -1362 1395 -11 69 -17 158 -17 272 1 255 39 439 141 675 56 129 60 179 19 240 -50 76 -143 99 -226 58 -41 -21 -50 -33 -95 -123 -100 -200 -165 -448 -187 -712 -27 -331 42 -703 189 -1013 171 -362 464 -684 806 -884 376 -221 818 -319 1237 -276 805 84 1483 629 1735 1395 122 369 134 767 35 1149 -34 134 -61 205 -134 361 -195 412 -536 754 -951 955 -117 57 -323 132 -397 146 -21 3 -38 9 -38 13 0 4 47 47 105 94 57 47 111 97 120 111 39 58 31 147 -18 203 -51 58 -120 77 -192 51z"}))))}const ci=A.forwardRef(Bi),ui=(t.p,_e.div`
    position: fixed;
    top: 19%;
    left: ${A=>{let{$isOpen:e}=A;return e?"-10px":"-175px"}};
    width: 190px;
    height: auto;
    background: ${A=>{let{theme:e}=A;return e.color.black.deep}};
    background-image: url(${cr});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    background-blend-mode: overlay;
    border: 10px solid transparent;
    border-image: url(${si}) 30 stretch;
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
`),Ei=_e.div`
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
`,Qi=_e.img`
    position: absolute;
    right: ${A=>{let{$isOpen:e}=A;return e?"-15px":"-29px"}};
    top: 45%;
    transform: translateY(-50%);
    padding: 20px 0;
    cursor: pointer;
    width: 30px;
    transform: ${A=>{let{$isOpen:e}=A;return e?"rotate(180deg)":"rotate(0deg)"}};
`,Ci=_e.span`
    display: block;
    font-family: 'AvQest', sans-serif;
    font-size: ${A=>{let{theme:e}=A;return e.fontSize.xl2}};
    padding: 4px;
    padding-bottom: 0;
    text-align: center;
    
    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.xl}};
        padding-left: 15px;
    }
`,wi=_e.button`
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
`,di=_e.img`
    width: 100%;
    height: 60%;
    object-fit: cover;
    display: block;
    opacity: ${A=>{let{$opacity:e}=A;return e}};

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
`,Di=_e.div`
    font-family: 'AvQest', sans-serif;
    font-size: ${A=>{let{theme:e}=A;return e.fontSize.m}};
    color: ${A=>{let{theme:e}=A;return e.color.rune}};
    text-align: center;
    margin-top: 5px;
    opacity: ${A=>{let{$opacity:e}=A;return e}};

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        margin-top: 2px;
    }
`,pi=(_e.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`,_e(ci)`
    width: 18px;
    height: 18px;
    margin: 3px 10px -3px 0;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        width: 14px;
        height: 14px;
        margin-right: 7px;
    }
`),hi=_e.button`
    grid-column: span 3;
    font-family: 'AvQest', sans-serif;
    font-size: ${A=>{let{theme:e}=A;return e.fontSize.xl2}};
    padding: 7px;
    margin: 2px 7px;
    background-image: url(${cr});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    color: ${A=>{let{theme:e}=A;return e.color.white.soft}};
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
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.l}};
    }
`;var Ii=t(8991),fi=t(5858);const mi=e=>{let{dataType:t}=e;const n=Ne(),r=nr(t).content,g=er()>767,i=(0,A.useRef)({}),a=Zt(),[o,s]=(0,A.useState)(""),[l,B]=(0,A.useState)([]),[c,u]=(0,A.useState)(!1),[E,Q]=(0,A.useState)(!1);if(!r)return(0,$n.jsx)(Fg,{dataType:t});const C=Object.keys(r.content.runewordsTable).filter((A=>A.startsWith("runeword"))).map((A=>r.content.runewordsTable[A])).filter((A=>A.some((A=>A.toLowerCase().includes(o.toLowerCase()))))),w=l.length>0?C.filter((A=>A[2].split(/\s*\+\s*/).every((A=>l.includes(A))))):C;return(0,$n.jsxs)(Ig,{children:[!g&&(0,$n.jsx)(Ar,{}),(0,$n.jsxs)(kg,{children:[(0,$n.jsx)(zg,{$color:n.color.unique,children:"Runewords"})," are combinations of several different ",(0,$n.jsx)(Gg,{to:"/runes",children:"runes"})," designed to create powerful weapons or armor. The correct arrangement of runes in socketed items not only provides basic attributes but also bonus effects that enhance the item's power. Most of the most important weapons and armor in the game come from runewords. Many of these are very difficult to obtain due to the rare appearance of runes at higher levels. Besides the runes, you also need to find the appropriate item. It is worth mentioning that runewords that deal high damage are best combined with items that also have a high base attack rating. Experienced players spend a lot of time searching for the right items and runes to ultimately create their desired equipment."]}),(0,$n.jsxs)(ui,{$isOpen:c,children:[(0,$n.jsx)(Qi,{src:E?fi:Ii,$isOpen:c,onMouseEnter:()=>Q(!0),onMouseLeave:()=>Q(!1),onClick:()=>{u(!c)}}),(0,$n.jsx)(Ci,{children:"Filter by runes"}),(0,$n.jsxs)(Ei,{children:[Object.keys(wg).map((A=>(0,$n.jsxs)(wi,{$isLargeScreen:g,onClick:()=>{return e=A,void B((A=>A.includes(e)?A.filter((A=>A!==e)):[...A,e]));var e},children:[(0,$n.jsx)(di,{src:wg[A].image,alt:`${A} Rune`,title:`${A} Rune`,$opacity:l.includes(A)?1:.2}),(0,$n.jsx)(Di,{$opacity:l.includes(A)?1:.4,children:A})]},A))),(0,$n.jsxs)(hi,{onClick:()=>{B([])},children:[(0,$n.jsx)(pi,{}),"Reset"]})]})]}),(0,$n.jsx)(Lg,{placeholder:"Search runewords...",value:o,onChange:A=>s(A.target.value)}),0===w.length?l.length>0?(0,$n.jsx)(_g,{text:"Ah, it seems the runes you possess do not create anything formidable, my friend. Perhaps you should seek out more runes to reveal greater secrets."}):(0,$n.jsx)(_g,{text:"Ah, it seems your search has led to a dead end, my friend. Perhaps you should try a different path."}):(0,$n.jsx)(ur,{children:(0,$n.jsxs)(Er,{children:[(0,$n.jsx)("thead",{children:(0,$n.jsxs)(pr,{$index:0,children:[(0,$n.jsx)(wr,{children:"Runeword"}),g&&(0,$n.jsx)(wr,{children:"Base"}),g&&(0,$n.jsx)(wr,{children:"Runes"}),(0,$n.jsx)(wr,{children:"Properties"})]})}),(0,$n.jsx)("tbody",{children:w.map(((A,e)=>(0,$n.jsxs)(pr,{$index:e+1,ref:e=>i.current[A[0]]=e,children:[(0,$n.jsxs)(Dr,{$color:n.color.unique,children:[bg({text:A[0],currentPath:a.pathname,searchQuery:o}),!g&&(0,$n.jsxs)("div",{style:{color:n.color.white.soft},children:[(0,$n.jsx)("small",{children:bg({text:A[2],currentPath:a.pathname,searchQuery:o})}),(0,$n.jsx)("div",{style:{fontSize:"0.85em",paddingTop:"10px",opacity:.7},children:bg({text:A[1],currentPath:a.pathname,searchQuery:o})})]})]}),g&&(0,$n.jsx)(Qr,{style:{opacity:.7},children:bg({text:A[1],currentPath:a.pathname,searchQuery:o})}),g&&(0,$n.jsx)(Qr,{children:bg({text:A[2],currentPath:a.pathname,searchQuery:o})}),(0,$n.jsx)(Cr,{children:bg({text:A[3],currentPath:a.pathname,searchQuery:o})})]},e)))})]})}),(0,$n.jsx)(ii,{})]})};const Mi=function(A){let e={};return A.keys().forEach((t=>{const n=t.replace("./","").replace(/\.(png|jpg|gif|jpeg)$/,"");e[n]=A(t)})),e}(t(4912)),Ri=Mi,Ui=e=>{let{dataType:t}=e;const n=Ne(),r=nr(t).content,g=er()>767,i=Zt(),[a,o]=(0,A.useState)("");if(!r)return(0,$n.jsx)(Fg,{dataType:t});const s=Object.values(r.content.uniqueItems).filter((A=>{const e=A.name.toLowerCase().includes(a.toLowerCase()),t=A.type.toLowerCase().includes(a.toLowerCase()),n=A.category.toLowerCase().includes(a.toLowerCase()),r=A.props.some((A=>A.toLowerCase().includes(a.toLowerCase())));return e||t||n||r}));return(0,$n.jsxs)(Ig,{children:[!g&&(0,$n.jsx)(Ar,{}),(0,$n.jsxs)(kg,{children:[(0,$n.jsx)(zg,{$color:n.color.unique,children:"Unique Items"})," are by far the most sought-after, possessing many magical properties that no Magical, Rare, or Crafted Item has. There is usually only one Unique item for every type of weapon and armor in the game. Unique items are denoted by their names being colored gold. ",(0,$n.jsx)(Gg,{to:"/sets",children:"Set Items"})," are different from Unique ones, but very similar to them in terms of how they work and rarity."]}),(0,$n.jsx)(Lg,{placeholder:"Search uniques...",value:a,onChange:A=>o(A.target.value)}),0===s.length?(0,$n.jsx)(_g,{text:"Ah, it seems your search has led to a dead end, my friend. Perhaps you should try a different path."}):(0,$n.jsx)(ur,{children:(0,$n.jsxs)(Er,{children:[(0,$n.jsx)("thead",{children:(0,$n.jsxs)(pr,{$index:0,children:[(0,$n.jsx)(wr,{children:"Item"}),g&&(0,$n.jsx)(wr,{children:"Category"}),(0,$n.jsx)(wr,{children:"Properties"})]})}),(0,$n.jsx)("tbody",{children:s.map(((A,e)=>{const t=A.image.replace(/^\/images\//,"").replace(/\.(png|jpg|gif|jpeg)$/,""),r=Ri[t]||"/default_image.png";return(0,$n.jsxs)(pr,{$index:e+1,children:[(0,$n.jsxs)(Dr,{$color:n.color.unique,children:[(0,$n.jsx)(Mr,{src:r,alt:A.name}),(0,$n.jsxs)("div",{style:{marginTop:"-15px"},children:[(0,$n.jsx)(Rr,{children:bg({text:A.name,currentPath:i.pathname,searchQuery:a})}),(0,$n.jsx)(Ur,{children:bg({text:A.type,currentPath:i.pathname,searchQuery:a})}),(0,$n.jsx)("div",{style:{fontSize:"0.70em",marginTop:"3px",color:n.color.white.soft},children:!g&&bg({text:A.category.split(" ").slice(0,2).join(" "),currentPath:i.pathname,searchQuery:a})})]})]}),g&&(0,$n.jsx)(Qr,{children:bg({text:A.category.split(" ").slice(0,2).join(" "),currentPath:i.pathname,searchQuery:a})}),(0,$n.jsx)(Qr,{children:A.props.map(((A,e,t)=>{const r=t.findIndex((A=>A.startsWith("Required Level:"))),g=A.startsWith("Required");return(0,$n.jsx)("div",{style:{color:e<=r?g?n.color.required:n.color.white.soft:n.color.magic},children:bg({text:A,currentPath:i.pathname,searchQuery:a})},e)}))})]},A.name)}))})]})}),(0,$n.jsx)(ii,{})]})},Si=_e.nav`
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
`,xi=_e.ul`
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
                font-size: ${A=>{let{theme:e}=A;return e.fontSize.s}};
                position: absolute;
                left: -15px;
                top: 15px;
                }
        }
    }
`,Fi=_e.ul`
    list-style-type: none;
    padding-left: 25px;

    li {
        position: relative;

        &::before {
            content: '◈';
            color: ${A=>{let{theme:e}=A;return e.color.darkGreen}};
            font-size: ${A=>{let{theme:e}=A;return e.fontSize.xs}};
            position: absolute;
            left: -16px;
            top: 7px;
        }
    }
`,Hi=_e.button`
    background: none;
    border: none;
    color: ${A=>{let{theme:e}=A;return e.color.rune}};
    text-align: left;
    cursor: pointer;
    transition: filter 0.1s ease, transform 0.1s ease;
    color: ${A=>{let{theme:e}=A;return e.color.set}};
    font-family: 'AvQest', sans-serif;
    font-size: ${A=>{let{theme:e}=A;return e.fontSize.xl2}};
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
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.l}};
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.s}};
    }
`,bi=_e(Hi)`
    font-size: ${A=>{let{theme:e}=A;return e.fontSize.m}};
    margin: 0;
    opacity: 0.9;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.laptop}}) {
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.s}};
        margin: 0 -3px;
    }
`,ki=e=>{let{dataType:t}=e;const n=Ne(),r=nr(t).content,g=er(),i=g>1322,a=g>767,o=(0,A.useRef)({}),s=(0,A.useRef)({}),l=Zt(),[B,c]=(0,A.useState)(null),[u,E]=(0,A.useState)(null),[Q,C]=(0,A.useState)("");if(!r)return(0,$n.jsx)(Fg,{dataType:t});const w=Object.values(r.content.setItems).filter((A=>{const e=A.name.toLowerCase().includes(Q.toLowerCase()),t=A.type.toLowerCase().includes(Q.toLowerCase()),n=A.category.toLowerCase().includes(Q.toLowerCase()),r=A.props.some((A=>A.toLowerCase().includes(Q.toLowerCase())));return e||t||n||r})),d=w.reduce(((A,e)=>{const t=e.category;return A[t]||(A[t]=[]),A[t].push(e),A}),{});return(0,$n.jsxs)(Ig,{children:[!a&&(0,$n.jsx)(Ar,{}),(0,$n.jsxs)(kg,{children:[(0,$n.jsx)(zg,{$color:n.color.set,children:"Set Items"})," are special items introduced in Diablo II. They are like ",(0,$n.jsx)(Gg,{to:"/uniques",children:"Unique Items"}),', in the way that every time you find the same item, it has the same attributes. However, in general, Set Items are a tad weaker than Unique Items, or so called "Uniques". This is because Set Items are each part of specific sets, and moreover, if you equip the entire set, you will gain an extra set of Bonus Affixes, hence the name "Set Items". Set Items are denoted by their name appearing in bright green. Here are all the Sets:']}),(0,$n.jsx)(Si,{children:Object.entries(d).map(((A,e)=>{let[t,n]=A;return(0,$n.jsx)(xi,{children:(0,$n.jsxs)("li",{children:[(0,$n.jsx)(Hi,{onClick:()=>(A=>{const e=o.current[A];e&&(e.scrollIntoView({behavior:"smooth"}),E(A),setTimeout((()=>{E(null)}),1e3))})(t),children:t}),(0,$n.jsx)(Fi,{children:i&&n.map(((A,e)=>(0,$n.jsx)("li",{children:(0,$n.jsx)(bi,{onClick:()=>(A=>{const e=s.current[A];e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),c(A),setTimeout((()=>{c(null)}),1e3))})(A.name),children:A.name})},e)))})]})},e)}))}),(0,$n.jsx)(Lg,{placeholder:"Search sets...",value:Q,onChange:A=>C(A.target.value)}),0===w.length?(0,$n.jsx)(_g,{text:"Ah, it seems your search has led to a dead end, my friend. Perhaps you should try a different path."}):Object.entries(d).map(((e,t)=>{let[g,i]=e;const c=r.content.setBonuses[g]||{};return(0,$n.jsx)("div",{children:(0,$n.jsx)(ur,{children:(0,$n.jsxs)(Er,{children:[(0,$n.jsxs)("thead",{children:[(0,$n.jsx)(pr,{ref:A=>o.current[g]=A,children:(0,$n.jsxs)(dr,{colSpan:a?3:2,$highlight:u===g,children:["+\xa0",g,"\xa0+"]})}),(0,$n.jsxs)(pr,{$index:0,children:[(0,$n.jsx)(wr,{children:"Item"}),(0,$n.jsx)(wr,{children:"Properties"}),a&&(0,$n.jsx)(wr,{children:"Set Bonuses"})]})]}),(0,$n.jsx)("tbody",{children:i.map(((e,t)=>{var r,g,o,u;const E=e.image.replace(/^\/images\//,"").replace(/\.(png|jpg|gif|jpeg)$/,""),C=Ri[E];return(0,$n.jsxs)(A.Fragment,{children:[(0,$n.jsxs)(pr,{$index:t+1,ref:A=>s.current[e.name]=A,children:[(0,$n.jsxs)(Dr,{$color:n.color.set,$highlight:B===e.name,children:[(0,$n.jsx)(Mr,{src:C,alt:e.name}),(0,$n.jsxs)("div",{style:{marginTop:"-15px"},children:[(0,$n.jsx)(Rr,{children:bg({text:e.name,currentPath:l.pathname,searchQuery:Q})}),(0,$n.jsx)(Ur,{children:bg({text:e.type,currentPath:l.pathname,searchQuery:Q})})]})]}),(0,$n.jsx)(Qr,{$highlight:B===e.name,children:e.props.map(((A,e,t)=>{const r=t.findIndex((A=>A.startsWith("Required Level:"))),g=A.startsWith("Required"),i=A.toLowerCase().includes("set items");return(0,$n.jsx)("div",{style:{color:i?n.color.set:e<=r?g?n.color.required:n.color.white.soft:n.color.magic},children:bg({text:A,currentPath:l.pathname,searchQuery:Q})},e)}))}),a&&0===t&&(0,$n.jsxs)(Qr,{rowSpan:i.length,children:[c["Partial Set Bonus"]?(0,$n.jsxs)("div",{children:[(0,$n.jsx)(Gr,{children:"Partial Set Bonus:"}),(0,$n.jsx)(zr,{children:null===(r=c["Partial Set Bonus"])||void 0===r?void 0:r.map(((A,e)=>(0,$n.jsx)(vr,{children:bg({text:A,currentPath:l.pathname,searchQuery:Q})},e)))})]}):null,(0,$n.jsxs)("div",{children:[(0,$n.jsx)(Gr,{children:"Full Set Bonus:"}),(0,$n.jsx)(zr,{children:null===(g=c["Full Set Bonus"])||void 0===g?void 0:g.map(((A,e)=>(0,$n.jsx)(vr,{children:bg({text:A,currentPath:l.pathname,searchQuery:Q})},e)))})]})]})]}),!a&&t===i.length-1&&(0,$n.jsxs)(A.Fragment,{children:[(0,$n.jsx)(pr,{$index:0,children:(0,$n.jsx)(wr,{colSpan:2,children:"Set Bonuses"})}),(0,$n.jsx)(pr,{children:(0,$n.jsxs)(Qr,{colSpan:2,children:[(0,$n.jsxs)("div",{children:[(0,$n.jsx)(Gr,{children:"Partial Set Bonus:"}),(0,$n.jsx)(zr,{children:null===(o=c["Partial Set Bonus"])||void 0===o?void 0:o.map(((A,e)=>(0,$n.jsx)(vr,{children:bg({text:A,currentPath:l.pathname,searchQuery:Q})},e)))})]}),(0,$n.jsxs)("div",{children:[(0,$n.jsx)(Gr,{children:"Full Set Bonus:"}),(0,$n.jsx)(zr,{children:null===(u=c["Full Set Bonus"])||void 0===u?void 0:u.map(((A,e)=>(0,$n.jsx)(vr,{children:bg({text:A,currentPath:l.pathname,searchQuery:Q})},e)))})]})]})})]})]},e.name)}))})]})})},t)})),(0,$n.jsx)(ii,{})]})},Gi=t.p+"static/media/button_left.ba6eae1e51009952aa02.webp",zi=t.p+"static/media/button_right.d9e7d43086808075ab94.webp",vi=t.p+"static/media/button_mid.65362b851a1e01a4276d.webp";var Ti=t(8286);const yi=_e.div`
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
`,Pi=_e.button`
    width: 220px;
    color: ${A=>{let{theme:e}=A;return e.color.gold}};
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 1);
    font-family: 'AvQest', sans-serif;
    font-size: ${A=>{let{theme:e}=A;return e.fontSize.xl}};
    padding: 10px;
    margin: 10px;
    background: 
        url(${Gi}) left center no-repeat,
        url(${zi}) right center no-repeat,
        url(${vi}) center repeat-x;
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
`,Oi=_e.div`
    position: fixed;
    bottom: 16px;
    right: 27px;
    width: 226px;
    height: 48px;
    background: url(${Ti});
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
`,Ji=()=>{const[e,t]=(0,A.useState)(!1),n=()=>{window.scrollY>window.innerHeight?t(!0):t(!1)};return(0,A.useEffect)((()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)})),[]),(0,$n.jsx)(yi,{$isVisible:e,children:(0,$n.jsx)(Oi,{$isVisible:e,children:(0,$n.jsx)(Pi,{$isVisible:e,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:"scroll to the top"})})})};var Yi=t(5107),Ni=t(8144),Vi=t(2763);const ji=_e.a`
    position: fixed;
    bottom: ${A=>{let{$bottom:e}=A;return e}};
    right: -200px;
    background-color: ${A=>{let{$color:e}=A;return e||"inherit"}};
    z-index: 9999;
    height: 62px;
    width: 260px;
    display: inline-flex;
    align-items: center;
    color: ${A=>{let{theme:e}=A;return e.color.white.soft}};
    font-family: "Cookie", cursive;
    font-size: ${A=>{let{theme:e}=A;return e.fontSize.xl4}};
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 10px;
    filter: brightness(0.6);
    transition: transform 1s ease, filter 1s ease;
    cursor: pointer;

    &:hover {
        transform: translateX(${A=>{let{$translateX:e}=A;return e}});
        filter: brightness(1.2);
    }

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        bottom: ${A=>{let{$bottomPhone:e}=A;return e}};
        right: -115px;
        height: 42px;
        width: 150px;
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.l}};
        text-decoration: underline;
    }
`,Li=_e.img`
    width: 45px;
    margin: -2px 7px 0 -11px;

    @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
        width: 25px;
        margin: -2px 7px 0 -14px;
    }
`,Ki=e=>{let{icon:t,text:n,href:r,onClick:g,$bottom:i,$bottomPhone:a,$color:o,$translateX:s,$translateXPhone:l}=e;const[B,c]=(0,A.useState)("0px"),u=(0,A.useRef)(null),E=er()>767,Q=()=>window.matchMedia("(hover: hover)").matches;(0,A.useEffect)((()=>{const A=A=>{u.current&&!u.current.contains(A.target)&&c("0px")};return"0px"!==B&&document.addEventListener("click",A),()=>{document.removeEventListener("click",A)}}),[B]);return(0,$n.jsxs)(ji,{ref:u,href:g||"0px"===B?void 0:r,target:r&&"_blank",rel:r&&"noopener noreferrer",$bottom:i,$bottomPhone:a,$color:o,$translateX:E?s:B,onMouseDown:A=>{if(g&&!Q())return A.preventDefault(),void("0px"===B?c(l):(g(),c("0px")));g&&Q()?g():1!==A.button?Q()?window.open(r,"_blank"):"0px"===B?(A.preventDefault(),setTimeout((()=>{c(l)}),100)):window.open(r,"_blank"):window.open(r,"_blank")},children:[(0,$n.jsx)(Li,{src:t}),n]})},Zi=_e.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${A=>{let{theme:e}=A;return e.color.black.deep}};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,Xi=_e.div`
  background: ${A=>{let{theme:e}=A;return e.color.black.deep}};
  background-image: url(${cr});
  background-repeat: repeat;
  background-size: cover;
  background-position: center center;
  background-blend-mode: overlay;
  border: 10px solid transparent;
  border-image: url(${si}) 30 stretch;
  border-radius: 0 10px 10px 0;
  padding: 20px 30px;
  border-radius: 8px;
  max-width: 500px;
  width: 95%;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
    padding: 10px 20px 20px;
  }
`,Wi=_e.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: ${A=>{let{theme:e}=A;return e.fontSize.xl3}};
  cursor: pointer;
`,qi=_e.form`
  display: flex;
  flex-direction: column;
`,_i=_e.label`
  font-family: 'AvQest', sans-serif;
  margin-top: 10px;
  font-weight: ${A=>{let{theme:e}=A;return e.fontWeight.bold}};
  color: ${A=>{let{theme:e}=A;return e.color.grey.dark}};
`,$i=_e.input`
  background: ${A=>{let{theme:e}=A;return e.color.black.light}};
  background-image: url(${cr});
  background-repeat: repeat;
  background-size: cover;
  background-position: center center;
  background-blend-mode: overlay;
  color: ${A=>{let{theme:e}=A;return e.color.white.soft}};
  padding: 8px;
  margin-top: 5px;
  border: 1px solid ${A=>{let{theme:e}=A;return e.color.black.dark}};
  border-radius: 4px;
  transition: filter 0.2s linear;

  &:focus {
    outline: 1px solid ${A=>{let{theme:e}=A;return e.color.black.dark}};
    background: ${A=>{let{theme:e}=A;return e.color.black.light}};
    background-image: url(${cr});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    background-blend-mode: overlay;
    filter: brightness(1.7);
  }

  &:hover:not(:focus) {
    filter: brightness(1.1);
  }

  &:-webkit-autofill {
    background: ${A=>{let{theme:e}=A;return e.color.black.light}} !important;
    background-image: url(${cr}) !important;
    background-repeat: repeat !important;
    background-size: cover !important;
    background-position: center center !important;
    background-blend-mode: overlay !important;
    -webkit-box-shadow: 0 0 0px 1000px ${A=>{let{theme:e}=A;return e.color.black.light}} inset !important;
    color: ${A=>{let{theme:e}=A;return e.color.white.soft}} !important;
  }
`,Aa=_e.textarea`
  background: ${A=>{let{theme:e}=A;return e.color.black.light}};
  background-image: url(${cr});
  background-repeat: repeat;
  background-size: cover;
  background-position: center center;
  background-blend-mode: overlay;
  color: ${A=>{let{theme:e}=A;return e.color.white.soft}};
  height: 150px;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid ${A=>{let{theme:e}=A;return e.color.black.dark}};
  border-radius: 4px;
  resize: vertical;
  transition: filter 0.2s linear;

  &:focus {
    outline: 1px solid ${A=>{let{theme:e}=A;return e.color.black.dark}};
    background: ${A=>{let{theme:e}=A;return e.color.black.light}};
    background-image: url(${cr});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    background-blend-mode: overlay;
    filter: brightness(1.7);
  }

  &:hover:not(:focus) {
    filter: brightness(1.1);
  }
`,ea=_e.div`
  margin-top: 15px;
  padding: 3px;
  height: 48px;
  background: 
        url(${Gi}) left center no-repeat,
        url(${zi}) right center no-repeat,
        url(${vi}) center repeat-x;
  background-size: auto 100%, auto 100%, auto 100%;
  border: none;
  filter: brightness(0.9);
  
  @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phone}}) {
    height: 43px;
  }
`,ta=_e.button`
  font-family: 'AvQest', sans-serif;
  width: 100%;
  padding: 10px;
  background: 
        url(${Gi}) left center no-repeat,
        url(${zi}) right center no-repeat,
        url(${vi}) center repeat-x;
  background-size: auto 100%, auto 100%, auto 100%;
  color: ${A=>{let{theme:e}=A;return e.color.gold}};
  border: none;
  font-size: ${A=>{let{theme:e}=A;return e.fontSize.xl}};
  cursor: pointer;
  transition: filter 0.2s linear;

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    transform: scale(0.99, 0.97);
  }

  @media (max-width: ${A=>{let{theme:e}=A;return e.breakpoint.phonePortrait}}) {
    font-size: ${A=>{let{theme:e}=A;return e.fontSize.l}};
  }
`,na=A=>{let{onClose:e}=A;return(0,$n.jsx)(Zi,{onClick:e,children:(0,$n.jsxs)(Xi,{onClick:A=>A.stopPropagation(),children:[(0,$n.jsx)(Wi,{onClick:e,children:"\xd7"}),(0,$n.jsxs)(qi,{action:"https://formspree.io/f/mbljgekl",method:"POST",children:[(0,$n.jsx)(_i,{htmlFor:"email",children:"Your email (optional):"}),(0,$n.jsx)($i,{type:"email",name:"email",id:"email"}),(0,$n.jsx)(_i,{htmlFor:"message",children:"Feedback:"}),(0,$n.jsx)(Aa,{name:"message",id:"message",required:!0}),(0,$n.jsx)(ea,{children:(0,$n.jsx)(ta,{type:"submit",children:"send feedback"})})]})]})})};function ra(){const e=Zt(),t=e.pathname.includes("runewords")||e.pathname.includes("runes")?"runeAndRuneword":"uniqueAndSet",n=nr(t).status;return(0,A.useEffect)((()=>{"loading"===n&&window.scrollTo(0,0)}),[n]),null}const ga=function(){const[e,t]=(0,A.useState)(!1),n=()=>t((A=>!A));return(0,$n.jsxs)(In,{children:[(0,$n.jsx)(tr,{}),(0,$n.jsx)(ra,{}),(0,$n.jsxs)(En,{children:[(0,$n.jsx)(cn,{path:"/runes",element:(0,$n.jsx)(ai,{dataType:"runeAndRuneword"})}),(0,$n.jsx)(cn,{path:"/runewords",element:(0,$n.jsx)(mi,{dataType:"runeAndRuneword"})}),(0,$n.jsx)(cn,{path:"/uniques",element:(0,$n.jsx)(Ui,{dataType:"uniqueAndSet"})}),(0,$n.jsx)(cn,{path:"/sets",element:(0,$n.jsx)(ki,{dataType:"uniqueAndSet"})}),(0,$n.jsx)(cn,{path:"/",element:(0,$n.jsx)(Bn,{to:"/runes"})})]}),(0,$n.jsx)(Ki,{icon:Yi,text:"Visit My GitHub",href:"https://github.com/bartosz-kasprzyk",$bottom:"280px",$bottomPhone:"200px",$color:"#21262D",$translateX:"-165px",$translateXPhone:"-85px"}),(0,$n.jsx)(Ki,{icon:Ni,text:"Buy Me A Coffee",href:"https://buymeacoffee.com/bkasprzyk",$bottom:"200px",$bottomPhone:"140px",$color:"#9D590C",$translateX:"-170px",$translateXPhone:"-90px"}),(0,$n.jsx)(Ki,{icon:Vi,text:"Give Feedback",onClick:n,$bottom:"120px",$bottomPhone:"80px",$color:"#1B9718",$translateX:"-145px",$translateXPhone:"-75px"}),e&&(0,$n.jsx)(na,{onClose:n}),(0,$n.jsx)(Ji,{})]})};var ia,aa,oa,sa,la=function(A,e){return{name:A,value:void 0===e?-1:e,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},Ba=function(A,e){try{if(PerformanceObserver.supportedEntryTypes.includes(A)){if("first-input"===A&&!("PerformanceEventTiming"in self))return;var t=new PerformanceObserver((function(A){return A.getEntries().map(e)}));return t.observe({type:A,buffered:!0}),t}}catch(A){}},ca=function(A,e){var t=function t(n){"pagehide"!==n.type&&"hidden"!==document.visibilityState||(A(n),e&&(removeEventListener("visibilitychange",t,!0),removeEventListener("pagehide",t,!0)))};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},ua=function(A){addEventListener("pageshow",(function(e){e.persisted&&A(e)}),!0)},Ea=function(A,e,t){var n;return function(r){e.value>=0&&(r||t)&&(e.delta=e.value-(n||0),(e.delta||void 0===n)&&(n=e.value,A(e)))}},Qa=-1,Ca=function(){return"hidden"===document.visibilityState?0:1/0},wa=function(){ca((function(A){var e=A.timeStamp;Qa=e}),!0)},da=function(){return Qa<0&&(Qa=Ca(),wa(),ua((function(){setTimeout((function(){Qa=Ca(),wa()}),0)}))),{get firstHiddenTime(){return Qa}}},Da=function(A,e){var t,n=da(),r=la("FCP"),g=function(A){"first-contentful-paint"===A.name&&(a&&a.disconnect(),A.startTime<n.firstHiddenTime&&(r.value=A.startTime,r.entries.push(A),t(!0)))},i=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],a=i?null:Ba("paint",g);(i||a)&&(t=Ea(A,r,e),i&&g(i),ua((function(n){r=la("FCP"),t=Ea(A,r,e),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-n.timeStamp,t(!0)}))}))})))},pa=!1,ha=-1,Ia={passive:!0,capture:!0},fa=new Date,ma=function(A,e){ia||(ia=e,aa=A,oa=new Date,Ua(removeEventListener),Ma())},Ma=function(){if(aa>=0&&aa<oa-fa){var A={entryType:"first-input",name:ia.type,target:ia.target,cancelable:ia.cancelable,startTime:ia.timeStamp,processingStart:ia.timeStamp+aa};sa.forEach((function(e){e(A)})),sa=[]}},Ra=function(A){if(A.cancelable){var e=(A.timeStamp>1e12?new Date:performance.now())-A.timeStamp;"pointerdown"==A.type?function(A,e){var t=function(){ma(A,e),r()},n=function(){r()},r=function(){removeEventListener("pointerup",t,Ia),removeEventListener("pointercancel",n,Ia)};addEventListener("pointerup",t,Ia),addEventListener("pointercancel",n,Ia)}(e,A):ma(e,A)}},Ua=function(A){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return A(e,Ra,Ia)}))},Sa={};const xa=A=>{A&&"function"===typeof A&&(function(A,e){pa||(Da((function(A){ha=A.value})),pa=!0);var t,n=function(e){ha>-1&&A(e)},r=la("CLS",0),g=0,i=[],a=function(A){if(!A.hadRecentInput){var e=i[0],n=i[i.length-1];g&&A.startTime-n.startTime<1e3&&A.startTime-e.startTime<5e3?(g+=A.value,i.push(A)):(g=A.value,i=[A]),g>r.value&&(r.value=g,r.entries=i,t())}},o=Ba("layout-shift",a);o&&(t=Ea(n,r,e),ca((function(){o.takeRecords().map(a),t(!0)})),ua((function(){g=0,ha=-1,r=la("CLS",0),t=Ea(n,r,e)})))}(A),function(A,e){var t,n=da(),r=la("FID"),g=function(A){A.startTime<n.firstHiddenTime&&(r.value=A.processingStart-A.startTime,r.entries.push(A),t(!0))},i=Ba("first-input",g);t=Ea(A,r,e),i&&ca((function(){i.takeRecords().map(g),i.disconnect()}),!0),i&&ua((function(){var n;r=la("FID"),t=Ea(A,r,e),sa=[],aa=-1,ia=null,Ua(addEventListener),n=g,sa.push(n),Ma()}))}(A),Da(A),function(A,e){var t,n=da(),r=la("LCP"),g=function(A){var e=A.startTime;e<n.firstHiddenTime&&(r.value=e,r.entries.push(A),t())},i=Ba("largest-contentful-paint",g);if(i){t=Ea(A,r,e);var a=function(){Sa[r.id]||(i.takeRecords().map(g),i.disconnect(),Sa[r.id]=!0,t(!0))};["keydown","click"].forEach((function(A){addEventListener(A,a,{once:!0,capture:!0})})),ca(a,!0),ua((function(n){r=la("LCP"),t=Ea(A,r,e),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-n.timeStamp,Sa[r.id]=!0,t(!0)}))}))}))}}(A),function(A){var e,t=la("TTFB");e=function(){try{var e=performance.getEntriesByType("navigation")[0]||function(){var A=performance.timing,e={entryType:"navigation",startTime:0};for(var t in A)"navigationStart"!==t&&"toJSON"!==t&&(e[t]=Math.max(A[t]-A.navigationStart,0));return e}();if(t.value=t.delta=e.responseStart,t.value<0||t.value>performance.now())return;t.entries=[e],A(t)}catch(A){}},"complete"===document.readyState?setTimeout(e,0):addEventListener("load",(function(){return setTimeout(e,0)}))}(A))},Fa=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=Xe.apply(void 0,g([e],t,!1)),a="sc-global-".concat(bA(JSON.stringify(i))),o=new $e(i,a),s=function(e){var t=He(),n=A.useContext(Ye),r=A.useRef(t.styleSheet.allocateGSInstance(a)).current;return t.styleSheet.server&&l(r,e,t.styleSheet,n,t.stylis),A.useLayoutEffect((function(){if(!t.styleSheet.server)return l(r,e,t.styleSheet,n,t.stylis),function(){return o.removeStyles(r,t.styleSheet)}}),[r,e,t.styleSheet,n,t.stylis]),null};function l(A,e,t,n,g){if(o.isStatic)o.renderStyles(A,CA,t,g);else{var i=r(r({},e),{theme:DA(e,n,s.defaultProps)});o.renderStyles(A,i,t,g)}}return A.memo(s)})`
    html {
        box-sizing: border-box;
        font-size: ${A=>{let{theme:e}=A;return e.fontSize.l}};
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
        color: ${A=>{let{theme:e}=A;return e.color.white.soft}};
        font-family: "Ubuntu", sans-serif;
        -webkit-tap-highlight-color: transparent;
    }
`;n.createRoot(document.getElementById("root")).render((0,$n.jsx)(A.StrictMode,{children:(0,$n.jsxs)(Ve,{theme:{color:{white:{soft:"#DDDDDD",pure:"#FFFFFF"},grey:{dark:"#979797",light:"#97979720"},silver:"#AAAAAA",gold:"#BD9B4E",highlight:"#D1AD665A",search:"#F8F412",rune:"#CA8120",unique:"#86735A",set:"#1B9718",darkGreen:"#135F11",required:"#9D4A3C",magic:"#4F53C5",value:"#8470ff",brown:"#885C02",black:{dark:"#000000",deep:"#0000009A",medium:"#0000007A",light:"#0000004A"}},breakpoint:{laptop:"1480px",tabletTwo:"1322px",tablet:"1170px",tabletPortrait:"990px",phoneTwo:"900px",phone:"767px",phonePortrait:"481px"},fontWeight:{regular:"400",medium:"500",bold:"700"},fontSize:{xxs:"6px",xs:"9px",s:"11px",m:"13px",l:"15px",xl:"18px",xl2:"20px",xl3:"24px",xl4:"30px",xl5:"40px"}},children:[(0,$n.jsx)(Fa,{}),(0,$n.jsx)(ga,{})]})})),xa()})()})();
//# sourceMappingURL=main.aa668240.js.map