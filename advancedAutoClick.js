function executeCode(qcount, end) {
  if (qcount > end) return;

  const elements = document.querySelectorAll(`span[qcount="${qcount}"]`);
  if (elements.length === 0) {
    executeCode(qcount + 1, end);
    return;
  }

  const firstElement = elements[0];
  const secondElement = elements[1];

  if (secondElement) {
    secondElement.click();
    setTimeout(function () {
        document.querySelector(".submitBtn").click();
        setTimeout(function () {
            document.querySelector(".closeBtn").click();
            setTimeout(function () {
                firstElement.click();
                setTimeout(function () {
                    document.querySelector(".submitBtn").click();
                    setTimeout(function () {
                        document.querySelector(".closeBtn").click();
                        setTimeout(function () {
                            executeCode(qcount + 1, end);
                        }, 2000);
                    }, 1000);
                }, 18000);
            }, 2000);
        },1000)
    }, 18000);
  } else {
    firstElement.click();
    setTimeout(function () {
      document.querySelector(".submitBtn").click();
      setTimeout(function () {
        document.querySelector(".closeBtn").click();
        setTimeout(function () {
          executeCode(qcount + 1, end);
        }, 2000);
      }, 1000);
    }, 18000);
  }
}

executeCode(2, 5);
