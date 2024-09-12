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

let userText = null;

const loadDataFromLocalStorage = () => {
  chatContainer.innerHTML = localStorage.getItem("the question");
};
loadDataFromLocalStorage();

const createElement = (html, className) => {
  const chatDiv = document.createElement("div");
  chatDiv.classList.add("chat", className);
  chatDiv.innerHTML = html;
  return chatDiv;
};

const showTypingAnimation = () => {
  const outgoingChatDiv = createElement(html, "incoming");
  chatContainer.appendChild(outgoingChatDiv);
  getChatResponse();
};

const handleOutgoingChat = () => {
  userText = chatInput.value.trim();
  const html = `<div class="chat-content text-end  mx-12">
              <div class="chat-details">
                <h1 class="text-xl">
                  ${userText}
                </h1>
              </div>
            </div>`;
  const outgoingChatDiv = createElement(html, "outgoing");
  chatContainer.appendChild(outgoingChatDiv);
  localStorage.setItem("the question", html);
  chatInput.value = "";
};
sendButton.addEventListener("click", handleOutgoingChat);

// Dark and light mode toggle --------------------------------------------------------------
const body = document.body;
function enableDarkMode() {
  moonIcon.classList.remove("hidden");
  sunIcon.classList.add("hidden");
}

// Function to disable dark mode
function disableDarkMode() {
  moonIcon.classList.add("hidden");
  sunIcon.classList.remove("hidden");
}

// When the close button is clicked the following should happen
closeBtn.addEventListener("click", () => {
  sidebar.classList.add("hidden");
  closeBtn.classList.add("hidden");
  openBtn.classList.remove("hidden");
});

// When the open button is clicked the following should happen
openBtn.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
  openBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
});

sunIcon.addEventListener("click", () => {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  chatInput.style.backgroundColor = "#4b5563";
  // Dark mode styles for sidebar
  sidebar.style.backgroundColor = "black";
  sidebar.style.color = "white";

  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
});

moonIcon.addEventListener("click", () => {
  // switching back to light mode
  body.style.backgroundColor = "white";
  body.style.color = "black";
  chatInput.style.backgroundColor = "white";

  sidebar.style.backgroundColor = "#f1f1f1";
  sidebar.style.color = "black";

  moonIcon.classList.add("hidden");
  sunIcon.classList.remove("hidden");
});
//  handle the sidebar use history-------------------------------------------------------

const handleHistory = () => {};
