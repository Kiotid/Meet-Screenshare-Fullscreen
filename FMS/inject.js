function moveButtonsBar(keyCode) {

    const KEYS = {
        ARROW_UP: 38,
        ARROW_DOWN: 40,
        ARROW_LEFT: 37,
        ARROW_RIGHT: 39,
        H: 72
    }

    let buttonsBarContainerContainer = document.querySelector(".J0M6X.nulMpf.Didmac.G03iKb");
    let buttonsBarContainer = document.querySelector(".UnvNgf.Sdwpn.P9KVBf");
    let buttonsBarCenter = document.querySelector(".R5ccN");
    let buttonsBarLeft = document.querySelector(".jsNRx");
    let buttonsBarLeftChild = document.querySelector(".tMdQNe");
    buttonsBarLeftChild = buttonsBarLeftChild == null ? document.querySelector(".SGP0hd.kunNie") : buttonsBarLeftChild;

    if (buttonsBarContainer == null || buttonsBarCenter == null || buttonsBarLeft == null || buttonsBarLeftChild == null) return;

    let buttonsBarContainerContainerStyle;

    if (buttonsBarContainerContainer != null) buttonsBarContainerContainerStyle = buttonsBarContainerContainer.style;
    var buttonsBarContainerStyle = buttonsBarContainer.style;
    var buttonsBarCenterStyle = buttonsBarCenter.style;
    var buttonsBarLeftStyle = buttonsBarLeft.style;
    var buttonsBarLeftChildStyle = buttonsBarLeftChild.style;

    let top;
    let left;
    let right;
    let width;
    let height;
    let margin;
    let transform;
    let display;
    let flexDirection;
    let alignItems;
    let marginRight;
    let gap;

    marginRight = "0";
    gap = "10px";
    display = "flex";
    alignItems = "center";
    justifyContent = "center";

    let el = document.querySelector(".jsNRx");
    try{
        el.childNodes[el.childElementCount-2].style.display = "none";
    }catch(e){
        el.childNodes[0].style.display = "none";
    }

    let target = buttonsBarContainerContainer != null ? buttonsBarContainerContainerStyle : buttonsBarContainerStyle;
    
    if(buttonsBarContainerStyle.display != "none"){
        target.display = display;
        buttonsBarContainerStyle.display = display;
        buttonsBarCenterStyle.display = display;
        buttonsBarLeftStyle.display = display;
        buttonsBarLeftChildStyle.display = display;
    }
    console.log("Key pressed: " + keyCode)
    
    switch (keyCode) {

        case KEYS.ARROW_UP:

            console.log("Moving buttons bar top")
            top = "0";
            left = "0";
            width = "100%";
            height = "10vh";
            transform = "scale(.8)";
            flexDirection = "row";
            margin = "0 0 0 0";
            target.width = width;

            //if (buttonsBarContainerContainer != null) buttonsBarContainerContainerStyle.alignItems = "center"; else buttonsBarContainerStyle.alignItems = "center";

            break;
        case KEYS.ARROW_DOWN:
            
            console.log("Moving buttons bar down")
            top = "auto"
            left = "0";
            width = "100%";
            height = "auto";
            transform = "scale(.8)";
            flexDirection = "row";
            margin = "0 0 1.5vh 0";
            target.width = width;

            //if (buttonsBarContainerContainer != null) buttonsBarContainerContainerStyle.alignItems = "center"; else buttonsBarContainerStyle.alignItems = "center";

            break;

        case KEYS.ARROW_LEFT:
        
            console.log("Moving buttons bar left")
            left = "0";
            width = "90px";
            height = "100%";
            transform = "scale(.9)";
            flexDirection = "column";
            margin = "0 0 0 1.5vh";
            justifyContent = "auto";
            alignItems = "flex-start";
            target.width = width;
	
            //if (buttonsBarContainerContainer != null) buttonsBarContainerContainerStyle.alignItems = "center"; else buttonsBarContainerStyle.alignItems = "flex-start";

            break;
        case KEYS.ARROW_RIGHT:
            
            console.log("Moving buttons bar right")
            right = "0";
            left = "auto";
            width = "90px";
            height = "100%";
            transform = "scale(.9)";
            flexDirection = "column";
            margin = "0 1.5vh 0 0";
            justifyContent = "auto";
            alignItems = "flex-end";	
            target.width = "99%";

            //if (buttonsBarContainerContainer != null) buttonsBarContainerContainerStyle.alignItems = "center"; else buttonsBarContainerStyle.alignItems = "flex-end";

            break;

        case KEYS.H: 
            buttonsBarContainerStyle.display = buttonsBarContainerStyle.display == "none" ? "flex" : "none";
            console.log(buttonsBarContainerStyle.display + " " + buttonsBarContainerStyle)
            break;
    }

    if(buttonsBarContainerStyle.display != "none"){

        target.top = top;        
        target.margin = margin;
        target.flexDirection = flexDirection;
        target.justifyContent = justifyContent;
        target.height = height;
        target.alignItems = alignItems;

        buttonsBarContainerStyle.top = top;        
        buttonsBarContainerStyle.left = left;
        buttonsBarContainerStyle.right = right;
        buttonsBarContainerStyle.width = width;
        buttonsBarContainerStyle.height = height;
        buttonsBarContainerStyle.flexDirection = flexDirection;
        buttonsBarContainerStyle.alignItems = alignItems;
        buttonsBarContainerStyle.transform = transform;

        buttonsBarCenterStyle.flexDirection = flexDirection;
        buttonsBarCenterStyle.alignItems = alignItems;
        buttonsBarCenterStyle.gap = gap;

        buttonsBarLeftStyle.flexDirection = flexDirection;
        buttonsBarLeftStyle.alignItems = alignItems;
        buttonsBarLeftStyle.marginRight = marginRight;

        buttonsBarLeftChildStyle.flexDirection = flexDirection;
        buttonsBarLeftChildStyle.alignItems = alignItems;
    }

}

function keyEvent(e){
    
    e = e || window.event;
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
    moveButtonsBar(e.keyCode);
    
}

function setFullScreen() {

    document.addEventListener("keydown", keyEvent);

    moveButtonsBar(40);

    let trashElements = [document.querySelector(".aGWPv"), document.querySelector(".OGZrkc"), document.querySelector("J0M6X.ZmuLbd.Didmac.G03iKb"), document.querySelector(".lefKC"), document.querySelector(".tTdl5d")]
    /*
    if(trashElements[1] != null) trashElements[1].remove(); //chi sta condividendo
    if(trashElements[2] != null) trashElements[2].remove(); //chi sta condividendo
    if(trashElements[3] != null) trashElements[3].childNodes.forEach(el=>{el.remove()}); 
    if(trashElements[3] != null) trashElements[3].childNodes.forEach(el=>{el.remove()}); */
    if(trashElements[1] != null) trashElements[1].style.display = "none"; //chi sta condividendo
    if(trashElements[2] != null) trashElements[2].style.display = "none"; //chi sta condividendo
    if(trashElements[3] != null) trashElements[3].childNodes.forEach(el=>{el.style.display = "none";}); 
    if(trashElements[3] != null) trashElements[3].childNodes.forEach(el=>{el.style.display = "none";}); 
    if(trashElements[4] != null) trashElements[4].setAttribute("jsaction", "");
    if(trashElements[4] != null) trashElements[4].setAttribute("jscontroller", "");
    if(trashElements[4] != null) trashElements[4].style.display = "none";
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

    let bottomBarParent = document.querySelector(".J0M6X.nulMpf.Didmac.G03iKb");

    if(bottomBarParent != null) bottomBarParent.style.marginBottom = "1.5vh";

    let bottomBar = document.querySelector(".UnvNgf.Sdwpn.P9KVBf").style;

    bottomBar.transform = "scale(.8)";
    bottomBar.background = "transparent";

    let containerStyle = document.querySelector(".oZRSLe").style;
    containerStyle.width = "100%";
    containerStyle.height = "100%";

    enterFullScreen();

}

function setRegularScreen() {

    document.onkeydown = null;

    moveButtonsBar(40);

    zoom(2);

    let trashElements = [document.querySelector(".aGWPv"), document.querySelector(".OGZrkc"), document.querySelector(".J0M6X.ZmuLbd.Didmac.G03iKb"), document.querySelector(".lefKC"), document.querySelector(".tTdl5d")]

    if(trashElements[1] != null) trashElements[1].style.display = "block"; //chi sta condividendo
    if(trashElements[2] != null) trashElements[2].style.display = "block"; //chi sta condividendo
    if(trashElements[3] != null) trashElements[3].childNodes.forEach(el=>{el.style.display = "flex";}); 
    if(trashElements[3] != null) trashElements[3].childNodes.forEach(el=>{el.style.display = "flex";}); 
    if(trashElements[4] != null) trashElements[4].setAttribute("jsaction", "focusin:zLyIOd; focusout:kLFAfe; mouseenter:pT0VIc; mouseleave:oiMV6; mousedown:JvLOde;c8DrJb:tzZYCf");
    if(trashElements[4] != null) trashElements[4].setAttribute("jscontroller", "h8UR3d");
    if(trashElements[4] != null) trashElements[4].style.display = "flex";
    if(trashElements[0] != null) trashElements[0].setAttribute("jscontroller", "cGKRub"); //avatar
    if(trashElements[0] != null) trashElements[0].style.display = "block";
    
    let screenSharingParent = document.querySelector(".axUSnc.cZXVke.P9KVBf");
    let screenSharingParentStyle = screenSharingParent.style;
    screenSharingParent.setAttribute("jsaction", "rcuQ6b:NCu6M; contextmenu:gg8MLb;z5KiKd:qIXZdc;mlNxHf:mDPS3e;ifxHj:mDPS3e;bhyCp:mDPS3e;FzwMpb:mDPS3e;hk5QUe:mDPS3e;Wwt5Kc:mDPS3e;TpIHXe:mDPS3e;EnKPre:eGjA6d;up9WCf:mDPS3e;xj8gtb:mDPS3e;fq58Ob:mDPS3e;IHYwMd:mDPS3e;hENp6e:mDPS3e");
    screenSharingParentStyle.inset = "72px 16px 80px";
    screenSharingParentStyle.width = "auto";
    screenSharingParentStyle.height = "auto";

    let screenSharingStyle = document.querySelector(".dkjMxf").style;
    screenSharingStyle.left = "0";
    screenSharingStyle.top = "0";
    screenSharingStyle.width = "100%";
    screenSharingStyle.height = "100%";

    let bottomBarParent = document.querySelector(".J0M6X.nulMpf.Didmac.G03iKb");

    if(bottomBarParent != null) bottomBarParent.style.marginBottom = "0";

    let bottomBar = document.querySelector(".UnvNgf.Sdwpn.P9KVBf").style;

    bottomBar.transform = "scale(1)";
    bottomBar.background = "rgb(32,33,36)";

    let containerStyle = document.querySelector(".oZRSLe").style;
    containerStyle.width = "100%";
    containerStyle.height = "100%";

    exitFullScreen();
}

function enterFullScreen() {
    if(document.documentElement.requestFullscreen)
        document.documentElement.requestFullscreen();
    else if(document.documentElement.mozRequestFullScreen)
        document.documentElement.mozRequestFullScreen();
    else if(document.documentElement.webkitRequestFullscreen)
        document.documentElement.webkitRequestFullscreen();
    else if(document.documentElement.msRequestFullscreen)
        document.documentElement.msRequestFullscreen();
};
  

function exitFullScreen() {
    if(document.exitFullscreen)
        document.exitFullscreen();
    else if(document.mozExitFullscreen)
        document.mozExitFullscreen();
    else if(document.webkitExitFullscreen)
        document.webkitExitFullscreen();
    else if(document.msExitFullscreen)
        document.msExitFullscreen();
};
  
function zoom(inout) {
    if (isFull) {

        var scrollView = document.querySelector(".koV58.Zi94Db.S7urwe");

        let focus = document.querySelector(".tTdl5d");
        if(focus != null) focus.style.display = "none";

        if(scrollView != null) scrollView.style.overflow = "auto";

        if (inout == 0) { //zoomIn
            zoomValue += 50;
            console.log("ZoomIn");
        } else if (inout == 1) { //zoomOut
            zoomValue -= 50;
            console.log("ZoomOut");
        } else if (inout == 2) {
            if(scrollView != null) scrollView.style.overflow = "hidden";
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
        if (!canFullScreen) {
            alert("No screenshare found!");
            return;
        }

        if (!isFull) {
            isFull = true;
            alert("Soon the screenshare will be in fullscreen and you will be able to zoom, to move you can: use the scrollbars, use the trackpad (use the trackpad with two fingers and you can move in all directions), use mouse and keyboard (wheel to scroll up and down, shift+wheel to scroll right and left)");
            setFullScreen();
        } else {
            setRegularScreen();
            isFull = false;
        }
    
    });
    
    document.querySelector(".zoomInKioBtn").addEventListener("click", () => zoom(0));
    document.querySelector(".zoomOutKioBtn").addEventListener("click", () => zoom(1));
    document.querySelector(".zoomResetKioBtn").addEventListener("click", () => zoom(2));

    setInterval(function () {

        let me = document.querySelector(".axUSnc.cZXVke.P9KVBf");

        if(me != null){
            if (me.childNodes[0].innerHTML.includes("volume_off") && 
                me.childNodes[0].querySelector(".p2hjYe.TPpRNe").dataset.ssrc != "null") {

                let loopOverlay = document.querySelector(".C3LXKe");
                if(loopOverlay != null) loopOverlay.style.display = "none";
                canFullScreen = true;
            } else {
                if(canFullScreen && isFull){
                    setRegularScreen();
                    isFull = false;
                }

                canFullScreen = false;
            }
        }

    
    }, 2000);
}

const searchMeet = setInterval(() => {
    
    if (document.querySelector(".VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.tWDL4c.jh0Tpd.Gt6sbf.QQrMi") && !meetFound) {
        onMeetFound();
    }

}, 700);