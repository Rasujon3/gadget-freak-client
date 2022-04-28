import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";

const OrderList = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://gadget-freak-sujon.herokuapp.com/orderList`;
    fetch(url, {
      headers: {
        authorization: `${user?.email} ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);
  return (
    <div className="text-center">
      <h2>Orders: {orders.length}</h2>
      <ol>
        {orders.map((order) => (
          <li key={order._id}>{order.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default OrderList;
