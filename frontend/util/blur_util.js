export function setBlurListener(ref, callback) {
  return event => {
    const { relatedTarget } = event;
    const node = ref.current;
    if (node !== relatedTarget && !node.contains(relatedTarget)) {
      callback();
    }
  };
}
