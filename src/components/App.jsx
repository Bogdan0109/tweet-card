import './App.css';
import imageBoy from '../images/boy.png';
import svgLogo from '../images/logo.svg';

export const App = () => {
  return (
    <section className="hero">
      <div className="hero__card">
        <img
          src={svgLogo}
          alt="User"
          className="hero__logo"
          width="76"
          height="22"
        />
        <div className="hero__background-image"></div>
        <img
          src={imageBoy}
          alt="User"
          className="hero__image"
          width="90"
          height="90"
        />
        <div className="hero__svg"></div>
        <p>777 tweets</p>
        <p>100,500 Followers</p>
        <button className="hero__btn" type="button">
          Follow
        </button>
      </div>
    </section>
  );
};
