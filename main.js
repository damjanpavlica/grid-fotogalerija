document.body.addEventListener('click', function(event) {
    const overlay = document.getElementById('overlay');

    // pokazuje/skriva overlay
    overlay.classList.toggle('hidden');

    // pokazuje kliknutu sliku
    if (event.target.tagName === 'IMG') {
        event.target.classList.add('active-image');
    }

    // ako je overlay skriven, vraca sve slike na staro
    if (overlay.classList.contains('hidden')) {

        const slike = document.querySelectorAll('img');
        for (let i = 0; i < slike.length; i++) {
            slike[i].classList.remove('active-image');
        }

        /*
        [...document.querySelectorAll('img')].forEach(
            x => x.classList.remove('active-image')
        );
        */

    }

})