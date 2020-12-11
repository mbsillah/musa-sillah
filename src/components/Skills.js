import React from 'react';
import { SiReact, SiNodeDotJs, SiMongodb, SiJavascript } from 'react-icons/si';

const Skills = () => {
  return (
    
    <div id="skills">
      {/* <h3 className="title">Skills</h3> */}
      <div className="grid">
        <div className="gridItem">
          <SiJavascript />
          <div>javascript</div>
        </div>
        <div className="gridItem">
          <SiReact />
          <div>react</div>
        </div>
        <div className="gridItem">
          <SiNodeDotJs />
          <div>node</div>
        </div>
        <div className="gridItem">
          <SiMongodb />
          <div>mongoDB</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
