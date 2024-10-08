self.addEventListener('push', (e) => {
  const data = e.data.json();
  const options = {
    body: data.body,
    icon: 'icon.png',
    badge: 'badge.png',
  };
  e.waitUntil(self.registration.showNotification(data.title, options));
});
