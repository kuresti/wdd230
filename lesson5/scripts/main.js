
//Get elements
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click',() => {
    const myItem = input.value;
        if (myItem === '') {
        return
        } else {

         const listItem = document.createElement('li');
         const listText = document.createElement('span');
         const listBtn = document.createElement('button');

        listText.textContent = myItem;
        listItem.appendChild(listText);
        

         listItem.appendChild(listBtn);
         listBtn.textContent = '❌';
         list.appendChild(listItem);
       
         listBtn.addEventListener('click', () =>{
         list.removeChild(listItem);
         });
    };      
    input.focus();
});

