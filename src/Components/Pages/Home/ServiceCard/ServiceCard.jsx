
const ServiceCard = ({service}) => {


    const {title, img, price , description , facility} = service;

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
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
     </div>
    );
};

export default ServiceCard;