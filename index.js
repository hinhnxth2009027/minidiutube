var txtkeyword = document.querySelector('.keyword');
var btnSearch = document.querySelector('.search');
var key_youtube1 = 'AIzaSyCmFP0PUbDWN93nlLWJvoyFWtjm4lcPqYo'



document.addEventListener('DOMContentLoaded',function (){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var thumbnail_ytb = '';
                var id_ytb_video = '';
                var title = ''
                var responseJson = JSON.parse(xhttp.responseText);
                for (var i = 0; i <= responseJson.items.length; i++) {
                    var element = responseJson.items[i];
                    thumbnail_ytb = `${element.snippet.thumbnails.high.url}`;
                    id_ytb_video = `${element.id.videoId}`
                    title = `${element.snippet.title}`
                    document.querySelector('.thumbnail_video').innerHTML += `<div class="newcontent col-3 col-s-12 cao respont" id="${id_ytb_video}"><img class="video_thumbnail" src="${thumbnail_ytb}"><br><h3>${title}</h3></div> `
                    var btnOpentvideo = document.querySelectorAll('.respont');
                    for (var a = 0; a < btnOpentvideo.length; a++) {
                        btnOpentvideo[a].addEventListener('click',loadVideo )
                    }
                }
            } else {
                alert('lỗi máy chủ');
            }
        }
    }
    xhttp.open('GET', `https://content.googleapis.com/youtube/v3/search?q=learn+javascrip&type=video&maxResults=28&part=snippet&key=${key_youtube1}`);
    xhttp.send();


    btnSearch.addEventListener('click', function () {
        document.querySelector('.thumbnail_video').innerHTML='';
        var keyword = txtkeyword.value;
        txtkeyword.value='';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    var thumbnail_ytb = '';
                    var id_ytb_video = '';
                    var title = ''
                    var responseJson = JSON.parse(xhttp.responseText);
                    for (var i = 0; i <= responseJson.items.length; i++) {
                        var element = responseJson.items[i];
                        thumbnail_ytb = `${element.snippet.thumbnails.high.url}`;
                        id_ytb_video = `${element.id.videoId}`
                        title = `${element.snippet.title}`
                        document.querySelector('.thumbnail_video').innerHTML += `<div class="newcontent col-3 col-s-12 cao respont" id="${id_ytb_video}"><img class="video_thumbnail" src="${thumbnail_ytb}"><br><h3>${title}</h3></div> `
                        var btnOpentvideo = document.querySelectorAll('.respont');
                        for (var a = 0; a < btnOpentvideo.length; a++) {
                            btnOpentvideo[a].addEventListener('click',loadVideo )
                        }
                    }
                } else {
                    alert('lỗi máy chủ');
                }
            }
        }
        xhttp.open('GET', `https://content.googleapis.com/youtube/v3/search?q=${keyword}&type=video&maxResults=28&part=snippet&key=${key_youtube1}`);
        xhttp.send();
    });
});
var my_video = document.getElementById('my_video');
var video_youtube = document.getElementById('video_01');
var btnClose = document.querySelector('.close');
function loadVideo() {
    document.querySelector('.video_display').src = `https://www.youtube.com/embed/${this.id}`
    btnClose.style = 'display:block;';
    my_video.style = 'display:block;';
}
btnClose.onclick = function () {
    video_youtube.src = '';
    my_video.style = 'display:none;';
}