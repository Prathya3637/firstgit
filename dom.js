let header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';
var items = document.getElementsByClassName('title');
items[0].style.fontWeight = 'bold';
items[0].style.color = 'green';
var lists = document.getElementsByClassName('list-group-item');
lists[2].style.backgroundColor = 'green';
for(let i =0; i<lists.length;i++){
    lists[i].style.fontWeight = 'bold';
}