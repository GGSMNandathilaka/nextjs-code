import EventCard from "../events/event-card";
import classes from "./event-list.module.css";

function EventList({ events }) {
  return (
    <ul className={classes.list}>
      {events &&
        events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            image={event.image}
            date={event.date}
            location={event.location}
            id={event.id}
          />
        ))}
    </ul>
  );
}

export default EventList;
