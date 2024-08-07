//import { useState, useEffect } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
//import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
   //const [resInfo, setResInfo] = useState(null);

   const {resId} = useParams();

   const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //    const data = await fetch(MENU_API + resId );
  //   //  const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
  //   //  //323532
     
  //   const json = await data.json();  
  //   console.log(json);
  //   setResInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    console.log(itemCards);

    // const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
    // console.log(categories)
    
   // card?.card?.gridElements?.infoWithStyle?.restaurants?.info


//   const { itemCards } =
//     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


  //console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
