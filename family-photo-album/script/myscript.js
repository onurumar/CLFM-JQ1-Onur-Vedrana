

var familyAndFriends = JSON.parse(ffdata);
console.log(familyAndFriends);


$(document).ready(function() {
    for (var i = 0; i < familyAndFriends.length; i++) {
        
        var person = $(`
		<div class="person">
            <img src="${familyAndFriends[i].image}" alt="Team Member">
            <p>${familyAndFriends[i].name}</p>
            <div class="overlay">
                <div id="info" class="overlay_text">
                    <p>${familyAndFriends[i].relation}</p>
                    <p>${familyAndFriends[i].email}</p>
                    <p class="small">tel: ${familyAndFriends[i].tel}</p>
                </div>
            </div>
        </div>
	`);
   
    $("div#friends-family").append(person);
    
        var borderStyle = "";
        if (familyAndFriends[i].relation == "sister") {
            //borderStyle = "1px solid blue";
            $(`div.person:eq(${i})`).addClass("sister")
        } else if (familyAndFriends[i].relation == "friend") {
            //borderStyle = "1px solid red";
            $(`div.person:eq(${i})`).addClass("friend")
        } else if (familyAndFriends[i].relation == "cousine") {
            //borderStyle = "1px solid yellow"
            $(`div.person:eq(${i})`).addClass("cousine")
        }

    }

});
