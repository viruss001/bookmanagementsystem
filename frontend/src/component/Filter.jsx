import React, { useContext, useEffect, useState } from "react";
import BookContext from "../context/BookContext";
function Filter() {
  const { setBookData } = useContext(BookContext);
  useEffect(() => {
    getAuthorName();
  }, []);
  // const navi = useNavigate();
  const [author, setauthor] = useState([]);
  const [authorname, setauthorname] = useState("");

  const getAuthorName = async () => {
    const data = await fetch(`http://127.0.0.1:8000/getauthor`);
    const res = await data.json();
    //console.log(res);

    setauthor(res);
  };
  const getBooksbyauthor = async () => {
    const data = await fetch(`http://127.0.0.1:8000/getauthor/${authorname}`);
    const res = await data.json();
    console.log(res);
    setBookData(res);
  };
  // when authorname is null then it not run
  useEffect(() => {
    if (authorname !== "") {
      getBooksbyauthor();
    }
  }, [authorname]);

  // console.log(authorname);
  return (
    <div className="d-flex ">
      <select
        className="from-control m-3"
        onChange={(event) => {
          setauthorname(event.target.value);
        }}
      >
        <option value="Choice">Author name</option>
        {author.map((opt, index) => (
          <option
            value={opt.author_name}
            key={index}
            // onClick={() => {
            //   console.log(authorname);
            // }}
          >
            {opt.author_name}
          </option>
        ))}
      </select>
      {/* <button >submit</button> */}
    </div>
  );
}

export default Filter;

/* <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle text-uppercase"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          //
        >
          Author
        </button>
        <ul className="dropdown-menu" onClick={handle}>
          {author.map((auth, index) => (
            <li key={index}>
              <div className="dropdown-item text-uppercase fw-bold  ">
                {auth.author_name}
              </div>
            </li>
          ))}
        </ul>
       </div>*/
