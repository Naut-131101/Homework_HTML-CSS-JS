console.log(document.styleSheets); // Biến document.styleSheets trả về một danh sách các stylesheet.

for (const sheet of document.styleSheets) {
    console.log(sheet.cssRules) // styleSheet.cssRules chứa danh sách các rule trong stylesheet đó. 
    for (const rule of sheet.cssRules) {
        console.log(rule.selectorText); // Mỗi rule có thể có selectorText thể hiện selector ban đầu. 
    }
}