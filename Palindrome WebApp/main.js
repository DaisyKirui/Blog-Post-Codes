$(document).ready(function (){
    $('button').click(function (event) {
       event.preventDefault();
   
       let word = $('#palindrome-input').val().toLowerCase();
       let isPalindrome = checkPalindrome(word);
   
       if (isPalindrome) {
           $('#answer text').text("'" + word + " 'is a palindrome")
       } else {
           $('#answer text').text("'" + word + " 'is not a palindrome")
       }
    })
   })
   
   function checkPalindrome(str) {
       let originalString = /[\W_]/g;
       let newString = str.toLowerCase().replace(originalString, ''); 
       let reverseStr = newString.split('').reverse().join('');
       return reverseStr === newString;
   } 