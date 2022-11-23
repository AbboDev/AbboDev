const config = {
  // easing: "easingCubicInOut",
  // yoyo: true,
  // repeat: 99,
  repeatDelay: 1200,
  duration: 1500,
  // morphIndex: 85,
  morphPrecision: 10,
};

const blob = document.querySelector('.js-blob');
const paths = blob.getElementsByTagName('path');

const tweens = [];
Array.from(paths).forEach((path, index) => {
  console.debug(path);
  const isLast = index === paths.length - 1;
  const nextIndex = !isLast ? index + 1 : 0;

  const tween = KUTE.fromTo(
    '.js-blob [data-index="0"]',
    {
      path: `.js-blob [data-index="${index}"]`,
      attr: {
        fill: path.getAttribute('fill'),
      },
    },
    {
      path: `.js-blob [data-index="${nextIndex}"]`,
      attr: {
        fill: path.getAttribute('fill'),
      },
    },
    config
  );

  if (index > 0) {
    tweens[index - 1].chain(tween);
  }

  if (isLast) {
    tween.chain(tweens[0]);
    tweens[0].start();
  }

  tweens.push(tween);
});

['first', 'second'].forEach((position) => {
  ['131f37', '4d345e', '96446e', 'd55e64', 'f88f4a', 'fbae3c'].forEach(
    (color) => {
      const selector = `.js-background-blob-${position} .is-${color}`;
      KUTE.fromTo(
        selector,
        { path: selector },
        { path: `${selector}[data-morph]` },
        {
          easing: 'easingCubicInOut',
          repeat: 999,
          duration: 10000,
          yoyo: true,
          morphPrecision: 10,
        }
      ).start();
    }
  );
});
