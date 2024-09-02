import { useState, useEffect } from "react";
import gameGif from "../images/gameGif.gif";
import mailGif from "../images/mailGif.gif";
import homepageRedrawCutA from "../images/homepageRedrawCutA.png";
import homepageRedrawCutB from "../images/homepageRedrawCutB.png";
import homepageRedrawCut1 from "../images/homepageRedrawCut1.png";
import croppedBlackboard from "../images/croppedBlackBoard.png";

import "./App.css";

const MobileProjectItem = ({ text, link }: { text: string; link: string }) => {
  return (
    <a
      href={link}
      style={{
        display: "block",
        margin: "2vw 0",
        padding: "2vw 4vw",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "5px",
        textDecoration: "none",
        color: "lightgray",
        fontSize: "4vw",
        transition: "background-color 0.3s, transform 0.3s",
      }}
      onTouchStart={(e) =>
        (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)")
      }
      onTouchEnd={(e) =>
        (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
      }
    >
      {text}
    </a>
  );
};

export default function Home() {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [brightness, setBrightness] = useState(1);

  const gifs = [
    {
      src: mailGif,
      link: "https://maildemo.app/",
    },
    { src: gameGif, link: "https://bubblepop.app/" },
    // Add more gifs and links as needed
  ];

  const showNextGif = () => {
    setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
  };

  const enterApp = () => {
    window.open(gifs[currentGifIndex].link, "_blank");
  };

  const toggleImages = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    setBrightness(
      isDarkMode ? Math.random() * 0.2 + 0.8 : Math.random() * 0.2 + 1.3
    );
  });

  return (
    <>
      <div
        className="desktop-view"
        style={{ margin: 0, padding: 0, overflow: "hidden" }}
      >
        <img
          style={{
            width: "100vw",
            height: "100vh",
            display: "block",
            position: "absolute",
            zIndex: -4,
            filter: `brightness(${brightness})`,
          }}
          src={homepageRedrawCut1}
          alt="Background"
        />
        <Controls
          showNextGif={showNextGif}
          enterApp={enterApp}
          toggleImages={toggleImages}
        />

        <BlackboardLG />
        <div
          style={{
            position: "absolute",
            top: "55%",
            left: "40%",
            width: "20vw",
            height: "20vh",
            zIndex: -2,
            background: "blue",
          }}
        ></div>

        <img
          style={{
            width: "100vw",
            height: "100vh",
            display: "block",
            position: "absolute",
            zIndex: -1,
          }}
          src={isDarkMode ? homepageRedrawCutA : homepageRedrawCutB}
          alt="Background"
        />
        <img
          style={{
            width: "40vw",
            height: "45vh",
            right: "0.8%",
            top: "9.2%",
            position: "absolute",
            zIndex: 1,
            objectFit: "cover",
            transform:
              "perspective(80vw) rotateY(-50deg) rotateZ(-1deg) scale(0.95)",
            opacity: 0.5,
            border: "1px solid black",
          }}
          src={gifs[currentGifIndex].src}
          alt="Project Preview"
        />
        <MovingCirclesContainer />
      </div>
      <div className="mobile-view">
        <img
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
            objectFit: "cover",
          }}
          src={croppedBlackboard}
          alt="Blackboard background"
        />
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            color: "lightgray",
            fontFamily: "Chalkduster, fantasy",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "3vh 5vw",
            boxSizing: "border-box",
            overflowY: "auto",
          }}
        >
          <header style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "8vw", marginBottom: "0.5rem" }}>
              Norman Qian
            </h1>
            <h2 style={{ fontSize: "5vw", marginTop: "0" }}>
              Software Developer
            </h2>
          </header>

          <main style={{ width: "100%", textAlign: "center" }}>
            <h3 style={{ fontSize: "6vw", marginBottom: "1rem" }}>Projects</h3>
            <MobileProjectItem
              text="bubblepop.app"
              link="https://bubblepop.app/"
            />
            <MobileProjectItem
              text="maildemo.app"
              link="https://maildemo.app/"
            />
          </main>

          <footer style={{ width: "100%", textAlign: "center" }}>
            <h3 style={{ fontSize: "6vw", marginBottom: "1rem" }}>Contact</h3>
            <MobileProjectItem
              text="GitHub"
              link="https://github.com/elizasviel"
            />
            <MobileProjectItem
              text="LinkedIn"
              link="https://linkedin.com/in/norman-qian"
            />
            <MobileProjectItem
              text="Email"
              link="mailto:normanqian@gmail.com"
            />
            <MobileProjectItem text="View Resume" link="/resume" />
          </footer>
        </div>
      </div>
    </>
  );
}

const BlackboardLG = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "46vw",
          color: "lightgray",
          width: "20%",
          fontSize: "2vw",
          fontFamily: "Chalkduster, fantasy",
        }}
      >
        <h3>Norman Qian </h3>
        <h5> &nbsp; Software Developer </h5>
        <ProjectItem
          text="github.com/elizasviel"
          link="https://github.com/elizasviel"
        />
        <br />

        <div style={{ paddingBottom: "0.7em" }}>
          <ProjectItem
            text="linkedin.com/in/norman-qian"
            link="https://linkedin.com/in/norman-qian"
          />
        </div>
        <br />
        <ProjectItem
          text="normanqian@gmail.com"
          link="mailto:normanqian@gmail.com"
        />
        <br />
        <ProjectItem text="View Resume" link="/resume" />
      </div>
    </>
  );
};

const Controls = ({
  showNextGif,
  enterApp,
  toggleImages,
}: {
  showNextGif: () => void;
  enterApp: () => void;
  toggleImages: () => void;
}) => {
  return (
    <>
      <button
        onClick={showNextGif}
        style={{
          top: "61%",
          left: "46%",
          zIndex: 1000,
          position: "absolute",
          background: "gray",
          rotate: "-9deg",
          fontWeight: "bold",
          width: "7vw",
          height: "3vh",
          overflow: "hidden",
        }}
      >
        Show Next ❯
      </button>
      <button
        onClick={enterApp}
        style={{
          top: "64.5%",
          left: "46.5%",
          zIndex: 1000,
          position: "absolute",
          background: "green",
          rotate: "-9deg",
          fontWeight: "bold",
          width: "7vw",
          height: "3vh",
          overflow: "hidden",
        }}
      >
        Enter App
      </button>
      <button
        onClick={toggleImages}
        style={{
          top: "68%",
          left: "47%",
          zIndex: 1000,
          position: "absolute",
          background: "purple",
          rotate: "-9deg",
          fontWeight: "bold",
          width: "7vw",
          height: "3vh",
          overflow: "hidden",
        }}
      >
        Lightswitch
      </button>
    </>
  );
};

const ProjectItem = ({ text, link }: { text: string; link: string }) => {
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <p
        style={{
          cursor: "pointer",
          margin: "0.4em 0",
          transition: "color 0.2s",
          fontSize: "1.2vw",
          paddingLeft: "1em",
          display: "block",
          textDecoration: "none",
          zIndex: 998,
          position: "absolute", // Absolute positioning to layer on top
          top: 0, // Align top
          left: 0, // Align left
          color: hover ? "#a0a0a0" : "lightgray",
          opacity: down ? 0.5 : 1,
        }}
      >
        {text}
      </p>
      <a
        href={link}
        style={{
          cursor: "pointer",
          margin: "0.4em 0",
          transition: "color 0.2s",
          fontSize: "1.2vw",
          paddingLeft: "1em",
          display: "block",
          textDecoration: "none",
          zIndex: 10000,
          color: "transparent",
          position: "absolute", // Absolute positioning to layer on top
          top: 0, // Align top
          left: 0, // Align left
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseDown={() => setDown(true)}
        onMouseUp={() => setDown(false)}
      >
        {text}
      </a>
    </div>
  );
};

interface Circle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  opacity: number;
  inInnerTrapezoid: boolean;
}

interface Point {
  x: number;
  y: number;
}

const MovingCirclesContainer: React.FC = () => {
  const [circles, setCircles] = useState<Circle[]>([]);
  const numCircles = 300;
  const speed = 0.1;
  const circleSize = 0.3; // Size in vw

  const outerTrapezoid: Point[] = [
    { x: 15, y: 31 },
    { x: 100, y: -9 },
    { x: 100, y: 69 },
    { x: 15, y: 45 },
  ];

  const innerTrapezoid: Point[] = [
    { x: 18, y: 36 },
    { x: 95, y: 0 },
    { x: 96, y: 60 },
    { x: 18, y: 40 },
  ];

  const isPointInPolygon = (point: Point, polygon: Point[]): boolean => {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i].x,
        yi = polygon[i].y;
      const xj = polygon[j].x,
        yj = polygon[j].y;
      const intersect =
        yi > point.y !== yj > point.y &&
        point.x < ((xj - xi) * (point.y - yi)) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }
    return inside;
  };

  useEffect(() => {
    const initialCircles: Circle[] = Array.from({ length: numCircles }, () => ({
      x: Math.random() * 80 + 10, // Between 10 and 90 vw
      y: Math.random() * 90 + 5, // Between 5 and 95 vh
      dx: 2 * (Math.random() - 0.5) * speed,
      dy: 2 * (Math.random() - 0.5) * speed,
      opacity: Math.random() * 1.5,
      inInnerTrapezoid: false,
    }));
    setCircles(initialCircles);

    const animate = () => {
      setCircles((prevCircles) =>
        prevCircles.map((circle) => {
          let { x, y, dx, dy, opacity } = circle;

          x += dx;
          y += dy;

          // Bounce off edges of outer trapezoid
          if (!isPointInPolygon({ x, y }, outerTrapezoid)) {
            dx = -dx;
            dy = -dy;
          }

          // Keep within bounds
          x = Math.max(0, Math.min(x, 100 - circleSize));
          y = Math.max(0, Math.min(y, 100 - circleSize));

          // Check if circle is in inner trapezoid
          const inInnerTrapezoid = isPointInPolygon(
            { x: x + circleSize / 2, y: y + circleSize / 2 },
            innerTrapezoid
          );

          return { x, y, dx, dy, opacity, inInnerTrapezoid };
        })
      );
    };

    const intervalId = setInterval(animate, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: 999,
      }}
    >
      {/* Outer trapezoid */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          clipPath: `polygon(${outerTrapezoid
            .map((p) => `${p.x}% ${p.y}%`)
            .join(", ")})`,
          backgroundColor: "transparent",
        }}
      />
      {/* Inner trapezoid */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          clipPath: `polygon(${innerTrapezoid
            .map((p) => `${p.x}% ${p.y}%`)
            .join(", ")})`,
          backgroundColor: "transparent",
        }}
      />
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            opacity: `${circle.opacity}`,
            position: "absolute",
            width: `${circleSize}vw`,
            height: `${circleSize}vw`,
            borderRadius: "50%",
            backgroundColor: circle.inInnerTrapezoid
              ? "lemonchiffon"
              : "transparent",
            left: `${circle.x}vw`,
            top: `${circle.y}vh`,
            transition: "background-color 0.3s",
          }}
        />
      ))}
    </div>
  );
};
