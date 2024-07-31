const quotes = [
    { text: "Neuspjeh je prilika da se počne ponovo s više iskustva.", author: "Henry Ford" },
    { text: "Samo su dve stvari beskonačne: svemir i ljudska glupost; i nisam siguran za ovo prvo.", author: "Albert Einstein" },
    { text: "Uspeh nije krajnja stvar, neuspeh nije fatalan: hrabrost da se nastavi dalje je ono što se računa.", author: "Winston Churchill" }
];

const URL = 'https://random-quotes-freeapi.vercel.app/api/random';






async function fetchQuote() {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error('Mrežna greška: ' + response.status);
        }
        const data = await response.json();
        document.getElementById('quote').textContent = data.quote;
        document.getElementById('author').textContent = data.author;
    } catch (error) {
        console.error('Došlo je do greške prilikom preuzimanja citata:', error);
        document.getElementById('quote').textContent = 'Došlo je do greške pri preuzimanju citata.';
        document.getElementById('author').textContent = '';
    }
}
function tweetQuote() {
    const quote = document.getElementById('quote').textContent;
    const author = document.getElementById('author').textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + " - " + author)}`;
    window.open(twitterUrl, '_blank');
}

document.getElementById('tweet-quote').addEventListener('click', tweetQuote);
document.getElementById('new-quote').addEventListener('click', fetchQuote);

// Inicijalno postavljanje citata
fetchQuote();
