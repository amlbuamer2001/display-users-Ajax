function getUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            var users = JSON.parse(xhr.responseText);
            populateUserTable(users);
        }
    };
    xhr.send();
}

function populateUserTable(users) {
    var tableBody = document.querySelector('#user-table tbody');
    tableBody.innerHTML = '';

    users.forEach(user => {
        var row = document.createElement('tr');
        row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td><a href="#" onclick="viewUserDetails(${user.id})">View Details</a></td>
      `;
        tableBody.appendChild(row);
    });
}

function viewUserDetails(userId) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `https://jsonplaceholder.typicode.com/users/${userId}`, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            var user = JSON.parse(xhr.responseText);
            displayUserDetails(user);
        }
    };
    xhr.send();
}

function displayUserDetails(user) {
    var userDetails = document.getElementById('user-details');
    document.getElementById('user-name').textContent = user.name;
    document.getElementById('user-email').textContent = user.email;
    document.getElementById('user-website').textContent = user.website;
    document.getElementById('user-address').textContent = user.address.street;

    userDetails.classList.remove('hidden');
    userDetails.style.display = 'block';
}



