import express from 'express';

const app: express.Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.text({ type: 'text/html' }));

app.get('/', async (req: express.Request, res: express.Response) => {
	console.log(req);
	res.send('howdy');
	return;
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
