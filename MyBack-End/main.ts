import express from 'express';

const app = express();
app.use(express.json());

const port = 3000;

const users: { name: string, email: string, }[] = [
	{ name: 'Mauricio Monteiro', email: 'mauricio.monteiro@gmail.com' },
	{ name: 'Leticia Luz', email: 'leticia.luz@gmail.com' },
	{ name: 'Ester Caroline Pires', email: 'ester.caroline@gmail.com' },
	{ name: 'Sara Danielle Pires', email: 'sara.danielle@gmail.com' },
	{ name: 'Victor Hugo Barbosa', email: 'victor.hugo@gmail.com' }
];

app.use("/", express.static("../projeto/projeto_treino/dist"));

/*
app.get(['/'], (request: express.Request, response: express.Response): void => {
	response.send('Hello World!');
})
*/
app.get('/', function(req,res) {
	res.render('index',{});
});

app.get(['/services/user/:id'], (request: express.Request, response: express.Response): void => {
	
	const _id: number = ((request.params.id as unknown) as number);
	if (_id < 1 || _id > users.length) {
		response.status(204).send({ id: 0, user: null });
	}
	else {
		response.status(202).send({ id: _id, user: users[_id - 1] });
	}
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
});

