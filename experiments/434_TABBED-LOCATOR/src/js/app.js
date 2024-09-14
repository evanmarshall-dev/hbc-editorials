/* eslint-disable no-undef */

// console.log(data.bc[2].storeName);

const display = document.querySelector('#display-data');

const getData = () => data.bc;

// console.log(getData());

const displayStores = () => {
  // Store data in payload.
  const payload = getData();
  console.log(payload);

  // Ensure payload is an array before mapping
  if (!Array.isArray(payload)) {
    console.error('Payload is not an array:', payload);
    return;
  }

  // Store mapped data in dataDisplay.
  // object stores each object as we iterate the array.
  const dataDisplay = payload
    .map((object) => {
      console.log(object);
      // Deconstruct properties out of our object.
      const {
        storeName,
        streetAddress,
        city,
        province,
        postalCode,
        zellersFloor,
        phoneNumber,
        hoursLink,
        // mapLink,
        directionsLink,
      } = object;

      // Return HTML from object.
      return `
      <div>
        <p>Store Name: ${storeName}</p>
        <p>Street Address: ${streetAddress}</p>
        <p>City: ${city}</p>
        <p>Province: ${province}</p>
        <p>Postal Code: ${postalCode}</p>
        <p>Zellers Floor: ${zellersFloor}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <p>Hours Link: <a href="${hoursLink}" target="_blank">View Hours</a></p>
        <p>Directions Link: <a href="${directionsLink}" target="_blank">Get Directions</a></p>
      </div>
    `;
    })
    .join('');
  // Insert data into DOM we call the display variable above.
  display.innerHTML = dataDisplay;
};
displayStores();
