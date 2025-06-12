import { useState } from "react";
import Card from "./Card";

function App() {
  const [state, setState] = useState([
    {
      title: "Sabali",
      rating: 4,
      sourse: "https://b.zmtcdn.com/data/pictures/0/19935830/52003ba315b321e5df677fd231ba343b_featured_v2.jpg?output-format=webp",
    },
    {
      title: "Chai Sutta",
      rating: 3,
      sourse: "https://b.zmtcdn.com/data/pictures/0/20054090/4f048ae61047d84220f845e3e5c8229d_featured_v2.jpg",
    },
    {
      title: "Kuch BHi",
      rating: 5,
      sourse: "https://b.zmtcdn.com/data/pictures/0/20054090/4f048ae61047d84220f845e3e5c8229d_featured_v2.jpg",
    },
     {
      title: "Kuch BHi",
      rating: 5,
      sourse: "https://b.zmtcdn.com/data/pictures/0/20054090/4f048ae61047d84220f845e3e5c8229d_featured_v2.jpg",
    } ,{
      title: "Kuch BHi",
      rating: 5,
      sourse: "https://b.zmtcdn.com/data/pictures/0/20054090/4f048ae61047d84220f845e3e5c8229d_featured_v2.jpg",
    }
  ]);

  const display = state.map(
    (data, index) => {
      return <Card title={data.title} rating={data.rating} sourse={data.sourse} />
    }
  )



  return (
    <div className="container-xxl px-0">
      <div className="row gy-4">
        {display}
      </div>
    </div>

  )
}

export default App;
