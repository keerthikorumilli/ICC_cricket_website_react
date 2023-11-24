import React from "react";
import "./Cards.css";
import cricket1 from "../../assests/cricket1.jpg";
import cricket2 from "../../assests/cricket2.jpeg";
import cricket3 from "../../assests/cricket3.jpeg";
import cricket4 from "../../assests/cricket4.jpeg";
import cricket5 from "../../assests/cricket5.jpeg";
import cricket6 from "../../assests/cricket6.jpeg";
import cricket7 from "../../assests/cricket7.jpg";

const MainCard = () => (
  <div id="home" className="main-card">
    <div className="main-card-image">
      <img src={cricket1} alt="ICC Men's World Cup 2011" />
    </div>
    <div className="main-card-content">
      <h2 className="heading">ICC Men's World Cup 2011</h2>
      <p>
        The ICC Men's World Cup 2011 was the tenth Cricket World Cup.
        India won the tournament, defeating Sri Lanka by six wickets in the final
        at Wankhede Stadium in Mumbai. It was India's second World Cup victory.
        The victorious moment by Dhoni hitting a six remains an iconic moment in
        cricket history.
      </p>
    </div>
  </div>
);

const SubCard = ({ imageSrc, title, description, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="sub-card">
    <img src={imageSrc} alt={title + " Image"} />
    <div className="sub-card-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </a>
);

const Cards = () => (
  <div className="card-container">
    <MainCard />

    <h2 id="my-work" className="heading">Hall of Fame - ICC</h2>
    <div className="sub-card-container">
      <SubCard
        imageSrc={cricket2}
        title="India's first stint '83"
        description="The 1983 Cricket World Cup marked India's first-ever World Cup triumph.
        The Kapil Dev-led Indian team won the tournament, defeating the West Indies
        in the final at Lord's."
        link="https://example.com/indias-first-stint-83"
      />
      <SubCard
        imageSrc={cricket3}
        title="Dhoni finishes off in style @2011"
        description="In the 2011 World Cup final, MS Dhoni's iconic six to finish the match
        against Sri Lanka is remembered as an indelible moment in cricket history.
        Dhoni's unbeaten 91* guided India to victory."
        link="https://example.com/dhoni-finishes-off-2011"
      />
      <SubCard
        imageSrc={cricket4}
        title="India in dream run"
        description="Throughout the tournament, India showcased exceptional performances.
        Players like Sachin Tendulkar, Yuvraj Singh, and Zaheer Khan played pivotal roles,
        contributing significantly to India's success."
        link="https://example.com/india-dream-run"
      />
      <SubCard
        imageSrc={cricket5}
        title="Behind the scenes - India"
        description="The journey to victory was a blend of hard work, determination,
        and perseverance. The behind-the-scenes footage showcased the team's camaraderie,
        strategy sessions, and intense preparation."
        link="https://example.com/behind-scenes-india"
      />
      <SubCard
        imageSrc={cricket6}
        title="Software jobs in/at ICC"
        description="The ICC Cricket World Cup 2011 was a spectacular event, not only for cricket enthusiasts
        but also for the technological advancements showcased in managing such a large-scale tournament."
        link="https://example.com/software-jobs-icc"
      />
      <SubCard
        imageSrc={cricket7}
        title="Memorable Cricket Moments"
        description="Relive the unforgettable cricket moments that shaped history."
        link="https://example.com/memorable-cricket-moments"
      />

    </div>
  </div>
);

export default Cards;