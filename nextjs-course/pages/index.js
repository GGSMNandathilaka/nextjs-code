import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../data/data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return <div>{featuredEvents && <EventList events={featuredEvents} />}</div>;
}

export default HomePage;
