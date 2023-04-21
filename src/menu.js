import risottoPic from './images/risotto.jpg';

const dishFactory = (dishName, description, price, pictureSrc, pictureAlt) => {
    return { dishName, description, price, pictureSrc, pictureAlt };
};

const appendDish = (main, dish) => {

    const dishName = document.createElement('h3');
    dishName.classList.add('dishName');
    dishName.textContent = dish.dishName;

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

const appendSectionTitle = (main, title) => {
    const sectionTitle = document.createElement('h2');
    sectionTitle.classList.add('sectionTitle');
    sectionTitle.textContent = title;
    main.appendChild(sectionTitle);
};

const makeMenuPage = (main) => {


    const scallops = dishFactory(
        'Scallops', 
        'Lightly seared scallops with lemon juice',
        '$14',
        './images/scallops',
        'five seared scallops'
    );
    const risotto = dishFactory(
        'Lobster Risotto',
        'Butter poached lobster tail, truffle risotto',
        '$21',
        risottoPic,
        'risotto with pieces of lobster sitting on top'
    );
    
    appendSectionTitle(main, 'Starters');
    appendDish(main, scallops);
    appendDish(main, risotto);

    const wellington = dishFactory(
        'Beef Wellington',
        'potato puree, glazed root vegetables, red wine demi-glace',
        '$58',
        './images/wellington',
        'Puff pastry encrusted beef sitting atop mashed potatoes'
    );

    const salmon = dishFactory(
        'Cripsy Skin Salmon',
        'Beluga lentins, shaved fennel salad',
        '$48',
        './images/salmon',
        'salmon with salad at the side'
    );
    
    appendSectionTitle(main, 'Entrees');
    appendDish(main, wellington);
    appendDish(main, salmon);

    const pudding = dishFactory(
        'Sticky Toffee Pudding',
        'dulce de leche ice cream',
        '$8',
        './images/pudding',
        'ice cream with toffee'
    );

    const cheesecake = dishFactory(
        'Pear Cheesecake',
        'pear cheesecake with speculoos cookie curst',
        '$12',
        './images/cheesecake',
        'cheesecake with mint garnish'
    );
    
    appendSectionTitle(main, 'Dessert');
    appendDish(main, pudding);
    appendDish(main, cheesecake);

    console.log('hello menu page');
}

export default makeMenuPage;