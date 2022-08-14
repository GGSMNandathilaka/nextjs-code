import { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../helpers/api-util";

function AllEventsPage(props) {
  const router = useRouter();
  const { allEvents } = props;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    // load the slug path
    router.push(fullPath);
  }

  return (
    <div>
      {allEvents && (
        <Fragment>
          <EventsSearch onSearch={findEventsHandler}></EventsSearch>
          <EventList events={allEvents}></EventList>
        </Fragment>
      )}
    </div>
  );
}

<EventsSearch></EventsSearch>;

export async function getStaticProps() {
  const allEvents = await getAllEvents();

  return {
    props: {
      allEvents: allEvents,
    },
    revalidate: 60,
  };
}
export default AllEventsPage;
