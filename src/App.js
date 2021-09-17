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
      {/* 2. Passed the function as props to Search component with an attribute of consoleOnSearch */}
      <Search consoleOnSearch={handleSearch} />
      <ListRender list={stories} />
    </div>
  );
};

const ListRender = (props) => {
  return props.list.map((item) => {
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

const Search = ({ consoleOnSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    //remember setSearchTerm function changes the state of searchTerm which is initially an empty string
    setSearchTerm(event.target.value);

    //3. call the handleSearch  function that the "consoleOnSearch variable" points to...this logs what you typed
    //in the input box in line 67

    //here consoleOnSearch is the callback handler i.e. it gets called when handleChange function is called
    consoleOnSearch(event);
  };
  return (
    <>
      <label htmlFor="search">Search: </label>
      {/* handleChange function is called onChange...when typing in the inputBox */}
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
      <h1>Good</h1>
      <h1>Omotosho Joseph is learning React</h1>
    </>
  );
};

export default App;
