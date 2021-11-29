let dropdownValue = document.querySelector('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list');

function activeClick() {
    dropdownList.classList.add('dropdown__list_active')
};
function removeClick() {
    dropdownList.classList.remove('dropdown__list_active')
    console.log('remove');
};

dropdownValue.addEventListener('click', activeClick);

let dropdownItem = document.querySelectorAll('.dropdown__item');
let arrayItems = Array.from(dropdownItem);

console.log(arrayItems);

for (let i = 0; i < arrayItems.length; i++) {
    arrayItems[i].onclick = function () {
        dropdownValue.textContent = this.textContent;
        removeClick();
        return false;

    }

}