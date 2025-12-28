const fileInput = document.getElementById("fileInput");
const nextBtn = document.getElementById("nextBtn");


fileInput.addEventListener("change", () => {
    if (fileInput.files.length>0) {
    nextBtn.disabled = false;
    }
});
 
function goNext() {
    window.location.href = "medicine.html";
}
