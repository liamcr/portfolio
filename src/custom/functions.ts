export function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj;
}

function getVh(valInVH: number) {
  let viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );

  return (valInVH / 100) * viewHeight;
}

export function scrollTo(
  elementId: string,
  duration: number,
  isNavBar?: boolean
) {
  let target = document.getElementById(elementId);

  if (target === null) {
    return;
  }

  let settings = {
    duration: duration,
    easing: {
      outQuint: (
        currentTime: number,
        startValue: number,
        changeInValue: number,
        duration: number
      ) => {
        currentTime /= duration;
        currentTime--;
        return changeInValue * (Math.pow(currentTime, 5) + 1) + startValue;
      }
    }
  };

  let body = document.body;
  let html = document.documentElement;

  let height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  let windowOffset = window.pageYOffset;

  let delta = target.offsetTop - windowOffset;

  let targetY: number;

  if (height - window.innerHeight < delta) {
    targetY =
      height -
      window.innerHeight -
      (height - target.offsetTop - target.offsetHeight + windowOffset);
  } else {
    targetY = delta;
  }

  // Offset by 10vh (Height of navbar)
  if (isNavBar !== false) {
    targetY -= getVh(10) - 1;
  }

  let startTime = Date.now();
  let percentage = 0;

  let timer: ReturnType<typeof setTimeout>;

  function step() {
    let yScroll;
    let elapsed = Date.now() - startTime;

    if (elapsed > settings.duration) {
      clearInterval(timer);
    }

    percentage = elapsed / settings.duration;

    if (percentage > 1) {
      clearTimeout(timer);
    } else {
      yScroll = settings.easing.outQuint(
        elapsed,
        windowOffset,
        targetY,
        settings.duration
      );
      window.scrollTo(0, yScroll);
      timer = setTimeout(step, 10);
    }
  }

  timer = setTimeout(step, 10);
}
