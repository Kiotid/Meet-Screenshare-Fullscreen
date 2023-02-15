function setFullScreen() {
    regularScreen = document.querySelector(".T4LgNb").parentElement.innerHTML;
    parentScreen = document.querySelector(".T4LgNb").parentElement;

    try {
        document.querySelector(".aGWPv").remove(); //avatar
    } catch { }

    try {
        document.querySelector(".OGZrkc").remove(); //chi sta condividendo
    } catch { }

    try {
        document.querySelector("J0M6X.ZmuLbd.Didmac.G03iKb").remove(); //chi sta condividendo
    } catch { }

    try {
        document.querySelector(".lefKC").childNodes.forEach(el=>{el.remove()});
        document.querySelector(".lefKC").childNodes.forEach(el=>{el.remove()});
    } catch { }

    try {
		document.querySelector(".aGWPv").style.display = "none";
    } catch { }

    document.querySelector(".axUSnc.cZXVke.P9KVBf").setAttribute("jsaction", "");
    document.querySelector(".axUSnc.cZXVke.P9KVBf").style.inset = "unset"
    document.querySelector(".axUSnc.cZXVke.P9KVBf").style.width = "100%"
    document.querySelector(".axUSnc.cZXVke.P9KVBf").style.height = "100%"

    document.querySelector(".dkjMxf").style.left = "0";
    document.querySelector(".dkjMxf").style.top = "0";
    document.querySelector(".dkjMxf").style.left = "0";
    document.querySelector(".dkjMxf").style.width = "100%";
    document.querySelector(".dkjMxf").style.height = "100%";

    document.querySelector(".Sdwpn.P9KVBf").style.background = "transparent";

    document.querySelector(".oZRSLe").style.width = "100%";
    document.querySelector(".oZRSLe").style.height = "100%";

    enterFullScreen(document.body);
}

function setRegularScreen() {
    exitFullScreen(document.body);
    document.querySelector(".T4LgNb").remove();
    parentScreen.innerHTML = regularScreen;

}

function enterFullScreen() {
    if(!document.documentElement.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
};
  

function exitFullScreen(element) {
    if(document.documentElement.fullscreenElement) {
		document.exitFullscreen();
    }
};
  
function zoom(inout) {
    if (zoomValue !== undefined && zoomValue !== null && isFull) {

        try {
            document.querySelector(".tTdl5d").remove();
        } catch { }

        try {
            document.querySelector(".koV58.Zi94Db.S7urwe").style.overflow = "auto";
        } catch { }

        if (inout == 0) { //zoomIn
            zoomValue += 50;
            console.log("ZoomIn");
        } else if (inout == 1) { //zoomOut
            zoomValue -= 50;
            console.log("ZoomOut");
        } else if (inout == 2) {
            try {
                document.querySelector(".koV58.Zi94Db.S7urwe").style.overflow = "hidden";
            } catch { }
            zoomValue = 2;
            console.log("Reset");
        }

        document.querySelector(".Gv1mTb-aTv5jf").style.height = "calc(100% + " + zoomValue + "px)";
        document.querySelector(".Gv1mTb-aTv5jf").style.width = "calc(100% + " + zoomValue + "px)";
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
    
    document.querySelector('.R5ccN').insertBefore(element, document.querySelector('.R5ccN').childNodes[3]);
    document.querySelector('.R5ccN').insertBefore(zoomin, document.querySelector('.R5ccN').childNodes[4]);
    document.querySelector('.R5ccN').insertBefore(zoomreset, document.querySelector('.R5ccN').childNodes[5]);
    document.querySelector('.R5ccN').insertBefore(zoomout, document.querySelector('.R5ccN').childNodes[6]);
    
    document.querySelector(".fullWidthKio").addEventListener("click", () => {
        if (canFullScreen) {
            if (!isFull) {
                isFull = true;
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

}, 2000);