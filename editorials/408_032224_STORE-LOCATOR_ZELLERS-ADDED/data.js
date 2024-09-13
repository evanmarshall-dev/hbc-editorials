import jsdom from 'jsdom';

const { JSDOM } = jsdom;

// ENGLISH
// const htmlContent = `<section
//               class="ed-container--tab"
//               id="tab1"
//               role="tabpanel"
//               aria-labelledby="tab1-tab"
//               tabindex="0"
//             >
//               <header class="ed-container--header">
//                 <hr />
//                 <h2 class="ed-type--h2">British Columbia</h2>
//               </header>

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Vancouver Downtown
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     674 Granville Street<br />
//                     Vancouver, BC V6C 1Z6
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title desc"
//                     >
//                       <title id="title">Zellers Circular Logo</title>
//                       <desc id="desc">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level B1</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+16046816211"
//                     >604-681-6211</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/6fRxMnhiXGL91TzZA"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Vancouver Downtown"
//                     alt="Map showing the location of Hudson's Bay Vancouver Downtown"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.67693487889!2d-123.12032192295473!3d49.28251857139282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f1eee9af7%3A0x4fd5f4c24883576e!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1683057024009!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     aria-label="Get Directions: link to map pin of store"
//                     href="https://goo.gl/maps/1aRa5QvxQL36zxHz6?sre=Stores_LP_Hudsons_Bay_Vancouver_Downtown_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Kamloops Aberdeen Mall
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     1320 Trans-Canada Highway #300<br />
//                     Kamloops, BC V1S 1J1
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title2 desc2"
//                     >
//                       <title id="title2">Zellers Circular Logo</title>
//                       <desc id="desc2">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 2</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+12503728271"
//                     >250-372-8271</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/uYahMQkdhGcYxMGY6"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Kamloops Aberdeen Mall"
//                     alt="Map showing the location of Hudson's Bay Kamloops Aberdeen Mall"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.4539608764903!2d-120.37370982307898!3d50.65583137255435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537e2c71a61a3811%3A0x79395fe87bada528!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1683143960913!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/ftfWSGm85jPv4rjv5?sre=Stores_LP_Hudsons_Bay_Kamloops_Aberdeen_Mall_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Surrey Guildford Town Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     1400 152 Street<br />
//                     Surrey, BC V3R 7C1
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title3 desc3"
//                     >
//                       <title id="title3">Zellers Circular Logo</title>
//                       <desc id="desc3">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 1</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+16045882111"
//                     >604-588-2111</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/kyfLhvxSbPZ9byePA"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Surrey Guildford Town Centre"
//                     alt="Map showing the location of Hudson's Bay Surrey Guildford Town Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.5246553766633!2d-122.80560872314402!3d49.1906059772695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d76cdf7274e9%3A0xd07c48383c6ed3!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1683209045173!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/dx2PLaqXFD65Y48U7?sre=Stores_LP_Hudsons_Bay_Surry_Guildford_Town_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Abbotsford Sevenoaks Shopping Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     32900 South Fraser Way<br />
//                     Abbotsford, BC V2S 5A1
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title4 desc4"
//                     >
//                       <title id="title4">Zellers Circular Logo</title>
//                       <desc id="desc4">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 2</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+16048537711"
//                     >604-853-7711</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/M1o8gL7HZaENvYAG8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Abbotsford Sevenoaks Shopping Centre"
//                     alt="Map showing the location of Hudson's Bay Abbotsford Sevenoaks Shopping Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.9699952991846!2d-122.31600122315025!3d49.04919408725958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5484355c6c4ce9c5%3A0xf9cb177d10a8d636!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1683209616346!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/3hAYp3kmT3LtJySq6?sre=Stores_LP_Hudsons_Bay_Abbotsford_SevenOaks_Shopping_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Langley Willowbrook Mall
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     19705 Fraser Highway<br />
//                     Langley, BC V3A 7E9
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title5 desc5"
//                     >
//                       <title id="title5">Zellers Circular Logo</title>
//                       <desc id="desc5">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+16045308434"
//                     >604-530-8434</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/TUPpcCS9V5rTbBLg7"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Langley Willowbrook Mall"
//                     alt="Map showing the location of Hudson's Bay Langley Willowbrook Mall"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.5157809045877!2d-79.82132972324304!3d43.3243949711196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9e0fbeac5b01%3A0x3d9d4c4d0b9e3b97!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1689692597590!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/Tr1R44VJ3ytfuZVQ6?sre=Stores_LP_Hudsons_Bay_Langley_Willowbrook_Mall_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Nanaimo Woodgrove Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     6631 North Island Highway<br />
//                     Nanaimo, BC V9T 4T7
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title6 desc6"
//                     >
//                       <title id="title6">Zellers Circular Logo</title>
//                       <desc id="desc6">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+12503903141"
//                     >250-390-3141</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/m8WruupK5DhNRS26A"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Nanaimo Woodgrove Centre"
//                     alt="Map showing the location of Hudson's Bay Nanaimo Woodgrove Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.1461109352404!2d-124.05100792297759!3d49.23571897138593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548898c92b576861%3A0xfd1275dab33eea1b!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1689693022005!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/FhbUkEQJmziyJBYZA?sre=Stores_LP_Hudsons_Bay_Nanaimo_Woodgrove_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Penticton Cherry Lane Shopping Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     2111 Main Street<br />
//                     Penticton, BC V2A 6V1
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title7 desc7"
//                     >
//                       <title id="title7">Zellers Circular Logo</title>
//                       <desc id="desc7">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Main Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+12504931900"
//                     >250-493-1900</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/x4bvw3k4shWocvLx7"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Penticton Cherry Lane Shopping Centre"
//                     alt="Map showing the location of Hudson's Bay Penticton Cherry Lane Shopping Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.6009351656817!2d-119.58783622296627!3d49.47315457142204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548289ea9aa7a4a1%3A0xf2c21f741b40d52!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1689693323073!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/hCfTJAH8UfVDPFiT9?sre=Stores_LP_Hudsons_Bay_Penticton_Cherry_Lane_Shopping_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Prince George Parkwood Place
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     1600 15 Avenue<br />
//                     Prince George, BC V2L 3X3
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title8 desc8"
//                     >
//                       <title id="title8">Zellers Circular Logo</title>
//                       <desc id="desc8">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+12505630211"
//                     >250-563-0211</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/QBLQHUgkMncd7D5Z8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Prince George Parkwood Place"
//                     alt="Map showing the location of Hudson's Bay Prince George Parkwood Place"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.172249973629!2d-122.76221982274977!3d53.91091497245839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5388991c2558f36d%3A0x5490487bc8f19c73!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1689693586185!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/fdg8FKXjV2ucRkB56?sre=Stores_LP_Hudsons_Bay_Prince_George_Parkwood_Place_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Victoria Bay Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     1150 Douglas Street<br />
//                     Victoria, BC V8W 2C8
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title9 desc9"
//                     >
//                       <title id="title9">Zellers Circular Logo</title>
//                       <desc id="desc9">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+12503851311"
//                     >250-385-1311</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/ojfniY9z1PXjpxCe9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Victoria Bay Centre"
//                     alt="Map showing the location of Hudson's Bay Victoria Bay Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.6300327801036!2d-123.36962062301545!3d48.42524667127657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f749abf640e6d%3A0xf97275e5174cdfa3!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1689693842932!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/5dJ3vDm9B9BjcjM68?sre=Stores_LP_Hudsons_Bay_Victoria_Bay_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Coquitlam Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     2929 Barnet Highway<br />
//                     Coquitlam, BC V3B 0G2
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title10 desc10"
//                     >
//                       <title id="title10">Zellers Circular Logo</title>
//                       <desc id="desc10">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+16044641411"
//                     >604-464-1411</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/qwkgUPrTWC3bqwKG6"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Coquitlam Centre"
//                     alt="Map showing the location of Hudson's Bay Coquitlam Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.8535929320783!2d-122.80265112315553!3d49.27917137100231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548678cb65bda79d%3A0x2b927fa6d01be402!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695215186832!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/aVSpXbKjwW6LRtMr6?sre=Stores_LP_Hudsons_Bay_Coquitlam_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Victoria Mayfair Shopping Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     3125 Douglas Street<br />
//                     Victoria, BC V8Z 3K3
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title11 desc11"
//                     >
//                       <title id="title11">Zellers Circular Logo</title>
//                       <desc id="desc11">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Lower Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+12503863322"
//                     >250-386-3322</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/7pVYeXRrN34b718L9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Victoria Mayfair Shopping Centre"
//                     alt="Map showing the location of Hudson's Bay Victoria Mayfair Shopping Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.538798560696!2d-123.3709541231922!3d48.446190829625294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f739d4d1fdf8b%3A0xe1b576dd19cd1320!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695215459241!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/NbVLpdKp9mq592yG6?sre=Stores_LP_Hudsons_Bay_Victoria_Mayfair_Shopping_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Burnaby Metropolis At Metrotown
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     4850 Kingsway<br />
//                     Burnaby, BC V5H 4P2
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title12 desc12"
//                     >
//                       <title id="title12">Zellers Circular Logo</title>
//                       <desc id="desc12">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+16044361196"
//                     >604-436-1196</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/JfqX7Yo4NH7HZMpt9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Burnaby Metropolis At Metrotown"
//                     alt="Map showing the location of Hudson's Bay Burnaby Metropolis At Metrotown"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.669373132499!2d-122.99839182315783!3d49.22579707478037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486765a2310592d%3A0xe868aae2b908a55c!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695215787184!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/fAQRNZfSCpHLCruJ8?sre=Stores_LP_Hudsons_Bay_Burnaby_Metropolis_At_Metrotown_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Kelowna Orchard Park Shopping Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     2271 Harvey Avenue<br />
//                     Kelowna, BC V1Y 6H3
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title13 desc13"
//                     >
//                       <title id="title13">Zellers Circular Logo</title>
//                       <desc id="desc13">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Main Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+12508602483"
//                     >250-860-2483</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/tTxheDdrCD9gyaQV9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Kelowna Orchard Park Shopping Centre"
//                     alt="Map showing the location of Hudson's Bay Kelowna Orchard Park Shopping Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20567.985846507265!2d-119.47684812089842!3d49.88005979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8cc836440623%3A0xa48fe96ad5f135fe!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695215994300!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/Tb3CFEKJhPVBkbLc7?sre=Stores_LP_Hudsons_Bay_Kelowna_Orchard_Park_Shopping_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay West Vancouver Park Royal Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     725 Park Royal North<br />
//                     Vancouver, BC V7T 1H9
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title14 desc14"
//                     >
//                       <title id="title14">Zellers Circular Logo</title>
//                       <desc id="desc14">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+16049251411"
//                     >604-925-1411</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/fAiHifHeUfNK7uM2A"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay West Vancouver Park Royal Centre"
//                     alt="Map showing the location of Hudson's Bay West Vancouver Park Royal Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.2628999677204!2d-123.13842592315335!3d49.328241267526394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54866e2124e14b3d%3A0x1af0d41d43e76f8e!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695216208337!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/vvp27xkQt9WJhFnn7?sre=Stores_LP_Hudsons_Bay_West_Vancouver_Park_Royal_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Richmond Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     6060 Minoru Boulevard<br />
//                     Richmond, BC V6Y 1Y2
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title15 desc15"
//                     >
//                       <title id="title15">Zellers Circular Logo</title>
//                       <desc id="desc15">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Main Level L1</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+16042733844"
//                     >604-273-3844</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/Yq6KKnzzSiadg1Wa7"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Richmond Centre"
//                     alt="Map showing the location of Hudson's Bay Richmond Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.6544207903803!2d-123.14103412316045!3d49.169167378785446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54860acc9b16de7b%3A0x29e407b978d42687!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695216414951!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/3sCLtgjxX8B133Ux7?sre=Stores_LP_Hudsons_Bay_Richmond_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Vernon Village Green Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     4900 27 Street<br />
//                     Vernon, BC V1T 7G7
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title16 desc16"
//                     >
//                       <title id="title16">Zellers Circular Logo</title>
//                       <desc id="desc16">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Main Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+12505455331"
//                     >250-545-5331</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/kXTFiv98BNc6K2ja6"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Vernon Village Green Centre"
//                     alt="Map showing the location of Hudson's Bay Vernon Village Green Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d658188.6120491495!2d-120.11557960354438!3d49.87910139023264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537dd88f0047a3cb%3A0x9be0865208c6abd6!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695216592660!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/xxBnGbXL4MqtSmL27?sre=Stores_LP_Hudsons_Bay_Vernon_Village_Green_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>
//             </section>
//             <!-- END OF BC -->

//             <!-- START OF AB -->
//             <section
//               class="ed-container--tab"
//               id="tab2"
//               role="tabpanel"
//               aria-labelledby="tab2-tab"
//               tabindex="0"
//               hidden
//             >
//               <header class="ed-container--header">
//                 <hr />
//                 <h2 class="ed-type--h2">Alberta</h2>
//               </header>

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Edmonton Kingsway Mall
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     109 Street Northwest<br />
//                     Edmonton, AB T5G 3A6
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title17 desc17"
//                     >
//                       <title id="title17">Zellers Circular Logo</title>
//                       <desc id="desc17">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 2</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+17804797100"
//                     >780-479-7100</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/T6aa2kaF5iY1C3co9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Edmonton Kingsway Mall"
//                     alt="Map showing the location of Hudson's Bay Edmonton Kingsway Mall"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.8373693886265!2d-113.50761092294496!3d53.56067055866518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a023ba001a1dd3%3A0xb6c51e1ac97cccdc!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1683213022825!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/2TphrfUobWig1A6S9?sre=Stores_LP_Hudsons_Bay_Edmonton_Kingsway_Mall_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Medicine Hat Mall
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     3292 Dunmore Road Southeast<br />
//                     Medicine Hat, AB T1B 2R4
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title18 desc18"
//                     >
//                       <title id="title18">Zellers Circular Logo</title>
//                       <desc id="desc18">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 1</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14035267888"
//                     >403-526-7888</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/igc8ZgbFJnUkNk5n9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Medicine Hat Mall"
//                     alt="Map showing the location of Hudson's Bay Medicine Hat Mall"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.3373599860856!2d-110.64798072310805!3d50.00503171933444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53132c5a2e7e67cf%3A0x581859dec84d6e9c!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1683213619610!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/4vhed1GjhspbHLDF9?sre=Stores_LP_Hudsons_Bay_Medicine_Hat_Mall_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Calgary Sunridge Mall
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     2525 36 Street Northeast<br />
//                     Calgary, AB T1Y 5S4
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title19 desc19"
//                     >
//                       <title id="title19">Zellers Circular Logo</title>
//                       <desc id="desc19">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 2</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14032321169"
//                     >403-232-1169</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/2yT8RShYsRAL2NpZ9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Calgary Sunridge Mall"
//                     alt="Map showing the location of Hudson's Bay Calgary Sunridge Mall"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.799701460318!2d-113.9871365230599!3d51.075247442180924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537164c5399da23b%3A0xe3f4b6440af56171!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1683214011084!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/QS3CVaBKJ6itY3d1A?sre=Stores_LP_Hudsons_Bay_Calgary_Sunridge_Mall_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Melcor Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     200 4 Ave South<br />
//                     Lethbridge, AB T1J 4C8
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title20 desc20"
//                     >
//                       <title id="title20">Zellers Circular Logo</title>
//                       <desc id="desc20">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14033293131"
//                     >403-329-3131</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/GCE5cvvEHWef5HZz9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Melcor Centre"
//                     alt="Map showing the location of Hudson's Bay Melcor Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2580.912212514401!2d-112.84498592295587!3d49.69362597145756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536e87d1fa6468e5%3A0xfd9a4750fbb7307e!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1689694374673!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/6PSLdnSZqNUzoz8H6?sre=Stores_LP_Hudsons_Bay_Lethbridge_Centre_Mall_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Red Deer Bower Place
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     4900 Molly Bannister Drive<br />
//                     Red Deer, AB T4R 1N9
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title21 desc21"
//                     >
//                       <title id="title21">Zellers Circular Logo</title>
//                       <desc id="desc21">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Main Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14033472211"
//                     >403-347-2211</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/2cAj8wMqtTwPW8Bw7"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Red Deer Bower Place"
//                     alt="Map showing the location of Hudson's Bay Red Deer Bower Place"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.009958348936!2d-113.8146805228327!3d52.24320277198986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537456bdb05dde41%3A0xef62fd2b62ffda75!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1689695341229!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/1utB75JAs9Q2q3tG9?sre=Stores_LP_Hudsons_Bay_Red_Deer_Bower_Place_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay St. Albert Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     375 Saint Albert Trail<br />
//                     St. Albert, AB T8N 3K8
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title22 desc22"
//                     >
//                       <title id="title22">Zellers Circular Logo</title>
//                       <desc id="desc22">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Main Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+17804585800"
//                     >780-458-5800</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/JUMmDF3VFM1McVMr9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay St. Albert Centre"
//                     alt="Map showing the location of Hudson's Bay St. Albert Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2365.2940328303744!2d-113.62591392276333!3d53.641729172376486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a02f3faeac78a1%3A0x2cbff7976199888c!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1689695579286!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/J97XCqjfurtKX2ZL6?sre=Stores_LP_Hudsons_Bay_St_Albert_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Calgary Downtown
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     200 8 Avenue Southwest<br />
//                     Calgary, AB T2P 1B5
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title23 desc23"
//                     >
//                       <title id="title23">Zellers Circular Logo</title>
//                       <desc id="desc23">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level L3</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14032620345"
//                     >403-262-0345</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/bHURGouHiJJF4oWVA"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Calgary Downtown"
//                     alt="Map showing the location of Hudson's Bay Calgary Downtown"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.3581785010315!2d-114.06870672307612!3d51.04647384427042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fe6df88c401%3A0x712a13ed85439703!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695217157062!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/T3DdciLFGJ3G9be77?sre=Stores_LP_Hudsons_Bay_Calgary_Downtown_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Calgary Chinook Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     6455 Macleod Trail Southwest<br />
//                     Calgary, AB T2H 0L1
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title24 desc24"
//                     >
//                       <title id="title24">Zellers Circular Logo</title>
//                       <desc id="desc24">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14032556121"
//                     >403-255-6121</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/RTZXkym5NqSL2RWZ7"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Calgary Chinook Centre"
//                     alt="Map showing the location of Hudson's Bay Calgary Chinook Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.035931979889!2d-114.07747712307827!3d50.997008147860285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170ff120e74b1%3A0x964b7bffd360d343!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695217361558!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/uKdpkVbRDbuRmRWk6?sre=Stores_LP_Hudsons_Bay_Calgary_Chinook_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Calgary Market Mall
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     3625 Shaganappi Trail Northwest<br />
//                     Calgary, AB T3A 0E2
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title25 desc25"
//                     >
//                       <title id="title25">Zellers Circular Logo</title>
//                       <desc id="desc25">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14032861220"
//                     >403-286-1220</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/dMhh3tTHtpEmmoRD9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Calgary Market Mall"
//                     alt="Map showing the location of Hudson's Bay Calgary Market Mall"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.200480210029!2d-114.15892452307429!3d51.08630754137774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f1dd552d707%3A0x15dd0d39815706ed!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695217534962!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/E5npgteTemt475PG7?sre=Stores_LP_Hudsons_Bay_Calgary_Market_Mall_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Calgary Southcentre Mall
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     100 Anderson Road Southeast<br />
//                     Calgary, AB T2J 3V1
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title26 desc26"
//                     >
//                       <title id="title26">Zellers Circular Logo</title>
//                       <desc id="desc26">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14032789520"
//                     >403-278-9520</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/9CJEa1XYzjvyq7EB7"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Calgary Southcentre Mall"
//                     alt="Map showing the location of Hudson's Bay Calgary Southcentre Mall"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.4204262670287!2d-114.07048222308035!3d50.95293065105702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537176cbc130bedb%3A0x2a4705492fb8fd6d!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695217737733!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/AezJeWZECwomWqCq9?sre=Stores_LP_Hudsons_Bay_Calgary_Southcentre_Mall_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Edmonton Southgate Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     5015 111th Street Northwest<br />
//                     Edmonton, AB T6H 4M7
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title27 desc27"
//                     >
//                       <title id="title27">Zellers Circular Logo</title>
//                       <desc id="desc27">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+17804359211"
//                     >780-435-9211</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/2gitzeYMhCRxvh2KA"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Edmonton Southgate Centre"
//                     alt="Map showing the location of Hudson's Bay Edmonton Southgate Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.101033004931!2d-113.5158383229627!3d53.48452456437529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01f4710805c17%3A0x60f0eee8d042f86f!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695217923873!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/N9ZHWGns89JHkCYy5?sre=Stores_LP_Hudsons_Bay_Edmonton_Southgate_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay West Edmonton Mall
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     8882 170 Street Northwest<br />
//                     Edmonton, AB T5T 3J7
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title28 desc28"
//                     >
//                       <title id="title28">Zellers Circular Logo</title>
//                       <desc id="desc28">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+17804441550"
//                     >780-444-1550</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/8HyHb2dCnoSTFbFv8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay West Edmonton Mall"
//                     alt="Map showing the location of Hudson's Bay West Edmonton Mall"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.9880962338493!2d-113.62040732296083!3d53.52226946154557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0205978313b13%3A0x99e2ec603f108ac9!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695218097333!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/k7DVaZfXJdEsV3we8?sre=Stores_LP_Hudsons_Bay_West_Edmonton_Mall_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <!-- TODO: Look into whether or not this has a Zellers location. -->
//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Londonderry Mall
//                   </h3>
//                   <p class="ed-type--p store-address ed-util-mb--1pnt5">
//                     137th Ave & 66th Street<br />
//                     Edmonton, AB T5C3C8
//                   </p>
//                   <a class="store-phone ed-type--link" href="tel:+17804782931"
//                     >780-478-2931</a
//                   >
//                   <p class="ed-util-pt--1pnt5">
//                     <strong
//                       >Hudson's Bay Londonderry is now offering outlet prices on
//                       everything from home and footwear to fashion and
//                       accessories. A different selection from your favourite
//                       brands awaits you each time you visit, so visit us
//                       often.</strong
//                     >
//                   </p>
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/JjUanzimmyV5gjgj9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Londonderry Mall"
//                     alt="Map showing the location of Hudson's Bay Londonderry Mall"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2367.5391881242335!2d-113.44784092238726!3d53.60168345558681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a023532e7797c9%3A0x3fc9ceecd7bad3b8!2sHudson&#39;s%20Bay%2C%20Clearance%20Outlet%20Pricing!5e0!3m2!1sen!2sca!4v1703101156513!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/5FK9VV6vqQSjV5268"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>
//             </section>
//             <!-- END OF AB -->

//             <!-- START OF SK -->
//             <section
//               class="ed-container--tab"
//               id="tab3"
//               role="tabpanel"
//               aria-labelledby="tab3-tab"
//               tabindex="0"
//               hidden
//             >
//               <header class="ed-container--header">
//                 <hr />
//                 <h2 class="ed-type--h2">Saskatchewan</h2>
//               </header>

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Saskatoon Midtown Plaza
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     201 1 Avenue South<br />
//                     Saskatoon, SK S7K 3M1
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title29 desc29"
//                     >
//                       <title id="title29">Zellers Circular Logo</title>
//                       <desc id="desc29">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 2</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+13062427611"
//                     >306-242-7611</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/zBBjHotTCvAt542x5"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Saskatoon Midtown Plaza"
//                     alt="Map showing the location of Hudson's Bay Saskatoon Midtown Plaza"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.305540264419!2d-106.66939382301173!3d52.12876336512144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6d7ca07a489%3A0x1f8a0d3067556566!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1683214412435!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/q5pnq1st3q8fSjmw7?sre=Stores_LP_Hudsons_Bay_Saskatoon_Midtown_Plaza_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Regina Cornwall Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     2150 11th Avenue<br />
//                     Regina, SK S4P 0J5
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title30 desc30"
//                     >
//                       <title id="title30">Zellers Circular Logo</title>
//                       <desc id="desc30">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+13065258511"
//                     >306-525-8511</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/wukUvFaiV3nohDdx7"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Regina Cornwall Centre"
//                     alt="Map showing the location of Hudson's Bay Regina Cornwall Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4923607903643!2d-104.61479702291979!3d50.45055557159225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e4696f8d8a1%3A0x5a3ceede143cc22f!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1689699661189!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/C1xad7gXKjwm9yHe6?sre=Stores_LP_Hudsons_Bay_Regina_Cornwall_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>
//             </section>
//             <!-- END OF SK -->

//             <!-- START OF MB -->
//             <section
//               class="ed-container--tab"
//               id="tab4"
//               role="tabpanel"
//               aria-labelledby="tab4-tab"
//               tabindex="0"
//               hidden
//             >
//               <header class="ed-container--header">
//                 <hr />
//                 <h2 class="ed-type--h2">Manitoba</h2>
//               </header>

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Winnipeg St. Vital Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     1225 St. Mary's Road<br />
//                     Winnipeg, MB R2M 5E5
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title31 desc31"
//                     >
//                       <title id="title31">Zellers Circular Logo</title>
//                       <desc id="desc31">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 2</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+12042551227"
//                     >204-255-1227</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/NkqCCs8nBgC9pRti9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Winnipeg St. Vital Centre"
//                     alt="Map showing the location of Hudson's Winnipeg St. Vital Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.7816986716402!2d-97.11428378754866!3d49.82776803188309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea7669a01f2f7b%3A0x277aa494ff6cb627!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1683215005193!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/RhVNLEub5uJe1TML7?sre=Stores_LP_Hudsons_Bay_Winnipeg_St_Vital_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Winnipeg Polo Park
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     1485 Portage Avenue<br />
//                     Winnipeg, MB R3G 0W4
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title32 desc32"
//                     >
//                       <title id="title32">Zellers Circular Logo</title>
//                       <desc id="desc32">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Lower Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+12049753228"
//                     >204-975-3228</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/zU9jdzjgn1471bgp8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Winnipeg Polo Park"
//                     alt="Map showing the location of Hudson's Bay Winnipeg Polo Park"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570.7122439931795!2d-97.2017167231286!3d49.88543022788491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea737ee1b6bf43%3A0xfa60ade81b167557!2zSHVkc29u4oCZcyBCYXk!5e0!3m2!1sen!2sca!4v1695218485917!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/dztWw5iCq2rWgF419?sre=Stores_LP_Hudsons_Bay_Winnipeg_Polo_Park_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>
//             </section>
//             <!-- END OF MB -->

//             <!-- START OF ON -->
//             <section
//               class="ed-container--tab"
//               id="tab5"
//               role="tabpanel"
//               aria-labelledby="tab5-tab"
//               tabindex="0"
//               hidden
//             >
//               <header class="ed-container--header">
//                 <hr />
//                 <h2 class="ed-type--h2">Ontario</h2>
//               </header>

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Mississauga Erin Mills Town Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     5100 Erin Mills Parkway<br />
//                     Mississauga, ON L5M 4Z5
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title33 desc33"
//                     >
//                       <title id="title33">Zellers Circular Logo</title>
//                       <desc id="desc33">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 2</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+19058208300"
//                     >905-820-8300</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/Fz66Drdtw82oS7UJ9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Mississauga Erin Mills Town Centre"
//                     alt="Map showing the location of Hudson's Bay Mississauga Erin Mills Town Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.2463429730965!2d-79.71489838781346!3d43.55974975834901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b418bd5706bd5%3A0x2ad2f01c59c3642a!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1683215538525!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/jL5dRqY8gMkpd1Lb7?sre=Stores_LP_Hudsons_Bay_Mississauga_Erin_Mills_Town_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay London White Oaks Mall
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     1105 Wellington Road<br />
//                     London, ON N6E 1V4
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title34 desc34"
//                     >
//                       <title id="title34">Zellers Circular Logo</title>
//                       <desc id="desc34">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 2</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+15196854100"
//                     >519-685-4100</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/UQvLY7SgVEn4NFSR6"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay London White Oaks Mall"
//                     alt="Map showing the location of Hudson's Bay London White Oaks Mall"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.2447058325456!2d-81.22623778783834!3d42.9309677987215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef3969b1d4b31%3A0xd53e6c4f88c07464!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1683223328522!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/Wxti7zrst6A371FFA?sre=Stores_LP_Hudsons_Bay_London_White_Oaks_Mall_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Scarborough Town Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     300 Borough Drive<br />
//                     Toronto, ON M1P 4P5
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title35 desc35"
//                     >
//                       <title id="title35">Zellers Circular Logo</title>
//                       <desc id="desc35">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 3</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14162960555"
//                     >416-296-0555</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/1PMLFtHZcQtLLk5t8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Scarborough Town Centre"
//                     alt="Map showing the location of Hudson's Bay Scarborough Town Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.8406691049995!2d-79.26201128780488!3d43.77616614434798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1a46b5d5011%3A0xbc08efcd32d82e15!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1683223565072!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/XPraKdvUESez5tVB6?sre=Stores_LP_Hudsons_Bay_Scarborough_Town_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay St. Catharines Pen Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     221 Glendale Avenue<br />
//                     St. Catharines, ON L2T 2K9
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title36 desc36"
//                     >
//                       <title id="title36">Zellers Circular Logo</title>
//                       <desc id="desc36">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 1</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+19056884441"
//                     >905-688-4441</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/uyr2wJExYF7rJjp96"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay St. Catharines Pen Centre"
//                     alt="Map showing the location of Hudson's Bay St. Catharines Pen Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d370650.71741620364!2d-79.65355176101338!3d43.466677757189665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d350221dd734f9%3A0xccb3a5f123641dd8!2sThe%20Pen%20Centre!5e0!3m2!1sen!2sca!4v1683224181234!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/MAPAnwhK9mNJ7xpdA?sre=Stores_LP_Hudsons_Bay_St_Catharines_Pen_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Cambridge Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     355 Hespeler Road<br />
//                     Cambridge, ON N1R 6B3
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title37 desc37"
//                     >
//                       <title id="title37">Zellers Circular Logo</title>
//                       <desc id="desc37">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 2</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+15196224919"
//                     >519-622-4919</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/DGqZiz2gkaqTnvqv9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Cambridge Centre"
//                     alt="Map showing the location of Hudson's Bay Cambridge Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.157738459462!2d-80.32361108782011!3d43.39463236899471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b883335f49af7%3A0xe16a07ca9a8b7fac!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1683224469273!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/71t8VJaLKTNFkDm97?sre=Stores_LP_Hudsons_Bay_Cambridge_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Ottawa Rideau
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     73 Rideau Street<br />
//                     Ottawa, ON K1N 5W8
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title38 desc38"
//                     >
//                       <title id="title38">Zellers Circular Logo</title>
//                       <desc id="desc38">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 3</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+16132417511"
//                     >613-241-7511</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/KrTjWD4L1nqKRbeV8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Ottawa Rideau"
//                     alt="Map showing the location of Hudson's Bay Ottawa Rideau"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.1564595443124!2d-75.6925389!3d45.426347299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0501eda861c1%3A0x83ba8e1b1520fc7e!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1703118229849!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/3eEEedyfth26HujNA?sre=Stores_LP_Hudsons_Bay_Ottawa_Rideau_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Ottawa St. Laurent Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     1200 St Laurent Boulevard<br />
//                     Ottawa, ON K1K 3B8
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title39 desc39"
//                     >
//                       <title id="title39">Zellers Circular Logo</title>
//                       <desc id="desc39">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 2</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+16137486105"
//                     >613-748-6105</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/K7kFneK3cmgx4NWT8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Ottawa St. Laurent Centre"
//                     alt="Map showing the location of Hudson's Bay Ottawa St. Laurent Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.3745615680245!2d-75.64128598773814!3d45.42195033613549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0f8686aaaaab%3A0xcbda6c7940e73de1!2sThe%20bay%2C%20Hudson&#39;s%20Bay%2C%20St.%20Laurent%20Shopping%20Centre!5e0!3m2!1sen!2sca!4v1683225000990!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/pArykJrbpoL1SMoo7?sre=Stores_LP_Hudsons_Bay_Ottawa_St_Laurent_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Kingston Cataraqui Town Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     945 Gardiners Road<br />
//                     Kingston, ON K7M 7H4
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title40 desc40"
//                     >
//                       <title id="title40">Zellers Circular Logo</title>
//                       <desc id="desc40">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 1</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+16133843888"
//                     >613-384-3888</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/B7AnBzZM3ttvMn4g6"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Kingston Cataraqui Town Centre"
//                     alt="Map showing the location of Hudson's Bay Kingston Cataraqui Town Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2857.5919335072267!2d-76.57291648778563!3d44.256640413072525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2ac6b29c2fa3b%3A0xa54e064018a0b184!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1683225387932!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/uQHUzLhVqUFEmewX9?sre=Stores_LP_Hudsons_Bay_Kingston_Cataraqui_Town_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Brampton Bramalea City Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     25 Peel Centre Drive<br />
//                     Brampton, ON L6T 3R5
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title41 desc41"
//                     >
//                       <title id="title41">Zellers Circular Logo</title>
//                       <desc id="desc41">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+19057935100"
//                     >905-793-5100</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/CtsoTiFRcrSDvLtN9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Brampton Bramalea City Centre"
//                     alt="Map showing the location of Hudson's Bay Brampton Bramalea City Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.706587560676!2d-79.72358262338999!3d43.71664634832441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3de690000001%3A0x4f4a6ae9b9005b75!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695214818936!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/JQuFKSRPWQLshoLR8?sre=Stores_LP_Hudsons_Bay_Brampton_Bramalea_City_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Queen Street Toronto
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     176 Yonge Street<br />
//                     Toronto, ON M5C 2L7
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title42 desc42"
//                     >
//                       <title id="title42">Zellers Circular Logo</title>
//                       <desc id="desc42">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Lower Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14168619111"
//                     >416-861-9111</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/1uyYCtL3ZHLzXd5R8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Queen Street Toronto"
//                     alt="Map showing the location of Hudson's Bay Queen Street Toronto"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.831740016682!2d-79.38271628780986!3d43.651668952408755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb3338e08f99%3A0x3aa44f5e84289e87!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1683230766980!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/opnYapGrppYYhX4z9?sre=Stores_LP_Hudsons_Bay_Queen_Street_Toronto_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Windsor Devonshire Mall
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     3030 Howard Avenue<br />
//                     Windsor, ON N8X 3Y8
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title43 desc43"
//                     >
//                       <title id="title43">Zellers Circular Logo</title>
//                       <desc id="desc43">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+15199664666"
//                     >519-966-4666</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/SEtbmLreEsTazRfq5"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Windsor Devonshire Mall"
//                     alt="Map showing the location of Hudson's Bay Windsor Devonshire Mall"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.1283735497427!2d-83.00371692328734!3d42.275782971200826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2c11e44dab1b%3A0xf9b99e42be5855c2!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1689700697890!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/YhWamg7KQ9z7nbEc8?sre=Stores_LP_Hudsons_Bay_Windsor_Devonshire_Mall_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Kitchener Fairview Park
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     3050 Kingsway Drive<br />
//                     Kitchener, ON N2C 2J7
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title44 desc44"
//                     >
//                       <title id="title44">Zellers Circular Logo</title>
//                       <desc id="desc44">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Lower Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+15198941111"
//                     >519-894-1111</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/8PLdqPSH74eVEL4H7"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Kitchener Fairview Park"
//                     alt="Map showing the location of Hudson's Bay Kitchener Fairview Park"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.779295216114!2d-80.4432759232388!3d43.42343777111394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b8ad95aaaaaab%3A0x119a56dc3dec8d6e!2zSHVkc29u4oCZcyBCYXk!5e0!3m2!1sen!2sca!4v1689701034160!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/m1gVPVPTGnMdHWBP8?sre=Stores_LP_Hudsons_Bay_Kitchener_Fairview_Park_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Barrie Georgian Mall
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     465 Bayfield Street<br />
//                     Barrie, ON L4M 4Z9
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title45 desc45"
//                     >
//                       <title id="title45">Zellers Circular Logo</title>
//                       <desc id="desc45">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Main Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+17057262200"
//                     >705-726-2200</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/NLMYLCxFDT9VjBQj6"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Barrie Georgian Mall"
//                     alt="Map showing the location of Hudson's Bay Barrie Georgian Mall"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.0447726308025!2d-79.70931792319617!3d44.411726971076256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882aa2efc1250f05%3A0x7ce81dc60c528f7a!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1689701752544!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/cHXKb9rVENVUjavu8?sre=Stores_LP_Hudsons_Bay_Barrie_Georgian_Mall_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Burlington Mapleview Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     900 Maple Avenue<br />
//                     Burlington, ON L7S 2J8
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title46 desc46"
//                     >
//                       <title id="title46">Zellers Circular Logo</title>
//                       <desc id="desc46">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+19056810030"
//                     >905-681-0030</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/TUPpcCS9V5rTbBLg7"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Burlington Mapleview Centre"
//                     alt="Map showing the location of Hudson's Bay Burlington Mapleview Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.5157809045877!2d-79.82132972324304!3d43.3243949711196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9e0fbeac5b01%3A0x3d9d4c4d0b9e3b97!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1689702038630!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/mEmzmrz4FAEdedaX9?sre=Stores_LP_Hudsons_Bay_Burlington_Mapleview_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Pickering Town Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     1355 Kingston Road<br />
//                     Pickering, ON L1V 2B8
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title47 desc47"
//                     >
//                       <title id="title47">Zellers Circular Logo</title>
//                       <desc id="desc47">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Lower Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+19058378691"
//                     >905-837-8691</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/3RYL9fQEXATBJcU28"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Pickering Town Centre"
//                     alt="Map showing the location of Hudson's Bay Pickering Town Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.0410892001937!2d-79.08777692322117!3d43.83424597109399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4dedfb67f6c67%3A0x9035704cc4beda62!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1689702286211!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/GBbwzz63HKBqrBHt9?sre=Stores_LP_Hudsons_Bay_Pickering_Town_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Ottawa Place D'Orléans
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     110 Place D'Orléans Drive<br />
//                     Orleans, ON K1E 2L9
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title48 desc48"
//                     >
//                       <title id="title48">Zellers Circular Logo</title>
//                       <desc id="desc48">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+16138378274"
//                     >613-837-8274</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/Df47FRrxcqsLdG9G8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Ottawa Place D'Orléans"
//                     alt="Map showing the location of Hudson's Bay Ottawa Place D'Orléans"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.619587006541!2d-75.52123642314933!3d45.477466571074196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce117f04b5695d%3A0xe182772e93f9fa85!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1689702754200!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/fSVWZMVYNi29a5Zj8?sre=Stores_LP_Hudsons_Bay_Ottawa_Place_D_Orleans_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Newmarket Upper Canada Mall
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     17600 Yonge Street<br />
//                     Newmarket, ON L3Y 4Z1
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title49 desc49"
//                     >
//                       <title id="title49">Zellers Circular Logo</title>
//                       <desc id="desc49">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Lower Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+19058530986"
//                     >905-853-0986</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/ZhY4PkfhU76ETmkD7"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Newmarket Upper Canada Mall"
//                     alt="Map showing the location of Hudson's Bay Newmarket Upper Canada Mall"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.334500718135!2d-79.48997892321161!3d44.055800971085915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad1fb2905b3c5%3A0x26635fb4d96c73d9!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1689703096101!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/RWbKL4k4Jr8G74TVA?sre=Stores_LP_Hudsons_Bay_Newmarket_Upper_Canada_Mall_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Oshawa Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     419 King Street West<br />
//                     Oshawa, ON L1J 4X3
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title50 desc50"
//                     >
//                       <title id="title50">Zellers Circular Logo</title>
//                       <desc id="desc50">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+19055711211"
//                     >905-571-1211</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/dFEhc3NBr6nqe7Km7"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Oshawa Centre"
//                     alt="Map showing the location of Hudson's Bay Oshawa Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.4563968511966!2d-78.88112262321886!3d43.887813371091845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51d013ca358ef%3A0x5d0274409ce20db6!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1689703298057!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/FdQn3gXpepTYMuZe8?sre=Stores_LP_Hudsons_Bay_Oshawa_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Ottawa Bayshore Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     100 Bayshore Drive<br />
//                     Ottawa, ON K2B 8S8
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title51 desc51"
//                     >
//                       <title id="title51">Zellers Circular Logo</title>
//                       <desc id="desc51">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level L3</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+16135969810"
//                     >613-596-9810</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/GgRgtj82TLnsnP7U6"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Ottawa Bayshore Centre"
//                     alt="Map showing the location of Hudson's Bay Ottawa Bayshore Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.112263339711!2d-75.81048202332389!3d45.3465460412806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce00c3a0ab2955%3A0xf3c21f3de4a2765b!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695220712619!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/LyhfPJaasATkQUNJ7?sre=Stores_LP_Hudsons_Bay_Ottawa_Bayshore_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Toronto Centerpoint Mall
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     6500 Yonge Street<br />
//                     Toronto, ON M2M 3X4
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title52 desc52"
//                     >
//                       <title id="title52">Zellers Circular Logo</title>
//                       <desc id="desc52">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Main Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14162264202"
//                     >416-226-4202</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/84tDbjqM7Szy8xQh7"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Toronto Centerpoint Mall"
//                     alt="Map showing the location of Hudson's Bay Toronto Centerpoint Mall"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46078.02241073191!2d-79.49074574179691!3d43.79617770000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d35053adcc6fbb%3A0x73f8c8022b0094d8!2zSHVkc29u4oCZcyBCYXk!5e0!3m2!1sen!2sca!4v1695220963449!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/mtqQuQs88T4RMQTV7?sre=Stores_LP_Hudsons_Bay_Toronto_Centerpoint_Mall_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Waterloo Conestoga Mall
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     550 King Street North<br />
//                     Waterloo, ON N2L 5W6
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title53 desc53"
//                     >
//                       <title id="title53">Zellers Circular Logo</title>
//                       <desc id="desc53">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Main Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+15198846990"
//                     >519-884-6990</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/BPDafuirhNoPLCuJA"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Waterloo Conestoga Mall"
//                     alt="Map showing the location of Hudson's Bay Waterloo Conestoga Mall"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.2823030576615!2d-80.5300832233987!3d43.49644606255457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf3c399ea2b51%3A0xc3b9cfef10515b2f!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695221132358!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/5fhHSf7SspuXvEy86?sre=Stores_LP_Hudsons_Bay_Waterloo_Conestoga_Mall_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Toronto Fairview Mall
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     1800 Sheppard Avenue East<br />
//                     Toronto, ON M2J 5A7
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title54 desc54"
//                     >
//                       <title id="title54">Zellers Circular Logo</title>
//                       <desc id="desc54">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Lower Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14164912010"
//                     >416-491-2010</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/QLm9cqHvWh8K2CdC9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Toronto Fairview Mall"
//                     alt="Map showing the location of Hudson's Bay Toronto Fairview Mall"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.7797681075226!2d-79.34543962338753!3d43.77743024438654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d2f06ff485cf%3A0x1da067c6f58561cd!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695223205082!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/81pvf58qxs9z5Qds7?sre=Stores_LP_Hudsons_Bay_Toronto_Fairview_Mall_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <!-- TODO: Look into whether or not this has a Zellers location. -->
//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Richmond Hill Hillcrest Mall
//                   </h3>
//                   <p class="ed-type--p store-address ed-util-mb--1pnt5">
//                     9350 Yonge Street<br />
//                     Richmond Hill, ON L4C 5G2
//                   </p>
//                   <a class="store-phone ed-type--link" href="tel:+19058831222"
//                     >905-883-1222</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/5ym4pdBRr5YNQKoWA"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Richmond Hill Hillcrest Mall"
//                     alt="Map showing the location of Hudson's Bay Richmond Hill Hillcrest Mall"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.0459947656714!2d-79.43812472338449!3d43.85487533936308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2ba2c5555555%3A0x16c7f540be1fb19d!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695223430478!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/PMTgzbjpZQRdf3B47?sre=Stores_LP_Hudsons_Bay_Richmond_Hill_Hillcrest_Mall_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Hamilton Lime Ridge Mall
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     999 Upper Wentworth Street<br />
//                     Hamilton, ON L9A 4X5
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title55 desc55"
//                     >
//                       <title id="title55">Zellers Circular Logo</title>
//                       <desc id="desc55">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Main Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+19053188008"
//                     >905-318-8008</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/NoRRktWccUaaVFtH9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Hamilton Lime Ridge Mall"
//                     alt="Map showing the location of Hudson's Bay Hamilton Lime Ridge Mall"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.685766962228!2d-79.86475852340983!3d43.21607978059218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9a5013774afd%3A0xb93fcda1fa8efced!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695223738434!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/sLXrJ1oXj28RkMEp9?sre=Stores_LP_Hudsons_Bay_Hamilton_Lime_Ridge_Mall_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Markham Markville Shopping Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     5000 Highway 7<br />
//                     Markham, ON L3R 4M9
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title56 desc56"
//                     >
//                       <title id="title56">Zellers Circular Logo</title>
//                       <desc id="desc56">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+19055131770"
//                     >905-513-1770</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/i5wYCWTRz6GgDTGM7"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Markham Markville Shopping Centre"
//                     alt="Map showing the location of Hudson's Bay Markham Markville Shopping Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.3485966881585!2d-79.2888074233839!3d43.86932853842474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d6779aaaaaab%3A0xccb70f606aa53f14!2zSHVkc29u4oCZcyBCYXk!5e0!3m2!1sen!2sca!4v1695223898928!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/3vWf1P2sxySW88c88?sre=Stores_LP_Hudsons_Bay_Markham_Markville_Shopping_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay London Masonville Place
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     1680 Richmond Street<br />
//                     London, ON N6G 3Y9
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title57 desc57"
//                     >
//                       <title id="title57">Zellers Circular Logo</title>
//                       <desc id="desc57">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Main Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+15196750080"
//                     >519-675-0080</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/vyYc6SaNuNXqqLJa6"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay London Masonville Place"
//                     alt="Map showing the location of Hudson's Bay London Masonville Place"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.7340131609294!2d-81.28159122341732!3d43.0259854927704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882eee435aaaaaab%3A0x53ad7cab90d4b375!2zSHVkc29u4oCZcyBCYXk!5e0!3m2!1sen!2sca!4v1695224079031!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/dmJNCrHSMc7vssWL6?sre=Stores_LP_Hudsons_Bay_London_Masonville_Place_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Oakville Place
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     240 Leighland Avenue<br />
//                     Oakville, ON L6H 3H6
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title58 desc58"
//                     >
//                       <title id="title58">Zellers Circular Logo</title>
//                       <desc id="desc58">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+19058424811"
//                     >905-842-4811</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/qKFKXSnPE7A4PLfx6"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Oakville Place"
//                     alt="Map showing the location of Hudson's Bay Oakville Place"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.002798592016!2d-79.69007092340016!3d43.460538764869746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5cdc5a5551f7%3A0x12f64a7d1a3a2890!2zSHVkc29u4oCZcyBCYXk!5e0!3m2!1sen!2sca!4v1695224237967!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/bZoyvUXSvkuAHd4U7?sre=Stores_LP_Hudsons_Bay_Oakville_Place_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Sherway Gardens
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     25 The West Mall<br />
//                     Toronto, ON M9C 1B8
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title59 desc59"
//                     >
//                       <title id="title59">Zellers Circular Logo</title>
//                       <desc id="desc59">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Lower Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14166264711"
//                     >416-626-4711</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/o6hEavHGCjMYC7Zi9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Sherway Gardens"
//                     alt="Map showing the location of Hudson's Bay Sherway Gardens"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.765270931039!2d-79.56197912339415!3d43.61142875513078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4962cc2e3a8f%3A0xb4e3b9fff80ba22a!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695224375128!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/NkuXenLsTqRRabRd6?sre=Stores_LP_Hudsons_Bay_Sherway_Gardens_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Mississauga Square One
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     100 City Centre Drive<br />
//                     Mississauga, ON L5B 2C9
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title60 desc60"
//                     >
//                       <title id="title60">Zellers Circular Logo</title>
//                       <desc id="desc60">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Lower Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+19052707600"
//                     >905-270-7600</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/YEDjcPGqCbY1tqXM7"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Mississauga Square One"
//                     alt="Map showing the location of Hudson's Bay Mississauga Square One"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.688793019251!2d-79.64352972339493!3d43.5921981563735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4728b09b1fe7%3A0x31cf02d8c7bf69ac!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695224512554!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/2fZeKwUh879r5vG7A?sre=Stores_LP_Hudsons_Bay_Mississauga_Square_One_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Etobicoke Woodbine Centre
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     500 Rexdale Boulevard<br />
//                     Toronto, ON M9W 6K5
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title61 desc61"
//                     >
//                       <title id="title61">Zellers Circular Logo</title>
//                       <desc id="desc61">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14166746000"
//                     >416-674-6000</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/u1aXoipKhadTBZuWA"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Etobicoke Woodbine Centre"
//                     alt="Map showing the location of Hudson's Bay Etobicoke Woodbine Centre"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.5750839748357!2d-79.60143892338985!3d43.71937884814743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3a4be0d5d49f%3A0xab60f58d7b4d56ce!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695224732341!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/eN6Puk16tF986cbH8?sre=Stores_LP_Hudsons_Bay_Etobicoke_Woodbine_Centre_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Toronto Yorkdale
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     3401 Dufferin Street<br />
//                     Toronto, ON M6A 2T9
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title62 desc62"
//                     >
//                       <title id="title62">Zellers Circular Logo</title>
//                       <desc id="desc62">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Lower Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14167898011"
//                     >416-789-8011</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/wARcDSztugnr4XZf8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Toronto Yorkdale"
//                     alt="Map showing the location of Hudson's Bay Toronto Yorkdale"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.2463276037633!2d-79.45754432338961!3d43.726209447705024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b323308d83015%3A0x91690415d9309dcb!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695224868934!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/n7nXbMRLrpmnQq1t7?sre=Stores_LP_Hudsons_Bay_Toronto_Yorkdale_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <!-- TODO: Look into whether or not this has a Zellers location. -->
//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Eglinton Square Outlet
//                   </h3>
//                   <p class="ed-type--p store-address ed-util-mb--1pnt5">
//                     1 Eglinton Square<br />
//                     Toronto, ON M1L 2K2
//                   </p>
//                   <a class="store-phone ed-type--link" href="tel:+14167594771"
//                     >416-759-4771</a
//                   >
//                   <p class="ed-util-pt--1pnt5">
//                     <strong
//                       >We have permanently marked down everything from fashion
//                       and accessories to shoes and home. A different selection
//                       from your favourite brands awaits you each time you visit,
//                       so visit us often.</strong
//                     >
//                   </p>
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/uFpzBJZQoQTgtgNZ8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Eglinton Square Outlet"
//                     alt="Map showing the location of Hudson's Bay Eglinton Square Outlet"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.4042759310482!2d-79.30331192269567!3d43.722927847916544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cddccd38eb93%3A0x2a87aead80efb2a!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1703101967663!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/gnmJf1DRzPSpR2Lq8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>
//             </section>
//             <!-- END OF ON -->

//             <!-- START OF QB -->
//             <section
//               class="ed-container--tab"
//               id="tab6"
//               role="tabpanel"
//               aria-labelledby="tab6-tab"
//               tabindex="0"
//               hidden
//             >
//               <header class="ed-container--header">
//                 <hr />
//                 <h2 class="ed-type--h2">Quebec</h2>
//               </header>

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     La Baie D'Hudson Rosemère (Place)
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     401 Boulevard Labelle<br />
//                     Rosemère, QC J7A 3T2
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title63 desc63"
//                     >
//                       <title id="title63">Zellers Circular Logo</title>
//                       <desc id="desc63">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 2</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14504336991"
//                     >450-433-6991</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/mPVpBxgfMBao2Fqt9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of La Baie D'Hudson Rosemère (Place)"
//                     alt="Map showing the location of La Baie D'Hudson Rosemère (Place)"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.984707261796!2d-73.81888678772943!3d45.631043522169854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc927b3bb592b8b%3A0x5a4d507fe4b7bcc8!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1683225762398!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/Eseh5kxA5Gvo4MfN6?sre=Stores_LP_La_Baie_D_Hudson_Rosemere_Place_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     La Baie D'Hudson Anjou (Galeries)
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     7895 boulevard des Galeries d'Anjou
//                     <br />
//                     Montreal, QC H1M 1W6
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title64 desc64"
//                     >
//                       <title id="title64">Zellers Circular Logo</title>
//                       <desc id="desc64">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 1</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+15143533300"
//                     >514-353-3300</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/7rsiDuFQJaUNKp9F7"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of La Baie D'Hudson Anjou (Galeries)"
//                     alt="Map showing the location of La Baie D'Hudson Anjou (Galeries)"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.5116769662754!2d-73.56932338773079!3d45.60036052422213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91e6414914957%3A0xdfb5a38d8221c64a!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1683226405105!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/U1KzFSZQuhBA2jft7?sre=Stores_LP_La_Baie_D_Hudson_Anjou_Galeries_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     La Baie D'Hudson Sherbrooke Carrefour De L'Estrie
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     3000 boulevard de Portland<br />
//                     Sherbrooke, QC J1L 1J8
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title65 desc65"
//                     >
//                       <title id="title65">Zellers Circular Logo</title>
//                       <desc id="desc65">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level B1</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+18195632114"
//                     >819-563-2114</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/u5E4qvKYq2hDNdgT6"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of La Baie D'Hudson Sherbrooke Carrefour De L'Estrie"
//                     alt="Map showing the location of La Baie D'Hudson Sherbrooke Carrefour De L'Estrie"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.37729936112!2d-71.95288578773898!3d45.4017307374834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb7b49502b85551%3A0x4d5cbb735979567!2sHudson%20Bay!5e0!3m2!1sen!2sca!4v1683226772487!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/di9C5P9mZdtJwMpF8?sre=Stores_LP_La_Baie_D_Hudson_Sherbrooke_Carrefour_De_Lestrie_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     La Baie D'Hudson Gatineau (Les Promenades)
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     1100 Boulevard Maloney Ouest #1<br />
//                     Gatineau, QC J8T 6G3
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title66 desc66"
//                     >
//                       <title id="title66">Zellers Circular Logo</title>
//                       <desc id="desc66">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 2</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+18192437036"
//                     >819-243-7036</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/MP6LiBokvupiZAhL9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of La Baie D'Hudson Gatineau (Les Promenades)"
//                     alt="Map showing the location of La Baie D'Hudson Gatineau (Les Promenades)"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.639140369361!2d-75.69630258773581!3d45.4770727324584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050192682857%3A0xc9df5256a0e7df01!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1683228079886!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/UEF3r8bWNuCptJYr5?sre=Stores_LP_La_Baie_D_Hudson_Gatineau_Les_Promenades_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     La Baie D'Hudson Quebec-Capitale (Les Galeries)
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     5401 boulevard des Galeries<br />
//                     Quebec City, QC G2K 1N4
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title67 desc67"
//                     >
//                       <title id="title67">Zellers Circular Logo</title>
//                       <desc id="desc67">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 1</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14186275922"
//                     >418-627-5922</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/AUNUAyT4ivVNBXBYA"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of La Baie D'Hudson Quebec-Capitale (Les Galeries)"
//                     alt="Map showing the location of La Baie D'Hudson Quebec-Capitale (Les Galeries)"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.6433852197897!2d-71.30432418767917!3d46.83102314109138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb897933e1321a3%3A0x5b407c8736aa0bc2!2sLa%20Baie%20d&#39;Hudson!5e0!3m2!1sen!2sca!4v1683228343728!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/YU5kp56pT3YH5U3K8?sre=Stores_LP_La_Baie_D_Hudson_Quebec_Capitale_Les_Galeries_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     La Baie D'Hudson Brossard Mall Champlain
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     2151 Boulevard Lapinière<br />
//                     Brossard, QC J4W 2T5
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title68 desc68"
//                     >
//                       <title id="title68">Zellers Circular Logo</title>
//                       <desc id="desc68">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14504663220"
//                     >450-466-3220</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/h4cSVHvwznjLHMHZA"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of La Baie D'Hudson Brossard Mall Champlain"
//                     alt="Map showing the location of La Baie D'Hudson Brossard Mall Champlain"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.960561554334!2d-73.47550812314967!3d45.470598371074054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90570b7b5667f%3A0xde151cd31b1a0678!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1689703835666!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/tjp1ayMDm61mbvVr8?sre=Stores_LP_La_Baie_D_Hudson_Brossard_Mall_Champlain_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     La Baie D'Hudson Angrignon (Carrefour)
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     7091 Boul Newman<br />
//                     Lasalle, QC H8N 1X1
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title69 desc69"
//                     >
//                       <title id="title69">Zellers Circular Logo</title>
//                       <desc id="desc69">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Main Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+15143660825"
//                     >514-366-0825</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/AzpAWifMV8JLx2NEA"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of La Baie D'Hudson Angrignon (Carrefour)"
//                     alt="Map showing the location of La Baie D'Hudson Angrignon (Carrefour)"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.0965999048267!2d-73.62125232315067!3d45.447709471073665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc910d8d2670061%3A0x4a495055cf691c59!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1689704113623!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/5JqarqvuAc78ZciH6?sre=Stores_LP_La_Baie_D_Hudson_Angrignon_Carrefour_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     La Baie D'Hudson Rockland
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     2435 Rockland Road<br />
//                     Montreal, QC H3P 2Z3
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title70 desc70"
//                     >
//                       <title id="title70">Zellers Circular Logo</title>
//                       <desc id="desc70">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Lower Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+15147395521"
//                     >514-739-5521</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/6nz9ukw41K3Rv8eVA"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of La Baie D'Hudson Rockland"
//                     alt="Map showing the location of La Baie D'Hudson Rockland"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.1188976332073!2d-73.65143972314713!3d45.52781287107515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc918558ded10d5%3A0x31539f6ddd401559!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1689704354038!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/qwfC3JHdsrj7oPPE8?sre=Stores_LP_La_Baie_D_Hudson_Rockland_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     La Baie D'Hudson St. Bruno (Les Promenades)
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     800 boulevard des Promenades<br />
//                     St-Bruno, QC J3V 5J9
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title71 desc71"
//                     >
//                       <title id="title71">Zellers Circular Logo</title>
//                       <desc id="desc71">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14506534455"
//                     >450-653-4455</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/r6LHWdyvYZCWFezV8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of La Baie D'Hudson St. Bruno (Les Promenades)"
//                     alt="Map showing the location of La Baie D'Hudson St. Bruno (Les Promenades)"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.3047445857665!2d-73.38080442314815!3d45.503943671074644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9069769ab1f31%3A0x528540345ba0c00!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1689704593729!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/JqwK864BVoM57xNR9?sre=Stores_LP_La_Baie_D_Hudson_St_Bruno_Les Promenades_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     La Baie D'Hudson Carrefour Laval
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     3045 boulevard le Carrefour<br />
//                     Laval, QC H7T 1C7
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title72 desc72"
//                     >
//                       <title id="title72">Zellers Circular Logo</title>
//                       <desc id="desc72">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level L2</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14506871540"
//                     >450-687-1540</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/7t7WwpW5Ccr9z2Vy9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of La Baie D'Hudson Carrefour Laval"
//                     alt="Map showing the location of La Baie D'Hudson Carrefour Laval"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.903277186839!2d-73.75502512331452!3d45.57238362621339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc923c3b8ffbad3%3A0xce08d466ebc7855b!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695225464690!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/PhQkS9VDjLPT1Hp27?sre=Stores_LP_La_Baie_D_Hudson_Carrefour_Laval_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     La Baie D'Hudson Centre Laval
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     1600 boulevard le Corbusier<br />
//                     Laval, QC H7S 1Y9
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title73 desc73"
//                     >
//                       <title id="title73">Zellers Circular Logo</title>
//                       <desc id="desc73">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Main Level</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+14506888970"
//                     >450-688-8970</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/wUCKSZdKwXx4oqG4A"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of La Baie D'Hudson Centre Laval"
//                     alt="Map showing the location of La Baie D'Hudson Centre Laval"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.5071699382966!2d-73.732339623315!3d45.56023872702509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc92233707adcfd%3A0xd53babc47c04ccf8!2sThe%20Bay!5e0!3m2!1sen!2sca!4v1695225636568!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/P61reyvKWQ5oTewg6?sre=Stores_LP_La_Baie_D_Hudson_Centre_Laval_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     La Baie D'Hudson Fairview Pointe-Claire
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     6790 route Trans-Canada<br />
//                     Pointe-Claire, QC H9R 5J2
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title74 desc74"
//                     >
//                       <title id="title74">Zellers Circular Logo</title>
//                       <desc id="desc74">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level L3</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+15146974870"
//                     >514-697-4870</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/G1JkMPyXx5k4DL2c8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of La Baie D'Hudson Fairview Pointe-Claire"
//                     alt="Map showing the location of La Baie D'Hudson Fairview Pointe-Claire"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89392.0794053427!2d-73.81216487117995!3d45.56033302769438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc93cf005c9cd71%3A0x182c2263243fdc4c!2sLa%20Baie%20d&#39;Hudson!5e0!3m2!1sen!2sca!4v1695228761678!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/7GRxUnwFBQnfbCg9A?sre=Stores_LP_La_Baie_D_Hudson_Fairview_Pointe_Claire_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     La Baie D'Hudson Montréal Centre-Ville
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     585 St Catherine St West<br />
//                     Montréal, QC H3B 3Y5
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title75 desc75"
//                     >
//                       <title id="title75">Zellers Circular Logo</title>
//                       <desc id="desc75">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers Pop Up
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Upper Level L4</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+15142814422"
//                     >514-281-4422</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/XcevwBnWFysppUkE8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of La Baie D'Hudson Montréal Centre-Ville"
//                     alt="Map showing the location of La Baie D'Hudson Montréal Centre-Ville"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.29396301807!2d-73.57179162331745!3d45.504160730770934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a45a55af241%3A0x383e632ab22c0112!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1695228931664!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://maps.app.goo.gl/HpjPkZD3EBpgUNuVA?sre=Stores_LP_La_Baie_D_Hudson_Montreal_Centre_Ville_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>
//             </section>
//             <!-- END OF QB -->

//             <!-- START OF NS -->
//             <section
//               class="ed-container--tab"
//               id="tab7"
//               role="tabpanel"
//               aria-labelledby="tab7-tab"
//               tabindex="0"
//               hidden
//             >
//               <header class="ed-container--header">
//                 <hr />
//                 <h2 class="ed-type--h2">Nova Scotia</h2>
//               </header>

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Dartmouth Mic Mac Mall
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     21 Micmac Boulevard<br />
//                     Dartmouth, NS B3A 4K7
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title76 desc76"
//                     >
//                       <title id="title76">Zellers Circular Logo</title>
//                       <desc id="desc76">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 2</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+19024696680"
//                     >902-469-6680</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/aNnuwMZx7Eancj4A6"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Dartmouth Mic Mac Mall"
//                     alt="Map showing the location of Hudson's Bay Dartmouth Mic Mac Mall"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.570199490459!2d-63.562970787768194!3d44.68755638480012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a26aa2ce4794f%3A0x677277e86b7419ac!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1683228676694!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/GXFMNa5TiGy2PdFh6?sre=Stores_LP_Hudsons_Bay_Dartmouth_Mic_Mac_Mall_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>

//               <hr />

//               <div class="ed-container--store">
//                 <address class="ed-container--store__address ed-util-pr--2pnt5">
//                   <h3 class="ed-type--h3 ed-util-pb--pnt5 store-name">
//                     Hudson's Bay Sydney Mayflower Mall
//                   </h3>
//                   <p class="ed-type--p store-address">
//                     800 Grand Lake Road<br />
//                     Sydney, NS B1P 6S9
//                   </p>
//                   <div class="ed-container--zellers ed-util-py--1pnt5">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       role="img"
//                       aria-labelledby="title77 desc77"
//                     >
//                       <title id="title77">Zellers Circular Logo</title>
//                       <desc id="desc77">
//                         A red circle with a white Zellers letter Z in the
//                         center.
//                       </desc>
//                       <g clip-path="url(#clip0_634_5624)">
//                         <rect width="16" height="16" rx="8" fill="#D32027" />
//                         <path
//                           d="M15.0057 7.6657V7.66705L1.70535 15.9566L1.63057 16L0.995117 14.0634L9.14905 4.23454L10.1821 2.98939L10.196 2.97036L10.1693 2.98424L3.09302 6.25374L2.49452 4.42139L12.4758 0L13.078 1.83481V1.83616L13.0668 1.85261L13.0119 1.92762L5.7985 11.4578L5.74375 11.5262L5.83018 11.4778L14.4446 6.10138L15.0057 7.6657Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_634_5624">
//                           <rect width="16" height="16" rx="8" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <h4 class="ed-type--h4 ed-util-pl--pnt5">
//                       Zellers
//                       <span class="zellers-floor ed-util--normal ed-util--sans"
//                         >- Level 1</span
//                       >
//                     </h4>
//                   </div>
//                   <a class="store-phone ed-type--link" href="tel:+19025398350"
//                     >902-539-8350</a
//                   >
//                 </address>
//                 <div class="ed-container--store__hours ed-util-pr--2pnt5">
//                   <a
//                     class="ed-type--link"
//                     href="https://maps.app.goo.gl/TWo2K4r66uvEt17M8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Click here for store hours: link to store hours"
//                     >Click here for store hours</a
//                   >
//                 </div>
//                 <div
//                   class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
//                 >
//                   <iframe
//                     title="Map showing the location of Hudson's Bay Sydney Mayflower Mall"
//                     alt="Map showing the location of Hudson's Bay Sydney Mayflower Mall"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2764.1882304828596!2d-60.1412660877079!3d46.1469977875021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b67e3ca090a15d7%3A0x335461c9b8b2f3ad!2sHudson&#39;s%20Bay!5e0!3m2!1sen!2sca!4v1683230164446!5m2!1sen!2sca"
//                     style="border: 0"
//                     allowfullscreen
//                     loading="lazy"
//                     referrerpolicy="no-referrer-when-downgrade"
//                     width="100%"
//                     height="250"
//                   ></iframe>
//                   <a
//                     href="https://goo.gl/maps/4otjXoyGqAnzY1Cx9?sre=Stores_LP_Hudsons_Bay_Sydney_Mayflower_Mall_Get_Directions"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
//                     aria-label="Get Directions: link to map pin of store"
//                     >Get Directions &rarr;</a
//                   >
//                 </div>
//               </div>
//             </section>`;

// FRENCH
const htmlContent = `<section
              class="ed-container--tab"
              id="tab1"
              role="tabpanel"
              aria-labelledby="tab1-tab"
              tabindex="0"
            >
              <header class="ed-container--header">
                <hr />
                <h2 class="ed-type--h2">Colombie Britannique</h2>
              </header>

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson, centre-ville de Vancouver
                  </h3>
                  <p class="ed-type--p store-address">
                    674, rue Granville<br />
                    Vancouver, Colombie-Britannique V6C 1Z6
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level B1</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+16046816211"
                    >604-681-6211</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/u9wLgW1jTNGJ2MZv8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Vancouver Downtown"
                    alt="Map showing the location of Hudson's Bay Vancouver Downtown"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10410.707649029415!2d-123.117747!3d49.282519!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f1eee9af7%3A0x4fd5f4c24883576e!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716120340560!5m2!1sfr!2sca"
                    width="100%"
                    height="250"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+674+Granville+St,+Vancouver,+BC+V6C+1Z6/@49.282519,-123.117747,15z/data=!3m1!5s0x5486717f3be3bcf5:0x8c1475fead126884!4m9!4m8!1m0!1m5!1m1!1s0x5486717f1eee9af7:0x4fd5f4c24883576e!2m2!1d-123.117747!2d49.2825186!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Kamloops Aberdeen Mall
                  </h3>
                  <p class="ed-type--p store-address">
                    1320, route Transcanadienne #300<br />
                    Kamloops, Colombie-Britannique V1S 1J1
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title2 desc2"
                    >
                      <title id="title2">Zellers Circular Logo</title>
                      <desc id="desc2">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 2</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+12503728271"
                    >250-372-8271</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/w4Jw6ZH3FQfqt4Ts8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Kamloops Aberdeen Mall"
                    alt="Map showing the location of Hudson's Bay Kamloops Aberdeen Mall"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10117.816569990671!2d-120.371135!3d50.655828!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537e2c71a61a3811%3A0x79395fe87bada528!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716120688528!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+1320+Trans-Canada+Hwy+%23300,+Kamloops,+BC+V1S+1J1/@50.655828,-120.371135,15z/data=!3m1!5s0x537e2c70391cbe7f:0x8c76eb499127d0f5!4m9!4m8!1m0!1m5!1m1!1s0x537e2c71a61a3811:0x79395fe87bada528!2m2!1d-120.3711349!2d50.655828!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Surrey Guildford Town Centre
                  </h3>
                  <p class="ed-type--p store-address">
                    1400, rue 152<br />
                    Surrey, Colombie-Britannique V3R 7C1
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title3 desc3"
                    >
                      <title id="title3">Zellers Circular Logo</title>
                      <desc id="desc3">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 1</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+16045882111"
                    >604-588-2111</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/BnPMbzvYcFqYpdRG6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Surrey Guildford Town Centre"
                    alt="Map showing the location of Hudson's Bay Surrey Guildford Town Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10430.099249189394!2d-122.803034!3d49.190603!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d76cdf7274e9%3A0xd07c48383c6ed3!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716120885894!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+1400+152+St,+Surrey,+BC+V3R+7C1/@49.190603,-122.803034,15z/data=!3m1!5s0x5485d712caf937e7:0xe2f4bf465eea0e3!4m9!4m8!1m0!1m5!1m1!1s0x5485d76cdf7274e9:0xd07c48383c6ed3!2m2!1d-122.8030338!2d49.1906025!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre commercial Sevenoaks d'Abbotsford de la Baie d'Hudson
                  </h3>
                  <p class="ed-type--p store-address">
                    32900, voie South Fraser<br />
                    Abbotsford (Colombie-Britannique) V2S 5A1
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title4 desc4"
                    >
                      <title id="title4">Zellers Circular Logo</title>
                      <desc id="desc4">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 2</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+16048537711"
                    >604-853-7711</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/zQHf5HQNeXJnM2cp8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Abbotsford Sevenoaks Shopping Centre"
                    alt="Map showing the location of Hudson's Bay Abbotsford Sevenoaks Shopping Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10459.818780283455!2d-122.312724!3d49.049485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5484355c6c4ce9c5%3A0xf9cb177d10a8d636!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716467363879!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+32900+South+Fraser+Way,+Abbotsford,+BC+V2S+5A1/@49.049485,-122.312724,15z/data=!3m1!5s0x5484355c3850a441:0xb825fceca4c641c0!4m9!4m8!1m0!1m5!1m1!1s0x5484355c6c4ce9c5:0xf9cb177d10a8d636!2m2!1d-122.3134166!2d49.0491992!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre commercial Langley Willowbrook de la Baie d'Hudson
                  </h3>
                  <p class="ed-type--p store-address">
                    19705, autoroute Fraser<br />
                    Langley, Colombie-Britannique V3A 7E9
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title5 desc5"
                    >
                      <title id="title5">Zellers Circular Logo</title>
                      <desc id="desc5">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+16045308434"
                    >604-530-8434</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/VRW6P2Uh28hbut3d8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Langley Willowbrook Mall"
                    alt="Map showing the location of Hudson's Bay Langley Willowbrook Mall"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11610.063118098862!2d-79.818755!3d43.324395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9e0fbeac5b01%3A0x3d9d4c4d0b9e3b97!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716467486267!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+900+Maple+Ave,+Burlington,+ON+L7S+2J8/@43.324395,-79.818755,15z/data=!3m1!5s0x882c9e0fbdd46ab1:0x1e314697a92f91f0!4m9!4m8!1m0!1m5!1m1!1s0x882c9e0fbeac5b01:0x3d9d4c4d0b9e3b97!2m2!1d-79.8187548!2d43.324395!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre Woodgrove de Nanaimo de la Baie d'Hudson
                  </h3>
                  <p class="ed-type--p store-address">
                    6631, route de l'Île du Nord<br />
                    Nanaimo, Colombie-Britannique V9T 4T7
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title6 desc6"
                    >
                      <title id="title6">Zellers Circular Logo</title>
                      <desc id="desc6">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+12503903141"
                    >250-390-3141</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/UkSnnppB28DNqGpq8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Nanaimo Woodgrove Centre"
                    alt="Map showing the location of Hudson's Bay Nanaimo Woodgrove Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10420.5844377043!2d-124.048433!3d49.235719!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548898c92b576861%3A0xfd1275dab33eea1b!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716467587604!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+6631+N+Island+Hwy,+Nanaimo,+BC+V9T+4T7/@49.235719,-124.048433,15z/data=!3m1!5s0x548898cee366ee31:0x1e3146978d5fb1e0!4m9!4m8!1m0!1m5!1m1!1s0x548898c92b576861:0xfd1275dab33eea1b!2m2!1d-124.048433!2d49.235719!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre commercial Cherry Lane de Penticton de la Baie
                    d'Hudson
                  </h3>
                  <p class="ed-type--p store-address">
                    2111, rue Principale<br />
                    Penticton, Colombie-Britannique V2A 6V1
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title7 desc7"
                    >
                      <title id="title7">Zellers Circular Logo</title>
                      <desc id="desc7">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Main Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+12504931900"
                    >250-493-1900</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/e7aDAhztefzsJfnQ7"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Penticton Cherry Lane Shopping Centre"
                    alt="Map showing the location of Hudson's Bay Penticton Cherry Lane Shopping Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10370.403649924254!2d-119.585261!3d49.473155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548289ea9aa7a4a1%3A0xf2c21f741b40d52!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716467683859!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+2111+Main+St,+Penticton,+BC+V2A+6V1/@49.473155,-119.585261,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x548289ea9aa7a4a1:0xf2c21f741b40d52!2m2!1d-119.5852613!2d49.4731546!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Prince George Parkwood Place
                  </h3>
                  <p class="ed-type--p store-address">
                    1600, 15e Avenue<br />
                    Prince George, Colombie-Britannique V2L 3X3
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title8 desc8"
                    >
                      <title id="title8">Zellers Circular Logo</title>
                      <desc id="desc8">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+12505630211"
                    >250-563-0211</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/cSe5rphguhQ5eR6c9"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Prince George Parkwood Place"
                    alt="Map showing the location of Hudson's Bay Prince George Parkwood Place"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9400.688993695167!2d-122.759645!3d53.910915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5388991c2558f36d%3A0x5490487bc8f19c73!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716467795880!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+1600+15th+Ave+Space+140,+Prince+George,+BC+V2L+3X3/@53.910915,-122.759645,15z/data=!3m1!5s0x5388991dc4dc5353:0xe8c76fea5eb5b16c!4m9!4m8!1m0!1m5!1m1!1s0x5388991c2558f36d:0x5490487bc8f19c73!2m2!1d-122.7596449!2d53.910915!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Baie d'Hudson Centre de la baie Victoria
                  </h3>
                  <p class="ed-type--p store-address">
                    1150, rue Douglas<br />
                    Victoria (Colombie-Britannique) V8W 2C8
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title9 desc9"
                    >
                      <title id="title9">Zellers Circular Logo</title>
                      <desc id="desc9">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+12503851311"
                    >250-385-1311</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/2ESbSQCKuHZxJHR7A"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Victoria Bay Centre"
                    alt="Map showing the location of Hudson's Bay Victoria Bay Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10590.52006262282!2d-123.367046!3d48.425247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f749abf640e6d%3A0xf97275e5174cdfa3!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716467895656!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+Bay+Centre,+1150+Douglas+St,+Victoria,+BC+V8W+2C8/@48.425247,-123.367046,15z/data=!3m1!5s0x548f749ab9fc35f9:0xc851454037914b57!4m9!4m8!1m0!1m5!1m1!1s0x548f749abf640e6d:0xf97275e5174cdfa3!2m2!1d-123.3670457!2d48.4252467!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre de Coquitlam de la Baie d'Hudson
                  </h3>
                  <p class="ed-type--p store-address">
                    2929, autoroute Barnet<br />
                    Coquitlam (C.-B.) V3B 0G2
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title10 desc10"
                    >
                      <title id="title10">Zellers Circular Logo</title>
                      <desc id="desc10">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+16044641411"
                    >604-464-1411</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/R4TZuzUTQPtodbbK9"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Coquitlam Centre"
                    alt="Map showing the location of Hudson's Bay Coquitlam Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10411.415083367474!2d-122.800076!3d49.279168!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548678cb65bda79d%3A0x2b927fa6d01be402!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716467985473!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+2929+Barnet+Hwy,+Coquitlam,+BC+V3B+0G2/@49.279168,-122.800076,15z/data=!3m1!5s0x54867f335983eb67:0x921e1b33a8c92840!4m9!4m8!1m0!1m5!1m1!1s0x548678cb65bda79d:0x2b927fa6d01be402!2m2!1d-122.8000762!2d49.2791679!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre commercial Victoria Mayfair de la Baie d'Hudson
                  </h3>
                  <p class="ed-type--p store-address">
                    3125, rue Douglas<br />
                    Victoria (Colombie-Britannique) V8Z 3K3
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title11 desc11"
                    >
                      <title id="title11">Zellers Circular Logo</title>
                      <desc id="desc11">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Lower Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+12503863322"
                    >250-386-3322</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/M1aHnxd4y9MgiFrf7"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Victoria Mayfair Shopping Centre"
                    alt="Map showing the location of Hudson's Bay Victoria Mayfair Shopping Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10586.155992497881!2d-123.368379!3d48.446187!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f739d4d1fdf8b%3A0xe1b576dd19cd1320!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716468082381!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+3125+Douglas+St,+Victoria,+BC+V8Z+3K3/@48.446187,-123.368379,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x548f739d4d1fdf8b:0xe1b576dd19cd1320!2m2!1d-123.3683792!2d48.4461873!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Métropole de Burnaby de la Baie d'Hudson à Metrotown
                  </h3>
                  <p class="ed-type--p store-address">
                    4850 Kingsway<br />
                    Burnaby, Colombie-Britannique V5H 4P2
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title12 desc12"
                    >
                      <title id="title12">Zellers Circular Logo</title>
                      <desc id="desc12">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+16044361196"
                    >604-436-1196</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/jnPqLpjmTpHq1hN99"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Burnaby Metropolis At Metrotown"
                    alt="Map showing the location of Hudson's Bay Burnaby Metropolis At Metrotown"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10422.678141114127!2d-122.995817!3d49.225794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486765a2310592d%3A0xe868aae2b908a55c!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716468211596!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+4850+Kingsway,+Burnaby,+BC+V5H+4P2/@49.225794,-122.995817,15z/data=!3m1!5s0x54867659512e6deb:0x8a75309114df0b12!4m9!4m8!1m0!1m5!1m1!1s0x5486765a2310592d:0xe868aae2b908a55c!2m2!1d-122.9958169!2d49.2257936!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre commercial La Baie d'Hudson Kelowna Orchard Park
                  </h3>
                  <p class="ed-type--p store-address">
                    2271, avenue Harvey<br />
                    Kelowna, Colombie-Britannique V1Y 6H3
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title13 desc13"
                    >
                      <title id="title13">Zellers Circular Logo</title>
                      <desc id="desc13">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Main Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+12508602483"
                    >250-860-2483</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/sDvZ8WSbFhwqbkfXA"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Kelowna Orchard Park Shopping Centre"
                    alt="Map showing the location of Hudson's Bay Kelowna Orchard Park Shopping Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d82271.94304522875!2d-119.441829!3d49.88006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8cc836440623%3A0xa48fe96ad5f135fe!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716468339616!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+2271+Harvey+Ave,+Kelowna,+BC+V1Y+6H3/@49.88006,-119.441829,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x537d8cc836440623:0xa48fe96ad5f135fe!2m2!1d-119.4418292!2d49.8800598!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Baie d'Hudson West Vancouver Park Royal Centre
                  </h3>
                  <p class="ed-type--p store-address">
                    725 Parc Royal Nord<br />
                    Vancouver, Colombie-Britannique V7T 1H9
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title14 desc14"
                    >
                      <title id="title14">Zellers Circular Logo</title>
                      <desc id="desc14">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+16049251411"
                    >604-925-1411</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/ZMjWQHtMPn28S2vG6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay West Vancouver Park Royal Centre"
                    alt="Map showing the location of Hudson's Bay West Vancouver Park Royal Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10401.052290173899!2d-123.135851!3d49.328238!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54866e2124e14b3d%3A0x1af0d41d43e76f8e!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716468486031!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+725+Park+Royal+N,+West+Vancouver,+BC+V7T+1H9/@49.328238,-123.135851,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x54866e2124e14b3d:0x1af0d41d43e76f8e!2m2!1d-123.135851!2d49.3282378!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre Richmond de la Baie d'Hudson
                  </h3>
                  <p class="ed-type--p store-address">
                    6060, boulevard Minoru<br />
                    Richmond, Colombie-Britannique V6Y 1Y2
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title15 desc15"
                    >
                      <title id="title15">Zellers Circular Logo</title>
                      <desc id="desc15">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Main Level L1</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+16042733844"
                    >604-273-3844</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/DHvubGzG7vqAzXjL7"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Richmond Centre"
                    alt="Map showing the location of Hudson's Bay Richmond Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10434.618395263651!2d-123.138459!3d49.169164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54860acc9b16de7b%3A0x29e407b978d42687!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716468582680!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+6060+Minoru+Blvd,+Richmond,+BC+V6Y+1Y2/@49.169164,-123.138459,15z/data=!3m1!5s0x54860acbabc97d29:0xb43516d7c0fb5840!4m9!4m8!1m0!1m5!1m1!1s0x54860acc9b16de7b:0x29e407b978d42687!2m2!1d-123.1384592!2d49.1691639!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre vert du village Vernon de la Baie d'Hudson
                  </h3>
                  <p class="ed-type--p store-address">
                    4900 27 rue<br />
                    Vernon (Colombie-Britannique) V1T 7G7
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title16 desc16"
                    >
                      <title id="title16">Zellers Circular Logo</title>
                      <desc id="desc16">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Main Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+12505455331"
                    >250-545-5331</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/3wFbDZJj7JKboh9e6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Vernon Village Green Centre"
                    alt="Map showing the location of Hudson's Bay Vernon Village Green Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2610677.790869777!2d-119.269027!3d50.28278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537dd88f0047a3cb%3A0x9be0865208c6abd6!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716468681347!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+4900+27+St,+Vernon,+BC+V1T+7G7/@50.28278,-119.269027,7z/data=!4m9!4m8!1m0!1m5!1m1!1s0x537dd88f0047a3cb:0x9be0865208c6abd6!2m2!1d-119.2690267!2d50.2827796!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>
            </section>
            <!-- END OF BC -->

            <!-- START OF AB -->
            <section
              class="ed-container--tab"
              id="tab2"
              role="tabpanel"
              aria-labelledby="tab2-tab"
              tabindex="0"
              hidden
            >
              <header class="ed-container--header">
                <hr />
                <h2 class="ed-type--h2">Alberta</h2>
              </header>

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson, Edmonton, Kingsway Mall
                  </h3>
                  <p class="ed-type--p store-address">
                    109 rue Nord-Ouest<br />
                    Edmonton (Alb.) T5G 3A6
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title17 desc17"
                    >
                      <title id="title17">Zellers Circular Logo</title>
                      <desc id="desc17">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 2</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+17804797100"
                    >780-479-7100</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/Po6pVgu53iBFfWjV7"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Edmonton Kingsway Mall"
                    alt="Map showing the location of Hudson's Bay Edmonton Kingsway Mall"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9479.35027499123!2d-113.505036!3d53.560667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a023ba001a1dd3%3A0xb6c51e1ac97cccdc!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716468810533!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+109+K+St+NW,+Edmonton,+AB+T5G+3A6/@53.560667,-113.505036,15z/data=!3m1!5s0x53a023b0682a771b:0xad0170a73da461cc!4m9!4m8!1m0!1m5!1m1!1s0x53a023ba001a1dd3:0xb6c51e1ac97cccdc!2m2!1d-113.505036!2d53.5606674!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre commercial de Medicine Hat de la Baie d'Hudson
                  </h3>
                  <p class="ed-type--p store-address">
                    3292, chemin Dunmore sud-est<br />
                    Medicine Hat (Alb.) T1B 2R4
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title18 desc18"
                    >
                      <title id="title18">Zellers Circular Logo</title>
                      <desc id="desc18">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 1</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14035267888"
                    >403-526-7888</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/TfBZWva1F45aLRXU7"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Medicine Hat Mall"
                    alt="Map showing the location of Hudson's Bay Medicine Hat Mall"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10257.350233617452!2d-110.645406!3d50.005028!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53132c5a2e7e67cf%3A0x581859dec84d6e9c!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716468928039!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+3292+Dunmore+Rd+SE,+Medicine+Hat,+AB+T1B+2R4/@50.005028,-110.645406,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x53132c5a2e7e67cf:0x581859dec84d6e9c!2m2!1d-110.6458733!2d50.0048274!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Calgary Sunridge Mall
                  </h3>
                  <p class="ed-type--p store-address">
                    2525, 36e rue Nord-Est<br />
                    Calgary (Alb.) T1Y 5S4
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title19 desc19"
                    >
                      <title id="title19">Zellers Circular Logo</title>
                      <desc id="desc19">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 2</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14032321169"
                    >403-232-1169</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/YPqYpqpEtP6D9twn6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Calgary Sunridge Mall"
                    alt="Map showing the location of Hudson's Bay Calgary Sunridge Mall"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10027.199551753984!2d-113.984562!3d51.075244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537164c5399da23b%3A0xe3f4b6440af56171!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716469045111!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+2525+36+St+NE,+Calgary,+AB+T1Y+5S4/@51.075244,-113.984562,15z/data=!3m1!5s0x537164c50103bbe5:0x881f184488dda20c!4m9!4m8!1m0!1m5!1m1!1s0x537164c5399da23b:0xe3f4b6440af56171!2m2!1d-113.9845616!2d51.0752441!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre Melcor de la Baie d'Hudson
                  </h3>
                  <p class="ed-type--p store-address">
                    200, 4e avenue Sud<br />
                    Lethbridge (Alberta) T1J 4C8
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title20 desc20"
                    >
                      <title id="title20">Zellers Circular Logo</title>
                      <desc id="desc20">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14033293131"
                    >403-329-3131</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/ksw6T8eyZneZ3XSw7"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Melcor Centre"
                    alt="Map showing the location of Hudson's Bay Melcor Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10323.648843994757!2d-112.842411!3d49.693626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536e87d1fa6468e5%3A0xfd9a4750fbb7307e!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716469159028!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+Centre+Mall,+200+4+Ave+S,+Lethbridge,+AB+T1J+4C8/@49.693626,-112.842411,15z/data=!3m1!5s0x536e87d203f8eaf3:0xb825fcec09274ebc!4m9!4m8!1m0!1m5!1m1!1s0x536e87d1fa6468e5:0xfd9a4750fbb7307e!2m2!1d-112.842411!2d49.693626!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Baie d'Hudson Red Deer Bower Place
                  </h3>
                  <p class="ed-type--p store-address">
                    4900, promenade Molly Bannister<br />
                    Red Deer (Alb.) T4R 1N9
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title21 desc21"
                    >
                      <title id="title21">Zellers Circular Logo</title>
                      <desc id="desc21">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Main Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14033472211"
                    >403-347-2211</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/ccZ6mLhhw4HALF8c9"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Red Deer Bower Place"
                    alt="Map showing the location of Hudson's Bay Red Deer Bower Place"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9772.039783183367!2d-113.812106!3d52.243203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537456bdb05dde41%3A0xef62fd2b62ffda75!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716469305022!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+4900+Molly+Banister+Dr,+Red+Deer,+AB+T4R+1N9/@52.243203,-113.812106,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x537456bdb05dde41:0xef62fd2b62ffda75!2m2!1d-113.8121056!2d52.2432028!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre Saint-Albert de la Baie d'Hudson
                  </h3>
                  <p class="ed-type--p store-address">
                    375, sentier Saint-Albert<br />
                    Saint-Albert (Alberta) T8N 3K8
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title22 desc22"
                    >
                      <title id="title22">Zellers Circular Logo</title>
                      <desc id="desc22">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Main Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+17804585800"
                    >780-458-5800</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/bcMWBKuVLFxp1Gi36"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay St. Albert Centre"
                    alt="Map showing the location of Hudson's Bay St. Albert Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9461.176169988465!2d-113.623339!3d53.641729!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a02f3faeac78a1%3A0x2cbff7976199888c!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716469410242!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+375+St+Albert+Trl,+St.+Albert,+AB+T8N+3K8/@53.641729,-113.623339,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x53a02f3faeac78a1:0x2cbff7976199888c!2m2!1d-113.623339!2d53.6417292!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson, centre-ville de Calgary
                  </h3>
                  <p class="ed-type--p store-address">
                    200, 8 Avenue Sud-Ouest<br />
                    Calgary (Alb.) T2P 1B5
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title23 desc23"
                    >
                      <title id="title23">Zellers Circular Logo</title>
                      <desc id="desc23">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level L3</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14032620345"
                    >403-262-0345</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/ViJP6xyAgD973orf6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Calgary Downtown"
                    alt="Map showing the location of Hudson's Bay Calgary Downtown"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10033.433330100956!2d-114.066132!3d51.046471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fe6df88c401%3A0x712a13ed85439703!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716469512933!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+200+8+Ave+SW,+Calgary,+AB+T2P+1B5/@51.046471,-114.066132,15z/data=!3m1!5s0x53716e8402272115:0xc3c28a88141b05d2!4m9!4m8!1m0!1m5!1m1!1s0x53716fe6df88c401:0x712a13ed85439703!2m2!1d-114.0661318!2d51.0464705!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre Chinook de Calgary de la Baie d'Hudson
                  </h3>
                  <p class="ed-type--p store-address">
                    6455, sentier Macleod sud-ouest<br />
                    Calgary (Alb.) T2H 0L1
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title24 desc24"
                    >
                      <title id="title24">Zellers Circular Logo</title>
                      <desc id="desc24">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14032556121"
                    >403-255-6121</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/qQrzEYwCkPmYabMW6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Calgary Chinook Centre"
                    alt="Map showing the location of Hudson's Bay Calgary Chinook Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10044.144409300758!2d-114.074902!3d50.997005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170ff120e74b1%3A0x964b7bffd360d343!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716469640400!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+6455+Macleod+Trail+SW,+Calgary,+AB+T2H+0L1/@50.997005,-114.074902,15z/data=!3m1!5s0x53717055f3038373:0x962a51b6d76ffe30!4m9!4m8!1m0!1m5!1m1!1s0x537170ff120e74b1:0x964b7bffd360d343!2m2!1d-114.0749022!2d50.9970048!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson, Calgary Market Mall
                  </h3>
                  <p class="ed-type--p store-address">
                    3625, sentier Shaganappi Nord-Ouest<br />
                    Calgary (Alb.) T3A 0E2
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title25 desc25"
                    >
                      <title id="title25">Zellers Circular Logo</title>
                      <desc id="desc25">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14032861220"
                    >403-286-1220</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/VTbaXo6on3NwMPbS8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Calgary Market Mall"
                    alt="Map showing the location of Hudson's Bay Calgary Market Mall"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10024.802688368176!2d-114.15635!3d51.086304!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f1dd552d707%3A0x15dd0d39815706ed!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716469757747!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+3625+Shaganappi+Trail+NW+%23100,+Calgary,+AB+T3A+0E2/@51.086304,-114.15635,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x53716f1dd552d707:0x15dd0d39815706ed!2m2!1d-114.1563496!2d51.0863042!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Centre commercial Southcentre de Calgary
                  </h3>
                  <p class="ed-type--p store-address">
                    100, chemin Anderson Sud-Est<br />
                    Calgary (Alb.) T2J 3V1
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title26 desc26"
                    >
                      <title id="title26">Zellers Circular Logo</title>
                      <desc id="desc26">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14032789520"
                    >403-278-9520</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/Vw7Z7ihudwFnRhGL9"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Calgary Southcentre Mall"
                    alt="Map showing the location of Hudson's Bay Calgary Southcentre Mall"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10053.68249487792!2d-114.067907!3d50.952927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537176cbc130bedb%3A0x2a4705492fb8fd6d!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716469852699!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+100+Anderson+Rd+SE+%23002,+Calgary,+AB+T2J+3V1/@50.952927,-114.067907,15z/data=!3m1!5s0x537176cc9d445ded:0xc24751b862acb4d0!4m9!4m8!1m0!1m5!1m1!1s0x537176cbc130bedb:0x2a4705492fb8fd6d!2m2!1d-114.0679073!2d50.9529273!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Edmonton Southgate Centre
                  </h3>
                  <p class="ed-type--p store-address">
                    5015, 111e rue Nord-Ouest<br />
                    Edmonton (Alb.) T6H 4M7
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title27 desc27"
                    >
                      <title id="title27">Zellers Circular Logo</title>
                      <desc id="desc27">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+17804359211"
                    >780-435-9211</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/MrJqKCq2xCx93SHb6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Edmonton Southgate Centre"
                    alt="Map showing the location of Hudson's Bay Edmonton Southgate Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9496.404929951563!2d-113.513263!3d53.484521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01f4710805c17%3A0x60f0eee8d042f86f!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716469967538!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+5015+111+St+NW,+Edmonton,+AB+T6H+4M7/@53.484521,-113.513263,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x53a01f4710805c17:0x60f0eee8d042f86f!2m2!1d-113.5132634!2d53.4845214!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre commercial de la Baie d'Hudson ouest d'Edmonton
                  </h3>
                  <p class="ed-type--p store-address">
                    8882, 170e rue Nord-Ouest<br />
                    Edmonton (Alberta) T5T 3J7
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title28 desc28"
                    >
                      <title id="title28">Zellers Circular Logo</title>
                      <desc id="desc28">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+17804441550"
                    >780-444-1550</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/SaopasufXGHbtizC7"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay West Edmonton Mall"
                    alt="Map showing the location of Hudson's Bay West Edmonton Mall"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9487.95316022525!2d-113.617832!3d53.522266!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0205978313b13%3A0x99e2ec603f108ac9!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716470096527!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+8882+170+St+NW,+Edmonton,+AB+T5T+3J7/@53.522266,-113.617832,15z/data=!3m1!5s0x53a0205978313b13:0xff95595efd0ba9bb!4m9!4m8!1m0!1m5!1m1!1s0x53a0205978313b13:0x99e2ec603f108ac9!2m2!1d-113.6178324!2d53.5222663!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <!-- TODO: Look into whether or not this has a Zellers location. -->
              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Magasin La Baie d'Hudson de Londonderry Mall
                  </h3>
                  <p class="ed-type--p store-address ed-util-mb--1pnt5">
                    137th Ave & 66th Street<br />
                    Edmonton, AB T5C3C8
                  </p>
                  <a class="ed-type--link store-phone" href="tel:+17804782931"
                    >780-478-2931</a
                  >
                  <p class="ed-util-pt--1pnt5">
                    <strong
                      >Le magasin La Baie d'Hudson de Londonderry Mall offre
                      maintenant de la marchandise à prix d'entrepôt : de la
                      mode aux accessoires, en passant par les chaussures et les
                      articles pour la maison. Vous y trouverez chaque fois un
                      assortiment différent de vos marques préférées, alors
                      allez-y souvent!</strong
                    >
                  </p>
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/pjUyyv21gzT6WGbA8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Londonderry Mall"
                    alt="Map showing the location of Hudson's Bay Londonderry Mall"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9470.15752724458!2d-113.445266!3d53.60168!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a023532e7797c9%3A0x3fc9ceecd7bad3b8!2sHudson&#39;s%20Bay%2C%20Clearance%20Outlet%20Pricing!5e0!3m2!1sfr!2sca!4v1716470227657!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+Clearance+Outlet+Pricing,+Londonderry+Mall,+137+Ave+NW,+Edmonton,+AB+T5C+3C8/@53.60168,-113.445266,15z/data=!3m1!5s0x53a0235322980b11:0x15b01b34e0b2433c!4m9!4m8!1m0!1m5!1m1!1s0x53a023532e7797c9:0x3fc9ceecd7bad3b8!2m2!1d-113.445266!2d53.6016803!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>
            </section>
            <!-- END OF AB -->

            <!-- START OF SK -->
            <section
              class="ed-container--tab"
              id="tab3"
              role="tabpanel"
              aria-labelledby="tab3-tab"
              tabindex="0"
              hidden
            >
              <header class="ed-container--header">
                <hr />
                <h2 class="ed-type--h2">Saskatchewan</h2>
              </header>

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Saskatoon Midtown Plaza
                  </h3>
                  <p class="ed-type--p store-address">
                    201 1 Avenue Sud<br />
                    Saskatoon (Saskatchewan) S7K 3M1
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title29 desc29"
                    >
                      <title id="title29">Zellers Circular Logo</title>
                      <desc id="desc29">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 2</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+13062427611"
                    >306-242-7611</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/t8gJD371hZsK2YEt6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Saskatoon Midtown Plaza"
                    alt="Map showing the location of Hudson's Bay Saskatoon Midtown Plaza"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9797.222900976598!2d-106.666819!3d52.12876!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6d7ca07a489%3A0x1f8a0d3067556566!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716470359348!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+201+1+Ave+S,+Saskatoon,+SK+S7K+3M1/@52.12876,-106.666819,15z/data=!3m1!5s0x5304f6d6321212b3:0xe8c76fea47046a2c!4m9!4m8!1m0!1m5!1m1!1s0x5304f6d7ca07a489:0x1f8a0d3067556566!2m2!1d-106.6668189!2d52.1287601!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Regina Cornwall Centre
                  </h3>
                  <p class="ed-type--p store-address">
                    2150, 11e Avenue<br />
                    Régina (Saskatchewan) S4P 0J5
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title30 desc30"
                    >
                      <title id="title30">Zellers Circular Logo</title>
                      <desc id="desc30">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+13065258511"
                    >306-525-8511</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/jvCkBufcwBi8YeDn6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Regina Cornwall Centre"
                    alt="Map showing the location of Hudson's Bay Regina Cornwall Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10161.96935114942!2d-104.612222!3d50.450556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e4696f8d8a1%3A0x5a3ceede143cc22f!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716470528936!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+2150+11th+Ave,+Regina,+SK+S4P+0J5/@50.450556,-104.612222,15z/data=!3m1!5s0x531c1e46838bf305:0x6a9be1f46de407ca!4m9!4m8!1m0!1m5!1m1!1s0x531c1e4696f8d8a1:0x5a3ceede143cc22f!2m2!1d-104.6122221!2d50.4505556!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>
            </section>
            <!-- END OF SK -->

            <!-- START OF MB -->
            <section
              class="ed-container--tab"
              id="tab4"
              role="tabpanel"
              aria-labelledby="tab4-tab"
              tabindex="0"
              hidden
            >
              <header class="ed-container--header">
                <hr />
                <h2 class="ed-type--h2">Manitoba</h2>
              </header>

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre Saint-Vital de Winnipeg de la Baie d'Hudson
                  </h3>
                  <p class="ed-type--p store-address">
                    1225, chemin Sainte-Marie<br />
                    Winnipeg (Manitoba) R2M 5E5
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title31 desc31"
                    >
                      <title id="title31">Zellers Circular Logo</title>
                      <desc id="desc31">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 2</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+12042551227"
                    >204-255-1227</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/F74wMKqnXuCGuYg48"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Winnipeg St. Vital Centre"
                    alt="Map showing the location of Hudson's Winnipeg St. Vital Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10295.127439981257!2d-97.111703!3d49.827765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea7669a01f2f7b%3A0x277aa494ff6cb627!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716470630420!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+1225+St+Mary's+Rd,+Winnipeg,+MB+R2M+5E5/@49.827765,-97.111703,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x52ea7669a01f2f7b:0x277aa494ff6cb627!2m2!1d-97.1117035!2d49.8277646!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Parc polo de Winnipeg de la Baie d'Hudson
                  </h3>
                  <p class="ed-type--p store-address">
                    1485, avenue du Portage<br />
                    Winnipeg (Manitoba) R3G 0W4
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title32 desc32"
                    >
                      <title id="title32">Zellers Circular Logo</title>
                      <desc id="desc32">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Lower Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+12049753228"
                    >204-975-3228</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/DTTs5Nra1k6b32oh6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Winnipeg Polo Park"
                    alt="Map showing the location of Hudson's Bay Winnipeg Polo Park"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10282.84966356707!2d-97.199142!3d49.885427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea737ee1b6bf43%3A0xfa60ade81b167557!2zSHVkc29u4oCZcyBCYXk!5e0!3m2!1sfr!2sca!4v1716470722711!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson%E2%80%99s+Bay,+1485+Portage+Ave,+Winnipeg,+MB+R3G+0W4/@49.885427,-97.199142,15z/data=!3m1!5s0x52ea7378c4190137:0x1e314697b3bbf24c!4m9!4m8!1m0!1m5!1m1!1s0x52ea737ee1b6bf43:0xfa60ade81b167557!2m2!1d-97.1991418!2d49.8854268!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>
            </section>
            <!-- END OF MB -->

            <!-- START OF ON -->
            <section
              class="ed-container--tab"
              id="tab5"
              role="tabpanel"
              aria-labelledby="tab5-tab"
              tabindex="0"
              hidden
            >
              <header class="ed-container--header">
                <hr />
                <h2 class="ed-type--h2">Ontario</h2>
              </header>

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Mississauga Erin Mills Town Centre
                  </h3>
                  <p class="ed-type--p store-address">
                    5100, promenade Erin Mills<br />
                    Mississauga (Ontario) L5M 4Z5
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title33 desc33"
                    >
                      <title id="title33">Zellers Circular Logo</title>
                      <desc id="desc33">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 2</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+19058208300"
                    >905-820-8300</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/CY6noN8AY1FJrcMM6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Mississauga Erin Mills Town Centre"
                    alt="Map showing the location of Hudson's Bay Mississauga Erin Mills Town Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11564.986093293037!2d-79.712318!3d43.559746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b418bd5706bd5%3A0x2ad2f01c59c3642a!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716471138623!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+5100+Erin+Mills+Pkwy,+Mississauga,+ON+L5M+4Z5/@43.559746,-79.712318,15z/data=!3m1!5s0x882b418a22aec8ff:0xb825fcec05e4249c!4m9!4m8!1m0!1m5!1m1!1s0x882b418bd5706bd5:0x2ad2f01c59c3642a!2m2!1d-79.7123181!2d43.5597459!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson à Londres, centre commercial White Oaks
                  </h3>
                  <p class="ed-type--p store-address">
                    1105, chemin Wellington<br />
                    Londres (Ontario) N6E 1V4
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title34 desc34"
                    >
                      <title id="title34">Zellers Circular Logo</title>
                      <desc id="desc34">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 2</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+15196854100"
                    >519-685-4100</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/jUcWgHsDo2Vv4erB8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay London White Oaks Mall"
                    alt="Map showing the location of Hudson's Bay London White Oaks Mall"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11684.97954402176!2d-81.223657!3d42.930964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef3969b1d4b31%3A0xd53e6c4f88c07464!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716471277995!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+1105+Wellington+Rd,+London,+ON+N6E+1V4/@42.930964,-81.223657,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x882ef3969b1d4b31:0xd53e6c4f88c07464!2m2!1d-81.2236575!2d42.9309639!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre-ville de Scarborough de la Baie d'Hudson
                  </h3>
                  <p class="ed-type--p store-address">
                    300, promenade de l'arrondissement<br />
                    Toronto (Ontario) M1P 4P5
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title35 desc35"
                    >
                      <title id="title35">Zellers Circular Logo</title>
                      <desc id="desc35">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 3</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14162960555"
                    >416-296-0555</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/VGV7gMD3CRGdcrTZA"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Scarborough Town Centre"
                    alt="Map showing the location of Hudson's Bay Scarborough Town Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11523.363475065686!2d-79.259431!3d43.776162!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1a46b5d5011%3A0xbc08efcd32d82e15!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716471380704!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+300+Borough+Dr,+Scarborough,+ON+M1P+4P5/@43.776162,-79.259431,15z/data=!3m1!5s0x89d4d1a657ab1cd7:0x938ce8a7853787c!4m9!4m8!1m0!1m5!1m1!1s0x89d4d1a46b5d5011:0xbc08efcd32d82e15!2m2!1d-79.259431!2d43.7761623!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre de détention de la Baie d'Hudson à St. Catharines
                  </h3>
                  <p class="ed-type--p store-address">
                    221, avenue Glendale<br />
                    St.Catharines (Ontario) L2T 2K9
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title36 desc36"
                    >
                      <title id="title36">Zellers Circular Logo</title>
                      <desc id="desc36">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 1</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+19056884441"
                    >905-688-4441</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/uKA3kGm27B341E3k7"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay St. Catharines Pen Centre"
                    alt="Map showing the location of Hudson's Bay St. Catharines Pen Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1490696.9897106034!2d-79.224982!3d43.13566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d350221dd734f9%3A0xccb3a5f123641dd8!2sNiagara%20Pen%20Centre!5e0!3m2!1sfr!2sca!4v1716471550324!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Niagara+Pen+Centre,+221+Glendale+Ave,+St.+Catharines,+ON+L2T+2K9/@43.13566,-79.224982,8z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89d350221dd734f9:0xccb3a5f123641dd8!2m2!1d-79.2249817!2d43.1356599!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson - Cambridge Centre
                  </h3>
                  <p class="ed-type--p store-address">
                    355, chemin Hespeler<br />
                    Cambridge (Ontario) N1R 6B3
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title37 desc37"
                    >
                      <title id="title37">Zellers Circular Logo</title>
                      <desc id="desc37">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 2</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+15196224919"
                    >519-622-4919</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/MzsdVyRak4YbeYDt8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Cambridge Centre"
                    alt="Map showing the location of Hudson's Bay Cambridge Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11596.631789904734!2d-80.321031!3d43.394628!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b883335f49af7%3A0xe16a07ca9a8b7fac!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716471655519!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+355+Hespeler+Rd,+Cambridge,+ON+N1R+6B3/@43.394628,-80.321031,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x882b883335f49af7:0xe16a07ca9a8b7fac!2m2!1d-80.3210308!2d43.3946285!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Ottawa Rideau
                  </h3>
                  <p class="ed-type--p store-address">
                    73, rue Rideau<br />
                    Ottawa (Ontario) K1N 5W8
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title38 desc38"
                    >
                      <title id="title38">Zellers Circular Logo</title>
                      <desc id="desc38">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 3</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+16132417511"
                    >613-241-7511</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/iK61ZfQY5pxYwsWi9"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Ottawa Rideau"
                    alt="Map showing the location of Hudson's Bay Ottawa Rideau"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11200.625897702941!2d-75.692539!3d45.426347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0501eda861c1%3A0x83ba8e1b1520fc7e!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716471812824!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+73+Rideau+St,+Ottawa,+ON+K1N+5W8/@45.426347,-75.692539,15z/data=!3m1!5s0x4cce050006f5c0a5:0xa001c74bd6c9b61c!4m9!4m8!1m0!1m5!1m1!1s0x4cce0501eda861c1:0x83ba8e1b1520fc7e!2m2!1d-75.6925389!2d45.4263473!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Ottawa Centre Saint-Laurent
                  </h3>
                  <p class="ed-type--p store-address">
                    1200, boulevard Saint-Laurent<br />
                    Ottawa (Ontario) K1K 3B8
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title39 desc39"
                    >
                      <title id="title39">Zellers Circular Logo</title>
                      <desc id="desc39">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 2</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+16137486105"
                    >613-748-6105</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/ejY1mtFXTWQN9Ga46"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Ottawa St. Laurent Centre"
                    alt="Map showing the location of Hudson's Bay Ottawa St. Laurent Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11201.498908174624!2d-75.638706!3d45.421947!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0f8686aaaaab%3A0xcbda6c7940e73de1!2sThe%20bay%2C%20Hudson&#39;s%20Bay%2C%20St.%20Laurent%20Shopping%20Centre!5e0!3m2!1sfr!2sca!4v1716471938039!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//The+bay,+Hudson's+Bay,+St.+Laurent+Shopping+Centre,+1200+St.+Laurent+Blvd,+Ottawa,+ON+K1K+3B8/@45.421947,-75.638706,15z/data=!3m1!5s0x4cce0f8686415c13:0xb825fceced662d80!4m9!4m8!1m0!1m5!1m1!1s0x4cce0f8686aaaaab:0xcbda6c7940e73de1!2m2!1d-75.6387057!2d45.4219466!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Centre-ville de Kingston Cataraqui
                  </h3>
                  <p class="ed-type--p store-address">
                    945, chemin Gardiners<br />
                    Kingston (Ontario) K7M 7H4
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title40 desc40"
                    >
                      <title id="title40">Zellers Circular Logo</title>
                      <desc id="desc40">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 1</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+16133843888"
                    >613-384-3888</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/hmgJswVM5CX2WWYf9"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Kingston Cataraqui Town Centre"
                    alt="Map showing the location of Hudson's Bay Kingston Cataraqui Town Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11430.368397485743!2d-76.570336!3d44.256637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2ac6b29c2fa3b%3A0xa54e064018a0b184!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716472070230!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+945+Gardiners+Rd,+Kingston,+ON+K7M+7H4/@44.256637,-76.570336,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4cd2ac6b29c2fa3b:0xa54e064018a0b184!2m2!1d-76.5703362!2d44.2566366!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Brampton Centre-ville de Bramalea
                  </h3>
                  <p class="ed-type--p store-address">
                    25, promenade Peel Centre<br />
                    Brampton (Ontario) L6T 3R5
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title41 desc41"
                    >
                      <title id="title41">Zellers Circular Logo</title>
                      <desc id="desc41">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+19057935100"
                    >905-793-5100</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/8KnJEgspUyckeMNF8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Brampton Bramalea City Centre"
                    alt="Map showing the location of Hudson's Bay Brampton Bramalea City Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11534.826994789018!2d-79.721008!3d43.716643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3de690000001%3A0x4f4a6ae9b9005b75!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716472203333!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+25+Peel+Centre+Dr,+Brampton,+ON+L6T+3R5/@43.716643,-79.721008,15z/data=!3m1!5s0x882b3de691bd9163:0xb825fcec0e7ddec0!4m9!4m8!1m0!1m5!1m1!1s0x882b3de690000001:0x4f4a6ae9b9005b75!2m2!1d-79.7210077!2d43.7166425!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson, rue Queen Toronto
                  </h3>
                  <p class="ed-type--p store-address">
                    176, rue Yonge<br />
                    Toronto (Ontario) M5C 2L7
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title42 desc42"
                    >
                      <title id="title42">Zellers Circular Logo</title>
                      <desc id="desc42">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Lower Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14168619111"
                    >416-861-9111</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/7EaxBVtmNhL9sgAq6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Queen Street Toronto"
                    alt="Map showing the location of Hudson's Bay Queen Street Toronto"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11547.327719995297!2d-79.380136!3d43.651665!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb3338e08f99%3A0x3aa44f5e84289e87!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716472401551!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+176+Yonge+St,+Toronto,+ON+M5C+2L7/@43.651665,-79.380136,15z/data=!3m1!5s0x882b34b3bf6f631f:0xacaea205c9fdf7fe!4m9!4m8!1m0!1m5!1m1!1s0x89d4cb3338e08f99:0x3aa44f5e84289e87!2m2!1d-79.380136!2d43.6516651!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Windsor Devonshire Mall
                  </h3>
                  <p class="ed-type--p store-address">
                    3030, avenue Howard<br />
                    Windsor (Ontario) N8X 3Y8
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title43 desc43"
                    >
                      <title id="title43">Zellers Circular Logo</title>
                      <desc id="desc43">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+15199664666"
                    >519-966-4666</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/9cU93uiuuc1shTvr9"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Windsor Devonshire Mall"
                    alt="Map showing the location of Hudson's Bay Windsor Devonshire Mall"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11808.513488802722!2d-83.001142!3d42.275783!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2c11e44dab1b%3A0xf9b99e42be5855c2!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716472562852!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+3030+Howard+Ave,+Windsor,+ON+N8X+3Y8/@42.275783,-83.001142,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x883b2c11e44dab1b:0xf9b99e42be5855c2!2m2!1d-83.001142!2d42.275783!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Kitchener Fairview Park
                  </h3>
                  <p class="ed-type--p store-address">
                    3050, promenade Kingsway<br />
                    Kitchener (Ontario) N2C 2J7
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title44 desc44"
                    >
                      <title id="title44">Zellers Circular Logo</title>
                      <desc id="desc44">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Lower Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+15198941111"
                    >519-894-1111</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/cXx7Ra4ssnNFSBZB8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Kitchener Fairview Park"
                    alt="Map showing the location of Hudson's Bay Kitchener Fairview Park"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11591.117137040696!2d-80.440701!3d43.423438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b8ad95aaaaaab%3A0x119a56dc3dec8d6e!2zSHVkc29u4oCZcyBCYXk!5e0!3m2!1sfr!2sca!4v1716472697596!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson%E2%80%99s+Bay,+3050+Kingsway+Dr,+Kitchener,+ON+N2C+2J7/@43.423438,-80.440701,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x882b8ad95aaaaaab:0x119a56dc3dec8d6e!2m2!1d-80.440701!2d43.4234378!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre commercial Barrie Georgian de la Baie d'Hudson
                  </h3>
                  <p class="ed-type--p store-address">
                    465, rue Bayfield<br />
                    Barrie (Ontario) L4M 4Z9
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title45 desc45"
                    >
                      <title id="title45">Zellers Circular Logo</title>
                      <desc id="desc45">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Main Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+17057262200"
                    >705-726-2200</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/539NWbj9LDcLQxQS8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Barrie Georgian Mall"
                    alt="Map showing the location of Hudson's Bay Barrie Georgian Mall"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11400.179084885212!2d-79.706743!3d44.411727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882aa2efc1250f05%3A0x7ce81dc60c528f7a!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716472856530!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+465+Bayfield+St,+Barrie,+ON+L4M+4Z9/@44.411727,-79.706743,15z/data=!3m1!5s0x882aa2ef90696181:0xd8599a6b9ed162f2!4m9!4m8!1m0!1m5!1m1!1s0x882aa2efc1250f05:0x7ce81dc60c528f7a!2m2!1d-79.706743!2d44.411727!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Burlington Mapleview Centre
                  </h3>
                  <p class="ed-type--p store-address">
                    900, avenue des Érables<br />
                    Burlington (Ontario) L7S 2J8
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title46 desc46"
                    >
                      <title id="title46">Zellers Circular Logo</title>
                      <desc id="desc46">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+19056810030"
                    >905-681-0030</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/VRW6P2Uh28hbut3d8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Burlington Mapleview Centre"
                    alt="Map showing the location of Hudson's Bay Burlington Mapleview Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11610.063118098862!2d-79.818755!3d43.324395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9e0fbeac5b01%3A0x3d9d4c4d0b9e3b97!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716472950090!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+900+Maple+Ave,+Burlington,+ON+L7S+2J8/@43.324395,-79.818755,15z/data=!3m1!5s0x882c9e0fbdd46ab1:0x1e314697a92f91f0!4m9!4m8!1m0!1m5!1m1!1s0x882c9e0fbeac5b01:0x3d9d4c4d0b9e3b97!2m2!1d-79.8187548!2d43.324395!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre-ville de Pickering de la Baie d'Hudson
                  </h3>
                  <p class="ed-type--p store-address">
                    1355, chemin Kingston<br />
                    Pickering (Ontario) L1V 2B8
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title47 desc47"
                    >
                      <title id="title47">Zellers Circular Logo</title>
                      <desc id="desc47">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Lower Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+19058378691"
                    >905-837-8691</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/YA2Z22xtqimuPdmH9"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Pickering Town Centre"
                    alt="Map showing the location of Hudson's Bay Pickering Town Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11512.164351224488!2d-79.085202!3d43.834246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4dedfb67f6c67%3A0x9035704cc4beda62!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716473039259!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+1355+Kingston+Rd,+Pickering,+ON+L1V+2B8/@43.834246,-79.085202,15z/data=!3m1!5s0x89d4dee094de5beb:0xec6fe81bc8d6c160!4m9!4m8!1m0!1m5!1m1!1s0x89d4dedfb67f6c67:0x9035704cc4beda62!2m2!1d-79.085202!2d43.834246!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Ottawa Place D'Orléans
                  </h3>
                  <p class="ed-type--p store-address">
                    110, promenade Place D'Orléans<br />
                    Orléans, ON K1E 2L9
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title48 desc48"
                    >
                      <title id="title48">Zellers Circular Logo</title>
                      <desc id="desc48">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+16138378274"
                    >613-837-8274</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/sNPkngkqAYBzt2tq8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Ottawa Place D'Orléans"
                    alt="Map showing the location of Hudson's Bay Ottawa Place D'Orléans"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11190.453835840854!2d-75.518519!3d45.47759!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce117f04b5695d%3A0xe182772e93f9fa85!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716473144710!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+110+Place+d'Orl%C3%A9ans+Dr,+Orl%C3%A9ans,+ON+K1C+2L9/@45.47759,-75.518519,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4cce117f04b5695d:0xe182772e93f9fa85!2m2!1d-75.5185189!2d45.4775896!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Newmarket Upper Canada Mall
                  </h3>
                  <p class="ed-type--p store-address">
                    17600, rue Yonge<br />
                    Newmarket (Ontario) L3Y 4Z1
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title49 desc49"
                    >
                      <title id="title49">Zellers Circular Logo</title>
                      <desc id="desc49">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Lower Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+19058530986"
                    >905-853-0986</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/bkShGEGbrTngwYYTA"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Newmarket Upper Canada Mall"
                    alt="Map showing the location of Hudson's Bay Newmarket Upper Canada Mall"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11469.337997272272!2d-79.487404!3d44.055801!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad1fb2905b3c5%3A0x26635fb4d96c73d9!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716473315842!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+17600+Yonge+St+N,+Newmarket,+ON+L3Y+4Z1/@44.055801,-79.487404,15z/data=!3m1!5s0x882ad1e58c12bdd5:0x32d4b989a1e603b0!4m9!4m8!1m0!1m5!1m1!1s0x882ad1fb2905b3c5:0x26635fb4d96c73d9!2m2!1d-79.487404!2d44.055801!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre de la Baie d'Hudson à Oshawa
                  </h3>
                  <p class="ed-type--p store-address">
                    419, rue King Ouest<br />
                    Oshawa (Ontario) L1J 4X3
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title50 desc50"
                    >
                      <title id="title50">Zellers Circular Logo</title>
                      <desc id="desc50">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+19055711211"
                    >905-571-1211</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/n6Die1X94VqHKaua6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Oshawa Centre"
                    alt="Map showing the location of Hudson's Bay Oshawa Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11501.825659062157!2d-78.878548!3d43.887813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51d013ca358ef%3A0x5d0274409ce20db6!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716473433056!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+419+King+St+W,+Oshawa,+ON+L1J+4X3/@43.887813,-78.878548,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89d51d013ca358ef:0x5d0274409ce20db6!2m2!1d-78.8785477!2d43.8878134!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Ottawa Bayshore Centre
                  </h3>
                  <p class="ed-type--p store-address">
                    100, promenade Bayshore<br />
                    Ottawa (Ontario) K2B 8S8
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title51 desc51"
                    >
                      <title id="title51">Zellers Circular Logo</title>
                      <desc id="desc51">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level L3</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+16135969810"
                    >613-596-9810</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/euGT5fpX9ksT9TJy6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Ottawa Bayshore Centre"
                    alt="Map showing the location of Hudson's Bay Ottawa Bayshore Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11216.449854124467!2d-75.807907!3d45.346542!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce00c3a0ab2955%3A0xf3c21f3de4a2765b!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716473531243!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+Hudson's+Bay+Ottawa+Bayshore+Centre,+100+Bayshore+Dr,+Nepean,+ON+K2B+8S8/@45.346542,-75.807907,15z/data=!3m1!5s0x4cce00c3bc250751:0x1e3146970c3b0dc5!4m9!4m8!1m0!1m5!1m1!1s0x4cce00c3a0ab2955:0xf3c21f3de4a2765b!2m2!1d-75.8079071!2d45.3465423!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre commercial Centrepoint de Toronto de la Baie d'Hudson
                  </h3>
                  <p class="ed-type--p store-address">
                    6500, rue Yonge<br />
                    Toronto, ON M2M 3X4
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title52 desc52"
                    >
                      <title id="title52">Zellers Circular Logo</title>
                      <desc id="desc52">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Main Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14162264202"
                    >416-226-4202</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/1t8ZTjNCTupdWjF6A"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Toronto Centerpoint Mall"
                    alt="Map showing the location of Hudson's Bay Toronto Centerpoint Mall"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d184312.08871759594!2d-79.420708!3d43.796178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d35053adcc6fbb%3A0x73f8c8022b0094d8!2zSHVkc29u4oCZcyBCYXk!5e0!3m2!1sfr!2sca!4v1716473630513!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson%E2%80%99s+Bay,+6500+Yonge+St,+Toronto,+ON+M2M+3X4/@43.796178,-79.420708,11z/data=!3m1!5s0x882b2cfe33745997:0xb825fcecf1efbed0!4m9!4m8!1m0!1m5!1m1!1s0x89d35053adcc6fbb:0x73f8c8022b0094d8!2m2!1d-79.4207079!2d43.7961777!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Baie d'Hudson Centre commercial Waterloo Conestoga
                  </h3>
                  <p class="ed-type--p store-address">
                    550, rue King Nord<br />
                    Waterloo (Ontario) N2L 5W6
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title53 desc53"
                    >
                      <title id="title53">Zellers Circular Logo</title>
                      <desc id="desc53">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Main Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+15198846990"
                    >519-884-6990</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/87J9AjkksADiBW2R6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Waterloo Conestoga Mall"
                    alt="Map showing the location of Hudson's Bay Waterloo Conestoga Mall"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11577.129991115904!2d-80.527508!3d43.496442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf3c399ea2b51%3A0xc3b9cfef10515b2f!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716473730549!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+550+King+St+N,+Waterloo,+ON+N2L+5W6/@43.496442,-80.527508,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x882bf3c399ea2b51:0xc3b9cfef10515b2f!2m2!1d-80.5275083!2d43.4964422!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson à Toronto Fairview Mall
                  </h3>
                  <p class="ed-type--p store-address">
                    1800, avenue Sheppard Est<br />
                    Toronto (Ontario) M2J 5A7
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title54 desc54"
                    >
                      <title id="title54">Zellers Circular Logo</title>
                      <desc id="desc54">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Lower Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14164912010"
                    >416-491-2010</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/fcPxgJyiL7xbRY4X7"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Toronto Fairview Mall"
                    alt="Map showing the location of Hudson's Bay Toronto Fairview Mall"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11523.119890372645!2d-79.342865!3d43.777426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d2f06ff485cf%3A0x1da067c6f58561cd!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716473826037!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+1800+Sheppard+Ave+E,+North+York,+ON+M2J+5A7/@43.777426,-79.342865,15z/data=!3m1!5s0x89d4d2f069085c4f:0xb43516d71d7d0380!4m9!4m8!1m0!1m5!1m1!1s0x89d4d2f06ff485cf:0x1da067c6f58561cd!2m2!1d-79.3428647!2d43.7774264!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <!-- TODO: Look into whether or not this has a Zellers location. -->
              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Richmond Hill Centre commercial Hillcrest
                  </h3>
                  <p class="ed-type--p store-address ed-util-mb--1pnt5">
                    9350, rue Yonge<br />
                    Richmond Hill (Ontario) L4C 5G2
                  </p>
                  <a class="ed-type--link store-phone" href="tel:+19058831222"
                    >905-883-1222</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/VboTFHUWVKnvShmv8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Richmond Hill Hillcrest Mall"
                    alt="Map showing the location of Hudson's Bay Richmond Hill Hillcrest Mall"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11508.18462350389!2d-79.43555!3d43.854872!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2ba2c5555555%3A0x16c7f540be1fb19d!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716474098698!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+9350+Yonge+St,+Richmond+Hill,+ON+L4C+5G2/@43.854872,-79.43555,15z/data=!3m1!5s0x882b2ba2cfd5fc65:0x3333a57071fab60c!4m9!4m8!1m0!1m5!1m1!1s0x882b2ba2c5555555:0x16c7f540be1fb19d!2m2!1d-79.4355498!2d43.8548715!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Hamilton Lime Ridge Mall
                  </h3>
                  <p class="ed-type--p store-address">
                    999, rue Upper Wentworth<br />
                    Hamilton (Ontario) L9A 4X5
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title55 desc55"
                    >
                      <title id="title55">Zellers Circular Logo</title>
                      <desc id="desc55">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Main Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+19053188008"
                    >905-318-8008</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/NmAMtBVuT7CocMoMA"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Hamilton Lime Ridge Mall"
                    alt="Map showing the location of Hudson's Bay Hamilton Lime Ridge Mall"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11630.743788928838!2d-79.862184!3d43.216076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9a5013774afd%3A0xb93fcda1fa8efced!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716474367673!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+999+Upper+Wentworth+St,+Hamilton,+ON+L9A+4X5/@43.216076,-79.862184,15z/data=!3m1!5s0x882c9a4fba60f5c3:0x3529fdaf84a36c20!4m9!4m8!1m0!1m5!1m1!1s0x882c9a5013774afd:0xb93fcda1fa8efced!2m2!1d-79.8621836!2d43.2160759!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Centre commercial La Baie d'Hudson Markham Markville
                  </h3>
                  <p class="ed-type--p store-address">
                    5000, autoroute 7<br />
                    Markham (Ontario) L3R 4M9
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title56 desc56"
                    >
                      <title id="title56">Zellers Circular Logo</title>
                      <desc id="desc56">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+19055131770"
                    >905-513-1770</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/Jn8iBMGARrASKFjP6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Markham Markville Shopping Centre"
                    alt="Map showing the location of Hudson's Bay Markham Markville Shopping Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11505.395069788816!2d-79.286232!3d43.869325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d6779aaaaaab%3A0xccb70f606aa53f14!2zSHVkc29u4oCZcyBCYXk!5e0!3m2!1sfr!2sca!4v1716474469605!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson%E2%80%99s+Bay,+5000+Hwy+7,+Markham,+ON+L3R+4M9/@43.869325,-79.286232,15z/data=!3m1!5s0x89d4d677c0527cc9:0xb43516d7d5736d20!4m9!4m8!1m0!1m5!1m1!1s0x89d4d6779aaaaaab:0xccb70f606aa53f14!2m2!1d-79.2862325!2d43.8693247!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Londres Masonville Place
                  </h3>
                  <p class="ed-type--p store-address">
                    1680, rue Richmond<br />
                    Londres (Ontario) N6G 3Y9
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title57 desc57"
                    >
                      <title id="title57">Zellers Circular Logo</title>
                      <desc id="desc57">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Main Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+15196750080"
                    >519-675-0080</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/2U9Jw5hnxFEDnqPb8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay London Masonville Place"
                    alt="Map showing the location of Hudson's Bay London Masonville Place"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11666.93671647056!2d-81.279016!3d43.025982!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882eee435aaaaaab%3A0x53ad7cab90d4b375!2zSHVkc29u4oCZcyBCYXk!5e0!3m2!1sfr!2sca!4v1716474566364!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson%E2%80%99s+Bay,+1680+Richmond+St,+London,+ON+N6G+3Y9/@43.025982,-81.279016,15z/data=!3m1!5s0x882eee434d69b75b:0x93ba42de2ca7ce35!4m9!4m8!1m0!1m5!1m1!1s0x882eee435aaaaaab:0x53ad7cab90d4b375!2m2!1d-81.2790163!2d43.0259816!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Oakville Place
                  </h3>
                  <p class="ed-type--p store-address">
                    240, avenue Leighland<br />
                    Oakville (Ontario) L6H 3H6
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title58 desc58"
                    >
                      <title id="title58">Zellers Circular Logo</title>
                      <desc id="desc58">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+19058424811"
                    >905-842-4811</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/tQqR1KZMnpeVGHbq9"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Oakville Place"
                    alt="Map showing the location of Hudson's Bay Oakville Place"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11584.01191570343!2d-79.687496!3d43.460535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5cdc5a5551f7%3A0x12f64a7d1a3a2890!2zSHVkc29u4oCZcyBCYXk!5e0!3m2!1sfr!2sca!4v1716474666979!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson%E2%80%99s+Bay,+240+Leighland+Ave,+Oakville,+ON+L6H+3H6/@43.460535,-79.687496,15z/data=!3m1!5s0x882b5cdc45842ccf:0xb6e254c406b1802c!4m9!4m8!1m0!1m5!1m1!1s0x882b5cdc5a5551f7:0x12f64a7d1a3a2890!2m2!1d-79.687496!2d43.4605349!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Jardins Sherway de la Baie d'Hudson
                  </h3>
                  <p class="ed-type--p store-address">
                    25 Le centre commercial Ouest<br />
                    Toronto (Ontario) M9C 1B8
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title59 desc59"
                    >
                      <title id="title59">Zellers Circular Logo</title>
                      <desc id="desc59">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Lower Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14166264711"
                    >416-626-4711</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/nme7SfiJ73GpRL7P6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Sherway Gardens"
                    alt="Map showing the location of Hudson's Bay Sherway Gardens"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11555.061805190473!2d-79.559404!3d43.611425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4962cc2e3a8f%3A0xb4e3b9fff80ba22a!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716474766844!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+25+The+West+Mall,+Etobicoke,+ON+M9C+1B8/@43.611425,-79.559404,15z/data=!3m1!5s0x882b4806e77d0839:0x5f4d433e56019ce0!4m9!4m8!1m0!1m5!1m1!1s0x882b4962cc2e3a8f:0xb4e3b9fff80ba22a!2m2!1d-79.5594042!2d43.6114249!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Mississauga Square One
                  </h3>
                  <p class="ed-type--p store-address">
                    100, promenade du centre-ville<br />
                    Mississauga (Ontario) L5B 2C9
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title60 desc60"
                    >
                      <title id="title60">Zellers Circular Logo</title>
                      <desc id="desc60">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Lower Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+19052707600"
                    >905-270-7600</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/kpvJ1TMrmWs3qkK47"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Mississauga Square One"
                    alt="Map showing the location of Hudson's Bay Mississauga Square One"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11558.755970351947!2d-79.640955!3d43.592194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4728b09b1fe7%3A0x31cf02d8c7bf69ac!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716474928107!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+100+City+Centre+Dr,+Mississauga,+ON+L5B+2C9/@43.592194,-79.640955,15z/data=!3m1!5s0x882b472ec9255185:0x4eafad18fb993530!4m9!4m8!1m0!1m5!1m1!1s0x882b4728b09b1fe7:0x31cf02d8c7bf69ac!2m2!1d-79.6409548!2d43.5921943!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Etobicoke Woodbine Centre
                  </h3>
                  <p class="ed-type--p store-address">
                    500, boulevard Rexdale<br />
                    Toronto (Ontario) M9W 6K5
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title61 desc61"
                    >
                      <title id="title61">Zellers Circular Logo</title>
                      <desc id="desc61">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14166746000"
                    >416-674-6000</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/ghru5HGVkRjjeLu36"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Etobicoke Woodbine Centre"
                    alt="Map showing the location of Hudson's Bay Etobicoke Woodbine Centre"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11534.301076697642!2d-79.598864!3d43.719375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3a4be0d5d49f%3A0xab60f58d7b4d56ce!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716475065611!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+500+Rexdale+Blvd,+Toronto,+ON+M9W+6K5/@43.719375,-79.598864,15z/data=!3m1!5s0x882b3a4bfb71f4a3:0xc36793e27034c085!4m9!4m8!1m0!1m5!1m1!1s0x882b3a4be0d5d49f:0xab60f58d7b4d56ce!2m2!1d-79.598864!2d43.719375!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Toronto Yorkdale
                  </h3>
                  <p class="ed-type--p store-address">
                    3401, rue Dufferin<br />
                    Toronto (Ontario) M6A 2T9
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title62 desc62"
                    >
                      <title id="title62">Zellers Circular Logo</title>
                      <desc id="desc62">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Lower Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14167898011"
                    >416-789-8011</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/NJfs49DvEwBTE7nRA"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Toronto Yorkdale"
                    alt="Map showing the location of Hudson's Bay Toronto Yorkdale"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11532.963833032081!2d-79.455262!3d43.726321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b323308d83015%3A0x91690415d9309dcb!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716475162640!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+3401+Dufferin+St,+North+York,+ON+M6A+2T9/@43.726321,-79.455262,15z/data=!3m1!5s0x882b323414fd66c5:0xebbb95527c58e388!4m9!4m8!1m0!1m5!1m1!1s0x882b323308d83015:0x91690415d9309dcb!2m2!1d-79.4552617!2d43.7263211!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <!-- TODO: Look into whether or not this has a Zellers location. -->
              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    Magasin-entrepôt La Baie d'Hudson d'Eglinton Square
                  </h3>
                  <p class="ed-type--p store-address ed-util-mb--1pnt5">
                    1 Eglinton Square<br />
                    Toronto, ON M1L 2K2
                  </p>
                  <a class="ed-type--link store-phone" href="tel:+14167594771"
                    >416-759-4771</a
                  >
                  <p class="ed-util-pt--1pnt5">
                    <strong
                      >Dans ce magasin, nous avons réduit de façon permanente le
                      prix de toute la marchandise, de la mode aux accessoires,
                      en passant par les chaussures et les articles pour la
                      maison. Vous y trouverez chaque fois un assortiment
                      différent de vos marques préférées, alors allez-y
                      souvent!</strong
                    >
                  </p>
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/PhcvTy6QixxHzdZ6A"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Eglinton Square Outlet"
                    alt="Map showing the location of Hudson's Bay Eglinton Square Outlet"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11533.617844526!2d-79.300737!3d43.722924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cddccd38eb93%3A0x2a87aead80efb2a!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716475298147!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+1+Eglinton+Square,+Toronto,+ON+M1L+2K2/@43.722924,-79.300737,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89d4cddccd38eb93:0x2a87aead80efb2a!2m2!1d-79.300737!2d43.722924!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>
            </section>
            <!-- END OF ON -->

            <!-- START OF QB -->
            <section
              class="ed-container--tab"
              id="tab6"
              role="tabpanel"
              aria-labelledby="tab6-tab"
              tabindex="0"
              hidden
            >
              <header class="ed-container--header">
                <hr />
                <h2 class="ed-type--h2">Québec</h2>
              </header>

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie D'Hudson Rosemère (Place)
                  </h3>
                  <p class="ed-type--p store-address">
                    401, boulevard Labelle<br />
                    Rosemère, QC J7A 3T2
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title63 desc63"
                    >
                      <title id="title63">Zellers Circular Logo</title>
                      <desc id="desc63">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 2</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14504336991"
                    >450-433-6991</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/XQvhp82fh2ULFyJj6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of La Baie D'Hudson Rosemère (Place)"
                    alt="Map showing the location of La Baie D'Hudson Rosemère (Place)"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11159.93953036794!2d-73.816306!3d45.63104!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc927b3bb592b8b%3A0x5a4d507fe4b7bcc8!2sLa%20Baie%20d%E2%80%99Hudson!5e0!3m2!1sfr!2sca!4v1716475853058!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//La+Baie+d%E2%80%99Hudson,+401+Boul.+Labelle,+Rosem%C3%A8re,+QC+J7A+3T2/@45.63104,-73.816306,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4cc927b3bb592b8b:0x5a4d507fe4b7bcc8!2m2!1d-73.8163065!2d45.6310398!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie D'Hudson Anjou (Galeries)
                  </h3>
                  <p class="ed-type--p store-address">
                    7895 boulevard des Galeries d'Anjou
                    <br />
                    Montréal, QC H1M 1W6
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title64 desc64"
                    >
                      <title id="title64">Zellers Circular Logo</title>
                      <desc id="desc64">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 1</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+15143533300"
                    >514-353-3300</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/rJtmfBukMd2TWdGj9"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of La Baie D'Hudson Anjou (Galeries)"
                    alt="Map showing the location of La Baie D'Hudson Anjou (Galeries)"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11166.047409226794!2d-73.566743!3d45.600357!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91e6414914957%3A0xdfb5a38d8221c64a!2sLa%20Baie%20d&#39;Hudson!5e0!3m2!1sfr!2sca!4v1716476045723!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//La+Baie+d'Hudson,+7895+Bd+des+Galeries+d'Anjou,+Anjou,+QC+H1M+1W6/@45.600357,-73.566743,15z/data=!3m1!5s0x4cc91e64e344e901:0xb43516d786be1a60!4m9!4m8!1m0!1m5!1m1!1s0x4cc91e6414914957:0xdfb5a38d8221c64a!2m2!1d-73.5667431!2d45.6003568!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie D'Hudson Sherbrooke Carrefour De L'Estrie
                  </h3>
                  <p class="ed-type--p store-address">
                    3000 boulevard de Portland<br />
                    Sherbrooke, QC J1L 1J8
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title65 desc65"
                    >
                      <title id="title65">Zellers Circular Logo</title>
                      <desc id="desc65">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level B1</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+18195632114"
                    >819-563-2114</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/eqEpqL4GeNnZWPqz5"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of La Baie D'Hudson Sherbrooke Carrefour De L'Estrie"
                    alt="Map showing the location of La Baie D'Hudson Sherbrooke Carrefour De L'Estrie"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11205.509938718114!2d-71.950305!3d45.401727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb7b49502b85551%3A0x4d5cbb735979567!2sLa%20Baie%20d%E2%80%99Hudson!5e0!3m2!1sfr!2sca!4v1716476194920!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir/45.0840461,-64.4933021/La+Baie+d%E2%80%99Hudson,+3000+Boul+de+Portland,+Sherbrooke,+QC+J1L+1J8/@46.0832156,-73.8075716,6z/data=!3m2!4b1!5s0x4cb7b495e8823007:0x1e314697ef4609f0!4m18!1m7!3m6!1s0x4cb7b49502b85551:0x4d5cbb735979567!2sLa+Baie+d%E2%80%99Hudson!8m2!3d45.401727!4d-71.9503055!16s%2Fg%2F1tf0q6r1!4m9!1m1!4e1!1m5!1m1!1s0x4cb7b49502b85551:0x4d5cbb735979567!2m2!1d-71.9503055!2d45.401727!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie D'Hudson Gatineau (Les Promenades)
                  </h3>
                  <p class="ed-type--p store-address">
                    1100 Boulevard Maloney Ouest #1<br />
                    Gatineau, QC J8T 6G3
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title66 desc66"
                    >
                      <title id="title66">Zellers Circular Logo</title>
                      <desc id="desc66">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 2</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+18192437036"
                    >819-243-7036</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/HNGckjTvNmMxArpT6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of La Baie D'Hudson Gatineau (Les Promenades)"
                    alt="Map showing the location of La Baie D'Hudson Gatineau (Les Promenades)"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11190.55730271369!2d-75.693722!3d45.477069!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050192682857%3A0xc9df5256a0e7df01!2sLa%20Baie%20d&#39;Hudson!5e0!3m2!1sfr!2sca!4v1716476305777!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//La+Baie+d'Hudson,+1100+Bd+Maloney+O+%231,+Gatineau,+Quebec+J8T+6G3/@45.477069,-75.693722,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4cce050192682857:0xc9df5256a0e7df01!2m2!1d-75.6937223!2d45.477069!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie D'Hudson Québec-Capitale (Les Galeries)
                  </h3>
                  <p class="ed-type--p store-address">
                    5401 boulevard des Galeries<br />
                    Ville de Québec, QC G2K 1N4
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title67 desc67"
                    >
                      <title id="title67">Zellers Circular Logo</title>
                      <desc id="desc67">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 1</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14186275922"
                    >418-627-5922</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/wRYgsVjqWRFnaxZ48"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of La Baie D'Hudson Quebec-Capitale (Les Galeries)"
                    alt="Map showing the location of La Baie D'Hudson Quebec-Capitale (Les Galeries)"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10918.574178996545!2d-71.301744!3d46.83102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb897933e1321a3%3A0x5b407c8736aa0bc2!2sLa%20Baie%20d&#39;Hudson!5e0!3m2!1sfr!2sca!4v1716497667850!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//La+Baie+d'Hudson,+5401+Bd+des+Galeries,+Qu%C3%A9bec,+QC+G2K+1N4/@46.83102,-71.301744,15z/data=!3m1!5s0x4cb89793121375f9:0x867bcc8c5f9d4100!4m9!4m8!1m0!1m5!1m1!1s0x4cb897933e1321a3:0x5b407c8736aa0bc2!2m2!1d-71.3017439!2d46.8310195!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie D'Hudson Brossard Mall Champlain
                  </h3>
                  <p class="ed-type--p store-address">
                    2151, boulevard Lapinière<br />
                    Brossard, QC J4W 2T5
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title68 desc68"
                    >
                      <title id="title68">Zellers Circular Logo</title>
                      <desc id="desc68">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14504663220"
                    >450-466-3220</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/sUp67hZswpniNfSw5"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of La Baie D'Hudson Brossard Mall Champlain"
                    alt="Map showing the location of La Baie D'Hudson Brossard Mall Champlain"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11191.842319901474!2d-73.472933!3d45.470598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90570b7b5667f%3A0xde151cd31b1a0678!2sLa%20Baie%20d&#39;Hudson!5e0!3m2!1sfr!2sca!4v1716497782589!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//La+Baie+d'Hudson,+2151+Boul.+Lapini%C3%A8re,+Brossard,+QC+J4W+2T5/@45.470598,-73.472933,15z/data=!3m1!5s0x4cc9057a0c2ca727:0x1e314697895d26c5!4m9!4m8!1m0!1m5!1m1!1s0x4cc90570b7b5667f:0xde151cd31b1a0678!2m2!1d-73.4729332!2d45.4705984!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie D'Hudson Angrignon (Carrefour)
                  </h3>
                  <p class="ed-type--p store-address">
                    7091 Boul Newman<br />
                    Lasalle, QC H8N 1X1
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title69 desc69"
                    >
                      <title id="title69">Zellers Circular Logo</title>
                      <desc id="desc69">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Main Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+15143660825"
                    >514-366-0825</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/BbJopne5FhzRfghZ9"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of La Baie D'Hudson Angrignon (Carrefour)"
                    alt="Map showing the location of La Baie D'Hudson Angrignon (Carrefour)"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11196.38629463174!2d-73.618677!3d45.44771!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc910d8d2670061%3A0x4a495055cf691c59!2sLa%20Baie%20d%E2%80%99Hudson!5e0!3m2!1sfr!2sca!4v1716497888416!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//La+Baie+d%E2%80%99Hudson,+Carrefour+Angrignon,+7091+Newman+Blvd,+Lasalle,+Quebec+H8N+1X1/@45.44771,-73.618677,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4cc910d8d2670061:0x4a495055cf691c59!2m2!1d-73.6186774!2d45.4477095!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie D'Hudson Rockland
                  </h3>
                  <p class="ed-type--p store-address">
                    2435, chemin Rockland<br />
                    Montréal, QC H3P 2Z3
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title70 desc70"
                    >
                      <title id="title70">Zellers Circular Logo</title>
                      <desc id="desc70">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Lower Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+15147395521"
                    >514-739-5521</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/GA336PF3eiP8La3q7"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of La Baie D'Hudson Rockland"
                    alt="Map showing the location of La Baie D'Hudson Rockland"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11180.475564907101!2d-73.648865!3d45.527813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc918558ded10d5%3A0x31539f6ddd401559!2sLa%20Baie%20d&#39;Hudson!5e0!3m2!1sfr!2sca!4v1716498011681!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//La+Baie+d'Hudson,+2435+Rockland+Rd,+Montreal,+Quebec+H3P+2Z3/@45.527813,-73.648865,15z/data=!3m1!5s0x4cc918ff0c62efbf:0x1e3146978dc2ef55!4m9!4m8!1m0!1m5!1m1!1s0x4cc918558ded10d5:0x31539f6ddd401559!2m2!1d-73.6488648!2d45.5278129!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie D'Hudson Saint-Bruno (Les Promenades)
                  </h3>
                  <p class="ed-type--p store-address">
                    800, boulevard des Promenades<br />
                    Saint-Bruno, QC J3V 5J9
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title71 desc71"
                    >
                      <title id="title71">Zellers Circular Logo</title>
                      <desc id="desc71">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14506534455"
                    >450-653-4455</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/nvZ1fex3VG27w7Dr8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of La Baie D'Hudson St. Bruno (Les Promenades)"
                    alt="Map showing the location of La Baie D'Hudson St. Bruno (Les Promenades)"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11185.21891299101!2d-73.378229!3d45.503944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9069769ab1f31%3A0x528540345ba0c00!2sLa%20Baie%20d&#39;Hudson!5e0!3m2!1sfr!2sca!4v1716498199527!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//La+Baie+d'Hudson,+800+Bd+des+Promenades,+Saint-Bruno-de-Montarville,+QC+J3V+5J9/@45.503944,-73.378229,15z/data=!3m1!5s0x4cc90699c77d1315:0x5f4d433e903a0b30!4m9!4m8!1m0!1m5!1m1!1s0x4cc9069769ab1f31:0x528540345ba0c00!2m2!1d-73.3782295!2d45.5039437!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie D'Hudson Carrefour Laval
                  </h3>
                  <p class="ed-type--p store-address">
                    3045 boulevard le Carrefour<br />
                    Laval, Québec H7T 1C7
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title72 desc72"
                    >
                      <title id="title72">Zellers Circular Logo</title>
                      <desc id="desc72">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level L2</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14506871540"
                    >450-687-1540</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/EXhfMCqmFmfAQCqr6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of La Baie D'Hudson Carrefour Laval"
                    alt="Map showing the location of La Baie D'Hudson Carrefour Laval"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11171.613830061353!2d-73.75245!3d45.57238!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc923c3b8ffbad3%3A0xce08d466ebc7855b!2sLa%20Baie%20d&#39;Hudson!5e0!3m2!1sfr!2sca!4v1716498323120!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//La+Baie+d'Hudson,+3045+Boul.+le+Carrefour,+Laval,+QC+QC+H7T+1C7/@45.57238,-73.75245,15z/data=!3m1!5s0x4cc923c2bac8a24d:0x5eb41fbf2dc8dae0!4m9!4m8!1m0!1m5!1m1!1s0x4cc923c3b8ffbad3:0xce08d466ebc7855b!2m2!1d-73.7524502!2d45.5723799!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie D'Hudson Centre Laval
                  </h3>
                  <p class="ed-type--p store-address">
                    1600 boulevard le Corbusier<br />
                    Laval, QC H7S 1Y9
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title73 desc73"
                    >
                      <title id="title73">Zellers Circular Logo</title>
                      <desc id="desc73">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Main Level</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+14506888970"
                    >450-688-8970</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/Zj8Qv6xLsXNfGBGt5"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of La Baie D'Hudson Centre Laval"
                    alt="Map showing the location of La Baie D'Hudson Centre Laval"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11174.02942096625!2d-73.729765!3d45.560235!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc92233707adcfd%3A0xd53babc47c04ccf8!2sLa%20Baie%20d%E2%80%99Hudson!5e0!3m2!1sfr!2sca!4v1716498449550!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//La+Baie+d%E2%80%99Hudson,+1600+Boul.+le+Corbusier,+Laval,+QC+H7S+1Y9/@45.560235,-73.729765,15z/data=!3m1!5s0x4cc92234d2d01585:0xb825fcece30bb0ac!4m9!4m8!1m0!1m5!1m1!1s0x4cc92233707adcfd:0xd53babc47c04ccf8!2m2!1d-73.7297647!2d45.560235!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie D'Hudson Fairview Pointe-Claire
                  </h3>
                  <p class="ed-type--p store-address">
                    6790 route Transcanadienne<br />
                    Pointe-Claire, QC H9R 5J2
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title74 desc74"
                    >
                      <title id="title74">Zellers Circular Logo</title>
                      <desc id="desc74">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level L3</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+15146974870"
                    >514-697-4870</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/z91ucdqHPFRbtxMu9"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of La Baie D'Hudson Fairview Pointe-Claire"
                    alt="Map showing the location of La Baie D'Hudson Fairview Pointe-Claire"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d358176.0547653914!2d-73.82991!3d45.464759!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc93cf005c9cd71%3A0x182c2263243fdc4c!2sLa%20Baie%20d&#39;Hudson!5e0!3m2!1sfr!2sca!4v1716498547320!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//La+Baie+d'Hudson,+6790+Route+Transcanadienne,+Pointe-Claire,+QC+H9R+5J2/@45.464759,-73.82991,10z/data=!3m1!5s0x4cc93c71a59f19a9:0xbb811745ec6889e0!4m9!4m8!1m0!1m5!1m1!1s0x4cc93cf005c9cd71:0x182c2263243fdc4c!2m2!1d-73.82991!2d45.464759!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie D'Hudson Montréal Centre-Ville
                  </h3>
                  <p class="ed-type--p store-address">
                    585, rue Sainte-Catherine Ouest<br />
                    Montréal, Québec H3B 3Y5
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title75 desc75"
                    >
                      <title id="title75">Zellers Circular Logo</title>
                      <desc id="desc75">
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
                      Zellers Pop Up
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Upper Level L4</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+15142814422"
                    >514-281-4422</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/FZTyufF7HQ3ZpnhUA"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of La Baie D'Hudson Montréal Centre-Ville"
                    alt="Map showing the location of La Baie D'Hudson Montréal Centre-Ville"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11185.17659331782!2d-73.569217!3d45.504157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a45a55af241%3A0x383e632ab22c0112!2sLa%20Baie%20d&#39;Hudson!5e0!3m2!1sfr!2sca!4v1716498644109!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//La+Baie+d'Hudson,+585+Rue+Sainte-Catherine,+Montr%C3%A9al,+QC+H3B+3Y5/@45.504157,-73.569217,15z/data=!3m1!5s0x4cc91a4153ba3497:0x1f890772e4f01705!4m9!4m8!1m0!1m5!1m1!1s0x4cc91a45a55af241:0x383e632ab22c0112!2m2!1d-73.5692167!2d45.504157!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>
            </section>
            <!-- END OF QB -->

            <!-- START OF NS -->
            <section
              class="ed-container--tab"
              id="tab7"
              role="tabpanel"
              aria-labelledby="tab7-tab"
              tabindex="0"
              hidden
            >
              <header class="ed-container--header">
                <hr />
                <h2 class="ed-type--h2">Nouvelle-Écosse</h2>
              </header>

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson Dartmouth Mic Mac Mall
                  </h3>
                  <p class="ed-type--p store-address">
                    21, boulevard Micmac<br />
                    Dartmouth (Nouvelle-Écosse) B3A 4K7
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title76 desc76"
                    >
                      <title id="title76">Zellers Circular Logo</title>
                      <desc id="desc76">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 2</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+19024696680"
                    >902-469-6680</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/64SRYrXybNUc59b47"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Dartmouth Mic Mac Mall"
                    alt="Map showing the location of Hudson's Bay Dartmouth Mic Mac Mall"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11346.28146098279!2d-63.56039!3d44.687553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a26aa2ce4794f%3A0x677277e86b7419ac!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716470878958!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+21+Micmac+Blvd,+Dartmouth,+NS+B3A+4K7/@44.687553,-63.56039,15z/data=!3m1!5s0x4b5a26abcb5f5577:0x1e3146971db41250!4m9!4m8!1m0!1m5!1m1!1s0x4b5a26aa2ce4794f:0x677277e86b7419ac!2m2!1d-63.5600428!2d44.6872625!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>

              <hr />

              <div class="ed-container--store">
                <address class="ed-container--store__address ed-util-pr--2pnt5">
                  <h3 class="store-name ed-type--h3 ed-util-pb--pnt5">
                    La Baie d'Hudson, Sydney Mayflower Mall
                  </h3>
                  <p class="ed-type--p store-address">
                    800, chemin Grand Lac<br />
                    Sydney (Nouvelle-Écosse) B1P 6S9
                  </p>
                  <div class="ed-container--zellers ed-util-py--1pnt5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="title77 desc77"
                    >
                      <title id="title77">Zellers Circular Logo</title>
                      <desc id="desc77">
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
                      <span class="ed-util--normal ed-util--sans zellers-floor"
                        >- Level 1</span
                      >
                    </h4>
                  </div>
                  <a class="ed-type--link store-phone" href="tel:+19025398350"
                    >902-539-8350</a
                  >
                </address>
                <div class="ed-container--store__hours ed-util-pr--2pnt5">
                  <a
                    class="ed-type--link"
                    href="https://maps.app.goo.gl/JDC16ciAQVBB6QqN6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cliquer ici pour voir les heures d'ouverture: link to store hours"
                    >Cliquer ici pour voir les heures d'ouverture</a
                  >
                </div>
                <div
                  class="ed-container--store__map ed-util-pt--1pnt5 ed-util-pt--0--lg"
                >
                  <iframe
                    title="Map showing the location of Hudson's Bay Sydney Mayflower Mall"
                    alt="Map showing the location of Hudson's Bay Sydney Mayflower Mall"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11056.7536826967!2d-60.138686!3d46.146994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b67e3ca090a15d7%3A0x335461c9b8b2f3ad!2sHudson&#39;s%20Bay!5e0!3m2!1sfr!2sca!4v1716470984751!5m2!1sfr!2sca"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="250"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//Hudson's+Bay,+800+Grand+Lake+Rd,+Grand+Lake+Road,+NS+B1P+6S9/@46.146994,-60.138686,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4b67e3ca090a15d7:0x335461c9b8b2f3ad!2m2!1d-60.1386858!2d46.1469941!3e0?hl=fr&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ed-link--regular ed-type--link ed-util--t-black ed-util--bg-grey ed-util-mt--1pnt25 ed-util-mb--2pnt5"
                    aria-label="Voir L'itinéraire: link to map pin of store"
                    >Voir L'itinéraire &rarr;</a
                  >
                </div>
              </div>
            </section>`;

const dom = new JSDOM(htmlContent);
const { document } = dom.window;

const provinces = document.querySelectorAll('.ed-container--tab');
const data = {};

provinces.forEach((province) => {
  const provinceName = province.querySelector('header h2').textContent.trim();
  const stores = province.querySelectorAll('.ed-container--store');

  data[provinceName] = [];

  stores.forEach((store) => {
    const storeName =
      store.querySelector('.store-name')?.textContent.trim() || '';
    const address =
      store.querySelector('.store-address')?.textContent.trim() || '';
    const zellersFloor =
      store.querySelector('.zellers-floor')?.textContent.trim() || '';
    const phone = store.querySelector('.store-phone')?.textContent.trim() || '';
    const hoursLink =
      store.querySelector('.ed-container--store__hours a')?.href || '';
    const mapLink =
      store.querySelector('.ed-container--store__map iframe')?.src || '';
    const directionsLink =
      store.querySelector('.ed-container--store__map a')?.href || '';

    data[provinceName].push({
      storeName,
      address,
      zellersFloor,
      phone,
      hoursLink,
      mapLink,
      directionsLink,
    });
  });
});

console.log(JSON.stringify(data, null, 2));
