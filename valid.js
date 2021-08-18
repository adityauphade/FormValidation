const fname = document.getElementById("FirstName");
const lname = document.getElementById("LastName");
const number = document.getElementById("Number");
const email = document.getElementById("Email");
const pwd = document.getElementById("Password");
const success = "box success"
const fail = "box error"


// function checkname(name){
//     if(name.value.trim() === ""){
//         fname.parentElement.className = "box error";
//         const small = fname.querySelector("small");
//         small.innerText= "No Name";
        
//     }
//     else{
//         fname.parentElement.className = "box success";
//     }
// }

const checkParameters = (input) => {
    input.forEach(element => {
        if(element.value.trim() === ""){
            element.parentElement.className = fail;
            const empty_errText = element.parentElement.querySelector("small");
            empty_errText.innerText = `No ${element.id} entered`;
            // return true;
        }
        else{
            element.parentElement.className = success;
            const empty_susText = element.parentElement.querySelector("small");
            empty_susText.innerText = ``;
            checkName([fname, lname]);
            checkPhone(number);
            checkEmail(email);
            checkPassword(pwd);
        }
    });
}

const checkName = (input) => {
    input.forEach(element => {
        const regexName = /^([A-Z][a-zA-Z]{3,21})$/;
        if (regexName.test(element.value)) {
            element.parentElement.className = success;
            var regex_susName = element.parentElement.querySelector("small");
            regex_susName.innerText = ``
        } else {
            element.parentElement.className = fail;
            var regex_errName = element.parentElement.querySelector("small");
            regex_errName.innerText = `${element.id} should have a length of 3 to 20`
        } 
    })
}

const checkPhone = (input) => {
    const regexPhone = /^([0-9]{2}[ ][1-9][0-9]{9})$/;
    if (regexPhone.test(input.value)) {
        input.parentElement.className = success;
        const regex_susPhone = input.parentElement.querySelector("small");
        regex_susPhone.innerText = ``
    } else {
        input.parentElement.className = fail;
        const regex_errPhone = input.parentElement.querySelector("small");
        regex_errPhone.innerText = `${input.id} is not according to the indian format`
        
    }
}

const checkEmail = (input) => {
    const regexMail = /^([a-zA-Z]+[.][a-zA-Z0-9]+[@][a-zA-Z0-9]+[.][a-z]+([.a-z]+)$)$/;
    if (regexMail.test(input.value)) {
        input.parentElement.className = success;
        const regex_susMail = input.parentElement.querySelector("small");
        regex_susMail.innerText = ``
    } else {
        input.parentElement.className = fail;
        const regex_errMail = input.parentElement.querySelector("small");
        regex_errMail.innerText = `${input.id} is not in the correct format`
    }
}

const checkPassword = (input) => {
    const regexPwd = /^(?=.*?[!@#$%^_+&*]{1})(?=.*?[A-Z]+)(?=.*?\d+).{8,}$/;
    if (regexPwd.test(input.value)) {
        input.parentElement.className = success;
        const regex_susPwd = input.parentElement.querySelector("small");
        regex_susPwd.innerText = ``
    } else {
        input.parentElement.className = fail;
        const regex_errPwd = input.parentElement.querySelector("small");
        regex_errPwd.innerText = `${input.id} is not in the correct format`
    }
}


const validate1 = () => {
    checkParameters([fname, lname, number, email, pwd]) 
    // checkname(fname);
}
