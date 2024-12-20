import React, { } from "react";
  
export default function Profile(){
    return(
      <div className="container" style={{paddingTop: 60}}>
        <div className="row">
            <div style = {{minHeight: 800, marginTop: 20 }}>
                <h1>Profile Page</h1>
                <p>Hi, this is your profile</p>
            </div>
        </div>  
      </div>
    )
}

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Use navigate instead of useHistory

// export default function Profile() {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);
  
//   const navigate = useNavigate(); // Use navigate for redirection

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         // Get the JWT token from localStorage or sessionStorage
//         const token = localStorage.getItem("token");

//         // If no token, redirect to login
//         if (!token) {
//           navigate("/login");  // Redirect to login page
//           return;
//         }

//         // Fetch the user's profile data
//         const response = await axios.get("http://localhost:5000/api/auth/profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setUser(response.data);
//       } catch (err) {
//         console.error("Error fetching profile:", err);
//         setError("Error fetching profile details");
//       }
//     };

//     fetchProfile();
//   }, [navigate]);  // Add navigate to dependencies array

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container" style={{ paddingTop: 60 }}>
//       <div className="row">
//         <div style={{ minHeight: 800, marginTop: 20 }}>
//           <h1>Profile Page</h1>
//           <p>Hi, {user.name}</p>
//           <p>Email: {user.email}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
