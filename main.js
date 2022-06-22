fetch('https://api.adviceslip.com/advice')
.then(data => {
return data.json();
})
.then(post => {
 const advice = post.slip.advice;
 document.getElementById("adv").innerHTML = '"' + advice + '"';
});