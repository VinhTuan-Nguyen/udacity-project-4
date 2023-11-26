import * as uuid from 'uuid'
import { TodoItem } from '../models/TodoItem'
import { TodosAccess } from '../dataLayer/todosAcess'
import { AttachmentUtils } from '../helpers/attachmentUtils';
import { CreateTodo } from '../requests/CreateTodo'
import { UpdateTodo } from '../requests/UpdateTodo'

const todosAccess = new TodosAccess()
const attachmentUtils = new AttachmentUtils()

export async function updateTodos(todoId :string, updateTodo :UpdateTodo ) {
  todosAccess.updateTodo(todoId, updateTodo)
}

export async function createTodos(
  createTodoRequest: CreateTodo,
  jwtToken: string
): Promise<TodoItem> {

  const itemId = uuid.v4()

  return await todosAccess.createTodo({
    todoId: itemId,
    createdAt: new Date().toISOString(),
    name: createTodoRequest.name,
    dueDate: createTodoRequest.dueDate,
    done: false,
    attachmentUrl: await attachmentUtils.createAttachmentURL(itemId),
    userId: jwtToken
  })
}

export async function delTodosByTodoId(todoId :string) {
  todosAccess.delTodosByTodoId(todoId)
}

export async function getTodosByUserId(userId :string): Promise<TodoItem[]> {
  return todosAccess.getTodosByUserId(userId)
}
