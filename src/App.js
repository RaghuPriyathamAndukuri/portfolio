import React, { useState, useEffect } from 'react';
import { InView } from 'react-intersection-observer';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { FadeLoader } from 'react-spinners';
import './App.css';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Simulate a 3-second loading time
    }, []);

    return (
        <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
            {isLoading ? (
                <div className="loading-screen">
                    <FadeLoader color="#2980b9" loading={isLoading} size={50} />
                </div>
            ) : (
                <>
                    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>
                    <Header />
                    <InView triggerOnce>
                        {({ inView, ref }) => (
                            <div ref={ref}>
                                <About inView={inView} />
                            </div>
                        )}
                    </InView>
                    <InView triggerOnce>
                        {({ inView, ref }) => (
                            <div ref={ref}>
                                <Skills inView={inView} />
                            </div>
                        )}
                    </InView>
                    <InView triggerOnce>
                        {({ inView, ref }) => (
                            <div ref={ref}>
                                <Education inView={inView} />
                            </div>
                        )}
                    </InView>
                    <InView triggerOnce>
                        {({ inView, ref }) => (
                            <div ref={ref}>
                                <Projects inView={inView} />
                            </div>
                        )}
                    </InView>
                    <InView triggerOnce>
                        {({ inView, ref }) => (
                            <div ref={ref}>
                                <Contact inView={inView} />
                            </div>
                        )}
                    </InView>
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;