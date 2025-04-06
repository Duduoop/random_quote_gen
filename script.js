const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
#API???
const apiURL = "https://api.quotable.io/random";

async function getQuote() {
    try {
        btnEl.innerText = "Loading...";
        btnEL.disabled = true;
        quoteEl.innerText = "Updating...";
        authorEl.innerText = "Updating...";
        const response = await fetch(apiURL);
        const data = await response.json();
        const quoteContent = data.content;
        const QuoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innnerText = "Get a quote";
        btnEl.disabled = false;
        console.log(data);
} catch (error) {
    console.log(error);
    quoteEL.innerText = "An error happend, try again later, maybe?";
    authorEl.innerText = "An error happend";
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
    }