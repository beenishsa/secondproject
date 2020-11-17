$(document).ready(function(){
    console.log("ready!");

$('#search-button').on('click', () => {
    let searchTerm=$('search-field').val();
    console.log(searchTerm);
    let url="https://api.giphy.com/v1/gifs/search?api_key=qZqq8jPd45n49RvLiY6PtNPiAixu1RsK=" + searchTerm
       $.get(url, function(giphyResponse) {
         console.log(giphyResponse);
         console.log('giphyData', giphyResponse.data)
         console.log('giphyData result 0 (1st result)', giphyResponse.data[0]);
         console.log('giphyData result 0 (1st result) - all images list', giphyResponse.data[0].images);
         console.log('giphyData result 0 (1st result) - all images list - original image', giphyResponse.data[0].images.original);

         console.log('giphyData result 0 (1st result) - all images list - original image - url', giphyResponse.data[0].images.original.url);


         for (let image of giphyResponse.data) {        
           let imgHtml = `<img src=${image.images.original.url} />`
           $('#search-results').append(imgHtml);
         }
        });
       })
});


