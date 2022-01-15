const marvel = {
    render: () => {
      const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a1087fb2b9bd329e7dcd967db2e6a839&hash=7a391475437bc8e67f4182bd472f4369';
      const container = document.querySelector('#marvel-row');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
          for (const hero of json.data.results) {
            let urlHero = hero.urls[0].url;
            contentHTML += `
              <div class="col-md-3">
                  <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                  </a>
                  <h4 class="title">${hero.name}</h4>
              </div>`;
          }
          container.innerHTML = contentHTML;
        })
    }
  };
  marvel.render();