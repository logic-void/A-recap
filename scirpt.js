let toClicked = false;
let toKissed = false;
let click;
let kiss = 0;
let scrollId;
let scrollNum = 1;
const finalTexts = document.querySelector(".final-texts");
const textsContainer = document.querySelector(".texts-container");
const chatHeader = document.querySelector(".chat-header");
const chatFooter = document.querySelector(".chat-footer");
const chatBg = document.getElementById("chatbg");
const chatScreen = document.querySelector(".chat-screen");
const tagline = document.querySelector(".tagline");
const tagdate = document.querySelector(".tagdate");
const passVal = "114251";
const password = document.getElementById("password");
const cytButt = document.querySelector(".cyt-butt");
const startBtn = document.getElementById("startBtn");
const container = document.querySelector(".container");
const guide = document.getElementById("guide");
const guideMsg = document.querySelector(".guide-msg");
const bubble1 = document.querySelector(".bubble1");
const bubble2 = document.querySelector(".bubble2");
const finalText =
    "<p>Ai ekchuli made this phol a reason</p><p>Banna guess bhat it can be? Something about how yu neber bud hab expected that phirst convo to become 2 years of your life.</p><p>Maybe yu guessed it by now, these two years were my best 2 years, ai bud albays choose to re-live these 2 years bith yuu..</p><p>Two years of us.. This is only our second anniversary, ai bant there to be many more than this and at every moment ai bant yu to remember that I'm yours and AI LOB YU</p><p>Happy second anniversary, My dumbo..</p>";
function moveElement(elem, move, duration) {
    elem.style.transition = `transform ${duration}`;
    elem.style.transform = `translate(${move[0]},${move[1]})`;
}
setTimeout(() => {
    moveElement(guide, ["60%", "0"], "1200ms 500ms ease");
    setTimeout(() => {
        guide.src = "front.png";
    }, 1800);
    sendMessage(
        "Baiting phol someban huh? Ohh me? Me maaltin's billa, your guide phol this nalli journey🐐",
        1,
        2500
    );
}, 2000);
guideMsg.addEventListener("click", closeMessage);
startBtn.addEventListener("click", handleKiss);
function typeWriter(text, element) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML = text.slice(0, i + 1) + "|";
            i++;
            setTimeout(type, 75);
        } else {
            element.innerHTML = text;
        }
    }
    type();
}
function sendMessage(message, num, ms, clicked = true) {
    setTimeout(() => {
        click = num;
        toClicked = clicked;
        guideMsg.textContent = message;
        guideMsg.classList.add("open");
        bubble1.classList.add("show");
        bubble1.style.opacity = "1";
        bubble2.classList.add("show");
        bubble2.style.opacity = "1";
    }, ms);
}
function kissUpdate(message, num = kiss) {
    kiss = num;
    guideMsg.classList.add("font-color");
    setTimeout(() => {
        guideMsg.textContent = message;
    }, 600);
    setTimeout(() => {
        guideMsg.classList.remove("font-color");
    }, 1000);
}
function checkPass(message, num) {
    const input = password.value.trim();
    password.value = "";
    if (input != passVal) {
        toKissed = true;
        return kissUpdate(message, num);
    } else {
        setTimeout(showChatScreen, 3000);
        if (kiss <= 2) {
            return kissUpdate("Omaigaat kar bhi diya? mwahh💋");
        } else {
            return kissUpdate(
                `bheri gud mah bacha🥹 kya mtlb ${kiss} attempts lg gye`
            );
        }
    }
}
function handleKiss() {
    if (!toKissed) return;
    toKissed = false;
    switch (kiss) {
        case 0:
            kissUpdate(
                "Banna start bithout probiding anything? bheri unphair.",
                1
            );
            moveElement(cytButt, ["0", "50%"], "500ms 2500ms ease");
            password.style.transition = "transform 1500ms 4000ms ease";
            password.style.transform =
                "translate(0,max(-15vw,-150px)) rotate(90deg)";
            setTimeout(() => {
                moveElement(cytButt, ["-100%", "50%"], "500ms ease");
                moveElement(password, ["0%", "0%"], "1000ms 500ms ease");
                kissUpdate(
                    "Yu bill get ban hint at ebery attempt, passbord's length is 6🐐"
                );
                toKissed = true;
            }, 6000);
            break;
        case 1:
            checkPass("All numeric🐐✌🏻", 2);
            break;
        case 2:
            checkPass("Numbers related to your name🐐", 3);
            break;
        case 3:
            checkPass("Passbord is **4*5*👺", 4);
            break;
        case 4:
            checkPass("Your name in numbers👺", 5);
            break;
        default:
            checkPass("not my fault now🐥💔");
            break;
    }
}
function closeMessage() {
    if (!toClicked) return;
    toClicked = false;
    bubble1.style.opacity = "0";
    bubble2.style.opacity = "0";
    setTimeout(() => {
        bubble1.classList.remove("show");
        bubble2.classList.remove("show");
        guideMsg.classList.remove("open");
    }, 500);
    switch (click) {
        case 1:
            guide.src = "right.png";
            setTimeout(() => {
                guide.src = "front.png";
            }, 4100);
            moveElement(guide, ["200%", "0"], "1500ms 2500ms ease");
            sendMessage("Yu coming, right?🥺😞", 2, 4000);
            break;
        case 2:
            guide.src = "right.png";
            setTimeout(() => {
                guide.src = "front.png";
            }, 5600);
            moveElement(guide, ["300%", "0"], "1000ms 2500ms ease-in");
            moveElement(startBtn, ["-100%", "0"], "1500ms 4000ms ease");
            setTimeout(() => {
                guideMsg.classList.add("no-guide");
                guide.src = "left.png";
                setTimeout(() => {
                    guide.src = "front.png";
                }, 600);
                moveElement(guide, ["280%", "0"], "500ms ease");
                sendMessage("Gibe kichi to kantiniyu😞", 3, 500, false);
                toKissed = true;
            }, 6000);
            break;
        case 4:
            setTimeout(() => {
                chatBg.classList.add("show");
                setTimeout(() => {
                    chatHeader.classList.add("show");
                    chatFooter.classList.add("show");
                }, 1000);
                bubble1.classList.add("show");
                bubble2.classList.add("show");
                guideMsg.classList.add("no-guide");
                sendMessage("Here it is, hasna mat😞", 4, 500, false);
                toKissed = true;
                setTimeout(showTexts, 4000);
            }, 4000);
            break;
        case 5:
            setTimeout(() => {
                chatBg.classList.remove("show");
                chatHeader.classList.remove("show");
                chatFooter.classList.remove("show");
                textsContainer.style.opacity = "0";
                guide.style.opacity = "0";
            }, 2000);
            setTimeout(() => {
                tagline.textContent = "And this is where everything started..";
                tagline.classList.add("show");
                setTimeout(() => {
                    tagline.classList.remove("show");
                }, 4000);
                setTimeout(() => {
                    typeWriter(finalText, finalTexts);
                }, 8500);
            }, 5000);
            break;
    }
}
function showTexts() {
    scrollId = setInterval(() => {
        textsContainer.style.transform = `translateY(${60 - scrollNum}%)`;
        scrollNum++;
        document
            .querySelector(
                `.texts-container .text:nth-child(${Math.floor(scrollNum / 7) + 1})`
            )
            .classList.add("show");
        if (
            document
                .querySelector(".texts-container .text:last-child")
                .classList.contains("show")
        ) {
            clearInterval(scrollId);
            guideMsg.classList.remove("no-guide");
            toClicked = true;
            click = 5;
            kissUpdate(
                "Yhi yaad aaya bas😞💔 bell yhi tha bs dikhane ke liye to💔"
            );
        }
    }, 300);
}
function showChatScreen() {
    chatScreen.classList.add("show");
    tagline.classList.add("show");
    tagdate.classList.add("show");
    setTimeout(() => {
        startBtn.style.display = "none";
        password.style.display = "none";
        guide.style.transform = "translate(-100%,0)";
        toClicked = true;
        closeMessage();
        tagline.classList.remove("show");
        tagdate.classList.remove("show");
    }, 4000);
    setTimeout(() => {
        guide.style.zIndex = "1";
        guideMsg.style.zIndex = "1";
        bubble1.style.zIndex = "1";
        bubble2.style.zIndex = "1";
        guideMsg.classList.remove("no-guide");
        guide.src = "right.png";
        setTimeout(() => {
            guide.src = "front.png";
        }, 1300);
        moveElement(guide, ["40%", "0"], "1200ms ease");
        sendMessage("Ohh yeaahh me again🐐✌🏻", 4, 2000);
    }, 8000);
}
