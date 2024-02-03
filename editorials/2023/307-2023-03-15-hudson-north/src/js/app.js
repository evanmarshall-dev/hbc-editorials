// // import BackToTop from './components/BackToTop';
// //import ResponsiveImage from './components/ResponsiveImage';
// //import Router from './components/Router';

// class App {
//   constructor() {
//     console.log("From App!");
//     this.init();
//   }

//   init() {
//     //Back to Top
//     // new BackToTop('.test-back-to-top');

//     $("#scroll_icon").click(function () {
//       console.log("ffff");
//       jQuery("html,body").animate({ scrollTop: 0 }, 10);
//     });

//     initcarousele();

//     ///// check if url has changed (to trigger carousel if needed.)
//     window.addEventListener("hashchange", function () {
//       console.log("location changed!", window.location.hash);
//       initcarousele();
//     });

//     function initcarousele() {
//       console.log("initcarousele");

//       $("#hbc-carousel-five").hbcCarousel({
//         slidesToShow: 5,
//         dots: true,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//             },
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//             },
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//             },
//           },
//         ],
//       });

//       //HBC Carousel tress
//       $("#hbc-carousel").hbcCarousel({
//         slidesToShow: 5,
//         dots: true,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//             },
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//             },
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//             },
//           },
//         ],
//       });
//       /*if (window.location.hash=='#decor'){
//                 console.log('decor');
//                 //HBC Carousel five decor
//                 $('#hbc-carousel-five').hbcCarousel({
//                     slidesToShow: 5,
//                     dots: true,
//                     responsive: [
//                             {
//                                 breakpoint: 1024,
//                                 settings: {
//                                     slidesToShow: 3,
//                                 }
//                             },
//                             {
//                                 breakpoint: 600,
//                                 settings: {
//                                     slidesToShow: 2,
//                                 }
//                             },
//                             {
//                                 breakpoint: 480,
//                                 settings: {
//                                     slidesToShow: 1,
//                                 }
//                             }
//                         ]
//                 });
//             }*/
//     }
//   }
// }

// //Start App
// const MyApp = new App();
