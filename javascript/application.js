import Swal from 'sweetalert2'

console.log("Hello from JavaScript!");

// const url = "https://api.github.com/users/dhh"

const loadData = async () => {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  console.log(data);
};

loadData();

const login = async (event) => {
  event.preventDefault();
  const usernameValue = document.getElementById('username').value;
  const passwordValue = document.getElementById('password').value;
  const requestDetails = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"username": usernameValue, "password": passwordValue})
  }
  const response = await fetch("https://dummyjson.com/user/login", requestDetails);
    if (response.ok) {
      Swal.fire({title: 'Success', text: 'You are connected', icon: 'success'})
    } else {
      Swal.fire({title: 'Error!', text: 'Oups! Something went wrong', icon: 'error'})
    }  const data = await response.json();
  console.log(data);
};

const form = document.querySelector('#form');
form.addEventListener('submit', login);
