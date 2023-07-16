import multer from 'multer';

export const multerConfig = multer({
    storage: multer.diskStorage({
        destination: 'src/billet',
        filename(req, file, callback) {
            const filename = 'billet';
            return callback(null, filename);
        },
    }),
});
