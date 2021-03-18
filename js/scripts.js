const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let tc = entry.target.textContent;
        entry.target.value = tc.substring(0, 2);
      } else {
        entry.target.value = "0";
      }
    });
  },
  {
    root: null,
  }
);

document.querySelectorAll("progress").forEach((progress) => {
  observer.observe(progress);
});
