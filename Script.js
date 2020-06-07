function checkAge() {
  var age = document.getElementById("age").value; 
  if (age < 18) {
    document.getElementById("result").innerText =
      "sorry, you are too young to drive this car. powering off";
  } else if (age == 18) {
    document.getElementById("result").innerText =
      "Congratulations on your first year of driving. Enjoy the ride!";
  } else {
    document.getElementById("result").innerText =
      "Powering On. Enjoy the ride!";
  }
}
