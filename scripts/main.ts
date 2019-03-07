//

let url = 'https://api.github.com/users/boeckmt/repos?type=sources';

function compare(a, b) {
  let _a = new Date(a.created_at).getTime(), _b = new Date(b.created_at).getTime();
  if (_a < _b)
    return 1;
  if (_a > _b)
    return -1;
  return 0;
}

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((myJson: any[]) => {
    let repos = myJson.filter(item => !item.fork).sort(compare);//.map(item => item.name);
    let inseret_container = document.getElementById('insert');
    inseret_container.outerHTML = `<div class="timeline-container">${
      repos.map((item) => {
        return `
          <div class="timeline-block">
          <h4 class="timeline-title"><a href="${item.clone_url}" target="_blank">${item.name}</a></h4>
          <div class="timeline-block-content">
            ${item.description || ''}
          </div>
          <div class="timeline-block-date">
            ${item.created_at.split('T')[0]}
          </div>
        </div>`
      }).join(" ")
      }
      
      </div>`;
    console.log(repos);
  });




