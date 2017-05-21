module.exports = function (shipit) {
  shipit.initConfig({
    staging: {
      servers: 'jdrap@vps413226.ovh.net'
    }
  });

  shipit.task('pwd', function () {
    return shipit.remote('pwd');
  });
};
