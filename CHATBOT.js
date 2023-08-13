let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerEl = document.getElementById('chatContainer');
let userInputEl = document.getElementById("userInput");

function sendMsgToChatbox() {
    let userMsg = userInputEl.value;


    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container")
    chatContainerEl.appendChild(msgContainerEl)
    console.log(chatContainerEl)

    let userMsgEl = document.createElement("span");
    userMsgEl.classList.add("msg-to-chatbot");
    userMsgEl.textContent = userMsg;
    msgContainerEl.appendChild(userMsgEl)

    userInputEl.value = '';
    getReplyFromChatbot();

}

function getReplyFromChatbot() {
    let noOfChatbotMsgs = chatbotMsgList.length;
    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsgs) - 1]

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(msgContainerEl)

    let chatbotMsgEl = document.createElement("span");
    chatbotMsgEl.textContent = chatbotMsg;
    chatbotMsgEl.classList.add("msg-from-chatbot")
    msgContainerEl.appendChild(chatbotMsgEl)

}
