

import React from 'react';
import './Dashboard.css';

function Dashboard() {
    const headings = [
        "Victory of India in the 2011 ICC Men's Cricket World Cup",
        "Memorable Moments and Enthusiastic Support",
        "Let's know more about cricket equipment",
        "Want to drive into the world of 2011 ICC Men's Cricket World Cup. Just click the below link"
    ];

    const paragraphs = [
        "The 2011 ICC Men's Cricket World Cup was a momentous tournament culminating in India's victory. The final match, held at the Wankhede Stadium in Mumbai, witnessed an intense clash between India and Sri Lanka. Under the leadership of MS Dhoni, India emerged victorious, marking their second World Cup win after 1983. A stellar performance by Gautam Gambhir and MS Dhoni in the crucial moments of the final match sealed India's triumph, bringing immense joy to the nation. The 2011 Indian cricket team displayed exceptional skills and resilience throughout the tournament. Led by experienced players like Sachin Tendulkar, Virender Sehwag, and Zaheer Khan, the team showcased a perfect blend of youth and experience. Their batting prowess, coupled with the spin wizardry of Yuvraj Singh and Harbhajan Singh, played a pivotal role in securing victories. Notably, their ability to handle pressure situations and deliver exceptional performances in critical matches set them apart as a formidable force in the tournament.",
        
        "The trophy receiving moment at the 2011 ICC Men's Cricket World Cup stands etched in history as a culmination of unparalleled emotions and pride. As MS Dhoni, the captain of the Indian cricket team, lifted the glittering trophy amidst an ecstatic crowd at the Wankhede Stadium, Mumbai, a surge of jubilation swept across the nation. With fireworks painting the sky and the deafening cheers of fans echoing through the stadium, the sheer elation portrayed the essence of a victorious journey, eternally etched as an indelible chapter in the annals of cricketing history. The 2011 ICC Men's Cricket World Cup was a spectacle filled with memorable moments and overwhelming support from cricket enthusiasts worldwide. Sachin Tendulkar's century against South Africa, Yuvraj Singh's all-around performances, and the electrifying atmosphere during the matches created unforgettable experiences. The enthusiastic responses from the audience, the roaring cheers, and the emotional connections forged during the tournament showcased the unifying power of cricket, leaving a lasting impact on fans globally.",
        
        "Cricket is a team sport played between two teams of eleven players on a field at the center of which is a 22-yard (20-meter) pitch with a wicket at each end, each comprising two bails balanced on three stumps two-line summary of the cricket field positions: The bowler throws the ball, the batsman hits it, and the fielders try to catch it or prevent the batsmen from scoring runs. Cricket unites diverse cultures, transcends boundaries, and creates an emotional connection among fans, showcasing the sport's unifying and influential nature. Cricket stadiums feature expansive fields, providing an arena for thrilling matches and unforgettable moments"
    ];

    const images = [
        'https://tse3.mm.bing.net/th?id=OIP.tY3NDP_j5mPEt15uh_oJhgHaDq&pid=Api&P=0&h=180',
        'https://tse2.mm.bing.net/th?id=OIP.5hXUxp9oOvHFEdTkA96ujwAAAA&pid=Api&P=0&h=180',
        'https://tse2.mm.bing.net/th?id=OIP.QQn18TQIGCH4Csmg9xNEhwHaFv&pid=Api&P=0&h=180',
        'https://tse2.mm.bing.net/th?id=OIP.rGHO_EKHMUPtyL3X4MSVkwHaEV&pid=Api&P=0&h=180',
        'https://tse2.mm.bing.net/th?id=OIP.tFyyo2EXyWgrnCXzbPpmHgHaHT&pid=Api&P=0&h=180',
        'https://tse2.mm.bing.net/th?id=OIP.f3GJkZSG7MjCujz-u7gIawHaGG&pid=Api&P=0&h=180',
        'https://tse3.mm.bing.net/th?id=OIP.grmeRTtX70nNKdkdmz3hXQHaE7&pid=Api&P=0&h=180',
    ];

    const wikipediaLink = "https://en.wikipedia.org/wiki/2011_Cricket_World_Cup";

    return (
        <div className="dashboard">
            <div className="headings">
                <div>
                    <h2>{headings[0]}</h2>
                    <p>{paragraphs[0]}</p>
                    <div className="image-container">
                        <img src={images[0]} alt="Indian Cricket Team during 2011 World Cup" />
                        <img src={images[1]} alt="Indian Cricket Team during 2011 World Cup" />
                    </div>
                </div>
                <div>
                    <h2>{headings[1]}</h2>
                    <p>{paragraphs[1]}</p>
                    <div className="image-container">
                        <img src={images[2]} alt="Indian Cricket Team during 2011 World Cup" />
                        <img src={images[3]} alt="Indian Cricket Team during 2011 World Cup" />
                    </div>
                </div>
                <div>
                    <h2>{headings[2]}</h2>
                    <p>{paragraphs[2]}</p>
                    <div className="image-container">
                        <img src={images[4]} alt="Indian Cricket Team during 2011 World Cup" />
                        <img src={images[5]} alt="Indian Cricket Team during 2011 World Cup" />
                        <img src={images[6]} alt="Indian Cricket Team during 2011 World Cup" />
                    </div>
                </div>
                <div>
                    <h2>{headings[3]}</h2>
                    <p>
                        <a href={wikipediaLink} target="_blank" rel="noopener noreferrer">
                            Click here to explore the victory of India in the 2011 ICC Men's Cricket World Cup on Wikipedia!
                        </a>
                    </p>
                </div>
            </div>

            <div className="logos-container">
                <a href="https://www.google.com" target="_blank" rel="noreferrer">
                    <img
                        src="https://tse4.mm.bing.net/th?id=OIP.M45DMMHUpEwPeAsh9isdyAHaHa&pid=Api&P=0&h=180"
                        alt="Google Logo"
                    />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <img
                        src="https://tse1.mm.bing.net/th?id=OIP.-ZirgQE5pr8e7htQWowJIgHaHa&pid=Api&P=0&h=180"
                        alt="Instagram Logo"
                    />
                </a>
            </div>
        </div>
    );
}

export default Dashboard;
