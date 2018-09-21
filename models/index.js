const Sequelize = require("sequelize");
//const db = new Sequelize("postgres://localhost"); //Melissa
const db = new Sequelize({
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  user: 'lm616',
  password: 'SQL616',
  logging: false
}); // LE

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

module.exports = { Page, User, db };

