import { useEffect, useState } from "react";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import "./Orders.css";
import Order from "./Order";

function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
		setOrders([]);
	}
  }, [user]);

  console.log(orders);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      {orders.map((order) => {
        return <Order key={order.id} id={order.id} {...order.data} />;
      })}
    </div>
  );
}

export default Orders;
