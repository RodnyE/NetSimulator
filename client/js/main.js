/**
 * primary script
 */

function main () {
  
  // browser console
  if (typeof eruda !== "undefined") {
    eruda.init();
    eruda.show();
    console.log("Eruda v" + eruda.version);
  }
  

  main = null;
}