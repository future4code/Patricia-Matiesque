import {getPostsAction, getPostsDetailAction, setCommentsAction} from './index'

describe('Testa actions do Index', () => { 
	test('Testa getpost do action', () => {
		// Preparacao
		const posts = 'todo de teste'

		// Execucao
		const action = getPostsAction(posts)

		// Verificação
		expect(action.type).toEqual('GET_POSTS')
		expect(action.payload).toEqual({posts})
	})

	test('Testa Post Detail do post action', () => {
		// Preparacao
		const idTeste = '1'

		// Execucao
		const action = getPostsDetailAction(idTeste)

		// Verificação
		const expectedAction = {
			type: 'GET_POSTS_DETAIL',
			payload: {
				todoId: idTeste
			}
		}

		expect(action).toEqual(expectedAction)
    })
    test('Testa comments do post action', () => {
		// Preparacao
		const post = '1'

		// Execucao
		const action = setCommentsAction(post)

		// Verificação
		const expectedAction = {
			type: 'SET_COMMENTS',
			payload: {
				post: post
			}
		}

		expect(action).toEqual(expectedAction)
	})
})