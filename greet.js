const greeting = document.getElementById('greeting');
const nextBtn = document.getElementById('nextBtn');
const name = localStorage.getItem('userName') || 'Guest';
const place = localStorage.getItem('userPlace') || 'Unknown';


greeting.textContent = `അസ്സലാമു  അലൈകും  ${name}  ${place}!`;

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    const manId = document.getElementById('manId')?.value || '0000';
    document.body.style.opacity = "0";
    setTimeout(() => {
      window.location.href = `top-scorers.html?manId=${manId}`;
    }, 500);
  });
}
