const dishFactory = (dishName, description, price, pictureSrc, pictureAlt) => {
    return { dishName, description, price, pictureSrc, pictureAlt };
};

const appendDish = (main, dish) => {

    const dishName = document.createElement('h3');
    dishName.classList.add('dishName');

    const description = document.createElement('div');
    description.classList.add('description');
    description.textContent = dish.description;

    const price = document.createElement('div');
    price.classList.add('price');
    price.textContent = dish.price;

    const picture = document.createElement('img');
    picture.classList.add('picture');
    picture.setAttribute('src', dish.pictureSrc);
    picture.setAttribute('alt', dish.pictureAlt);

    const dishContainer = document.createElement('div');
    dishContainer.classList.add('dishContainer');

    main.appendChild(dishContainer);

    dishContainer.appendChild(dishName);
    dishContainer.appendChild(description);
    dishContainer.appendChild(price);
    dishContainer.appendChild(picture);
}

const makeMenuPage = (main) => {
    const scallops = dishFactory(
        'Scallops', 
        'Lightly seared scallops with lemon juice',
        '$14',
        './images/scallops',
        'five seared scallops');
    
    appendDish(main, scallops);

    console.log('hello menu page');
}

export default makeMenuPage;