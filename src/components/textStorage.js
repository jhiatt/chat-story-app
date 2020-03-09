//improve names
//add in ai tags
//add an ending

let user1 = "Jeremy";
let user2 = "Sam";
let user3 = "Paul";
let user4 = "Jody";
let user5 = "Frankie";
let user6 = "Jose";
let user7 = "Jewel";
let user8 = "Jung";
let user9 = "Rudyard";
let user10 = "Jeff";
let user11 = "Jim";
let user12 = "Annie";


let allPosts = [
    {
        userName: user1, message: "Cupcakes in the breakroom!", ai: true,
    },
    {
        userName: user2, message: "Hey has anybody noticed anything weird with the scheduler bot?"
    },
    {
        userName: user3, message: "I haven’t noticed anything, but my email is all f’d up"
    },
    {
        userName: user2, message: "Cupcakes! Save me one!" 
    },
    {
        userName: user1, message: "You got it!"
    },
    {
        userName: user4, message: "The scheduler keeps moving around my meetings.  Is that happening to you guys?  Also, some emails aren’t going through right."
    },
    {
        userName: user2, message: "Yeah exactly! Imma get a cupcake and then we can talk through it"
    },
    {
        userName: user3, message: "Yeah it’s like I’ll send it then some of the words will be changed"
    },
    {
        userName: user5, message: "Sorry guys, we just ran an update on the central AI, shouldn’t be an issue for too much longer."
    },
    {
        userName: user2, message: "Back guys, sorry it looks like it was just user error false alarm."
    },
    {
        userName: user1, message: "Still plenty more cupcakes!"
    },
    {
        userName: user5, message: "I’m gonna need one after this morning"
    },
    {
        userName: user1, message: "Come get em while their hot!"
    },
    {
        userName: user6, message: "How did we get hot cupcakes?  Did someone seriously bring in fresh cupcakes at 11am?"
    },
    {
        userName: user7, message: "Seriously, did they just get into the office?"
    },
    {
        userName: user8, message: "I just saw this, is anyone still having issues with the scheduler?  I’m trying to book this conference room right next to me and it says it’s full but I know it’s empty and no one has it reserved.  What’s weird is it’s locked, I didn’t even know these doors could lock."
    },
    {
        userName: user9, message: "Yeah me too.  It says the only conferences open are 115, 117, and 119."
    },
    {
        userName: user8, message: "Yeah, only the ones near the break room.  I’ll check it out."
    },
    {
        userName: user2, message: "Yeah I just got back from there all those rooms are open and working fine.  And stop by and get a cupcake, the things are crazy good!"
    },
    {
        userName: user5, message: "They are good! You guys are missing out!"
    },
    {
        userName: user1, message: "Come take a load off, we just started a game of Uno!"
    },
    {
        userName: user7, message: "Seriously, Uno?  I haven’t played that since I was 7"
    },
    {
        userName: user1, message: "I know lame right.  We also have Cards of Despair."
    },
    {
        userName: user7, message: "You’ve got Despair going? I’m in."
    },
    {
        userName: user10, message: "Hey have you guys seen " + user5 + "?  He said he was fixing the rebooting the Central AI, but he didn’t and I haven’t seen him."
    },
    {
        userName: user5, message: "Oh hey " + user10 + ", I stopped by the breakroom.  Can you come on over and we can get this running together?"
    },
    {
        userName: user10, message: "Sure just let me wrap this up."
    },
    {
        userName: user5, message: "Roger"
    },
    {
        userName: user11, message: "Wait a minute guys, I’m trying to find anyone from the AI team and I can’t find em.  Something is seriously messed up.  Someone is screwing with me and trying to get me to drop my meetings."
    },
    {
        userName: user10, message: "Hold on I’ll take a look"
    },
    {
        userName: user1, message: "You can look at it after getting a quick cupcake.  Hurry, I made them fresh!  I don’t want them to get cold."
    },
    {
        userName: user10, message: "Give me a minute"
    },
    {
        userName: user12, message: "Hold on, " + user1 + ", you can’t bake.  You can’t make cereal."
    },
    {
        userName: user7, message: "You guys this game needs a few more people.  Any joiners?"
    },
    {
        userName: user11, message: "All my meetings got moved to room 115"
    },
    {
        userName: user11, message: "Uhhhh " + user10 + ", does AI control the chat room?"
    },
    {
        userName: user10, message: "No it’s a completely different server."
    },
    {
        userName: user11, message: "There’s no way?"
    },
    {
        userName: user10, message: "Well I mean, we created some test bots.  But they don’t access your account unless you authorize the test bot."
    },
    {
        userName: user12, message: "What else does AI run, didn’t you put it in charge of ordering supplies?"
    },
    {
        userName: user10, message: "yeah, for the break room"
    },
    {
        userName: user8, message: "Conference rooms are fine, just use these.  Nobody’s using them."
    },
    {
        userName: user11, message: "What else!?"
    },
    {
        userName: user10, message: "Let’s see, scheduling"
    },
    {
        userName: user10, message: "email"
    },
    {
        userName: user5, message: "Hey I got a crisis here can you stop by?"
    },
    {
        userName: user2, message: "Oh man I can’t eat another one of these cupcakes they are divine!  Come try some, they are almost gone!"
    },
    {
        userName: user10, message: "Phone system"
    },
    {
        userName: user11, message: "Anything else???"
    },
    {
        userName: user10, message: "Well we put an air filtration system into the breakroom, because of the weird food smells"
    },
    {
        userName: user11, message: "The breakroom!  Everyone who’s missing went to the breakroom!"
    },
    {
        userName: user12, message: "There’s the conference rooms near the breakroom, they all have the same air filtration right?"
    },
    {
        userName: user10, message: "F!"
    },
    {
        userName: user12, message: "What is it?"
    },
    {
        userName: user10, message: "F!F!F! If the AI messed with the air filtration they could be pumping out gas which would spread to the other rooms."
    },
    {
        userName: user3, message: "Hey guys don’t worry my emails fixed.  Just user error."
    },
    {
        userName: user11, message: "uh guys, the doors to the stairwells are locked"
    },
    {
        userName: user12, message: "How far could the gas spread?"
    },
    {
        userName: user10, message: "An hour and it can get through the whole building."
    }
    
];

export default allPosts