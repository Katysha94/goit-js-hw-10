import { fetchBreeds, fetchCatByBreed } from './cat-api'
import SlimSelect from 'slim-select'
import Notiflix from 'notiflix';
import 'slim-select/dist/slimselect.css'

const breedSelector = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");

let arrayBreeds = [];

fetchBreeds()
    .then(data => {
        breedSelector.classList.remove("is-hidden");
        loader.classList.remove("is-hidden");
        data.forEach(element => {
            arrayBreeds.push({ text: element.name, value: element.id });
        });
        
        new SlimSelect({
            select: breedSelector,
            data: arrayBreeds,
        });
    })
    .catch(error => {
        loader.classList.add("is-hidden");
        error.classList.remove("is-hidden");

        Notiflix.Notify.failure(error.message);
    });

breedSelector.addEventListener('change', breedSelection);

function breedSelection(evt) {
    const breedId = evt.currentTarget.value;
    fetchCatByBreed(breedId, loader, catInfo)
        .then(data => {     
        const { url, breeds } = data[0];
            const markupCatDesc=
      `<div class="cat-info">
        <img class="cat-images" src="${url}" alt="${breeds[0].name}" width="320"/></div>
        <div class="cat-info-container">
        <h2 class="cat-name">${breeds[0].name}</h2>
        <p class="cat-desc">${breeds[0].description}</p>
        <p class="cat-info-temp"><span class="cat-temp">Temperament:</span>${breeds[0].temperament}</p></div>`;    
    catInfo.innerHTML = markupCatDesc;      
      
        })
        .catch(error => {
            Notiflix.Notify.failure(error.message)
        })
        .finally(() => {
       catInfo.classList.remove('is-hidden');
        loader.classList.add('is-hidden');
    })
}