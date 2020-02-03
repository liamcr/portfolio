export function scrollTo(elementId: string, duration: number) {
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

  // Offset by 64px (Height of header)
  // targetY -= 64;

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
