const contactFactory = (contactName, title, phone, email, pictureSrc, pictureAlt) => {
    return { contactName, title, phone, email, pictureSrc, pictureAlt };
};

const appendContact = (main, contact) => {

    const contactName = document.createElement('h3');
    contactName.classList.add('contactName');
    contactName.textContent = contact.dishName;

    const title = document.createElement('div');
    title.classList.add('description');
    title.textContent = contact.title;

    const phone = document.createElement('div');
    phone.classList.add('phone');
    phone.textContent = contact.phone;

    const email = document.createElement('div');
    email.classList.add('email');
    email.textContent = contact.email;

    const picture = document.createElement('img');
    picture.classList.add('picture');
    picture.setAttribute('src', contact.pictureSrc);
    picture.setAttribute('alt', contact.pictureAlt);

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');

    main.appendChild(contactContainer);

    contactContainer.appendChild(contactName);
    contactContainer.appendChild(title);
    contactContainer.appendChild(phone);
    contactContainer.appendChild(email);
    contactContainer.appendChild(picture);
}

const makeContactPage = (main) => {
    const header = document.createElement('h1');
    header.textContent = "Contact Us";
    main.appendChild(header);

    const gordo = contactFactory(
        'Gordo Ramsay', 
        'Chef',
        '$444-444-4440',
        '$gordoramsay@notFake.com',
        './images/gordo',
        'gordo headshot'
    );
    
    const louis = contactFactory(
        'Louis', 
        'Maî·tre d',
        '$444-444-4442',
        '$louis@notFake.com',
        './images/louis',
        'louis headshot'
    );

    const john = contactFactory(
        'John', 
        'Manager',
        '$444-444-4443',
        '$john@notFake.com',
        './images/john',
        'john headshot'
    );

    appendContact(main, gordo);
    appendContact(main, louis);
    appendContact(main, john);
}

export default makeContactPage;