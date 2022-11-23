const
  {
    createAgoraRtcEngine,
    VideoSourceType,
    RenderModeType,
    ChannelProfileType,
    ClientRoleType
  } = require("agora-electron-sdk");

const appID = "30a6bc89994d4222a71eba01c253cbc7";
const channel = "test";
const token = "";
const Uid = 0;

let remoteUIDArr = [];
let agoraEngine;
let localVideoContainer;

const handleUserJoin = (connection, remoteUid) => {
  remoteUIDArr.push(remoteUid);
  let remoteVideoContainer = document.createElement('div');
  remoteVideoContainer.id = remoteUid
  remoteVideoParent = document.getElementById("join-channel-remote-video");
  remoteVideoParent.append(remoteVideoContainer);
  agoraEngine.setupRemoteVideoEx(
    {
      sourceType: VideoSourceType.VideoSourceRemote,
      uid: remoteUid,
      view: document.getElementById(remoteUid),
      renderMode: RenderModeType.RenderModeFit,
    },
    {
      channelId: connection.channelId
    });
}

const handleUserLeave = (connection, remoteUid) => {
  const div = document.getElementById(remoteUid)
  agoraEngine.destroyRendererByView(div)
  div.remove()
}

// window.onload = () => {
  localVideoContainer = document.getElementById("join-channel-local-video");
  agoraEngine = createAgoraRtcEngine();
  agoraEngine.initialize({ appId: appID });
  agoraEngine.addListener('onUserJoined', handleUserJoin)
  agoraEngine.addListener('onUserOffline', handleUserLeave)
  agoraEngine.setChannelProfile(ChannelProfileType.ChannelProfileCommunication);
  agoraEngine.setClientRole(ClientRoleType.ClientRoleBroadcaster);
  document.getElementById("leave").onclick = async function () {
    agoraEngine.stopPreview();
    agoraEngine.leaveChannel();
    window.location.reload();
  }
  document.getElementById("join").onclick = async function () {
    agoraEngine.setupLocalVideo(
      {
        sourceType: VideoSourceType.VideoSourceCameraPrimary,
        view: localVideoContainer,
      });

    agoraEngine.enableVideo();
    agoraEngine.startPreview();
    agoraEngine.joinChannel(token, channel, Uid);
  }
// };

if (appID === "") {
  alert('Please enter APPID in src/render.jsx (line:2)');
}