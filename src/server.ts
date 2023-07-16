import app from './app';
import Logger from '@utils/Logger.util';

const port = process.env.PORT || 3000;

app.listen(port, () => {
    Logger.info(`Server's running on port: ${port}`);
});
