const SHEET_ID = '1U59Jy4DXnfmhxF_1HxllLvZsmNWxuIEQwggySHpMwDs';
const ACCESS_TOKEN = 'ya29.a0AbVbY6MVMKcrDPSJpdgRzFAQE2UvR6pcV-tYCAkv14xRzL5AnhoTxuqgQkrQZvvKyveeNrlkvSUWfWpyzJ_bVXmSw3fiju0cpzvSuNWsA2KNKn8z6HgdygoBQyMQvS9Qml9lKtqcjtK3WzVxcW_F5LqIHR_YaCgYKAeUSARASFQFWKvPlRXqs--9PhpTe_bEpXiT1iA0163';

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
