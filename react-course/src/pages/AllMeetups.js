import { useEffect } from "react";
import { useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  // no external dependencies present
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-b7c26-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          meetups.push({ id: key, ...data[key] });
        }

        setIsLoading(false);
        setLoadedData(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedData} />
    </section>
  );
}

export default AllMeetupsPage;
