const draggables = document.querySelectorAll(".draggable")
const containers = document.querySelectorAll(".container")

draggables.forEach( draggables => {
    draggables.addEventListener('dragstart', () => {
        draggables.classList.add('dragging')
    })

    draggables.addEventListener('dragend', () => {
        draggables.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable)
    })
}) 
        
function getDragAfterElement(container, y){
    const draggableElements = [...container.querySelectorAll('draggable:not(.dragging')]

    draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
    }, {offset: Number.POSITIVE_INFINITY})
}