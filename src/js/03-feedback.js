import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form')
form.addEventListener('input', throttle(inputSave, 500)) 
let formData = JSON.parse(localStorage.getItem("feedback-form-state"))|| {}
form.elements.email.value = formData.email
form.elements.message.value = formData.message
form.addEventListener('submit', formSabmit) 
function formSabmit(event) {
    event.preventDefault()
    console.log(formData) 
    localStorage.removeItem("feedback-form-state");
    form.reset()
   formData={}
}
function inputSave(event) {
   formData[event.target.name]=event.target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}
