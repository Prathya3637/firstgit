var form = document.getElementById('my');
var itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem);
function addItem(e){
    e.preventDefault();
     var newItem = document.getElementById('item').value;
     var newItem2 = document.getElementById('item1').value;
     var li = document.createElement('li');
     li.className='list-group-item';
     li.appendChild(document.createTextNode(newItem));
     li.appendChild(document.createTextNode(" "+newItem2));
     var deleteBtn = document.createElement('button');
     deleteBtn.className='btn btn-danger btn-sm float-right delete';
     deleteBtn.appendChild(document.createTextNode('X'));
     li.appendChild(deleteBtn);
     itemList.appendChild(li);
     //itemList.appendChild(li2);

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure ?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }

    }
}
//var xyz = document.getElementsByClassName('btn btn-danger btn-sm float-right delete');
/*var editBtn = document.createElement('button');
editBtn.className = 'edit btn';
editBtn.appendChild(document.createTextNode('Edit'));
for(let i=0;i<xyz.length;i++){
    xyz[i].insertAdjacentElement(editBtn);
}
*/
var filter = document.getElementById('filter');
filter.addEventListener('keyup',filterItems);
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var childnode = item.childNodes
        var description = childnode[1].textContent
        if(itemName.toLowerCase().indexOf(text)!=-1 || description.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    });
        
   
}



