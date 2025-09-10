const indianCricketTeam = [
    {
        name: "Rohit Sharma",
        role: "Batsman",
        jerseyNumber: 45,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm offbreak",
        image: "https://via.placeholder.com/150?text=Rohit+Sharma"
    },
    {
        name: "Virat Kohli",
        role: "Batsman",
        jerseyNumber: 18,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm medium",
        image: "https://via.placeholder.com/150?text=Virat+Kohli"
    },
    {
        name: "Jasprit Bumrah",
        role: "Bowler",
        jerseyNumber: 93,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm fast",
        image: "https://via.placeholder.com/150?text=Jasprit+Bumrah"
    },
    {
        name: "Ravindra Jadeja",
        role: "All-rounder",
        jerseyNumber: 8,
        battingStyle: "Left-hand bat",
        bowlingStyle: "Left-arm orthodox spin",
        image: "https://via.placeholder.com/150?text=Ravindra+Jadeja"
    },
    {
        name: "KL Rahul",
        role: "Wicketkeeper Batsman",
        jerseyNumber: 1,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm medium",
        image: "https://via.placeholder.com/150?text=KL+Rahul"
    },
    {
        name: "Shubman Gill",
        role: "Batsman",
        jerseyNumber: 77,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm offbreak",
        image: "https://via.placeholder.com/150?text=Shubman+Gill"
    },
    {
        name: "Hardik Pandya",
        role: "All-rounder",
        jerseyNumber: 33,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm medium-fast",
        image: "https://via.placeholder.com/150?text=Hardik+Pandya"
    },
    {
        name: "Mohammed Siraj",
        role: "Bowler",
        jerseyNumber: 73,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm fast",
        image: "https://via.placeholder.com/150?text=Mohammed+Siraj"
    },
    {
        name: "Suryakumar Yadav",
        role: "Batsman",
        jerseyNumber: 63,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm offbreak",
        image: "https://via.placeholder.com/150?text=Suryakumar+Yadav"
    },
    {
        name: "Rishabh Pant",
        role: "Wicketkeeper Batsman",
        jerseyNumber: 17,
        battingStyle: "Left-hand bat",
        bowlingStyle: "Right-arm medium",
        image: "https://via.placeholder.com/150?text=Rishabh+Pant"
    },
    {
        name: "Axar Patel",
        role: "All-rounder",
        jerseyNumber: 50,
        battingStyle: "Left-hand bat",
        bowlingStyle: "Left-arm orthodox spin",
        image: "https://via.placeholder.com/150?text=Axar+Patel"
    },
    {
        name: "Yuzvendra Chahal",
        role: "Bowler",
        jerseyNumber: 3,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm legbreak",
        image: "https://via.placeholder.com/150?text=Yuzvendra+Chahal"
    },
    {
        name: "Bhuvneshwar Kumar",
        role: "Bowler",
        jerseyNumber: 15,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm medium-fast",
        image: "https://via.placeholder.com/150?text=Bhuvneshwar+Kumar"
    },
    {
        name: "Shreyas Iyer",
        role: "Batsman",
        jerseyNumber: 41,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm offbreak",
        image: "https://via.placeholder.com/150?text=Shreyas+Iyer"
    },
    {
        name: "Deepak Hooda",
        role: "All-rounder",
        jerseyNumber: 20,
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm offbreak",
        image: "https://via.placeholder.com/150?text=Deepak+Hooda"
    }
];

let nav=document.querySelector('nav')
nav.classList.add('nav')
nav.innerHTML=`<h2>my logo</h2><ul><li>home</li><li>about</li><li>contact</li></ul><button>login</button>`
document.body.prepend(nav)



let main=document.querySelector('main')
indianCricketTeam.map((ele)=>{
    let div=document.createElement('div')
    div.classList.add('card')
    
    div.innerHTML=`<h2>Name:${ele.name}</h2><h4>Role:${ele.role}</h4><h4>Jersey:${ele.jerseyNumber}</h4>`
    main.append(div)
})