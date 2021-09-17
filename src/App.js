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

  const [searchTerm, setSearchTerm] = useState("Redux");

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
      <Search changeOnType={handleChange} search={searchTerm} />
      {/* pass line 30 as a prop to ListRender */}
      <ListRender list={filteredStories} />
    </div>
  );
};

// the filtered items you get pick some value in an item you have and populate the ui
const ListRender = ({ list }) =>
  //use a map to create the Item component with a map function that has key. 
        //Rest operation occured below (line 47)
  list.map(({objectID,...item}) => <Item key={objectID} item={...item} />);
                                                          //Spread operation occurred above (line 47)
//Item component. Line 50 has properties destructured from the item object
const Item = ({url,title,author,num_comments,points}) => (
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
