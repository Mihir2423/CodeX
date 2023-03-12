function executeCode(qcount,end) {
    if(qcount>end) return
  const element = document.querySelector(`span[qcount="${qcount}"]`);
  if (element) {
    // Click the element and wait for 3 minutes
    element.click();
    setTimeout(function() {
      document.querySelector(".submitBtn").click();
      setTimeout(function() {
        document.querySelector(".closeBtn").click();
        // Wait for 2 seconds before executing the next iteration
        setTimeout(function() {
          executeCode(qcount + 1);
        }, 2000);
      }, 1000);
    }, 180000);
  }
}

executeCode(1,10);
