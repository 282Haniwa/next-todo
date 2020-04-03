import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStyles } from '../../styles/common';
import Button from './components/Button';
import Hello from './components/Hello';
import { add, reset } from '../../stores/counter';

export default () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count);
  const [helloList, setHelloList] = useState([]);

  const handleClickCounter = () => {
    dispatch(add(1));
    setHelloList([...helloList, <Hello key={helloList.length} />]);
  };

  const handleClickReset = () => {
    dispatch(reset());
    setHelloList([]);
  };

  return (
    <>
      <RootStyles>
        <Button color="orange" onClick={handleClickCounter}>
          クリックしてね!!
        </Button>
        <Button color="red" onClick={handleClickReset}>
          リセット
        </Button>
        <div>{count}回</div>
        {helloList}
      </RootStyles>
    </>
  );
};
