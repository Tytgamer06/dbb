const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = ";";

Client.on('ready' , ()=>{
    console.log("Bot is online")
})

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "hey")){
        message.channel.send("Sup! " + message.author + "! Ik werk helemaal perfect!");

    }

    if(message.content.startsWith(prefix + "help")){
        message.channel.send("Check je DM's!");
        message.author.send(";help : Laat je de commands zien en geeft je spam! ;)");
        message.author.send(";groep : Laat je de politie groep zien!");
        message.author.send(";test : Laat je zien of je staff bent of niet!");
        message.author.send("purge : Alleen voor mensen met de HR rol. Verwijdert berichten!");
    }

    if(message.content.startsWith(prefix + "test")){
        let author = message.member;
        let role = message.guild.roles.find('name', "HR");
        if(author.roles.has(role.id)){
            message.reply("Jij hebt permissies!");
            return;
        }else{
            message.reply("Jij hebt geen permissies!");
            return;
        }
    }

    if(message.content.startsWith(prefix + "purge")){
        let args = message.content.split(" ").slice(1);
        let author = message.member;
        let role = message.guild.roles.find('name', "HR");
        if(author.roles.has(role.id)){
            if(!args[0]){
                message.delete();
                message.author.send("Geen argument gegeven.");
                return;
            }
            if(args[0] > 100){
                message.delete();
                message.author.send("Maximale om te verwijderen is 100.");
                return;
            }
            message.delete();
            message.channel.bulkDelete(args[0]);
            message.author.send({embed:{
                color: 0x28d62b,
                description: "Ik ben klaar met het verwijderen van " + args[0] + " berichten!"
            }})
            return;
        }

    }

    if(message.content.startsWith(prefix + "groep")){
        message.channel.send("De politie groep:  https://web.roblox.com/groups/3105066/De-NL-Politie ! Je ziet daar in de Affiliates tab de andere groepen!");
    }


})


Client.login(process.env.BOT_TOKEN)
