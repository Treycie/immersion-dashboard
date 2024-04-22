// import React from "react";
// import upArrowIcon from "./assets/images/upArrowIcon.svg";
// import vehicleIcon from "./assets/images/vehicleIcon.svg";
// import downArrowIcon from "./assets/images/downArrowIcon.svg";


// const sharedClasses = {
//   button:
//     "p-2 rounded-full bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600",
//   input:
//     "px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500",
//   card: "bg-white dark:bg-zinc-700 p-4 rounded-lg shadow flex items-center",
// };

// const roundedFull = "rounded-full";
// const marginTop1 = "mt-1";
// const marginTop2 = "mt-2";

// const Dashboard = () => {
//   return (
//     <div className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white">
//       <div className="container mx-auto px-4 py-6">
//         <div className="flex justify-between items-center mb-8">
//           <div className="flex space-x-4 items-center">
//             <input
//               type="text"
//               placeholder="Search here"
//               className={sharedClasses.input}
//             />
//             <Avatar><Badge badgeContent={21}><NotificationsNoneIcon /></Badge></Avatar>
//             <Avatar><Badge badgeContent={53}><MessageIcon /></Badge></Avatar>
//             <Avatar><Badge badgeContent={15}><CardGiftcardIcon /></Badge></Avatar>
//             <Avatar><Badge badgeContent={19}><SettingsIcon /></Badge></Avatar>           
//             </div>
//           <div className="flex items-center space-x-2">
//             <span>Hello, Samantha</span>
//             <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//           </div>
//         </div>

//         <div className="mb-6">
//           <h1 className="text-2xl font-bold">Dashboard</h1>
//           <p>Hi, Samantha. Welcome to Yooke Admin!</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           <div className="bg-white rounded-lg shadow p-4 max-w-sm">
//             <div className="flex items-center space-x-3">
//               <div className={`p-2 bg-zinc-100 ${roundedFull}`}>
//                 <img src={vehicleIcon} alt="vehicle-icon" />
//               </div>
//               <div className="text-3xl font-semibold">300</div>
//             </div>
//             <div className={`text-zinc-700 ${marginTop2}`}>Total Rides</div>
//             <div className={`text-black text-sm ${marginTop1}`}>
//               <span className="inline-flex items-center">
//                 <img src={upArrowIcon} alt="up arrow" />
//                 4% (30 days)
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           <div className="bg-white rounded-lg shadow p-4 max-w-sm">
//             <div className="flex items-center space-x-3">
//               <div className={`p-2 bg-zinc-100 ${roundedFull}`}>
//                 <img src={vehicleIcon} alt="Car Icon" />
//               </div>
//               <div className="text-3xl font-semibold">500</div>
//             </div>
//             <div className={`text-zinc-700 ${marginTop2}`}>
//               Total Registrations
//             </div>
//             <div className={`text-black text-sm ${marginTop1}`}>
//               <span className="inline-flex items-center">
//                 <img src={upArrowIcon} alt="up arrow" />
//                 4% (30 days)
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           <div className="bg-white rounded-lg shadow p-4 max-w-sm">
//             <div className="flex items-center space-x-3">
//               <div className={`p-2 bg-zinc-100 ${roundedFull}`}>
//                 <img src={vehicleIcon} alt="Car Icon" />
//               </div>
//               <div className="text-3xl font-semibold">65</div>
//             </div>
//             <div className={`text-zinc-700 ${marginTop2}`}>
//               Total Canceled Rides
//             </div>
//             <div className={`text-black text-sm ${marginTop1}`}>
//               <span className="inline-flex items-center">
//                 <img src={downArrowIcon} alt="up arrow" />
//                 25% (30 days)
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           <div className="bg-white rounded-lg shadow p-4 max-w-sm">
//             <div className="flex items-center space-x-3">
//               <div className={`p-2 bg-zinc-100 ${roundedFull}`}>
//                 <img src={vehicleIcon} alt="Car Icon" />
//               </div>
//               <div className="text-3xl font-semibold">128</div>
//             </div>
//             <div className={`text-zinc-700 ${marginTop2}`}>
//               Trips in process
//             </div>
//             <div className={`text-black text-sm ${marginTop1}`}>
//               <span className="inline-flex items-center">
//                 <img src={downArrowIcon} alt="up arrow" />
//                 12% (30 days)
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-between items-center">
//         <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-blue-600">
//           Filter Period
//         </button>
//         <span>Filter results: Jan 2021 - Dec 2021</span>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

