
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
        name: "Youtube",
        img: "./img/yt-icon.svg",
        background: "background: rgb(66, 66, 66)",
        colorText: "rgb(202, 202, 202)",
        dynamicText: [
            `Subscribe to my Youtube channel,`, 
            `And <strong> never </strong> miss a VOD.`
        ]
    },
    {
        name: "Twitter",
        img: "./img/twitter-icon.svg",
        background: "background: rgb(66, 66, 66)",
        colorText: "rgb(202, 202, 202)",
        dynamicText: [
            `Follow me on Twitter @username,`,
            `Get notified with I go live.`,

        ]
    },
    {
        name: "Instgram",
        img: "./img/ig-icon.svg",
        background: "background: rgb(66, 66, 66)",
        colorText: "rgb(202, 202, 202)",
        dynamicText: [
            `Checkout my instagram @username,`, 
            `For game screenshots, video #shorts, and much more. `
        ]
    },
    {
        name: "Tiktok",
        img: "./img/tiktok-icon.svg",
        background: "background: rgb(66, 66, 66)",
        colorText: "rgb(202, 202, 202)",
        dynamicText: [
            `Follow me on tiktok @username,`, 
            `For cool video #shorts of the stream.`
        ]
    },
];