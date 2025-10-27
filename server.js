const app = require('./src/app');
const { sequelize } = require('./src/models');


const PORT = process.env.PORT || 3000;


(async () => {
await sequelize.sync();
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
})();