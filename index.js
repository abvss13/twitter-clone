const tweetButton = document.getElementById('tweetButton');
const tweetsContainer = document.getElementById('tweetsContainer');

const tweets = [
  { author: 'John Doe', content: 'Just had a great day outdoors! 🌞' },
  { author: 'Jane Smith', content: 'Excited to start a new project! 🚀' },
  { author: 'Sam Johnson', content: 'Enjoying a cup of coffee and coding ☕' },
  // Add more tweets here
];

tweetButton.addEventListener('click', () => {
  const tweetText = prompt('Enter your tweet:');
  if (tweetText) {
    const newTweet = { author: 'You', content: tweetText };
    tweets.unshift(newTweet); // Add new tweet to the beginning of the array
    displayTweets();
  }
});

function displayTweets() {
  tweetsContainer.innerHTML = '';

  tweets.forEach(tweet => {
    const tweetElement = document.createElement('div');
    tweetElement.classList.add('tweet');

    const tweetAuthor = document.createElement('p');
    tweetAuthor.classList.add('tweet-author');
    tweetAuthor.textContent = tweet.author;

    const tweetContent = document.createElement('p');
    tweetContent.classList.add('tweet-content');
    tweetContent.textContent = tweet.content;

    tweetElement.appendChild(tweetAuthor);
    tweetElement.appendChild(tweetContent);

    tweetsContainer.appendChild(tweetElement);
    tweetsContainer.appendChild(document.createElement('div')).classList.add('tweet-divider');
  });
}

displayTweets(); // Initial display
