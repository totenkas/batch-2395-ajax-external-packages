// Importar o módulo do package externo
import Swal from 'sweetalert2'

// Checar se o arquivo JS está sendo chamado pelo HTML
console.log("Hello from JavaScript!");

// const url = "https://api.github.com/users/dhh"

// Request do tipo GET
const loadData = async () => {
  // Fazer o fetch e esperar a resposta
  const response = await fetch("https://dummyjson.com/users");
  // "Abrir" a resposta com json();
  const data = await response.json();
  // Manipular os dados vindos na resposta
  console.log(data);
};

loadData();

// Request do tipo POST
const login = async (event) => {
  // Impedir o site de dar reload ao fazer o submit
  event.preventDefault();
  // Selecionar os valores dos elementos do DOM
  const usernameValue = document.getElementById('username').value;
  const passwordValue = document.getElementById('password').value;
  // Organizar os detalhes da request do tipo POST
  const requestDetails = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"username": usernameValue, "password": passwordValue})
  }
  // Fazer o fetch enviando as informações
  const response = await fetch("https://dummyjson.com/user/login", requestDetails);
    // Se a resposta for ok, rodar a animaçãozinha do check
    if (response.ok) {
      Swal.fire({title: 'Success', text: 'You are connected', icon: 'success'})
    } else { // Se a resposta não for ok, rodar a animaçãozinha do erro
      Swal.fire({title: 'Error!', text: 'Oups! Something went wrong', icon: 'error'})
    }  const data = await response.json();
  // Manipular os dados vindos na resposta
  console.log(data);
};

// Selecionar o formulário do DOM
const form = document.querySelector('#form');
// Adicionar um Event Listener nele
form.addEventListener('submit', login);
