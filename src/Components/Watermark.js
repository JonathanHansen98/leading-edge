import React from "react";

const Watermark = () => {
  const styles = {
    rect: {
      fill: "var(--le-lightgrey)",
      fillOpacity: 1,
    },
    svg : {
      height: '100vh',
      position: 'absolute',
      left: '20%'
    }
  };
  return (
    <svg className='d-none d-lg-inline' style={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290.77 768.05">
      <g id="Layer_1-2" data-name="Layer 1">
        <rect style={styles.rect} width="82.69" height="324.89" />
        <rect
          style={styles.rect}
          x="104.04"
          y="103.24"
          width="82.69"
          height="324.89"
        />
        <rect style={styles.rect} x="208.08" width="82.69" height="324.89" />
        <rect style={styles.rect} y="339.91" width="82.69" height="324.89" />
        <rect
          style={styles.rect}
          x="104.04"
          y="443.15"
          width="82.69"
          height="324.89"
        />
        <rect
          style={styles.rect}
          x="208.08"
          y="339.91"
          width="82.69"
          height="324.89"
        />
      </g>
    </svg>
  );
};

export default Watermark;
