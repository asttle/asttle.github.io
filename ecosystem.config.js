module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      key: "portfoliokey.pem",
      user: "ec2-user",
      host: "18.170.39.157",
      ref: "origin/main",
      repo: "git@github.com:asttle/asttle.github.io.git",
      path: "/home/ec2-user/AsttlePersonalSite",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
