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
    // console.log(journalCollection)
}

