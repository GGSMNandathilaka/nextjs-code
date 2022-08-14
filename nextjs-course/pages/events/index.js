import { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../data/data";

function AllEventsPage() {
  const router = useRouter();
  const allEvents = getAllEvents();

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
export default AllEventsPage;