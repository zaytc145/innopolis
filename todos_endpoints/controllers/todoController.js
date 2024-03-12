import { Todos } from '../models/todos.js';

export class TodoController {
	static async getAllTodos(req, res) {
		const allTodos = await Todos.getAllTodos();

		res.status(200).send(allTodos);
	}

	static async createTodo(req, res) {
		const { title, description, completed, tagsIds } = req.body;

		if (!title || !description) {
			res.status(400).send({ message: 'Не переданы обязательные поля' });
		}

		const todo = await Todos.createTodo(title, description, completed, tagsIds);

		res.status(200).send(todo);
	}

	static async patchTodoById(req, res) {
		const { title, description, completed, tagsIds } = req.body;
		const { todoId } = req.params;

		if (!title || !description) {
			res.status(400).send({ message: 'Не переданы обязательные поля' });
		}

		const todo = await Todos.patchTodoById(todoId, title, description, completed, tagsIds);

		res.status(200).send(todo);
	}

	static async deleteTodoById(req, res) {
		const { todoId } = req.params;

		try {
			await Todos.deleteTodoById(todoId);
			res.status(200).end();
		} catch (e) {
			res.status(500).send(e.message);
		}
	}
}
