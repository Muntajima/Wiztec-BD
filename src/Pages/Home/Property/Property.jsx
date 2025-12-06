import { GiBed } from "react-icons/gi";
import { MdBathroom } from "react-icons/md";
import { MdArrowCircleUp } from "react-icons/md";

const Property = ({ property }) => {
    const {name, image, price, location,bed,bathroom,size} = property;
    return (
        <div>
            <div className="card w-74 bg-base-100">
                <figure><img src={image} /></figure>
                <div className="card-body text-left pl-1">
                    <div className="flex gap-4 text-gray-400">
                        <h3 className="flex items-center gap-1"><GiBed></GiBed>Bed- {" "}{bed}</h3>
                        <h3 className="flex items-center gap-1"><MdBathroom></MdBathroom>Bathroom- {" "}{bathroom}</h3>
                        <h3 className="flex items-center gap-1">
                            <MdArrowCircleUp></MdArrowCircleUp>{size}
                        </h3>
                    </div>
                    <h2 className="card-title font-bold text-xl">
                        {name}
                    </h2>
                    <div className='flex gap-6'>
                        <h3>{price}<span className='text-gray-400'>/week</span></h3>
                        <p className='text-gray-400'>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Property;