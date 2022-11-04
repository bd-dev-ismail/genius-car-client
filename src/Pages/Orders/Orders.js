import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
 

    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('genius-token')}`
          }
        })
          .then((res) =>  {
            if(res.status === 401 || res.status === 403){
              return logOut(); 
            }
            return res.json();
          })
          .then((data) => {
            console.log(data)
            return setOrders(data);
           
          })
          .catch((err) => console.log(err));
    },[user?.email, logOut ]);
        const handalDelete = (id) => {
          const procced = window.confirm("Are you sure to cancel order?");
          if (procced) {
            fetch(`http://localhost:5000/orders/${id}`, {
              headers: {
                authorization: `Bearer ${localStorage.getItem("genius-token")}`,
              },
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  toast.warning("You Delete an Item!");
                  const remaning = orders.filter((order) => order._id !== id);
                  setOrders(remaning);
                }
              })
              .catch((err) => toast.error(err.message));
          }
        };
        const handalUpdateStatus = (id)=>{
          fetch(`http://localhost:5000/orders/${id}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("genius-token")}`,
            },
            body: JSON.stringify({ status: "Approved" }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.matchedCount > 0) {
                const remaning = orders.filter((order) => order._id !== id);
                const approving = orders.find((order) => order._id === id);
                approving.status = "Approved";

                const newOrders = [approving, ...remaning];
                setOrders(newOrders);
              }
            });
        }
    return (
      <div>
        <Helmet>
          <title>Orders -Genius Car</title>
        </Helmet>
        <h2 className="text-5xl my-5">You have: {orders.length} orders.</h2>
        <div className="overflow-x-auto w-full my-10">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Service</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <OrderRow
                  key={order._id}
                  order={order}
                  handalDelete={handalDelete}
                  handalUpdateStatus={handalUpdateStatus}
                 
                ></OrderRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Orders;