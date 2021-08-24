var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["dc6d8844-e28d-496a-9f91-6a50365097ad","00ced425-963a-4f69-9386-c350b896e37b","1d34c3c8-ce38-49c6-9d64-243401c31acc","8f23dc13-e478-4cb1-9b66-7cccdd1cdb34","5cf75365-d7e2-4434-b2e1-42479b5e482a","5a88cfbf-8d6c-4c25-993e-f3567af55e32","5642cc5f-bfe4-4bf8-a653-21f481b6ed97","3faaffe5-521e-4c1b-a5d4-b9906e73fb29","12fb21f7-9ef3-464e-a46b-7e2f75f0e7d1","9fd41bfa-a986-43e1-b524-54c2275c1ded","75543bac-3086-4091-8c64-b9255f91b057","b1594e31-4212-431a-af02-b8179bb78dac","b0a15da3-5b3e-4680-b166-ba0ecfe0a5b7","e8b8ad08-a693-47b0-9256-0c6c6f6187f3","765d8637-c7c5-42de-9cbe-b7a95ecdd86b","c879911a-cc22-4084-b2bb-286809c37372","f6793381-00f0-43b0-a5a4-dba74c74c08d","02d53f88-aff4-451e-87b2-9ca5a9442ac5"],"propsByKey":{"dc6d8844-e28d-496a-9f91-6a50365097ad":{"name":"1","sourceUrl":"assets/api/v1/animation-library/gamelab/KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_/category_video_games/gameplay_redcrystal.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_/category_video_games/gameplay_redcrystal.png"},"00ced425-963a-4f69-9386-c350b896e37b":{"name":"2","sourceUrl":"assets/api/v1/animation-library/gamelab/SC6iye4vliWRaovAEFWZmAfCd4nEyJfD/category_video_games/gameplay_yellowstar2.png","frameSize":{"x":400,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"SC6iye4vliWRaovAEFWZmAfCd4nEyJfD","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SC6iye4vliWRaovAEFWZmAfCd4nEyJfD/category_video_games/gameplay_yellowstar2.png"},"1d34c3c8-ce38-49c6-9d64-243401c31acc":{"name":"3","sourceUrl":"assets/api/v1/animation-library/gamelab/hGgbUlFZW3AlCFSdrs.p7vb577JI3zjn/category_video_games/gameplay_redstar.png","frameSize":{"x":376,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"hGgbUlFZW3AlCFSdrs.p7vb577JI3zjn","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":376,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/hGgbUlFZW3AlCFSdrs.p7vb577JI3zjn/category_video_games/gameplay_redstar.png"},"8f23dc13-e478-4cb1-9b66-7cccdd1cdb34":{"name":"4","sourceUrl":"assets/api/v1/animation-library/gamelab/sKktgxsqPeVkeft1BK_mk2Og5h1_D10R/category_video_games/gameplay_bluestar.png","frameSize":{"x":398,"y":349},"frameCount":1,"looping":true,"frameDelay":2,"version":"sKktgxsqPeVkeft1BK_mk2Og5h1_D10R","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":349},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sKktgxsqPeVkeft1BK_mk2Og5h1_D10R/category_video_games/gameplay_bluestar.png"},"5cf75365-d7e2-4434-b2e1-42479b5e482a":{"name":"5","sourceUrl":"assets/api/v1/animation-library/gamelab/FJT6QpZscrzSwGwpDPnJZED8ABADci6Q/category_video_games/gameplay_greendiamond2.png","frameSize":{"x":281,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"FJT6QpZscrzSwGwpDPnJZED8ABADci6Q","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":281,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FJT6QpZscrzSwGwpDPnJZED8ABADci6Q/category_video_games/gameplay_greendiamond2.png"},"5a88cfbf-8d6c-4c25-993e-f3567af55e32":{"name":"6","sourceUrl":"assets/api/v1/animation-library/gamelab/9gZGhzb3eeYDCtgXopm35oOTqoytP8DX/category_video_games/gameplay_crown.png","frameSize":{"x":400,"y":354},"frameCount":1,"looping":true,"frameDelay":2,"version":"9gZGhzb3eeYDCtgXopm35oOTqoytP8DX","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":354},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9gZGhzb3eeYDCtgXopm35oOTqoytP8DX/category_video_games/gameplay_crown.png"},"5642cc5f-bfe4-4bf8-a653-21f481b6ed97":{"name":"7","sourceUrl":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png","frameSize":{"x":400,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png"},"3faaffe5-521e-4c1b-a5d4-b9906e73fb29":{"name":"8","sourceUrl":"assets/api/v1/animation-library/gamelab/I2MZ1t6w5ORvLBQ.40UipUIk.Z65V6YR/category_video_games/gameplay_purplestar.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"I2MZ1t6w5ORvLBQ.40UipUIk.Z65V6YR","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/I2MZ1t6w5ORvLBQ.40UipUIk.Z65V6YR/category_video_games/gameplay_purplestar.png"},"12fb21f7-9ef3-464e-a46b-7e2f75f0e7d1":{"name":"9","sourceUrl":"assets/api/v1/animation-library/gamelab/yQNNErop_hFJExW1biTGuvEVfbMo.Skz/category_stickers/sticker_09.png","frameSize":{"x":92,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"yQNNErop_hFJExW1biTGuvEVfbMo.Skz","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yQNNErop_hFJExW1biTGuvEVfbMo.Skz/category_stickers/sticker_09.png"},"9fd41bfa-a986-43e1-b524-54c2275c1ded":{"name":"10","sourceUrl":"assets/api/v1/animation-library/gamelab/hX17F8V0ucshB9g7icxei5zc.2RN5iHy/category_video_games/gameplay_lightning.png","frameSize":{"x":331,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"hX17F8V0ucshB9g7icxei5zc.2RN5iHy","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":331,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/hX17F8V0ucshB9g7icxei5zc.2RN5iHy/category_video_games/gameplay_lightning.png"},"75543bac-3086-4091-8c64-b9255f91b057":{"name":"11","sourceUrl":"assets/api/v1/animation-library/gamelab/1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU/category_stickers/sticker_14.png","frameSize":{"x":246,"y":192},"frameCount":1,"looping":true,"frameDelay":2,"version":"1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":246,"y":192},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU/category_stickers/sticker_14.png"},"b1594e31-4212-431a-af02-b8179bb78dac":{"name":"12","sourceUrl":"assets/api/v1/animation-library/gamelab/yNEgPThfDlaKMrzwHKKxBi4TrhtoIyud/category_video_games/gameplay_candy14.png","frameSize":{"x":394,"y":376},"frameCount":1,"looping":true,"frameDelay":2,"version":"yNEgPThfDlaKMrzwHKKxBi4TrhtoIyud","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":376},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yNEgPThfDlaKMrzwHKKxBi4TrhtoIyud/category_video_games/gameplay_candy14.png"},"b0a15da3-5b3e-4680-b166-ba0ecfe0a5b7":{"name":"13","sourceUrl":"assets/api/v1/animation-library/gamelab/JbYn0HO0tJRoTTbDFErgACLs1FIC8tmJ/category_stickers/sticker_20.png","frameSize":{"x":110,"y":110},"frameCount":1,"looping":true,"frameDelay":2,"version":"JbYn0HO0tJRoTTbDFErgACLs1FIC8tmJ","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":110,"y":110},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JbYn0HO0tJRoTTbDFErgACLs1FIC8tmJ/category_stickers/sticker_20.png"},"e8b8ad08-a693-47b0-9256-0c6c6f6187f3":{"name":"14","sourceUrl":"assets/api/v1/animation-library/gamelab/RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS/category_icons/diamond.png","frameSize":{"x":391,"y":358},"frameCount":1,"looping":true,"frameDelay":2,"version":"RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":358},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS/category_icons/diamond.png"},"765d8637-c7c5-42de-9cbe-b7a95ecdd86b":{"name":"15","sourceUrl":"assets/api/v1/animation-library/gamelab/VgMQCofeiOzw_StDS_r3OsffccnggBmt/category_icons/heart.png","frameSize":{"x":387,"y":387},"frameCount":1,"looping":true,"frameDelay":2,"version":"VgMQCofeiOzw_StDS_r3OsffccnggBmt","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":387,"y":387},"rootRelativePath":"assets/api/v1/animation-library/gamelab/VgMQCofeiOzw_StDS_r3OsffccnggBmt/category_icons/heart.png"},"c879911a-cc22-4084-b2bb-286809c37372":{"name":"16","sourceUrl":"assets/api/v1/animation-library/gamelab/nsU6EGw9VtOgGEZ8U_ogGrttDX_tqt0E/category_icons/star1.png","frameSize":{"x":396,"y":376},"frameCount":1,"looping":true,"frameDelay":2,"version":"nsU6EGw9VtOgGEZ8U_ogGrttDX_tqt0E","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":376},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nsU6EGw9VtOgGEZ8U_ogGrttDX_tqt0E/category_icons/star1.png"},"f6793381-00f0-43b0-a5a4-dba74c74c08d":{"name":"paddle","sourceUrl":"assets/api/v1/animation-library/gamelab/7gsp0vGBj_CHM.LZdv5yqen2SizfIVsE/category_video_games/ground_cake.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"7gsp0vGBj_CHM.LZdv5yqen2SizfIVsE","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7gsp0vGBj_CHM.LZdv5yqen2SizfIVsE/category_video_games/ground_cake.png"},"02d53f88-aff4-451e-87b2-9ca5a9442ac5":{"name":"ball","sourceUrl":"assets/api/v1/animation-library/gamelab/VOs0SM0rsaKR.Kq2..HrBYEnV5M_JXJp/category_video_games/ore_gold.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"VOs0SM0rsaKR.Kq2..HrBYEnV5M_JXJp","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/VOs0SM0rsaKR.Kq2..HrBYEnV5M_JXJp/category_video_games/ore_gold.png"}}};
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

// Project Description:
// by Adishree Das
// 8/4/2021
// Breakout Game

//score
var score = 0;

//breakout gems
var box1 = createSprite(25, 75, 50, 50);
box1.setAnimation("1");
box1.scale = 0.1;

var box2 = createSprite(75, 75, 50, 50);
box2.setAnimation("2");
box2.scale = 0.1;

var box3 = createSprite(125, 75, 50, 50);
box3.setAnimation("3");
box3.scale = 0.1;

var box4 = createSprite(175, 75, 50, 50);
box4.setAnimation("4");
box4.scale = 0.1;

var box5 = createSprite(225, 75, 50, 50);
box5.setAnimation("5");
box5.scale = 0.1;

var box6 = createSprite(275, 75, 50, 50);
box6.setAnimation("6");
box6.scale = 0.1;

var box7 = createSprite(325, 75, 50, 50);
box7.setAnimation("7");
box7.scale = 0.1;

var box8 = createSprite(375, 75, 50, 50);
box8.setAnimation("8");
box8.scale = 0.1;

var box9 = createSprite(25, 125, 50, 50);
box9.setAnimation("9");
box9.scale = 0.4;

var box10 = createSprite(75, 125, 50, 50);
box10.setAnimation("10");
box10.scale = 0.1;

var box11 = createSprite(125, 125, 50, 50);
box11.setAnimation("11");
box11.scale = 0.2;

var box12 = createSprite(175, 125, 50, 50);
box12.setAnimation("12");
box12.scale = 0.1;

var box13 = createSprite(225, 125, 50, 50);
box13.setAnimation("13");
box13.scale = 0.4;

var box14 = createSprite(275, 125, 50, 50);
box14.setAnimation("14");
box14.scale = 0.1;

var box15 = createSprite(325, 125, 50, 50);
box15.setAnimation("15");
box15.scale = 0.1;

var box16 = createSprite(375, 125, 50, 50);
box16.setAnimation("16");
box16.scale = 0.1;

//game state
var gameState = "serve";

//ball
var ball = createSprite(200, 200);
ball.setAnimation("ball");
ball.scale = 0.5;

//paddle
var paddle = createSprite(200, 370, 100, 30);
paddle.setAnimation("paddle");
paddle.scale = 0.3;

function draw() {
  background("lavender");
  createEdgeSprites();
  drawSprites();
  
  //directions
  if (gameState === "serve") {
    textSize(15);
    fill("magenta");
    text("Press ENTER to serve the ball", 15, 20);
  } 
  if (gameState === "play") {
    //make the ball bounce off the edges and the paddle
    ball.bounceOff(topEdge);
    ball.bounceOff(leftEdge);
    ball.bounceOff(rightEdge);
    ball.bounceOff(paddle);
    
    //user control the paddle
    paddle.x = World.mouseX;
    
    //score count
    textSize(15);
    fill("magenta");
    text("Score: " + score, 330, 20);
    
    //make the ball destroy the gems and play noise
    if(ball.isTouching(box1)) {
       score += 1;
      box1.destroy();
      playSound("assets/category_alerts/retro_game_alert_2.mp3");
    }
    if(ball.isTouching(box2)) {
      score += 1;
      box2.destroy();
      playSound("assets/category_alerts/retro_game_alert_2.mp3");
    }
    if(ball.isTouching(box3)) {
      score += 1;
      box3.destroy();
      playSound("assets/category_alerts/retro_game_alert_2.mp3");
    }
    if(ball.isTouching(box4)) {
      score += 1;
      box4.destroy();
      playSound("assets/category_alerts/retro_game_alert_2.mp3");
    }
    if(ball.isTouching(box5)) {
      score += 1;
      box5.destroy();
      playSound("assets/category_alerts/retro_game_alert_2.mp3");
    }
    if(ball.isTouching(box6)) {
      score += 1;
      box6.destroy();
      playSound("assets/category_alerts/retro_game_alert_2.mp3");
    }
    if(ball.isTouching(box7)) {
      score += 1;
      box7.destroy();
      playSound("assets/category_alerts/retro_game_alert_2.mp3");
    }
    if(ball.isTouching(box8)) {
      score += 1;
      box8.destroy();
      playSound("assets/category_alerts/retro_game_alert_2.mp3");
    }
    if(ball.isTouching(box9)) {
      score += 1;
      box9.destroy();
      playSound("assets/category_alerts/retro_game_alert_2.mp3");
    }
    if(ball.isTouching(box10)) {
      score += 1;
      box10.destroy();
      playSound("assets/category_alerts/retro_game_alert_2.mp3");
    }
    if(ball.isTouching(box11)) {
      score += 1;
      box11.destroy();
      playSound("assets/category_alerts/retro_game_alert_2.mp3");
    }
    if(ball.isTouching(box12)) {
      score += 1;
      box12.destroy();
      playSound("assets/category_alerts/retro_game_alert_2.mp3");
    }
    if(ball.isTouching(box13)) {
      score += 1;
      box13.destroy();
      playSound("assets/category_alerts/retro_game_alert_2.mp3");
    }
    if(ball.isTouching(box14)) {
      score += 1;
      box14.destroy();
      playSound("assets/category_alerts/retro_game_alert_2.mp3");
    }
    if(ball.isTouching(box15)) {
      score += 1;
      box15.destroy();
      playSound("assets/category_alerts/retro_game_alert_2.mp3");
    }
    if(ball.isTouching(box16)) {
      score += 1;
      box16.destroy();
      playSound("assets/category_alerts/retro_game_alert_2.mp3");
    }
    if(ball.isTouching(paddle)) {
      playSound("assets/category_hits/puzzle_game_button_01.mp3");
    }
  }
  if (gameState === "end") {
    textSize(50);
    textAlign(CENTER, CENTER);
    text("You win!", 200, 200);
  }
  
  if(keyDown("ENTER")) {
    ball.velocityX = -3;
    ball.velocityY = 4;
    gameState = "play";
  }
  if(score >= 16) {
    gameState = "end";
  }
  
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
