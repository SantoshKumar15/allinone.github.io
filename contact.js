const name = document.getElementById('name');
const mail = document.getElementById('mail');
const sub = document.getElementById('sub');
const desc = document.getElementById('desc');

form.addEventListener('submit', e => {
    e.preventDefault();
    hide_error(name);
    hide_error(mail);
    hide_error(sub);
    hide_error(desc);

    //get value after trim
    const namevalue = name.value.trim();
    const mailvalue = mail.value.trim();
    const subvalue = sub.value.trim();
    const descvalue = desc.value.trim();

    if (namevalue && mailvalue && subvalue && descvalue) {
        // sendmail();
        alert("Submitted");
        sendmsg();


        
        





        // //here we write code to  store data from user
        // const token = "2021787719:AAGrHSMPJYmsq-ZesOoCLB0nq6EAKKrBFgg";
        // const character_id = 908879494;
        // const text = 'Query:%0A - Name:${name} %0A - Email:${mail}%0A - Subject:${sub} %0A - Query_Detail:${desc}';
        // // fetch('https://api.telegram.org/${token}/sendMessage?chat_id=${character_id}&text=${text}')
        // fetch("https://api.telegram.org/${token}/sendMessage?chat_id=${character_id}&text=${text}").done(function (response) {
        //           console.log(response);
        //         }); 

        // let api = new XMLHttpRequest();
        // api.open("GET",url,true);
        // api.send();

        // console.log("Success");
        // alert('Your query has been successfully submitetsd,Thank You')







    }
    else {
        switch ('') {
            case namevalue:
                show_error(name, 'Please enter your name!');
            case mailvalue:
                show_error(mail, 'Please enter your E-mail!');
            case subvalue:
                show_error(sub, 'Please enter your Subject');
            case descvalue:
                show_error(desc, 'Please enter your Query!');

        }
    }
});
// function sendmail(name,mail,sub,desc){
// var name = $('#name').var();
// var email = $('#mail').var();
// var sub = $('#sub').var();
// var desc = $('$mail').var();
// mail.send({
//     Host:"smtp.gmail.com",
//     Username:"santoshkumarmanasingh@gmail.com",
//     Password:'s.k.m singh',
//     To:"santoshkumarmanasingh@gmail.com",
//     From:"santoshkumarmanasingh@gmail.com",
//     Subject: '${name} sent you a message',
//     Body: 'Name: ${name} Email: ${mail} Subject: ${sub} Description: ${desc}',
// }).then((message)=>alert("Success"));

// }




function show_error(input, message) {
    const formContol = input.parentElement;
    const errormsg = formContol.querySelector('.error_msg');
    formContol.className = 'form_control error';
    errormsg.innertext = message;
}

function hide_error(input) {
    const formContol = input.parentElement;
    const errormsg = formContol.querySelector('.error_msg');
    formContol.className = 'form_control';
    errormsg.innertext = '';
}
function sendmsg(){
    fetch("https://api.telegram.org/bot2021787719:AAGrHSMPJYmsq-ZesOoCLB0nq6EAKKrBFgg/sendMessage?chat_id=908879494&text=Query:%0A - Name:name '%0A - Email:'${mail}%0A - Subject:${sub} %0A - Query_Detail:${desc}").done(function (response) {
            console.log(response)
            alert("Submitted");
        });

}


