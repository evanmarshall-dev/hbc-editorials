/* eslint-disable no-undef */

const display = document.querySelector('.ed-container--tab');

const getData = (region) => data[region];

const displayStores = (region, keyword) => {
  // Store data in payload.
  const payload = getData(region);
  // ? console.log(payload);

  // Ensure payload is an array before mapping
  // ? if (!Array.isArray(payload)) {
  //   ? console.error('Payload is not an array:', payload);
  //   ? return;
  // ? }

  // Filter the payload based on the keyword in storeName.
  const filteredPayload = payload.filter((object) =>
    object.storeName.toLowerCase().includes(keyword.toLowerCase()),
  );

  // Store mapped data in dataDisplay.
  // object stores each object as we iterate the array.
  const dataDisplay = filteredPayload
    .map((object) => {
      // ? console.log(object);
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
        mapLink,
        directionsLink,
      } = object;

      // Return HTML from object.
      return `
        <div class="ed-container--store">
          <address
            class="ed-container--store__address ed-util-pr--2pnt5"
          >
            <h3 class="ed-type--h3 ed-util-pb--pnt5">
              ${storeName}
            </h3>
            <p class="ed-type--p">
              ${streetAddress}<br />
              ${city}, ${province} ${postalCode}
            </p>
            <div class="ed-container--store__zellers ed-util-py--1pnt5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="title desc"
              >
                <title id="title">Zellers Circular Logo</title>
                <desc id="desc">
                  A red circle with a white Zellers letter Z in the
                  center.
                </desc>
                <g clip-path="url(#clip0_634_5624)">
                  <rect width="16" height="16" rx="8" fill="#D32027" />
                  <path
                    d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_634_5624">
                    <rect width="16" height="16" rx="8" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h4 class="ed-type--h4 ed-util-pl--pnt5">
                Zellers
                <span class="ed-util--normal ed-util--sans"
                  >${zellersFloor}</span
                >
              </h4>
            </div>
            <a class="ed-type--link" href="tel:+1${phoneNumber}"
              >${phoneNumber}</a
            >
          </address>
          <div class="ed-container--store__hours ed-util-pr--2pnt5">
            <a
              class="ed-type--link"
              href="${hoursLink}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Click here for store hours: link to store hours"
              >Click here for store hours</a
            >
          </div>
          <div
            class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
          >
            <iframe
              title="Map showing the location of Hudson's Bay ${storeName}"
              alt="Map showing the location of Hudson's Bay ${storeName}"
              src="${mapLink}"
              style="border: 0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              width="100%"
              height="250"
            ></iframe>
            <a
              aria-label="Get Directions: link to map pin of store"
              href="${directionsLink}"
              target="_blank"
              rel="noopener noreferrer"
              class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
              >Get Directions &rarr;</a
            >
          </div>
        </div>
        <hr />
      `;
    })
    .join('');
  // Insert data into DOM we call the display variable above.
  display.innerHTML = dataDisplay;
};
// Example calls
displayStores('bc', 'Vancouver'); // Display BC stores with 'Vancouver' in the store name
// ? displayStores('ab', 'Calgary'); // Display AB stores with 'Calgary' in the store name
// ? displayStores('qc', 'Montreal'); // Display QC stores with 'Montreal' in the store name
