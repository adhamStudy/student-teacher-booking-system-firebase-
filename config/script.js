import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";  
//import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
// import { getFirestore,enableIndexedDbPersistence  } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { getFirestore, enableIndexedDbPersistence, getDocs, collection , setDoc, doc,getDoc,addDoc  } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
//import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
 //2312
//  const firebaseConfig = {
//    apiKey: "AIzaSyChoQrcyahRHfQ7fI8OlNglB_EjfwSjeNc",
//    authDomain: "student-booking-9e07b.firebaseapp.com",
//    projectId: "student-booking-9e07b",
//    storageBucket: "student-booking-9e07b.appspot.com",
//    messagingSenderId: "64974206848",
//    appId: "1:64974206848:web:3b5637393b828a3b7c3365"
//  };

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1Jx6v0lGPiY060w9-amv0t3UWWI514rM",
    authDomain: "student-booking-4e659.firebaseapp.com",
    projectId: "student-booking-4e659",
    storageBucket: "student-booking-4e659.appspot.com",
    messagingSenderId: "754306964298",
    appId: "1:754306964298:web:7a8b9c8570665b2aa5bfb3"
  };

 // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
//  const auth = firebase.auth();
// const db = firebase.firestore();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Add this line to initialize Firebase authentication


// Enable offline data persistence
enableIndexedDbPersistence(db)
  .then(() => {
    console.log("Firestore persistence enabled");
   
  })
  .catch((err) => {
    console.error("Error enabling Firestore persistence:", err);
  });


//sign in 
  document.addEventListener('DOMContentLoaded', function () {
    const signinButton = document.getElementById('signin');
    signinButton.addEventListener('click', login);
  });



function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // const email ='admin@gmail.com';
    // const password =  'admin@123';
    if (!email || !password) {
        alert('Please enter email and password.');
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;

            // Assuming you have a 'users' collection in Firestore
            const usersCollection = collection(db, 'users');

            // Retrieve user data from Firestore
            const userDoc = await getDoc(doc(usersCollection, user.uid));

            if (userDoc.exists()) {
                const userData = userDoc.data();
                console.log('User Data:', userData);
               // console.log(userDoc);
                 // Store user details in local storage
                 localStorage.setItem('user', JSON.stringify(userData));
                 localStorage.setItem('userId', JSON.stringify(userDoc.id));
                 localStorage.setItem('isLoggedIn', 'true');
                 window.location.href = 'admin/dashboard.html';
            } else {
                console.error('User document not found.');
            }
        })
        .catch((error) => {
            console.error(error.message);
            alert('Login failed. Check your email and password.');
        });
}
// Check if the user is logged in
// document.addEventListener('DOMContentLoaded', function () {
//     const userData = localStorage.getItem('user');

//     if (userData) {
//         // User is logged in, navigate to the dashboard page
//         window.location.href = 'admin/dashboard.html';
//     }
//     else{
//         window.location.href = baseURL;
    
//     }
//     // If not logged in, the user stays on the index page
// });
// -----------------------------------check user -------------------------------------    
const userData = localStorage.getItem('user');
const currentURL = window.location.href;

// Replace 'admin/dashboard.html' and baseURL with your actual URLs
const dashboardURL = 'admin/dashboard.html';
const loginURL = baseURL;
const singupURL = baseURL +'sign_up.html';

if (userData) {
    // User is logged in, check if already on the dashboard page
    //if (currentURL.indexOf(dashboardURL) === -1 ) {
    if (currentURL === loginURL &&  currentURL !== singupURL) {
        // Not on the dashboard, navigate to the dashboard page
        window.location.href = dashboardURL;
    }
} else {
    // User is not logged in, check if already on the login page
    // if (currentURL !== loginURL &&  currentURL !== singupURL) {
    //     // Not on the login page, navigate to the login page
    //     window.location.href = loginURL;
    // }
}
// -----------------------------------check user -------------------------------------       
// Register  --- signup
document.addEventListener('DOMContentLoaded', function () {
    const registerButton = document.getElementById('registerbtn');
    registerButton.addEventListener('click', signup);
  });



  async function signup() {
    // const email ='admin@gmail.com';
    // const password =  'admin@123';
    console.log("Signup");
    const name = document.getElementById('uname').value;
    const email = document.getElementById('uemail').value;
    const password = document.getElementById('upassword').value;
    const confirmPassword = document.getElementById('uconfrimpassword').value;
    const mobileNumber =  document.getElementById('unumber').value;
    const userStatus = '2';



    // Validation: Password and Confirm Password should match
    if (password !== confirmPassword) {
        alert('Password and Confirm Password do not match.');
        return;
    }
    //students
    
        const usersCollection = collection(db, 'students');
            
        // Use 'setDoc' to set data for the document
        const docStud = await  addDoc(usersCollection, {
        email: email,
        name:name,
        mobileNumber: mobileNumber,
        userStatus: parseInt(userStatus),
        approvestatus:0
        })
        // Retrieve the ID of the newly created document
        const studentId = docStud.id;
   
    //students

    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;

            // Use 'collection' method on 'db' directly
            const usersCollection = collection(db, 'users');
            
            // Use 'setDoc' to set data for the document
            await setDoc(doc(usersCollection, user.uid), {
                email: user.email,
                name:name,
                mobileNumber: mobileNumber,
                userStatus: parseInt(userStatus),
                userId:studentId
            });

            //console.log(user);
            alert('Register Successfully.');

              // Redirect to the index page (or any other desired page)
            window.location.href = baseURL;
           showDashboard(user);
        })
        .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
                console.error('Email is already in use. Please choose another email.');
                alert('Email is already in use. Please choose another email.');
            } else {
                console.error(error.message);
                console.log('Signup failed. Please try again.');
            }
        });
}


function showDashboard(user) {
  
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    console.log("Dashboard"+user);
    db.collection('users').doc(user.uid).get()
        .then((doc) => {
            if (doc.exists) {
                const userData = doc.data();
                const userStatus = getUserStatus(userData.userStatus);
                document.getElementById('user-info').innerText = `Welcome, ${user.email}! User Status: ${userStatus}`;
            } else {
                console.error('User document not found.');
            }
        })
        .catch((error) => {
            console.error(error.message);
        });
}
//logout

document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logoutbtn');
    logoutButton.addEventListener('click', logout);
  });



function logout() {
    console.log("logout");
    // Remove user details from local storage
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    localStorage.removeItem('isLoggedIn');

    // Redirect to the index page (or any other desired page)
    window.location.href = baseURL;
}

// function logout() {
//     auth.signOut().then(() => {
//         document.getElementById('dashboard').style.display = 'none';
//         document.getElementById('login-container').style.display = 'block';
//     }).catch((error) => {
//         console.error(error.message);
//     });
// }

function getUserStatus(status) {
    switch (status) {
        case 0:
            return 'Admin';
        case 1:
            return 'Teacher';
        case 2:
            return 'Student';
        default:
            return 'Unknown';
    }
}

// Function to toggle visibility of elements with a specific class
function toggleVisibilityByClass(className, isVisible) {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach(element => element.style.display = isVisible ? '' : 'none');
}
function displayUserDetails() {
    // Get user details from local storage
    const userData = JSON.parse(localStorage.getItem('user'));



    if (userData) {
        // Update HTML elements with user information using class names
        const emailElements = document.querySelectorAll('.userEmail');
        const mobileNumberElements = document.querySelectorAll('.userMobile');
        const NameElements = document.querySelectorAll('.userName');
       
      
        // Email
        Array.from(emailElements).forEach((element) => {
            element.textContent = userData.email;
            
        });

        Array.from(mobileNumberElements).forEach((element) => {
               // Create a link with the tel: protocol
               const telLink = document.createElement('a');
               telLink.href = `tel:${userData.mobileNumber}`;
               telLink.textContent = userData.mobileNumber;
   
               // Clear existing content and append the link
               element.innerHTML = '';
               element.appendChild(telLink);
        });

         
        // Name
        Array.from(NameElements).forEach((element) => {
            element.textContent = userData.name;
            
        });

        //user profile
        let imageUrl;
        if(userData.profilepic){
            imageUrl = userData.profilepic;
        }else{
            imageUrl = baseURL + '/img/dp.jpg';
        }
        console.log("imageUrl");
        console.log(imageUrl);
    
        // Update image elements with class "userImage"
        const imageElements = document.querySelectorAll('.userImage');

        Array.from(imageElements).forEach((element) => {
            element.src = imageUrl;
          
        });//img/dp.jpg

        // --------------------------User role based validation ----------------------------
            // Toggle visibility based on user status
            const userStatus = userData.userStatus;
            switch (userStatus) {
                case 0:
                    // Admin - Show all sections
                    toggleVisibilityByClass('admin-section', true);
                    toggleVisibilityByClass('teacher-section', true);
                    toggleVisibilityByClass('student-section', true);
                    toggleVisibilityByClass('student-page', false);
                    document.getElementById('Roletext').textContent = 'Administrator';
                    document.getElementById('welcome-text').textContent = 'Administrator !';
                    break;
                case 1:
                    // Teacher - Show teacher section, hide student section
                    toggleVisibilityByClass('admin-section', false);
                    toggleVisibilityByClass('teacher-section', true);
                    toggleVisibilityByClass('student-section', false);
                    toggleVisibilityByClass('student-page', false);
                    document.getElementById('Roletext').textContent = 'Teacher';
                    break;
                case 2:
                    // Student - Hide teacher section, show student section
                    toggleVisibilityByClass('admin-section', false);
                    toggleVisibilityByClass('teacher-section', false);
                    toggleVisibilityByClass('student-section', true);
                    toggleVisibilityByClass('student-page', true);
                    document.getElementById('Roletext').textContent = 'Student';
                    break;
                default:
                    // Handle unknown role
                    console.log('Unknown user status');
                    break;
            }
    }
}
document.addEventListener('DOMContentLoaded', function () {
displayUserDetails();

});
// function checkLoginStatus() {
//     var isLoggedIn = localStorage.getItem('isLoggedIn');
    
//     // Exclude redirection for login and signup pages
//     var currentPage = window.location.pathname;
//     console.log(currentPage);
//     var excludedPages = ['/index.html', '/signup.html'];

//     if (!isLoggedIn && !excludedPages.includes(currentPage)) {
//         // Redirect to the login page if not logged in
//         window.location.href = baseURL + 'index.html';
//     }
// }

// checkLoginStatus();

function checkLoginStatus() {
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    
    // Extract the page name from the path
    var currentPage = window.location.pathname.split('/').pop();
    console.log(currentPage);
    // Exclude redirection for login and signup pages
    var excludedPages = ['index.html', 'sign_up.html'];

    if (!isLoggedIn && !excludedPages.includes(currentPage)) {
        // Redirect to the login page if not logged in
        window.location.href = baseURL + '/index.html';
    }
}

checkLoginStatus();