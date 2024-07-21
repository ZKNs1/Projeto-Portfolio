document.addEventListener("DOMContentLoaded", function() {
    const squadForm = document.getElementById("squadForm");
    const squadSaveButton = document.getElementById("squadSave");
    const squadCancelButton = document.getElementById("squadCancel");
    const squadTable = document.getElementById("squadTable");

    squadForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const squadName = document.getElementById("squadName").value;
        const squadLeader = document.getElementById("squadLeader").value;
        const squadMembers = document.getElementById("squadMembers").value;
        const squadRow = document.getElementById("squadRow").value;

        if (squadSaveButton.textContent === "Salvar Alterações") {
            const rowIndex = parseInt(squadRow);
            const row = squadTable.rows[rowIndex];
            row.cells[0].textContent = squadName;
            row.cells[1].textContent = squadLeader;
            row.cells[2].textContent = squadMembers;

            squadSaveButton.textContent = "Cadastrar Squad";
            squadForm.reset();
            return;
        }

        const newRow = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.textContent = squadName;

        const tdLeader = document.createElement("td");
        tdLeader.textContent = squadLeader;

        const tdMembers = document.createElement("td");
        tdMembers.textContent = squadMembers;

        newRow.appendChild(tdName);
        newRow.appendChild(tdLeader);
        newRow.appendChild(tdMembers);

        const tdAction = document.createElement("td");

        const btEdit = document.createElement("button");
        btEdit.textContent = "Editar";
        btEdit.addEventListener("click", function() {
            const rowIndex = this.closest("tr").rowIndex;
            const squadName = squadTable.rows[rowIndex].cells[0].textContent;
            const squadLeader = squadTable.rows[rowIndex].cells[1].textContent;
            const squadMembers = squadTable.rows[rowIndex].cells[2].textContent;

            document.getElementById("squadName").value = squadName;
            document.getElementById("squadLeader").value = squadLeader;
            document.getElementById("squadMembers").value = squadMembers;
            document.getElementById("squadRow").value = rowIndex;

            squadSaveButton.textContent = "Salvar Alterações";
        });

        const btDelete = document.createElement("button");
        btDelete.textContent = "Remover";
        btDelete.addEventListener("click", function() {
            if (confirm("Confirma a exclusão do cadastro desta SQUAD?")) {
                squadTable.deleteRow(this.closest("tr").rowIndex);
            }
        });

        tdAction.appendChild(btEdit);
        tdAction.appendChild(btDelete);

        newRow.appendChild(tdAction);

        squadTable.appendChild(newRow);

        squadForm.reset();
    });

    squadCancelButton.addEventListener("click", function() {
        squadForm.reset();
        squadSaveButton.textContent = "Cadastrar Squad";
    });
});
