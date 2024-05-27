
const reminders = [
  "Une petite pause pour hydrater le corps peut faire des merveilles. N'oubliez pas de boire un verre d'eau !",
  "Votre corps a besoin d'eau pour fonctionner efficacement. Prenez un moment pour vous hydrater.",
  "Ne laissez pas la déshydratation prendre le dessus. Buvez un peu d'eau maintenant pour rester alerte et en bonne santé.",
  "L'eau est essentielle à la vie. Prenez un instant pour vous rafraîchir avec un verre d'eau.",
  "Une hydratation régulière maintient votre corps en équilibre. Buvez un verre d'eau pour rester en forme et concentré.",
  "N'attendez pas d'avoir soif pour boire de l'eau. Prenez l'habitude de vous hydrater régulièrement.",
  "Votre santé commence par une bonne hydratation. Pensez à boire un peu d'eau maintenant.",
  "La déshydratation peut entraîner une baisse d'énergie. Boostez votre journée en buvant un peu d'eau fraîche.",
  "Votre cerveau a besoin d'eau pour fonctionner correctement. Prenez une pause et buvez un verre d'eau pour rester concentré.",
  "L'eau est le carburant de votre corps. Faites le plein en buvant un verre maintenant !"
];

function getRandomReminder() {
  return reminders[Math.floor(Math.random() * reminders.length)];
}

document.getElementById('reminder').innerText = getRandomReminder();

document.getElementById('dismissButton').addEventListener('click', function() {
  window.close();
});

document.addEventListener('DOMContentLoaded', function() {
  var infoButton = document.getElementById('infoButton');
  infoButton.addEventListener('click', function() {
    window.location.href = 'https://www.cieau.com/leau-et-votre-sante/eau-hydratation-et-hygiene/hydratation/pourquoi-doit-on-boire-de-leau/'; // Remplace 'https://tonsite.com' par l'URL de ton choix
  });
});


var dismissButton = document.getElementById('dismissButton');
  dismissButton.addEventListener('click', function() {
    var progressBar = document.getElementById('progressBar');
    var currentWidth = parseFloat(progressBar.style.width) || 0; 
    if (currentWidth < 100) { 
      progressBar.style.width = (currentWidth + 10) + '%'; 
    }

    var audio = new Audio('IMG\Notif_son.mp3');
    audio.play();
  });
  var progressBar = document.getElementById('progressBar');
  progressBar.style.width = '0%';
