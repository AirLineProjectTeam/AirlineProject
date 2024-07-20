export class Flight {
  constructor({
    flightNumber,
    from,
    destination,
    date,
    price,
    image,
    seatsAvailable,
    reservedTicketsVip,
    reservedTicketsEco,
  }) {
    this.flightNumber = flightNumber;
    this.from = from;
    this.destination = destination;
    this.date = date;
    this.price = price;
    this.image = image;
    this.seatsAvailable = seatsAvailable;
    this.reservedTicketsVip = reservedTicketsVip;
    this.reservedTicketsEco = reservedTicketsEco;
  }
}
