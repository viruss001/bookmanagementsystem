import React, { useEffect, useState } from "react";

function Filter() {
  useEffect(() => {
    getbook();
  }, []);

  const [author, setauthor] = useState([]);
  const [authorname, setauthorname] = useState("");

  const getbook = async () => {
    const data = await fetch(`http://127.0.0.1:8000/getauthor`);
    const res = await data.json();
    //console.log(res);

    setauthor(res);
  };
  const getauthor = async () => {
    const data = await fetch(`http://127.0.0.1:8000/getauthor/${authorname}`);
    const res = await data.json();
    console.log(res);
  };

  const handle = (event) => {
    setauthorname(event.target.value);
    // console.log("1");
    console.log(authorname);
  };
  const handleMouse = () => {
    console.log("2");
  };

  return (
    <div className="d-flex ">
      <select className="from-control m-3" onChange={handle}>
        <option value="Choice">Choice</option>
        {author.map((opt, index) => (
          <option value={opt.author_name} key={index}>
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
