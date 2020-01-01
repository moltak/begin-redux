import React from 'react'
import Counter from 'components/Counter'
import { connect } from 'react-redux'
import { CounterActions } from 'store/actionCreators';

function CounterContainer(props) {
  const { number } = props;

  const handleIncrement = () => {
    CounterActions.increment();
  }

  const handleDecrement = () => {
    CounterActions.decrement();
  }

  return (
    <Counter
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      number={number}
    />
  )
}


// 컴포넌트를 리덕스와 연동 할 떄에는 connect 를 사용합니다.
// connect() 의 결과는, 컴포넌트에 props 를 넣어주는 함수를 반환합니다.
// 반환된 함수에 우리가 만든 컴포넌트를 넣어주면 됩니다.
export default connect(
  (state) => ({
    number: state.counter.number
  })
)(CounterContainer);