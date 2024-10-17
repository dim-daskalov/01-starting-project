import "./TabContent.css";

const TabContent = ({ dynamicExample }) => {
  return (
    <div id="tab-content">
      {dynamicExample ? (
        <>
          <h3>{dynamicExample.title}</h3>
          <p>{dynamicExample.description}</p>
          <pre>
            <code>{dynamicExample.code}</code>
          </pre>
        </>
      ) : (
        <p>Please select a topic</p>
      )}
    </div>
  );
};

export default TabContent;
