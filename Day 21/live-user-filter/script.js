const result = document.getElementById('result')
const filter = document.getElementById('filter')

const listUsers = []

filter.addEventListener('input', (e) => {
  filterData(e.target.value)
})

function filterData(search) {
  listUsers.forEach( item => {
    if(item.innerText.toLowerCase().includes(search.toLowerCase())) {
      item.classList.remove('hide') // it doesn't matter if our li do not have hide
    } else {
      item.classList.add('hide')
    }
  })
}
// getData using async...await
async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50')
  console.log(res)
  const { results } = await res.json() //
  console.log(results)
  result.innerHTML = ''
  results.forEach(user => {
    //console.log(user)
    const li = document.createElement('li')
    listUsers.push(li)
    li.innerHTML = `
      <img src='${user.picture.large}' alt"${user.name.first}>
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `
    result.appendChild(li)

  })
}

getData()

/*
function getData() {
  return new Promise((resolve, reject) => {
    const res = fetch('https://randomuser.me/api?results=50')
    
    resolve(res)
  })
}
// getData() using Promises
getData()
  .then((res) => {
    // const { results } = res.json()
    // console.log(results)
    return res.json()
  })
  .then((raw_results) => {
    const { results } = raw_results
    result.innerHTML = ''
    results.forEach(user => {
      console.log(user)
      const li = document.createElement('li')
      // const { name, location } = user;
      // const userfilter = {
      //   name: name, // name: {first: "", last: "", title: ""}
      //   location: location
      // }
      listUsers.push(li)
      li.innerHTML = `
        <img src='${user.picture.large}' alt"${user.name.first}>
        <div class="user-info">
          <h4>${user.name.first} ${user.name.last}</h4>
          <p>${user.location.city}, ${user.location.country}</p>
        </div>
      `
      result.appendChild(li)
    })
  })

*/
