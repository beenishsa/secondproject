$( document ).ready(function() {
    console.log( "ready!" );

//$('#fetch-from-api').click(function() {
    //console.log("i was clicked");
    
$.get("https://api.giphy.com/v1/gifs/search?api_key=qZqq8jPd45n49RvLiY6PtNPiAixu1RsK&q=corona", function(giphyResponse) {
    console.log(giphyResponse);
    console.log('giphyData', giphyResponse.data)
    console.log('giphyResponse result 0 (1st result)'- giphyResponse.data[0]);
    console.log('giphyResponse result 0 (1st result) - all images list', giphyResponse.data[0].images);
    console.log('giphyResponse result 0 (1st result)- all images list- original image', giphyResponse.data[0].images.original);
    console.log('giphyResponse result 0 (1st result) - all images list- original image-url', giphyResponse.data[0].images.original.url);
     
    let imgHtml= "<img src=${giphyResponse.data[0].images.original.url} />"

    $('#first-result-image').html(imgHtml);


        });
    })
//});



