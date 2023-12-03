//Main extension  
chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
  handleNavigation(details.tabId, details.url);
});

chrome.webNavigation.onCompleted.addListener(function (details) {
  handleNavigation(details.tabId, details.url);
});

function handleNavigation(tabId, url) {
  if (url.includes("/?bp")) {
    const newUrl = url.replace(/\/\?bp.*/, "");
    chrome.tabs.update(tabId, { url: newUrl });
  }
}
  