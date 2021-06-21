const validarForm = () => {

    if(document.getElementById("name").value != "" && document.getElementById("email").value != "" &&
    document.getElementById("areacontent").value != "") {
        document.getElementById("sendBtn").disabled = false
    } else {
        document.getElementById("sendBtn").disabled = true
    }
}

document.getElementById("name").onblur = validarForm
document.getElementById("email").onblur = validarForm
document.getElementById("areacontent").onblur = validarForm


