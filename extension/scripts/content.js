const BACKEND_URL = "put_url_here";

async function main() {
  const userId = await getUserId();
  window.addEventListener("click", async (event) => {
    const [x, y] = normalize(event.clientX, event.clientY);
    const timestamp = Date.now();
    await sendToAPI(userId, x, y, timestamp);
  });
}

function normalize(x, y) {
  return [x / window.innerWidth, y / window.innerHeight];
}

async function sendToAPI(userId, x, y, timestamp) {
  const body = {
    userId,
    x,
    y,
    timestamp,
    site: window.location.hostname,
  };
  console.log(body);
  // const response = await fetch(BACKEND_URL, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(body),
  // });
}

async function getUserId() {
  const result = await new Promise((resolve) => {
    chrome.storage.local.get("userId", (data) => {
      resolve(data.userId);
    });
  });

  if (result) return result;

  const newId = crypto.randomUUID();
  await new Promise((resolve) => {
    chrome.storage.local.set({ userId: newId }, resolve);
  });

  return newId;
}

main();
