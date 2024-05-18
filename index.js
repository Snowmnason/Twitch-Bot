const { authenticateSpotify } = require('./Spotify/authenticationSpotify')
const { initializeExpressApp } = require('./Twitch/ServerSetup');
const { setSpotToken, currentSong }= require('./Spotify/spotify')
const { setBack } = require('./Hue/HueControl')

async function runScript() {
    currentSong()
}

async function autho(){
    try {
        const token = await authenticateSpotify();
        await setSpotToken(token);
        initializeExpressApp();
        setBack()
        runScript();
    } catch (error) {
        console.error('Error:', error.message);
    }
}

autho();
