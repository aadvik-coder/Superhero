var canvas = new fabric.Canvas('myCanvas');
superhero_x = 10;
superhero_y = 10;
block_width = 30;
block_height = 30;
var hero_object = "";
var block_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        hero_object = Img;
        hero_object.scaleToWidth(150);
        hero_object.scaleToHeight(140);
        hero_object.set({
            top: superhero_y,
            left: superhero_x
        });
        canvas.add(hero_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_object = Img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top: superhero_y,
            left: superhero_x
        });
        canvas.add(block_object);
    });
}