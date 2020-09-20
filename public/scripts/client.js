/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

document.addEventListener('DOMContentLoaded', function () {

});

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

const createTweetElement = (tweetData) => {
  const markup = `
 <article>
 <header class="tweetData">
 <div class="name">${tweetData.user.name}
 <img class="avatars" src=${tweetData.user.avatars}>
 <div class="tagName">${tweetData.user.handle}
 </div>
 <p class="tweet-text">${escape(tweetData.content.text)}
 <footer>
 <footer class="created_at">${new Date(tweetData.created_at)}
 <img class="links" src='/images/flag.svg'>
 <img class="links" src='/images/repeat.svg'>
 <img class="links" src='/images/heart.svg'>
 `;
 return markup;
};

const renderTweets = function(tweets) {
  $(".tweet-container").empty();
  $("#errorEmpty").hide();
  $("#errorLong").hide();
  for (let tweet of tweets) {    // loops through tweets
    const tempTweet = createTweetElement(tweet)
    $('.tweet-container').prepend(tempTweet); 
  }
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
};

const errorTweet = function (tweet) {
  let error = "";

  if (tweet.length > 140) {
    $("#errorLong").slideDown(400) 
  
    return true;
  }
  if (tweet === "" || tweet === " " || tweet === null) {
    $("#errorEmpty").slideDown(400);
    return true;
  }
  return false;
}

const loadTweets = function () {
  $.ajax({
    url: "/tweets",
    method: "GET" 
  })   // AJAX request to get list of tweets
  .then ( (storedTweet) => {
    renderTweets(storedTweet);
  })
  .catch ( (error)=> {
    console.log(error);
  }) // provide results to render tweets
};


$(document).ready( () => {

  loadTweets();


  $('#new-tweet-form').on('submit', function (event) {
    event.preventDefault()
    let data = $('#tweet-text');
    // console.log(data); 
    if (errorTweet(event.target.elements.text.value) ) {
      return 
    }
    $.ajax({
      url: "/tweets",
      method: 'POST',
      data: data
    }).then( () => {
      loadTweets();//this is when the request is finished
    } ).catch( (error) => {
      console.log(error);
    })
  });
  
} );

