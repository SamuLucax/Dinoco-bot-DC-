const { SlashCommandBuilder } = require("discord.js");

const playlists = {
    //musica gringas
    jazz_classic: "https://open.spotify.com/playlist/37i9dQZF1DXbITWG1ZJKYt?si=i6Ra1P17QSKulVDHB-FwhA&pi=u-ck3CKmZlSVqE",
    classic: "https://open.spotify.com/playlist/2oGH6ZtoWnlUipUftOBOZn?si=l1tNUkVzTAODCDF3Xk3o4w",
    jaz: "https://open.spotify.com/playlist/2VEbC6d66cSf62gcWSCu53?si=TzD8_x3aSOm6yuP2W4c3CA",
    rock: "https://open.spotify.com/playlist/5TUxgTIxzLbLVh7RUf9V8i?si=d79ad3b1a72840b6&nd=1&dlsi=41f3f2f5df234d73",
    taylor_swift: "https://open.spotify.com/playlist/37i9dQZF1DX5KpP2LN299J?si=18227df33853430c",
    coldplay: "https://open.spotify.com/playlist/37i9dQZF1DXaQm3ZVg9Z2X?si=2d70760ff7b74011",
    bruno_mars: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO03DwPK?si=f23e468e18394212",
    bts: "https://open.spotify.com/playlist/37i9dQZF1DX08mhnhv6g9b?si=a7867b93ab9b411c",
    michael_jackson: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO1SVXaM?si=778630097270428a",
    elvis_presley: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO2n9pny?si=31080a2f99bb4e46",
    madonna: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO3OV3gs?si=7bcae28afb0d488b",
    beattles: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO2iBPiw?si=59d3f6b086384208",
    whitney_houston: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO476tMI?si=380d622140c24ecf",
    elton_john: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO2eixLb?si=336ce06c8a3f49a4",
    freddie_mercury: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO2NEgTc?si=80af6fedfb3c4e1a",
    beyoncé: "https://open.spotify.com/playlist/37i9dQZF1DX2oU49YwtXI2?si=c619dc876a6146f4",
    rihanna: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO3by276?si=1b1730d2214e4098",
    adele: "https://open.spotify.com/playlist/37i9dQZF1DWZUozJiHy44Y?si=33a252ff3f3145fb",
    //musicas brasileiras

};

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Dinoco te oferece playlists com músicas e estilos diferente! :D")
        .addStringOption(option =>
            option.setName('tipo')
                .setDescription('Selecione o tipo de playlist')
                .setRequired(true)
                .addChoices(
                    {name: 'jazz_classic', value: 'jazz_classic' },
                    {name: 'classic', value: 'classic' },
                    {name: 'jaz', value: 'jaz' },
                    {name: 'rock', value: 'rock'},
                    {name: 'taylor_swift', value: 'taylor_swift'},
                    {name: 'coldplay', value: 'coldplay'},
                    {name: 'bruno_mars', value: 'bruno_mars'},
                    {name: 'bts', value: 'bts'},
                    {name: 'michael_jaclkson', value: 'miachel_jackson'},
                    {name: 'elvis_presley', value: 'elvis_presley'},
                    {name: 'madonna', value: 'madonna'},
                    {name: 'beattles', value: 'beattles'},
                    {name: 'whitney_houston', value: 'whitney_houston'},
                    {name: 'elton_john', value: 'elton_john'},
                    {name: 'freddie_mercury', value: 'freddie_mercury'},
                    {name: 'beyoncé', value: 'beyoncé'},
                    {name: 'rihanna', value: 'rihanna'},
                    {name: 'adele', value: 'adele'},
                )
        ),

    async execute(interaction) {
        const tipoPlaylist = interaction.options.getString('tipo');

        if (tipoPlaylist && playlists[tipoPlaylist]) {
            await interaction.reply(playlists[tipoPlaylist]);
        } else {
            await interaction.reply("Playlist não encontrada.");
        }
    }
};
