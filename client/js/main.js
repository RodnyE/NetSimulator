/**
 * Primary script
 */

function main () {

    // browser console
    if (typeof eruda !== "undefined") {
        eruda.init();
        eruda.show();
        console.log("Eruda v" + eruda.version);
    }

    // landscape forcer
    forceLandscape.start();
    forceLandscape.onShow(onPortrait);
    forceLandscape.onHide(onLandscape);


    main = null;
}


// Event: Orientation change to portrait
function onPortrait () {
    console.log("orientation:portrait");
}

// Event: Orientation change to landscape
function onLandscape () {
    console.log("orientation:landscape");
}