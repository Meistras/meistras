console.log("background is up and running!");

chrome.browserAction.onClicked.addListener(btnclicked);

function btnclicked(tab) {
  console.log(tab);
  let msg = {
  //  txt: "Hello, it's le background"
  txt: "run",
  url: tab.url
  };

  chrome.tabs.sendMessage(tab.id, msg);
}
