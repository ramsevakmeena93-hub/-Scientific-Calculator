const result = document.getElementById('result');
const history = document.getElementById('history');
let expression = '';

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;

    if (value === 'AC') {
      expression = '';
      result.value = '0';
      history.textContent = '';
    }
    else if (value === 'DEL') {
      expression = expression.slice(0, -1);
      result.value = expression || '0';
    }
    else if (value === '=') {
      try {
        let calc = expression
          .replace(/sin/g, 'Math.sin')
          .replace(/cos/g, 'Math.cos')
          .replace(/tan/g, 'Math.tan')
          .replace(/log/g, 'Math.log10')
          .replace(/ln/g, 'Math.log')
          .replace(/π/g, 'Math.PI')
          .replace(/√/g, 'Math.sqrt')
          .replace(/\^/g, '**');

        let answer = eval(calc);
        history.textContent = expression + ' =';
        result.value = parseFloat(answer.toFixed(10));
        expression = result.value;
      }
      catch {
        result.value = 'Error';
        setTimeout(() => {
          result.value = '0';
          expression = '';
          history.textContent = '';
        }, 1000);
      }
    }
    else if (value === 'x²') {
      expression += '**2';
      result.value = expression;
    }
    else if (value === 'x^') {
      expression += '**';
      result.value = expression;
    }
    else {
      expression += value;
      result.value = expression;
    }
  });
});

result.value = '0';