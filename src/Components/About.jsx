/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I’m currently pursuing my post-graduation while building a strong foundation in computer science. Alongside academics, I focus on practical learning—exploring Data Structures, development, and real-world tools like Salesforce to bridge the gap between theory and application.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Salesforce Admin",
  "Sales cloud",
  "Salesforce Loyalty Management",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I’m someone who’s quietly figuring things out—one concept, one project, one late-night thought at a time.Currently working as a QA Engineer while diving deeper into tech, I spend my days exploring how things work… and sometimes, how they break.I’ve been building my foundation in development through small, consistent steps—whether it was creating 30 mini web projects, learning core concepts of Data Structures, or understanding the flow behind systems like Salesforce. For me, it’s never just about finishing something—it’s about understanding it deeply.Beyond the technical side, I find comfort in writing, in observing, in slowing down. I like creating things that feel thoughtful—whether it's code, content, or quiet ideas that sit with you for a while.Right now, I’m in a phase of learning, unlearning, and becoming—trying to grow not just as a developer, but as someone who builds with intention.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
