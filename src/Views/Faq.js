import React from 'react';

// This the faq data, it is mapped to HTML elements below!
// The reason for this as an array is that we can extract into a rest call later down the line, if we introduce a server
const faqData = [
  {
    "header": "1. How to join us on TS?",
    "body": "There is a fixed address and password in Bombers Bar channel that you use to join in the first time. You will jump in the lobby. Next step is when you x up in BB game channel and you are called into fleet. Switch to “Fleet” tab and in MOTD you will see new TS channel to use (usually BB Roam 1) together with new password. Join us there !"
  },
  {
    "header": "2. TS password is not working?",
    "body": "FC was slow and lazy, he/she wrote new password in game Fleet tab but still didn’t have time to do that in TS. No worry, he/she will do that in next 1 or 2 minutes. Keep on trying."
  },
  {
    "header": "3. X-Up (like lemmings do)",
    "body": "Bombers Bar is precise timewise. If fleet is said to start at 19:00, x-up at 18:50 will cause only comments of you being premature in all things in life (with, yes, hints on sexual life). One premature x-ing brings others to do the same, which is called lemmings behavior. Often some senior BB pilots intentionally provoke/troll others by starting premature x-up sequence. Ignore them, they are mean. Wait for the FC to call up for X."
  },
  {
    "header": "4. My mic is offline",
    "body": "We don’t like that. By the very nature of our open fleet, we have spies in it that will report to their friends where we are in space now. Offline mike may be a clear signal to us that you are speaking in some other channel, to some other group…"
  },
  {
    "header": "5. MOTD",
    "body": "Message Of The Day. In Fleet tab have a look at MOTD, often reload it because info in it will change from time to time. Reload by left-clicking small donut icon on the top, use menu that will open. MOTD have some important info – who is the fleet BLOPS (Black Operation ship that will bridge us to the target) and who is FC. These are two most important characters in fleet, you should put them to your WATCHLIST. Rightclick the name of BLOPS, in menu that will open pick “Fleet”, “Add to Watchlist”, repeat for FC, or anybody else you want to have an eye on. You can drag and drop them to watchlist, too. 15 pilots max number in watchlist, but keep it as simple as possible. BLOPS pilot always put on the top of the list."
  },
  {
    "header": "6. WHALING, WOLFPACK, BOMBING fleet…?",
    "body": "Whaling fleet is all about catching a whale – big capital ship, or rorqual, but supercapitals and titans will be accepted on our killmail as well… You should use Standard whaling fit (see fitting page of this site), ONLY focused void bombs (FVB) if you can use them, otherwise no bombs. Void bombs are not equal to Focused Void Bombs! FVB are specific as they cap out target making it impossible to rep. Their area of effect is very small, maybe like a few meters. But void bombs (not focused one) have big range and will cap out your fleet members. If you shoot any other bomb, you make problem for our fleet, not for targeted whale. Again – ONLY FVB (or no bombs at all). Wolfpack fleet usually target other smaller fleet. Fit has some specifics as it adjust to smaller targets that move around and we need more application of DPS. Bombing fleet – if you can’t bomb, don’t join in. You can’t use torpedos in bombing run. Or better, you can, but only for a few secs, before you die. What kind of bombs will be used, FC will announce in MOTD when fleet starts. Don’t mix them, we should all use the same type, otherwise you destroy other pilot’s bombs and will be hated by many."
  },
  {
    "header": "7. ARMADA FLEET?",
    "body": "Armada fleet – can be any of the above type of fleets with regards to the target in question (but usually it’s whaling type). Golden Armada was a product of our advanced R&D laboratories, dealing with a specific problem – how to make our fleet invisible in Local tab (until it is to late to escape). Olmeca Gold used new EVE technologies to overcome the problem. Join Armada fleet to find out how it works."
  },
  {
    "header": "8. OVERVIEW that I should have ?",
    "body": "Many very good once are around. Usability depends on what you are doing in EVE. My experience is as follows: One tab for PvP, all reds should be here, no blues. I also added to that tab : sun and fighter drones. Sun? Should be in “Warp to” tab, yes, but I prefer to have it right there in PvP tab to align at it from the very start and not lose time. Also, when shit hits the fan, when you are locked and redpointed and shield and armor start to melt down, it’s easy to warp out. Easier then to search over other tabs and loose another sec or two. Of course, you can warp to any other random celestial as well. Fighter drones – why not having it in separate drones tab? I have them there as well, but capital pilots use to drop them and pull them back and forth when they are jammed. Again, not losing time to switch and check different tabs."
  },
  {
    "header": "9. To cloak or not to cloak?",
    "body": "Once you arrive to desto assigned in MOTD, stay cloaked in system. At some point FC will call us all to warp to BLOPS. YOU NEED TO BE CLOAKED, check that before you warp to BLOPS! If you warp uncloaked, you will uncloak all the others in the fleet, and put BLOPS and whole fleet in danger. And yet, there are always pilots that decloak the fleet. You are not aware that you are not cloaked. Possibly you do 3-4 things at the same time, not paying attention? Solution : Reevaluate your multitasking skills, maybe flying with BB and at the same time flying incursions with your alt, watching a porn and trying to release sexual tension you feel, all at the same time, is too much for you? Drop one by one until you can handle it."
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
