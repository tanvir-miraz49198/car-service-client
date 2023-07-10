import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {


    const services = useLoaderData()
    const { title, _id, service_id, price, img } = services;
    const {user} = useContext(AuthContext)
    



    const handleCheckout = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const order = {
            customerName: name,
            email,
            date,
            service: title,
            service_id : _id,
            price: price,
            img

        } 
        console.log(order)
        fetch('http://localhost:5000/orders',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'

            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }


    return (
        <div>
            <h1>Checkout: {title} </h1>
            <h1>Checkout: {_id} </h1>
            <h1>Checkout: {service_id} </h1>
            <h1>Checkout: {price} </h1>


            <div className="p-6 md:p-4">
                <div className="">
                    <form onSubmit={handleCheckout} className="bg-violet-200 shadow-xl rounded px-8 pt-6 pb-8 mb-4">
                        <div className="grid md:grid-cols-2 gap-4">

                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="firstName"
                                >
                                     Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    placeholder=" Name"
                                    name="name"
                                    defaultValue={user?.displayName}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="lastName"
                                >
                                    Date
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="lastName"
                                    type="date"
                                    name="date"
                                />
                            </div>
                        </div>


                        <div className="grid md:grid-cols-2 gap-4">

                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="phone"
                                >
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    defaultValue={user?.email}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Due Amount
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="dueAmount"
                                    defaultValue={'$' + price}
                                />
                            </div>

                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                rows="4"
                                placeholder="Your Message"
                                name="massage"
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-center">
                            <input className="btn w-full bg-orange-600 text-slate-200 hover:bg-orange-700" type="submit" value="Confirm Order" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Checkout;