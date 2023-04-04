import duckAbout from '../images/duckduckhunt-about.png';
import duckHome from '../images/duckduckhunt-home.png';
import duckHome2 from '../images/duckduckhunt-home2.png';
import bpaInv from '../images/bpa-inventory.png';
import bpaLogo from '../images/bpa-logo.png';
// import zenGarden from '../images/zen-garden.png';
// import zenGarden2 from '../images/zen-garden2.png';
import zenVideo from '../images/zen-video.mov';
import { Link } from 'react-router-dom';


export default function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <section>
                <div>
                    <h2>Duck Duck Hunt</h2>
                    <span>Remix</span><span>TypeScript</span><span>Express</span><span>PostgreSQL</span><span>K'nex</span><span>Digital Ocean</span><span>CSS</span><span>Postico</span>
                    <p>Team: Kevin Allred, Ynno Plucena, Kyle Johnson</p>
                    <p>A Scavenger Hunt inspired game involving small rubber ducks hidden around campus. Each duck has a qr code that takes you to the website when scanned. This was a team project. My responsibility was the website and the user authentication, which is handled using Auth0. Focus on mobile users</p>
                    <p>Use this demo login when viewing live. <br/>Email: demo@gmail.com <br/>Password: MyDemo123^</p>
                    <a href="https://duckduckhunt.net/about">Live</a>
                    <a href="https://github.com/TheAllred/duck-hunting">Code</a>
                </div>
                <img src={duckAbout} alt="screenshot of main landing page for duck duck hunt"></img>
                <img src={duckHome} alt='screenshot of the home page after logging in showing the reacent duck finds - mobile view'></img>
                <img src={duckHome2} alt='screenshot of the bottom part of the home page after logging in showing the leaderboard - mobile view'></img>
            </section>

            <section>
                <div>
                    <h2>Old Bob's Classic Autos</h2>
                    <span>JavaScript</span><span>HTML</span><span>CSS</span><span>Canva</span>
                    <p>Team: Maryna Kryvoruchenko, Tim Orgill, Moon Moon</p>
                    <p>A BPA Web Design Team State competition web site. We were given a specific company category and we had four months to conceptualize and design a website to be presented to a panel of Judges. I was responsible for the logo and inventory page. Search any combination to find the exact car you want.</p>
                    <a href='https://maryna-kryvoruchenko.github.io/bpa/inventory.html'>Live</a>
                    <a href='https://github.com/kbellinger/bpa'>Code</a>
                </div>
                <img src={bpaInv} alt="screenshot of the inventory page on Old Bob's Classic Autos"></img>
                <img src={bpaLogo} alt="old bob's classic autos logo"></img>
            </section>
            <section>
                <div>
                    <h2>CSS Zen Garden</h2>
                    <span>SCSS</span><span>Figma</span>
                    <p>Team: Anna Kellogg, Anita Achee</p>
                    <p>CSS Zen Garden, ocean themed. We were given the html and could not alter it. Only could use CSS/SCSS. Used Atomic Method. CSS animations were used on graphics throughout to enhance the ocean theme.</p>
                    <a href='https://kbellinger.github.io/zen-garden/'>Live</a>
                    <a href='https://github.com/kbellinger/zen-garden'>Code</a>
                </div>
                {/* <img src={zenGarden} alt="screenshot of the css zen garden"></img> */}
                <video width="50%" controls>
                    <source src={zenVideo} type='video/mp4'/>
                </video>
            </section>
            <Link to={'./ProjectsPage'}>see more projects </Link>
        </div>
    )
}