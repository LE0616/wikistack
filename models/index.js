const Sequelize = require("sequelize");
//const db = new Sequelize("postgres://localhost"); //Melissa
const db = new Sequelize({
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  user: 'lm616',
  password: 'SQL616',
}); // LE

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING
  },
  slug: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});

module.exports = { Page, User, db };

