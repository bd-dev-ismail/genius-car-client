import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Checkout = () => {
    const {title, price, _id} = useLoaderData();
    const {user} = useContext(AuthContext);
    const handalPlaceOrder = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = `${form.fristName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregisterd';
        const message = form.message.value;
        const order = {
            service: _id,
            serviceName: title,
            price,
            customerName: name,
            phone,
            email,
            message,
        }
        // if(phone.length > 10){
        //     return toast.warning('Phone Number sholud be 10 charaters');
        // }
        fetch("https://genius-car-server-gamma.vercel.app/orders", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("genius-token")}`,
          },
          body: JSON.stringify(order),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              form.reset();
              toast.success("Order Placed Successfully");
            }
          })
          .catch((err) => console.log(err));
    }
    return (
      <div>
        <form onSubmit={handalPlaceOrder}>
          <div className="text-center my-5">
            <h2 className="text-4xl font-bold">You are about to order: {title}</h2>
            <h4 className="text-2xl font-semibold">Price: {price}</h4>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              name="fristName"
              type="text"
              placeholder="Frist Name"
              className="input input-bordered w-full"
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="input input-bordered w-full"
            />
            <input
             required
              name="phone"
              type="text"
              placeholder="Your Phone"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              readOnly
              defaultValue={user?.email}
              type="text"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
          </div>
          <textarea
          required
            name="message"
            className="textarea textarea-bordered h-24 w-full mt-3"
            placeholder="Your Message"
          ></textarea>
          <div className="text-center">
            <input
              className="btn btn-warning my-5"
              type="submit"
              value="Place Your Order"
            />
          </div>
        </form>
      </div>
    );
};

export default Checkout;