var ctx2 = document.getElementById("doughnut").getContext("2d");
var myChart2 = new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["Academic", "Non-Academic", "Administration", "Others"],

    datasets: [
      {
        label: "Employees",
        data: [42, 12, 8, 6],
        backgroundColor: [
          "rgba(41, 155, 99, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(120, 46, 139,1)",
        ],
        borderColor: [
          "rgba(41, 155, 99, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(120, 46, 139,1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// Thêm sinh viên mới vào bảng
document
  .getElementById("add-student-btn")
  .addEventListener("click", function () {
    const nameInput = document.getElementById("input-name").value.trim();
    const mssvInput = document.getElementById("input-mssv").value.trim();

    if (nameInput && mssvInput) {
      const tableBody = document.querySelector("#student-table tbody");
      const newRow = document.createElement("tr");

      // Đếm số thứ tự hiện tại trong bảng để thêm STT mới
      const rowCount = tableBody.getElementsByTagName("tr").length + 1;

      newRow.innerHTML = `
        <td><input type="checkbox" class="select-student" /></td>
        <td>${rowCount}</td>
        <td>${nameInput}</td>
        <td>${mssvInput}</td>
      `;

      tableBody.appendChild(newRow);

      // Clear input fields after adding
      document.getElementById("input-name").value = "";
      document.getElementById("input-mssv").value = "";
    } else {
      alert("Vui lòng nhập đầy đủ họ tên và mã số sinh viên.");
    }
  });

// Select All functionality
document.getElementById("select-all").addEventListener("change", function () {
  const checkboxes = document.querySelectorAll(".select-student");
  checkboxes.forEach((checkbox) => (checkbox.checked = this.checked));
});

// Delete selected students
document.getElementById("delete-btn").addEventListener("click", function () {
  const checkboxes = document.querySelectorAll(".select-student:checked");
  checkboxes.forEach((checkbox) => {
    const row = checkbox.closest("tr");
    row.parentNode.removeChild(row);
  });
});
