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
      shallowClone: true
    },
    staging: {
      servers: 'jdrap@vps413226.ovh.net'
    }
  });

  shipit.on('published', (res) => {
    let file = 'index.js';
    let path = '/home/jdrap/apps/javascript/test-shipit/current';

    return shipit.remote(`node ${file}`, {
      cwd: path
    }).then((res) => {
      // Do something 
    });
  })
};
