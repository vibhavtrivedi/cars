import { useSelector } from 'react-redux';
function CarValue() {
    const totalCost = useSelector(({cars : {data, carsSearch}}) => {
        const filteredCar =  data.filter((car) => {
            return car.name?.toLowerCase().includes(carsSearch?.toLowerCase())
        });
        let cost = 0;
        for (let car of filteredCar) {
            cost += car.cost;
        }
        return cost;
    })
    return <div className="car-value">
        Total cost : ${totalCost}
    </div>
}

export default CarValue;