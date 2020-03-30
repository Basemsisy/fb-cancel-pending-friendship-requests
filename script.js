(function main() {
  // cancel requests function
  function cancelRequests() {
    let cancelCollection = document.getElementsByClassName(
      "_54k8 _52jg _56bs _26vk _2b4n _8yzq _3cqr _8yo0 _56bt"
    );
    for (let i = 0; i < cancelCollection.length; i++) {
      cancelCollection[i].click();
      if (i == cancelCollection.length - 1) {
        alert(`done cancel ${cancelCollection.length} friend request`);
      }
    }
  }

  // scroll to the end of the page
  let interval = setInterval(function scroll() {
    window.scrollBy(0, 300);
  }, 500);
  // if scrollbar reach the end of the page, cancel all requests
  window.onscroll = function() {
    if (
      Math.ceil(window.scrollY + window.innerHeight) >=
      document.body.scrollHeight
    ) {
      cancelRequests();
      clearInterval(interval);
    }
  };
})();
