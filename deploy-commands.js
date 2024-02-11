const { error } = require("console");
const { REST } = require("discord.js");

// dotenv
const dotenv = require('dotenv');
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

// commands imports
const fs = require("fs");
const path = require("path");
const commandsPath = path.join(__dirname, "commands");
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

const commands = [];

for (const file of commandsFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

// instância rest
const rest = new REST({ version: "10" }).setToken(TOKEN);

// deploy
(async () => {
    try {
        console.log(`Resetando ${commands.length} comandos...`);

        // PUT (para comandos globais)
        const data = await rest.put(
            `/applications/${CLIENT_ID}/commands`,
            { body: commands }
        );
        
        

        console.log("Comandos registrados com Sucesso!");
    } catch (error) {
        console.error(error);
    }
})();
