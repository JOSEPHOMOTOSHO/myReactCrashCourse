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

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="container">
      <Heading />
      <Label searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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

const Label = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
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
