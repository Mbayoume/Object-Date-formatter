const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
let intervalID = null; //this is for the seconds formatting

const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {

    // we nees to clear the interval in the main code and outside the function 
    clearInterval(intervalID);

    // create a switch to get the value from the dropdown menu and work with it 
   const updateSeconds = ()=>{
    // we need to create a new date object 
    const now = new Date()
    const seconds = now.getSeconds();
    currentDateParagraph.textContent = `${month}-${day}-${year}-${hours} H -${minutes} M - ${seconds} S `;
    
   }
    switch(dateOptionsSelectElement.value){
        case "yyyy-mm-dd": currentDateParagraph.textContent = formattedDate.split("-").reverse().join("-");
        break;

        case "mm-dd-yyyy-h-mm": currentDateParagraph.textContent = `${month}-${day}-${year}-${hours}-${minutes}`;
        break;

        case"mm-dd-yyyy-h-mm-ss":
        updateSeconds();
        intervalID = setInterval(updateSeconds,1000);
        break;



        default:  currentDateParagraph.textContent = formattedDate
    }
})




