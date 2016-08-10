const successStatuses = [200, 201, 204];

function makeRawReq(cont) {
  console.log('making a req');
  const req = new XMLHttpRequest();
  req.open('GET', '/true', true);

  req.onreadystatechange = function() {
    console.log('got req status', req.readyState);
    
    if (req.readyState === XMLHttpRequest.DONE) {
      if (successStatuses.indexOf(req.status) < 0) {
        cont(req.status);
      } else {
        cont(null, req.responseText);
      }
    }
  };

  req.send();
}

makeRawReq((err, data) => {
  console.log('got', err, data);
  makeRawReq((err, data) => {
    console.log('got2', err, data);
  });
});
