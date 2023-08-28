function generateExpression(multiplicand, multiplier) {
   return `${multiplicand}*${multiplier}=${multiplicand * multiplier}\t`;
}

function generateLine(lineStart, lineEnd) {
    let line = "";
    for(let multiplicand = lineStart; multiplicand <= lineEnd; multiplicand++) {
       line += generateExpression(multiplicand, lineEnd);
    }
    return line.trimEnd();
}

function generateAllLines(start, end) {
    let table = "";

    for(let multiplier = start; multiplier <= end; multiplier++) {
        table += generateLine(start, multiplier);
        table += "\n";
     }
    
    return table.trim();
}

function isValid(start, end) {
   return start <= end && start >= 1 && end <= 1000;
}

export default {
    generateExpression,
    generateLine,
    generateAllLines,
    isValid
};
