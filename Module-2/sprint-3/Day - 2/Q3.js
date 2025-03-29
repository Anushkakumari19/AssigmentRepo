function Car(make, model, year, type){
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = type;
    this.isAvailable = true
  }
  
  function Customer(name){
    this.name = name;
    this.rentedCar =[];
  }
  
  Customer.prototype.rentCar = function(car){
    if(car.isAvailable){
      car.isAvailable = false;
      this.rentedCar.push(car)
      console.log(`${this.name} rented a ${car.make} ${car.model}`)
    }
    else{
      console.log(`Sorry, the ${car.make} ${car.model} is already rented`)
    }
  }
  
  
  Customer.prototype.returnCar = function(car) {
    setTimeout(() => {
      car.isAvailable = true;
      this.rentedCars = this.rentedCars.filter(rentedCar => rentedCar !== car);
      console.log(`${this.name} returned a ${car.make} ${car.model}`);
    }, 2000); 
  };
  
  
  function PremiumCustomer(name, discountRate) {
    Customer.call(this, name);
    this.discountRate = discountRate;
  }
  PremiumCustomer.prototype = Object.create(Customer.prototype);
  PremiumCustomer.prototype.constructor = PremiumCustomer;
  
  
  