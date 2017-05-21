module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

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

  shipit.on('deploy', (res) => {
    return shipit.remote('mkdir -p /home/jdrap/apps/javascript/test-shipit/shared');
  });

  shipit.on('published', (res) => {
    let file = 'index.js';
    let path = '/home/jdrap/apps/javascript/test-shipit';
    let currentPath = `${path}/current`;
    let sharedPath = `${path}/shared`;

    shipit.remote(`ln -s ${sharedPath} shared`, {
      cwd: currentPath
    })

    return shipit.remote(`node ${file}`, {
      cwd: currentPath
    }).then((res) => {
      // Do something 
    });
  })
};
