import { fetchData } from "@/utl/MongoDB";
import styles from "./page.module.css";

export default async function Home() {
  const data = await fetchData();

  console.log({ data });

  return (
    data &&
    data.length > 0 &&
    data.map((person) => {
      return (
        <div key={person?._id.toString()}>
          {person?.name}
          <div key={person?.events[0]}>
            {person?.events[0]?.eventId}
            <span>{person?.events[0]?.checked}</span>
          </div>
        </div>
      );
    })
  );
}
