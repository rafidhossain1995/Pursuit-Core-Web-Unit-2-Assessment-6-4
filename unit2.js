document.addEventListener("DOMContentLoaded", ()=>{
    let form = document.querySelector("form")
    let select = document.querySelector(".select")
    let text = document.querySelector(".text")
    let type = document.querySelector(".type")
    let movieDescription = document.querySelector(".movieDesc")

    const selectMovie = async()=>{
        try{
            let res = await axios.get("https://ghibliapi.herokuapp.com/films")
            //debugger
            let title = res.data
            title.forEach(movie=>{
                let option = document.createElement("option")
                option.innerText = movie.title
                //option.value = movie.title
                select.appendChild(option)
            })
        }catch(err){
            console.log(err)
        }
        let title = document.createElement("h3")
        movieDescription.appendChild(title)
        let releaseYear = document.createElement("p")
        movieDescription.appendChild(releaseYear)
        let description = document.createElement("p")
        movieDescription.appendChild(description)

        select.addEventListener("change",  (e)=>{
            title.innerText = e.target.value
            try{
                let res2 =  axios.get("https://ghibliapi.herokuapp.com/films")
                let films = res.data
                // films.forEach(film=>{
                //     if(e.target.value === movie.title)

                // })
            }catch(err){
                console.log(err)
            }
        })
    }
    selectMovie()
})