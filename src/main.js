var krafftWord = 'KurtRules1'


var checkPassword = () => {
    var pWord = document.getElementById("pWord").value
    // console.log(pWord)
    if (pWord == krafftWord) {
        alert("hey you got it buddy!")
    } else {
        alert("Sorry, try again mane")
    }
}
var joiningKrew = () => {
    alert("Thanks for trying, unfortunately, this function isn't working yet :(")
}
const journalCollection = []

var createEntry = () => {
    const journalEntry = {
    'date': document.getElementById("journalDate").value,
    'topic': document.getElementById("topic").value,
    'textarea': document.getElementById("journalText").value,
    'mood': document.getElementById("moodOptions").value,
    'password': document.getElementById("pWord").value,
    
    }
    journalCollection.push(journalEntry)
    console.log(journalCollection)
}

var logEntry = () => {
    for (let i=0; i<journalCollection.length; i++){
        var Html = ` <div class="entry">
        <h1><em>${journalCollection[i].date}</em></h1>
        <p>Topic: ${journalCollection[i].topic}</p>
        <p>Entry: ${journalCollection[i].textarea}</p>
        <p>Mood: ${journalCollection[i].mood}</p>
    </div>`;
    var bodyTwoDiv = document.querySelector(".bodyTwo");
        bodyTwoDiv.innerHTML= Html;
    }

}


