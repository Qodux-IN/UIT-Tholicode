import styled from 'styled-components';
import React from 'react';

const StyledWrapper = styled.div`
  @keyframes square-animation {
    0% { left: 0; top: 0; }
    10.5% { left: 0; top: 0; }
    12.5% { left: 32px; top: 0; }
    23% { left: 32px; top: 0; }
    25% { left: 64px; top: 0; }
    35.5% { left: 64px; top: 0; }
    37.5% { left: 64px; top: 32px; }
    48% { left: 64px; top: 32px; }
    50% { left: 32px; top: 32px; }
    60.5% { left: 32px; top: 32px; }
    62.5% { left: 32px; top: 64px; }
    73% { left: 32px; top: 64px; }
    75% { left: 0; top: 64px; }
    85.5% { left: 0; top: 64px; }
    87.5% { left: 0; top: 32px; }
    98% { left: 0; top: 32px; }
    100% { left: 0; top: 0; }
  }

  .loader-wrapper {
    position: fixed;
    inset: 0;
    background: #181818; /* Dark blue background */
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader {
    position: relative;
    width: 96px;
    height: 96px;
    transform: rotate(45deg);
  }

  .loader-square {
    position: absolute;
    top: 0;
    left: 0;
    width: 28px;
    height: 28px;
    margin: 2px;
    border-radius: 4px;
    background: white;
    animation: square-animation 10s ease-in-out infinite both;
  }

  .loader-square:nth-of-type(1) { animation-delay: 0s; }
  .loader-square:nth-of-type(2) { animation-delay: -1.428s; }
  .loader-square:nth-of-type(3) { animation-delay: -2.857s; }
  .loader-square:nth-of-type(4) { animation-delay: -4.285s; }
  .loader-square:nth-of-type(5) { animation-delay: -5.714s; }
  .loader-square:nth-of-type(6) { animation-delay: -7.142s; }
  .loader-square:nth-of-type(7) { animation-delay: -8.571s; }
  .loader-square:nth-of-type(8) { animation-delay: -10s; }
`;

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader-wrapper">
        <div className="loader">
          {[...Array(8)].map((_, i) => (
            <div className="loader-square" key={i} />
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Loader;
