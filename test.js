const eventForm = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');
const titleInput = document.getElementById('title');
const dateInput = document.getElementById('date');
const descriptionInput = document.getElementById('description');

let events = [];

function renderEvents() {
  eventList.innerHTML = '';
  if (events.length === 0) {
    eventList.innerHTML = '<p>No upcoming events. Add an event to get started!</p>';
    return;
  }
  events.forEach((event, index) => {
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event-item');

    const title = document.createElement('h3');
    title.textContent = event.title;

    const date = document.createElement('p');
    date.textContent = `Date: ${event.date}`;

    const description = document.createElement('p');
    description.textContent = event.description;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => deleteEvent(index));

    eventDiv.appendChild(title);
    eventDiv.appendChild(date);
    eventDiv.appendChild(description);
    eventDiv.appendChild(deleteButton);
    eventList.appendChild(eventDiv);
  });
}

function addEvent(e) {
  e.preventDefault();
  const title = titleInput.value.trim();
  const date = dateInput.value.trim();
  const description = descriptionInput.value.trim();
  if (!title || !date || !description) {
    alert('Please fill in all fields.');
    return;
  }
  const newEvent = { title, date, description };
  events.push(newEvent);
  renderEvents();
  eventForm.reset();
}

function deleteEvent(index) {
  events.splice(index, 1);
  renderEvents();
}

eventForm.addEventListener('submit', addEvent);
renderEvents();
