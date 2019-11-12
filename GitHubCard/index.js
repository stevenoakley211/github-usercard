/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// axios.get('https://api.github.com/users/stevenoakley211')nst 
let sample = {
  "login": "stevenoakley211",
  "id": 31029685,
  "node_id": "MDQ6VXNlcjMxMDI5Njg1",
  "avatar_url": "https://avatars2.githubusercontent.com/u/31029685?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/stevenoakley211",
  "html_url": "https://github.com/stevenoakley211",
  "followers_url": "https://api.github.com/users/stevenoakley211/followers",
  "following_url": "https://api.github.com/users/stevenoakley211/following{/other_user}",
  "gists_url": "https://api.github.com/users/stevenoakley211/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/stevenoakley211/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/stevenoakley211/subscriptions",
  "organizations_url": "https://api.github.com/users/stevenoakley211/orgs",
  "repos_url": "https://api.github.com/users/stevenoakley211/repos",
  "events_url": "https://api.github.com/users/stevenoakley211/events{/privacy}",
  "received_events_url": "https://api.github.com/users/stevenoakley211/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "public_repos": 19,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2017-08-15T06:46:18Z",
  "updated_at": "2019-11-06T03:52:12Z"
}


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
const target = document.querySelector('.cards')
function card(pro){
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfoDiv = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const proAddress = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.appendChild(img);  
  card.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(name);
  cardInfoDiv.appendChild(username);
  cardInfoDiv.appendChild(location);
  cardInfoDiv.appendChild(profile);
  profile.appendChild(proAddress);
  cardInfoDiv.appendChild(followers);
  cardInfoDiv.appendChild(following);
  cardInfoDiv.appendChild(bio);

  card.classList.add('card')
  username.classList.add('username')
  name.classList.add('name')

  img.src = pro.avatar_url
  name.textContent = pro.name
  username.textContent = pro.login
  location.textContent = pro.location
  proAddress.textContent = pro.url
  followers.textContent = pro.followers
  following.textContent = pro.following

  
  return card 
}
target.append(card(sample))
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

followersArray.forEach(x => {
  console.log(x)
  axios.get("https://api.github.com/users/"+`${x}`)
    .then(y =>{
      const returnedArray = y.data
      console.log(returnedArray)
      target.appendChild(card(returnedArray))

      
      })
      
  })
 