let Params = getSyncScriptParams(document.currentScript);

function getSyncScriptParams(scriptName) {
  return {
    scriptRef: scriptName,
    rounded: Boolean(scriptName.getAttribute("data-rounded") || true),
    limit: Number(scriptName.getAttribute("data-limit") || 20),
  };
}

function GetGameName(liveData) {
  let title = "";
  try {
    title = liveData.thumbnailPreviewRenderer.title.runs[0].text;
  } catch {
    return "";
  }

  if (title.includes("Youtube Hidden Stream")) return "";

  let matches = title.split("[");
  let matches2 = title.split("【");
  let result = title;
  if (matches.length > 1 && matches[1]) {
    result = matches[1];
  } else if (matches2.length > 1 && matches2[1]) {
    result = matches2[1];
  }

  matches = result.split("]");
  matches2 = result.split("】");
  if (matches.length > 1 && matches[0]) {
    result = matches[0];
  } else if (matches2.length > 1 && matches2[0]) {
    result = matches2[0];
  }

  return result
    .replace("🔴", "")
    .replace("]", "")
    .replace("】", "")
    .replace("[", "")
    .replace("【", "");
}

// AFTER LOAD
window.onload = () => {
  let url = location.href;

  const init = () => {
    let talentDIV = document.getElementById("live-talents");
    if (talentDIV && !talentDIV.getAttribute("init")) load(talentDIV);
  };

  setInterval(() => {
    init();
  }, 1000 * 5);
  init();

  document.body.addEventListener(
    "click",
    () => {
      requestAnimationFrame(() => {
        if (url !== location.href) {
          init();
          url = location.href;
        }
      });
    },
    true
  );
};

function load(liveTalentsDiv) {
  Params = getSyncScriptParams(Params.scriptRef);
  let apiDiv = liveTalentsDiv;
  let limitCounter = 0;
  apiDiv.setAttribute("init", true);

  if (!apiDiv) {
    console.log("Please create a div with #live-talents.");
    return;
  }

  fetch(`https://api.kawaentertainment.com/youtube/talent`, { method: "GET" })
    .then(async (response) => {
      let json = await response.json();

      json.forEach((x) => {
        if (!x) return;
        if (limitCounter >= Params.limit) return;
        let hasLive = Object.keys(x.live).length > 0;
        // is live currently
        if (hasLive && x.live.live) {
          // ensure we can get the VideoID
          let videoID = undefined;
          try {
            videoID =
              x.live.data.thumbnailPreviewRenderer.playButton.buttonRenderer
                .navigationEndpoint.watchEndpoint.videoId;
          } catch {
            console.log("thumbnail not found");
          }
          if (!videoID) return;

          // create elements
          var tag = document.createElement("a");
          var textWrapper = document.createElement("div");
          var bg = document.createElement("div");
          textWrapper.className = "text";
          tag.className = `live-talent-button ${
            Params.rounded ? "round" : "square"
          }`;
          tag.target = "_blank";
          tag.href = `https://www.youtube.com/watch?v=${videoID}`;

          bg.style = `background-image: url("https://i.ytimg.com/vi/${videoID}/maxresdefault_live.jpg");"`;
          bg.className = "bg";

          var title = document.createElement("div");
          title.className = "title";
          var row = document.createElement("div");
          row.className = "row";
          var platform = document.createElement("div");
          platform.className = "platform youtube";
          platform.innerHTML = `<svg data-v-3204d134="" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 613 424" class=""><path data-v-3204d134="" fill-rule="nonzero" d="M319.92 423.279l-125.7-2.3c-40.7-.8-81.5.8-121.4-7.5-60.7-12.4-65-73.2-69.5-124.2-6.2-71.7-3.8-144.7 7.9-215.8 6.6-39.9 32.6-63.7 72.8-66.3 135.7-9.4 272.3-8.3 407.7-3.9 14.3.4 28.7 2.6 42.8 5.1 69.6 12.2 71.3 81.1 75.8 139.1 4.5 58.6 2.6 117.5-6 175.7-6.9 48.2-20.1 88.6-75.8 92.5-69.8 5.1-138 9.2-208 7.9 0-.3-.4-.3-.6-.3zm-73.9-122c52.6-30.2 104.2-59.9 156.5-89.9-52.7-30.2-104.2-59.9-156.5-89.9v179.8z"></path></svg>`;
          var gameTitle = document.createElement("div");
          gameTitle.className = "game-title";
          gameTitle.innerText = GetGameName(x.live.data);

          try {
            pfp.src = x.data.data.snippet.thumbnails.default.url;
          } catch {
            console.log("thumbnail not found");
          }

          row.innerText = "Watch Live";
          row.appendChild(platform);

          title.appendChild(row);
          title.appendChild(gameTitle);

          var pfp = document.createElement("img");
          pfp.className = "pfp";
          try {
            pfp.src = x.data.data.snippet.thumbnails.default.url;
          } catch {
            console.log("thumbnail not found");
          }

          tag.appendChild(bg);
          tag.appendChild(pfp);
          tag.appendChild(title);
          apiDiv.appendChild(tag);
          limitCounter++;
        }
      });
    })
    .catch((err) => {
      console.log(err);
      apiDiv.style.display = "none";
    });

  // TWITCH
  fetch(`https://api.kawaentertainment.com/twitch/talent`, { method: "GET" })
    .then(async (response) => {
      let json = await response.json();

      json.forEach((x) => {
        if (!x) return;
        if (limitCounter >= Params.limit) return;
        let hasLive = Object.keys(x.data.live).length > 0;
        // is live currently
        if (hasLive && x.data.live.title) {
          // create elements
          var tag = document.createElement("a");
          var textWrapper = document.createElement("div");
          var bg = document.createElement("div");
          textWrapper.className = "text";
          tag.className = `live-talent-button ${
            Params.rounded ? "round" : "square"
          }`;
          tag.target = "_blank";
          tag.href = `https://www.twitch.tv/${x.username}`;

          bg.className = "bg";
          bg.style = `background-image: url("${x.data.live.thumbnail}");"`;

          var title = document.createElement("div");
          title.className = "title";
          var row = document.createElement("div");
          row.className = "row";
          var platform = document.createElement("div");
          platform.className = "platform twitch";
          platform.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.265 3 3 6.236v13.223h4.502V21l2.531.85 2.392-2.391h3.658l4.923-4.924V3H4.265zm15.052 10.691-2.813 2.814h-4.502l-2.391 2.391v-2.391H5.813V4.688h13.504v9.003zm-2.812-5.767v4.923h-1.688V7.924h1.688zm-4.502 0v4.923h-1.688V7.924h1.688z" /></svg>`;
          var gameTitle = document.createElement("div");
          gameTitle.className = "game-title";
          gameTitle.innerText = x.data.live.game;

          row.innerText = "Watch Live";
          row.appendChild(platform);

          title.appendChild(row);
          title.appendChild(gameTitle);

          var pfp = document.createElement("img");
          pfp.className = "pfp";
          try {
            pfp.src = x.data.data.pfp;
          } catch {
            console.log("thumbnail not found");
          }

          tag.appendChild(bg);
          tag.appendChild(pfp);
          tag.appendChild(title);
          apiDiv.appendChild(tag);
          limitCounter++;
        }
      });
    })
    .catch((err) => {
      console.log(err);
      apiDiv.style.display = "none";
    });
}
