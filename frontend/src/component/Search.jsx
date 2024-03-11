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
          type="text"
          id="search"
          value={search}
          placeholder="enter auhtor name"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="result">
        <ul>
          {author.map((auth, index) => (
            <li key={index}>{auth.author_name}</li>
          ))}

          {/* <li>react</li> */}
        </ul>
      </div>
    </div>
  );
}

export default Search;
