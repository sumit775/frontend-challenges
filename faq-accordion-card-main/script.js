const acc = document.querySelectorAll('.acc');  // select all acc class
const arrow = document.querySelectorAll('.arrow'); // select all arrow class
const panel =document.querySelectorAll('.panel'); // select all panel class


// apply eventlistener 
for(let i = 0;i<acc.length;i++){
    
    acc[i].addEventListener('click' , function() {
      // reset previous effect
      panel.forEach((item) => {
        item.className = 'panel';
      });
      // reset previous effect
      acc.forEach((item) => {
        item.className = 'acc';
      });
      // reset previous effect
      arrow.forEach((item) => {
        item.className = 'arrow';
      });
      acc[i].classList.toggle('bold');
      
        // var panel = this.nextElementSibling;
        arrow[i].classList.toggle('rotate');
        panel[i].classList.toggle('show');
    


    });
};
 
