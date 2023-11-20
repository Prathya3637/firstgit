var form = document.getElementById('local');
form.addEventListener('submit', saveToLocalStorage);
 function saveToLocalStorage(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var pass = document.getElementById('password').value;
    var city = document.getElementById('city').value;
    localStorage.setItem('Name', name);
    localStorage.setItem('Password', pass);
    localStorage.setItem('City Name', city);
 }