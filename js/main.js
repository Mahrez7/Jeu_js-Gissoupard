import * as classes from './classes.js'
import * as bot from './bot.js'
      const canvas = document.querySelector('.myCanvas');
      const width = canvas.width = window.innerWidth;
      const height = canvas.height = window.innerHeight;
      const ctx = canvas.getContext('2d');
      const max_heath_bar_width = width/2*0.9;
      ctx.fillStyle = 'rgb(0,0,0)';
      ctx.fillRect(0,0,width,height);
      var background = new Image();
      var i = 0;
      background.src = '/img/bg.jpg'
      function draw(image,x,y) {//fonction pour charger et dessiner une image
              image.onload = ctx.drawImage(image,x,y);
          }
      var player = new classes.Player(100,5,10);
      player.image.src = '/img/player.png';
      player.x = 100;
      player.y = 500;
      var adversary = new bot.Bot(new classes.Giant('Adversary'),player);
      adversary.type.player.image.src = '/img/player.png';
      adversary.type.player.x = 700;
      adversary.type.player.y = 500;
      var running = true;//variable pour la boucle du jeu
      var pressed = {}; //pour gérer les touches
      document.addEventListener('keydown'/*touche appuyée*/, function(event) {
          pressed[event.key] = true;//récupère le code de la touche dans un dict
          if (event.key == " " ) {
              player.attacking(adversary.type.player)
          }
          else if(event.key == 'ArrowUp'){
              player.is_jumping = true;
          }
      });
      document.addEventListener('keyup'/*touche lâchée*/, function(event) {
          pressed[event.key] = false;//récupère le code de la touche dans un dict
      });
      function game_loop() {    
                  ctx.fillStyle = 'rgb(0,0,0)';
                  ctx.fillRect(0,0,width,height);
                  draw(background,0,-250);//applique l'arrière-plan
                  draw(player.image,player.x,player.y);//dessine le joueur
                  draw(adversary.type.player.image,adversary.type.player.x,adversary.type.player.y);//dessine l'adversaire
                  ctx.fillStyle = 'rgb(68,72,69)';
                  ctx.fillRect(50,50,max_heath_bar_width,20);
                  ctx.fillStyle = 'rgb(0,255,0)';
                  ctx.fillRect(50,50,player.health/player.max_health*max_heath_bar_width,20);
                  ctx.fillStyle = 'rgb(68,72,69)';
                  ctx.fillRect(width-50-max_heath_bar_width,50,max_heath_bar_width,20);
                  ctx.fillStyle = 'rgb(0,255,0)';
                  ctx.fillRect(width-50,50,(adversary.type.player.health/adversary.type.player.max_health*max_heath_bar_width)*-1,20);
                  if(player.is_jumping){
                    if(i < 25){
                      player.y -= 7;
                      i += 1;
                    } else if(i<50){
                      player.y += 7;
                      i += 1;
                    }else{
                      player.is_jumping = false;
                      i = 0;
                      player.y = 500;
                    }
                  }
                  if (pressed['ArrowLeft']) {
                    player.move_left();
                  } else if(pressed['ArrowRight']){
                    player.move_right();
                  };
                  adversary.play()
                  if(running){
                    requestAnimationFrame(game_loop);
                  } else {
                    cancelAnimationFrame(game_loop);
                  }
                };
      game_loop()