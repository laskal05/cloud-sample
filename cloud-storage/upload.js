const { Storage } = require("@google-cloud/storage");
const config = require("./config");

const storage = new Storage({
  projectId: config.projectId,
  keyFilename: config.keyFilename
});

var filename = "hoge.txt";
storage
  .bucket(config.bucket)
  .upload(filename, { gzip: true })
  .then(res => {
    // 公開状態にする場合
    // res[0].makePublic();
    console.log(res[0].metadata);
    console.log(`${filename} uploaded to ${config.bucket}.`);
  })
  .catch(err => {
    console.error("ERROR:", err);
  });
