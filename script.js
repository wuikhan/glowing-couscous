const button = document.getElementById('see-review');
button.addEventListener('click', function(){
    const review = document.getElementById('review');

    if(review.classList.contains('d-none')){
        review.classList.remove('d-none');
        button.textContent = 'Close Review';
    } else {
        review.classList.add('d-none');
        button.textContent = 'See Review';
    }
});