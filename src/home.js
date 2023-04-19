const makeHome = (main) => {
    const header = document.createElement('h1');
    header.textContent = "Gordo Ramsay's Kitchen";

    const greeting = document.createElement('section');
    greeting.classList.add('greeting');
    greeting.textContent = "Welcome to Gordo Ramsay's Kitchen, a fine dining french inspired restaurant. All our ingredients are locally sourced, small-batch, artisinal, and organic. We hope you enjoy your stay.";

    const hours = document.createElement('section');
    hours.classList.add('hours');

    const hoursHeading = document.createElement('h3');
    hoursHeading.textContent = 'Hours';

    const list = document.createElement('ul');

    const mon = document.createElement('li');
    mon.textContent = "Monday: 8am - 8pm";

    const tue = document.createElement('li');
    tue.textContent = "Tuesday: 8am - 8pm";

    const wed = document.createElement('li');
    wed.textContent = "Wednesday: 8am - 8pm";

    const thu = document.createElement('li');
    thu.textContent = "Thursday: 8am - 8pm";

    const fri = document.createElement('li');
    fri.textContent = "Friday: 8am - 8pm";

    const sat = document.createElement('li');
    sat.textContent = "Saturday: 8am - 8pm";

    const sun = document.createElement('li');
    sun.textContent = "Sunday: 8am - 8pm";


    const location = document.createElement('section');
    location.classList.add('location');

    const locationHeading = document.createElement('h3');
    locationHeading.textContent = 'Location';

    const address = document.createElement('div');
    address.classList.add('address');
    address.textContent = "3213 Royal Hospital Road, London";

    main.appendChild(header);
    main.appendChild(greeting);
    main.appendChild(hours);
    main.appendChild(location);

    hours.appendChild(hoursHeading);
    hours.appendChild(list);

    list.appendChild(mon);
    list.appendChild(tue);
    list.appendChild(wed);
    list.appendChild(thu);
    list.appendChild(fri);
    list.appendChild(sat);
    list.appendChild(sun);

    location.appendChild(locationHeading);
    location.appendChild(address);
}

export default makeHome;