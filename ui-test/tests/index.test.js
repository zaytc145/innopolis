import '@testing-library/jest-dom';
import testingLibrary from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import path from 'node:path';
import fs from 'node:fs';
import app from '../index.js';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const { screen } = testingLibrary;

let elements;

beforeEach(() => {
	const pathToHTML = path.join(__dirname, '..', 'index.html');
	const html = fs.readFileSync(pathToHTML, 'utf-8');

	document.body.innerHTML = html.toString();
	app();

	elements = {
		emailInput: screen.getByRole('textbox', { name: /email/i }),
		passwordInput: screen.getByRole('textbox', { name: /password/i }),
		genderInput: screen.getByRole('combobox', { name: /gender/i }),
		emailErrorBlock: document.getElementById('email-error'),
		passwordErrorBlock: document.getElementById('password-error'),
		genderErrorBlock: document.getElementById('gender-error'),
		submitButton: document.getElementById('submit'),
	};
});

test('Первая отрисовка формы', () => {
	expect(elements.emailErrorBlock).toHaveClass('d-none');
	expect(elements.passwordErrorBlock).toHaveClass('d-none');
	expect(elements.genderErrorBlock).toHaveClass('d-none');

	expect(elements.emailInput).not.toHaveClass('input-error');
	expect(elements.passwordInput).not.toHaveClass('password-error');
	expect(elements.genderInput).not.toHaveClass('gender-error');
});

test('Введены валидные данные', async () => {
	await userEvent.type(elements.emailInput, 'ya@ya.ru');
	expect(elements.emailInput).not.toHaveClass('input-error');
	expect(elements.emailErrorBlock).toHaveClass('d-none');

	await userEvent.type(elements.passwordInput, '123456');
	expect(elements.passwordInput).not.toHaveClass('password-error');
	expect(elements.passwordErrorBlock).toHaveClass('d-none');

	await userEvent.selectOptions(elements.genderInput,'1');
	expect(elements.genderInput).not.toHaveClass('gender-error');
	expect(elements.genderInput).toHaveValue('1');
	expect(elements.genderErrorBlock).toHaveClass('d-none');
});

test('Введены невалидные данные', async () => {
	await userEvent.type(elements.emailInput, 'ya.ru');
	expect(elements.emailInput).toHaveClass('input-error');
	expect(elements.emailErrorBlock).toBeInTheDocument();
	expect(screen.queryByText('Введите корректный email')).toBeInTheDocument();

	await userEvent.type(elements.passwordInput, '123');
	expect(elements.passwordInput).toHaveClass('input-error');
	expect(elements.passwordErrorBlock).toBeInTheDocument();
	expect(screen.queryByText('Пароль не может быть короче 6-и символов')).toBeInTheDocument();
});

test('Введены данные и поля очищены', async () => {
	await userEvent.type(elements.emailInput, 'ya.ru');
	await userEvent.clear(elements.emailInput);

	expect(elements.emailInput).toHaveClass('input-error');
	expect(elements.emailErrorBlock).toBeInTheDocument();
	expect(screen.queryByText('Email не может быть пустым')).toBeInTheDocument();
	expect(screen.queryByText('Введите корректный email')).not.toBeInTheDocument();

	await userEvent.type(elements.passwordInput, '123');
	await userEvent.clear(elements.passwordInput);

	expect(elements.passwordInput).toHaveClass('input-error');
	expect(elements.passwordErrorBlock).toBeInTheDocument();
	expect(screen.queryByText('Пароль не может быть пустым')).toBeInTheDocument();
	expect(screen.queryByText('Пароль не может быть короче 6-и символов')).not.toBeInTheDocument();

	await userEvent.selectOptions(elements.genderInput,'1');
	await userEvent.selectOptions(elements.genderInput,'');
	expect(elements.genderInput).toHaveClass('input-error');
	expect(elements.genderErrorBlock).toBeInTheDocument();
});

test('Комплексный тест', async () => {
	expect(elements.emailErrorBlock).toHaveClass('d-none');
	expect(elements.passwordErrorBlock).toHaveClass('d-none');
	expect(elements.genderErrorBlock).toHaveClass('d-none');

	expect(elements.emailInput).not.toHaveClass('input-error');
	expect(elements.passwordInput).not.toHaveClass('password-error');
	expect(elements.genderInput).not.toHaveClass('gender-error');

	await userEvent.type(elements.emailInput, 'ya.ru');
	expect(elements.emailInput).toHaveClass('input-error');
	expect(elements.emailErrorBlock).toBeInTheDocument();
	expect(screen.queryByText('Введите корректный email')).toBeInTheDocument();

	await userEvent.type(elements.passwordInput, '123');
	expect(elements.passwordInput).toHaveClass('input-error');
	expect(elements.passwordErrorBlock).toBeInTheDocument();
	expect(screen.queryByText('Пароль не может быть короче 6-и символов')).toBeInTheDocument();

	await userEvent.clear(elements.emailInput);
	await userEvent.type(elements.emailInput, 'ya@ya.ru');
	expect(elements.emailInput).not.toHaveClass('input-error');
	expect(elements.emailErrorBlock).toHaveClass('d-none');

	await userEvent.clear(elements.passwordInput);
	await userEvent.type(elements.passwordInput, '123456');
	expect(elements.passwordInput).not.toHaveClass('input-error');
	expect(elements.passwordErrorBlock).toHaveClass('d-none');

	await userEvent.selectOptions(elements.genderInput,'1');
	expect(elements.genderInput).not.toHaveClass('gender-error');
	expect(elements.genderInput).toHaveValue('1');
	expect(elements.genderErrorBlock).toHaveClass('d-none');
});

test('Проверка блокировки и разблокировки кнопки', async () => {
	expect(elements.submitButton).toHaveAttribute('disabled');

	await userEvent.type(elements.emailInput, 'ya.ru');
	await userEvent.type(elements.passwordInput, '123');

	expect(elements.submitButton).toHaveAttribute('disabled');

	await userEvent.clear(elements.emailInput);
	await userEvent.type(elements.emailInput, 'ya@ya.ru');

	expect(elements.submitButton).toHaveAttribute('disabled');

	await userEvent.clear(elements.passwordInput);
	await userEvent.type(elements.passwordInput, '123456');
	await userEvent.selectOptions(elements.genderInput,'1');

	expect(elements.submitButton).not.toHaveAttribute('disabled');

	await userEvent.clear(elements.emailInput);
	await userEvent.clear(elements.passwordInput);
	await userEvent.selectOptions(elements.genderInput,'');

	expect(elements.submitButton).toHaveAttribute('disabled');

	await userEvent.type(elements.emailInput, 'ya@ya.ru');

	expect(elements.submitButton).toHaveAttribute('disabled');

	await userEvent.type(elements.passwordInput, '123456');

	expect(elements.submitButton).toHaveAttribute('disabled');

	await userEvent.selectOptions(elements.genderInput,'1');

	expect(elements.submitButton).not.toHaveAttribute('disabled');
});
