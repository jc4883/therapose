# README

Therapose is a last resort solution to prevent the worst scenario of failing mental health. When a student needs immediate mental health attention, she can choose one of a few broad categories, and be matched appropriately to a professional. My hope for this project was to provide a last case prevention for the loss of young adults who I interact with everyday, and those I don't. This project won J.P. Morgan's "Best Hack for Social Good" challenge at WHACK 2019.

## Inspiration

Mental health is a serious issue at my university. In 2017, Columbia University saw 7 deaths in its undergraduate body. According to Alice Hu from the Columbia Spectator, from 2007 to 2017, "Columbia had an undergraduate suicide rate of 11 students out of every 100,000 compared to a national average of 6.6 to 7.5." In my personal experience, the death of an acquaintance in my year in 2018 affected me at an alarming level. Ever since then, I've wanted to build technology that has social impact, especially in helping those facing depression and mental health struggles.

## Features

### Authentication

Therapose stores user information securely and remembering user login sessions, resulting in a seamless authentication experience. Here is what logging in looks like:

[gif of authentication]

Storing user authentication information was done by storing password digests rather than the passwords themselves. I used the rails BCrypt gem to hash the password as follows: 

```Ruby
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
```

One thing to note is that although the user's actual password is stored in `@password` temporarily, the variable goes out of scope once the request cycle is finished and the controller is destroyed. 
    
### Therapist Filtering

Therapose also allows patients to filter therapists by their expertise by using a dropdown menu, enabling patients to get the right kind of help easily.

[gif of therapist filtering]


Clicking a category in the dropdown triggers a custom fetch therapists API as follows:

```JavaScript
    export const fetchTherapists = (region, category) => {
      return dispatch => {
        return API_Therapist_Util.fetchTherapists(region, category).then(therapists => {
          return dispatch(receiveTherapists(therapists));
        })
      }
    }
```
The custom API calls a `receiveTherapist` utility function which sends an ajax request to Rails' RESTful routes, which initiates a controller in the backend to find the correct therapist information that the user is looking for.

### Video Chat

Therapose leverages ActionCables and WebRTC API to stream data between local and remote video channels, resulting in a stable video chat where the therapist and patient can communicate calmly.

[gif of video chat]

This was done by creating WebRTC's RTCPeerConnection. The peer connection is created in the createPC function as follows:

```JavaScript
  createPC(userId, offerBool){
    const pc = new RTCPeerConnection(ice);
    ...
    pc.createOffer().then(offer => {
        pc.setLocalDescription(offer).then(() => {
            setTimeout( ()=>{
                broadcastData({
                    type: EXCHANGE,
                    from: this.userId,
                    to: userId,
                    sdp: JSON.stringify(pc.localDescription),
                })

            }, 0);
        })
    })
    ...
  }
```

## In Conclusion

Thanks for checking out Therapose! I had a lot of fun building out this project because mental health is an issue I've always cared about, even beyond its implications with technological solutions. Let me know if you have ideas for the future of Therapose.

To see more of my projects, checkout my [portfolio](https://jc4883.github.io/), and make sure to look around my [Github](https://github.com/jc4883) as well.

Finally, go to my [LinkedIn](https://www.linkedin.com/in/peterchoi24/) to learn more about me.
    

