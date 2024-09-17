import React, { useState, useRef } from 'react';
import Circle from '../assets/circle.png';
import Cross from '../assets/cross.png';

// TicTacToe component
const Tictoe = () => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock || data[num] !== "") {
      return;
    }

    const newData = [...data];
    if (count % 2 === 0) {
      newData[num] = 'x';
    } else {
      newData[num] = 'o';
    }
    setData(newData);
    setCount(count + 1);
    checkWin(newData);
  };

  const checkWin = (data) => {
    // Horizontal check
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[0]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[3]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[6]);
    }
    // Vertical check
    else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[0]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[1]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[2]);
    }
    // Diagonal check
    else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[0]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[2]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === 'x') {
      titleRef.current.innerHTML = `Congratulations! <img src='${Cross}' alt='X'> wins`;
    } else {
      titleRef.current.innerHTML = `Congratulations! <img src='${Circle}' alt='O'> wins`;
    }
  };

  const reset = () => {
    setLock(false);
    setData(["", "", "", "", "", "", "", "", ""]);
    titleRef.current.innerHTML = `Tic Tac Toe Game In<span>React</span>`;
  };

  return (
    <div className='container'>
      <h1 className='title' ref={titleRef}>Tic Tac Toe Game In<span>React</span></h1>
      <div className='board'>
        <div className='row1'>
          <div className="boxes" onClick={(e) => { toggle(e, 0) }}>
            {data[0] === 'x' && <img src={Cross} alt="Cross" />}
            {data[0] === 'o' && <img src={Circle} alt="Circle" />}
          </div>
          <div className="boxes" onClick={(e) => { toggle(e, 1) }}>
            {data[1] === 'x' && <img src={Cross} alt="Cross" />}
            {data[1] === 'o' && <img src={Circle} alt="Circle" />}
          </div>
          <div className="boxes" onClick={(e) => { toggle(e, 2) }}>
            {data[2] === 'x' && <img src={Cross} alt="Cross" />}
            {data[2] === 'o' && <img src={Circle} alt="Circle" />}
          </div>
        </div>
        <div className='row2'>
          <div className="boxes" onClick={(e) => { toggle(e, 3) }}>
            {data[3] === 'x' && <img src={Cross} alt="Cross" />}
            {data[3] === 'o' && <img src={Circle} alt="Circle" />}
          </div>
          <div className="boxes" onClick={(e) => { toggle(e, 4) }}>
            {data[4] === 'x' && <img src={Cross} alt="Cross" />}
            {data[4] === 'o' && <img src={Circle} alt="Circle" />}
          </div>
          <div className="boxes" onClick={(e) => { toggle(e, 5) }}>
            {data[5] === 'x' && <img src={Cross} alt="Cross" />}
            {data[5] === 'o' && <img src={Circle} alt="Circle" />}
          </div>
        </div>
        <div className='row3'>
          <div className="boxes" onClick={(e) => { toggle(e, 6) }}>
            {data[6] === 'x' && <img src={Cross} alt="Cross" />}
            {data[6] === 'o' && <img src={Circle} alt="Circle" />}
          </div>
          <div className="boxes" onClick={(e) => { toggle(e, 7) }}>
            {data[7] === 'x' && <img src={Cross} alt="Cross" />}
            {data[7] === 'o' && <img src={Circle} alt="Circle" />}
          </div>
          <div className="boxes" onClick={(e) => { toggle(e, 8) }}>
            {data[8] === 'x' && <img src={Cross} alt="Cross" />}
            {data[8] === 'o' && <img src={Circle} alt="Circle" />}
          </div>
        </div>
      </div>
      <button className='reset' onClick={reset}>Reset</button>
    </div>
  );
};

export default Tictoe;
