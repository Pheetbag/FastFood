
function Object(){

    //miscelaneous
    this.pause = document.getElementById('ff-gameComponentPause');
    this.play = document.getElementById('ff-startButton');

    //prints
    this.hearts = [
        document.getElementById('ff-gamePrint-heart1'),
        document.getElementById('ff-gamePrint-heart2'),
        document.getElementById('ff-gamePrint-heart3'),
        document.getElementById('ff-gamePrint-heart4'),
        document.getElementById('ff-gamePrint-heart5'),
        document.getElementById('ff-gamePrint-heart6')
    ];
    this.stars = [
        document.getElementById('ff-gamePrint-star1'),
        document.getElementById('ff-gamePrint-star2'),
        document.getElementById('ff-gamePrint-star3'),
        document.getElementById('ff-gamePrint-star4'),
        document.getElementById('ff-gamePrint-star5'),
        document.getElementById('ff-gamePrint-star6')
    ];
    this.name = document.getElementById('ff-gamePrint-Name');
    this.money = document.getElementById('ff-gamePrint-Cash');


}

function Component(){
    
    //hearts
    this.hearts = [
        "resources/gameGeneral_ico/heart_dead.png",
        "resources/gameGeneral_ico/heart_active.png",
        "resources/gameGeneral_ico/heart_extra.png"
    ];

    //hearts on
    this.heartsOn = [
        "resources/gameGeneral_ico/heart_dead_On.png",
        "resources/gameGeneral_ico/heart_active_On.png",
        "resources/gameGeneral_ico/heart_extra_On.png",
        "resources/gameGeneral_ico/heart_On.png"
    ];

    //stars
    this.stars = [
        "resources/gameGeneral_ico/star0.png",
        "resources/gameGeneral_ico/star1.png",
        "resources/gameGeneral_ico/star2.png",
        "resources/gameGeneral_ico/star3.png",
        "resources/gameGeneral_ico/star4.png",
        "resources/gameGeneral_ico/star5.png",
    ]

    this.starsOn = [
        "resources/gameGeneral_ico/star0_border.png",
        "resources/gameGeneral_ico/star1_border.png",
        "resources/gameGeneral_ico/star2_border.png",
        "resources/gameGeneral_ico/star3_border.png",
        "resources/gameGeneral_ico/star4_border.png",
        "resources/gameGeneral_ico/star5_border.png",
        "resources/gameGeneral_ico/starWhite.png",
    ]

}


