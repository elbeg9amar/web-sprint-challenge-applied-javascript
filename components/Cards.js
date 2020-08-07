// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(success => {
    const data = success.data.articles

    const allDataBox = []

    data.bootstrap.forEach (index => {
        allDataBox.push(index)
    });
    data.javascript.forEach (index => {
        allDataBox.push(index)
    })
    data.jquery.forEach (index => {
        allDataBox.push(index)
    })
    data.node.forEach (index => {
        allDataBox.push(index)
    })
    data.node.forEach (index => {
        allDataBox.push(index)
    })
    data.technology.forEach (index => {
        allDataBox.push(index)
    })

    
    console.log(allDataBox)
    const articleSpot = document.querySelector('.cards-container')

    allDataBox.forEach(index => {
        articleSpot.appendChild(articleDiv(index))
    });
})

.catch(err => {
    console.log('This is error')
    debugger
})


function articleDiv(obj){
    const cardDiv = document.createElement('div')
    const headDiv = document.createElement('div')
    const infoDiv = document.createElement('div')
    const infoImgDiv = document.createElement('div')
    const infoImg = document.createElement('img')
    const infoName = document.createElement('span')

    cardDiv.classList.add('card')
    headDiv.classList.add('headline')
    infoDiv.classList.add('author')
    infoImgDiv.classList.add('img-container')

    headDiv.textContent = obj['headline']
    infoImg.setAttribute('src', obj.authorPhoto)
    infoName.textContent = obj.authorName

    cardDiv.addEventListener('click',() => {
        console.log(obj.headline)
    });

    infoImgDiv.appendChild(infoImg)

    infoDiv.appendChild(infoImgDiv)
    infoDiv.appendChild(infoName)

    cardDiv.appendChild(infoDiv)
    cardDiv.appendChild(headDiv)

    return cardDiv
}




