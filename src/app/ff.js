//here we safe any item we want to set into the game

//This items are not set in here, but in the init.js, here we only define them and save them into an array that will be pass to the assets engine.


//TODO CAMBIAR LA FORMA EN LA QUE SE RENDERIZAN LAS TEXTURAS DE LOS OBJECTOS USANDO EL TEXTUREMAP, ENTRE OTRAS COSAS (TOMAR EN CONSIDERACION LA ACTUALIZACION DE TEXTURE MAP NATIVO POR OTRAS EXTENSIONES)

//--------TEXTURES

ff.defaultTextures = function(){

    let defaultTextures = {
        item   : [],
        client : []
    };

    defaultTextures.item.push('url(resources/food_ico/hamburguer.png)');
    defaultTextures.item.push('url(resources/food_ico/fries.png)');
    defaultTextures.item.push('url(resources/food_ico/hot-dog.png)');
    defaultTextures.item.push('url(resources/food_ico/toast.png)');
    defaultTextures.item.push('url(resources/food_ico/doughnut.png)');
    defaultTextures.item.push('url(resources/food_ico/egg.png)');
    defaultTextures.item.push('url(resources/food_ico/cheese.png)');
    defaultTextures.item.push('url(resources/food_ico/fish.png)');

    defaultTextures.item.push('url(resources/food_ico/sandwich.png)');
    defaultTextures.item.push('url(resources/food_ico/meat.png)');
    defaultTextures.item.push('url(resources/food_ico/pizza.png)');
    defaultTextures.item.push('url(resources/food_ico/shrimp.png)');
    defaultTextures.item.push('url(resources/food_ico/kebab.png)');
    defaultTextures.item.push('url(resources/food_ico/croissant.png)');
    defaultTextures.item.push('url(resources/food_ico/steak.png)');
    defaultTextures.item.push('url(resources/food_ico/cookies.png)');

    defaultTextures.item.push('url(resources/food_ico/salad.png)');
    defaultTextures.item.push('url(resources/food_ico/sushi.png)');
    defaultTextures.item.push('url(resources/food_ico/pancakes.png)');
    defaultTextures.item.push('url(resources/food_ico/salami.png)');

    defaultTextures.client.push('url(resources/client_ico/client1.png)');
    defaultTextures.client.push('url(resources/client_ico/client2.png)');
    defaultTextures.client.push('url(resources/client_ico/client3.png)');
    defaultTextures.client.push('url(resources/client_ico/client4.png)');
    defaultTextures.client.push('url(resources/client_ico/client5.png)');
    defaultTextures.client.push('url(resources/client_ico/client6.png)');
    defaultTextures.client.push('url(resources/client_ico/client7.png)');
    defaultTextures.client.push('url(resources/client_ico/client8.png)');
    defaultTextures.client.push('url(resources/client_ico/client9.png)');
    defaultTextures.client.push('url(resources/client_ico/client10.png)');

    defaultTextures.client.push('url(resources/client_ico/client11.png)');
    defaultTextures.client.push('url(resources/client_ico/client12.png)');
    defaultTextures.client.push('url(resources/client_ico/client13.png)');
    defaultTextures.client.push('url(resources/client_ico/client14.png)');
    defaultTextures.client.push('url(resources/client_ico/client15.png)');
    defaultTextures.client.push('url(resources/client_ico/client16.png)');
    defaultTextures.client.push('url(resources/client_ico/client17.png)');
    defaultTextures.client.push('url(resources/client_ico/client18.png)');
    defaultTextures.client.push('url(resources/client_ico/client19.png)');
    defaultTextures.client.push('url(resources/client_ico/client20.png)');

    defaultTextures.client.push('url(resources/client_ico/client21.png)');
    defaultTextures.client.push('url(resources/client_ico/client22.png)');
    defaultTextures.client.push('url(resources/client_ico/client23.png)');
    defaultTextures.client.push('url(resources/client_ico/client24.png)');
    defaultTextures.client.push('url(resources/client_ico/client25.png)');
    defaultTextures.client.push('url(resources/client_ico/client26.png)');
    defaultTextures.client.push('url(resources/client_ico/client27.png)');


    return defaultTextures;

}

//-----------------------ITEMS

ff.defaultItems = function(){

    let defaultItems = [];


    for(let i = 0; i < 20; i++){
        defaultItems.push(new assets.item(i));

        defaultItems[i].texture = i;

    }


    //------LOW
    defaultItems[0].name = 'Hamburguesa';
    defaultItems[0].cost = -25;
    defaultItems[0].price = 35;
    defaultItems[0].ico = defaultItems[0].texture;

    defaultItems[1].name = 'Papas fritas';
    defaultItems[1].desc = 'Descripción de las papas fritas';
    defaultItems[1].cost = -10;
    defaultItems[1].price = 20;
    defaultItems[1].ico = defaultItems[1].texture;

    defaultItems[2].name = 'Perro caliente';
    defaultItems[2].cost = -20;
    defaultItems[2].price = 37;
    defaultItems[2].ico = defaultItems[2].texture;

    defaultItems[3].name = 'Pan tostado';
    defaultItems[3].cost = -8;
    defaultItems[3].price = 17;
    defaultItems[3].ico = defaultItems[3].texture;

    defaultItems[4].name = 'Dona';
    defaultItems[4].cost = -8;
    defaultItems[4].price = 16;
    defaultItems[4].ico = defaultItems[4].texture;

    defaultItems[5].name = 'Huevos fritos';
    defaultItems[5].cost = -9;
    defaultItems[5].price = 13;
    defaultItems[5].ico = defaultItems[5].texture;

    defaultItems[6].name = 'Queso';
    defaultItems[6].cost = -6;
    defaultItems[6].price = 10;
    defaultItems[6].ico = defaultItems[6].texture;

    defaultItems[7].name = 'Pescado frito';
    defaultItems[7].cost = -20;
    defaultItems[7].price = 36;
    defaultItems[7].ico = defaultItems[7].texture;

    //---------MEDIUM
    defaultItems[8].name = 'Sandwich';
    defaultItems[8].cost = -30;
    defaultItems[8].price = 47;
    defaultItems[8].ico = defaultItems[8].texture;

    defaultItems[9].name = 'Muslos de pollo';
    defaultItems[9].cost = -40;
    defaultItems[9].price = 58;
    defaultItems[9].ico = defaultItems[9].texture;

    defaultItems[10].name = 'Pizza';
    defaultItems[10].cost = -70;
    defaultItems[10].price = 100;
    defaultItems[10].ico = defaultItems[10].texture;

    defaultItems[11].name = 'Camarones';
    defaultItems[11].cost = -100;
    defaultItems[11].price = 177;
    defaultItems[11].ico = defaultItems[11].texture;

    defaultItems[12].name = 'Shawarma';
    defaultItems[12].cost = -50;
    defaultItems[12].price = 70;
    defaultItems[12].ico = defaultItems[12].texture;

    defaultItems[13].name = 'Croissant';
    defaultItems[13].cost = -48;
    defaultItems[13].price = 67;
    defaultItems[13].ico = defaultItems[13].texture;

    defaultItems[14].name = 'Bistec';
    defaultItems[14].cost = -65;
    defaultItems[14].price = 80;
    defaultItems[14].ico = defaultItems[14].texture;

    defaultItems[15].name = 'Galletas';
    defaultItems[15].cost = -50;
    defaultItems[15].price = 77;
    defaultItems[15].ico = defaultItems[15].texture;

    //--------HIGH
    defaultItems[16].name = 'Ensalada';
    defaultItems[16].cost = -120;
    defaultItems[16].price = 148;
    defaultItems[16].ico = defaultItems[16].texture;

    defaultItems[17].name = 'Sushi';
    defaultItems[17].cost = -250;
    defaultItems[17].price = 300;
    defaultItems[17].ico = defaultItems[17].texture;

    defaultItems[18].name = 'Panquecas';
    defaultItems[18].cost = -100;
    defaultItems[18].price = 120;
    defaultItems[18].ico = defaultItems[18].texture;

    defaultItems[19].name = 'Salami';
    defaultItems[19].cost = -110;
    defaultItems[19].price = 180;
    defaultItems[19].ico = defaultItems[19].texture;

    return defaultItems;

}

ff.defaultAsset = new assets.object(ff.defaultItems(), ff.defaultTextures());
