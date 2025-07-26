import { auth, signOut, db, collection, addDoc } from './app.js';

document.getElementById('logoutBtn').addEventListener('click', () => {
  signOut(auth).then(() => window.location.href = 'login.html');
});

document.getElementById('noticeForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const link = document.getElementById('link').value;

  try {
    await addDoc(collection(db, 'notices'), {
      title,
      link,
      timestamp: Date.now()
    });
    alert('Notice added!');
    document.getElementById('noticeForm').reset();
  } catch (error) {
    alert("Failed to add notice: " + error.message);
  }
});