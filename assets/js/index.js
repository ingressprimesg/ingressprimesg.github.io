(function() {

  // Simple counter built for 2xAP event
  // No lib used since it's pretty small and short
  // Year 6 2xAP: https://plus.google.com/+Ingress/posts/4ChFienYV9f

  // Constants
  // Start: 2018-11-17 05:00:00 UTC
  // 2xReso: 2018-11-17 21:00:00 UTC
  // End: 2018-11-26 18:00:00 UTC
  var start = new Date(Date.UTC(2018, 10, 17, 5)),
      double = new Date(Date.UTC(2018, 10, 17, 21)),
      end = new Date(Date.UTC(2018, 10, 26, 18));

  // Element to mount
  var el = document.getElementById('counter');

  function pad(i) {
    return i >= 10 ? i : '0' + i;
  }

  function between(fromDate, toDate) {
    var remainingSeconds = Math.abs(Math.round((fromDate.getTime() - toDate.getTime()) / 1000)),
        days = Math.floor(remainingSeconds / 86400),
        hours = Math.floor((remainingSeconds - days * 86400) / 3600),
        minutes = Math.floor((remainingSeconds - days * 86400 - hours * 3600) / 60),
        seconds = remainingSeconds % 60,
        remainingDays = '';

    if (days >= 1) {
      remainingDays = days + (days === 1 ? ' day ' : ' days '); 
    }
    
    return remainingDays + pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
  }

  function update() {
    var now = new Date();
    if (now < start) {
      el.innerHTML = '2xAP start in<br>' + between(now, start);
    } else if (now > start && now < end) {
      if (now < double) {
        el.innerHTML = '2xAP Started!<br>2Reso/4Mod/3Min in<br>' + between(now, double);
      } else {
        el.innerHTML = '2xAP Started!<br>Ends in<br>' + between(now, end);
      }
    } else {
      el.innerHTML = '2xAP has ended :(';
    }
  }

  update();
  setInterval(update, 1000);
})();
