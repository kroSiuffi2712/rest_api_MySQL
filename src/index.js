import express from 'express';
import loaders from './loaders/express';
import db from'../src/models';

const startServer = async () => {
    const app = express();

    await loaders.init(app);

    await db.sequelize.sync().then((req) => {
        app.listen(app.get('port'), () => {
            console.log('Server on port', app.get('port'));
        });
    });
}

startServer();
