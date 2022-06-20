const github = new GitHub;
const ui= new UI1;
//select the textfield element by getElementById
const searchUser = document.getElementById('searchUser')
//add event listeners of keydown events
searchUser.addEventListener('keyup', (e) => {
    //get the value of the textfield 
    const userText = e.target.value;
    //check if the input is not empty
    if (userText !== ''){
        //search User with github.getUser method
        github.getUser(userText).then((data) =>{
            if (data.profile.message === 'Not Found'){//if the user is not found
                ui.showAlert('User Not Found','alert alert-danger');
            }else {//user is found
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }})
    }else{//if the input is empty
       ui.clearProfile()
    }
    e.preventDefault();
}
)