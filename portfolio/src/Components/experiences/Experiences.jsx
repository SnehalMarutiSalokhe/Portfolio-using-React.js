import { EXPERIENCES } from "../../data.js";
import { useState } from "react";

import TabButton from "./TabButton";
import Tabs from "./Tabs";
import Section from "./Section";

import "./Exp.css";

export default function Experiences() {
  const [selectedTopic, setSelctedTopic] = useState("");
  const [isSelected, setSelected] = useState();

  function handleSelect(selctedButton) {
    setSelctedTopic(selctedButton);
    setSelected(selctedButton);
  }
  return (
    <div>
      <Section id="Experiences" title="EXPERIENCES">

        <div className="tabs">
        <Tabs
          buttonsContainer="menu"
          buttons={
            <>
              <TabButton
                isSelected={selectedTopic === "GFG"}
                onSelect={() => handleSelect("GFG")}
              >
                {" "}
                Content Writer{" "}
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "codeClause"}
                onSelect={() => handleSelect("codeClause")}
              >
                Web Developer
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "CVIS"}
                onSelect={() => handleSelect("CVIS")}
              >
                Software Trainee
              </TabButton>
            </>
          }
        ></Tabs>
</div>
        <div id="tab-content">
          {!selectedTopic ? (
            <p>Please select </p>
          ) : (
            <div>
              <h3>{EXPERIENCES[selectedTopic].role}</h3>
              <p> <pre>-  @{EXPERIENCES[selectedTopic].companyName}</pre> </p>
              <pre>
                <code>{EXPERIENCES[selectedTopic].date}</code>
              </pre>
             <h4>  Skills: {EXPERIENCES[selectedTopic].skills}</h4>
              <p>{EXPERIENCES[selectedTopic].description}</p>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
