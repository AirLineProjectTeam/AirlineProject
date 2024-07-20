import axios from "axios";
import { firebaseURL } from "../../../firebase/firebase-config";

export const reserveTicket = (user, flight, ticket, flightID) => {
  return new Response(async (resolve, reject) => {
    if (user.tickets == null) user.tickets = [];
    user.ticket.push(ticket);

    if (ticket.ticketClass == "VIP") {
      if (flight.reservedTicketsVip == null) flight.reservedTicketsVip = [];
      flight.reservedTicketsVip.push(ticket);
    } else {
      if (flight.reservedTicketsEco == null) flight.reservedTicketsEco = [];
      flight.reservedTicketsEco.push(ticket);
    }

    flight.availableSeats--;

    await axios
      .put(firebaseURL + "/trips/" + flightID, flight)
      .then(async () => {
        let response = await axios.put(
          firebaseURL + "/trips/" + "Users/" + user.userID,
          user
        );
        resolve(response);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
