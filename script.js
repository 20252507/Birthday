const captions = [
  "A little glow, a lot of memories ✨",
  "From our childhood days to forever 💗",
  "Tiny moments that became big memories",
  "Growing up, but never growing apart",
  "Two smiles, one lifetime of stories",
  "Some days deserve to be kept forever",
  "A favourite face in every chapter",
  "Sister moments are the best moments",
  "Wherever life takes us, we have these memories",
  "And the memories keep growing…"
];
let currentMemory = 0;
let slideshowTimer = null;
let userPaused = false;
const memoryImage = document.getElementById('memoryImage');
const memoryCaption = document.getElementById('memoryCaption');
const memoryCount = document.getElementById('memoryCount');
const memoryProgress = document.getElementById('memoryProgress');
const memoryPlayer = document.getElementById('gallery');
function showMemory(index) {
  currentMemory = (index + captions.length) % captions.length;
  memoryImage.classList.add('changing');
  window.setTimeout(() => {
    const number = String(currentMemory + 1).padStart(2, '0');
    memoryImage.src = `images/memory-${number}.jpg`;
    memoryImage.alt = `Memory ${currentMemory + 1} of ${captions.length}`;
    memoryCaption.textContent = captions[currentMemory];
    memoryCount.innerHTML = `${number} <i>/</i> ${captions.length}`;
    memoryProgress.style.width = `${((currentMemory + 1) / captions.length) * 100}%`;
    memoryImage.classList.remove('changing');
  }, 250);
}
function startSlideshow() {
  if (slideshowTimer) return;
  slideshowTimer = window.setInterval(() => { if (!userPaused) showMemory(currentMemory + 1); }, 5000);
}
document.getElementById('prevMemory').addEventListener('click', () => { userPaused = true; showMemory(currentMemory - 1); });
document.getElementById('nextMemory').addEventListener('click', () => { userPaused = true; showMemory(currentMemory + 1); });
const memoryObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) startSlideshow();
}, { threshold: 0.25 });
memoryObserver.observe(memoryPlayer);

const music = document.getElementById('birthdayMusic');
const musicToggle = document.getElementById('musicToggle');
function updateMusicButton() {
  const playing = !music.paused;
  musicToggle.classList.toggle('playing', playing);
  musicToggle.innerHTML = playing ? '♫ <span>Music on</span>' : '♫ <span>Music off</span>';
  musicToggle.setAttribute('aria-label', playing ? 'Pause background music' : 'Play background music');
}
async function playMusic() {
  try { await music.play(); } catch (e) { /* Browser may require another tap. */ }
  updateMusicButton();
}
musicToggle.addEventListener('click', async () => {
  if (music.paused) await playMusic(); else music.pause();
  updateMusicButton();
});
document.getElementById('startSurprise').addEventListener('click', () => { playMusic(); });
music.addEventListener('play', updateMusicButton);
music.addEventListener('pause', updateMusicButton);

const openBtn = document.getElementById('openLetter');
const letter = document.getElementById('letterContent');
openBtn.addEventListener('click', () => {
  const isOpen = openBtn.classList.toggle('open');
  letter.hidden = !isOpen;
  openBtn.querySelector('.tap-label').textContent = isOpen ? 'YOUR LETTER IS OPEN ♡' : 'OPEN ME ♡';
  if (isOpen) setTimeout(() => letter.scrollIntoView({ behavior: 'smooth', block: 'start' }), 350);
});
const topBtn = document.getElementById('backTop');
window.addEventListener('scroll', () => topBtn.classList.toggle('visible', window.scrollY > 500));
topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
