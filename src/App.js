import { useState, useEffect } from "react";

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

  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("search") || "React"
  );

  //React Side Effect. that does something outside React Domain. local storage uses the browser api which is not from react
  useEffect(() => {
    console.log(localStorage.setItem("search", searchTerm));
  }, [searchTerm]);

  //callback handler that updates a searchTerm state when typing values
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
      <Search changeOnType={handleChange} search={searchTerm} />
      <ListRender list={filteredStories} />
    </div>
  );
};

// the filtered items you get pick some value in an item you have and populate the ui
const ListRender = ({ list }) =>
  //use a map to create the Item component with a map function that has key.
  //Rest operation occured below (line 47)
  list.map(({ objectID, ...item }) => <Item key={objectID} {...item} />);
//Spread operation occurred above (line 47)
//Item component. Line 54 has properties destructured from the item object
const Item = ({ url, title, author, num_comments, points }) => (
  <div>
    <span>
      <a href={url}> {title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </div>
);

const Search = ({ changeOnType, search }) => {
  return (
    <>
      <label htmlFor="search">Search: </label>
      {/* onChange call the handleChange function that was passed to changeOnType. it tells the 
      callback handler (handleChange to update the UI ). value attribute is assigned to searchTerm
      */}

      <input id="search" type="text" onChange={changeOnType} value={search} />
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

/*
Note
React Side-Effects
Next we’ll add a feature to our Search component in the form of another
React hook. We’ll make the Search component remember the most recent
search interaction, so the application opens it in the browser whenever it
restarts.

The browser should remember the latest search term. 
Using the local storage in React can be seen as a side-effect because we interact outside of React’s domain
by using the browser’s API.
There is one flaw, though. The handler function should mostly be concerned
about updating the state, but now it has a side-effect.

React’s useEffect Hook takes two arguments: The first argument is a
function where the side-effect occurs. In our case, the side-effect is when
the user types the searchTerm into the browser’s local storage. The optional
second argument is a dependency array of variables.

If one of these
variables changes, the function for the side-effect is called. In our case, the
function is called every time the searchTerm changes; and it’s also called
initially when the component renders for the first time.
*/
