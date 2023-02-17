function saveToLocalStorage(event){
    event.preventDefault();
    let name=event.target.name.value;
    let email=event.target.email.value;
    let phonenumber=event.target.phonenumber.value;
   const obj={
    name:name,
    email:email,
phonenumber:phonenumber
   }
axios.post("https://crudcrud.com/api/08c5dc58e37f46929fc13944460a05be", obj)
.then((response) => {
    console.log(response)
})
.catch((err) => {
    console.log(err)
})
   //localStorage.setItem(obj.email,JSON.stringify(obj));
   //showUserOnScreen(obj)
}
window.addEventListener("DOMContentLoaded" ,() =>{
    axios.get("https://crudcrud.com/api/08c5dc58e37f46929fc13944460a05be")
.then((response) => {
    console.log(response)
    for(var i=0; i<response.data.length;i++)
    {
        showUserOnScreen(response.data[i])
    }
})
.catch((err) => {
    console.log(err)
})

})
function showUserOnScreen(obj){
    const parentItem=document.getElementById("users")
    const childItem=document.createElement("li")
    childItem.textContent= obj.name + ' - '+ obj.email + ' - ' + obj.phonenumber

    const deleteButton=document.createElement('input')
    deleteButton.type= "button"
    deleteButton.value= 'delete'
    deleteButton.onclick= ()=>{
        localStorage.removeItem(obj.email)
        parentItem.removeChild(childItem)
    }
    const editButton=document.createElement('input')
    editButton.type= "button"
    editButton.value= 'edit'
    editButton.onclick= ()=>{
        localStorage.removeItem(obj.email)
        parentItem.removeChild(childItem)
        document.getElementById('name').value = obj.name
        document.getElementById('email').value = obj.email
        document.getElementById('phonenumber').value = obj.phonenumber
    }
    childItem.appendChild(editButton)
    childItem.appendChild(deleteButton)
    parentItem.appendChild(childItem)
}
