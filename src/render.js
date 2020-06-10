const AgoraRtcEngine = require('agora-electron-sdk').default
const APPID = ""; //Enter App  ID here

if (!APPID) {
  alert('Please enter APPID in src/render.jsx (line:2)');
}

let rtcEngine = new AgoraRtcEngine();
rtcEngine.initialize(APPID);

rtcEngine.on('joinedChannel', (channel, uid, elapsed) => {
  let localVideoContainer = document.querySelector('#local');
  rtcEngine.setupLocalVideo(localVideoContainer);
})

rtcEngine.on('userJoined', (uid) => {
  let remoteVideoContainer = document.querySelector('#remote')
  rtcEngine.setupViewContentMode(uid, 1);
  rtcEngine.subscribe(uid, remoteVideoContainer)
})

rtcEngine.setChannelProfile(0)
rtcEngine.enableVideo()

document.getElementById('start').onclick = () => {
  rtcEngine.joinChannel(null, "channel-x", null, Math.floor(new Date().getTime() / 1000))
};

document.getElementById('stop').onclick = () => {
  rtcEngine.leaveChannel();
  document.getElementById('local').innerHTML = '';
  document.getElementById('remote').innerHTML = '';
  // rtcEngine.release();
};
