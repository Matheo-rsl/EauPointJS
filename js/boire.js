function scheduleNextPopup() {
  const minTime = 60 * 60 * 1000; // 1 heure en millisecondes
  const maxTime = 90 * 60 * 1000; // 1,5 heure en millisecondes
  const randomTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;

  chrome.alarms.create('drinkWaterAlarm', { delayInMinutes: randomTime / 60000 });
}

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'drinkWaterAlarm') {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icons/icon48.png',
      title: 'Rappel de Boire de l\'Eau',
      message: 'C\'est l\'heure de boire de l\'eau!',
      priority: 2
    });
    scheduleNextPopup(); // Planifiez la prochaine alarme
  }
});

// Planifiez la première alarme au démarrage
chrome.runtime.onInstalled.addListener(() => {
  scheduleNextPopup();
});