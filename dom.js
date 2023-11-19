/*let header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';
var items = document.getElementsByClassName('title');
items[0].style.fontWeight = 'bold';
items[0].style.color = 'green';
var lists = document.getElementsByClassName('list-group-item');
lists[2].style.backgroundColor = 'green';
for(let i =0; i<lists.length;i++){
    lists[i].style.fontWeight = 'bold';
}
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = 'hidden';
*/
var itemlist = document.querySelector('#items');
itemlist.parentNode.style.backgroundColor = 'grey';
itemlist.parentElement.style.color = 'goldenrod';
itemlist.children[1].style.backgroundColor='green';
//itemlist.lastChild.textContent="changed Item";
//itemlist.firstElementChild.textContent="changed Item";

var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title','Hello Div');
var newDivText = document.createTextNode('HEllo word');
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);

var newdiv = document.createElement('div');
newdiv.className='hii';
newdiv.id='hii1';
var newdivtext = document.createTextNode('HEllo word');
newdiv.appendChild(newdivtext);
var ul = document.querySelector('ul');
var li = document.getElementsByClassName('list-group-item');

ul.insertBefore(newdiv,li[0]).style.color='white';