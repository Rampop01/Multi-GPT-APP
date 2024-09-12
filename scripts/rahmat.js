const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");
const themeButton = document.querySelector(".theme_btn");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");
const bodyMode = document.body;
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.getElementById("closeSidebar");
const openBtn = document.getElementById("openSidebar");
const userHistory = document.getElementById("userHistory");
const newChat = document.querySelector(".new-chat");
const chatDetails = document.querySelector(".chat-content");
import { generateData } from "./bolaji.js";
// const { generateData } = require("./bolaji.js");
let userText = null;

// Load data from local storage if available
const loadDataFromLocalStorage = () => {
  chatContainer.innerHTML = localStorage.getItem("the question") || "";
};
loadDataFromLocalStorage();

// Create a chat message element
const createElement = (html, className) => {
  const chatDiv = document.createElement("div");
  chatDiv.classList.add("chat", className);
  chatDiv.innerHTML = html;
  return chatDiv;
};

// Show the typing for user to know that the response is loading
const showTypingAnimation = async () => {
  const result = await generateData(userText);
  const typingHtml = `<div class="m-8 typing">typing...</div>
  `;
  const incomingChatDiv = createElement(typingHtml, "incoming");
  chatContainer.appendChild(incomingChatDiv);
  setTimeout(() => {
    incomingChatDiv.remove();
    getChatResponse(result);
  }, 2000);
};

// we are meant to use API here its not free,so here its manual response
const getChatResponse = (response) => {
  const responseHtml = `<div class="md:mx-24 mx-4 mt-8 flex gap-4 chat incoming mb-4">
            <img
              src="/images/output_new_rounded.ico"
              alt=""
              class="w-6 h-6 rounded-full border-[#b1640b] border-2"
            />
            <div class="chat-content">
              <div class="chat-details">
                <h1
                  class="dark:bg-gray-800 bg-gray-200 shadow-md shadow-gray-700 w-fit p-4"
                >
                  ${response}
                </h1>
              </div>
              <div class="flex mt-4 gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                  />
                </svg>
              </div>
            </div>
          </div>`;
  const incomingChatDiv = createElement(responseHtml, "incoming");
  chatContainer.appendChild(incomingChatDiv);
};

// Handling the user's message-------------------------------------------------------------------
const handleOutgoingChat = () => {
  userText = chatInput.value.trim();

  if (userText === "") return;

  //  the user message HTML structure
  const html = `<div class="chat-content text-end mx-12">
              <div class="chat-details">
                <h1 class="text-xl">${userText}</h1>
              </div>
            </div>`;

  //here i Append the outgoing message to the chat container
  const outgoingChatDiv = createElement(html, "outgoing");
  chatContainer.appendChild(outgoingChatDiv);

  localStorage.setItem("the question", html);

  chatInput.value = "";

  newChat.style.display = "none";

  showTypingAnimation();
};

// Adding event listener to send button to trigger user message
sendButton.addEventListener("click", handleOutgoingChat);

// Dark and light mode toggle --------------------------------------------------------------
const body = document.body;

function enableDarkMode() {
  moonIcon.classList.remove("hidden");
  sunIcon.classList.add("hidden");
}

function disableDarkMode() {
  moonIcon.classList.add("hidden");
  sunIcon.classList.remove("hidden");
}

// When the close button is clicked, the sidebar will be hidden
closeBtn.addEventListener("click", () => {
  sidebar.classList.add("hidden");
  closeBtn.classList.add("hidden");
  openBtn.classList.remove("hidden");
});

// When the open button is clicked, the sidebar show
openBtn.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
  openBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
});

// Toggling between dark and light mode manually with colors
sunIcon.addEventListener("click", () => {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  chatInput.style.backgroundColor = "#4b5563";

  sidebar.style.backgroundColor = "black";
  sidebar.style.color = "white";

  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
});

moonIcon.addEventListener("click", () => {
  body.style.backgroundColor = "white";
  body.style.color = "black";
  chatInput.style.backgroundColor = "white";

  sidebar.style.backgroundColor = "#f1f1f1";
  sidebar.style.color = "black";

  moonIcon.classList.add("hidden");
  sunIcon.classList.remove("hidden");
  chatDetails.style.backgroundColor = "black";
});

//  Handle the sidebar use history -------------------------------------------------------

const handleHistory = () => {};

//
