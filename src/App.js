import { useState } from "react";
const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  //1.created a function
  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="container">
      <Heading />
      {/* 2. Passed the function as props to Search component with an attribute if consoleOnSearch */}
      <Search consoleOnSearch={handleSearch} />
      <ListRender list={stories} />
    </div>
  );
};

const ListRender = (props) => {
  return props.list.map((item) => {
    <h1>Good</h1>;
    return (
      <div key={item.objectID}>
        <span>
          <a href={item.url}> {item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
    );
  });
};

// 3.passed the attribute as an argument to the Search Component function definition
const Search = ({ consoleOnSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    // 4.Called the attribute consoleOnSearch that points to the handleSearch Function(it was called back when handlChange function gets called onChange on line 63)
    //i believe consoleOnSearch is called the callBack handler
    consoleOnSearch(event);
  };
  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      <hr />
      <p>
        Searching for: <strong>{searchTerm}</strong>
      </p>
    </>
  );
};


const Heading = () => {
  return (
    <>
      <h1>Omotosho Joseph is learning React</h1>
    </>
  );
};

export default App;
