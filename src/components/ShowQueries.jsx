import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function ShowQueries() {
  const [queries, setQueries] = useState([]);
  const searchesCollectionRef = collection(db, "Searches");

  useEffect(() => {
    const getQueries = async () => {
      const data = await getDocs(searchesCollectionRef);
      setQueries(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getQueries();
  }, [searchesCollectionRef]);

  return (
    <div className="queries-container">
      {queries.map((query) => {
        return (
          <div className="query-container" key={query.id}>
            <p>Latitude: {query.Lat}</p>
            <p>Longitude:{query.Lng}</p>
            <p>City:{query.City}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ShowQueries;
