const quoteText = document.querySelector('.quote'),
quoteBTN = document.querySelector('button'),
authorName = document.querySelector('.author .name'),
soudnBtn = document.querySelector('.sound'),
copyBtn = document.querySelector('.copy'),
tweetBtn = document.querySelector('.tweet');


function randomQuote() {
    quoteBTN.classList.add('loading');
    quoteBTN.textContent = 'Loading...';
    fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(data => {
        quoteText.textContent = data.content;
        authorName.textContent = data.author;
        quoteBTN.textContent = 'New Quote';
        quoteBTN.classList.remove('loading');
    })
}


soudnBtn.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(quoteText.textContent);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    textarea.textContent = quoteText.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Quote copied to clipboard');
});

quoteBTN.addEventListener('click', randomQuote);

