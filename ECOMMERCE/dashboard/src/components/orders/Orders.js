import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Orders = (props) => {
  const { orders } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Email</th>
          <th scope="col">Totale</th>
          <th scope="col">Pagamento</th>
          <th scope="col">Data</th>
          <th>Stato</th>
          <th scope="col" className="text-end">
            Azione
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order._id}>
            <td>
              <b>{order.user.name}</b>
            </td>
            <td>{order.user.email}</td>
            <td>€{order.totalPrice}</td>
            <td>
              {order.isPaid ? (
                <span className="badge rounded-pill alert-success">
                  Pagato il {moment(order.paidAt).format("MMM Do YY")}
                </span>
              ) : (
                <span className="badge rounded-pill alert-danger">
                  Non pagato
                </span>
              )}
            </td>
            <td>{moment(order.createdAt).format("MMM Do YY")}</td>
            <td>
              {order.isDelivered ? (
                <span className="badge btn-success">Consegnato</span>
              ) : (
                <span className="badge btn-dark">Non consegnato</span>
              )}
            </td>
            <td className="d-flex justify-content-end align-item-center">
              <Link to={`/order/${order._id}`} className="text-success">
                <i className="fas fa-eye"></i>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Orders;
