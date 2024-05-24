// pages/index.js
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home-blog.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome CSS
import "../../lib/fontawesome"; // Import the configuration
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faUser,
  faEnvelope,
  faLink,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { faMoon as moon } from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";
import HomeLayout from "./layout";
const blogData = [
  {
    date: "August 15, 2022",
    readTime: "3 min read",
    title: "Scaling a Team",
    excerpt:
      "A process allows a team to operate on a standard set of steps - a framework.",
    image: "/images/scaling-team.jpg",
    link: "#",
  },
  {
    date: "February 19, 2022",
    readTime: "3 min read",
    title: "You Cannot Win Alone",
    excerpt:
      "No one can achieve success on their own. It is simply not possible.",
    image: "/images/win-alone.jpg",
    link: "#",
  },
  {
    date: "January 22, 2022",
    readTime: "3 min read",
    title: "A Framework for Long Horizon Tasks",
    excerpt: "How do you go to Mars? You can't buy tickets a...",
    image: "/images/long-horizon.jpg",
    link: "#",
  },
  {
    date: "September 05, 2021",
    readTime: "3 min read",
    title: "Taking the Long View",
    excerpt: "It's so easy to get caught up in the present moment.",
    image: "/images/long-view.jpg",
    link: "#",
  },
  {
    date: "August 28, 2021",
    readTime: "3 min read",
    title: "On Creativity",
    excerpt:
      "It's a myth that only knowledgeable people are creative and can learn new things.",
    image: "/images/creativity.jpg",
    link: "#",
  },
  {
    date: "July 17, 2021",
    readTime: "3 min read",
    title: "Technology and You",
    excerpt: "Control access to your time.",
    image: "/images/technology.jpg",
    link: "#",
  },
];

export default function Home() {
  return (
    <div>
      <div className="about-section">
        <div className="text-about">
          <h1 className="about-sub-title">
            Hi! I'm <div className="flow-root about-name ">Kunjan.</div>
          </h1>
          <div className="about-quote">
            <span className="about-quote-inner">
              I help run &nbsp;
              <Image
                src="/kunjan/Solvative-Logo.png"
                alt="Kunjan Shah"
                width={105}
                height={14}
              />
              &nbsp;,&nbsp;
              <span className="about-vector-top">
                <Image
                  src="/kunjan/Vector.png"
                  alt="Kunjan Shah"
                  width={16}
                  height={15}
                  className="about-vector"
                />
              </span>
              <span className="">
                <Image
                  src="/kunjan/Vector-text.png"
                  alt="Kunjan Shah"
                  width={62}
                  height={16}
                  className="about-vector-text"
                />
              </span>
              &nbsp;
              <span className="about-quote-text">and a few other</span>
            </span>
            <div className="about-quote-text-outer">
              things with an extraordinary team at Solvative.
            </div>
          </div>
          <button className="about-btn">
            Let's Connect
            <Image
              src="/kunjan/arrow.png"
              alt="Kunjan Shah"
              width={30}
              height={13}
            />
          </button>
        </div>
        <div className="image-about">
          <Image
            src="/kunjan/kunjan.png"
            alt="Kunjan Shah"
            width={620}
            height={940}
            className=""
          />
        </div>
        
        
      </div>

      <section className={styles.blogs}>
        <h2>My blogs</h2>
        <div className={styles.blogGrid}>
          {blogData.map((blog, index) => (
            <div key={index} className={styles.blogCard}>
              <Image
                src={blog.image}
                alt={blog.title}
                width={300}
                height={200}
              />
              <div className={styles.blogContent}>
                <span>
                  {blog.date} • {blog.readTime}
                </span>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <a href={blog.link}>Read more →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2024 Kunjan Shah • Crafted with ❤️ by Solvative</p>
        <div className={styles.socialLinks}>
          <a href="https://linkedin.com">LinkedIn</a>
          <a href="https://github.com">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
