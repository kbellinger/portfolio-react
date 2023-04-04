import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Tools from "./Tools";
import Projects from "./Projects";

export default function HomePage() {
    return(
        <>
        <Header />
        <main>
            <Hero />
            <About/>
            <Tools/>
            <Projects/>
        </main>
        </>
    )
}