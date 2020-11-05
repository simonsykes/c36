class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  play(){
    form.hide();
    textSize(30);
    text("gameStart",120,100);
    Player.getPlayerInfo();

    if(allPlayer!==undefined){
      var display_position=130;
      for(var plr in allPlayer){
        if(plr==="player"+player.index)
          fill("red");
        else
          fill("black");
          
        display_position+=20;
        textSize(15);
        text(allPlayer[plr].name+": "+allPlayer[plr].distance,120,display_position);
      }
    }

    if(keyIsDown(UP_ARROW)&&player.index!==null){
      player.distance+=50;
      player.update();
    }
  }
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
}
