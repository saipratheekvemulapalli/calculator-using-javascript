let arr = [];
        updateDisplay();

        function keystroke(value) {
            
            arr.push(value);
            let joined = arr.join('');
            document.getElementById('space').innerText = joined;
            
            
        }
        
        

        function equalto() {
            
            let calc = arr.join('');
            let result = eval(calc);
            document.getElementById('space').innerText = result;
           
            arr.length=0;
            arr.push(result);
            
            
        }

        function back() {
            if (arr.length > 0) {
                arr.pop();
                let afterpop = arr.join('');
                document.getElementById('space').innerText = afterpop;
            }
        }

        function square() {
            let groupingnumbers = arr.join('');
            if (!isNaN(groupingnumbers)) {
                let sqOfNum = groupingnumbers * groupingnumbers;
                document.getElementById('space').innerText = sqOfNum;
                arr.length=0;
                arr.push(sqOfNum);
            }
        }

        

        function mainpower(){
            
        }
        

    

        function clearfunc() {
            arr.length = 0; // Clear the array
            updateDisplay();
        }

        function updateDisplay() {
            document.getElementById('space').innerText = '0';
        }

    
    function sin() {
        let lastele = parseFloat(arr.join(''));
        if (!isNaN(lastele)) {
            let radians = lastele * (Math.PI / 180); 
            let finalans = Math.sin(radians).toFixed(2); 
            clearfunc();
            arr.push(finalans);
            document.getElementById('space').innerText = finalans;
        } else {
            document.getElementById('space').innerText = 'Invalid input';
        }
    }

    function cos() {
        let lastele = parseFloat(arr.join(''));
        if (!isNaN(lastele)) {
            let radians = lastele * (Math.PI / 180); 
            let finalans = Math.cos(radians).toFixed(2); 
            clearfunc();
            arr.push(finalans);
            document.getElementById('space').innerText = finalans;
        } else {
            document.getElementById('space').innerText = 'Invalid input';
        }
    }

    function tan() {
        let lastele = parseFloat(arr.join(''));
        if (!isNaN(lastele)) {
            let radians = lastele * (Math.PI / 180); 
            let finalans = Math.tan(radians).toFixed(2); 
            clearfunc();
            arr.push(finalans);
            document.getElementById('space').innerText = finalans;
        } else {
            document.getElementById('space').innerText = 'Invalid input';
        }
    }

    function sec() {
        let lastele = parseFloat(arr.join(''));
        if (!isNaN(lastele)) {
            let radians = lastele * (Math.PI / 180); 
            let finalans = Math.sec(radians).toFixed(2); 
            clearfunc();
            arr.push(finalans);
            document.getElementById('space').innerText = finalans;
        } else {
            document.getElementById('space').innerText = 'Invalid input';
        }
    }

    function cosec() {
        let lastele = parseFloat(arr.join(''));
        if (!isNaN(lastele)) {
            let radians = lastele * (Math.PI / 180); 
            let finalans = Math.cosec(radians).toFixed(2); 
            clearfunc();
            arr.push(finalans);
            document.getElementById('space').innerText = finalans;
        } else {
            document.getElementById('space').innerText = 'Invalid input';
        }
    }

    function cot() {
        let lastele = parseFloat(arr.join(''));
        if (!isNaN(lastele)) {
            let radians = lastele * (Math.PI / 180); 
            let finalans = Math.cot(radians).toFixed(2); 
            clearfunc();
            arr.push(finalans);
            document.getElementById('space').innerText = finalans;
        } else {
            document.getElementById('space').innerText = 'Invalid input';
        }
    }
    