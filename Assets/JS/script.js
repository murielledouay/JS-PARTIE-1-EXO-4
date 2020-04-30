var lastName;
var firstName;
var city;

lastName = 'Doe';
firstName = 'John';
city = 'New-York';


function clickFunction(){
  var lastName = document.getElementById('lastName').value;
  var firstName = document.getElementById('firstName').value;
  var city = document.getElementById('city').value;
  alert('Nom :' + lastName + '\nPrénom :' + firstName + '\nVille :' + city);
}
