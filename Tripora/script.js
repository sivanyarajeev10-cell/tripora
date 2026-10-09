const form = document.getElementById('bookingForm');
const service = document.getElementById('service');
const destination = document.getElementById('destination');
const message = document.getElementById('message');
const preview = document.getElementById('preview');
const previewText = document.getElementById('previewText');
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('date').min = new Date().toISOString().slice(0, 10);

document.querySelectorAll('[data-destination]').forEach(button => {
  button.addEventListener('click', () => {
    destination.value = button.dataset.destination;
    service.value = 'Custom trip plan';
    document.getElementById('booking').scrollIntoView({behavior:'smooth'});
  });
});
document.querySelectorAll('[data-package]').forEach(button => {
  button.addEventListener('click', () => {
    destination.value = button.dataset.package;
    service.value = 'Holiday package';
    document.getElementById('booking').scrollIntoView({behavior:'smooth'});
  });
});
document.querySelectorAll('[data-service]').forEach(button => {
  button.addEventListener('click', () => {
    service.value = button.dataset.service;
    document.getElementById('booking').scrollIntoView({behavior:'smooth'});
  });
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const details = [
    'TRIPORA BOOKING REQUEST',
    'Name: ' + data.get('name'),
    'Phone: ' + data.get('phone'),
    'Service: ' + data.get('service'),
    'Destination/package: ' + data.get('destination'),
    'Preferred date: ' + data.get('date'),
    'Travellers: ' + data.get('travellers'),
    'Pickup location: ' + (data.get('pickup') || 'Not specified'),
    'Extra details: ' + (data.get('notes') || 'None'),
    '',
    'Please confirm availability and final pricing. This is a request, not a confirmed booking.'
  ].join('\n');
  previewText.textContent = details;
  preview.hidden = false;
  message.textContent = 'Your request details are ready below. This starter version does not send them to you yet; next we will connect a business email or database.';
  preview.open = true;
});
