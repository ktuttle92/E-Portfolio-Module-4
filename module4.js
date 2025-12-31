//template_fyrzg4l
//service_6ie651b
//S37FKqKjXavUxX

function contact(event){
    event.preventDefault();
        const loading = document.querySelector('.modal__overlay--loading')
        const success = document.querySelector('.modal__overlay--success')
        loading.classList += " modal__overlay--visible"
    emailjs 
     .sendForm(
        'service_6ie651b',
        'template_fyrzg4l',
        event.target,
        "6RQS37FKqKjXavUxX"
     ).then(() =>{
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
     }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert("The email service is temporarily unavailable. Please contact me directly at ktuttle92@gmail.com")})
}

let isModalOpen = false;
function toggleModal(){
    if(isModalOpen){
        isModalOpen=false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
   document.body.classList += " modal--open"
}