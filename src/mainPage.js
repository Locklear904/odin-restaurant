function setupMain() {
    const content = document.querySelector("#content");
    //Set up title
    const h2 = document.createElement('h2');
    h2.innerText = "Welcome to The Dogstaurant!";
    content.appendChild(h2);
    //Set up intro paragraph
    const firstPara = document.createElement('p');
    firstPara.innerText = "We are a restaurant dedicated to providing your canine companions a five star dining experience. Our selections include some of the highest quality dog food, treats, and even complimentary toys. We guarantee that this will be the happiest your dogs will ever be. Look at your dog's face right now - don't they deserve it?"
    content.appendChild(firstPara);
    //Set up hours section
    const hoursDiv = document.createElement('div');
    hoursDiv.setAttribute('id', 'hoursDiv');
    content.appendChild(hoursDiv);
    const hoursTitle = document.createElement('h3');
    hoursTitle.innerText = "Hours";
    hoursDiv.appendChild(hoursTitle);
    let sunday = document.createElement('p');
    sunday.innerText = "Sunday: 7am - 9pm";
    hoursDiv.appendChild(sunday);
    let monday = document.createElement('p');
    monday.innerText = "Monday: 7am - 7pm";
    hoursDiv.appendChild(monday);
    let tuesday = document.createElement('p');
    tuesday.innerText = "Tuesday: 7am - 7pm";
    hoursDiv.appendChild(tuesday);
    let wednesday = document.createElement('p');
    wednesday.innerText = "Wednesday: 7am - 7pm";
    hoursDiv.appendChild(wednesday);
    let thursday = document.createElement('p');
    thursday.innerText = "Thursday: 7am - 7pm";
    hoursDiv.appendChild(thursday);
    let friday = document.createElement('p');
    friday.innerText = "Friday: 7am - 7pm";
    hoursDiv.appendChild(friday);
    let saturday = document.createElement('p');
    saturday.innerText = "Saturday: 7am - 9pm";
    hoursDiv.appendChild(saturday);
    
};

export { setupMain };