import React, { useContext, useEffect } from "react";
import Listcomponent from "../component/Listcomponent";
import BookContext from "../context/BookContext";

function BookList() {
  const { Bookdata } = useContext(BookContext);
  useEffect(() => {}, [Bookdata]);

  return (
    <>
      <div className="row  container m-5 ps-5">
        {Bookdata.map((book, index) => (
          <div key={index} className="col-lg-4 ">
            <Listcomponent book={book} />
          </div>
        ))}
      </div>
    </>
  );
}

export default BookList;
