import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => 
     data
      .filter((car) => 
         car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0)
    // let cost = 0;
    // for (let car of filteredCars) {
    //   cost += car.cost;
    // }
    // return cost
    // return filteredCars.reduce((acc, car) => {
    //   return acc + car.cost;
    // }, 0);
  );

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
