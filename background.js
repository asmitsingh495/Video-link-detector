const videoExtensions = [
  ".mp4",
  ".m3u8",
  ".webm",
  ".m4v",
  ".mpd"
];

const detectedVideos = {};

function isVideoUrl(url) {
  try {
    const cleanUrl = url.split("?")[0].toLowerCase();
    return videoExtensions.some(ext => cleanUrl.endsWith(ext));
  } catch {
    return false;
  }
}

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (!details.tabId || details.tabId < 0) return;

    if (isVideoUrl(details.url)) {
      if (!detectedVideos[details.tabId]) {
        detectedVideos[details.tabId] = [];
      }

      const exists = detectedVideos[details.tabId].some(
        item => item.url === details.url
      );

      if (!exists) {
        detectedVideos[details.tabId].push({
          url: details.url,
          type: details.url.split("?")[0].split(".").pop().toUpperCase(),
          time: new Date().toLocaleTimeString()
        });
      }
    }
  },
  {
    urls: ["<all_urls>"]
  }
);

chrome.tabs.onRemoved.addListener((tabId) => {
  delete detectedVideos[tabId];
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === "loading") {
    detectedVideos[tabId] = [];
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getVideos") {
    sendResponse(detectedVideos[message.tabId] || []);
  }

  if (message.action === "clearVideos") {
    detectedVideos[message.tabId] = [];
    sendResponse({ success: true });
  }

  return true;
});