// script.ts
const pythonButton = document.getElementById('math') as HTMLButtonElement;
const scienceButton = document.getElementById('science') as HTMLButtonElement;
const historyButton = document.getElementById('history') as HTMLButtonElement;
const contentDiv = document.getElementById('content') as HTMLDivElement;

pythonButton.addEventListener('click', () => {
    contentDiv.innerHTML = '<h2>Math Content</h2><p>Math content goes here.</p>';
});

scienceButton.addEventListener('click', () => {
    contentDiv.innerHTML = '<h2>Science Content</h2><p>Science content goes here.</p>';
});

historyButton.addEventListener('click', () => {
    contentDiv.innerHTML = '<h2>History Content</h2><p>History content goes here.</p>';
});