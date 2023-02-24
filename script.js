const quoteText = document.querySelector('.quote'),
quoteBTN = document.querySelector('button'),
authorName = document.querySelector('.author .name'),
soudnBtn = document.querySelector('.sound'),
copyBtn = document.querySelector('.copy'),
tweetBtn = document.querySelector('.tweet');


function randomQuote() {
    quoteBTN.classList.add('loading');
    quoteBTN.textContent = 'Loading...';
    fetch('https://animechan.vercel.app/api/random/character?name=vegeta')
    .then(res => res.json())
    .then(data => {
        quoteText.textContent = data.quote;
        authorName.textContent = data.character;
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

function changeBackground() {
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#9e9e9e', '#607d8b'];
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
}

quoteBTN.addEventListener('click', randomQuote);
quoteBTN.addEventListener('click', changeBackground);
