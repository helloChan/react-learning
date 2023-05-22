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

  const [total, setTotal] = React.useState(0);
  const [num, setNum] = React.useState(0);
  const [specialNum, setSpecialNum] = React.useState({
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
    13: [],
    14: [],
    15: [],
    16: [],
    17: [],
    18: [],
    19: [],
    20: [],
    21: [],
    22: [],
    23: [],
    24: [],
    25: [],
    26: [],
    27: [],
    28: [],
    29: [],
    30: [],
    31: [],
    32: [],
    33: [],
    34: [],
    35: [],
    36: [],
    37: [],
    38: [],
    39: [],
    40: [],
    41: [],
    42: [],
    43: [],
    44: [],
    45: [],
    46: [],
    47: [],
    48: [],
    49: [],
  });

  function specialNumCarculate() {
    // format 12/15 200
    var input = document.getElementById('input').value;
    var inputs = input.split(' ');
    var nums = inputs[0].split('/');
    nums.forEach((item) => {
      specialNum[item].push(inputs[1]);
    });
  }

  function showDetail(e) {
    setTotal(0);
    if (
      e.target.innerHTML != '' &&
      e.target.innerHTML != undefined &&
      'td' === e.target.tagName.toLowerCase()
    ) {
      let num = parseInt(e.target.innerHTML);
      setNum(num);

      var total = 0;
      specialNum[num].forEach((value) => {
        total += parseInt(value);
      });
      setTotal(total);
    }
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div>{arr.join()}</div>
      <div>{value}</div>
      <div>{JSON.stringify(output)}</div>
      <br />
      <br />
      <br />
      输入：
      <textarea id="input"></textarea>
      <button onClick={specialNumCarculate}>输入数据</button>
      <table id="table" style={{ border: 1 }} onMouseOver={showDetail}>
        <tr>
          <th>鼠</th>
          <th>牛</th>
          <th>虎</th>
          <th>兔</th>
          <th>龙</th>
          <th>蛇</th>
          <th>马</th>
          <th>羊</th>
          <th>猴</th>
          <th>鸡</th>
          <th>狗</th>
          <th>猪</th>
        </tr>
        <tr>
          <td>4</td>
          <td>3</td>
          <td>2</td>
          <td>1</td>
          <td>12</td>
          <td>11</td>
          <td>10</td>
          <td>9</td>
          <td>8</td>
          <td>7</td>
          <td>6</td>
          <td>5</td>
        </tr>
        <tr>
          <td>16</td>
          <td>15</td>
          <td>14</td>
          <td>13</td>
          <td>24</td>
          <td>23</td>
          <td>22</td>
          <td>21</td>
          <td>20</td>
          <td>19</td>
          <td>18</td>
          <td>17</td>
        </tr>
        <tr>
          <td>28</td>
          <td>27</td>
          <td>26</td>
          <td>25</td>
          <td>36</td>
          <td>35</td>
          <td>34</td>
          <td>33</td>
          <td>32</td>
          <td>31</td>
          <td>30</td>
          <td>29</td>
        </tr>
        <tr>
          <td>40</td>
          <td>39</td>
          <td>38</td>
          <td>37</td>
          <td>48</td>
          <td>47</td>
          <td>46</td>
          <td>45</td>
          <td>44</td>
          <td>43</td>
          <td>42</td>
          <td>41</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>49</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
      号码/总价：{num}/{total}
    </div>
  );
}
