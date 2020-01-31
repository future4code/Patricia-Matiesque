import { setTaskAction } from "../actions/index"
import task from "./task"

describe('Testa a task do reducer', () => {
	test('Testa se settask achar um task', () => {
        const currentState = {
			allTask: []
        }    
        const action = setTaskAction([])

        const newState = task (currentState, action)

        expect(newState.allTask).toHaveLength(0)

   
    })
})

