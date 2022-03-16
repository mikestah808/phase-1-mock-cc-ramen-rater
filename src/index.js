// write your code here
const base_URL = "http://localhost:3000";


document.addEventListener('DOMContentLoaded', () => {
    getRamen();

    const form = document.getElementById('new-ramen')
    form.addEventListener('submit', (e) => {

        e.preventDefault()
        const ramenObj = {}
        ramenObj.name = document.getElementById('new-name').value
        ramenObj.restaurant = document.getElementById('new-restaurant').value
        ramenObj.image = document.getElementById('new-image').value
        ramenObj.rating = document.getElementById('new-rating').value
        ramenObj.comment = document.getElementById('new-comment').value

        displayRamen(ramenObj)
    })
})



function getRamen(){
    fetch(base_URL + '/ramens')
    .then(resp => resp.json())
    .then(data => displayRamens(data))
}

function displayRamens(ramens){
    //iterate the array of ramens
    ramens.forEach(ramen => {
    displayRamen(ramen);  
})
}

function displayRamen(ramen){

    //grab the element to which you want to add ramens images to
    const ramenMenu = document.getElementById('ramen-menu')

     //create the image element each tiem
     const image = document.createElement('img')
     image.src = ramen.image

    image.addEventListener('click', () => {
    const image = document.querySelector('.detail-image')
    image.src = ramen.image

    const name = document.querySelector('.name')
    name.textContent = ramen.name

    const restaurant = document.querySelector('.restaurant')
    restaurant.textContent = ramen.restaurant

    const rating = document.getElementById('rating-display')
    rating.textContent = ramen.rating

    const comment = document.getElementById('comment-display')
    comment.textContent = ramen.comment
})

//append the image
ramenMenu.append(image)


}
