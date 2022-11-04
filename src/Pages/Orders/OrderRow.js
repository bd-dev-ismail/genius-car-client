import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handalDelete, handalUpdateStatus, refresh }) => {
  // console.log(order);
  const {
    service,
    serviceName,
    price,
    customerName,
    phone,
    _id,
    email,
    status,
  } = order;
  const [orderService, setOrderService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data))
      .catch((err) => console.log(err));
  }, [service, refresh]);

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handalDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-12 h-12">
              {orderService?.img && (
                <img
                  src={orderService?.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold"> {customerName}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>{email}</td>
      <th>
        <button
          onClick={() => handalUpdateStatus(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "Pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;