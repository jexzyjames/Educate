import React, { useState } from "react";
import "./accordion.css";
const Accordion = () => {
  const [open, setOpen] = useState(null);
  const content = [1, 2, 3, 4, 5];
  const handleclick = e => {
    setOpen(open === e ? null : e);
  };
  return (
    <div>
      <div className="accordion">
        

        {content.map((item, index) => {
          return(

          <div key={index} className="accordion-content">
            <p onClick={(e)=> handleclick(e)}>What is Javascript</p>

            <div className="answers">
              {!item && 
              
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                error possimus rerum? Iste laborum id repellat, vitae nobis
                voluptates iure eos rerum animi distinctio, impedit illo at
                obcaecati placeat a.
              </h5>
              }
            </div>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default Accordion;
