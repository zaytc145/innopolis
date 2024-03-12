import { pool } from '../database/index.js';

export class Todos {
	static async getAllTodos() {
		const allTodosDBResponse = await pool.query('select * from todos', []);

		return allTodosDBResponse.rows;
	}

	static async createTodo(title, description, completed = 0, tagsId = []) {
		const result = await pool.query('insert into todos(title, description, completed, tags_id) values($1, $2, $3, $4) returning *', [
			title,
			description,
			completed,
			tagsId,
		]);

		return result.rows[0];
	}

	static async patchTodoById(id, title, description, completed = 0, tagsId = []) {
		const result = await pool.query('update todos set title=$1, description=$2, completed=$3, tags_id=$4 where id=$5 returning *', [
			title,
			description,
			completed,
			tagsId,
			id
		]);

		return result.rows[0];
	}

	static async deleteTodoById(id) {
		try {
			const findedTodosDBResponse = await pool.query('select * from todos where id = $1', [id]);
			if (findedTodosDBResponse.rowCount === 0) {
				throw new Error();
			}
			await pool.query('delete from todos where id = $1', [id]);
			return;
		} catch (e) {
			throw new Error('Ошибка удаления');
		}
	}
}
