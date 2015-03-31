function pad(number) {
    if (number<=99) { number = ('0'+number).slice(-2); }
    return number;
}

var link = document.getElementsByTagName('video')[0].src;

var name = document.getElementsByClassName('content-header-recording-title')[0].innerHTML;

var dl_name = name.replace(/[\W_]+/g,'_');

[dl_name, link];
