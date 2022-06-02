const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  const backgroundColor = btn.style.backgroundColor;

  if (backgroundColor === 'yellow') {
    btn.style.backgroundColor = 'red' ;

    // 👇️ optionally change text color
    // btn.style.color = 'white';
  } 
  if (backgroundColor === 'red') {
    btn.style.backgroundColor = 'yellow';

    // 👇️ optionally change text color
    // btn.style.color = 'white';
  } 


    // 👇️ optionally change text color
    // btn.style.color = 'blue';
  }
);