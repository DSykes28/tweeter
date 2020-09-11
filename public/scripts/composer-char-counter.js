$( document ).ready(function() {
 
   $('#tweet-text').on('keyup', function (event) {
      const inputText = event.target.value;
      const charCount = 140 - inputText.length;
      const $counter = $(this).parent("form").find(".counter")
      if (charCount < 0) {
         $counter.addClass('error')
      } else {$counter.removeClass('error')}
      $counter.text(charCount)
       console.log(this);
    });// --- our code goes here ---

   $()
});
