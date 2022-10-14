// import fetch from "node-fetch";

//url of studio ghibli's API
const urlAPI =  'https://ghibliapi.herokuapp.com/films';

//we select the id where are goign to display our result of calling the api
const content = null || document.getElementById('content')

//asynchronuos function tath is going to call my function
async function ghibli(url){
    //we get the data from all the movies
    const response =  await fetch(url);
    //we parse into an object
    const result = await response.json()
    //for now, we are just showing it 
    return result 
}

// console.log(ghibli(urlAPI))

(async ()=>{
    try {
        //we call our function
        const movies = await ghibli(urlAPI);
        //create the skeleton what is going to be showed 
        
        let view = `
        ${movies.map(movie=>` 
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${movie.image}" alt="${movie.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${movie.title}
          </h3>
        </div>
      </div>`
        ).slice(0, 8).join('')}
      `;
      content.innerHTML = view;
    } catch(error){
       console.log(error)
    }
})();

