import "./Order.css";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "./reducer";

function Order({ id, amount, created, basket }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{id}</small>
      </p>
      {basket.map((item, index) => {
        return <CheckoutProduct key={index} {...item} hideButton />;
      })}
      <CurrencyFormat
        renderText={(value) => <h3 className="order__total">Order Total: {value}</h3>}
        decimalScale={2}
        value={amount / 100} // part of the homework
        displayType={"text"}
        thousandSeparator={true}
		prefix={"$"}
      />
    </div>
  );
}

export default Order;
