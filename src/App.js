import React, { useState } from "react";
import "./App.css";
import { pizzas, pasta, sideDishes, drinks, personsAtTable } from "./food/food";
import Notify from "./components/Notify";
import { orderTime } from "./helpers";
const generateId = () => Math.floor(Math.random() * 100000);

function App() {
  const pizzasArr = Object.values(pizzas);
  const pastaArr = Object.values(pasta);
  const sideDishesArr = Object.values(sideDishes);
  const drinksArr = Object.values(drinks);
  const personsArr = Array.from({ length: 4 });

  const [errMsg, setErrMsg] = useState("");
  const [infoMsg, setInfoMsg] = useState("");

  const [tableOne, setTableOne] = useState([...personsAtTable]);
  const [tableTwo, setTableTwo] = useState([...personsAtTable]);
  const [tableThree, setTableThree] = useState([...personsAtTable]);
  const [tableFour, setTableFour] = useState([...personsAtTable]);

  const [oneCanOrder, setOneCanOrder] = useState(true);
  const [twoCanOrder, setTwoCanOrder] = useState(true);
  const [threeCanOrder, setThreeCanOrder] = useState(true);
  const [fourCanOrder, setFourCanOrder] = useState(true);

  const [tOnePrice, setTOnePrice] = useState(0);
  const [tTwoPrice, setTTwoPrice] = useState(0);
  const [tThreePrice, setTThreePrice] = useState(0);
  const [tFourPrice, setTFourPrice] = useState(0);

  const [orderConsole, setOrderConsole] = useState({
    tableOne: "",
    tableTwo: "",
    tableThree: "",
    tableFour: "",
    profit: 0,
  });

  function setOrder(tableNum, personNum) {
    const resetOrder = (elem) => {
      return { ...elem, order: false };
    };

    const makeOneOrder = (pNum) => {
      return function (elem) {
        return elem.person == pNum
          ? { ...elem, order: true }
          : { ...elem, order: false };
      };
    };

    setTableOne(tableOne.map(resetOrder));
    setTableTwo(tableTwo.map(resetOrder));
    setTableThree(tableThree.map(resetOrder));
    setTableFour(tableFour.map(resetOrder));

    if (
      (tableNum == 1 && !oneCanOrder) ||
      (tableNum == 2 && !twoCanOrder) ||
      (tableNum == 3 && !threeCanOrder) ||
      (tableNum == 4 && !fourCanOrder)
    ) {
      setErrMsg("You first need to pay bill");
    }

    if (tableNum == 1 && oneCanOrder) {
      setInfoMsg("You can Make Order");
      setTableOne(tableOne.map(makeOneOrder(personNum)));
    } else if (tableNum == 2 && twoCanOrder) {
      setInfoMsg("You can Make Order");
      setTableTwo(tableTwo.map(makeOneOrder(personNum)));
    } else if (tableNum == 3 && threeCanOrder) {
      setInfoMsg("You can Make Order");
      setTableThree(tableThree.map(makeOneOrder(personNum)));
    } else if (tableNum == 4 && fourCanOrder) {
      setInfoMsg("You can Make Order");
      setTableFour(tableFour.map(makeOneOrder(personNum)));
    }
  }

  function complete(tableNum) {
    const allOrdersFalseForTable = (elem) => {
      return { ...elem, order: false };
    };

    if (tableNum === 1) {
      if (tOnePrice < 200) {
        setErrMsg("Please order more :)");
        return;
      }
      setTableOne(tableOne.map(allOrdersFalseForTable));
      setOneCanOrder(false);
      setOrderConsole({
        ...orderConsole,
        tableOne: `Order: date ${orderTime()}, table number ${tableNum}`,
      });
    } else if (tableNum === 2) {
      if (tTwoPrice < 200) {
        setErrMsg("Please order more :)");
        return;
      }
      setTableTwo(tableTwo.map(allOrdersFalseForTable));
      setTwoCanOrder(false);
      setOrderConsole({
        ...orderConsole,
        tableTwo: `Order: date ${orderTime()}, table number ${tableNum}`,
      });
    } else if (tableNum === 3) {
      if (tThreePrice < 200) {
        setErrMsg("Please order more :)");
        return;
      }
      setTableThree(tableThree.map(allOrdersFalseForTable));
      setThreeCanOrder(false);
      setOrderConsole({
        ...orderConsole,
        tableThree: `Order: date ${orderTime()}, table number ${tableNum}`,
      });
    } else if (tableNum === 4) {
      if (tFourPrice < 200) {
        setErrMsg("Please order more :)");
        return;
      }
      setTableFour(tableFour.map(allOrdersFalseForTable));
      setFourCanOrder(false);
      setOrderConsole({
        ...orderConsole,
        tableFour: `Order: date ${orderTime()}, table number ${tableNum}`,
      });
    }
  }

  function addFood(food) {
    const personFind = (tableNum) => {
      if (tableNum === 1 && tableOne.find((table) => table.order)) {
        setTOnePrice(tOnePrice + food.price);
      } else if (tableNum === 2 && tableTwo.find((table) => table.order)) {
        setTTwoPrice(tTwoPrice + food.price);
      } else if (tableNum === 3 && tableThree.find((table) => table.order)) {
        setTThreePrice(tThreePrice + food.price);
      } else if (tableNum === 4 && tableFour.find((table) => table.order)) {
        setTFourPrice(tFourPrice + food.price);
      }
      return function (elem) {
        return elem.order
          ? { ...elem, orderFood: elem.orderFood.concat(food) }
          : elem;
      };
    };
    setTableOne(tableOne.map(personFind(1)));
    setTableTwo(tableTwo.map(personFind(2)));
    setTableThree(tableThree.map(personFind(3)));
    setTableFour(tableFour.map(personFind(4)));
  }

  const tablePay = (tableNum) => {
    setInfoMsg("We hope we will see you again");
    if (tableNum === 1) {
      setTableOne([...personsAtTable]);
      setOneCanOrder(true);
      setTOnePrice(0);
      setOrderConsole({
        ...orderConsole,
        tableOne: `Paid: date ${orderTime()}, table number ${tableNum}, price ${tOnePrice}`,
        profit: orderConsole.profit + tOnePrice,
      });
    } else if (tableNum === 2) {
      setTableTwo([...personsAtTable]);
      setTwoCanOrder(true);
      setTTwoPrice(0);
      setOrderConsole({
        ...orderConsole,
        tableTwo: `Paid: date ${orderTime()}, table number ${tableNum}, price ${tTwoPrice}`,
        profit: orderConsole.profit + tTwoPrice,
      });
    } else if (tableNum === 3) {
      setTableThree([...personsAtTable]);
      setThreeCanOrder(true);
      setTThreePrice(0);
      setOrderConsole({
        ...orderConsole,
        tableThree: `Paid: date ${orderTime()}, table number ${tableNum}, price ${tThreePrice}`,
        profit: orderConsole.profit + tThreePrice,
      });
    } else if (tableNum === 4) {
      setTableFour([...personsAtTable]);
      setFourCanOrder(true);
      setTFourPrice(0);
      setOrderConsole({
        ...orderConsole,
        tableFour: `Paid: date ${orderTime()}, table number ${tableNum}, price ${tFourPrice}`,
        profit: orderConsole.profit + tFourPrice,
      });
    }
  };

  const showTableOrder = (index) => {
    return function (table) {
      if (table.person === index + 1) {
        return table.orderFood.map((order) => {
          return (
            <div key={generateId()}>
              <small>{order.name}</small>
            </div>
          );
        });
      }
    };
  };

  const showFoodChoices = (food) => {
    return (
      <button
        className="btn-pizza"
        onClick={() => addFood(food)}
        key={food.name}
      >
        {food.name}
      </button>
    );
  };

  return (
    <div className="container">
      <div className="pizzas">{pizzasArr.map(showFoodChoices)}</div>
      <div className="pasta">{pastaArr.map(showFoodChoices)}</div>
      <div className="pasta">{sideDishesArr.map(showFoodChoices)}</div>
      <div className="pasta">{drinksArr.map(showFoodChoices)}</div>
      <Notify
        errMsg={errMsg}
        setErrMsg={setErrMsg}
        infoMsg={infoMsg}
        setErrMsg={setErrMsg}
        setInfoMsg={setInfoMsg}
      />

      <div className="all-tables">
        <div className="table1">
          {personsArr.map((_person, index) => {
            return (
              <div className="person" key={generateId()}>
                <p>Person {index + 1}</p>
                <button onClick={() => setOrder(1, index + 1)}>Order</button>
                {tableOne.map(showTableOrder(index))}
              </div>
            );
          })}
          <div className="house-control">
            <button
              className="complete"
              onClick={() => complete(1)}
              style={{
                backgroundColor: oneCanOrder ? "white" : "red",
                color: oneCanOrder ? "black" : "white",
                border: !oneCanOrder && "none",
              }}
            >
              Complete
            </button>
            <button onClick={() => tablePay(1)}>Paid</button>
          </div>
          <div className="price">
            Price <span>{tOnePrice}</span>
          </div>
        </div>
        <div className="table2">
          {personsArr.map((_person, index) => {
            return (
              <div className="person">
                <p>Person {index + 1}</p>
                <button onClick={() => setOrder(2, index + 1)}>Order</button>
                {tableTwo.map(showTableOrder(index))}
              </div>
            );
          })}
          <div className="house-control">
            <button
              className="complete"
              onClick={() => complete(2)}
              style={{
                backgroundColor: twoCanOrder ? "white" : "red",
                color: twoCanOrder ? "black" : "white",
                border: !twoCanOrder && "none",
              }}
            >
              Complete
            </button>
            <button onClick={() => tablePay(2)}>Paid</button>
          </div>
          <div className="price">
            Price <span>{tTwoPrice}</span>
          </div>
        </div>
        <div className="table3">
          {personsArr.map((_person, index) => {
            return (
              <div className="person" key={generateId()}>
                <p>Person {index + 1}</p>
                <button onClick={() => setOrder(3, index + 1)}>Order</button>
                {tableThree.map(showTableOrder(index))}
              </div>
            );
          })}
          <div className="house-control">
            <button
              className="complete"
              onClick={() => complete(3)}
              style={{
                backgroundColor: threeCanOrder ? "white" : "red",
                color: threeCanOrder ? "black" : "white",
                border: !threeCanOrder && "none",
              }}
            >
              Complete
            </button>
            <button onClick={() => tablePay(3)}>Paid</button>
          </div>
          <div className="price">
            Price <span>{tThreePrice}</span>
          </div>
        </div>
        <div className="table4">
          {personsArr.map((_person, index) => {
            return (
              <div className="person" key={generateId()}>
                <p>Person {index + 1}</p>
                <button onClick={() => setOrder(4, index + 1)}>Order</button>
                {tableFour.map(showTableOrder(index))}
              </div>
            );
          })}
          <div className="house-control">
            <button
              className="complete"
              onClick={() => complete(4)}
              style={{
                backgroundColor: fourCanOrder ? "white" : "red",
                color: fourCanOrder ? "black" : "white",
                border: !fourCanOrder && "none",
              }}
            >
              Complete
            </button>
            <button onClick={() => tablePay(4)}>Paid</button>
          </div>
          <div className="price">
            Price <span>{tFourPrice}</span>
          </div>
        </div>
      </div>
      <div className="console">
        <p>{orderConsole.tableOne && orderConsole.tableOne}</p>
        <p>{orderConsole.tableTwo && orderConsole.tableTwo}</p>
        <p>{orderConsole.tableThree && orderConsole.tableThree}</p>
        <p>{orderConsole.tableFour && orderConsole.tableFour}</p>
        <p>
          Total Earnings: <span className="profit">{orderConsole.profit}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
