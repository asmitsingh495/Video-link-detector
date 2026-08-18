const videoList = document.getElementById("videoList");
const status = document.getElementById("status");

let currentTabId = null;

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function renderVideos(videos) {
  videoList.innerHTML = "";

  if (!videos.length) {
    status.textContent = "No direct video links detected yet.";
    return;
  }

  status.textContent = `${videos.length} video link(s) found`;

  videos.forEach((video) => {
    const item = document.createElement("div");
    item.className = "video-item";

    const url = document.createElement("div");
    url.className = "url";
    url.textContent = video.url;

    const info = document.createElement("div");
    info.className = "info";
    info.textContent = `Type: ${video.type}`;

    const copyBtn = document.createElement("button");
    copyBtn.textContent = "📋 Copy Link";

    copyBtn.addEventListener("click", async () => {
      await navigator.clipboard.writeText(video.url);
      copyBtn.textContent = "✓ Copied";

      setTimeout(() => {
        copyBtn.textContent = "📋 Copy Link";
      }, 1500);
    });

    item.appendChild(info);
    item.appendChild(url);
    item.appendChild(copyBtn);

    videoList.appendChild(item);
  });
}

async function loadVideos() {
  const tabs = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });

  if (!tabs.length) return;

  currentTabId = tabs[0].id;

  chrome.runtime.sendMessage(
    {
      action: "getVideos",
      tabId: currentTabId
    },
    (videos) => {
      if (chrome.runtime.lastError) {
        status.textContent = "Could not retrieve video links.";
        return;
      }

      renderVideos(videos || []);
    }
  );
}


loadVideos();