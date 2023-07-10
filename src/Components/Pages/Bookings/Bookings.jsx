import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';

const Bookings = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/orders?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookings(data)
            })
    }, [])


    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/orders/${id}`,{
                    method: 'DELETE'
                })
    
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                })
            }
          })

    }


    return (
        <div>
            <h1>bookings :  {bookings.length}</h1>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Cancel</th>
                            <th>Service</th>
                            <th>Customer </th>
                            <th>Email </th>
                            <th>Price  </th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                            ></BookingRow>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default Bookings;