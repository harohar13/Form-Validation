const name= document.getElementById('name')
const password=document.getElementById('password')
const form =document.getElementById('form')
const errorElement=document.getElementById('error')


form.addEventListner('submit',(e)=>{

    let messages=[]
    if(name.value===''|| name.value== null){
        messages.push('Name is required')
    }
    if(password.value.length<=0){
        messages.push('password must be longer than 6 characters')
    }
    if(messages.length>0){
        e.preventDefault() //prevent from submitting
        errorElement.innerText=messages.join(',')
    }
})