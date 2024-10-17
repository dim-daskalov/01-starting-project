import stylizedAtomImg from "../../assets/react-core-concepts.png";

import { REACT_DESCRIPTIONS } from "../../constants";
import { genRandomInt } from "../../utils";

import "./Header.css";

const Header = () => {
  const randomDescription = REACT_DESCRIPTIONS[genRandomInt(2)];

  return (
    <header>
      <img src={stylizedAtomImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomDescription} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
};

export default Header;
