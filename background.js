//to tell extension of is this youtube page or not ...
chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("youtube.com/watch")) {   // checking tab url is similar to youtube url or not
    const queryParameters = tab.url.split("?")[1];     //spliting tab url after question mark?  
    const urlParameters = new URLSearchParams(queryParameters);

    chrome.tabs.sendMessage(tabId, {    // sending link to extension of youtube video
      type: "NEW",
      videoId: urlParameters.get("v"),
    });
  }
});
