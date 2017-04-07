import React from 'react';

// This the faq data, it is mapped to HTML elements below!
// The reason for this as an array is that we can extract into a rest call later down the line, if we introduce a server
const faqData = [
  {
    "header": "1. How to join us on TS?",
    "body": "There is a fixed address and password in the Bombers Bar channel that you should use to join our Teamspeak server. When you initially connect you will be in the "Main Lobby". From here you should be able to join the various public channels and hang out with your fellow cloaky space nerds. When a fleet is starting and you x up in the BB in-game channel, you are called into fleet. Switch to the in-game Fleet chat window, in the MOTD you will see the relevant TS channel to use (usually BB Roam 1) together with new password. Join us there!"
  },
  {
    "header": "2. TS password is not working?",
    "body": "The FC has a lot to do and is probably a little behind. Move to the staging system and just put a reminder in the fleet chat window and your FC will update it shortly in the fleet MOTD"
  },
  {
    "header": "3. X-Up (like lemmings do)",
    "body": "Bombers Bar is precise timewise. If fleet is said to start at 19:00, x-ing up at 18:50 will only cause comments of you being premature in all things in life (yes, hints on sexual life). One premature x-ing up brings others to do the same, which is called lemming behavior. Often some senior BB pilots intentionally provoke/troll others by starting premature x-up sequence. Ignore them, they are mean. Wait for the FC to call up for X-up in the Bombers Bar channel MOTD."
  },
  {
    "header": "4. My mic is offline",
    "body": "We don’t like people having muted mic's. Offline mic's may be a clear signal to us that you are speaking in some other channel, to some other group… So expect to be asked to unmute your mic if caught"
  },
  {
    "header": "5. MOTD (Message Of The Day)",
    "body": "In your fleet chat window have a look at the MOTD. Be sure to reload it often because info will change from time to time. Reload by left-clicking small donut icon on the top and clicking "Reload MOTD". The MOTD has some important info such as; who is the fleet BLOPS (Black Ops ship that will bridge us to the target), who is the FC and what staging system you should travel to. The BLOPS and FC pilots are two most important characters in fleet, you should put them in your WATCHLIST. To do this; Rightclick the name of the BLOPS pilot, in that menu open pick “Fleet” then “Add to Watchlist”, repeat for the FC or anybody else you want keep an eye on. You can drag and drop them from the fleet chat window to watchlist also. Keep it as simple as possible and the BLOPS pilot should always be put on the top of the list."
  },
  {
    "header": "6. Fleet Types",
    "body": "The general fleet types we run are; Whaling,Amarda,Wolfpack and Bombing fleets. Click here to view the Fleet Types Page which explains each fleet type in more detail."
  },
   {
    "header": "8. Overview that I should have?",
    "body": "There are many very good ones around. Usability depends on what you are doing in EVE. I will list a few here and you can take your pick:
	
	Z-S Overview Hyperlink to https://github.com/Arziel1992/Z-S-Overview-Pack
	Other Overview
	Other Overview
	
	Drop a message in the in-game Bombers Bar channel if you are stuck and need a hand setting up"
  },
  {
    "header": "9. To cloak or not to cloak?",
    "body": "Once you arrive to the staging system displayed in the MOTD, stay cloaked in system or dock at the station / citadel specified in the MOTD. At some point the FC will call us all to warp to the BLOPS pilot. YOU NEED TO BE CLOAKED, check that before you warp to the BLOPS! If you warp uncloaked, you will uncloak all others in the fleet and put the whole fleet in danger. If you repeatly uncloak the fleet you will be asked to leave. Dont be "that" guy.
  },
  {
    "header": "10. Bridge is up!",
    "body": "When hunter finds a target he will light a cyno. Our BLOPS will lock on that cyno and will open bridge to our fleet. For that to work properly you need to: a) be 1000m to the BLOPS, b)when blue vortex starts around BLOPS, you need to either leftclick BLOPS name in watchlist, which will open radial navigation and use top field (at 12:00 hours) to jump, or you can use the way to rightclick the BLOPS name and from menu use Jump to… (the name of the system where hunter opened cyno)."
  },
  {
    "header": "11. JUMP, JUMP, JUMP ! Possible problems?",
    "body": "Since everybody is cloaked, you are never sure if you warped at zero to the BLOPS. If in doubt, warp away to random celestial and warp back to BLOPS at zero again. Better then to be lazy and once everybody decloak for jump, you find yourself 100 km away. You will miss the kill! Every time someone decloak on BLOPS (at this will happen, yes), all fleet needs to warp off to random celestial, and WAIT until BLOPS call fleet back. DO NOT go before that or you may end in some strange place. Why is that? Every BLOPS have MJD (micro jump drive) as one of the modules. The moment fleet decloaks, bombers and recons warp to celestials and BLOPS use MJD to jump 100 km away from the initial position (for security reasons). If you warp to BLOPS before he starts MJD jump, you will end at earlier spot and since everybody is cloaked, you will not know that you are at wrong place. The other “things go wrong” is if you warp to BLOPS at zero and for some reason click in space and start to move from that spot. You could never say how much you moved away since you don’t see any reference point. Warp away to celestial and back to zero on BLOPS."
  },
  {
    "header": "12. Finally! Jumping on target",
    "body": "Finally, we jump on the target. First, ALIGN to some random celestial. I use sun as it is in my PvP tab in overview, but for you can be anything else. Just, be ready to run away if needed. ALIGN ! Then, lock the target. And then, ALWAYS FIRST APPLY POINT (or any other e-war on the target). DO NOT start with DPS i.e. torpedos before FC calls for it. Keep in mind, BB fleet usually have 20.000-30.000 DPS and can melt down most of the targets in a minute or seconds. Literary! Just as you want to get on juicy killmail, so do 50 other pilots in your fleet. If you are among the first to drop on the target and you start full DPS, chances are first 10-20 pilots will kill the target before others have even lock it (because they were slow in taking the bridge). Imagine the other 30 pilots disappointment. Maybe you can be among those the other time? You secure your place on killmail the moment you point or scram it, not when you shoot torpedos on it. Strange thing, is it? BB fleet’s major problem is to control DPS and not kill target, not vice versa. Once we kill ship, lock the pod. E-WAR ONLY ON THE POD! – FC screams every time… All of us wants to be on that killmail, too. DO NOT shoot torpedos at the pod, not all of us can lock it as quick as you have. Be generous, make others happy."
  },
  {
    "header": "13. Advice on how to stop killing prematurely",
    "body": "If you are using mouse to start modules than move point (warp disruptor) and dampening modules to upper row – you can click on those first when the hype starts. Torpedo icon move from central F1 position, so you will be less tempted to click it in hurry. Also, be wise. Towards the end of target’s life leave one damp mod free to use on pod and get on pod killmail. You will bewhore, I know… But it pays off."
  },
  {
    "header": "14. Target killed, pod killed \\o/ hurray, now what?",
    "body": "Well, congatz fellow assassin. Now is a time to sneak to random celestial and cloak on the way to it. Cloak while you warp off, NOT at the moment you arrive at the celestial. Reason: you just kill expensive ship, he was screaming loud while dying and his friends in the system will try to find individual targets (our bombers) to make things even. Once you are cloaked and safe, wait and wait. Our BLOPS didn’t jump with us on the target, BLOPS is still in old system together with fuel truck and maybe some individuals that were slow to get the bridge in time. Now, they start to communicate in comms, calling for everyone left IN PREVIOUS SYSTEM to warp to BLOPS before all of them join us in THIS SYSTEM. So, this does not apply to anyone of us in here. We wait until BLOPS jumps and calls us all to warp to zero. New cycle of killing starts…"
  },
  {
    "header": "15. I like it, want to be with you and help, I will bring bling fit bomber, combat BLOPS maybe, everything to help you…",
    "body": "We appreciate your enthusiasm. But be careful – most of this is not a good idea. DO NOT bling fit any bomber. Bad for your efficiency statistics, bad for BB O’Bomberscare (they will probably reject your claim, accompanied with a lot of bad attributes attached to you and your ship’s fitting). And NOT any BETTER for BB fleet – it really doesn’t matter to have few hundreds DPS more with enormous risk attached to it. Because – you will die sooner or later. As for the BLOPS – combat BLOPS fit is worth few Bil ISK, have no real role in BB fleets, will not be covered by O’Bomberscare, so you are playing with your own ISK. Polarized Bomber have the same DPS as combat BLOPS (more or less). It has a role in solo or small pack BLOPS, not in BB fleet. Bridging BLOPS is something else. We need bridging BLOPS, but let’s make it clear – you will not end up on any killmail, you will not be paid for it, risk is high, you will put your ship in danger … No other incentive but pride to know you did something for the fleet nobody but FC and a few others understand and care… Same goes for a fuel truck role. If you want to help, go for recons, we need those in any fleet. They keep bombers alive. Ultimately, go hunting, become a hunter-star. Lose of you hunting ship is covered by O’Bomberscare, you can use bling fit to stay alive long enough to light a cyno … and become famous in EVE. They will fear you and avoid you even if you fly some shit ship, because you never know – maybe there are hundred ships on the other side waiting ? Happy hunting, guys…"
  }
];

function FaqView() {
  return (
    <div>
      { faqData.map((item, index) => (
        <div key={index}>
          <h2>{item.header}</h2>
          <p>{item.body}</p>
        </div>
      )) }
    </div>
  );
}

export default FaqView;
