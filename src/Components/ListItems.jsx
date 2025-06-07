import React from "react";

const ListItems = () => {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer programming",
    "Reverberation",
    "Movie musicals",
    "India national cricket team",
    "News",
    "Mixes",
    "1990s",
    "Telugu cinema",
    "Live",
    "Dramedy",
    "Dubbing",
    "Indian soap opera",
    "Cricket",
    "Football",
    "Learn Coding",
  ];

  return(
   <div className="flex overflow-x-scroll hide-scroll-bar px-4">
    <div className="flex space-x-4 flex-nowrap">
        {
        categories.map((category) => {
          return (
            <div key={category} className="flex-none mb-2 bg-gray-100 py-1 px-3 
            hover:bg-gray-200 duration-300 rounded-xl font-medium cursur-pointer ">
              {category}
            </div>
          );
        })
    }
    </div>
    
  </div>
  )
};

export default ListItems;
