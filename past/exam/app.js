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
