function getImage(id){
    var image;
    if (id >= 70 && id < 79){
        image = "auto";
    } else if (id >= 60 && id < 69 ) {
        image = "theft";
    } else if (id >= 400 && id < 499){
        image = "auto";
    }
    else {
        image = "liquor";
    }
    return "images/icons/"+image+".png";
}