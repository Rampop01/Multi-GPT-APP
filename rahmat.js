const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");

let userText = null;

const createElement = (html, className) => {
  const chatDiv = document.createElement("div");
  chatDiv.classList.add("chat", className);
  chatDiv.innerHTML = html;
  return chatDiv;
};

const getChatResponse = async () => {
  const API_URL = "https://api.openai.com/v1/completions";

  // const requestOptions = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${}`,
  //   },
  //   body: JSON.stringify({
  //     model: "gpt-3.5-turbo-instruct",
  //     prompt: userText,
  //     max_tokens: 7,
  //     temperature: 0,
  //     n: 1,
  //     stop: null,
  //   }),
  // };
  try {
    const response = await (await fetch(API_URL, requestOptions)).json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const showTypingAnimation = () => {
  const outgoingChatDiv = createElement(html, "incoming");
  chatContainer.appendChild(outgoingChatDiv);
  getChatResponse();
};

const handleOutgoingChat = () => {
  userText = chatInput.value.trim();
  const html = `<div class="chat-content text-end mx-12">
              <div class="chat-details">
                <h1>
                  ${userText}
                </h1>
              </div>
            </div>`;
  const outgoingChatDiv = createElement(html, "outgoing");
  chatContainer.appendChild(outgoingChatDiv);
};
sendButton.addEventListener("click", handleOutgoingChat);
