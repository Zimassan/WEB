
// On attend que la page soit totalement chargée
document.addEventListener('DOMContentLoaded', () => {

    // On cible notre div
    const bgCarousel = document.getElementById('bg-carousel');

    // On vérifie qu'on est bien sur la page d'accueil (là où il y a le carousel)
    if (bgCarousel) {
        // Le tableau avec les noms de vos 5 images
        const images = [
            './IMG/img_efrei1.jpg',
            './IMG/img_efrei2.jpg',
            './IMG/img_efrei3.jpg',
            './IMG/img_efrei4.jpg',
            './IMG/img_efrei5.jpg'
        ];

        let currentIndex = 0;

        function changeBackgroundImage() {
            // On applique l'image actuelle en fond
            bgCarousel.style.backgroundImage = `url('${images[currentIndex]}')`;

            // On calcule l'index de la prochaine image (revient à 0 à la fin)
            currentIndex = (currentIndex + 1) % images.length;
        }

        // On lance l'affichage de la première image tout de suite
        changeBackgroundImage();

        // On change l'image toutes les 5000 millisecondes (5 secondes)
        setInterval(changeBackgroundImage, 5000);
    }
});

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

});



// ça marche pas je modifie

//svp les gens commenter votre code lààààà rohhhh
