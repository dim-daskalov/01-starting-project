import { useState } from "react";

import { EXAMPLES } from "../../constants";
import { TabButton, TabContent } from "../Tab";

import "./Examples.css";

const Examples = () => {
  const [dynamicExample, setDynamicExample] = useState();

  const handleClick = (example) => {
    setDynamicExample(example);
  };

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {EXAMPLES.map((example) => (
          <TabButton
            key={example.title}
            onClick={() => handleClick(example)}
            isSelected={dynamicExample?.title === example.title}
          >
            {example.title}
          </TabButton>
        ))}
      </menu>
      <TabContent dynamicExample={dynamicExample} />
    </section>
  );
};

export default Examples;
