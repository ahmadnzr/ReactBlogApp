import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://p4.wallpaperbetter.com/wallpaper/297/18/527/digital-art-artwork-illustration-science-fiction-planet-hd-wallpaper-preview.jpg"
        alt=""
      />
    </div>
  );
};
