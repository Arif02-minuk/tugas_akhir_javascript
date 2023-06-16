function buat_login() {
    //remove button
    var elem = document.getElementById('X');
    elem.parentElement.removeChild(elem);

    //create judul
    var judul = document.createElement('p');
    judul.className = "tulisan_login"
    judul.innerHTML = "silahkan mendaftar"

    //create div
    var kotak = document.getElementsByTagName("div")[0];
    kotak.appendChild(judul);
   
    //create form
    var form = document.createElement('form');
    kotak.appendChild(form)

    //create label user
    var label_user = document.createElement('label');
    label_user.innerHTML = "Nama User"
    form.appendChild(label_user)
    //input user
    var input_user = document.createElement('input');
    input_user.type = "text"
    input_user.name = "user"
    input_user.value = "Nama User.."
    input_user.className = "form_login"
    form.appendChild(input_user)
    
    //create label no
    var label_no = document.createElement('label');
    label_no.innerHTML = "Nomor Handphone"
    form.appendChild(label_no)
    //input no
    var input_no = document.createElement('input');
    input_no.type = "text"
    input_no.name = "hp"
    input_no.value = "Nomor Handphone."
    input_no.className = "form_login"
    form.appendChild(input_no)

    //create label username
    var label_username = document.createElement('label');
    label_username.innerHTML = "Username"
    form.appendChild(label_username)
    //input username
    var input_username = document.createElement('input');
    input_username.type = "text"
    input_username.name = "usernama"
    input_username.value = "Username atau Email.";
    input_username.className = "form_login"
    form.appendChild(input_username)

    //create label password
    var label_pass = document.createElement('label');
    label_pass.innerHTML = "Password"
    form.appendChild(label_pass)
    //input no
    var input_pass = document.createElement('input');
    input_pass.type = "text"
    input_pass.name = "password"
    input_pass.value = "password..";
    input_pass.className = "form_login"
    form.appendChild(input_pass)

    //create submit
    var tombol = document.createElement('input');
    tombol.type = "submit"
    tombol.className = "tombol_login";
    form.appendChild(tombol)


}