
/*

Basic HTML code know-how:
<br> - line break
<strong> - bold text
<font-size> - font size
<line-height> - line height


google HTML color picker for RGB codes. 

Make sure there is a closing tag for each opening tag. ie, </ strong> except for <br>
use W3C School website for help if you need assistance. 

*/

const banners = [
    {
        name: "Vivo Easy",
        img: "./img/vivo-easy.png",
        background: "background: rgb(200, 200, 200)",
        colorText: "#000",
        dynamicText: [
            `Use o cupom<br><strong>N1PW</strong>`, // Put html code between backticks and separated with , (comma). Each group is a slide for this image
            `<span style="display: block; font-size: 15px; line-height: 15px">
                GANHE <strong>35 R$</strong> <br>PARA USAR COM <br>CRÉDITOS OU INTERNET
            </span>
            `
        ]
    },
    {
        name: "PicPay",
        img: "./img/picpay.svg",
        background: "background: rgb(200, 200, 200)",
        colorText: "#000",
        dynamicText: [
            `Use o cupom<br><strong>DGNYZX</strong>`, // Put html code between backticks and separated with , (comma). Each group is a slide for this image
            `<span style=" font-size: 15px; line-height: 15px">
            Faça sua conta <br> e ganhe <strong>10 R$ de bônus</strong>
            </span>
            `
        ]
    },
    {
        name: "Roxx Energy",
        img: "./img/roxx.png",
        background: "background: rgb(200, 200, 200)",
        colorText: "#000",
        dynamicText: [
            `Use o cupom<br><strong>nipw-10</strong>`, // Put html code between backticks and separated with , (comma). Each group is a slide for this image
            `<span style="font-size: 15px; line-height: 15px">
                Ganhe <strong>10%</strong> de desconto em todo o site
            </span>
            `
        ]
    },
    {
        name: "WhatsApp",
        img: "./img/whatsapp.jpg",
        background: "background: rgb(200, 200, 200)",
        colorText: "#000",
        dynamicText: [
            `Faça parte do nosso grupo no Whats`, // Put html code between backticks and separated with , (comma). Each group is a slide for this image
        ]
    },
];