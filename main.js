document.getElementById('mainForm').addEventListener('submit', e => {
    const acceptableFacilitators = ['Fazil', 'Chris', 'Christian', 'Josh'];
    const selectedFacilitatorField = document.getElementById('facilitator');
    const alertMessage = document.getElementById('alertMessage')

    if (!acceptableFacilitators.includes(selectedFacilitatorField.value)) {
        selectedFacilitatorField.classList.add('wrongInputField');
        alertMessage.innerHTML = '<p id="errorMessage">That facilitator doesn\'t exist!</p>';
        e.preventDefault();
    }
});