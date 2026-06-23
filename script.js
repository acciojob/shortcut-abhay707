function shortcut(s1, s2) {
	let ans = "";
	if(s1.length !== 0 && s2.length !== 0){
		ans += `${s1[0]}${s2[0]}`;
	}else{
		return ans;
	}
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
