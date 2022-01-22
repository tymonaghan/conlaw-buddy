const app = require('.');
const { db } = require('./db');
const PORT = 8080;

const init = async () => {
  try {
    await db.sync({ force: true });
    app.listen(PORT, () =>
      console.log(`
          Listening on port ${PORT}
          http://localhost:${PORT}/
      `)
    );
  } catch (err) {
    console.log(`There was an error starting up!`, err);
  }
};

export default init();
