import { setTaskAction, getTasks } from "./index"
import axios from "axios"

describe('Testa actions do index', () => {
    test('Testa setTasks todo action', () => {

        const task = {
            text: "dormir",
            day: "segunda"
        }

        const action = setTaskAction(task)

        expect(action.type).toEqual('SET_TASK')
        expect(action.payload).toEqual({ task })
    })
    // test("deve retornar task", async () => {
    //     const dispatch = jest.fn();

    //     axios.get = jest.fn(async () => ({
    //         data: {
    //             task: [{
    //                 text: "dormir",
    //                 day: "segunda"
    //             }]
    //         }
    //     }));

    //     await getTasks()(dispatch);

    //     expect(dispatch).toHaveBeenCalledWith({
    //         type: "SET_TASK",
    //         payload: {
    //             task: {
    //                 text: "dormir",
    //                 day: "segunda"
    //             }
    //         }
    //     })
    // })



})