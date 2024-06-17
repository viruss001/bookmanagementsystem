import React, { useEffect, useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const [author, setauthor] = useState([]);

  const SeachBook = async () => {
    const data = await fetch(`http://127.0.0.1:8000/searchauthor/${search}`);
    const res = await data.json();
    setauthor(res);
    // console.log(author);
  };
  useEffect(() => {
    if (search !== "") {
      SeachBook();
    }
    if (search === "") {
      setauthor([]);
    }
  }, [search]);
  return (
    <div>
      <div className="searchBox">
        <input
          className="from-control m-3"
          type="text"
          id="search"
          value={search}
          placeholder="enter auhtor name"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {search ? (
        <div
          className="result overflow-y-scroll "
          style={{
            height: "50px",
            width: "200px",
            position: "absolute",
            marginTop: "-15px",
          }}
        >
          <ul style={{ listStyle: "none" }}>
            {author.map((auth, index) => (
              <li
                onClick={(e) => console.log(e.target.innerText)}
                key={index}
                style={{ background: "", border: "2px solid gray" }}
              >
                {auth?.author_name}
              </li>
            ))}

            {/* <li>react</li> */}
          </ul>
        </div>
      ) : (
        ""
      )}
      ;
    </div>
  );
}

export default Search;
