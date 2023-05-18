import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import QueryCard from "./QueryCard";

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
    <>
      <h1 className="queries-title">Queries</h1>
      <div className="queries-container">
        {queries.length > 0 ? (
          queries.map((query) => {
            return (
              <QueryCard query={query} handleQueryDelete={handleDeleteClick} />
            );
          })
        ) : (
          <h2 data-aos="fade-up" data-aos-delay="1000">
            Please make some queries!
          </h2>
        )}
      </div>
    </>
  );
}

export default ShowQueries;
