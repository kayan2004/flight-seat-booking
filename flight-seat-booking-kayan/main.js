document.addEventListener("DOMContentLoaded", () => {});

document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("dest");
  const display = document.getElementById("price-per-seat");
  var setSelectedValue = () => {
    var selectedIndex = element.selectedIndex;
    const selectedOption = element.options[selectedIndex];
    const value = selectedOption.value;
    console.log(value);
    display.textContent = value;

    return value;
  };
  setSelectedValue();

  element.addEventListener("change", setSelectedValue);

  const seats = document.querySelectorAll(".seat");
  const selectedCountDisplay = document.getElementById("selected_count");

  const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll(".seat.selected");
    const selectedCount = selectedSeats.length;
    console.log(selectedCountDisplay.textContent);
    selectedCountDisplay.textContent = selectedCount - 1;
    return selectedCount - 1;
  };

  const updateTotal = () => {
    const selectedCount = updateSelectedCount();
    const price = setSelectedValue();

    const total = price * selectedCount;

    const total_element = document.getElementById("total_price");
    total_element.textContent = total;
  };

  seats.forEach((seat) => {
    if (seat.classList.contains("unavailable")) {
      return;
    } else {
      seat.addEventListener("click", () => {
        seat.classList.toggle("selected");

        updateTotal();
      });
    }
  });

  // Initial update of selected seats count
  updateTotal();
});
