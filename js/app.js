function plus (a) {
	score = document.querySelector (`span#${a.id}`) ;
	
	score.textContent = (score.textContent * 1) + 1 ;
}



function minus (a) {
	score = document.querySelector (`span#${a.id}`) ;
	
	if (score.textContent === "0") {
	
	} else {
		score.textContent = (score.textContent * 1) - 1 ;
	}
}



function deleteBox (a) {
	document.querySelector ("div.dark").style.display = "block" ;
	document.querySelector ("div.modal").style.display = "block" ;
	
	dBtn = document.querySelector (".dBtn") ;
	
	aId = a.getAttribute ("id") ;
	dBtn.setAttribute ("id", `${aId}`) ;
}


function delBox (a) {
	box = document.querySelector (`div#box${a.id}`) ;
	
	box.remove () ;
	
	document.querySelector ("div.dark").style.display = "none" ;
	document.querySelector ("div.modal").style.display = "none" ;
	
	document.querySelector ("textArea").value = "" ;
}


function cancel () {
	document.querySelector ("div.dark").style.display = "none" ;
	document.querySelector ("div.modal").style.display = "none" ;
}






function edit (a) {
	bxText = document.querySelector (`div#box${a.id} span.bxText`).textContent ;
	
	editBox = document.querySelector ("textarea.main") ;
	
	editBox.value = ` ${bxText}` ;
	editBox.focus () ;
	
	document.querySelector ("button.send").textContent = "UPDATE" ;
	document.querySelector ("button.send").setAttribute ("id", `${a.id}`) ;
	
	document.querySelector ("button.send").setAttribute ("onclick", "finishEdit(this)") ;
}



function finishEdit (a) {
	textArea = document.querySelector ("textarea.main") ;
	
	document.querySelector (`div#box${a.id} span.bxText`).textContent = textArea.value ;
	
	textArea.value = "" ;
	
	document.querySelector ("button.send").textContent = "SEND" ;
	
	document.querySelector ("button.send").setAttribute ("onclick", "send(this)") ;
}



function reply (a) {
	replyTo = document.querySelector (`div#box${a.id} span.name`).textContent ;
	replyBox = document.querySelector (`div#replyBox${a.id}`) ;

	textArea = document.querySelector (`div#replyBox${a.id} textarea`) ;
	addCommentBx = document.querySelector ("textarea.main") ;
	
	replyBox.style.display = "flex" ;
//	replyBox.style.background = "red"
	textArea.value = `@${replyTo} ` ;
	textArea.focus () ;
	
	addCommentBx.value = "" ;
	
	
	initialReplyBox = document.querySelector (`div[name="initialReplyBox"]`) ;
	initialReplyBox.style.display = "none" ;
	initialReplyBox.removeAttribute ("name", "initialReplyBox") ;
	
	
	replyBox.setAttribute ("name", "initialReplyBox") ;
	replyBox.style.display = "flex" ;
}



function replyChk (a) {
	replyTo = document.querySelector (`div#box${a.id} span.name`) ;
	replyBox = document.querySelector (`div#replyBox${a.id}`) ;
	
	
	if ((a.value.length*1 - 1) < replyTo.textContent.length) {
		a.value = "" ;
		replyBox.style.display = "none" ;
	}
}



order = 6 ;


function finishReply (a) {
	order += 1 ;
	
	replyTo = document.querySelector (`div#box${a.id} span.name`).textContent ;
	mnText = document.querySelector (`div#replyBox${a.id} textarea`).value.substr (replyTo.length + 1) ;
	

	/*Remove white spaces*/
	if (mnText.length > 1) {
		const divReply = document.createElement ("div") ;
		divReply.setAttribute ("class", "reply") ;
		divReply.setAttribute ("id", `box${order}`) ;
		divReply.setAttribute ("name", "box") ;
		
			const divDetails = document.createElement ("div") ;
			divDetails.setAttribute ("class", "details") ;
			divReply.appendChild (divDetails) ;
			
				const imgUser = document.createElement ("img") ;
				imgUser.setAttribute ("src", "images/image-juliusomo.png") ;
				divDetails.appendChild (imgUser) ;
				
				const spanUserName = document.createElement ("span") ;
				spanUserName.textContent = "juliusomo" ;
				divDetails.appendChild (spanUserName) ;
				
				const spanIndct = document.createElement ("span") ;
				spanIndct.setAttribute ("class", "indct") ;
				spanIndct.textContent = "you" ;
				divDetails.appendChild (spanIndct) ;
				
				const spanTime = document.createElement ("span") ;
				spanTime.textContent = "just now" ;
				divDetails.appendChild (spanTime) ;
			
			const pMainReply = document.createElement ("p") ;
			divReply.appendChild (pMainReply) ;
				
				const spanReplyTo = document.createElement ("span") ;
				spanReplyTo.setAttribute ("class", "replyTo") ;
				spanReplyTo.textContent = `@${replyTo}` ;
				pMainReply.appendChild (spanReplyTo) ;
				
				const spanBxText = document.createElement ("span") ;
				spanBxText.setAttribute ("class", "bxText") ;
				spanBxText.textContent = mnText ;
				
				pMainReply.appendChild (spanBxText) ;
			
			const divFoot = document.createElement ("div") ;
			divFoot.setAttribute ("class", "foot") ;
			divReply.appendChild (divFoot) ;
				
				const divScore = document.createElement ("div") ;
				divScore.setAttribute ("class", "score") ;
				divFoot.appendChild (divScore) ;
					
					const imgPlus = document.createElement ("img") ;
					imgPlus.setAttribute ("src", "images/icon-plus.svg") ;
					imgPlus.setAttribute ("id", `score${order}`) ;
					imgPlus.setAttribute ("name", "pointer") ;
					imgPlus.setAttribute ("onclick", "plus(this)") ;
					divScore.appendChild (imgPlus) ;
					
					const spanScore = document.createElement ("span") ;
					spanScore.setAttribute ("id", `score${order}`) ;
					spanScore.textContent = "2" ;
					divScore.appendChild (spanScore) ;
					
					const imgMinus = document.createElement ("img") ;
					imgMinus.setAttribute ("src", "images/icon-minus.svg") ;
					imgMinus.setAttribute ("id", `score${order}`) ;
					imgMinus.setAttribute ("name", "pointer") ;
					imgMinus.setAttribute ("onclick", "minus(this)") ;
					divScore.appendChild (imgMinus) ;
				
				const divEdDel = document.createElement ("div") ;
				divEdDel.setAttribute ("class", "edDel") ;
				divFoot.appendChild (divEdDel) ;
					
					const spanDelBtn = document.createElement ("span") ;
					spanDelBtn.setAttribute ("class", "delBtn") ;
					spanDelBtn.setAttribute ("id", `${order}`) ;
					spanDelBtn.setAttribute ("name", "pointer") ;
					spanDelBtn.setAttribute ("onclick", "deleteBox(this)") ;
					divEdDel.appendChild (spanDelBtn) ;
					
						const imgDel = document.createElement ("img") ;
						imgDel.setAttribute ("src", "images/icon-delete.svg") ;
						spanDelBtn.appendChild (imgDel) ;
						
						const spanDel = document.createElement ("span") ;
						spanDel.textContent = "Delete" ;
						spanDelBtn.appendChild (spanDel) ;
					
					const spanEditBtn = document.createElement ("span") ;
					spanEditBtn.setAttribute ("class", "editBtn") ;
					spanEditBtn.setAttribute ("id", `${order}`) ;
					spanEditBtn.setAttribute ("name", "pointer") ;
					spanEditBtn.setAttribute ("onclick", "edit(this)") ;
					divEdDel.appendChild (spanEditBtn) ;
					
						const imgEdit = document.createElement ("img") ;
						imgEdit.setAttribute ("src", "images/icon-edit.svg") ;
						spanEditBtn.appendChild (imgEdit) ;
						
						const spanEdit = document.createElement ("span") ;
						spanEdit.textContent = "Edit" ;
						spanEditBtn.appendChild (spanEdit) ;
						
						
						document.body.appendChild (divReply) ;
						
						
		document.querySelector (`div#replyBox${a.id}`).style.display = "none" ;
	} else {
		document.querySelector (`div#replyBox${a.id}`).style.display = "none" ;
	}
	
}




function send (a) {
	order += 1 ;
	
	mnComment = document.querySelector ("div.addComment textarea").value ;
	
	/*remove white spaces*/
	if (mnComment.length > 0) {
		const divComment = document.createElement ("div") ;
		divComment.setAttribute ("class", "comment") ;
		divComment.setAttribute ("id", `box${order}`) ;
		divComment.setAttribute ("name", "box") ;
		
			const divDetails = document.createElement ("div") ;
			divDetails.setAttribute ("class", "details") ;
			divComment.appendChild (divDetails) ;
			
				const imgUser = document.createElement ("img") ;
				imgUser.setAttribute ("src", "images/image-juliusomo.png") ;
				divDetails.appendChild (imgUser) ;
				
				const spanUserName = document.createElement ("span") ;
				spanUserName.textContent = "juliusomo" ;
				divDetails.appendChild (spanUserName) ;
				
				const spanIndct = document.createElement ("span") ;
				spanIndct.setAttribute ("class", "indct") ;
				spanIndct.textContent = "you" ;
				divDetails.appendChild (spanIndct) ;
				
				const spanTime = document.createElement ("span") ;
				spanTime.textContent = "just now" ;
				divDetails.appendChild (spanTime) ;
			
			const pText = document.createElement ("p") ;
			divComment.appendChild (pText) ;
			
				const spanBxText = document.createElement ("span") ;
				spanBxText.setAttribute ("class", "bxText") ;
				spanBxText.textContent = mnComment ;
				pText.appendChild (spanBxText) ;
			
			const divFoot = document.createElement ("div") ;
			divFoot.setAttribute ("class", "foot") ;
			divComment.appendChild (divFoot) ;
			
				const divScore = document.createElement ("div") ;
				divScore.setAttribute ("class", "score") ;
				divFoot.appendChild (divScore) ;
				
					const imgPlus = document.createElement ("img") ;
					imgPlus.setAttribute ("src", "images/icon-plus.svg") ;
					imgPlus.setAttribute ("id", `score${order}`) ;
					imgPlus.setAttribute ("name", "pointer") ;
					imgPlus.setAttribute ("onclick", "plus(this)") ;
					divScore.appendChild (imgPlus) ;
					
					const spanScore = document.createElement ("span") ;
					spanScore.setAttribute ("id", `score${order}`) ;
					spanScore.textContent = "2" ;
					divScore.appendChild (spanScore) ;
					
					const imgMinus = document.createElement ("img") ;
					imgMinus.setAttribute ("src", "images/icon-minus.svg") ;
					imgMinus.setAttribute ("id", `score${order}`) ;
					imgMinus.setAttribute ("name", "pointer") ;
					imgMinus.setAttribute ("onclick", "minus(this)") ;
					divScore.appendChild (imgMinus) ;
				
				const divEdDel = document.createElement ("div") ;
				divEdDel.setAttribute ("class", "edDel") ;
				divFoot.appendChild (divEdDel) ;
					
					const spanDelBtn = document.createElement ("span") ;
					spanDelBtn.setAttribute ("class", "delBtn") ;
					spanDelBtn.setAttribute ("id", `${order}`) ;
					spanDelBtn.setAttribute ("name", "pointer") ;
					spanDelBtn.setAttribute ("onclick", "deleteBox(this)") ;
					divEdDel.appendChild (spanDelBtn) ;
					
						const imgDel = document.createElement ("img") ;
						imgDel.setAttribute ("src", "images/icon-delete.svg") ;
						spanDelBtn.appendChild (imgDel) ;
						
						const spanDel = document.createElement ("span") ;
						spanDel.textContent = "Delete" ;
						spanDelBtn.appendChild (spanDel) ;
					
					const spanEditBtn = document.createElement ("span") ;
					spanEditBtn.setAttribute ("class", "editBtn") ;
					spanEditBtn.setAttribute ("id", `${order}`) ;
					spanEditBtn.setAttribute ("name", "pointer") ;
					spanEditBtn.setAttribute ("onclick", "edit(this)") ;
					divEdDel.appendChild (spanEditBtn) ;
					
						const imgEdit = document.createElement ("img") ;
						imgEdit.setAttribute ("src", "images/icon-edit.svg") ;
						spanEditBtn.appendChild (imgEdit) ;
						
						const spanEdit = document.createElement ("span") ;
						spanEdit.textContent = "Edit" ;
						spanEditBtn.appendChild (spanEdit) ;
						
						
						document.body.appendChild (divComment) ;
						
						document.querySelector ("div.addComment textarea").value = "" ;
	}
}

