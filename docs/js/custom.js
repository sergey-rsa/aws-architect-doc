document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");

  checkboxes.forEach((checkbox, index) => {
    // Assign a unique ID to each checkbox
    const id = `checkbox-${index}`;
    checkbox.id = id;

    // Restore the checkbox state from local storage
    if (localStorage.getItem(id) === "true") {
      checkbox.checked = true;
    }

    // Save the state of the checkbox in local storage when it's clicked
    checkbox.addEventListener("change", function () {
      localStorage.setItem(id, checkbox.checked);
    });
  });
});
