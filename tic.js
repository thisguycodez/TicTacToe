//TARGET ELEMENTS--------------CLAIM VALUES------------------------
	const spots = document.querySelectorAll(".game-pad div")
		const az = document.querySelectorAll(".top a")
	 		const p1ay3rCh0ic3$ = ['X', 'O']
		 const ccpt = localStorage.getItem("Clients Character Player Thingy")
		 const rounds = document.querySelector("#rounds")
	  let $c0r3 = 0;
	  const $core=document.querySelector("#score")
	  let other;
	  let cpscore=0;
	  let $round=0;
	  let fully = []
	 let pickRandomChoice = p1ay3rCh0ic3$[Math.floor(Math.random()*p1ay3rCh0ic3$.length)]
	  localStorage.setItem("score",$c0r3 )
	  localStorage.setItem("Clients Character Player Thingy", pickRandomChoice)
	  let compChoices = [spots[1],spots[2],spots[3],spots[4],spots[5],
							   spots[6],spots[7],spots[8],spots[9]]//all spots in an Array---

					let exact = Math.floor(Math.random()*compChoices.length);console.log(`exact is ${exact}`)
							//making a random number = to 'exact' to better target a random spot in the Array

						let compPicks = compChoices[exact]
//--------------------------------------------------------------------


if(localStorage.getItem("compScore")){
 cpscore = localStorage.getItem("compScore")
}else{
	  localStorage.setItem("compScore", cpscore)

}if(localStorage.getItem("clientScore")){
	$c0r3=localStorage.getItem("clientScore")
}else{
	localStorage.setItem("clientScore", $c0r3)

}if(localStorage.getItem("fullScore")){
	let fullScore =localStorage.getItem("fullScore")
	$core.innerHTML = fullScore


}else{
	let fullScore =`<b style='color:azure;-webkit-text-stroke:.5px red;'>${$c0r3}-${cpscore}</b>`
	$core.innerHTML = fullScore

}if(localStorage.getItem("round")){
		$round = localStorage.getItem("round")
		rounds.innerHTML = `<b style='color:azure;-webkit-text-stroke:.5px green;'>${$round}</b>`
}else{
	 $round = 0;
	localStorage.setItem("round", $round)
	rounds.innerHTML = `<b style='color:azure;-webkit-text-stroke:.5px green;'>${$round}</b>`
}



/*================================================================================
==================================================================================
-------------------------------------THE GAME-------------------------------------
==================================================================================
==================================================================================
*/

//comp makes final move
function cm(i){
			switch(i){

				case 'X':
				compPicks.innerHTML="O"
				bbb=0
				fully=[]
				localStorage.removeItem("winner")
			ca$e()
			break;
				case 'O':
				compPicks.innerHTML="X"
				bbb=0
				fully=[]
				localStorage.removeItem("winner")
			ca$e()
			break;
			}
			

		}

//GATHERING SPOTS------------
function ca$e(){

const $hitts = {
	ofn:[spots[1],spots[5],spots[9]],
	tfs:[spots[3],spots[5],spots[7]],
	ott:[spots[1],spots[2],spots[3]],
	ffs:[spots[4],spots[5],spots[6]],
	sen:[spots[7],spots[8],spots[9]],
	ofs:[spots[1],spots[4],spots[7]],
	tfe:[spots[2],spots[5],spots[8]],
	tsn:[spots[3],spots[6],spots[9]],
	}

	return $winner($hitts)

}

//CHECKING IF WINNGING SPOTS ARE FILLED CORRECTLY??
let $winner=(anyWin$)=>{

		console.log(anyWin$.ofn[0].innerHTML)
if(//ARE THE SPOTS FILLED????????
	anyWin$.ofn[0].innerHTML.length>0 && anyWin$.ofn[1].innerHTML.length>0  &&
	anyWin$.ofn[2].innerHTML.length>0 &&
	//ARE THEY OF THE SAME VALUE?????
	anyWin$.ofn[0].innerHTML==="X" && anyWin$.ofn[1].innerHTML==="X" &&
	anyWin$.ofn[2].innerHTML==="X" 
	|| 
	anyWin$.ofn[0].innerHTML==="O" && anyWin$.ofn[1].innerHTML==="O" &&
	anyWin$.ofn[2].innerHTML==="O"){///------------------------------------

	localStorage.setItem("whoWon?", anyWin$.ofn[0].innerHTML)
	
	if(localStorage.getItem("whoWon?")===ccpt){
		++$round
	++$c0r3;ccpt==="X"?other="O":other="X";
	}else{ccpt==="X"?other="O":other="X";++cpscore;++$round;localStorage.setItem(`compScore`, cpscore)}
	 cpscore = localStorage.getItem(`compScore`)
	 fullScore =`<b style='color:azure;-webkit-text-stroke:.5px red;'>${$c0r3}-${cpscore}</b>`
	localStorage.setItem("score", fullScore)
	localStorage.setItem("clientScore", $c0r3)
	localStorage.setItem("round", $round)
	$core.innerHTML=fullScore
	anyWin$.ofn[0].innerHTML="GaMe"
				anyWin$.ofn[1].innerHTML="GaMe"
					anyWin$.ofn[2].innerHTML="GaMe"
	window.$choice=function(){return false;}
	window.win=function(){return false;}
	window.compTurn=function(){return false;}
	localStorage.setItem("winner", "winner")
		
}else if(//ARE THE SPOTS FILLED????????
	anyWin$.tfs[0].innerHTML.length>0 && anyWin$.tfs[1].innerHTML.length>0  &&
	anyWin$.tfs[2].innerHTML.length>0 &&
	//ARE THEY OF THE SAME VALUE?????
	anyWin$.tfs[0].innerHTML==="X" && anyWin$.tfs[1].innerHTML==="X" &&
	anyWin$.tfs[2].innerHTML==="X" 
	|| 
	anyWin$.tfs[0].innerHTML==="O" && anyWin$.tfs[1].innerHTML==="O" &&
	anyWin$.tfs[2].innerHTML==="O"){

			
	localStorage.setItem("whoWon?", anyWin$.tfs[0].innerHTML)
	
	if(localStorage.getItem("whoWon?")===ccpt){
		++$round;
	++$c0r3;ccpt==="X"?other="O":other="X";
	}else{ccpt==="X"?other="O":other="X";++cpscore;++$round;localStorage.setItem(`compScore`, cpscore)}
	 cpscore = localStorage.getItem(`compScore`)
	 fullScore =`<b style='color:azure;-webkit-text-stroke:.5px red;'>${$c0r3}-${cpscore}</b>`
	localStorage.setItem("score", fullScore)
	localStorage.setItem("clientScore", $c0r3)
	localStorage.setItem("round", $round)
	$core.innerHTML=fullScore
	anyWin$.tfs[0].innerHTML="GaMe"
				anyWin$.tfs[1].innerHTML="GaMe"
					anyWin$.tfs[2].innerHTML="GaMe"
	window.$choice=function(){return false;}
	window.win=function(){return false;}
	window.compTurn=function(){return false;}
	localStorage.setItem("winner", "winner")

		
}else if(//ARE THE SPOTS FILLED????????
	anyWin$.ott[0].innerHTML.length>0 && anyWin$.ott[1].innerHTML.length>0  &&
	anyWin$.ott[2].innerHTML.length>0 &&
	//ARE THEY OF THE SAME VALUE?????
	anyWin$.ott[0].innerHTML==="X" && anyWin$.ott[1].innerHTML==="X" &&
	anyWin$.ott[2].innerHTML==="X" 
	|| 
	anyWin$.ott[0].innerHTML==="O" && anyWin$.ott[1].innerHTML==="O" &&
	anyWin$.ott[2].innerHTML==="O"){

			
	localStorage.setItem("whoWon?", anyWin$.ott[0].innerHTML)
	
	if(localStorage.getItem("whoWon?")===ccpt){
		++$round;
	++$c0r3;ccpt==="X"?other="O":other="X";
	}else{ccpt==="X"?other="O":other="X";++cpscore;++$round;localStorage.setItem(`compScore`, cpscore)}
	 cpscore = localStorage.getItem(`compScore`)
	 fullScore =`<b style='color:azure;-webkit-text-stroke:.5px red;'>${$c0r3}-${cpscore}</b>`
	localStorage.setItem("score", fullScore)
	localStorage.setItem("round", $round)
	localStorage.setItem("clientScore", $c0r3)
	$core.innerHTML=fullScore
	anyWin$.ott[0].innerHTML="GaMe"
				anyWin$.ott[1].innerHTML="GaMe"
					anyWin$.ott[2].innerHTML="GaMe"
	window.$choice=function(){return false;}
	window.win=function(){return false;}
	window.compTurn=function(){return false;}
	localStorage.setItem("winner", "winner")


}else if(//ARE THE SPOTS FILLED????????
	anyWin$.ffs[0].innerHTML.length>0 && anyWin$.ffs[1].innerHTML.length>0  &&
	anyWin$.ffs[2].innerHTML.length>0 &&
	//ARE THEY OF THE SAME VALUE?????
	anyWin$.ffs[0].innerHTML==="X" && anyWin$.ffs[1].innerHTML==="X" &&
	anyWin$.ffs[2].innerHTML==="X" 
	|| 
	anyWin$.ffs[0].innerHTML==="O" && anyWin$.ffs[1].innerHTML==="O" &&
	anyWin$.ffs[2].innerHTML==="O"){

			
	localStorage.setItem("whoWon?", anyWin$.ffs[0].innerHTML)
	
	if(localStorage.getItem("whoWon?")===ccpt){
		++$round;
	++$c0r3;ccpt==="X"?other="O":other="X";
	}else{ccpt==="X"?other="O":other="X";++cpscore;++$round;localStorage.setItem(`compScore`, cpscore)}
	 cpscore = localStorage.getItem(`compScore`)
	 fullScore =`<b style='color:azure;-webkit-text-stroke:.5px red;'>${$c0r3}-${cpscore}</b>`
	localStorage.setItem("score", fullScore)
	localStorage.setItem("round", $round)
	localStorage.setItem("clientScore", $c0r3)
	$core.innerHTML=fullScore
	anyWin$.ffs[0].innerHTML="GaMe"
				anyWin$.ffs[1].innerHTML="GaMe"
					anyWin$.ffs[2].innerHTML="GaMe"
	window.$choice=function(){return false;}
	window.win=function(){return false;}
	window.compTurn=function(){return false;}
	localStorage.setItem("winner", "winner")


}else if(//ARE THE SPOTS FILLED????????
	anyWin$.sen[0].innerHTML.length>0 && anyWin$.sen[1].innerHTML.length>0  &&
	anyWin$.sen[2].innerHTML.length>0 &&
	//ARE THEY OF THE SAME VALUE?????
	anyWin$.sen[0].innerHTML==="X" && anyWin$.sen[1].innerHTML==="X" &&
	anyWin$.sen[2].innerHTML==="X" 
	|| 
	anyWin$.sen[0].innerHTML==="O" && anyWin$.sen[1].innerHTML==="O" &&
	anyWin$.sen[2].innerHTML==="O"){

			
	localStorage.setItem("whoWon?", anyWin$.sen[0].innerHTML)
	
	if(localStorage.getItem("whoWon?")===ccpt){
		++$round;
	++$c0r3;ccpt==="X"?other="O":other="X";
	}else{ccpt==="X"?other="O":other="X";++cpscore;++$round;localStorage.setItem(`compScore`, cpscore)}
	 cpscore = localStorage.getItem(`compScore`)
	 fullScore =`<b style='color:azure;-webkit-text-stroke:.5px red;'>${$c0r3}-${cpscore}</b>`
	localStorage.setItem("score", fullScore)
	localStorage.setItem("round", $round)
	localStorage.setItem("clientScore", $c0r3)
	$core.innerHTML=fullScore
	anyWin$.sen[0].innerHTML="GaMe"
				anyWin$.sen[1].innerHTML="GaMe"
					anyWin$.sen[2].innerHTML="GaMe"
	window.$choice=function(){return false;}
	window.win=function(){return false;}
	window.compTurn=function(){return false;}
	localStorage.setItem("winner", "winner")

}else if(//ARE THE SPOTS FILLED????????
	anyWin$.ofs[0].innerHTML.length>0 && anyWin$.ofs[1].innerHTML.length>0  &&
	anyWin$.ofs[2].innerHTML.length>0 &&
	//ARE THEY OF THE SAME VALUE?????
	anyWin$.ofs[0].innerHTML==="X" && anyWin$.ofs[1].innerHTML==="X" &&
	anyWin$.ofs[2].innerHTML==="X" 
	|| 
	anyWin$.ofs[0].innerHTML==="O" && anyWin$.ofs[1].innerHTML==="O" &&
	anyWin$.ofs[2].innerHTML==="O"){

			
	localStorage.setItem("whoWon?", anyWin$.ofs[0].innerHTML)
	
	if(localStorage.getItem("whoWon?")===ccpt){
		++$round;
	++$c0r3;ccpt==="X"?other="O":other="X";
	}else{ccpt==="X"?other="O":other="X";++cpscore;++$round;localStorage.setItem(`compScore`, cpscore)}
	 cpscore = localStorage.getItem(`compScore`)
	 fullScore =`<b style='color:azure;-webkit-text-stroke:.5px red;'>${$c0r3}-${cpscore}</b>`
	localStorage.setItem("score", fullScore)
	localStorage.setItem("round", $round)
	localStorage.setItem("clientScore", $c0r3)
	$core.innerHTML=fullScore
	anyWin$.ofs[0].innerHTML="GaMe"
				anyWin$.ofs[1].innerHTML="GaMe"
					anyWin$.ofs[2].innerHTML="GaMe"
	window.$choice=function(){return false;}
	window.win=function(){return false;}
	window.compTurn=function(){return false;}
	localStorage.setItem("winner", "winner")


}else if(//ARE THE SPOTS FILLED????????
	anyWin$.tfe[0].innerHTML.length>0 && anyWin$.tfe[1].innerHTML.length>0  &&
	anyWin$.tfe[2].innerHTML.length>0 &&
	//ARE THEY OF THE SAME VALUE?????
	anyWin$.tfe[0].innerHTML==="X" && anyWin$.tfe[1].innerHTML==="X" &&
	anyWin$.tfe[2].innerHTML==="X" 
	|| 
	anyWin$.tfe[0].innerHTML==="O" && anyWin$.tfe[1].innerHTML==="O" &&
	anyWin$.tfe[2].innerHTML==="O"){

			
	localStorage.setItem("whoWon?", anyWin$.tfe[0].innerHTML)
	
	if(localStorage.getItem("whoWon?")===ccpt){
		++$round;
	++$c0r3;ccpt==="X"?other="O":other="X";
	}else{ccpt==="X"?other="O":other="X";++cpscore;++$round;localStorage.setItem(`compScore`, cpscore)}
	 cpscore = localStorage.getItem(`compScore`)
	 fullScore =`<b style='color:azure;-webkit-text-stroke:.5px red;'>${$c0r3}-${cpscore}</b>`
	localStorage.setItem("round", $round)
	localStorage.setItem("score", fullScore)
	localStorage.setItem("clientScore", $c0r3)
	$core.innerHTML=fullScore
	anyWin$.tfe[0].innerHTML="GaMe"
				anyWin$.tfe[1].innerHTML="GaMe"
					anyWin$.tfe[2].innerHTML="GaMe"
	window.$choice=function(){return false;}
	window.win=function(){return false;}
	window.compTurn=function(){return false;}
	localStorage.setItem("winner", "winner")

}else if(//ARE THE SPOTS FILLED????????
	anyWin$.tsn[0].innerHTML.length>0 && anyWin$.tsn[1].innerHTML.length>0  &&
	anyWin$.tsn[2].innerHTML.length>0 &&
	//ARE THEY OF THE SAME VALUE?????
	anyWin$.tsn[0].innerHTML==="X" && anyWin$.tsn[1].innerHTML==="X" &&
	anyWin$.tsn[2].innerHTML==="X" 
	|| 
	anyWin$.tsn[0].innerHTML==="O" && anyWin$.tsn[1].innerHTML==="O" &&
	anyWin$.tsn[2].innerHTML==="O"){
		
	localStorage.setItem("whoWon?", anyWin$.tsn[0].innerHTML)
	
	if(localStorage.getItem("whoWon?")===ccpt){
		++$round;
	++$c0r3;ccpt==="X"?other="O":other="X";
	}else{ccpt==="X"?other="O":other="X";++cpscore;++$round;localStorage.setItem(`compScore`, cpscore)}
	 cpscore = localStorage.getItem(`compScore`)
	 fullScore =`<b style='color:azure;-webkit-text-stroke:.5px red;'>${$c0r3}-${cpscore}</b>`
	localStorage.setItem("score", fullScore)
	localStorage.setItem("round", $round)
	localStorage.setItem("clientScore", $c0r3)
	$core.innerHTML=fullScore
	anyWin$.tsn[0].innerHTML="GaMe"
				anyWin$.tsn[1].innerHTML="GaMe"
					anyWin$.tsn[2].innerHTML="GaMe"
	window.$choice=function(){return false;}
	window.compTurn=function(){return false;}
	window.win=function(){return false;}
	localStorage.setItem("winner", "winner")

}
winz()

	}

	 //DOUBLE CHECKING FOR STALE MATES
							function winz(){
	if(spots){
	for(let x=1;x<10;x++){

		if(spots[x].innerHTML.length>0){fully.push(1); console.log(`this is fully....${fully}...and its length is ...${fully.length}`)}
		 if(fully.length===9 && !localStorage.getItem("winner")){
			r3$tart_()
			fully=[]
			localStorage.removeItem("winner")
			window.$choice=function(){return false;}
			window.compTurn=function(){return false;}
			confirm("no more spots bro.....lets start over")

			break;
		}
	}
	setTimeout(function(){
		fully.length!=9?fully=[]:true;
	},1000)
}

}//DOUBLE CHECKING FOR STALE MATES
									




//WHEN THE PLAYER MAKES A CHOICE---------------------------------------------------
let bbb = 0;
const $choice=(who,x)=>{
console.log(who);
if(who==="Player" && bbb===0){//checking to see if its the player turn......
		++bbb
	if(x.innerHTML.length<1){
			x.innerHTML = ccpt
			ca$e()
			setTimeout('compTurn()',1500)	
}else{
	confirm("choose another spot")
}
         
		}else if(who==="computer"){// checking to see if computer is requesting a turn
	setTimeout('compTurn()',1500)

}else{
		console.log("somethings goin on....")
		window.$choice=function(){return false;}
		return false;

	}

}




function compTurn(q){//COMPUTER IS MAKING HIS DECISION.......
			
									

						console.log(compPicks)
						//checkking to see if the spots taken..............
						let finding=()=>{
						for(let f=0;f<9;f++){
							
						
				if(compPicks.innerHTML.length<1){cm(ccpt);break;}else{
							exact = Math.floor(Math.random()*compChoices.length);console.log(`exact pc choice spot is ${exact}`)
							compPicks = compChoices[exact]
								finding();break;
									}
								
							
								}
							}
							finding()
}

/*================================================================================
==================================================================================
----------------------------^^^^^^^^^THE GAME^^^^^^^^^----------------------------
==================================================================================
==================================================================================*/
//RESTART THE GAME
function r3$tart_(){
		location.reload()
}
//clear game
function cl(){
	localStorage.clear()
		location.reload()

}
//EXTRA STYLES--------------------------------------------------------
		if(screen>500){
				for(let i=1;i<10;i++){
					spots[i].setAttribute("onclick", "$choice('Player',this)")
					spots[i].style="cursor:pointer;color:azure;-webkit-text-fill-color:azure;border:solid azure;"+
					"background-image:url('clip.jpeg');background-size:cover;-webkit-background-size:cover;"+
					"font-size:3rem;align-items:center;justify-content:center;-webkit-justify-content:center;display:flex;"
						}
		}else{

			for(let i=1;i<10;i++){
					spots[i].setAttribute("onclick", "$choice('Player',this)")
					spots[i].style="cursor:pointer;color:azure;-webkit-text-fill-color:azure;border:solid azure;"+
					"background-image:url('clip.jpeg');background-size:cover;-webkit-background-size:cover;"+
					"font-size:1.8rem;align-items:center;justify-content:center;-webkit-justify-content:center;display:flex;"
						}
		}

	az[0].style="color:lightseagreen;-webkit-text-stroke:.3px #000;"
	az[1].style="color:lightseagreen;-webkit-text-stroke:.3px #000;"
	az[2].style="color:lightseagreen;-webkit-text-stroke:.3px #000;"
	
//--------------------------------------------------------------------