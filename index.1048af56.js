!function(){var e="live_JRDiqhjq8lH6Gl1Jk7NT98Xboh8OYBUcN8KEh2sPUrxiISZp8V31uHpKbTTYFSwx",n="https://api.thecatapi.com/v1";function t(t){return fetch("".concat(n,"/images/search?breed_ids=").concat(t),{headers:{"x-api-key":e}}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}var c=document.querySelector(".cat-info"),o=document.querySelector(".breed-select"),r=document.querySelector(".loader"),a=document.querySelector(".error");function i(e){c.innerHTML='\n        <img src="'.concat(e[0].url,'" alt="').concat(e[0].breeds[0].name,'"></img>\n        <h2>').concat(e[0].breeds[0].name,"</h2>\n        <p>").concat(e[0].breeds[0].description,"</p>\n        <p><b>Temperament: ").concat(e[0].breeds[0].temperament,"</b></p>\n    ")}function s(){r.style.display="none"}function u(){a.style.display="block"}a.style.display="none",o.addEventListener("change",(function(e){r.style.display="block",c.innerHTML="",t(e.target.value).then(i).catch((function(e){console.log(e),u()}))})),fetch("".concat(n,"/breeds"),{headers:{"x-api-key":e}}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){e.forEach((function(e){var n=document.createElement("option");n.value=e.id,n.textContent=e.name,o.appendChild(n),s()})),t(e[0].id).then((function(){s()})).catch((function(e){console.log(e),u()}))})).catch((function(e){console.log(e),u()}))}();
//# sourceMappingURL=index.1048af56.js.map
