let parsed = parseInt(document.getElementById('counter').innerHTML, 10)
let isPaused = false
let interval = 1000

// let countUp = function() {
//   // let sec = 0;
//   function increment(val) { return val }
  
let si = setInterval(function(){
    document.getElementById("counter").innerHTML = ++parsed
}, interval)
 
// }

const minus = document.getElementById('-')
const plus = document.getElementById('+')
const like = document.getElementById('<3')
const pause = document.getElementById('pause')
const submit = document.getElementById('submit')

minus.addEventListener('click', function() {
  // document.getElementById("counter").innerHTML -= 1
  parsed -= 1
}) 

plus.addEventListener('click', function() {
  document.getElementById("counter").innerHTML = (parsed + 1)}) 

like.addEventListener('click', function(){
  let likes = document.querySelector('.likes')
  const liked = document.createElement('li')
  let likedNum = parsed 
  liked.innerHTML = `You liked ${likedNum}`
  likes.append(liked)
})

pause.addEventListener('click', function(){
  if(pause.innerHTML == 'pause'){
    clearInterval(si)
    pause.innerHTML = "resume"
  } else {
    si = setInterval(function(){
      document.getElementById("counter").innerHTML = ++parsed
    }, interval)
    pause.innerHTML = 'pause'
  }
})

submit.addEventListener('click', function(e){
  e.preventDefault()
  document.querySelector('.comments')
  let comment = document.querySelector('#comment-field').value 
  const commentP = document.createElement('p')
  commentP.innerHTML = `${comment}`
  document.querySelector('.comments').append(commentP)
})



