// General front end actions

// Answer validators for the quests
async function checkAnswerQuest01() {
    
    let answerInput = document.getElementById("quest01-answer").value;
    if (answerInput == "Dedication") {  
        
        await incrementKillCount();
        alert("Good job, adventurer!");
        window.location.href = "/home.html"
    } else if (answerInput == "" || answerInput == " ") {    
        alert("You must put an answer!");
    } else {
        alert("Incorrect answer, Adventurer!");
    }
}
async function checkAnswerQuest02() {
    
    let answerInput = document.getElementById("quest02-answer").value;
    if (answerInput == "Integrity") {  
        
        await incrementKillCount();
        alert("Good job, adventurer!");
        window.location.href = "/home.html"
    } else if (answerInput == "" || answerInput == " ") {    
        alert("You must put an answer!");
    } else {
        alert("Incorrect answer, Adventurer!");
    }
}
async function checkAnswerQuest03() {
    
    let answerInput = document.getElementById("quest03-answer").value;
    if (answerInput == "Resilience") {  
        
        await incrementKillCount();
        alert("Good job, adventurer!");
        window.location.href = "/home.html"
    } else if (answerInput == "" || answerInput == " ") {    
        alert("You must put an answer!");
    } else {
        alert("Incorrect answer, Adventurer!");
    }
}
// Increment kill count when button is clicked

// this stupid ass function tells me "Failed to Fetch" yet works properly as expected...
// Im going insane... so Im just gonna ignore this, dont fix what isnt broken
async function incrementKillCount() {
    try {
        const response = await fetch('/add_kc', { method: 'PUT' });

        if (!response.ok) {  // Check if the response is an error
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        document.getElementById('killCount').textContent = data.newKillCount;
        
    } catch (error) {
        console.error("Error updating kill count:", error.message);
    }
}




