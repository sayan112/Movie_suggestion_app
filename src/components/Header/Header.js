import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 CineBlend : Your Cinematic Palette 🎥
    </span>
  );
};

export default Header;
