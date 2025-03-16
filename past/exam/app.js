let solution_view = false;

function switch_solution_view(){
    solution_pdf = document.getElementById("solution_pdf");
    button = document.getElementById("button");
    if (solution_view == false) {
        solution_pdf.classList.remove("noview");
        button.innerHTML = "非表示"
        solution_view = true;

    } else {
        solution_pdf.classList.add("noview");
        button.innerHTML = "表示"
        solution_view = false;
    }
}


document.addEventListener("DOMContentLoaded", function() {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 500); // 500ms待ってスクロール
      }
    }
  });