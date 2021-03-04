require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  mysql: {
    host: process.env.MYSQL_HOST || '',
    user: process.env.MYSQL_USER || '',
    password: process.env.MYSQL_PASS || '',
    database: process.env.MYSQL_DATABASE || '',
    port: process.env.MYSQL_PORT || 3306
  }
};

export default config