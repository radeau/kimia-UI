import { useState, useEffect, FC } from 'react';

export const ScrollIndicator: FC = () => {
  const [scroll, setScroll] = useState<number | string>(0);

  const onScrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

    setScroll(scrolled);
  };
  useEffect(() => {
    window.addEventListener('scroll', onScrollProgress);

    return () => {
      window.removeEventListener('scroll', onScrollProgress);
    };
  }, []);

  const progressBarStyle = {
    height: '6px',
    background: '#4C1D95',
    width: scroll,
  };

  return (
    <div>
      <div className="top-0 left-0 w-screen h-1.5 fixed z-40 shadow-2xl bg-gray-300">
        <div style={progressBarStyle} />
      </div>
      <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-12 mb-4">
        Just try to scroll
      </h2>
      <div>
        <p>
          React (web framework) React (also known as React.js or ReactJS) is an
          open-source, front end, JavaScript library[3] for building user
          interfaces or UI components. It is maintained by Facebook and a
          community of individual developers and companies. React can be used as
          a base in the development of single-page or mobile applications.
          However, React is only concerned with rendering data to the DOM, and
          so creating React applications usually requires the use of additional
          libraries for state management and routing. Next.js, Redux and React
          Router are respective examples of such libraries.
        </p>
        <br />
        <h2>N</h2>
        <h2>E</h2>
        <h2>X</h2>
        <h2>T</h2>
        <h2>J</h2>
        <h2>S</h2>
        <br />
        <h2>I</h2>
        <h2>S</h2>
        <br />
        <h2>T</h2>
        <h2>H</h2>
        <h2>E</h2>
        <br />
        <h2>B</h2>
        <h2>E</h2>
        <h2>S</h2>
        <h2>T</h2>
        <br />
        <h2>F</h2>
        <h2>R</h2>
        <h2>A</h2>
        <h2>M</h2>
        <h2>E</h2>
        <h2>W</h2>
        <h2>O</h2>
        <h2>R</h2>
        <h2>K</h2>
      </div>
    </div>
  );
};
