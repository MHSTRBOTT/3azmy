const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', function(){	
    var ms = 72000 ;	
    var setGame = [' صدام حسين فخر العرب ',' صدام حسين فخر العرب '];	
    var i = -1;	
    var j = 0;	
    setInterval(function (){	
        if( i == -1 ){	
j = 1;	
       }	
        if( i == (setGame.length)-1 ){	
            j = -1;	
      }	
       i = i+j;	
        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);	
}, ms);	
	
});




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
