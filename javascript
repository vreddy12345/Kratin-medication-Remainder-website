const medicationList = document.getElementById('medication-list');
const addMedicationForm = document.querySelector('form');
const nameInput = document.getElementById('name');
const dosageInput = document.getElementById('dosage');
const frequencyInput = document.getElementById('frequency');
const timeInput = document.getElementById('time');




function addMedicationToDOM(medication) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    h3.textContent = medication.name;
    p.textContent = `${medication.dosage} - ${medication.frequency} - ${medication.time}`;
    li.appendChild(h3);
    li.appendChild(p);
    medicationList.appendChild(li);
}
async function getMedications() {
    const response = await fetch('https://medication-reminder-application.onrender.com/');
    const medications = await response.json();
    medications.forEach(addMedicationToDOM);
}



async function addMedication(event) {
    event.preventDefault();
    const medication = {
        name: nameInput.value,
        dosage: dosageInput.value,
        frequency: frequencyInput.value,
        time: timeInput.value
    };
    const response = await fetch('https://medication-reminder-application.onrender.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(medication)
    });
    const newMedication = await response.json();
    addMedicationToDOM(newMedication);
    addMedicationForm.reset();
}


addMedicationForm.addEventListener('submit', addMedication);
getMedications();
