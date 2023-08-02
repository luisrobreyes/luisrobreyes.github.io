const gifs = ['https://i.gifer.com/7CtZ.gif', 'https://64.media.tumblr.com/22426ca35ee4a92133cad67745c0752c/a9859654f76c6c6f-2b/s640x960/752933764007ea09bdf82c7a7311cc8e483ed734.gifv', 'https://www.icegif.com/wp-content/uploads/2022/01/icegif-1085.gif', 'https://media.tenor.com/Spx7qztgO4wAAAAC/trippy-aesthetic.gif','https://cdn.booooooom.com/wp-content/uploads/2017/03/colin-macfadyen19.gif','https://media.tenor.com/lefsbGpWMXkAAAAC/surreal-electricity.gif','https://thumbs.gfycat.com/AgonizingZanyIberiannase-max-1mb.gif', 'https://64.media.tumblr.com/c9b266f89bbf4780d8cd487cac06c5a8/a8e7100415ed3a4e-19/s500x750/fd40dfb2ba48640641b7fa9b0a1a9bd1faa395f0.gifv','https://media.tenor.com/q4kA4kbVyVQAAAAC/sowegabeekeepersclub-pollinating.gif', 'https://media4.giphy.com/media/l6JC0IxMDIS4QrUxO5/giphy.gif?cid=6c09b952tqwtjv5rkxv27n9d4e4f9mb4xn33j0pwus3gq2r7&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s']
const psyducks = ['https://media1.giphy.com/media/O7kVXlR3LrWImn7EeW/giphy.gif?cid=6c09b952lsrtcunkddk8wij8ewb3rppwsujpowuh9itc38ld&ep=v1_stickers_related&rid=giphy.gif&ct=s', 'https://64.media.tumblr.com/b144fea71e58b6a02b80fc9f0ab138c8/7ef8290f0c40bdbf-d8/s1280x1920/d0329211b2dbbe6c214ae498bb1ebbeb1a635680.gif', 'https://emoji.discadia.com/emojis/04cd9a01-f7bc-436d-98af-713f81d48c48.GIF', 'https://thumbs.gfycat.com/AcceptableEmotionalAustrianpinscher-max-1mb.gif', 'https://media3.giphy.com/media/XFpTLiFdCGkz077BjZ/giphy.gif?cid=6c09b9526rembl7s13a2nd86z2f630pl7t0t5pnxkgfr348p&ep=v1_stickers_related&rid=giphy.gif&ct=s']

let phase1 = [gifs[0]];
let phase2 = [gifs[3]];
let phase3 = [gifs[6]];
let phase4 = [gifs[gifs.length - 1]];
// let foundHeart = false
// TODO: set foundHeart to true when phase4


document.addEventListener('DOMContentLoaded', () => {
  let channels = 0;
  let duckies = 0;
  const button_to_change = document.querySelector('#remote');
  const changeRudd = document.querySelector('#gif-to-change');
  const innerDialogue = document.querySelector('#mindWindow');
  const duckSwitch = document.querySelector('.footer-image');
  
  button_to_change.addEventListener('click', () => {
    console.log('change channel clicked!');
    if (!(channels >= gifs.length)) {
      changeRudd.src = gifs[channels];
    }
    channels++ 
    if (phase1.includes(changeRudd.src)) {
      innerDialogue.innerHTML = "<strong>oh?</strong>"
    } else if (phase2.includes(changeRudd.src)) {
      innerDialogue.innerHTML = "Please. <strong>Let's watch more...</strong>"
    } else if (phase3.includes(changeRudd.src)) {
      innerDialogue.innerHTML = "<strong>I'm not perfect...</strong>"
    } else if (phase4.includes(changeRudd.src)) {
      innerDialogue.innerHTML = "Oh! <strong>you found my heart.</strong>"
    }
  });
  duckSwitch.addEventListener('click', () => {
    console.log('duck clicked!');
    duckSwitch.classList.toggle('hide');
    console.log(duckies);
    if (duckies === 0) {
      duckSwitch.src = psyducks[0];
    } else {
      duckSwitch.src = psyducks[duckies % psyducks.length];
    }
    duckies++;
  });
});
