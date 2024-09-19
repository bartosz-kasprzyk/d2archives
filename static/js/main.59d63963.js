/*! For license information please see main.59d63963.js.LICENSE.txt */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,OB=vI(FB)`
    display: flex;
    flex-direction: column;
    align-items: center;   
    gap: 20px;         
    grid-column: 1 / 3;
    margin: 20px;
`,HB=vI.img`
    width: 300px;
`,UB=vI.img`
    width: 250px;
    padding: 20px;
    margin-top: -40px;
    background-image: url(${kB});
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: 50% 20px;
        display: inline-block;
`,uB=vI.ul`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 80px;
    justify-items: center;
    list-style-type: none;
    margin: 0;
    padding: 20px 0 10px;
`,jB=vI(pB)`
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
`,xB=vI.img`
    width: 700px;
    margin: -340px auto;
    z-index: -1;
`,qB=vI.img`
    width: 40px;
    margin-top: -30px;
    z-index: 0;
    filter: brightness(0.3);
`,ZB=vI.div`
    position: absolute;
    top: 20px;
    ${A=>{let{$position:I="right"}=A;return"left"===I?"left: 20px;":"right: 20px; transform: scaleX(-1);"}}
    width: 150px;
    height: 150px;
    background: url(${RB}) no-repeat center center;
    background-size: contain;
    z-index: 100;
    filter: brightness(0.3);
`;var yB=g(76168),LB=g(90942),NB=g(67039),WB=g(52019),TB=g(97716),dB=g(39357),PB=g(16677),VB=g(14221),fB=g(70579);const bB=()=>(0,fB.jsxs)(mB,{children:[(0,fB.jsx)(ZB,{$position:"left"}),(0,fB.jsx)(ZB,{}),(0,fB.jsxs)(OB,{to:"/runes",children:[(0,fB.jsx)(HB,{src:yB,alt:"Diablo II Logo"}),(0,fB.jsx)(UB,{src:LB,alt:"Archives Logo"})]}),(0,fB.jsxs)(uB,{children:[(0,fB.jsx)("li",{children:(0,fB.jsx)(jB,{to:"/runes",children:(0,fB.jsx)("img",{src:NB,alt:"Runes"})})}),(0,fB.jsx)("li",{children:(0,fB.jsx)(jB,{to:"/runewords",children:(0,fB.jsx)("img",{src:WB,alt:"Runewords"})})}),(0,fB.jsx)("li",{children:(0,fB.jsx)(jB,{to:"/uniques",children:(0,fB.jsx)("img",{src:TB,alt:"Uniques"})})}),(0,fB.jsx)("li",{children:(0,fB.jsx)(jB,{to:"/sets",children:(0,fB.jsx)("img",{src:dB,alt:"sets"})})})]}),(0,fB.jsx)(xB,{src:PB}),(0,fB.jsx)(qB,{src:VB})]}),zB=I=>{const[B,C]=(0,A.useState)({status:"loading",content:null});return(0,A.useEffect)((()=>{(async()=>{if(I)try{let A;if("runeAndRuneword"===I)A=await g.e(221).then(g.t.bind(g,221,19));else{if("uniqueAndSet"!==I)throw new Error("Invalid data type");A=await g.e(672).then(g.t.bind(g,17672,19))}setTimeout((()=>{C({status:"success",content:A})}),800)}catch(A){console.error("Error loading content:",A),C({status:"error",content:null})}})()}),[I]),B},XB=g.p+"static/media/box_top_left.2d8b7fbb8564b77f6ebb.webp",vB=g.p+"static/media/box_top_right.548ff05320d163be9566.webp",_B=g.p+"static/media/box_bottom_left.f3b784dc5e220d4d45b9.webp",$B=g.p+"static/media/box_bottom_right.30df33f706e3cceb5d4d.webp",AC=g.p+"static/media/box_top.b98ce4df90bfb72eab63.webp",IC=g.p+"static/media/box_bottom.15bc793b5736cf6b3df6.webp",gC=g.p+"static/media/box_left.87966edf7bad9b960430.webp",BC=g.p+"static/media/box_right.87966edf7bad9b960430.webp",CC=g.p+"static/media/box_background.3c5aa480a3ef63fc5bc1.webp",EC=vI.div`
    display: flex;
    overflow-x: auto;
    justify-content: center;
`,oC=vI.table`
    border-collapse: collapse;
    margin: 20px 0 100px;
    width: 100%;
`,QC=vI.th`
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
    color: #DDDDDD;
`,iC=vI(QC)`
    color: #4f53c5;
`,eC=vI.th`
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
    color: #885C02;
    background: #0F0F0F;
    font-size: 20px;
`,aC=vI.th`
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
    color: ${A=>{let{$color:I}=A;return I||"inherit"}};
`,DC=vI.tr`
    font-family: 'AvQest', sans-serif;
    font-size: 17px;
    position: relative;
    z-index: 0;
    background: ${A=>{let{$index:I}=A;return I%2===0?"#1413138A":"#201F1F5A"}};
    background-image: url(${CC});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    background-blend-mode: overlay;
    transition: background-color 1s ease;

    ${A=>A.$highlight&&"\n        background-color: #D1AD665A;\n    "}

    ${A=>A.$new&&"\n        border: 2px solid green;\n        box-shadow: 0 0 10px green;\n        overflow: hidden;\n        z-index: 1;\n    "}
`,wC=vI.img`
    width: 30px;
`,sC=vI.div`
    color: #979797;
    border-top: 1px solid #97979770;
    margin: 0;
    margin-top: 2px;
    padding-top: 5px;
`,GC=vI.span`
    color: #8470ff;
    padding: 3px 8px 1px;
    filter: opacity(0.8);
    background: 
        url(${XB}) top left no-repeat,
        url(${vB}) top right no-repeat,
        url(${_B}) bottom left no-repeat,
        url(${$B}) bottom right no-repeat,
        url(${AC}) top repeat-x,
        url(${IC}) bottom repeat-x,
        url(${gC}) left repeat-y,
        url(${BC}) right repeat-y,
        url(${CC}) center center repeat;
`,hC=vI.span`
    color: grey;
    font-style: italic;
`,MC=vI.span`
    color: #86735a;
`,YC=vI.span`
    color: green;
    font-weight: bold;
    margin: 0 5px;
`,tC=vI.span`
    color: #ca8120;
`;const KC={El:g(8967),Eld:g(70665),Tir:g(79309),Nef:g(14355),Eth:g(39565),Ith:g(69601),Tal:g(32923),Ral:g(5513),Ort:g(79037),Thul:g(4323),Amn:g(25914),Sol:g(60820),Shael:g(55221),Dol:g(64117),Hel:g(98483),Io:g(97558),Lum:g(25668),Ko:g(17520),Fal:g(82605),Lem:g(6196),Pul:g(31515),Um:g(50620),Mal:g(99876),Ist:g(83490),Gul:g(26690),Vex:g(91029),Ohm:g(58780),Lo:g(93155),Sur:g(98820),Ber:g(99947),Jah:g(23173),Cham:g(5635),Zod:g(40823)},nC=vI.p`
    color: #DDDDDD;
    font-size: 17px;
`,lC=vI.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(11, 60px);
    grid-template-rows: repeat(3, auto);
    gap: 15px;
    margin: 20px 0;
`,JC=vI.button`
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
`,FC=vI.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`,pC=vI(FB)`
    color: #ca8120;
    text-decoration: none;
    transition: filter 0.3s ease;

    &:hover {
        filter: brightness(1.5);
        text-decoration: underline;
    }
`,cC=vI.div`
    width: 70%;
    margin: 56px auto;
`;var rC=g(97773),SC=g(51842),kC=g(43551),RC=g(75764);const mC=vI.div`
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
`,OC=vI.img`
    width: 500px;
    height: 400px;
    margin: 50px auto;
`,HC=[rC,SC,kC,RC],UC=I=>{let{dataType:g}=I;const[B,C]=(0,A.useState)(HC[0]),E=zB(g);return(0,A.useEffect)((()=>{if("loading"!==E.status)return;let A=0;const I=setInterval((()=>{C(HC[A]),A++}),200);return()=>clearInterval(I)}),[E.status]),(0,fB.jsx)(mC,{children:(0,fB.jsx)(OC,{src:B,alt:"Loading"})})},uC=Object.keys(KC),jC=(I,g)=>{const B=/(?<!Damage:\s|\bDefense:\s|\bAdds\s)\b\d+-\d+\b/g,C=new RegExp(`\\b(${uC.join("|")})\\b`,"gi");return I.split("\n").map(((I,E)=>{const o=I.split(/(\*New\*|\(Weapon Version\)|\(Shield Version\)|\(Armor Version\)|\(Sword Version\)|(?<!Adds\s)\b\d+-\d+\b|Weapon:|Helmet\/Armor:|Shield:|Damage:\s\d+-\d+|Defense:\s\d+-\d+)/g);return(0,fB.jsxs)(A.Fragment,{children:[o.map(((A,I)=>"*New*"===A?(0,fB.jsx)(YC,{children:A},I):"(Weapon Version)"===A||"(Shield Version)"===A||"(Armor Version)"===A||"(Sword Version)"===A?(0,fB.jsx)(hC,{children:A},I):"Weapon:"===A||"Helmet/Armor:"===A||"Shield:"===A?(0,fB.jsx)(MC,{children:A},I):"/runewords"!==g&&"/uniques"!==g||!B.test(A)?C.test(A)?A.split(C).map(((A,I)=>uC.some((I=>I.toLowerCase()===A.toLowerCase()))?(0,fB.jsx)(tC,{children:A},I):A)):A:(0,fB.jsx)(GC,{children:A},I))),(0,fB.jsx)("br",{})]},E)}))};const xC=[{name:"Chipped Topaz",image:g(20870)},{name:"Chipped Amethyst",image:g(56381)},{name:"Chipped Sapphire",image:g(5818)},{name:"Chipped Ruby",image:g(24756)},{name:"Chipped Emerald",image:g(806)},{name:"Chipped Diamond",image:g(13038)},{name:"Flawed Topaz",image:g(57468)},{name:"Flawed Amethyst",image:g(58931)},{name:"Flawed Sapphire",image:g(75060)},{name:"Flawed Ruby",image:g(73934)},{name:"Flawed Emerald",image:g(68528)},{name:"Flawed Diamond",image:g(68844)},{name:"Topaz",image:g(17250)},{name:"Amethyst",image:g(36529)},{name:"Sapphire",image:g(52182)},{name:"Ruby",image:g(30544)},{name:"Emerald",image:g(54666)},{name:"Diamond",image:g(3042)},{name:"Flawless Topaz",image:g(66776)},{name:"Flawless Amethyst",image:g(62183)},{name:"Flawless Sapphire",image:g(1e4)},{name:"Flawless Ruby",image:g(27722)},{name:"Flawless Emerald",image:g(91204)}],qC=()=>{const I=zB("runeAndRuneword").content,g=(0,A.useRef)({}),[B,C]=(0,A.useState)(null),E=fg();if(!I)return(0,fB.jsx)(UC,{});const o=Object.keys(I.content.runesTable).filter((A=>A.startsWith("row"))).map((A=>I.content.runesTable[A]));return(0,fB.jsxs)(cC,{children:[(0,fB.jsxs)(nC,{children:[(0,fB.jsx)("b",{children:"Runes"})," are stones that enhance items with socketed slots. They add various properties depending on the item type. When inserted in the correct order, they form ",(0,fB.jsx)(pC,{to:"/runewords",children:"runewords"})," that give items new properties. Here is a list of all runes:"]}),(0,fB.jsx)(lC,{children:Object.keys(KC).map((A=>(0,fB.jsx)(JC,{onClick:()=>(A=>{g.current[A]&&(g.current[A].scrollIntoView({behavior:"smooth",block:"center"}),C(A),setTimeout((()=>{C(null)}),1e3))})(A),children:(0,fB.jsx)(FC,{src:KC[A],alt:`${A} Rune`,title:`${A} Rune`})},A)))}),(0,fB.jsx)(EC,{children:(0,fB.jsxs)(oC,{children:[(0,fB.jsx)("thead",{children:(0,fB.jsxs)(DC,{$index:0,children:[(0,fB.jsx)(eC,{colSpan:"2",children:I.content.runesTable.header1}),(0,fB.jsx)(eC,{children:I.content.runesTable.header2}),(0,fB.jsx)(eC,{children:I.content.runesTable.header3})]})}),(0,fB.jsx)("tbody",{children:o.map(((A,I)=>(0,fB.jsxs)(DC,{id:`rune-${A[0]}`,ref:I=>g.current[A[0]]=I,$highlight:B===A[0],$index:I+1,children:[(0,fB.jsxs)(aC,{$color:"#86735A",children:["#",I+1]}),(0,fB.jsxs)(QC,{children:[jC(A[0],E.pathname),(0,fB.jsx)(wC,{src:KC[A[0]],alt:`${A[0]} Rune`,title:`${A[0]} Rune`})]}),(0,fB.jsx)(QC,{children:"El"===A[0]?"-":(0,fB.jsxs)(fB.Fragment,{children:[(0,fB.jsx)(wC,{src:KC[A[1]],alt:`${A[1]} Rune`,title:`${A[1]} Rune`}),(0,fB.jsx)(wC,{src:KC[A[1]],alt:`${A[1]} Rune`,title:`${A[1]} Rune`}),I<21&&(0,fB.jsx)(wC,{src:KC[A[1]],alt:`${A[1]} Rune`,title:`${A[1]} Rune`}),I>=10&&(0,fB.jsx)(fB.Fragment,{children:(0,fB.jsx)(wC,{src:xC[I-10].image,alt:xC[I-10].name,title:xC[I-10].name})})]})}),(0,fB.jsxs)(QC,{children:[jC(A[2],E.pathname),(0,fB.jsx)(sC,{children:A[3]})]})]},I)))})]})})]})},ZC=vI.p`
    color: #DDDDDD;
`,yC=vI.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(19, 20px);
    grid-auto-flow: column;
    grid-column-gap: 50px;
    padding: 0;
    margin-bottom: 40px;
    font-family: 'AvQest', sans-serif;
`,LC=vI.ul`
    list-style-type: none;
    padding-left: 20px;

    li {
        position: relative;

    &::before {
        content: '◈';
        color: #5D4A32;
        font-size: 0.75em;
        position: absolute;
        left: -15px;
        top: 1.1px;
    }
  }
`,NC=vI.button`
    color: #86735a;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    
    &:focus {
        outline: none;
    }

    &:hover {
        color: #A49989;
    }

    &:active {
        color: #50422F;
        transform: scale(0.98);
    }
`,WC=(vI.span`
    color: #8470ff;
    padding: 3px 8px 1px;
    background: 
        url(${XB}) top left no-repeat,
        url(${vB}) top right no-repeat,
        url(${_B}) bottom left no-repeat,
        url(${$B}) bottom right no-repeat,
        url(${AC}) top repeat-x,
        url(${IC}) bottom repeat-x,
        url(${gC}) left repeat-y,
        url(${BC}) right repeat-y,
        url(${CC}) center center repeat;
`,vI(FB)`
    color: #ca8120;
    text-decoration: none;
    transition: filter 0.3s ease;

    &:hover {
        filter: brightness(1.5);
        text-decoration: underline;
    }
`),TC=()=>{const I=zB("runeAndRuneword").content,g=(0,A.useRef)({}),[B,C]=(0,A.useState)(null),E=fg();if(!I)return(0,fB.jsx)(UC,{});const o=Object.keys(I.content.runewordsTable).filter((A=>A.startsWith("runeword"))).map((A=>I.content.runewordsTable[A])),Q=Object.keys(I.content.runewordsTable).filter((A=>A.startsWith("runewordNEW"))).map((A=>I.content.runewordsTable[A]));return(0,fB.jsxs)(cC,{children:[(0,fB.jsxs)(ZC,{children:[(0,fB.jsx)("b",{children:"Runewords"})," are combinations of several different ",(0,fB.jsx)(WC,{to:"/runes",children:"runes"})," designed to create powerful weapons or armor. The correct arrangement of runes in socketed items not only provides basic attributes but also bonus effects that enhance the item's power. Most of the most important weapons and armor in the game come from runewords. Many of these are very difficult to obtain due to the rare appearance of runes at higher levels. Besides the runes, you also need to find the appropriate item. It is worth mentioning that runewords that deal high damage are best combined with items that also have a high base attack rating. Experienced players spend a lot of time searching for the right items and runes to ultimately create their desired equipment. Here is a list of all runewords:"]}),(0,fB.jsx)(yC,{children:o.map((A=>(0,fB.jsx)(LC,{children:(0,fB.jsx)("li",{children:(0,fB.jsx)(NC,{onClick:()=>(A=>{g.current[A]&&(g.current[A].scrollIntoView({behavior:"smooth",block:"center"}),C(A),setTimeout((()=>{C(null)}),1e3))})(A[0]),children:jC(A[0],E.pathname)})})},A[0])))}),(0,fB.jsx)(EC,{children:(0,fB.jsxs)(oC,{children:[(0,fB.jsx)("thead",{children:(0,fB.jsxs)(DC,{$index:0,children:[(0,fB.jsx)(eC,{children:I.content.runewordsTable.header1}),(0,fB.jsx)(eC,{children:I.content.runewordsTable.header2}),(0,fB.jsx)(eC,{children:I.content.runewordsTable.header3}),(0,fB.jsx)(eC,{children:I.content.runewordsTable.header4})]})}),(0,fB.jsx)("tbody",{children:o.map(((A,I)=>(0,fB.jsxs)(DC,{$index:I+1,ref:I=>g.current[A[0]]=I,$highlight:B===A[0],$new:Q.some((I=>I[0]===A[0])),children:[(0,fB.jsx)(aC,{$color:"#86735A",children:jC(A[0],E.pathname)}),(0,fB.jsx)(QC,{children:jC(A[1],E.pathname)}),(0,fB.jsx)(QC,{children:jC(A[2],E.pathname)}),(0,fB.jsx)(iC,{children:jC(A[3],E.pathname)})]},I)))})]})})]})};const dC=function(A){let I={};return A.keys().forEach((g=>{const B=g.replace("./","").replace(/\.(png|jpg|gif|jpeg)$/,"");I[B]=A(g)})),I}(g(34912)),PC=()=>{const A=zB("uniqueAndSet").content,I=fg();return A?(0,fB.jsx)(cC,{children:(0,fB.jsx)(EC,{children:(0,fB.jsxs)(oC,{children:[(0,fB.jsx)("thead",{children:(0,fB.jsxs)(DC,{$index:0,children:[(0,fB.jsx)(eC,{children:"Name"}),(0,fB.jsx)(eC,{children:"Image"}),(0,fB.jsx)(eC,{children:"Category"}),(0,fB.jsx)(eC,{children:"Properties"})]})}),(0,fB.jsx)("tbody",{children:Object.values(A.content.uniqueItems).map(((A,g)=>{const B=A.image.replace(/^\/images\//,"").replace(/\.(png|jpg|gif|jpeg)$/,""),C=dC[B]||"/default_image.png";return(0,fB.jsxs)(DC,{$index:g+1,children:[(0,fB.jsxs)(aC,{$color:"#86735A",children:[jC(A.name),(0,fB.jsx)("small",{children:A.type})]}),(0,fB.jsx)(QC,{children:(0,fB.jsx)("img",{src:C,alt:A.name})}),(0,fB.jsx)(QC,{children:A.category}),(0,fB.jsx)(QC,{children:A.props.map(((A,g,B)=>{const C=B.findIndex((A=>A.startsWith("Required Level:"))),E=A.startsWith("Required");return(0,fB.jsx)("div",{style:{color:g<=C?E?"#9d4a3c":"#fff":"#4f53c5"},children:jC(A,I.pathname)},g)}))})]},A.name)}))})]})})}):(0,fB.jsx)(UC,{})},VC=vI.h2`
    color: #1B9718;
    font-family: 'AvQest', sans-serif;
    font-size: 45px;
    margin: 20px 5px -10px;
    text-align: center;
`,fC=vI.h3`
    color: #DDDDDD;
`,bC=vI.ul`
    list-style-type: none;
    padding: 0;
    padding-bottom: 60px;
`,zC=vI.li`
    color: #86735A;
`,XC=()=>{const A=zB("uniqueAndSet").content,I=fg();if(!A||!A.content||!A.content.setItems)return(0,fB.jsx)(UC,{});const g=Object.values(A.content.setItems).reduce(((A,I)=>{const g=I.category;return A[g]||(A[g]=[]),A[g].push(I),A}),{});return(0,fB.jsx)(cC,{children:Object.entries(g).map(((g,B)=>{let[C,E]=g;const o=A.content.setBonuses[C]||{};return(0,fB.jsxs)("div",{children:[(0,fB.jsxs)(VC,{children:["+ ",C," +"]}),(0,fB.jsx)(EC,{children:(0,fB.jsxs)(oC,{children:[(0,fB.jsx)("thead",{children:(0,fB.jsxs)(DC,{$index:0,children:[(0,fB.jsx)(eC,{children:"Name"}),(0,fB.jsx)(eC,{children:"Image"}),(0,fB.jsx)(eC,{children:"Properties"}),(0,fB.jsx)(eC,{children:"Set Bonuses"})]})}),(0,fB.jsx)("tbody",{children:E.map(((A,g)=>{var B,C;const Q=A.image.replace(/^\/images\//,"").replace(/\.(png|jpg|gif|jpeg)$/,""),i=dC[Q]||"/default_image.png";return(0,fB.jsxs)(DC,{$index:g+1,children:[(0,fB.jsxs)(aC,{$color:"#1B9718",children:[A.name,(0,fB.jsx)("br",{}),(0,fB.jsx)("small",{children:A.type})]}),(0,fB.jsx)(QC,{children:(0,fB.jsx)("img",{src:i,alt:A.name})}),(0,fB.jsx)(QC,{children:A.props.map(((A,g,B)=>{const C=B.findIndex((A=>A.startsWith("Required Level:"))),E=A.startsWith("Required"),o=A.toLowerCase().includes("set items");return(0,fB.jsx)("div",{style:{color:o?"#1B9718":g<=C?E?"#9d4a3c":"#DDDDDD":"#4f53c5"},children:jC(A,I.pathname)},g)}))}),0===g?(0,fB.jsxs)(QC,{rowSpan:E.length,children:[(0,fB.jsxs)("div",{children:[(0,fB.jsx)(fC,{children:"Partial Set Bonus:"}),(0,fB.jsx)(bC,{children:null===(B=o["Partial Set Bonus"])||void 0===B?void 0:B.map(((A,I)=>(0,fB.jsx)(zC,{children:A},I)))})]}),(0,fB.jsxs)("div",{children:[(0,fB.jsx)(fC,{children:"Full Set Bonus:"}),(0,fB.jsx)(bC,{children:null===(C=o["Full Set Bonus"])||void 0===C?void 0:C.map(((A,I)=>(0,fB.jsx)(zC,{children:A},I)))})]})]}):null]},A.name)}))})]})})]},B)}))})},vC=g.p+"static/media/button_left.ba6eae1e51009952aa02.webp",_C=g.p+"static/media/button_right.d9e7d43086808075ab94.webp",$C=g.p+"static/media/button_mid.65362b851a1e01a4276d.webp";var AE=g(18286);const IE=vI.button`
    width: 220px;
    color: #BD9B4E;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 1);
    font-family: 'AvQest', sans-serif;
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: 
        url(${vC}) left center no-repeat,
        url(${_C}) right center no-repeat,
        url(${$C}) center repeat-x;
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

    ${A=>{let{$isVisible:I}=A;return I&&"\n        opacity: 1;\n        visibility: visible;\n    "}}

    &:hover {
        filter: brightness(1.2);
    }

    &:active {
        transform: scale(0.99, 0.97);
    }
`,gE=vI.div`
    position: fixed;
    bottom: 16px;
    right: 27px;
    width: 226px;
    height: 48px;
    background: url(${AE});
    background-size: auto 100%;
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;

    ${A=>{let{$isVisible:I}=A;return I&&"\n        opacity: 1;\n        visibility: visible;\n    "}}
`,BE=()=>{const[I,g]=(0,A.useState)(!1),B=()=>{window.scrollY>window.innerHeight?g(!0):g(!1)};return(0,A.useEffect)((()=>(window.addEventListener("scroll",B),()=>{window.removeEventListener("scroll",B)})),[]),(0,fB.jsx)(gE,{$isVisible:I,children:(0,fB.jsx)(IE,{$isVisible:I,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:"scroll to the top"})})};var CE=g(5107),EE=g(38144);const oE=vI.a`
    position: fixed;
    bottom: ${A=>{let{$bottom:I}=A;return I||"auto"}};
    right: -200px;
    background-color: ${A=>{let{$color:I}=A;return I||"inherit"}};
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
        transform: translateX(${A=>{let{$translateX:I}=A;return I||"0px"}});
        filter: brightness(1.2);
    }
`,QE=vI.img`
    width: 45px;
    margin: -2px 7px 0 -11px;
`,iE=A=>{let{icon:I,text:g,href:B,$bottom:C,$color:E,$translateX:o}=A;return(0,fB.jsxs)(oE,{href:B,target:"_blank",rel:"noopener noreferrer",$bottom:C,$color:E,$translateX:o,children:[(0,fB.jsx)(QE,{src:I}),g]})};function eE(I){let{dataType:g}=I;const B=zB(g).status;return(0,A.useEffect)((()=>{"loading"===B&&window.scrollTo(0,0)}),[B]),null}const aE=function(){return(0,fB.jsxs)(nB,{children:[(0,fB.jsx)(bB,{}),(0,fB.jsx)(eE,{}),(0,fB.jsxs)(wB,{children:[(0,fB.jsx)(aB,{path:"/runes",element:(0,fB.jsx)(qC,{dataType:"runeAndRuneword"})}),(0,fB.jsx)(aB,{path:"/runewords",element:(0,fB.jsx)(TC,{dataType:"runeAndRuneword"})}),(0,fB.jsx)(aB,{path:"/uniques",element:(0,fB.jsx)(PC,{dataType:"uniqueAndSet"})}),(0,fB.jsx)(aB,{path:"/sets",element:(0,fB.jsx)(XC,{dataType:"uniqueAndSet"})}),(0,fB.jsx)(aB,{path:"/",element:(0,fB.jsx)(eB,{to:"/runes"})})]}),(0,fB.jsx)(iE,{icon:CE,text:"Follow Me",href:"https://github.com/bartosz-kasprzyk",$bottom:"280px",$color:"#21262D",$translateX:"-110px"}),(0,fB.jsx)(iE,{icon:EE,text:"Buy Me A Coffee",href:"https://buymeacoffee.com/bartoszkas5",$bottom:"200px",$color:"#9D590C",$translateX:"-170px"}),(0,fB.jsx)(BE,{})]})},DE=A=>{A&&A instanceof Function&&g.e(453).then(g.bind(g,46453)).then((I=>{let{getCLS:g,getFID:B,getFCP:C,getLCP:E,getTTFB:o}=I;g(A),B(A),C(A),E(A),o(A)}))},wE=(function(I){for(var g=[],B=1;B<arguments.length;B++)g[B-1]=arguments[B];var o=bI.apply(void 0,E([I],g,!1)),Q="sc-global-".concat(HA(JSON.stringify(o))),i=new _I(o,Q),e=function(I){var g=OI(),B=A.useContext(WI),C=A.useRef(g.styleSheet.allocateGSInstance(Q)).current;return g.styleSheet.server&&a(C,I,g.styleSheet,B,g.stylis),A.useLayoutEffect((function(){if(!g.styleSheet.server)return a(C,I,g.styleSheet,B,g.stylis),function(){return i.removeStyles(C,g.styleSheet)}}),[C,I,g.styleSheet,B,g.stylis]),null};function a(A,I,g,B,E){if(i.isStatic)i.renderStyles(A,MA,g,E);else{var o=C(C({},I),{theme:KA(I,B,e.defaultProps)});i.renderStyles(A,o,g,E)}}return A.memo(e)})`
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
        font-family: "MedievalSharp", cursive, serif;
    }
`;B.createRoot(document.getElementById("root")).render((0,fB.jsx)(A.StrictMode,{children:(0,fB.jsxs)(TI,{theme:{color:{white:"#FFFFFF",whisper:"#F5F5FA",mystic:"#E4E6F0",waterloo:"#7E839A",stormGrey:"#74788B",woodsmoke:"#18181B",mineShaft:"#333333",heater:"#BAC7D5",pattensBlue:"#D6E4FF",scienceBlue:"#0044CC",black:"#000000"},breakpoint:{laptop:"1480px",tablet:"1278px",tabletOne:"1120px",tabletTwo:"1045px",tabletPortrait:"990px",phone:"767px",phoneTwo:"700px",phonePortrait:"481px"},fontWeight:{regular:"400",medium:"500",semiBold:"600",bold:"700"},fontSize:{xs:"10px",sm:"13px",md:"14px",lg:"16px",xl:"18px",xl2:"20px",xl3:"22px",xl4:"24px",xl5:"28px",xl6:"36px",xl7:"48px",xl8:"64px"}},children:[(0,fB.jsx)(wE,{}),(0,fB.jsx)(aE,{})]})})),DE()})()})();
//# sourceMappingURL=main.59d63963.js.map