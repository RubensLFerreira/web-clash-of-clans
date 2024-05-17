import { Container } from "../../components/Container";
import "../../styles.css";

export const Home: React.FC = () => {
  return (
    <div className="full-screen-image">
      <a href="https://www.linkedin.com/in/rubens-node/" target="_blanck">
        <img className="image-logo" src="https://1000logos.net/wp-content/uploads/2021/02/Clash-of-Clans-emblem.png" alt="logo" />
      </a>
      <Container />
    </div>
  );
};
