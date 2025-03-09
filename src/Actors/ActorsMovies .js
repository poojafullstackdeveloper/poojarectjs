import React, { Component } from "react";
import "./ActorsMovies.css";

const actors = [
  { name: "Sharukh Khan", 
    image: "https://assets.gqindia.com/photos/5d11abcaeaf24a4c4a54da5d/master/w_1600%2Cc_limit/The%2520Almost%2520Mullet%2520.jpg",
     movies:["My Name is Khan", "Chak de India", "Mohabbatein", "Kuch Kuch Hota Hai", "Baazigar", "Darr","Kal Ho Naa Ho","DDLJ","Devdas","Dil To Pagal Hai"] },

  { name: "Salman Khan", 
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202502/salman-khan-224420134-16x9_0.jpg",
    movies: ["Ek Tha Tiger", "Kuch Kuch Hota Hai", "Judwaa", "Sultan", "Bajrangi Bhaijaan", "Tiger Zinda Hai", "Prem Ratan Dhan Payo", "Bodyguard", "Dabangg", "Race 3"] },

  { name: "Hrithik Roshan", 
    image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2025/01/12/1000110899-3978435011.jpg",
    movies: ["Kaho Naa Pyaar Hai", "Mujhse Dosti Karoge", "Kaabil", "Koi Mil Gaya", "Guzaarish", "Jodhaa Akbar", "Agneepath", "Krrish", "Krrish 3", "Mission Kashmir"] },

  { name: "Ranbir Kapoor", 
    image: "https://img.mensxp.com/media/content/2021/Aug/All-Ranbir-Movies-Where-He-Leaves-A-Wedding1200_612cdcbc82be7.jpeg",
    movies:["Saawariya", "Animal", "Barfi", "Roy", "Besharam", "Anjaana Anjaani", "Wake Up Sid", "Rockstar", "Bachna Ae Haseeno", "Raajneeti"] },

  { name: "Akshay Kumar", 
    image: "https://i.pinimg.com/originals/e7/d3/22/e7d3227bd9c5ebe40ac7dc47c81e2496.jpg",
    movies: ["Hera Pheri", "Housefull", "Welcome", "Bhool Bhulaiyaa", "OMG", "Garam Masala", "Raksha Bandhan", "Ram Setu", "Khiladi", "Kesari"] },
];

class ActorsMovies extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedActor: null };
  }

  selectActor = (actor) => {
    this.setState({ selectedActor: actor });
  };

  closeModal = () => {
    this.setState({ selectedActor: null });
  };

  render() {
    return (
      <div className="main-container">
        <h1>Actors & Their Movies</h1>
        <div className="actor-list">
          {actors.map((actor, index) => (
            <div key={index} className="actor-card" onClick={() => this.selectActor(actor)}>
              <img src={actor.image} alt={actor.name} />
              <h3>{actor.name}</h3>
            </div>
          ))}
        </div>

        {/* Movie List Modal */}
        {this.state.selectedActor && (
          <>
            <div className="modal-overlay" onClick={this.closeModal}></div>
            <div className="movies-list">
              <button className="close-btn" onClick={this.closeModal}>X</button>
              <h2>{this.state.selectedActor.name}'s Top Movies</h2>
              <ul>
                {this.state.selectedActor.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default ActorsMovies;
