function setFullScreen() {
    regularScreen = document.querySelector(".T4LgNb").parentElement.innerHTML;
    parentScreen = document.querySelector(".T4LgNb").parentElement;

    var trashElements = [document.querySelector(".aGWPv"), document.querySelector(".OGZrkc"), document.querySelector("J0M6X.ZmuLbd.Didmac.G03iKb"), document.querySelector(".lefKC"), document.querySelector(".tTdl5d")]
    
    if(trashElements[1] != null) trashElements[1].remove(); //chi sta condividendo
    if(trashElements[2] != null) trashElements[2].remove(); //chi sta condividendo
    if(trashElements[3] != null) trashElements[3].childNodes.forEach(el=>{el.remove()}); 
    if(trashElements[3] != null) trashElements[3].childNodes.forEach(el=>{el.remove()}); 
    if(trashElements[4] != null) trashElements[4].setAttribute("jsaction", "");
    if(trashElements[4] != null) trashElements[4].setAttribute("jscontroller", "");
    if(trashElements[0] != null) trashElements[0].setAttribute("jscontroller", ""); //avatar
    if(trashElements[0] != null) trashElements[0].style.display = "none";
    
    let screenSharingParent = document.querySelector(".axUSnc.cZXVke.P9KVBf");
    let screenSharingParentStyle = screenSharingParent.style;
    screenSharingParent.setAttribute("jsaction", "");
    screenSharingParentStyle.inset = "unset";
    screenSharingParentStyle.width = "100%";
    screenSharingParentStyle.height = "100%";

    let screenSharingStyle = document.querySelector(".dkjMxf").style;
    screenSharingStyle.left = "0";
    screenSharingStyle.top = "0";
    screenSharingStyle.width = "100%";
    screenSharingStyle.height = "100%";

    let bottomBar = document.querySelector(".Sdwpn.P9KVBf").style;
    bottomBar.background = "transparent";
    bottomBar.marginBottom = "10px";
    bottomBar.transform = "scale(.8)";

    let containerStyle = document.querySelector(".oZRSLe").style;
    containerStyle.width = "100%";
    containerStyle.height = "100%";

    enterFullScreen(document.body);
}

function setRegularScreen() {
    exitFullScreen(document.body);
    document.querySelector(".T4LgNb").remove();
    parentScreen.innerHTML = regularScreen;

}

function enterFullScreen() {
    document.documentElement.requestFullscreen();
};
  

function exitFullScreen(element) {
	document.exitFullscreen();
};
  
function zoom(inout) {
    if (zoomValue !== undefined && zoomValue !== null && isFull) {

        var scrollView = document.querySelector(".koV58.Zi94Db.S7urwe").style;

        try {
            document.querySelector(".tTdl5d").remove();
        } catch { }

        if(scrollView != null) scrollView.overflow = "auto";

        if (inout == 0) { //zoomIn
            zoomValue += 50;
            console.log("ZoomIn");
        } else if (inout == 1) { //zoomOut
            zoomValue -= 50;
            console.log("ZoomOut");
        } else if (inout == 2) {
            if(scrollView != null) scrollView.overflow = "hidden";
            zoomValue = 2;
            console.log("Reset");
        }

        let containerScreenshareSizeStyle = document.querySelector(".Gv1mTb-aTv5jf").style;
        let sizeValue = "calc(100% + " + zoomValue + "px)";
        containerScreenshareSizeStyle.height = sizeValue;
        containerScreenshareSizeStyle.width = sizeValue;
    }else{
        alert("You aren't in fullscreen");
    }
}

var regularScreen;
var parentScreen;
var isFull = false;
    
var zoomValue = 2;
var canFullScreen = false;

var meetFound = false;

function onMeetFound(){

    meetFound = true;

    /*if (window.trustedTypes && window.trustedTypes.createPolicy) {
        window.trustedTypes.createPolicy('default', {
            createHTML: (string, sink) => string
        });
    }*/
    
    var element = document.createElement('div');
    element.innerHTML = `<div class="fullScreenKio">
        <span data-is-tooltip-wrapper="true">
            <button class="VfPpkd-Bz112c-LgbsSe fzRBVc tmJved xHd4Cb rmHNDe fullWidthKio" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc; touchcancel:JMtRjd; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;mlnRJb:fLiPzd;" jsname="r8qRAd" data-disable-idom="true" aria-label="Attiva presentazione fullscreen" aria-pressed="false" data-tooltip-enabled="true" data-tooltip-id="ucc-0" data-tooltip-x-position="3" data-tooltip-y-position="2" role="button">
                <span aria-hidden="true" class="material-icons-extended VfPpkd-Bz112c-kBDsod">width_full</span>
            </button>
        </span>
    </div>`;
    
    var zoomin = document.createElement('div');
    zoomin.innerHTML = `<div class="zoomInKio">
        <span data-is-tooltip-wrapper="true">
            <button class="VfPpkd-Bz112c-LgbsSe fzRBVc tmJved xHd4Cb rmHNDe zoomInKioBtn" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc; touchcancel:JMtRjd; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;mlnRJb:fLiPzd;" jsname="r8qRAd" data-disable-idom="true" aria-label="Zooma presentazione" aria-pressed="false" data-tooltip-enabled="true" data-tooltip-id="ucc-0" data-tooltip-x-position="3" data-tooltip-y-position="2" role="button">
                <span aria-hidden="true" class="material-icons-extended VfPpkd-Bz112c-kBDsod">zoom_in</span>
            </button>
        </span>
    </div>`;
    
    var zoomout = document.createElement('div');
    zoomout.innerHTML = `<div class="zoomOutKio">
        <span data-is-tooltip-wrapper="true">
            <button class="VfPpkd-Bz112c-LgbsSe fzRBVc tmJved xHd4Cb rmHNDe zoomOutKioBtn" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc; touchcancel:JMtRjd; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;mlnRJb:fLiPzd;" jsname="r8qRAd" data-disable-idom="true" aria-label="Dezoom presentazione" aria-pressed="false" data-tooltip-enabled="true" data-tooltip-id="ucc-0" data-tooltip-x-position="3" data-tooltip-y-position="2" role="button">
                <span aria-hidden="true" class="material-icons-extended VfPpkd-Bz112c-kBDsod">zoom_out</span>
            </button>
        </span>
    </div>`;
    
    var zoomreset = document.createElement('div');
    zoomreset.innerHTML = `<div class="zoomResetKio">
        <span data-is-tooltip-wrapper="true">
            <button class="VfPpkd-Bz112c-LgbsSe fzRBVc tmJved xHd4Cb rmHNDe zoomResetKioBtn" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc; touchcancel:JMtRjd; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;mlnRJb:fLiPzd;" jsname="r8qRAd" data-disable-idom="true" aria-label="Resetta zoom presentazione" aria-pressed="false" data-tooltip-enabled="true" data-tooltip-id="ucc-0" data-tooltip-x-position="3" data-tooltip-y-position="2" role="button">
                <span aria-hidden="true" class="material-icons-extended VfPpkd-Bz112c-kBDsod">restart_alt</span>
            </button>
        </span>
    </div>`;
    
    let buttonsContainer = document.querySelector('.R5ccN');

    buttonsContainer.insertBefore(element, buttonsContainer.childNodes[3]);
    buttonsContainer.insertBefore(zoomin, buttonsContainer.childNodes[4]);
    buttonsContainer.insertBefore(zoomreset, buttonsContainer.childNodes[5]);
    buttonsContainer.insertBefore(zoomout, buttonsContainer.childNodes[6]);
    
    document.querySelector(".fullWidthKio").addEventListener("click", () => {
        if (canFullScreen) {
            if (!isFull) {
                isFull = true;
                alert("Soon the screenshare will be in fullscreen and you will be able to zoom, to move you can: use the scrollbars, use the trackpad (use the trackpad with two fingers and you can move in all directions), use mouse and keyboard (wheel to scroll up and down, shift+wheel to scroll right and left)");
                setFullScreen();
            } else {
                isFull = false;
                setRegularScreen();
            }
        }else{
            alert("No screenshare found!");
        }
    
    });
    
    document.querySelector(".zoomInKioBtn").addEventListener("click", () => zoom(0));
    document.querySelector(".zoomOutKioBtn").addEventListener("click", () => zoom(1));
    document.querySelector(".zoomResetKioBtn").addEventListener("click", () => zoom(2));

    setInterval(function () {
    
        if (document.querySelector(".axUSnc.cZXVke.P9KVBf").childNodes[0].outerHTML.includes("volume_off")) {
			try{
				document.querySelector(".C3LXKe").style.display = "none";
			}catch{}
            canFullScreen = true;
        } else {
            if(canFullScreen){
            //    setRegularScreen();
            }

            canFullScreen = false;
        }
    
    }, 2000);
}

const searchMeet = setInterval(() => {
    
    if (document.querySelector(".VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.tWDL4c.jh0Tpd.Gt6sbf.QQrMi") && !meetFound) {
        onMeetFound();
    }

}, 700);