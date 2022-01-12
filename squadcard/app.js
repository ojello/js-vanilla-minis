// Creating object with people info
let data = [
    {
        name: "Amber",
        age: '21',
    }
    ,
    {
        name: "Adi",
        age: '24',
    }
    ,
    {
        name: "Blake",
        age: '25',
    }
    ,
    {
        name: "Kat",
        age: '20',
    }
    ,
    {
        name: "Steven",
        age: '27',
    }
    ,
    {
        name: "Alex",
        age: '28',
    }
];


//  function details that returns open div and people name, age,  closes with div
// function goes through the array data and displays it


// selecting id Info
const info = document.querySelector('#info');

document.querySelector('#info');

let detail = data.map(function(item){
    return '<div>' + item.name + ' '+ ' is' + item.age + ' years old' + '</div>';
});

info.innerHTML = detail.join('\n');
