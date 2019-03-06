//

let url = 'https://api.github.com/users/boeckmt/repos?type=sources';
fetch(url)
  .then((response)=> {
    return response.json();
  })
  .then((myJson:any[])=> {
      let repos = myJson.filter(item => !item.fork).map(item => item.name);
      let inseret_container = document.getElementById('insert');
      inseret_container.outerHTML = `${
        repos.map((item)=>{
            return `<p>${item}</p>`
        }).join(" ")
      }
      
      `;
    console.log(repos);
  });