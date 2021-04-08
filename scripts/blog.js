let blog = document.getElementById('blog-div');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'docs/blogs.json', true);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.blogs;
    console.log(articles);
    let articleDivHtml = "";
    articles.forEach(function (element, index) {
      let news = `<div class="col-sm" data-aos="zoom-in"><div class="card my-3"  >
            <img  style="height:200px" class="card-img-top" src="${element["cover"]}" alt="Card image cap">
            <div class="card-body" >
            <img src="${element["image"]}" alt="Avatar" class="avatar"><span id="span1"><b>${element["name"]}</b><br>${element["about"]}</span>
            <hr> <h5 class="card-title">${element["title"]}</h5>
              <p class="card-text">${element["meta-title"]}</p>
              <a href="${element["url"]}" target="_blank" class="btn  btn-warning" id="read">Read More</a>
            </div>
          </div></div>`;
      articleDivHtml += news;
    });
    blog.innerHTML = articleDivHtml;
  }
  else {
    console.log("Some error occured")
  }
}

xhr.send()


AOS.init({
    duration: 1200,
  })
