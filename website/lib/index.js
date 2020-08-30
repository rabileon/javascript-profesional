import MediaPlayer from '@radixleon/radixmediaplayer';
import AutoPlay from '@radixleon/radixmediaplayer/lib/AutoPlay';
import AutoPause from '@radixleon/radixmediaplayer/lib/AutoPause';
import Ads from '@radixleon/radixmediaplayer/lib/Ads';
var video = document.querySelector('video');
var player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay(), new AutoPause(), new Ads()]
});
var playButton = document.querySelector('#playButton');
playButton.onclick = function () { return player.togglePlay(); };
var muteButton = document.querySelector('#muteButton');
muteButton.onclick = function () {
    if (player.media.muted) {
        player.unmute();
    }
    else {
        player.mute();
    }
};
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')["catch"](function (error) {
        console.log(error.message);
    });
}
