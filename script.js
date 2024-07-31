let shoppingcart=document.querySelector('.cart-items-container')

document.querySelector('#cart-btn').onclick = () =>{
    shoppingcart.classList.add('active');
}

document.querySelector('#close').onclick = () =>{
    shoppingcart.classList.remove('active');
};
// Acccount-form

let accountform = document.querySelector('.account-form');

document.querySelector('#account-btn').onclick = () =>{
    accountform.classList.add('active');
}

document.querySelector('#close-form').onclick = () =>{
    accountform.classList.remove('active');
}

let registerbtn = document.querySelector('.account-form .register-btn');
let loginbtn = document.querySelector('.account-form .login-btn');

registerbtn.onclick = () =>{
    registerbtn.classList.add('active');
    loginbtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');   
}

loginbtn.onclick = () =>{
    registerbtn.classList.add('active');
    loginbtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');   
}


