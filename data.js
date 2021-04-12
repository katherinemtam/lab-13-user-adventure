import { getUser } from './utils/local-storage-utils.js';
const user = getUser();

const museum = {
    id: 'museum',
    title: 'Night in the Museum',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'museum.jpg',
    description: `
        Signs suggest that tonight there will be a meteor shower! You enter the museum and see three birds: Blathers (Museum’s Director), Celeste (Stargazing Aficionado), and Brewster (Barista, Coffee Connoisseur). They welcome you and look at you with anticipation. Who did you come here to meet?
    `,
    choices: [{
        id: 'donate',
        description: 'Make a donation to Blathers.',
        quote: `
            Blathers: "Hoo-HOO! Let us take a look, shall we? Splendid! We will gladly take these off your hands!"
        `,
        result: `
            You give the fossils you dug up on the island to Blathers to assess. It’s something new that the museum doesn’t have. You donate the fossils and Blathers puts it into the dinosaur collection. Blathers comes out to thank you when all of a sudden, you hear a loud noise coming from the room Blathers just came out from. The dinosaur has come to life and wreaks havoc! You try to run away, but the dinosaur gets you! You lose 100 hp. (Whoops! Wrong franchise…) 
        `,
        hp: -100,
        bells: 0
    }, {
        id: 'wish',
        description: 'Wish upon a shooting star with Celeste.',
        quote: `
            Celeste: “Hootie-toot and a very good evening to you! Have you ever heard that a wish upon a falling star will bring you good fortune? The stars above, falling all the way to earth just to hear our wishes…Isn’t that a lovely, romantic idea?”
        `,
        result: `
            You spot a shooting star and make a wish. When you wake up the next day, you find a star fragment washed up on the shore. You go to Nook’s Cranny and sell the star fragment for 250 bells.
        `,
        hp: 0,
        bells: 250
    }, {
        id: 'coffee',
        description: 'Grab a cup of coffee from Brewster.',
        quote: `
            Brewster: “All right then, before it gets cold... One fresh brewed cup... Enjoy.”
        `,
        result: `
            You give 200 bells to Brewster in exchange for the coffee. It’s piping hot! You consider letting it cool but Brewster insists you drink it at exactly 176.36 degrees…You take a sip and feel a burst of energy!
        `,
        hp: 20,
        bells: -200
    }]
};

const residentialServices = {
    id: 'residentialServices',
    title: 'Residential Services',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'residential-services.jpg',
    description: `
        You're at the main hub for the island's development! This is where you can find Tom Nook and Isabelle. Head of Nook Incorporated, Tom Nook oversees all the development on the island. From building bridges to upgrading your house, you need to go through him. Talk to Isabelle about the reputation and image of your island. She'll try to turn your frown upside down and help with any residents that might be troublesome. Since ${user.island} has risen in popularity, people are visiting from all over the world, especially K.K. Slider. K.K. Slider is a traveling musician who is enamored with the island and visits every Saturday to perform at the Town Plaza. What do you do?
    `,
    choices: [{
        id: 'tomNook',
        description: 'Plan some island development with Tom Nook.',
        quote: `
            Tom Nook: “I'm quite glad that I'll be sharing this desolate island with such a hard worker, oho! We don't do things because they are easy hm? We do them because they are profitable. With that said, upgrading your house will bring your grand total to the modest sum of 49,800 bells.”
        `,
        result: `
            You don't know how you feel about Tom Nook, but it seems like you have to go through him to get any construction done. You give him 49,800 bells to upgrade your tent to a little house for comfortable living. Luckily this is a game, cause you really don't have that type of money.
        `,
        hp: 0,
        bells: -49800
    }, {
        id: 'isabelle',
        description: 'Recieve residential support from Isabelle.',
        quote: `
            Isabelle: “I've found that my cheery disposition can be quite intimadting in certain contexts. Please don't hesitate to let me know if I can help you with something!”
        `,
        result: `
            You ask Isabelle about the image of the island. She describes the process about the "5-star rating system": She conducts random polling around the island with residents, visitors, and tourists. The better the balance of natural beauty, development, and decor, the more stars the island receives. As it stands, we currently have 1 star rating. Seems like we need to invest more energy into the island. Guess that means we need more residents and buildings, proper infrastructure, and a well-decroated natural setting. You lose 30 HP just thinking about all the work that needs to be done.
        `,
        hp: -30,
        bells: 0
    }, {
        id: 'slider',
        description: 'Listen to K.K Slider at the Town Plaza.',
        quote: `
            K.K. Slider: “Hey there, cool cats and kittens. The name's K.K. Slider. Live jams make for a real keen scene. Nothing beats a whole crowd getting down together. Oh, they're telling me I've gotta fill a little more time...Want me to jam for you?”
        `,
        result: `
            Before K.K. Slider performs, he gives everyone in the audience a copy of one of his secret songs! These are rare. It's worth 3,299 bells. His laid-back, relaxed vibes help you feel mellow and calm. You gain 50 HP You are entranced by his music and look up his discography on your NookPhone. You see that he has an alter ego, DJ K.K. You can't imagine him being outgoing and active, becoming a so-called "life of the party".
        `,
        hp: 30,
        bells: 3200
    }]
};

const airline = {
    id: 'airline',
    title: 'Dodo Airlines',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: 'airline.jpg',
    description: `
        Orville: “Hey hey hey! Welcome to your one and only gateway to the skies, ${user.island} Airport. Let me call Wilbur: Dodo One, this is Dodo Tower. Wilbur, you copy? Got a walker who needs wings, over.” 
        Wilbur: “Roger! Ready when you are!” 
        Orville: “So...just to get the paperwork all official, where didja want to go?”
    `,
    choices: [{
        id: 'harv',
        description: "Visit Photopia at Harv's Island.",
        quote: `
            Orville: “Almond jelly static! Looks like we got a whole lotta radio chatter goin' on over yonder...” 
            Harvey: “...Hey! I hear you. We're still groovy, and the anniversary shoot's gonna happen. Hmmm...Well, OK, but...what'll we do about the lovely sets? Prepping them ourselves could get a bit ticklish...Hey there. You got good timing, you know that? Can I, like, borrow you for a minute? OK, so this here is Reese...and her main squeeze, Cyrus. They're married and in love, um...a whole bunch. Far out, right? Anyway, they wanna get some anniversary photos made. Fancy ones. With sets and stuff. Long story, uh...long, I need someone to move stuff around so it looks wedding-y, then snap some photos. So, think I could ask you to be taht someone? You'd really be helping this shutterdog out.”
        `,
        result: `
            It's Wedding Season! You agree to help out with the special wedding themed photo shoot featuring Reese and Cyrus. You walk into Photopia and move things around here and there on set to make things look wedding-y. You snap a few photos and show Cyrus and Reese. They love it! You've somehow captures all the joy and love that Cyrus and Reese share in one amazing photo. As a way of showing their appreciation, they have a little something for you: some wedding decorations. It's worth 250 bells. It's been a long day; you lose 50 HP, but at least you worked out your muscles moving things around!
        `,
        hp: -50,
        bells: 250
    }, {
        id: 'mysteryIsland',
        description: 'Use a Nook Miles Ticket to explore a mystery Island.',
        quote: `
            Orville: “First time getting your pontoons wet on tour? Let me brief you on mystery island procedure. First, we run the "finders keepers" protocol here. Lumber, fruit, fish, whatever? Yours if you can carry it. Also, there's one redline item you need to memorize like your favorite latte order...Anything you leave behing stays here. We dont't come back to these places. Ever. I actually burn the flight plans afterward. Security reasons. Can't explain more than that. Think that's everything. Go explore. If you get into trouble, ask yourself, "What would dodos do?" Go catch some bees and chop some trees!”
        `,
        result: `
            You eagerly explore the new island! You shake the palm trees for your their fruit. You cut down the oak trees for their wood. You throw your line into the waters to catch some fish. You hit the rocks for material. Before you know it, it's nightfall. New bugs appear, especially the creepy crawlies...As you head back to the plane with all your goods, a tarantula is threatened by your presence. It chases you around the island but you run into a dead end! The tarantula catches up to you and bites you. You have fainted and lost all your items.
        `,
        hp: -100,
        bells: 0
    }, {
        id: 'letter',
        description: 'Send a letter to a friend.',
        quote: `
            Orville: “Oh, hey, ${user.name}! Before you can use the service, though, the legal eagles say I gotta show you the fine print. Would you read through this for me so I don't get in trboule?”
        `,
        result: `
            You skimmed the fine print...it says something about if your mail gets lost, it's lost forever and it's not their problem. You agree to the terms and decide which friend to send a letter to. You realize since you're new to the island, you have no friends. Bummer! You decide to send a letter to yourself...I guess it's time to make friends, ${user.name}. You give Orville 200 bells to send your letter...to yourself.
        `,
        hp: 0,
        bells: -200
    }]
};

const quests = [
    museum,
    residentialServices,
    airline,
];

export default quests;