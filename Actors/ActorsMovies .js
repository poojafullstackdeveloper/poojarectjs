import React, { Component } from "react";
import "./ActorsMovies.css";

const actors = [
  { name: "Sharukh Khan.", 
    image: "https://assets.gqindia.com/photos/5d11abcaeaf24a4c4a54da5d/master/w_1600%2Cc_limit/The%2520Almost%2520Mullet%2520.jpg",
     movies:["1.My Name is Khan", "2.Chak de India", "3.Mohabate", "4.Kuch Kuch Hota hai", "5.Baazigre", "6.Darr","7.Kal Hona Ho","8.DDLJ","9.Devdas","10.Dil To Pagal Hai"] },

  { name: "Salman Khan", image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202502/salman-khan-224420134-16x9_0.jpg?VersionId=oFEgGkkYeJRCUNMy7GiCFcMee9ejUdIA&size=690:388", 
    movies: ["1.Ek Tha Tiger","2.Kuch Kuch Hota Hai","3.Judwa","4.Sultan","5.Bajrangi Bhaijan","6.Tiger Zinda Hai","7.Prem Ratan Dhan Payo","8.BodyGaurd","9.Dabangg","10.Race3"] },
  { name: "Ritik Roshan", image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2025/01/12/1000110899-3978435011.jpg", 
    movies: ["1.Kahona Pyar Hai", "2.Mujhe se Dosti Karoge","3.Kabil","4.Koi Mil Gaya","5.Gujarish","6.Jodha Akbar","7.Aganipath","8.Krish","9.Krish 3","10.Mission Kashmir"] },
  { name: "Ranbir Kapoor", image:"https://img.mensxp.com/media/content/2021/Aug/All-Ranbir-Movies-Where-He-Leaves-A-Wedding1200_612cdcbc82be7.jpeg",
    movies:["1.Sawariya","2.Animal","3.Barfi","4.Roy","5.Beshram","6.Annjana Anjani","7.Wake Up Sid","8.Rockstar","9.Bachna Hai Hasino","10.Rajeneeti"] },
  { name: "Akshay Kumar", image: "https://i.pinimg.com/originals/e7/d3/22/e7d3227bd9c5ebe40ac7dc47c81e2496.jpg", 
    movies: ["1.Hera Pheri","2.Housefull","3.Welcome","4.Bhul Bhuliya","5.OMG","6.Garam Masala","7.Raksha bandhan","8.Ram Setu","9.Khiladi","10.Kesri"] },
];

class ActorsMovies extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedActor: null };
  }

  selectActor = (actor) => {
    this.setState({ selectedActor: actor });
  };

  render() {
    return (
      <div className="main-container">
        <h1>Actors Movies</h1>
        <div className="actor-list">
          {actors.map((actor, index) => (
            <div key={index} className="actor-card" onClick={() => this.selectActor(actor)}>
              <img src={actor.image} alt={actor.name} />
              <h3>{actor.name}</h3>
            </div>
          ))}
        </div>
        {this.state.selectedActor && (
          <div className="movies-list">
            <h2>{this.state.selectedActor.name}'s Best Movies</h2>
            <ul>
              {this.state.selectedActor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default ActorsMovies;
