const title =document.querySelector('.title');

title.innerHTML = title.innerHTML.split('').map((letters, i)=>
`<span style="transition-delay:${i * 40}ms;
filter:hue-rotate(${i * 30}deg);
">${letters}</span>`
).join('');