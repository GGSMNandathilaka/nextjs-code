export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-course-790d7-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const events = [];

  for (let key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const events = await getAllEvents();
  return events.filter((e) => e.isFeatured);
}

export async function getEventById(id) {
  const events = await getAllEvents();
  return events.find((event) => event.id === id);
}
