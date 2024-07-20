let startbox = document.querySelector('.start-box')
let inputCounter = document.querySelector('#input-counter')
let startCounter = document.querySelector('#start-counter') 
let errorElement = document.querySelector('#error')
let timerCircle =document.querySelector('.c100')
let timerNum = document.querySelector('.c100 > span')
let messageLoading = document.querySelector('.message .loading')
let Successmessage = document.querySelector('.message .success')

startCounter.addEventListener('click',function(e){
    let seconds = parseInt(inputCounter.value)
    
    if (isNaN(seconds)){
        errorElement.textContent = "enter a valid time!!"
        errorElement.classList.add('active')
        return
    }
    errorElement.classList.remove('active')
    startbox.classList.remove('active')
    timerCircle.style.display = 'block'
    timerNum.textContent = seconds
    messageLoading.style.display = 'block'
    Successmessage.style.display = 'none';


    let lastPercent = ''
    let orginSeconds = seconds
    let timerId = setInterval(()=>{
       if(lastPercent)timerCircle.classList.remove(lastPercent)

        if (seconds <= 0){
            clearInterval(timerId) 
            timerCircle.style.display = 'none'
            startbox.classList.add('active')
            inputCounter.value = '' 
            messageLoading.style.display = 'none'
            Successmessage.style.display = 'block';
            return;
        }


        seconds -= 1
        let percent =Math.floor(((orginSeconds - seconds) / orginSeconds) * 100)
        lastPercent =(`p${percent}`)
        timerCircle.classList.add(`p${percent}`)
        timerNum.textContent = seconds
    },1000)
})





















