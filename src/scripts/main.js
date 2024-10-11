'use strict';

const table = document.querySelector('table');
const rows = table.rows;

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const minCells = 2;
const maxCells = 10;

appendRow.onclick = function () {
  if (rows.length < maxCells) {
    const newRow = table.insertRow();

    const columnCount = rows[0].cells.length;

    for (let i = 0; i < columnCount; i++) {
      newRow.insertCell(-1);
    }

    removeRow.disabled = false;

    if (rows.length === maxCells) {
      appendRow.disabled = true;
    }
  }
};

removeRow.onclick = function () {
  table.deleteRow(-1);

  appendRow.disabled = false;

  if (rows.length === minCells) {
    removeRow.disabled = true;
  }
};

appendColumn.onclick = function () {
  const columnCount = rows[0].cells.length;

  if (columnCount < maxCells) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].insertCell(-1);
    }

    removeColumn.disabled = false;

    if (rows[0].cells.length === maxCells) {
      appendColumn.disabled = true;
    }
  }
};

removeColumn.onclick = function () {
  const columnCount = rows[0].cells.length;

  if (columnCount > minCells) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].deleteCell(-1);
    }

    appendColumn.disabled = false;

    if (rows[0].cells.length === minCells) {
      removeColumn.disabled = true;
    }
  }
};
