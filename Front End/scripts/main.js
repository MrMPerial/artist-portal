var theRequest = new XMLHttpRequest();
theRequest.open('GET', 'server/main.json');
theRequest.onload = function () {
    if (theRequest.status >= 200 && theRequest.status < 400) {
        var data = JSON.parse(theRequest.responseText);
        createHTML(data);
    } else {
        console.warn("Oops, Something went wrong!");
    }
};

theRequest.onerror = function () {
    console.warn("Connection error");
};

theRequest.send();

function createHTML(songsData) {
    var rawTemplate = document.getElementById('songsTemplate').innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var theGeneratedHTML = compiledTemplate(songsData);

    var songsContainer = document.getElementById('cardTemplate');
    songsContainer.innerHTML = theGeneratedHTML;

};