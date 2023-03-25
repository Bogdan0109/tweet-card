import './App.css';
import imageBoy from '../images/hansels.png';
import svgLogo from '../images/logo.svg';
import { useEffect, useState } from 'react';

export const App = () => {
  const [followers, setFollowers] = useState(() => {
    return JSON.parse(localStorage.getItem('followers')) ?? 100500;
  });
  const [isFollowing, setIsFollowing] = useState(() => {
    return JSON.parse(localStorage.getItem('isFollowing')) ?? false;
  });

  useEffect(() => {
    localStorage.setItem('followers', JSON.stringify(followers));
    localStorage.setItem('isFollowing', JSON.stringify(isFollowing));
  }, [followers, isFollowing]);

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
        return;
    }
  };

  return (
    <section className="hero">
      <img
        src={svgLogo}
        alt="User"
        className="hero__logo"
        width="76"
        height="22"
      />
      <div className="hero__card">
        <img
          src={imageBoy}
          alt="User"
          className="hero__image"
          width="80"
          height="80"
        />
        <div className="hero__info">
          <p className="hero__tweets">777 tweets</p>
          <p className="hero__followers">
            {followers.toLocaleString('en-US', { maximumFractionDigits: 0 })}{' '}
            Followers
          </p>
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
