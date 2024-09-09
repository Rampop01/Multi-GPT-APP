// micro phone function
document.addEventListener('DOMContentLoaded', () => {
    const micBtn = document.querySelector('.mic-btn');
    const chatBox = document.querySelector('.chat-box');

    // API for voice recognition

    const recognition = new webkitSpeechRecognition();
    // Stop after a single result
    recognition.continuous = false; 
     // intermediate results 
    recognition.interimResults = true; 

    // converts the speech into Text
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        chatBox.value += transcript +  '\n';
    };

    recognition.onend = function() {
        transcriptElement.textContent = 'Speech recognition has stopped. Click the button to listen again.';
    };

    // if the speech isnt recognized
    recognition.onerror = (event) => {
        console.error('Speech recognition error', event);
    };

    // mic start button 
    micBtn.addEventListener('click', () => {
        recognition.start();
    });
});


// upload botton 
const uploadBtn = document.querySelector('.upload-btn');
const imgUpload = document.querySelector('.img-upload');

uploadBtn.addEventListener('click', function() {
    imgUpload.click(); 
})
