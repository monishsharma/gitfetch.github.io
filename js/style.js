//activating modal box
$(document).ready( () => {

	var modal = $('#myModal');

	$('#myBtn').on("click",() => {
		$('#myModal').fadeIn("slow");
	});
	$('span').on("click",() => {
		$('#myModal').fadeOut("slow");
	});
	
});

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// second modal
$(document).ready(() => {

	var main = $('#main');

	$('#searchBtn').on("click",() => {
		$('#main').fadeIn("slow");
	});
	$('#viewMore').on("click", () => {
		$('#main').fadeOut("slow");
	});
	window.onclick = (event) => {
    if (event.target == main) {
        main.style.display = "none";
    }
}

})

//fetching data fron github api
const inputValue = document.querySelector("#searchUser");
const searchButton = document.querySelector("#searchBtn");
const nameContainer = document.querySelector("#name");
const avtarImg = document.querySelector("#avtar");
const bio = document.querySelector("#status");
let imageUrl;

const client_id = "Iv1.89d9d96490e6dd71";
const client_secret = "862be6a5c82e05c5d0604e5f03d271b0c67db31b";


const fetchUsers = async (user) => {
	const api_call = await fetch(`http://api.github.com/users/${user}?client_id = ${client_id} & client_secret = ${client_secret} `);
	const data = await api_call.json();
	console.log(data);
	return {data}
	
};

const showData = () => {

	fetchUsers(inputValue.value).then((res) => {
	 

		nameContainer.innerHTML = ` <strong>Name</strong> :<br> <span>${res.data.name}</span>`;
		bio.innerHTML = ` <strong>Bio</strong> : <br><br> <span>${res.data.bio}</span>`;
		imageUrl = res.data.avatar_url;
		document.getElementById('avtar').setAttribute('src',imageUrl);

		
	})
}


searchButton.addEventListener("click",() => {
	showData();
});