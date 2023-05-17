import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

function ShowQueries() {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const getQueries = async () => {
      const searchesCollectionRef = collection(db, "Searches");
      const data = await getDocs(searchesCollectionRef);
      setQueries(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getQueries();
  }, []);

  //To delete a query and update the components render instanlly
  const handleDeleteClick = async (id) => {
    try {
      const updatedQueries = queries.filter((query) => query.id !== id);
      const queryDoc = doc(db, "Searches", id);
      //Try to delete the query first and then update component
      await deleteDoc(queryDoc);
      setQueries(updatedQueries);
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  return (
    <div className="queries-container">
      {queries.length > 0 ? (
        queries.map((query) => {
          return (
            <div className="query-container" key={query.id}>
              <div className="query-title">
                <h4>City:{query.City}</h4>
              </div>
              <div className="query-details">
                <p>
                  <span>Latitude: </span>
                  {query.Lat}
                </p>
                <p>
                  <span>Longitude: </span>
                  {query.Lng}
                </p>
                <p>
                  <span>Date: </span> {query.DateOfSearch}
                </p>
              </div>
              <button
                className="delete-button"
                onClick={() => handleDeleteClick(query.id)}
              >
                Delete
              </button>
            </div>
          );
        })
      ) : (
        <h2>Please make some queries first!</h2>
      )}
    </div>
  );
}

export default ShowQueries;
