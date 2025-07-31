var meds = [];

function addMed () {
    event.preventDefault();

    const newMed ={
        "medName":document.getElementById('fname').value,
        "medQtd":document.getElementById('fqtd').value,
        "medClass":document.getElementById('fclass').value,
    }

    meds.push(newMed);
    renderTable();
    console.log(meds);
}

function removeMed (index) {
    meds.splice(index, 1);
    renderTable();
}

function renderTable () {
    let table = document.getElementById("datatable");
    table.innerHTML=`<th>ID</th>
                    <th>Nome do Medicamento</th>
                    <th>Quantidade Disponível</th>
                    <th>Classe do Medicamento</th>
                    <th>Remover Medicamento</th>`;

               for (let i = 0; i < meds.length; i++) {
                table.innerHTML += `<tr>
                <td>${i}</td>
                <td>${meds[i].medName}</td>
                <td>${meds[i].medQtd}</td>
                <td>${meds[i].medClass}</td>
                <td><img src="remove.png" alt="Remover Medicamento" onclick="removeMed(${i})"></td>
                </tr>`;
               }
}

renderTable();