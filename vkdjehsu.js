$(document).ready(function () {
	if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    var vds = document.getElementById('vds');
    
    if (vds) {
        vds.src = "https://kr.ncsoft.com/_resource/whatWeCreate/video/journeyofmonarch-intro.mp4";
        document.getElementById('vd').load();
    }
	}
});

