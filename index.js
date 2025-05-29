//You are building a system that sends email reminders to users 5 seconds after they register.Create an async function sendReminder(email)
//that waits 5 seconds using setTimeout and thenlogs "Reminder sent to [email]". Simulate sending a reminder to 3 users.

//Create a function that takes in the email as an argument and returns a promise, using the async keyword
// Using setTimeout, set a waiting time of 5 seconds to delay the execution of the code by 5 seconds
// Create another function to simulate the reminders
// Declare a list of emails that holds the emails of the 3 users.
// Loop through the list of emails and send a reminder to each email

async function sendReminder(email){
    setTimeout(() => {
        console.log(`Reminder sent to ${email}`);
    }, 5000);
          
}

function simulateReminders() {
    const emails = ['pauline@gmail.com','emu@gmail.com', 'ruby@gmail.com'];
    for (const email of emails){
        sendReminder(email);
    }
    
}

simulateReminders();

// You want to simulate a login system that tries to log in a user. The first two attempts fail, but the third succeeds. Write a function 
// tryLogin() that uses a counter and Promises. Use setTimeout to simulate  a 1-second delay between attempts. Log "Login successful" or "Login 
// failed after 3 attempts" based on whether login succeeds.

// Create a function attemptLogIn that takes in the attempts as arguments and returns a promise
// The function waits for one second. If the attempts are equal to three, the promise resolves with a success message
// If attempts are less than 3, the promise should rejected with a message that shows the number of attempts.
// Declare another function tryLogin, that keeps trying until it reaches a maximum of three attempts.
// Initialize a variable attempt 1, and a while loop that allows a maximum of three attempts
// If the promise is resolved. log the success message, else the error message
function attemptLogIn(attempt){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (attempt === 3){
                resolve("Login successful");
            }else{
                reject (`Login failed after ${attempt} attempts`);
            }
        }, 1000);
    });
}
async function tryLogin(){
    let attempt = 1;

    while(attempt<= 3){
        try{
            const result = await attemptLogIn(attempt);
            console.log(result);
            return;
            
        }catch(error){
            console.log(error);
            attempt++;
            
        }
    }
    console.log("Log in unsuccessful");
    
}
tryLogin();

//Build a countdown timer that counts down from 5 to 0, displaying one number per second using setInterval. When the 
// countdown reaches 0, stop the interval and log "Time's up!".

// Create a function countdown and initialize a variable count which starts from 5
// Use setInterval method to decrement count by one after every second
// When the count reaches zero,the timer stops and prints "Time's up!"

function countdown(){
    let count = 5;

    const timer = setInterval(() =>{
        console.log(count);
        count--;

        if (count< 0){
            clearInterval(timer);
            console.log("Time's up!");
            
        }  
    }, 1000);
}

countdown();

//You are simulating a page that loads data in stages. Create an async function called loadPage() that: logs "Loading header...", 
// waits 1 second; logs "Loading content...", waits 2 seconds; logs "Loading footer...", waits 1 second; and finally logs "Page fully loaded". 
// Use setTimeout inside Promises and await them in sequence.

// Create an async function loadpage 
// Use a promise with setTimeout to log "Loading header..." and wait for 1 second
// After the first log, wait for two seconds to log "Loading content..." and another second to log "Loading footer..."
// After all waits are complete, log "page fully loaded"

async function loadpage(){
    console.log("Loading header...");
    await new Promise(resolve => 
        setTimeout(resolve, 1000)
    );

    console.log("Loading content...");
    await new Promise(resolve =>
        setTimeout(resolve, 2000)
    );

    console.log("Loading footer...");
    await new Promise(resolve =>
        setTimeout(resolve, 1000)
    );

    console.log("Page fully loaded.");
       
}

loadpage();

//You are simulating fetching stock prices with delays. Write a function fetchPrice(symbol) that returns a Promise which r
// esolves after 2 seconds with the message "Price for [symbol] retrieved". Use async/await to call it for two different stocks 
// ("AAPL" and "GOOG") and log the messages in order.

// Create a function fetchPrice that takes in symbols as an argument and returns a promise after 2 seconds with a resolve message
// Create an async function that calls fetchPrice with await and logs the results once they are resolved

function fetchPrice(symbol){
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve(`Price for ${symbol} retrieved`);
        }, 2000);
    });
}

async function getPrices(){
    const priceA = await fetchPrice("AAPL");
    console.log(priceA);

    const priceB = await fetchPrice("GOOG");
    console.log(priceB);
       
}
getPrices();