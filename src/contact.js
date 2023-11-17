import mapImg from './images/fakeMap.jpg';

function setupContact() {
    const content = document.querySelector('#content');
    //Setup Contact
    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id', 'contactDiv');
    content.appendChild(contactDiv);
    const contactName = document.createElement('h3');
    contactName.setAttribute('id', 'contactName');
    contactName.textContent = "The Dogstaurant";
    contactDiv.appendChild(contactName);
    const addressLineOne = document.createElement('p');
    addressLineOne.setAttribute('class', 'contactAddress');
    addressLineOne.textContent = "123 Fake Address Rd";
    contactDiv.appendChild(addressLineOne);
    const addressLineTwo = document.createElement('p');
    addressLineTwo.setAttribute('class', 'contactAddress');
    addressLineTwo.textContent = "Placelocationtown, State 90210";
    contactDiv.appendChild(addressLineTwo);
    const contactPhone = document.createElement('p');
    contactPhone.setAttribute('id', 'contactPhone');
    contactPhone.textContent = "Phone: (999) 999-9999";
    contactDiv.appendChild(contactPhone);
    //Setup Map
    const fakeMapImg = document.createElement('img');
    fakeMapImg.src = mapImg;
    fakeMapImg.setAttribute('id', 'contactMap');
    content.appendChild(fakeMapImg);
};

export { setupContact };