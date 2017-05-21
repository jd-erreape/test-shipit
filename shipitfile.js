module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    staging: {
      servers: 'jdrap@vps413226.ovh.net'
    }
  });

  shipit.task('pwd', function () {
    return shipit.remote('pwd');
  });

  shipit.initConfig({
    default: {
      workspace: '/tmp/github-monitor',
      deployTo: '/home/jdrap/apps/javascript/test-shipit',
      repositoryUrl: 'https://github.com/jd-erreape/test-shipit.git',
      ignores: ['.git', 'node_modules', 'shipitfile.js'],
      keepReleases: 2,
      deleteOnRollback: false,
      key: '/path/to/key',
      shallowClone: true
    },
    staging: {
      servers: 'jdrap@vps413226.ovh.net'
    }
  });

  shipit.on('published', (res) => {
    return shipit.remote('node /home/jdrap/apps/javascript/test-shipit/current/index.js')
  })
};
