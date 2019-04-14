//
var url = 'https://api.github.com/users/boeckmt/repos?type=sources';
function compare(a, b) {
    var _a = new Date(a.created_at).getTime(), _b = new Date(b.created_at).getTime();
    if (_a < _b)
        return 1;
    if (_a > _b)
        return -1;
    return 0;
}
fetch(url)
    .then(function (response) {
    return response.json();
})
    .then(function (myJson) {
    var repos = myJson.filter(function (item) { return !item.fork; }).sort(compare); //.map(item => item.name);
    var inseret_container = document.getElementById('insert');
    inseret_container.outerHTML = "<div class=\"timeline-container\">" + repos.map(function (item) {
        return "\n          <div class=\"timeline-block\">\n            <div class=\"timeline-block-line\">\n            </div>\n            <div class=\"timeline-block-inner\">\n              <h4 class=\"timeline-title\"><a href=\"" + item.clone_url + "\" rel=\"noopener\" target=\"_blank\">" + item.name + "</a></h4>\n                <div class=\"timeline-block-content\">\n                  " + (item.description || '') + "\n                </div>\n              <div class=\"timeline-block-date\">\n                " + item.created_at.split('T')[0] + "\n              </div>\n            </div>\n            \n          </div>";
    }).join(" ") + "\n      \n      </div>";
    console.log(repos);
});
