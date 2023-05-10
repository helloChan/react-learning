import * as React from 'react';
import {
  bubbleSort,
  reverse,
  fibonacci_1,
  fibonacci_2,
  convert,
} from './test.js';
import './style.css';

export default function App() {
  const arr = [5, 1, 3, 6, 7, 8, 2, 4];
  var value = fibonacci_2(7);

  const input = {
    a: {
      key1: 1,
      key2: 2,
      key3: 3,
      key4: 4,
      key5: 5,
    },
    b: {
      key1: 11,
      key2: 12,
      key3: 13,
      key4: 14,
      key5: 15,
    },
    c: {
      key1: 21,
      key2: 22,
      key3: 23,
      key4: 24,
      key5: 25,
    },
    d: {
      key1: 31,
      key2: 32,
      key3: 33,
      key4: 34,
      key5: 35,
    },
  };
  const outputTemplate = [
    ['key1', 'key2', 'key3', 'key4', 'key5'],
    [
      [1, 2, 3, 4, 5],
      [11, 12, 13, 14, 15],
      [21, 22, 23, 24, 25],
      [31, 32, 33, 34, 35],
    ],
  ];

  var output = convert(input);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div>{arr.join()}</div>
      <div>{value}</div>
      <div>{JSON.stringify(output)}</div>
    </div>
  );
}
