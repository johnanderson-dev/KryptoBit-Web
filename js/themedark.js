
const serv = localStorage.getItem('cache');
const html = document.querySelector('html');
const chk = document.getElementById('chk-theme');

if(serv){
      html.setAttribute('theme' , 'true')
    }

chk.addEventListener('change' , () => {
    
    

    if(chk.checked){
      html.setAttribute('theme' , 'true');
      localStorage.setItem('cache' , 'true');
    }

    else{
      html.removeAttribute('theme');
      localStorage.removeItem('cache');
    }
})

