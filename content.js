console.log("Made some content changes... :P");

chrome.runtime.onMessage.addListener(rec);

function rec(msg, sender, sendResponse) {
  if(msg.txt == "run") {
    let spl = msg.url.split('/');
    //for(elt of spl) console.log(elt);
    console.log(spl[4]);
    // let par = document.getElementsByTagName('p');
    //
    // for(elt of par) {
    //   elt.style['background-color'] = "green";
    //   elt.style['color'] = "white";
    // }

  }
}
