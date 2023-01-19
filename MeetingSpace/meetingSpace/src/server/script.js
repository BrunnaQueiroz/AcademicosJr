const socket = io('/')
const videoGrid = document.getElementById('video-grid')

let url = "";
let player;
let videoId = "t9WmZFnE6Hg";

const myPeer = new Peer(undefined, {
    path: "/peerjs",
    host: '/',  
    /*port: '3001' para parar de dar erro no console*/
    port: '3000'       
})

const myVideo = document.createElement('video')
myVideo.muted = true
const peers = {}
navigator.mediaDevices.getUserMedia({
video: false,
audio: false
}).then(stream => {
addVideoStream(myVideo, stream)

myPeer.on('call', call => {
    call.answer(stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream)
    })
})

socket.on('changevideo', (videoId) => {
    youTubePlayerChangeVideoId(videoId);
  })

  socket.on('play', () => {
    player.playVideo()
  })

  socket.on('pause', () =>
    player.pauseVideou())

  socket.on('user-connected', userId => {
    connectToNewUser(userId, stream)
  })

    /*socket.on('user-connected', userId => {
    // user is joining`
    setTimeout(() => {
    // user joined
    connectToNewUser(userId, stream)
    }, 1000)
    })*/
})

function playVideo(){
  socket.emit("play")
}

function pauseVideo(){
  socket.emit("pause")
}


function changeVideo() {
  url = document.getElementById('url').value
  videoId = YouTubeGetID(url) 
  socket.emit("changevideo", videoId) 
  document.getElementById('url').value=""
}

function YouTubeGetID(url) {
  var ID = "";
  url = url
    .replace(/(>│<)/gi, "")
    .split(/(vi\/│v=│\/v\/│youtu\.be\/│\/embed\/)/);
  if (url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i) ;
    ID = ID[0];
    } else {
      ID = url;
  }
  return ID;
}

socket.on('user-disconnected', userId => {
  if (peers[userId]) peers[userId].close()
})

myPeer.on('open', id => {
  socket.emit('join-room', ROOM_ID, id)
})

function connectToNewUser(userId, stream) {
  const call = myPeer.call(userId, stream)
  const video = document.createElement('video')
  call.on('stream', userVideoStream => {
    addVideoStream(video, userVideoStream)
  })
  call.on('close', () => {
    video.remove()
  })

  peers[userId] = call
}

function addVideoStream(video, stream) {
  video.srcObject = stream
  video.addEventListener('loadedmetadata', () => {
    video.play()
  })
  videoGrid.append(video)
}

function youTubePlayerChangeVideoId(videoId) {
  player.cueVideoById({ suggestedQuality: "tiny", videoId: videoId }) ;
  player.pauseVideo();
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: 500,
    width: "100%",  
    videoId: videoId,
    playerVars: {
      playsinline: 1,
      autoplay: 0,
      controls: 1,
  }, 
  events: {
    onReady: onPlayerReady,
    onStateChange: onPlayerStateChange,
  },  
});
}

function onPlayerReady() {
  console.log(true) ;
}
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
  done = true;
  }
}

