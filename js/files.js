let fullName = document.querySelector('#name');
let city = document.querySelector('#city');
let gender = document.querySelector('#gender');
let cell = document.querySelector('#cell');
let dob = document.querySelector('#dob');
let email = document.querySelector('#email');
let generate = document.querySelector('#generate');
let profileImage = document.querySelector('#profileImage');

generate.addEventListener('click', ()=>{
    const xhr = new XMLHttpRequest();
    //find fake api on google
    const url = "https://randomuser.me/api/";

    xhr.open("GET", url, true);
    xhr.onload = () => {
        // console.log(xhr.responseText);
        //convert string data to object
        let obj = JSON.parse(xhr.responseText);
        let result = obj.results
        result.forEach(tika => {
            fullName.innerText = tika.name.first + ' ' + tika.name.last;
            city.innerText = tika.location.city;
            gender.innerText = '<span>Gender : </span> ' + tika.gender;
            cell.innerText = '<span>Cell : </span> ' + tika.cell;
            dob.innerText = '<span>Age : </span> ' + tika.dob;
            email.innerText = '<span>Email : </span> ' + tika.email;
            profileImage.src = tika.picture.medium
        });
        
    }
    xhr.send()
})