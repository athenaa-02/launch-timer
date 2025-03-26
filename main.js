const days = document.querySelector(".days")
const hours = document.querySelector(".hours")
const seconds = document.querySelector(".seconds")
const minutes = document.querySelector(".minutes")

let date = new Date("January 01, 26 00:00:00").getTime()




function timeDecrease(){

    const timeInterval = setInterval(() => {
        let currDate = new Date().getTime()
        let differenceMilliseconds = date - currDate
        
        let leftMinutes = Math.floor(differenceMilliseconds / 60 / 1000) % 60
        let leftSeconds = Math.floor(differenceMilliseconds / 1000) % 60
        let leftHours = Math.floor(differenceMilliseconds / 60 / 1000 / 60) % 24
        let leftDays = Math.floor(differenceMilliseconds / 86400000)

        if(differenceMilliseconds > 0){
            seconds.textContent = leftSeconds
            minutes.textContent = leftMinutes
            hours.textContent = leftHours
            days.textContent = leftDays
        }else{
            seconds.textContent = 0  
            minutes.textContent = 0
            hours.textContent = 0
            days.textContent = 0
        }
        
    }, 1000);

}

timeDecrease()

