nextBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const place = placeInput.value.trim();

  // Hidden reset trigger
  if (name.toLowerCase() === 'car' || place.toLowerCase() === 'car') {
    localStorage.clear();
    alert("All data has been reset!");
    window.location.reload();
    return; // stop further execution
  }

  if (name && place) {
    localStorage.setItem('userName', name);
    localStorage.setItem('userPlace', place);
    window.location.href = 'greet.html';
  } else {
    errorMsg.textContent = "ദയവായി നിങ്ങളുടെ പേരും സ്ഥലവും നൽകുക.";
  }
});
