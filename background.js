chrome.alarms.create("rappel", {
  delayInMinutes: 60,
  periodInMinutes: 60 
});

chrome.alarms.onAlarm.addListener(alarm => {
  if (alarm.name === "rappel") {
    chrome.windows.create({
      url: "popup.html",
      type: "popup",
      width: 800,
      height: 300
    });
  }
});