const editor = document.getElementById('editor');
const textLocalStorage = localStorage.getItem('editorText');
const clear = document.getElementById('claer')
const deleteText = document.getElementById('deleteText')

editor.value = textLocalStorage;
editor.addEventListener('input', () => {
  localStorage.setItem('editorText', editor.value);
});


clear.addEventListener('click', () => {
    editor.value = ''
})

deleteText.addEventListener('click', () => {
    localStorage.setItem('editorText', '')
    editor.value = ''
})
