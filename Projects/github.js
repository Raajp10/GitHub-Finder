class GitHub{
    constructor(){
        //information
        this.client_id = '';
        this.client_secret = ''
        this.repos_count=5;
        //repos in ascending order
        this.repos_sort='created: asc'
    }
    //async function
    async getUser(username){
        //fetch user's details with api first for users and second for repositories
        const profiles =await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoprofiles =await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        //convert details into json
        const profile = await profiles.json();
        const repos =await repoprofiles.json();
        //return it
        return {profile,repos}

    }
 
}