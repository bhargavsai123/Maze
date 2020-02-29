var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8691f953-4d83-4ff8-91d1-d66f66d0e2ca","9df49422-4cf8-4a16-9144-168786e7d75a","7a8c4e60-a7cf-4d97-a1a3-aeae457526e9","1e1cd0d9-5e45-4c03-8ca7-1dd7e9e7df9f"],"propsByKey":{"8691f953-4d83-4ff8-91d1-d66f66d0e2ca":{"name":"mouse_gray_1","sourceUrl":null,"frameSize":{"x":1000,"y":987},"frameCount":1,"looping":true,"frameDelay":12,"version":"KEwVaNntGlX.irIOjGBX52F5rTMPhlSp","loadedFromSource":true,"saved":true,"sourceSize":{"x":1000,"y":987},"rootRelativePath":"assets/8691f953-4d83-4ff8-91d1-d66f66d0e2ca.png"},"9df49422-4cf8-4a16-9144-168786e7d75a":{"name":"mouse_gray_1_copy_1","sourceUrl":null,"frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":12,"version":"0whX3rE0RVk7MnYUbgHsHVm3hCGXvQ.1","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/9df49422-4cf8-4a16-9144-168786e7d75a.png"},"7a8c4e60-a7cf-4d97-a1a3-aeae457526e9":{"name":"mouse_gray_1_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":12,"version":"igHKgRfmwPgQQhVny3jMXhgK3nvBGqxY","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/7a8c4e60-a7cf-4d97-a1a3-aeae457526e9.png"},"1e1cd0d9-5e45-4c03-8ca7-1dd7e9e7df9f":{"name":"mouse_gray_1_copy_1_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":12,"version":"QOIdd1nCq6Xjk1Wu_5KZVg00gYSo_lE.","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/1e1cd0d9-5e45-4c03-8ca7-1dd7e9e7df9f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 
var ball = createSprite(380, 20,20,20);
var wall = createSprite(350, 40, 1, 80);
var wall2 = createSprite(320, 40, 60, 1);
var wall3 = createSprite(200, 3, 400, 5);
var wall4 = createSprite(397, 200, 5, 400);
var wall5 = createSprite(200, 397, 400, 5);
var wall6 = createSprite(2, 170, 5, 375);
var wall7 = createSprite(60, 350, 1, 90);
var wall8 = createSprite(25, 260, 40, 1);
var wall9 = createSprite(120, 305, 120, 1);
var wall10 = createSprite(105, 280, 1, 50);
var wall11 = createSprite(145, 355, 40, 1);
var wall12 = createSprite(165, 375, 1, 40);
var wall13 = createSprite(30, 90 , 60, 1);
var wall14 = createSprite(60, 125, 1, 170);
var wall15 = createSprite(85, 40, 50, 1);
var wall16 = createSprite(110, 210, 100, 1);
var wall17 = createSprite(160, 210, 1, 100);
var wall18 = createSprite(225, 260, 127, 1);
var wall19 = createSprite(255, 297, 1, 75);
var wall20 = createSprite(235, 335, 40, 1);
var wall21 = createSprite(290, 230, 1, 60);
var wall22 = createSprite(110, 130, 1, 70);
var wall23 = createSprite(140, 95, 60, 1);
var wall24 = createSprite(170, 70, 1, 50);
var wall25 = createSprite(200, 45, 60, 1);
var wall26 = createSprite(230, 130, 1, 170);
var wall27 = createSprite(275, 120, 90, 1);
var wall28 = createSprite(320, 140, 1, 40);
var wall29 = createSprite(340, 160, 40, 1);
var wall30 = createSprite(360, 240, 1, 160);
var wall31 = createSprite(360, 320, 70,1);
var wall32 = createSprite(325, 345, 1, 50);

var gamestate="start";



function draw() {
  
  background("white");
  
  if(gamestate==="start"){
    text("Press space to start", 150, 30);
    if(keyDown( "space")){
      playSound("assets/category_bell/vibrant_game_bell_ding.mp3");
      gamestate="play";
    }
  }

  if(gamestate==="play"){
    text("Escape the Maze without touching the wall", 100, 30);
    
   if(keyDown("up")){
     ball.velocityY=-3;
     ball.velocityX=0;
    
   }
   if(keyDown("down")){
     ball.velocityY=3;
     ball.velocityX=0;
     
   }
   if(keyDown("left")){
     ball.velocityY=0;
     ball.velocityX=-3;
     
   }
   if(keyDown("right")){
     ball.velocityY=0;
     ball.velocityX=3;
     
   }



 
if (ball.isTouching(wall)||ball.isTouching(wall2)|| ball.isTouching(wall3)||ball.isTouching(wall4)||ball.isTouching(wall5)||ball.isTouching(wall6)||ball.isTouching(wall7)||ball.isTouching(wall8)||ball.isTouching(wall9)||ball.isTouching(wall10)||ball.isTouching(wall11)||ball.isTouching(wall12)||ball.isTouching(wall13)||ball.isTouching(wall14)||ball.isTouching(wall15)||ball.isTouching(wall16)||ball.isTouching(wall17)||ball.isTouching(wall18)||ball.isTouching(wall19)||ball.isTouching(wall20)||ball.isTouching(wall21)||ball.isTouching(wall22)||ball.isTouching(wall23)||ball.isTouching(wall24)||ball.isTouching(wall25)||ball.isTouching(wall26)||ball.isTouching(wall27)||ball.isTouching(wall28)||ball.isTouching(wall29)||ball.isTouching(wall30)||ball.isTouching(wall31)||ball.isTouching(wall32)) {
    gamestate="lose";
    playSound("assets/category_retro/retro_game_classic_player_death_9.mp3");
    ball.velocityX =0;
    ball.velocityY =0;
}

  }
  if(gamestate==="lose"){
    text("YOU LOSE", 170, 20);
    text("Press R to Restart", 150, 35);
    ball.velocityY=0;
    ball.velocityX=0;
    
  }
  
  if(ball.x<0){
    gamestate="win";
  }
  if(gamestate==="win"){
    text("YOU WIN", 170, 20);
    text("Press R to Restart", 150, 35);
    playSound("assets/category_achievements/sharp_win_3.mp3", false);
    if(gamestate ==="win"&&ball.x<-5){
      stopSound("assets/category_achievements/sharp_win_3.mp3");
    }
  }
    if((gamestate==="win"||gamestate==="lose")&&keyDown( "r")){
    
    gamestate="play";
    ball.x=380;
    ball.y=20;
    ball.velocityY=0;
    ball.velocityX=0;
    playSound("assets/category_bell/vibrant_game_bell_ding.mp3");
    
    

    
    
  }
  


ball.bounceOff(wall);
ball.bounceOff(wall2);
ball.bounceOff(wall3);
ball.bounceOff(wall4);
ball.bounceOff(wall5);
ball.bounceOff(wall6);
ball.bounceOff(wall7);
ball.bounceOff(wall8);
ball.bounceOff(wall9);
ball.bounceOff(wall10);
ball.bounceOff(wall11);
ball.bounceOff(wall12);
ball.bounceOff(wall13);
ball.bounceOff(wall14);
ball.bounceOff(wall15);
ball.bounceOff(wall16);  
ball.bounceOff(wall17);
ball.bounceOff(wall18);
ball.bounceOff(wall19);
ball.bounceOff(wall20);
ball.bounceOff(wall21);
ball.bounceOff(wall22);
ball.bounceOff(wall23);
ball.bounceOff(wall24);
ball.bounceOff(wall25);
ball.bounceOff(wall26);
ball.bounceOff(wall27);
ball.bounceOff(wall28);
ball.bounceOff(wall29);
ball.bounceOff(wall30);
ball.bounceOff(wall31);
ball.bounceOff(wall32);


  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
