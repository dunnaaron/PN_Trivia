import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));

app.get('/todos', async (req, res) => {
	const todos = await prisma.todo.findMany({
		orderBy: { createdAt: 'desc' },
	});

	res.json(todos);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
