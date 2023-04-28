function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}



const emailInput = document.querySelector('.email-input');
const betButton = document.querySelector('.bet-btn');
const emailMessage = document.querySelector('#email-message');
const form = document.querySelector('#my-form');

emailInput.addEventListener('input', (e) => {
  let input = e.target.value;

  if(input !== ""){
    betButton.removeAttribute('disabled');
  }
  else{
    betButton.setAttribute('disabled', true);
  }
});

emailInput.addEventListener('blur', (e) => {
  const email = emailInput.value;

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      console.log(response)
      if (response.error) {
        emailMessage.style.color = 'red';
      } else {
        emailMessage.style.color = 'green';
      }

      emailMessage.innerHTML = response.message;
    }
  };

  xhr.open('POST', 'server.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(`email=${email}`);
});

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent the default form submission behavior
    const email = emailInput.value;
    const url = `https://sports.coral.co.uk/en/mobileportal/register?email=${encodeURIComponent(email)}`;
    window.location.href = url; // redirect the user to the desired URL
});