const tweetButton = document.getElementById('tweetButton');
const tweetsContainer = document.getElementById('tweetsContainer');

tweetButton.addEventListener('click', () => {
  const tweetText = prompt('Enter your tweet:');
  if (tweetText) {
    const tweetElement = document.createElement('div');
    tweetElement.classList.add('tweet');
    tweetElement.textContent = tweetText;
    tweetsContainer.appendChild(tweetElement);
  }
});
