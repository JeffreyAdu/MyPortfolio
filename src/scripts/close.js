export default function initCloseVideo() {
    const closeButton = document.getElementById('close-video');
    const floatingVideo = document.getElementById('floating-video');
  
    if (closeButton && floatingVideo) {
      closeButton.addEventListener('click', function () {
        floatingVideo.style.display = 'none';
      });
    }
  }
  