import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Book() {
  useEffect(() => {
    getbook();
  }, []);
  let bookid = useParams().id;
  // let navi = useNavigate();
  //
  const [Bookdata, setBookData] = useState([]);
  const getbook = async () => {
    const data = await fetch(`http://127.0.0.1:8000/getbook/${bookid}`);
    const res = await data.json();
    console.log(res);
    setBookData(res);
  };
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ width: "100vw", height: "50vh" }}
      >
        <div
          className="card m-3 d-flex align-items-center justify-content-center"
          style={{ width: "18rem", height: "20vh" }}
        >
          <div className="card-body align-items-center">
            <h5 className="card-title">
              Book name is{" "}
              <b>
                <u>{Bookdata.book_name?.toUpperCase()}</u>
              </b>
            </h5>
            <p className="card-text">
              Author is <b>{Bookdata.book_author?.author_name}</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
