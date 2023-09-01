const initialState = {
  tickets: [],
  hotels: [],
  basketTicketBuy: JSON.parse(localStorage.getItem("basketTicketBuy")) || [],
  basketHotelBuy: JSON.parse(localStorage.getItem("basketHotelBuy")) || [],
  basketTicket: JSON.parse(localStorage.getItem("basketTicket")) || [],
  basketHotel: JSON.parse(localStorage.getItem("basketHotel")) || [],
  fromToInput: localStorage.getItem("fromtoinput")|| "",
  departInput:  localStorage.getItem("departinput")|| "",
  returnInput:  localStorage.getItem("returninput")|| "",
  passengerInput: localStorage.getItem("passengerinput")|| "",
  enterDestinationInput: localStorage.getItem("enterdestinationinput")|| "",
  checkInInput:  localStorage.getItem("checkIninput")|| "",
  checkOutInput:  localStorage.getItem("checkOutinput")|| "",
  roomInput: localStorage.getItem("roominput")|| "",
};

// if (myJsonString !== null || myJsonString !== undefined) {
//     var jsonData = JSON.parse(myJsonString);
//   }
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "FROMTO_INPUT":
      localStorage.setItem("fromtoinput",action.payload)
      return { ...state, fromToInput: action.paylaod };
    case "DEPART_INPUT":
      localStorage.setItem("departinput",action.payload)
      return { ...state, departInput: action.paylaod };
    case "RETURN_INPUT":
      localStorage.setItem("returninput",action.payload)
      return { ...state, returnInput: action.paylaod };
    case "PASSENGER_INPUT":
      localStorage.setItem("passengerinput",action.payload)
      return { ...state, passengerInput: action.paylaod };

      case "ENTERDESTINATION_INPUT":
      localStorage.setItem("enterdestinationinput",action.payload)
      return { ...state, enterDestinationInput: action.paylaod };
      case "CHECKIN_INPUT":
      localStorage.setItem("checkIninput",action.payload)
      return { ...state, checkInInput: action.paylaod };
      case "CHECKOUT_INPUT":
      localStorage.setItem("checkOutinput",action.payload)
      return { ...state, checkOutInput: action.paylaod };
      case "ROOM_INPUT":
      localStorage.setItem("roominput",action.payload)
      return { ...state, roomInput: action.paylaod };

    case "SET_PRODUCTS":
      return { ...state, tickets: action.payload };
    case "SET_HOTELS":
      return { ...state, hotels: action.payload };
    case "SET_BASKETHOTEL":
      localStorage.setItem("basketHotel", action.payload);
      return { ...state, basketHotel: action.payload };
    case "SET_BASKETTICKET":
      localStorage.setItem("basketTicket", action.payload);
      return { ...state, basketTicket: action.payload };
    case "SET_BASKETTICKETBUY":
      localStorage.setItem("basketTicketBuy", action.payload);
      return { ...state, basketTicketBuy: action.payload };
    case "SET_BASKETHOTELBUY":
      localStorage.setItem("basketHotelBuy", action.payload);
      return { ...state, basketHotelBuy: action.payload };
    default:
      return state;
  }
}
