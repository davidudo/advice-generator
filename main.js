const quoteDisplay = document.getElementById("quote-display")
const button = document.getElementById("button")
const quoteCounter = document.getElementById("quote-counter")

async function getQuote() {
  const response = await fetch("https://api.quotable.io/random")
  const result = await response.json()
  return result
}

count = 0

getQuote().then((result) => {
    quoteDisplay.innerHTML = result.content
  })
  .then(() => {
    count = count + 1
    quoteCounter.innerHTML = count
  }).catch(status => {
    quoteDisplay.innerHTML = "An error occurred...."
  })


button.addEventListener("click", (e) => {
  getQuote()
    .then((result) => {
      quoteDisplay.innerHTML = result.content
    })
    .then(() => {
      count = count + 1
      quoteCounter.innerHTML = count
    }).catch(status => {
      quoteDisplay.innerHTML = "An error occurred...."
    })
})
