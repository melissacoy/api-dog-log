let userNum = "";
let endpoint = "";

function onSubmit() {
    $(`.js-submit`).click(event => {
        event.preventDefault();
        submittedNumber();
        getDogs();
    });
}
// captures number submitted/defaults to 3
function submittedNumber() {
    userNum = $('.js-number').val();
    // change empty submission to 3
    if (userNum == "") {
        userNum = 3;
    }
    endpoint = "https://dog.ceo/api/breeds/image/random/" + userNum;
}
//retrieves dog images from API
function getDogs() {
    fetch(`${endpoint}`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
        .catch(error => {
            console.log(error);
            alert('Something went wrong, check console.');
        });
}
//call
$(function() { 
  console.log('waiting for submit');
  onSubmit();
});