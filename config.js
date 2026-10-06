const CONFIG = {
  name: "Sample Creator",
  tagline: "Add your email to get free content",
  formAction: "",
  links: [
    { label: "Instagram", url: "https://instagram.com/" },
    { label: "TikTok", url: "https://tiktok.com/" },
    { label: "YouTube", url: "https://youtube.com/" },
    { label: "Website", url: "https://example.com/" }
  ]
};

function track(eventName) {
  try {
    const key = "demo_clicks";
    const data = JSON.parse(localStorage.getItem(key) || "{}");
    data[eventName] = (data[eventName] || 0) + 1;
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {}
  console.log("track:", eventName);
}
