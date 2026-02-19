
//en gros c'est le js pour les interactions de base il manque des images et tout mais pour l'animation ça va être galère kyra j'espère ta pas mis full css sinon je pleure

document.addEventListener('DOMContentLoaded', function() {
    
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        const originalColor = link.style.color || window.getComputedStyle(link).color;
        link.addEventListener('mouseover', () => {
            link.style.color = '#ff6600';
        });
        link.addEventListener('mouseout', () => {   //c'était supposé faire changer les couleurs des liens mais ça marche pas
            link.style.color = originalColor;       //ps : a priori ça remet la couleur bleu d'origine avant que tu cliques sur le lien
        });                                         //mais normalement ça devait mettre en rouge
        link.addEventListener('click', (e) => {
          
            alert('Vous allez sur la page "' + link.textContent + '"'); //dit sur quel page tu vas aller 
        });
    });

    
    const logo = document.querySelector('header img');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', () => {
            alert('Vous avez cliqué sur le logo EFREI !'); //bon faut attendre qu'il y ait le logo de l'efrei bruh mais ça fait un popup
        });
    }

   
    const headerTitle = document.querySelector('header h1');
    const welcomeText = headerTitle ? headerTitle.textContent : document.title;
    if (welcomeText) {
        
        setTimeout(() => {
            alert('Bienvenue sur la page "' + welcomeText + '"');  //ça fait un popup de bienvenue après 300ms c'est rapide mais pas isntant 
        }, 300);
    }

    
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.nom ? form.nom.value : '';
            alert('Merci pour votre message' + (name ? ', ' + name : '') + ' !'); // ça fait un popup de merci avec nom écrit dans le formulaire chacal
            form.reset();
        });
    }

    
    const titles = document.querySelectorAll('main h2, main h3');
    titles.forEach(title => {
        const originalColor = window.getComputedStyle(title).color;
        title.style.cursor = 'pointer';
        title.addEventListener('mouseover', () => {
            title.style.color = '#ff6600';
        });
        title.addEventListener('mouseout', () => {
            title.style.color = originalColor;    //en gros il va juste changer la couleur du titre quand tu passes la souris dessus pour que ça soit un peu plus interactif et que ça fasse pas trop statique, c'est pas grand chose mais ça ajoute un petit truc en plus je trouve
        });                                           // mais que pour les titres h2 h3 sinon nope
    });
});



// ça marche pas je modifie

//svp les gens commenter votre code lààààà rohhhh
