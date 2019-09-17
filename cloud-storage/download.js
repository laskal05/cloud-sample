const { Storage } = require("@google-cloud/storage");
const config = require("./config");

const storage = new Storage({
  projectId: config.projectId,
  keyFilename: config.keyFilename
});

const options = {
  destination: "./downloaded.txt"
};

var filename = "hoge.txt";
storage
  .bucket(config.bucket)
  .file(filename)
  .download(options)
  .then(res => {
    console.log(res);
    console.log(`${filename} downloaded from ${config.bucket}.`);
  })
  .catch(err => {
    console.error("ERROR:", err);
  });
