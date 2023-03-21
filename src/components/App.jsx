import './App.css';
import imageBoy from '../images/boy.png';
import svgLogo from '../images/logo.svg';
import { useState } from 'react';

export const App = () => {
  const [followers, setFollowers] = useState(100500);
  const [isFollowing, setIsFollowing] = useState(false);

  const onHandlerClickFollow = () => {
    switch (isFollowing) {
      case false:
        setFollowers(followers + 1);
        setIsFollowing(true);
        break;
      case true:
        setFollowers(followers - 1);
        setIsFollowing(false);
        break;

      default:
        console.log('Invalid subscription type');
    }
  };

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
        <div className="hero__info">
          <p className="hero__tweets">777 tweets</p>
          <p className="hero__followers">{followers} Followers</p>
          <button
            className="hero__btn"
            style={{
              backgroundColor: !isFollowing ? '#EBD8FF' : '#5CD3A8',
            }}
            type="button"
            onClick={onHandlerClickFollow}
          >
            {!isFollowing ? 'Follow' : 'Following'}
          </button>
        </div>
      </div>
    </section>
  );
};
