class ImageUtils {

    static getCanvas(w, h) {
        var c = document.querySelector("canvas");
        c.width = w;
        c.height = h;
        return c;
    }

    static getPixels(img) {
        var c = ImageUtils.getCanvas(img.width, img.height);
        var ctx = c.getContext('2d');
        ctx.drawImage(img, 0, 0);
        return ctx.getImageData(0,0,c.width,c.height);
    }

    static putPixels(imageData, w, h) {
        var c = ImageUtils.getCanvas(w, h);
        var ctx = c.getContext('2d');
        ctx.putImageData(imageData, 0, 0);
    }

}

/*function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}*/
// function definitions here

/*function getRandomInt2(min, max) {
    var min = -50;
    var max = 50;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}*/


$(document).ready(function() {
    var img = new Image();
    img.src = "img/Maldyvai.jpg";
    //makeMoreBlue(img);
    //makeMoreRed (img);
    //brighten(img, 50);
    //makeInvert(img);
    //getRandomInt2(min, max);
    makeRandom(img);
});
    //var img = new Image();
    //img.src = "img/Maldyvai.jpg";
    //makeRandom (img);
    //makeInvert(img)
    //brighten (img,50);
    //makeMoreRed (img);
    //makeMoreGreen(img);
   // var pixels = ImageUtils.getPixels(img);
  //  console.log(pixels);
  //  ImageUtils.putPixels(pixels, img.width, img.height);


/*$(document).ready(function() {
    var img = new Image();
    img.src = "img/Maldyvai.jpg";

    var pixels = ImageUtils.getPixels(img);
    var heightPixelsToHide = 100;
    for(var i = 0; i < img.width * heightPixelsToHide * 4; i++) {
        pixels.data[i] = 255;
    }
    ImageUtils.putPixels(pixels, img.width, img.height);

});*/
function makeMoreBlue(img){

    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4) {
        data[i+2] = data[i+2] + 200;
    }
    ImageUtils.putPixels(pixels, img.width, img.height);

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function makeRandom(img){

    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4) {
        data[i] = data[i] + getRandomInt(-50, 50);
        data[i+1] = data[i+1] + getRandomInt(20, 0);
        data[i+2] = data[i+2] + getRandomInt(300, 10);
        data[i+3] = data[i+3] - 0;
    }
    ImageUtils.putPixels(pixels, img.width, img.height);

}

function makeMoreGreen(img){

    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4) {
        data[i+1] = data[i+1] + 200;
    }
    ImageUtils.putPixels(pixels, img.width, img.height);

}

function makeMoreRed(img){

    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4) {
        data[i+0] = data[i+0] + 200;
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

function brighten(img, adjustment) {
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length;i += 4) {

        data[i] = data[i] + adjustment;
        data[i + 1] = data[i + 1] + adjustment;
        data[i + 2] = data[i + 2] + adjustment;
    }

    ImageUtils.putPixels(pixels, img.width, img.height);
}

function makeInvert(img){

    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;
    for (var i = 0; i < length;i += 4) {
        data[i] = 255 - data[i];
        data[i+1] = 255 - data[i+1];
        data[i+2] = 255 - data[i+2];
    }
    ImageUtils.putPixels(pixels, img.width, img.height);

    //????

    ImageUtils.putPixels(pixels, img.width, img.height);
}
