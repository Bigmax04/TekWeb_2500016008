const disp = document.getElementById('display');

    function input(val) {
      if (disp.value === '0' || disp.value === 'Error') {
        disp.value = val;
      } else {
        disp.value += val;
      }
    }

    function reset() {
      disp.value = '0';
    }

    function hapus() {
      if (disp.value.length === 1 || disp.value === 'Error') {
        disp.value = '0';
      } else {
        disp.value = disp.value.slice(0, -1);
      }
    }

    function hitung() {
      try {
        let expr = disp.value.replace(/%/g, '/100');
        disp.value = eval(expr);
      } catch (e) {
        disp.value = 'Error';
      }
    }