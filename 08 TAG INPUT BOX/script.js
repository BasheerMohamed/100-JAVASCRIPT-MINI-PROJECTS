const tagInput =  document.querySelector('.content ul input');
const tagList = document.querySelector('.content ul');
const remainingTagCount = document.querySelector('.details p span');
const removeAllButton = document.querySelector('.details button');

let tags = [];
const maxTags = 10;

function updateRemainingTags() {
    remainingTagCount.textContent = maxTags - tags.length;
};

tagInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ',') {
        const tag = tagInput.value.trim().replace(',', '');
        addTag(tag);
        tagInput.value = '';
        e.preventDefault();
    }
});

function createTagElement(tag) {
    const li = document.createElement('li');
    li.textContent = tag;

    const removeIcon = document.createElement('i');
    removeIcon.innerHTML = '<ion-icon name="close"></ion-icon>';
    removeIcon.addEventListener('click', () => {
        tags = tags.filter(t => t !== tag);
        tagList.removeChild(li);
        updateRemainingTags();
    });

    li.appendChild(removeIcon);
    return li;
};

function addTag(tag) {
    if (tags.length >= maxTags || tags.includes(tag)) {
        return;
    }
    tags.push(tag);
    const tagElement = createTagElement(tag);
    tagList.insertBefore(tagElement, tagInput);
    updateRemainingTags();
};

removeAllButton.addEventListener('click', () => {
    tags = [];
    tagList.querySelectorAll('li').forEach(li => li.remove());
    updateRemainingTags();
});                                    