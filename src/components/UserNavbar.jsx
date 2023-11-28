// import logo from "../assets/logo.png";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const UserNavbar = () => {
//   const [show, setShow] = useState(false);

//   return (
//     <nav className={show ? "open" : ""}>
//       <div className="container">
//         <div className="logo">
//           <img src={logo} alt="" />
//         </div>

//         <div className="links">
//           <ul>
//             <li>
//               <Link href="/">Home</Link>
//             </li>
//             <li>
//               <Link href="/about">About</Link>
//             </li>

//             <li>
//               <Link href="/portfolios">Portfolio</Link>
//             </li>

//             <li>
//               <Link href="/contact">Contact</Link>
//             </li>
//             <li>
//               <Link href="/profile">Profile</Link>
//             </li>
//             <li>
//               <Link href="/" onClick={() => signOut()}>
//                 Log Out
//               </Link>
//             </li>
//             <li>
//               <Link href="/calendar" className="active">
//                 Book now
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div onClick={() => setShow(!show)} className="hamburger-menu">
//           <div className="bar"></div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default UserNavbar;
