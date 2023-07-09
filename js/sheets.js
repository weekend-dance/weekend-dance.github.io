const SHEET_ID = '1U59Jy4DXnfmhxF_1HxllLvZsmNWxuIEQwggySHpMwDs';
const ACCESS_TOKEN = 'ya29.a0AbVbY6O8axm8hJDCMGTOMI8DHlDxDczxSB6tFU4a9lPiJ_Od26BUdJbJhRcboNmcvkLLfOIDfudKrchXrC59PaGZoVxfCpQb1c_UbsrzFdgYmugmZNsfYpqOk4x8rkTF937UKjvS7htiLRlJj1XLuhKb9LF8sqcaCgYKAT0SARASFQFWKvPl9Gpgtwfoujn8y0BpzYeRcw0166';

function addRow() {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
            requests: [{
                repeatCell: {
                    range: {
                        startColumnIndex: 0,
                        endColumnIndex: 1,
                        startRowIndex: 0,
                        endRowIndex: 1,
                        sheetId: 0
                    },
                    cell: {
                        userEnteredValue: {
                            "numberValue": 10
                        },
                    },
                    fields: "*"
                }
            }]

        })
    })
}
