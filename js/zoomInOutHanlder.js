const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const gridContainer = document.getElementById('gridContainer');
const gridWrapper = document.getElementById('gridWrapper');

zoomInBtn.addEventListener('click', () => {
    gridContainer.classList.contains('py-12') && gridWrapper.classList.contains('w-3/4')
        ? (
            gridContainer.classList.add('py-6'),
            gridWrapper.classList.add('w-[90%]')
        )
        : (
            gridContainer.classList.add('py-12'),
            gridWrapper.classList.add('w-3/4')
        )

        gridContainer.classList.contains('py-40') && gridWrapper.classList.contains('w-1/3')
            ? (
                gridContainer.classList.remove('py-40'),
                gridWrapper.classList.remove('w-1/3'),
                gridContainer.classList.remove('py-12'),
                gridWrapper.classList.remove('w-3/4')
            ) : null
})

zoomOutBtn.addEventListener('click', () => {
    gridContainer.classList.contains('py-6') && gridWrapper.classList.contains('w-[90%]')
        ? (
            gridContainer.classList.remove('py-6'),
            gridWrapper.classList.remove('w-[90%]')
        )
        : gridContainer.classList.contains('py-12') && gridWrapper.classList.contains('w-3/4')
            ? (
                gridContainer.classList.remove('py-12'),
                gridWrapper.classList.remove('w-3/4')

            ) : !(gridContainer.classList.contains('py-12') && gridWrapper.classList.contains('w-3/4'))
                    ? (
                        gridContainer.classList.add('py-40'),
                        gridWrapper.classList.add('w-1/3')
                    ) : null


                    })