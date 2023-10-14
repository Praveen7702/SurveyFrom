const surveyForm = document.getElementById("surveyForm");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const popupData = document.getElementById("popup-data");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");

submitBtn.addEventListener("click", function () {
    if (surveyForm.checkValidity()) {
        showPopup();
    } else {
        alert("Please fill in all required fields.");
    }
});

resetBtn.addEventListener("click", function () {
    surveyForm.reset();
});

closePopup.addEventListener("click", function () {
    popup.style.display = "none";
    surveyForm.reset();
});

function showPopup() {
    popupData.innerHTML = "<h3>Survey Form Submission</h3>";
    const formElements = surveyForm.elements;
    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        if (element.type !== "button") {
            const label = document.querySelector(`label[for=${element.id}]`);
            if (element.type === "checkbox") {
                if (element.checked) {
                    popupData.innerHTML += `<p>${label.textContent}: Checked</p>`;
                }
            } else {
                popupData.innerHTML += `<p>${label.textContent}: ${element.value}</p>`;
            }
        }
    }
    popup.style.display = "block";
}
