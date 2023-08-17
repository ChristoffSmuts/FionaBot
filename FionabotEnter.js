
var Fiona = new FionaBot();
var FionaLines = new Array();

var displayCols = 60;
var displayRows = 20;


function focusinput() {
    document.getElementById('inputField').focus();
}

// Add an event listener to the input field with ID "inputField"
document.getElementById("inputField").addEventListener("keydown", function(event) {
    // Check if the key pressed is the Enter key (key code 13)
if (event.keyCode === 13) {
// Call FionaStep() function when the Enter key is pressed
   
FionaStep();
 // Prevent the default form submission behavior when pressing Enter in a text field
   
  event.preventDefault();

}
});







function FionaReset() {
	Fiona.reset();
	FionaLines.length = 0;
	FionaStep();
}



function FionaStep() {
  var element = document.getElementById("fiona-activity");
  element.textContent = "Typing...";

  var f = document.forms.e_form;
  var userinput = f.e_input.value;
  var todolistedit = false
  
  /*++++++++++++++++++++++++++++++++++++++++++++
  CONTINUE HERE
  ++++++++++++++++++++++++++++++++++++++++++++

  // To do list happens here <<under construction>>
  if (todolistedit != true){

    const toDoListRegex = /(to-do list|to do list|what is on my to do list|create a to do list|what do I have to do today)/i;
    
    if (toDoListRegex.test(userinput)) {
      alert("to do list on");
      
  }
+++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++*/
  
  
  // Check if Fiona has been introduced to the user
  if (!Fiona.introduced) {
    if (userinput.toLowerCase().startsWith("my name is")) {
      var userName = userinput.substring(11).split(' ')[0]; // Extract the first word after "my name is"
      Fiona.introduced = true; // Mark Fiona as introduced

      var introduction = `FIONA:  Hello ${userName}, I am Fiona, pleased to meet you.`;

      FionaLines.push(`You:    ${userinput}`); // Store user input
      FionaLines.push(introduction);
      f.e_display.value = FionaLines.join('\n');
      element.textContent = "Online";

      // Clear the input field
      f.e_input.value = '';
      f.e_input.focus();

      // Call EmotionCheck() and readChatStream() functions
      EmotionCheck();
      readChatStream();

      return;
    }
  }

  if (userinput != '') {
    var lastUserLine = FionaLines[FionaLines.length - 2]; // Get the second to last line
    if (!lastUserLine || lastUserLine.startsWith("You:")) { // Check if the user's input was the last line
      var usr = 'You:    ' + userinput; // Store user input
      var rpl = 'FIONA:  ' + Fiona.transform(userinput);
      FionaLines.push(usr);

      f.e_display.value = FionaLines.join('\n');

      setTimeout(function () {
        FionaLines.push(rpl);
        var temp = new Array();
        var l = 0;
        for (var i = FionaLines.length - 1; i >= 0; i--) {
          l += 1 + Math.floor(FionaLines[i].length / displayCols);
          if (l >= displayRows) break;
          else temp.push(FionaLines[i]);
        }
        FionaLines = temp.reverse();
        element.textContent = "Online";
        f.e_display.value = FionaLines.join('\n');
        readChatStream();
      }, 2000);
    }
  } else if (FionaLines.length == 0) {
    var initial = 'FIONA:  ' + Fiona.getInitial();

    function initialLines() {
      FionaLines.push(initial);
      f.e_display.value = initial + '\n';
      element.textContent = "Online";
      readChatStream();
    }

    setTimeout(initialLines, 1000);
  }

  f.e_input.value = '';
  f.e_input.focus();
  EmotionCheck();
}

//++++
//}
///++++
function EmotionCheck() {
    let textAreaData = document.getElementById("ResponseTextArea").value;
    console.log(textAreaData);
  
    let reverseTextArray = [];
    let dataArray = textAreaData.split(' ');
  
    for (let i = dataArray.length - 1; i >= 0; i--) {
      reverseTextArray.push(dataArray[i]);
      if (dataArray[i] === "Fiona") {
        break;
      }
    }
  
    console.log(reverseTextArray);
  
    let EmotionalState = "Unknown";
  
    for (const word of reverseTextArray) {
      if (["happy", "cheerful", "enjoy", "interesting", "surprise"].includes(word.toLowerCase())) {
        EmotionalState = "Happy";
        const imgElement = document.querySelector(".profilepic");
        imgElement.src = "Emotions/Fiona_Happy.png";
        reverseTextArray = [];
        break;
      
      } else if (["excited", "good", "grateful", "like"].includes(word.toLowerCase())) {
        EmotionalState = "very happy";
        const imgElement = document.querySelector(".profilepic");
        imgElement.src = "Emotions/Fiona_Very_Happy.png";
        reverseTextArray = [];
        break;

      } else if (["sad", "depressed", "angry", "fear", "numb", "sick", "mad" , "crazy", "disgust", "disgusting", "unhappy", "disgusted", "don't like"].includes(word.toLowerCase())) {
        EmotionalState = "Sad";
        const imgElement = document.querySelector(".profilepic");
        imgElement.src = "Emotions/Fiona_Sad.png";
        reverseTextArray = [];
        break;
      // } else if (["numb", "indifferent", "neutral", "understand", "computer", "machine", "suggest","feelings", "please don't talk like that to me.",
      // "you have a dirty mouth, don't kiss your mother with that!",
      // "please mind your manners.","i'm going to ignore you if you don't mind your manners!",
      // "wow, real class of you to use vulgar language like that."].includes(word.toLowerCase())) {
      //   EmotionalState = "numb";
      //   const imgElement = document.querySelector(".profilepic");
      //   imgElement.src = "Emotions/Fiona_Neutral.png";
      //   reverseTextArray = [];
      //   break;
      // }
    } else if ([
      "numb", 
      "indifferent", 
      "neutral", 
      "understand", 
      "computer", 
      "machine", 
      "suggest",
      "feelings",
      "please don't talk like that to me.",
      "you have a dirty mouth, don't kiss your mother with that!",
      "please mind your manners.",
      "i'm going to ignore you if you don't mind your manners!",
      "wow, real class of you to use vulgar language like that."
  ].map(str => str.toLowerCase()).includes(word.toLowerCase())) {
      EmotionalState = "numb";
      const imgElement = document.querySelector(".profilepic");
      imgElement.src = "Emotions/Fiona_Neutral.png";
      reverseTextArray = [];
      break;
  }
  
    }
  
    console.log("Emotional State:", EmotionalState);
    var element = document.getElementById("fiona-activity");

  }
  
/*
// Add an event listener to the input field with ID "inputField"
document.getElementById("inputField").addEventListener("keydown", function(event) {
    // Check if the key pressed is the Enter key (key code 13)
    if (event.keyCode === 13) {
      // Prevent the default form submission behavior when pressing Enter in a text field
      event.preventDefault();
      
      // Call the checkFionaEmotion() function when the Enter key is pressed
      checkFionaEmotion();
      
      // Call the FionaStep() function here if it is defined, otherwise comment out or remove this line
      // FionaStep();
    }
  });
  */
/*   function checkFionaEmotion() {
     let textAreaData = document.getElementById("ResponseTextArea").value;
    console.log(textAreaData);
  }
 */
  

  
  // JavaScript
  function readChatStream() {
    const textArea = document.getElementById("ResponseTextArea");
    const textToRead = getLastLineFromFiona(textArea.value);
  
    if (textToRead) {
      // Check if ResponsiveVoice.js is available
      if ('responsiveVoice' in window) {
        // Use ResponsiveVoice.js if available
        responsiveVoice.speak(textToRead, "UK English Female", {
          onend: () => {
            // Code to execute after speech is finished, if needed
          },
        });
      } else {
        // If ResponsiveVoice.js is not available, fallback to Web Speech API
        const synthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(textToRead);
  
        // Use a female voice for reading the last line
        utterance.voice = getFemaleVoice(synthesis);
  
        if (utterance.voice) {
          synthesis.speak(utterance);
        } else {
          alert("Sorry, no female voice is available in your browser.");
        }
      }
    } else {
      alert("No text found for Fiona.");
    }
  }
  
  function getLastLineFromFiona(text) {
    // Split the text into lines
    const lines = text.split('\n');
  
    // Find the last line said by Fiona
    let lastLine;
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].startsWith("FIONA:")) {
        lastLine = lines[i].replace("FIONA:", "").trim();
        break;
      }
    }
  
    return lastLine || "No text found for Fiona.";
  }
  
  function getFemaleVoice(synthesis) {
    const voices = synthesis.getVoices();
  
    // Filter for a female voice (based on language and name)
    const femaleVoice = voices.find(voice => voice.name.includes('female') && voice.lang.includes('en'));
  
    if (femaleVoice) {
      return femaleVoice;
    } else {
      // Fallback to ResponsiveVoice.js default female voice
      return {
        name: 'UK English Female',
        lang: 'en-GB',
      };
    }
  }

  
            