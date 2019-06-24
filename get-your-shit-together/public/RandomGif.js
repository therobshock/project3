const randGifPics = {
    "1": "https://media.giphy.com/media/acttIrNAHaoco/giphy.gif",
    "2": "https://media.giphy.com/media/5xaOcLCBzBw4QrtdDP2/giphy.gif",
    "3": "https://media.giphy.com/media/26tP41fh76vmLO3iU/giphy.gif",
    "4": "https://media.giphy.com/media/2w6I6nCyf5rmy5SHBy/giphy.gif",
    "5": "https://media.giphy.com/media/Kn4OiLgzF8l0Y/giphy.gif",
    "6": "https://media.giphy.com/media/3o6ZsVZwQ43bTfhXOM/giphy.gif",
    "7": "https://media.giphy.com/media/oEnTTI3ZdK6ic/giphy.gif",
    "8": "https://media.giphy.com/media/3MgLhAYvkqIz2UP5g9/giphy.gif",
    "9": "https://media.giphy.com/media/1Ye9WbIX7dsCE3lT2f/giphy.gif",
    "10": "https://media.giphy.com/media/26tP41fh76vmLO3iU/giphy.gif",
    "11": "https://media.giphy.com/media/l0HlvLUTZLNJYE2m4/giphy.gif",
    "12": "https://media.giphy.com/media/yRNSxsl1rJEwU/giphy.gif",
}
const values = Object.values(randGifPics)

const randomValue = values[parseInt(Math.random() * values.length)]

console.log("<img src='"+randomValue+"'>")

document.getElementById("randomGif").innerHTML = "<img class='randomimg' src='"+randomValue+"'>";


function randomQuotes() {
   const randQuotes = {
        "1": "Quote 1",
        "2": "Quote 2",
        "3": "Quote 3"
    }


const values = Object.values(randQuotes)

const randomValue = values[parseInt(Math.random() * values.length)]

console.log(randomValue)

document.getElementById("randomQuote").innerHTML = "<p class='randomquote'>"+randomValue+ "</p>"; 
};

randomQuotes();
