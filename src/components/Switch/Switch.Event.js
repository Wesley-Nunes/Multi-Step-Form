const markText = (e) => {
  const [month, year] = e.currentTarget.querySelectorAll("span");
  if (e.target.checked) {
    month.classList.remove("switch-component--selected-option");
    year.classList.add("switch-component--selected-option");
  } else {
    month.classList.add("switch-component--selected-option");
    year.classList.remove("switch-component--selected-option");
  }
};

export default {
  markText,
};
