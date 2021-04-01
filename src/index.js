import React from 'react';
import ReactDOM from 'react-dom';
import PropsTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

/* import logo from './logo.svg';
import './App.css'; */
/* import { FonTawesomeIcon } from '@fortawesome/fontawesome-free';
import { faClock } from '@fortawesome/fontawesome-free';
 */
function SimpleCounter(props) {
  return (<div className="bigCounter">
    <div>
      <i class="far fa-clock"></i>
    </div>
    <div className="four">{props.digitFour % 10}</div>
    <div className="three">{props.digitThree % 10}</div>
    <div className="two">{props.digitTwo % 10}</div>
    <div className="one">{props.digitOne % 10}</div>
  </div>);
}
SimpleCounter.propsTypes = {
  digitFour: PropsTypes.number,
  digitThree: PropsTypes.number,
  digitTwo: PropsTypes.number,
  digitOne: PropsTypes.number
};

let counter = 0;
setInterval(function () {
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);
  console.log(four, three, two, one);
  counter++;
  ReactDOM.render(
    <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,
    document.querySelector('#root')
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); */
