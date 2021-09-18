import { useState, useEffect } from "react";

//here i am creating a custom hook. always remember to add the prefix "use" when creating a custom hook
const useSemiPersistentState = (key,initialState) => {
  const [value, setValue] = useState(
    localStorage.getItem(key) || initialState
  );

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value,key]);

  return [value , setValue];
};



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
  //calling my custom hook here
  const [searchTerm, setSearchTerm] = useSemiPersistentState("vaue", "React");

  //callback handler that updates a searchTerm state when typing values
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  //filter an array based on a particular state
  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container">
      <Heading />
      {/* line 54:turned the search component into a more resuable component with ability to change properties from outside. 
      Instead of from within comonent declaration */}
      <Search
        id="search"
        label="search:"
        value={searchTerm}
        onInputChange={handleSearch}
      />
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

//passed the props to the Search component
const Search = ({ id, label, value, onInputChange, type = "text" }) => (
  <>
    <label htmlFor={id}>{label} </label>
    &nbsp;
    <input id={id} type={type} onChange={onInputChange} value={value} />
  </>
);
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
