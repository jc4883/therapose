# README
## Inspiration
    Mental health is a serious issue at my university. In 2017, Columbia University saw 7 deaths in its undergraduate body. According to Alice Hu from the Columbia Spectator, from 2007 to 2017, "Columbia had an undergraduate suicide rate of 11 students out of every 100,000 compared to a national average of 6.6 to 7.5." In my personal experience, the death of an acquaintance in my year in 2018 affected me at an alarming level. Ever since then, I've wanted to dedicate myself to building technology that does social good, especially in helping those facing depression and mental health struggles.
    Therapose is a last resort solution to prevent the worst scenario. When a student needs immediate mental health attention, she can choose one of a few broad categories, and be matched appropriately to a professional. My hope for this project was to provide a last case prevention for the loss of young adults who I interact with everyday, and those I don't. 

## Features
    Therapose features the authentication design pattern by implementing BCrypt to store password digests and session tokens to remember user login, resulting in a seamless first user experience. 
    Therapose also allows patients to filter therapists by their expertise by using a dropdown menu to trigger a custom fetch therapists API, enabling patients to get the right kind of help easily. (gif attached)
    This app leverages ActionCables and WebRTC API to stream data between local and remote video channels, resulting in a stable video chat where the therapist and patient can communicate calmly. (photo attached)
    Finally, the app is capable of CRUD processes for requesting video chats with therapists. Therapists are able receive and view all of their video chat requests from patients. Requests are automatically deleted when the video chat is finished. This was accomplished using redux reducers (code snippet attached).
    
## What's next for Therapose
    In the future, I would like to build a text chat service between the patient and therapist using ActionCable. As of now, patients can request video chats and include a description of their issue to available therapists. Their page is dynamically re-rendered when the therapist accepts. However, a video chat would improve the process of communicating availability and reduce the stress already experienced so much by the patient.
