const selectOption = (e) => {
  const options = e.currentTarget.parentElement.children;
  for (const option of options) {
    if (option.id === e.currentTarget.id) {
      option.classList.add("option-component--selected");
    } else {
      option.classList.remove("option-component--selected");
    }
  }
};

export default {
  selectOption,
};
