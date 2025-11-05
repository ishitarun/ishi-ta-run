// document.addEventListener("DOMContentLoaded", function () {
 function toggleForm(formType) {
    const formContainer = document.getElementById("form-container");
     if (formType === 'forgot-password') {
        formContainer.classList.add("show-forgot-password");
    } else {
        formContainer.classList.remove("show-forgot-password");
    }
}

function loadUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : []; // Parse or return an empty array
}

// Function to save users back to localStorage
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function signUp() {
    const username = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("signup-confirm-password").value;

    if (username && email && password && confirmPassword) {
        if (password === confirmPassword) {
            // Prepare user data to be sent to the server
            const userData = {
                username: username,
                email: email,
                password: password
            };

            // Use fetch() to send POST request to /signup
            fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Specify JSON content
                },
                body: JSON.stringify(userData) // Convert data to JSON string
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Signup failed');
                }
            })
            .then(data => {
                alert(data.msg); // Show success message
                sessionStorage.setItem('userId', JSON.stringify(data.id));
                window.location.href = "/login"; // Redirect to login page
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error: Signup failed. Please try again.');
            });
        } else {
            alert("Passwords do not match.");
        }
    } else {
        alert("Please fill in all fields.");
    }
}

function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (username && password) {
        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (!response.ok) throw new Error("Invalid credentials");
            return response.json();
        })
        .then(data => {
            sessionStorage.clear();
            alert(data.message);
            sessionStorage.setItem('userId', JSON.stringify(data.id));
            window.location.href = "/dashboard"; // Redirect to dashboard
        })
        .catch(err => {
            console.error(err);
            alert("Login failed. Please check your credentials.");
        });
    } else {
        alert("Please fill in all fields.");
    }
}


// Handle forgot password functionality (basic validation)
function resetPassword() {
    const email = document.getElementById("forgot-email").value;
    if (email) {
        alert("A password reset link has been sent to " + email);
        toggleForm('login'); // Go back to login page
    } else {
        alert("Please enter your email.");
    }
}

// Dashboard Script Start 

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname === "/dashboard") {
        userId = JSON.parse(sessionStorage.getItem('userId'));
        fetch('/dashboardData', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId })
        })
        .then(response => {
            if (!response.ok) throw new Error("Invalid credentials");
            return response.json();
        })
        .then(data => {
            showImages();
            let users = data.users;
            
            let users_table = document.getElementById('users_table');
            let tbody = document.createElement('tbody');
            tbody.className = "users_data";
            tbody.id = "usres_data";
            
            for(let i=0; i<users.length; i++){
                let row = document.createElement('tr');
                row.innerHTML = `<td>${atob(users[i]['username'])}</td>
                                <td>${atob(users[i]['email'])}</td>
                                <td>${users[i]['password']}</td>`;
                tbody.appendChild(row);        
            }
            users_table.append(tbody);
            
            const currentUser = data.currentUser;
            if (currentUser) {
                document.getElementById('username').textContent = atob(currentUser.username);
                document.getElementById('email').textContent = atob(currentUser.email);
                document.getElementById('password').textContent = currentUser.password;
            } else {
                alert("No user is logged in. Redirecting to login.");
                window.location.href = "/login";
            }
        })
        .catch(err => {
            console.error(err);
            alert("Login failed. Please check your credentials.");
        });
    }
});

// Logout Function
function logout() {
    sessionStorage.clear();
    window.location.href = "/login";
}
// Dashboard Script End

function uploadFile() {
    // Get the file input element
    const fileInput = document.getElementById("fileInput");

    // Check if any files have been selected
    if (fileInput.files.length === 0) {
        alert("Please select at least one file to upload.");
        return;
    }

    // Create FormData object
    const formData = new FormData();

    // Append all selected files to the FormData object
    for (let i = 0; i < fileInput.files.length; i++) {
        formData.append("files[]", fileInput.files[i]); // "files[]" is the key name for multiple files
    }

    // Send the files to the server using fetch API
    fetch("/upload", {
        method: "POST",
        body: formData, // FormData object automatically sets the right headers
    })
    .then(response => {
        if (response.ok) {
            return response.text(); // Read server response text
        } else {
            throw new Error("File upload failed.");
        }
    })
    .then(data => {
        alert("Files uploaded successfully!\n" + data);
        if (window.location.pathname === "/dashboard") {
            showImages(); // Function to display uploaded images if needed
        }
        fileInput.value = '';
        document.getElementById('imgShow').innerHTML = "";
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error uploading files.");
    });
}


function showImages(){
    fetch("/showImages", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Files found failed.");
        }
    })
    .then(data => {
        let imgs = data.imas;
        let imgShow = document.getElementById('imgShow');
        for(var i=0;i<imgs.length;i++){
            let img = document.createElement('img');
            img.classList = "upload-imgs"
            img.src = "images/" +imgs[i];
            imgShow.appendChild(img);  
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error uploading file.");
    });
     
}
