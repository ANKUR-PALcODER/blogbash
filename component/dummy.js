import React from "react";

function Dummy() {
  return (
    <div className="dummy">
      <style jsx global>
        {`
          .dummy {
            background-color: yellow;
          }
        `}
      </style>
      I am Dummy
    </div>
  );
}

export default Dummy;
