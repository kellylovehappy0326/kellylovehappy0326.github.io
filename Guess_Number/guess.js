
function Button1_onclick() {
	var n = new Array(4);
	do {
		for (var i=0; i<4; i++) {
			n[i] = parseInt(Math.random()*10).toString();
		}

		var rpt = false;
		for (var i=0; i<4; i++) {
			for (var j=0; j<4; j++) {
				if (i != j && n[i] == n[j]) {
					rpt = true;
				}
			}
		}

	} while (rpt)
	Text1.value = n[0] + n[1] + n[2] + n[3];
}

function Button2_onclick() {
	var D = Text2.value;
	var rpt = false;
	for(var i=0; i<4; i++) {
		for(var j=0; j<4; j++) {
			if(i != j && D.charAt(i) == D.charAt(j)) {
				rpt = true;
			}
		}
	}

	if (rpt) {
		alert ("數字重複！");
		return;
	}

	var A=0, B=0;
	var C=Text1.value;
	for (var i=0; i<4; i++) {
		for (var j=0; j<4; j++) {
			if (C.charAt(i) == D.charAt(j)) {
				if (i==j) {
					A++;
				} else {
					B++;
				}
			}
		}
	}
	TextArea1.innerHTML += Text2.value + "->" + A + "A" + B + "B\n"
	Text2.value = ""
}

