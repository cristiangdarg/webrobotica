
function buscar() {
  var input = document.getElementById("searchInput");
  var filter = input.value.toUpperCase();
  var table = document.getElementById("certTable");
  var tr = table.getElementsByTagName("tr");
  for (var i = 1; i < tr.length; i++) {
    var tdName = tr[i].getElementsByTagName("td")[0];
    var tdDni = tr[i].getElementsByTagName("td")[1];
    if (tdName || tdDni) {
      var textValue = (tdName.textContent || tdName.innerText) + " " + (tdDni.textContent || tdDni.innerText);
      tr[i].style.display = textValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
    }
  }
}
