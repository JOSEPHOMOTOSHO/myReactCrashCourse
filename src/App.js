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

  //callback handler that updates a state with typing value
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //filter an array based on a particular state
  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container">
      <Heading />
      <Search changeOnType={handleChange} />
      {/* pass line 30 as a prop to ListRender */}
      <ListRender list={filteredStories} />
    </div>
  );
};

// the filtered items you get pick some value in an item you have and populate the ui
const ListRender = ({ list }) => {
  return list.map((item) => {
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

const Search = ({ changeOnType }) => {
  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={changeOnType} />
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
