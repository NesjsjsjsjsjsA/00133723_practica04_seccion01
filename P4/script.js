document.addEventListener("DOMContentLoaded", () => {
  const textElM = document.querySelector("#secretWord");

  function day() {
    let dayW = prompt("dia de la semana :D").toLowerCase();
    let caseR;

    switch (dayW) {
      case "lunes":
        caseR = "atender un cliente especificos";
        break;
      case "martes":
        caseR = "visitar una agencia fuera de la ciudad";
        break;
      case "miercoles":
        caseR = "llevar a mi hija al ballet (balé)";
        break;
      case "jueves":
        caseR = "priorizar entregas de desarrollo";
        break;
      case "viernes":
        caseR = "atender problemas de manera remota";
        break;
      case "sabado":
        caseR = "hacer lo que mi esposa quiera";
        break;

      default:
        caseR = "O es domingo o no has puesto bien el día";
    }

    changeTitle(caseR);
  }

  function changeTitle(text) {
    textElM.textContent = "Usted debe " + text;
    textElM.style.color = "purple";
    textElM.fontStyle = "italic";
  }

  document.querySelector("#action").onclick = day;
});
