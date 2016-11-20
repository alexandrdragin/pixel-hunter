const intro = () => {
  let template = document.getElementById('intro');
  template.appendChild(`<h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
      Sparnaay.</p>`);
};

export default intro;
