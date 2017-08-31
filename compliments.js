$(document).ready(function() {


  function generateMotivation() {

    var motivation = [

      "If you don't have big dreams and goals you'll end up working really hard for someone who does. <br>- Anonymous",

      "I just love bossy women. To me, bossy it not a pejorative term at all. It means someone is passionate and engaged and ambitious and doesn't mind leading. <br>- Amy Poehler",
     
      "If you get tired to learn to rest, not to quit. <br>– Banksy",

      "Live boldly, push yourself, and never settle.<br> - Anonymous",

      "Who runs the world? Girls. <br>— Beyoncé Knowles",

      "If there's one thing I'm willing to bet on, it's myself.<br> - Anonymous",

      "Women hold all the power. They should use it like a whip, not offer it up as a sacrifice.<br> — Tarryn Fisher",

      "Inhale confidence, exhale bullshit.<br> - Anonymous",

      "If you educate a man you educate an individual, but if you educate a woman you educate a nation. <br>– African Proverb",

      "Behind every successful woman is a tribe of other successful women who have her back.<br> - Anonymous",

      "Always remember to fall asleep with a dream and wake up with a purpose. <br>– The Law of Attraction",

      "Those who dare to fail miserably can achieve greatly. <br>- Anonymous",

      "There’s nothing a man can do, that I can’t do better and in heels.<br> — Ginger Rogers",

      "Never-the-less, she persisted. <br>- Anonymous",

      "Whatever women do they must do twice as well as men to be thought half as good. Luckily, this is not difficult. <br>— Charlotte Whitton",

      "Doubt kills more dreams than failure ever will. <br>- Anonymous",

      "Successful people are not gifted; they just work hard, then succeed on purpose. <br>– G.K. Nielson",

      "Money looks better in the bank than on your feet. <br>- Anonymous",

      "Women are small and fragile…yet the power they hold is unmeasurable. <br>— Da Xia",

      "The best way to predict your future is to create it. <br>- Anonymous",

      "Success is often achieved by those who don’t know that failure is inevitable.<br> – Coco Chanel",

      "It is amazing what a woman can do if only she ignores what men tell her she can’t. <br>— Carol K. Carr",

      "There is no force more powerful than a woman determined to rise. <br>- Anonymous",

      "These days, I strive to be a bitch, because not being one sucks. Not being a bitch means not having your voice heard. <br>— Margaret Cho",

      "Go the extra mile, it's never crowded. <br>- Anonymous",

      "I can and I will. Watch me.<br> – Carrie Green",

      "Don't let anyone who gave up on their dreams talk you out of yours. <br>- Anonymous",

      "It’s hard not to be a fighter when you’re constantly under siege.<br> — Cassandra Duffy",

      "Good things come to those that hustle. <br>- Anonymous,",

      "Like wildflowers; you must allow yourself to grow in all the places people thought you never would. <br>– E.V",

      "Work until you no longer have to introduce yourself.<br> - Anonymous",

      "I’m not a humanitarian, I’m a hell-raiser. <br>— Mother Jones",

      "It takes a special kind of stubbornness to succeed as an entrepreneur. <br>- Anonymous",

      "No matter how you feel, get up, dress up, show up, and never give up. <br>– Regina Brett",

      "Once upon a time you were a little girl with big dreams that you'd promised you'd make real one day. Don't disappoint yourself.<br> - Anonymous",

      "I’m tough, I’m ambitious, and I know exactly what I want. If that makes me a bitch, okay.<br> — Madonna",

      "Be the kind of woman that makes other women want to step up their game. <br>- Anonymous",

      "And so, she decided to start living the life she’d imagined. <br>– Anonymous",

      "People call me a feminist whenever I express statements that distinguish me from a doormat. <br>— Rebecca West",

      "Collaborate with people you can learn from. <br>- Anonymous",

      "None of us want to be in calm waters all our lives.<br> – Jane Austen",

      "I love it when the coffee kicks in and I realize what an adorable bad-ass I'm going to be today.<br> - Anonymous",

      "A woman without a man is like a fish without a bicycle. <br>— Gloria Steinem",

      "We rise by lifting others. <br>- Anonymous",

      "You can tell who strong women are. They are the ones you see building up one another instead of tearing each other down. <br>– Anonymous",

      "You get what you work for, not what you wish for. <br>- Anonymous",

      "Do you know they found land mines in women’s souls?<br> — Andrea Gibson",

      "Empowered women empower women. <br>- Anonymous",

      "Maybe some women aren’t meant to be tamed. Maybe they need to run free until they find someone just as wild to run with them. <br>– Carrie Bradshaw",

      "Today's Agenda: Building my empire. <br>- Anonymous",

      "There are some people who still feel threatened by strong women. That’s their problem. It’s not mine.<br> — Gloria Allred",

      "Success is sexy. Excuses aren't. <br>- Anonymous",

      "I am too intelligent, too demanding, and too resourceful for anyone to be able to take charge of me entirely. No one knows me or loves me completely. I have only myself. <br>— Simone de Beauvoir",

      "Dream big, work hard, stay focused, and surround yourself with good people.<br> - Anonymous",

      "We don't appreciate negative vibes around here. Move along. <br>- Anonymous",

      "She’s a dreamer, a doer, a thinker. She see's possibility everywhere.<br> – Anonymous",

      "Strive for progress, not perfection. <br>- Anonymous",

      "The thing women have yet to learn is nobody gives you power. You have to take it. <br>– Roseanne Barr",

      "Today be fearless, responsible, open, pretty, honest, and most importantly- slay. <br>- Anonymous",

      "Give a girl the right shoes and she can take on the world. <br>– Marilyn Monroe",

      "To all the pretty girls working late nights, early mornings and long hours with big dreams, clear vision, and a plan of action- don't stop your hustle. <br>- Anonymous",

      "Your life unfolds in proportion to your courage. <br>- Anonymous",

      "Motivation? It's easy. I just remind myself that my dreams don't build themselves. Then I have an espresso. Or three. <br>- Anonymous",

      "Anything I've done that was ultimately worthwhile initially scared me to death. <br>- Anonymous",

      "The struggle doesn't have to be real. <br>- Anonymous"
    ];

    var randomMotivation = Math.floor(Math.random() * motivation.length);

    document.getElementById("motivation").innerHTML = motivation[randomMotivation];
  }

  $('.get-motivation').on('click', function(event) {
    event.preventDefault();
    generateMotivation();
  });
});



 