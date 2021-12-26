import React from "react";
import "./AboutPageStyle.css";

function AboutPage() {
    return (
        <div className="about-page">
            <div className="about-page-container">
                <h2>About Developer💻 : Aman Bhanse</h2>
                <div className="about-page-body">
                    <p>
                        Hi my name is Aman Bhanse. I am a computer science graduate and have about
                        1+ years of experience in software development. I love to code and like to
                        colaborate with awesome fellow coders! if you like this project then you can
                        check out my repo for this todo app
                        <a
                            href="https://github.com/AmanBhanse/React-Todo-Advance"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ☛ click here
                        </a>
                        , and if you are extra awesome and like to connect with me please check out
                        following links
                    </p>
                    <div className="about-page-connectMe">
                        <span className="about-page-icon">
                            <img src="https://img.icons8.com/fluency/30/000000/linkedin.png" />
                        </span>
                        <span className="about-page-link">
                            <a
                                href="https://www.linkedin.com/in/aman-bhanse-6bb43015a/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Linkedin
                            </a>
                        </span>
                    </div>
                    <div className="about-page-connectMe">
                        <span className="about-page-icon">
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" />
                        </span>
                        <span className="about-page-link">
                            <a
                                href="https://github.com/AmanBhanse"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
