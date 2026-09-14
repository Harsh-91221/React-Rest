import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, slaString, cloudinaryImageId } = resData?.info;
    
    const handleImageError = (e) => {
        e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop";
    };

    return (
        <div className="restaurant-card">
            <div className="card-image-wrapper">
                <img 
                    className="card-image" 
                    src={cloudinaryImageId}
                    alt={name}
                    onError={handleImageError}
                ></img>
                <div className="card-badge rating">
                    <span className="star">★</span>
                    <span>{avgRating}</span>
                </div>
                {slaString && (
                    <div className="card-badge time">
                        {slaString}
                    </div>
                )}
            </div>
            <div className="card-content">
                <h3 className="card-name">{name}</h3>
                <p className="card-cuisines">{cuisines.join(", ")}</p>
                <div className="card-footer">
                    <span className="card-cost">{costForTwo}</span>
                </div>
            </div>
        </div>
    );
};
export default RestaurantCard;
