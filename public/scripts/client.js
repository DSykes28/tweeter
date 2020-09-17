/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

document.addEventListener('DOMContentLoaded', function () {
  
//  document.getElementById('tweet-text').addEventListener('keyup', (evt) => {
//    console.log(evt);
//  });
})


// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const createTweetElement = (tweetData) => {
  
  const markup = `
 <article>
 <header class="tweetData">
 <div class="name">${tweetData.user.name}</div>
 <p class="avatars">${tweetData.user.avatars}
 <div class="tagName">${tweetData.user.handle}
 </div>
 <p class="tweet-text">${tweetData.content.text}
 
 <footer>
 <footer class="created_at">${tweetData.created_at}
 <div>
 <img class="links" src='/images/flag.svg'>
 <img class="links" src='/images/repeat.svg'>
 <img class="links" src='/images/heart.svg'>
 </div>
 </footer>
 </article>
 `;
 
 return markup;
}

const renderTweets = function(tweets) {

  for (let tweet of tweets) {    // loops through tweets

    const tempTweet = createTweetElement(tweet)
  
    $('.container').append(tempTweet); 
  
  }

  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
}

$(document).ready( () => {
  renderTweets(data) 
  //const $tweet = createTweetElement(tweetData);
  //console.log($tweet); // to see what it looks like
  //$('.container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  // Test / driver code (temporary)

} );

