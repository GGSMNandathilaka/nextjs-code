import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

function HomePage(props) {
  const featuredEvents = props.events;

  return <div>{featuredEvents && <EventList events={featuredEvents} />}</div>;
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: { events: featuredEvents },
  };
}

export default HomePage;
