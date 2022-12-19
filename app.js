const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', addTask);

// select list

const emptyStatusDiv = document.createElement('div');

function addTask() {
	// selecting text
	const inputText = document.getElementById('input-text').value;

	// if input is empty

	if (inputText == '') {
		return;
	}

	// if input os non-empty

	const newTaskContener = document.createElement('div');
	newTaskContener.setAttribute('class', 'item flex justify-center my-2');
	newTaskContener.innerHTML = `<div class="bg-white px-3 py-1 rounded-tl-md rounded-bl-md">
        ${inputText}
        </div>
        <button
            onclick="editList(this)"
            class="border-red-600 bg-yellow-600 text-white px-3 py-1">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>

        <button
            onclick="deleteList(this)"
            class="border-red-600 bg-red-600 text-white px-3 py-1">
            <i class="fa-solid fa-trash-can"></i>
        </button>

        <button
        onclick="doneList(this)"
            class="border-red-600 rounded-tr-md rounded-br-md bg-green-600 text-white px-3 py-1">
            <i class="fa-solid fa-check"></i>
        </button>`;

	document.querySelector('.todoList').appendChild(newTaskContener);

	document.getElementById('input-text').value = '';
}

// delete Task

function deleteList(curItem) {
	curItem.parentElement.remove();
}

// completed Task

function doneList(curItem) {
	let item = curItem.parentElement.children[0];

	if (item.classList.contains('line-through')) {
		item.classList.remove('line-through');

		curItem.classList.remove('bg-lime-500');
		curItem.classList.add('bg-green-600');
	} else {
		item.classList.add('line-through');

		curItem.classList.remove('bg-green-600');
		curItem.classList.add('bg-lime-500');
	}
}

// edit Task

function editList(curItem) {
	const parentItem = curItem.parentElement;
	const msg = document.createElement('div');
	msg.innerHTML = 'Now you can edit this task!';

	// styling msg
	msg.setAttribute('class', 'text-center');
	msg.setAttribute('id', 'msgShow');

	if (curItem.classList.contains('bg-yellow-600')) {
		curItem.classList.remove('bg-yellow-600');
		curItem.classList.add('bg-green-400');
		parentItem.children[0].setAttribute('contenteditable', 'true');
		// added msg
		parentItem.parentElement.insertBefore(msg, parentItem);
	} else {
		curItem.classList.remove('bg-green-400');
		curItem.classList.add('bg-yellow-600');
		parentItem.children[0].setAttribute('contenteditable', 'false');
		// remove msg previousSibling
		parentItem.previousSibling.remove();
	}
}
