const http = require('http');
const fs = require('fs');
const is = require('is-thirteen');

const server = http.createServer((req, res) => {
  let { url } = req;
  if (/\/$/.test(url)) {
    url = `${url}index.html`;
  }

  let body;
  try {
    body = fs.readFileSync(`./public${url}`);
  } catch (e) {
    console.log(e);
    res.statusCode = 404;
    res.write('404')
    res.end();
    return;
  }
  console.log(url);

  res.setHeader('X-Frontend-ID', is('13').thirteen());
  res.write(body);

  res.end();
});

server.listen(3000);
