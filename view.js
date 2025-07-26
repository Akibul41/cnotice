import { db, collection, getDocs } from './app.js';

async function loadNotices() {
  const list = document.getElementById('noticeList');
  const querySnapshot = await getDocs(collection(db, 'notices'));
  list.innerHTML = '';
  querySnapshot.forEach(doc => {
    const { title, link, timestamp } = doc.data();
    const isNew = (Date.now() - timestamp < 3 * 24 * 60 * 60 * 1000);
    const div = document.createElement('div');
    div.innerHTML = \`
      <a href="\${link}" target="_blank">\${title}</a>
      \${isNew ? '<span class="new-badge">New</span>' : ''}
    \`;
    list.appendChild(div);
  });
}

loadNotices();