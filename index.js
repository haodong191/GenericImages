controller.on('slash_command', function (slashCommand, message) {

    switch (message.command) {
        case "/gimages": //handle the `/echo` slash command. We might have others assigned to this app too!
            // The rules are simple: If there is no text following the command, treat it as though they had requested "help"
            // Otherwise just echo back to them what they sent us.

            // but first, let's make sure the token matches!
            if (message.token !== process.env.wIxaLrOv2ldVyszsGnrVf3Dk) return; //just ignore it.

            // if no text was supplied, treat it as a help command
            if (message.text === "") {
                slashCommand.replyPrivate(message,
                    "https://www.revzilla.com/assets/0002/7492/Generic_Hardware_for_PDP.jpeg https://www.revzilla.com/assets/0002/7493/Generic_Sunshield_for_PDP.jpeg https://www.revzilla.com/assets/0002/7494/Generic_Face_Shield_for_PDP.jpeg https://www.revzilla.com/assets/0002/7495/Generic_Cheek_Pads_for_PDP.jpeg https://www.revzilla.com/assets/0002/7496/Generic_Helmet_Liner_for_PDP.jpeg https://www.revzilla.com/assets/0002/7497/Generic_Back_Protector_for_PDP.jpeg");
                return;
            }
    }

})
;

