function e(e){return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`,{headers:{"x-api-key":"live_JRDiqhjq8lH6Gl1Jk7NT98Xboh8OYBUcN8KEh2sPUrxiISZp8V31uHpKbTTYFSwx"}}).then((e=>e.json()))}const n=document.querySelector(".cat-info"),t=document.querySelector(".breed-select"),c=document.querySelector(".loader"),o=document.querySelector(".error");function r(e){i(),n.innerHTML=`\n        <img src="${e[0].url}" alt="${e[0].breeds[0].name}"></img>\n        <h2>${e[0].breeds[0].name}</h2>\n        <p>${e[0].breeds[0].description}</p>\n        <p><b>Temperament: ${e[0].breeds[0].temperament}</b></p>\n    `}function i(){c.style.display="none"}function a(){o.style.display="block"}o.style.display="none",t.addEventListener("change",(function(t){c.style.display="block",n.innerHTML="",e(t.target.value).then(r).catch((e=>{console.log(e),a()}))})),fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_JRDiqhjq8lH6Gl1Jk7NT98Xboh8OYBUcN8KEh2sPUrxiISZp8V31uHpKbTTYFSwx"}}).then((e=>e.json())).then((function(n){n.forEach((e=>{const n=document.createElement("option");n.value=e.id,n.textContent=e.name,t.appendChild(n),i()})),e(n[0].id).then(r).catch((e=>{console.log(e),a()}))})).catch((e=>{console.log(e),a()}));
//# sourceMappingURL=index.3fbd4931.js.map
