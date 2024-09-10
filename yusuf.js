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



// settings section 

const personOutput = document.querySelector('.person-output');
const speechOutput = document.querySelector('.speech-output');
const dataOutput = document.querySelector('.data-output');
const buildOutput = document.querySelector('.build-output');
const secureOutput = document.querySelector('.secure-output');

function genBtn(){
    const genOutput = document.querySelector('.gen-output');
    const personOutput = document.querySelector('.person-output');
    const speechOutput = document.querySelector('.speech-output');
    const dataOutput = document.querySelector('.data-output');
    const secureOutput = document.querySelector('.secure-output');
    secureOutput.style.display = 'none'
    dataOutput.style.display = 'none'
    personOutput.style.display = 'none';
    speechOutput.style.display = 'none'
    genOutput.style.display = 'flex'
}

function personBtn(){
    const personOutput = document.querySelector('.person-output');
    const genOutput = document.querySelector('.gen-output');
    const dataOutput = document.querySelector('.data-output');
    const secureOutput = document.querySelector('.secure-output');
    const speechOutput = document.querySelector('.speech-output');
     speechOutput.style.display = 'none'
    secureOutput.style.display = 'none'
    dataOutput.style.display = 'none'
    genOutput.style.display = 'none';
    personOutput.style.display = 'flex';
}

function speechBtn(){
    const speechOutput = document.querySelector('.speech-output');
    const personOutput = document.querySelector('.person-output');
    const genOutput = document.querySelector('.gen-output');
    const dataOutput = document.querySelector('.data-output');
    const secureOutput = document.querySelector('.secure-output');
    secureOutput.style.display = 'none'
    dataOutput.style.display = 'none'
    genOutput.style.display = 'none';
    personOutput.style.display = 'none';
    speechOutput.style.display = 'flex'
}

function dataBtn(){
    const speechOutput = document.querySelector('.speech-output');
    const personOutput = document.querySelector('.person-output');
    const genOutput = document.querySelector('.gen-output');
    const dataOutput = document.querySelector('.data-output');
    const secureOutput = document.querySelector('.secure-output');
    secureOutput.style.display = 'none'
    dataOutput.style.display = 'flex'
    genOutput.style.display = 'none';
    personOutput.style.display = 'none';
    speechOutput.style.display = 'none'
}

function secureBtn(){
    const speechOutput = document.querySelector('.speech-output');
    const personOutput = document.querySelector('.person-output');
    const genOutput = document.querySelector('.gen-output');
    const dataOutput = document.querySelector('.data-output');
    const secureOutput = document.querySelector('.secure-output');
    secureOutput.style.display = 'flex'
    dataOutput.style.display = 'none'
    genOutput.style.display = 'none';
    personOutput.style.display = 'none';
    speechOutput.style.display = 'none'
}

// close section 
function close(){
    const setContainer = document.querySelector('.set-container');
    setContainer.style.display = 'none';
}






