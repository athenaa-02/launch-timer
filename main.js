const days = document.querySelector(".days")
const hours = document.querySelector(".hours")
const seconds = document.querySelector(".seconds")
const minutes = document.querySelector(".minutes")


let date = new Date("January 01, 26 00:00:00").getTime()
let currDate = new Date().getTime()


let differenceMilliseconds = date - currDate 

let leftSeconds = Math.floor(differenceMilliseconds / 1000) % 60
let leftMinutes = Math.floor(differenceMilliseconds / 60 / 1000) % 60
let leftHours = Math.floor(differenceMilliseconds / 60 / 1000 / 60) % 24
let leftDays = Math.floor(differenceMilliseconds / 86400000)


days.textContent = leftDays
hours.textContent = leftHours
minutes.textContent = leftMinutes
seconds.textContent = leftSeconds





setInterval(timeDecrease, 1000)
setInterval(() => {
    
}, interval);

function timeDecrease(){
    seconds.textContent--
    if(seconds.textContent ===0){
      
    } 

}



// let day = days.textContent
// let hr = hours.textContent
// let min = minutes.textContent 
// let sec = seconds.textContent


// day = leftDays
// hr = leftHours
// min = leftMinutes
// sec = leftSeconds



// if(sec>0){
//     sec--
// }else{
//     if(min > 0){
//      min--
//     }else if(hr > 0){
//         hr--
//     }else if(day > 0){
//         day = day--
//     }else{
//         clearInterval(timer)
//     }
// }




// function decreaseTime( month, year ){
//     let leftMonth = month - (date.getMonth() + 1)
//     let currentMonthDays = 31 - (date.getDay() + 1)
//     let leftDays = leftMonth * 31 + 
//     // let leftSeconds =  
// }

