const selectCheckbox = (e) => {
  const checkboxContainer = e.currentTarget;
  const checkbox = checkboxContainer.querySelector("input");
  if (checkbox.checked) {
    checkboxContainer.classList.add("checkbox-component--selected");
  } else {
    checkboxContainer.classList.remove("checkbox-component--selected");
  }
};

export default {
  selectCheckbox,
};
