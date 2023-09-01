// import React, { useState } from "react";
// import { MdPadding } from "react-icons/md";

// const UserPage = () => {
//  const initialFormData = {
//     type: "",
//     name: "",
//     location: "",
//     destination: "",
//     price: 0,
//     rating: 0,
//     amenities: [],
//     reviewCount: 0,
//     reviewQuality: "",
//     freebies: [],
//     checkIn: "",
//     checkOut: "",
//     roomsGuests: "",
//     image: "",
//     room1price: 0,
//     room2price: 0,
//     room3price: 0,
//     room4price: 0,
//     overview: "",
//     iframe: "",
//     staysImages: [],
//           };
            
//     const [formData, setFormData] = useState(initialFormData);

//     const handleInputChange = (event) => {
//       const { name, value } = event.target;
    
    
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Send a POST request to the Django API
//     fetch("/blog/hotelcreate/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the response data here if needed
//         // const parsedData=JSON.parse(data)
//         // const newDataInJSON = JSON.stringify(parsedData);
//         // console.log(newDataInJSON);
//         console.log(data)

       
//         // setFormData(initialFormData);
//         // Add any additional logic after successful creation
//       })
//       .catch((error) => {
//         // Handle errors here
//         console.error("Error creating hotel:", error);
//       });
//   };

//   return (
//     <div style={{padding:"200px"}}>
//     <h1>Create Hotel</h1>
//     <form onSubmit={handleSubmit}>
//       <label>
//         Type:
//         <input
//           type="text"
//           name="type"
//           value={formData.type}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Location:
//         <input
//           type="text"
//           name="location"
//           value={formData.location}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//           Destination:
//           <input
//             type="text"
//             name="destination"
//             value={formData.destination}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Stays Images (comma-separated URLs):
//           <input
//             type="text"
//             name="staysImages"
//             value={formData.staysImages}
//             onChange={handleInputChange}
//           />
//         </label>
//       <br />
//       {/* Add more form fields for other properties */}
//       <label>
//         Price:
//         <input
//           type="number"
//           name="price"
//           value={formData.price}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Rating:
//         <input
//           type="number"
//           name="rating"
//           value={formData.rating}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Amenities (comma-separated):
//         <input
//           type="text"
//           name="amenities"
//           value={formData.amenities}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Review Count:
//         <input
//           type="number"
//           name="reviewCount"
//           value={formData.reviewCount}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Review Quality:
//         <input
//           type="text"
//           name="reviewQuality"
//           value={formData.reviewQuality}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Freebies (comma-separated):
//         <input
//           type="text"
//           name="freebies"
//           value={formData.freebies}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Check-In Date:
//         <input
//           type="date"
//           name="checkIn"
//           value={formData.checkIn}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Check-Out Date:
//         <input
//           type="date"
//           name="checkOut"
//           value={formData.checkOut}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Rooms and Guests:
//         <input
//           type="text"
//           name="roomsGuests"
//           value={formData.roomsGuests}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Image URL:
//         <input
//           type="url"
//           name="image"
//           value={formData.image}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Room 1 Price:
//         <input
//           type="number"
//           name="room1price"
//           value={formData.room1price}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Room 2 Price:
//         <input
//           type="number"
//           name="room2price"
//           value={formData.room2price}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Room 3 Price:
//         <input
//           type="number"
//           name="room3price"
//           value={formData.room3price}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Room 4 Price:
//         <input
//           type="number"
//           name="room4price"
//           value={formData.room4price}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Overview:
//         <textarea
//           name="overview"
//           value={formData.overview}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         iFrame URL:
//         <input
//           type="url"
//           name="iframe"
//           value={formData.iframe}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Create</button>
//     </form>
//   </div>


//   );
// };

// export default UserPage;


import React, { useState } from "react";

const UserPage = () => {

    const initialFormData = {
        airline: "",
        price: 0,
        rating: 0,
        airportImg: "",
        image: "",
        passengerClass: "",
        reviewQuality: "",
        fromTo: "",
        departTime: "",
        departDate: "",
        arrivalTime: "",
        durationstring: "",
        reviewCount: 0,
        returnDate: "",
        froms: "",
        to: "",
              
      };
      const initialFormData2 = {
            type: "",
            name: "",
            location: "",
            destination: "",
            price: 0,
            rating: 0,
            amenities: [],
            reviewCount: 0,
            reviewQuality: "",
            freebies: [],
            checkIn: "",
            checkOut: "",
            roomsGuests: "",
            image: "",
            room1price: 0,
            room2price: 0,
            room3price: 0,
            room4price: 0,
            overview: "",
            iframe: "",
            staysImages: [],
                  };
    
      const [formData, setFormData] = useState(initialFormData);
      const [formData2, setFormData2] = useState(initialFormData2);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleInputChange2 = (event) => {
    const { name, value } = event.target;
    setFormData2({
      ...formData2,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to the Django API
    fetch("/blog/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here if needed
        console.log(data);
        setFormData(initialFormData);
        // Add any additional logic after successful creation
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error creating product:", error);
      });
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();

    // Send a POST request to the Django API
    fetch("/blog/hotelcreate/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData2),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here if needed
        console.log(data);
        setFormData2(initialFormData2);
        // Add any additional logic after successful creation
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error creating product:", error);
      });
  };

  return (
    <div className="user__page ">
     <div className="container_main">
     <div>
      <form onSubmit={handleSubmit}>
        {/* <h2> FlightContent</h2> */}
        <h1 >Create Flight</h1>
        <label>
        
          <input
            type="text"
            name="airline"
            placeholder="Airline"
            value={formData.airline}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
         
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
        
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={formData.rating}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
        
          <input
            type="text"
            name="airportImg"
            placeholder="Airport Image"
            value={formData.airportImg}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
         
          <input
            type="text"
            name="image"
            placeholder="Image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
        
          <input
            type="text"
            name="passengerClass"
            placeholder="Passenger Class"
            value={formData.passengerClass}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
         
          <input
            type="text"
            name="reviewQuality"
            placeholder="Review Quality"
            value={formData.reviewQuality}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
       
          <input
            type="text"
            name="fromTo"
            placeholder="From To"
            value={formData.fromTo}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
        
          <input
            type="text"
            name="departTime"
            placeholder="Depart Time"
            value={formData.departTime}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label style={{marginTop:"15px"}}>
        Depart Date
          <input
            type="date"
            name="departDate"
            placeholder=" Depart Date:"
            value={formData.departDate}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          
          <input
            type="text"
            name="arrivalTime"
            placeholder="Arrival Time:"
            value={formData.arrivalTime}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          
          <input
            type="text"
            name="durationstring"
            placeholder="Duration String:"
            value={formData.durationstring}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          
          <input
            type="number"
            name="reviewCount"
            placeholder="Review Count:"
            value={formData.reviewCount}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label style={{marginTop:"15px"}}>
        Return Date
          <input
            type="date"
            name="returnDate"
            placeholder="Return Date:"
            value={formData.returnDate}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          
          <input
            type="text"
            name="froms"
            placeholder="Froms:"
            value={formData.froms}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          
          <input
            type="text"
            name="to"
            placeholder="To:"
            value={formData.to}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
      </div>
     </div>
     
         <div className="container_main">
         <div style={{marginTop:"100px"}}>
     <h1>Create Hotel</h1>
     <form onSubmit={handleSubmit2}>
       <label>
         Type:
        <input
          type="text"
          name="type"
          value={formData2.type}
          onChange={handleInputChange2}
        />
      </label>
      <br />
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData2.name}
          onChange={handleInputChange2}
        />
      </label>
      <br />
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={formData2.location}
          onChange={handleInputChange2}
        />
      </label>
      <br />
      <label>
          Destination:
          <input
            type="text"
            name="destination"
            value={formData2.destination}
            onChange={handleInputChange2}
          />
        </label>
        <br />
        <label>
          Stays Images (comma-separated URLs):
          <input
            type="text"
            name="staysImages"
            value={formData2.staysImages}
            onChange={handleInputChange2}
          />
        </label>
      <br />
      {/* Add more form fields for other properties */}
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={formData2.price}
          onChange={handleInputChange2}
        />
      </label>
      <br />
      <label>
        Rating:
        <input
          type="number"
          name="rating"
          value={formData2.rating}
          onChange={handleInputChange2}
        />
      </label>
      <br />
      <label>
        Amenities (comma-separated):
        <input
          type="text"
          name="amenities"
          value={formData2.amenities}
          onChange={handleInputChange2}
        />
      </label>
      <br />
      <label>
        Review Count:
        <input
          type="number"
          name="reviewCount"
          value={formData2.reviewCount}
          onChange={handleInputChange2}
        />
      </label>
      <br />
      <label>
        Review Quality:
        <input
          type="text"
          name="reviewQuality"
          value={formData2.reviewQuality}
          onChange={handleInputChange2}
        />
      </label>
      <br />
      <label>
        Freebies (comma-separated):
        <input
          type="text"
          name="freebies"
          value={formData2.freebies}
          onChange={handleInputChange2}
        />
      </label>
      <br />
      <label>
        Check-In Date:
        <input
          type="date"
          name="checkIn"
          value={formData2.checkIn}
          onChange={handleInputChange2}
        />
      </label>
      <br />
      <label>
        Check-Out Date:
        <input
          type="date"
          name="checkOut"
          value={formData2.checkOut}
          onChange={handleInputChange2}
        />
      </label>
      <br />
      <label>
        Rooms and Guests:
        <input
          type="text"
          name="roomsGuests"
          value={formData2.roomsGuests}
          onChange={handleInputChange2}
        />
      </label>
      <br />
      <label>
        Image URL:
        <input
          type="url"
          name="image"
          value={formData2.image}
          onChange={handleInputChange2}
        />
      </label>
      <br />
      <label>
        Room 1 Price:
        <input
          type="number"
          name="room1price"
          value={formData2.room1price}
          onChange={handleInputChange2}
        />
      </label>
      <br />
      <label>
        Room 2 Price:
        <input
          type="number"
          name="room2price"
          value={formData2.room2price}
          onChange={handleInputChange2}
        />
      </label>
      <br />
      <label>
        Room 3 Price:
        <input
          type="number"
          name="room3price"
          value={formData2.room3price}
          onChange={handleInputChange2}
        />
      </label>
      <br />
      <label>
        Room 4 Price:
        <input
          type="number"
          name="room4price"
          value={formData2.room4price}
          onChange={handleInputChange2}
        />
      </label>
      <br />
      <label>
        Overview:
        <textarea
          name="overview"
          value={formData2.overview}
          onChange={handleInputChange2}
        />
      </label>
      <br />
      <label>
        iFrame URL:
        <input
          type="url"
          name="iframe"
          value={formData2.iframe}
          onChange={handleInputChange2}
        />
      </label>
      <br />
      <button type="submit">Create</button>
    </form>
  </div>
         </div>
     
      
    </div>
  );
};

export default UserPage;

