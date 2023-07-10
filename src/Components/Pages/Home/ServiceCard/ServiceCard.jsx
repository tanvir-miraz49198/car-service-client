import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {


    const {_id, title, img, price , description , facility} = service;

    return (
     <div className=" grid justify-items-center mb-8">
           <div className="card w-5/6 bg-base-100 shadow-2xl mt-4 ">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                
                
                <p><span className="text-orange-600 font-bold">Price :</span> ${price}</p>
                <div className="card-actions">
                   <Link to={`/checkout/${_id}`}>
                   <button className="btn bg-orange-600 text-slate-200 hover:bg-orange-700">Book Now</button>
                   </Link>
                </div>
            </div>
        </div>
     </div>
    );
};

export default ServiceCard;