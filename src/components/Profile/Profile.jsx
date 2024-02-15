import css from './Profile.module.css';

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.imgWrapper}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.nameDsc}>@{tag}</p>
        <p className={css.nameDsc}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span className={css.listAmount}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span className={css.listAmount}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span className={css.listAmount}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
