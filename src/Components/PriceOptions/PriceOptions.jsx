import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

     const priceOptions = [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 29.99,
          "features": ["Access to gym equipment", "Locker access", "1 group class per month"]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 49.99,
          "features": ["Access to gym equipment", "Locker access", "5 group classes per month", "Access to the sauna"]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 79.99,
          "features": ["Access to gym equipment", "Locker access", "Unlimited group classes", "Access to the sauna", "Free personal training session once a month"]
        },
        {
          "id": 4,
          "name": "VIP Plan",
          "price": 99.99,
          "features": ["Access to gym equipment", "Locker access", "Unlimited group classes", "Access to the sauna", "Weekly personal training sessions", "Nutrition and diet plan consultation"]
        }
      ];
      

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
           <div className="grid md:grid-cols-4 gap-6">
           {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;