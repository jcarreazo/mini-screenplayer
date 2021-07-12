const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Prompt to select media stream, pass it to video element, then, play it

async function selectMediaSource() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        const e = new Error(error);
        console.log(e)
    }
}

button.addEventListener('click', async () => {
    //Disable
    button.disabled = true;
    //start Picture in Picture
    await videoElement.requestPictureInPicture();
    //reset button
    button.disabled = false;
});

selectMediaSource();