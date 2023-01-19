document.querySelector(document).ready(function(){
    var API_KEY = "AIzaSyCB0DG0VLdOlNEHKzKl_YdUQ3V_qeKBiPk"

    var video = ''


    document.querySelector("#form").submit(function(event) {
        event.preventDefault()
        alert("form is submitted")

        var search = document.querySelector("#search").value

        videoSearch(API_KEY, search, 4)
    })

    function videoSearch(key,search,maxResults) {
        $.get("https://www.googleapis.com/youtube/v3/search?key="+ key
        + "&type=video&part=snippet&maxResults" + maxResults + "&q=" + search,
        function(data){console.log(data)
        
        data.items.forEach(item => {
            video = `
            
            <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
            `

            document.querySelector("videos").insertAdjacentHTML("beforeend",video)
        })
        
        })
    }
})
